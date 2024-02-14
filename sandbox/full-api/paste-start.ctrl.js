import { pasteStart } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteStart('#main-box-paste-start', collageView)

collage({
    heading: 'pasteStart()',
    comment: `
    Inserts inside target at the start
    `,
    collageClass: 'paste-start',
})