import { pasteInto, remove } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteInto('#main-box-remove', collageView)

collage({
    heading: 'pasteInto()',
    comment: `
    Removes all inner events, 
    Removes all childNodes,
    Inserts into target
    `,
    collageClass: 'paste-into',
})

remove('main section:nth-child(8) .main-box .collage')