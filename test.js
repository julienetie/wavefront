import {
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
  removeDelegate
} from './src/index.js'

/*
VIEW */
const linkView = pasteInto('#root', ({ title, href }) => `<a data-link href="${href}"><h1>${title}</h1></a>`)

const writeOverLinkView = pasteInto('#root', ({ text, href }) => `<a data-something-else href="#${href}"><h1>H1<div>${text}</div>H12</h1></a>`)

/*
CONTROLLER */
const ref = 'Some name'

// Create and insert linkView
const params = {
  title: 'Test',
  href: '#test'
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
