import {
  paste,
  pasteInto,
  stencilInto,
  mutate,
  removeSlate,
  removeWithin,
  remove,
  events,
  bound,
  waveEnv,
  alter,
  alterAll,
  target,
  pending,
} from '../src/index.js'

console.time('wavefront:test.js')
waveEnv.set()

/*
VIEW */
const linkView = pasteInto('#root', ({ title, href }) => `<a data-link href="${href}"><h1>${title}</h1></a>`)

const writeOverLinkView = pasteInto('#root', ({ text, href }) => `
<a data-something-else href="#${href}">
  <h1>H1<div>${text}</div>
  H12
  </h1>
  <span class="box">Box</span>
</a>
`)

/*
CONTROLLER */
const ref = 'Some name'

// Create and insert linkView
const params = {
  title: 'Test',
  href: '#test',
}
linkView(params)

// Listen to clicks on data-link
bound.addListener('[data-link]', 'click', ({
  target
}) => {
  console.log('click', target.parentElement.href)
})

// Write over linkView
const params2 = {
  text: 'This is a div',
  href: '#test123'
}
writeOverLinkView(params2, ref)

stencilInto(ref, {
  text: 'The text has changed',
  href: 'http://google.com'
})

const params3 = {
  text: '333333333333333',
  href: 'http://google.co.uk'
}

stencilInto(ref, params3, (el) => {
  console.log(el)
  el.style.background = 'red'
  el.style.width = '5rem'
  el.style.height = '5rem'
  el.style.display = 'block'
  return el
})

mutate('#root', el => {
  el.querySelector('a').style.background = 'lime'
  console.log('eeee', el)
})

// Listen to clicks on data-link
bound.addListener('h1 > div', 'mouseover', ({
  target
}) => {
  console.log('mouseover:', target)
})

bound.removeListener('h1 > div', 'mouseover')

// removeWithin('h1')
// remove('h1')

// createDelegate('#root > a', 'click', e => console.log(`What is going on ${e}`))

// let count = 0
// document.addEventListener('click', (e) => {
//   if (suspect(e.target).equals('#root > a')) {
//     trigger('#root > a', 'click', e)
//   }
//   count++
//   if (count > 3) {
//     removeDelegate('#root > a', 'click')
//   }
// })

window.removeSlate = removeSlate
console.timeEnd('wavefront:test.js')

console.info('//////////////////////////////////////////////////////////////////////////////////////////////')
// Alter - messy sandbox ////

// Get attribute
const testClass = alter('#test').attr('class')
console.log('Get attribute:', testClass)

// Get multiple attributes as an object
const testClass2 = alter('#test').attr('class, id, data-abc')
console.log('Get multiple attributes as an object:', testClass2)

// Set attribute
alter('#test').attr('class', 'side-bar')
console.log('Set attribute:', document.querySelector('#test').className)

// Set multple attributes by callback
alter('#test > section')
  .attr((obj) => {
    console.log('obj:', obj)
    return {
      'data-test': 123,
      class: 'some-class',
      id: 'new-id'
    }
  })
console.log('Set multiple attribute by callback:', Object.entries(document.querySelector('#test > section').attributes))



// Set multple attributes by object
alter('#test > section')
  .attr({
    href: 'https://hello.com',
    name: 'name',
    'data-multiple': 'multi',
  })
console.log('Set multiple attribute by callback:', Object.entries(document.querySelector('#test > section').attributes))

// Set style by function
alter('#test')
  .attr('style', styleObj => {
    console.log('styleObj', styleObj)
    return {
      color: 'red',
      background: 'blue',
      'margin-top': '5rem',
      'z-index': '10',
      'display': 'grid',
    }
  })

// Set style by object
alter('#test')
  .attr('style', {
    color: 'darkgreen',
    background: 'yellow',
    'margin-top': '2rem',
    'z-index': '10',
    'display': 'grid',
  })

console.info('Props//////////////////////////////////////////////////////////////////////////////////////////////')
// Alter - messy sandbox ////

// Get attribute
const propClass = alter('#test').prop('className')
console.log('Get className:', propClass)

