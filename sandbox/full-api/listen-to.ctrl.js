import { listenTo, pasteInto } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-listen-to', collageView)

collage({
    heading: 'listenTo()',
    comment: `
    listen to single event.
    `,
    collageClass: 'listen-to',
})

listenTo('#main-box-listen-to', 'click', ({ target }) => {
    console.log('Clicked', target)
})