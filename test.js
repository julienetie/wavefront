import {
  paste,
  pasteInto,
  listenTo,
  stencilInto,
  mutate,
  removeSlate,
  removeListener,
  removeWithin,
  remove,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  waveEnv,
  alter,
  alterAll,
} from './src/index.js'

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
listenTo('[data-link]', 'click', ({
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
listenTo('h1 > div', 'mouseover', ({
  target
}) => {
  console.log('mouseover:', target)
})

removeListener('h1 > div', 'mouseover')

removeWithin('h1')
remove('h1')

createDelegate('#root > a', 'click', e => console.log(`What is going on ${e}`))

let count = 0
document.addEventListener('click', (e) => {
  if (suspect(e.target).equals('#root > a')) {
    trigger('#root > a', 'click', e)
  }
  count++
  if (count > 3) {
    removeDelegate('#root > a', 'click')
  }
})

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