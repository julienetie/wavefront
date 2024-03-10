import { addListener, removeListener, pasteInto } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-remove-listener', collageView)

collage({
    heading: 'removeListener()',
    comment: `
    Remove single event
    on second click
    `,
    collageClass: 'remove-listener',
})

let count = 0
addListener('#main-box-remove-listener', 'click', ({ target }) => {
    count++
    if(count === 2) removeListener('#main-box-remove-listener')
    
    console.log('Clicked', target)
})