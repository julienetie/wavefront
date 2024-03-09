import { listenTo, dismiss, pasteInto } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-dismiss', collageView)

collage({
    heading: 'dismiss()',
    comment: `
    Remove single event
    on second click
    `,
    collageClass: 'dismiss',
})

let count = 0
listenTo('#main-box-dismiss', 'click', ({ target }) => {
    count++
    if(count === 2) dismiss('#main-box-dismiss')
    
    console.log('Clicked', target)
})