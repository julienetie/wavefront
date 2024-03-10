import { addListener, pasteInto } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-add-listener', collageView)

collage({
    heading: 'addListener()',
    comment: `
    listen to single event.
    `,
    collageClass: 'add-listener',
})

addListener('#main-box-add-listener', 'click', ({ target }) => {
    console.log('Clicked', target)
})