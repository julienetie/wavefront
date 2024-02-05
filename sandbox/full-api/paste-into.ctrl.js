import { pasteInto } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-paste-into', collageView)

collage({
    heading: 'pasteInto()',
    comment: `
    Removes all inner events, 
    Removes all childNodes,
    Inserts into target
    `,
    collageClass: 'paste-into',
})