import { insertInto } from '../../anti-framework.js'
const raf = window.requestAnimationFrame
const greeting = 'Welcome to Anti-Framework'
const text = greeting.split('')
let fwd = true
let i = 1
let j = 0

const helloView = insertInto('#root', ({ greeting }) => `<h1>${greeting}</h1>`)
helloView({ greeting })

const loop = (timestamp) => {
  j++
  if (j === 5) {
    if (i === 1) fwd = true
    if (i === text.length) fwd = false
    fwd ? i++ : i--
    helloView({ greeting: text.slice(0, i).join('') })
    j = 0
  }
  raf(loop)
}
raf(loop)
