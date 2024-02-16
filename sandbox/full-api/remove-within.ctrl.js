import { pasteInto, removeWithin } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-remove-within', collageView)

collage({
    heading: 'pasteInto()',
    comment: `
    Removes all inner events, 
    Removes all childNodes,
    Inserts into target
    `,
    collageClass: 'paste-into',
})

removeWithin('main section:nth-child(9) .main-box')