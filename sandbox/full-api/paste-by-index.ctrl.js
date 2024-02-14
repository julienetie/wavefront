import { pasteByIndex } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteByIndex('#main-box-paste-by-index', collageView,1)

collage({
    heading: 'pasteByIndex()',
    comment: `
    Inserts inside target at the end
    `,
    collageClass: 'paste-by-index',
})