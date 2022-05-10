import { insertInto } from '../../anti-framework.js'
let n = 0

const counterView = insertInto('#root', ({ n }) => `
    <button value="-">-</button>
    <button value="+">+</button>
    <span>${n}</span>
`)

document.addEventListener('mousedown', ({ target }) => {
  if (target.value === '+') n++; if (target.value === '-') n--
  counterView({ n })
})

counterView({ n })