// Get multiple attributes as an object
const propGet = alter('#test').prop('className, id, tagName')
console.log('Get multiple props as an object:', propGet)

// Set prop
alter('#test').prop('className', 'This is new Class')
console.log('Set prop:', document.querySelector('#test').className)

// Set multple attributes by callback
alter('#test > section')
  .prop((obj) => {
    console.log('obj:', obj)
    return {
      textContent: 'This is some text',
      className: 'apple',
      checked: true
    }
  })
const testEl = document.querySelector('#test > section')
console.log('Set multiple props by callback:', testEl.textContent, testEl.className, testEl.checked)


// Set multple attributes by object
alter('#test > section')
  .attr({
    innerText: 'https://hello.com',
    checked: false,
    offsetWidth: 1000,
  })
const testEl2 = document.querySelector('#test > section')
console.log('Set multiple props by callback:', testEl2.innerText, testEl2.checked, testEl2.offsetWidth)


console.info('ALL //////////////////////////////////////////////////////////////////////////////////////////////')
// Alter - messy sandbox ////

// Get attribute
const testClassAll = alterAll('[data-some-span').attr('class')
console.log('Get attribute:', testClassAll)

// Get multiple attributes as an object
const testClass2All = alterAll('[data-some-span').attr('class, id, data-abc')
console.log('Get multiple attributes as an object:', testClass2All)

// Assume alterAll works as expected


// classList
alter('.last-span').attr('style', { border: '1px solid red', display: 'block'})

alter('.last-span ol li:nth-child(1)').prop('classList').add('test-123')


///////////////////////////////////////////////////////
///////// Event Delegation ////////////////////////////
// const pending = Symbol('pending')


// events.create({
//   click: {
//     document
//   },
//   'click:2': {
//    pending,
//    options: true 
//   },
//   'mousemove:iframe': {
//     pending,
//     options: true
//   }
// })

// const iframe = document.querySelector('iframe')
// events.setPending('click:2 mousemove:iframe', iframe.contentDocument)
// // events.setPending('mousemove:iframe', iframe.contentDocument)

// target('click', ({target}) => {
//   console.log('Global "click" Delegation', target)
// })

// target('click:2 mousemove:iframe', ({target}) => {
//   console.log('iframe "click:2" delegation', target)
// })

// target('click').closest('#a1', ({target}, suspect) => {
//   console.log('Suspect', target, 'closest', suspect)
// })

// target('click').equals('[data-test="123"]', ({target}, suspect) => {
//   console.log('Suspect 2 ', target, 'equals', suspect)
// })

// target('click').contains('.box', ({target}, suspect) => {
//   console.log('Suspect 3 ', target, 'contains', suspect)
// })

events.venue({
  click: {
      document
  },
  click_iframe1: {
      pending
  },
  dblclick:{
    document
  },
  resize: {
      window
  },
  input: {
      document,
      options: true
  },
  transitionend: {
      document,
      options: true
  },
  focus: {
      document,
      options: {
          once: true
      }
  },
  mousemove: {
      document
  }
})
const iframe1 = document.querySelector('iframe')
events.setPending('click_iframe1', iframe1.contentDocument)

// Matches all elements
// target('click', 'mousemove', 'dblclick', e => { console.log('Match all:', e.type)})
// .ref('1234')


// events.suspend('1234')
// events.resume('1234')
// All listener names 
// 

// if(ref === storedRef)

// Matches all anchor tags and their descendents
// target('click').closest('#closest', 'body', ({target}, suspect) => {
//   console.log('closest', target, 'to', suspect)
// }).ref('abc')

// events.suspend('abc')
// events.resume('abc')

// // Matches all elements that are descendents of an anchor tag
// target('click').contains('#contains', ({target}, suspect) => {
//   console.log('contains', target, 'to', suspect)
// })

// // Matches anchor tags
// target('click').equals('#equals', (e, suspect) => {
//   e.preventDefault()
//   console.log('equals', e.target, 'to', suspect)
// })

// target('click_iframe1').closest('header', ({target}) =>{
//   console.log('target:::Iframe', target)
// })


// bound.addListener('#closest', 'click', ({target, type}) =>{
//   console.log('bound events:::', target, type)
// }, false)