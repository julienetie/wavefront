/* 
Solid.js example here: https://www.solidjs.com/examples/context */

import { insertInto, listenTo, mutate } from '../../anti-framework.js'

const defaultColor = `#335d92`

const counterView = insertInto('#root', ({defaultColor}) => `
    <h1 id="example" style="color: ${defaultColor};">Context Example</h1>
    <input id="color-picker" type="color" name="color" value="${defaultColor}">
    <label for="color">Change color theme</label>
`)

counterView({defaultColor})

listenTo('#color-picker', 'input', ({target}) => {
    mutate('#example', el => el.style.color = target.value)
})
