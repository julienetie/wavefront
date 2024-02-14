import { pasteEnd } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteEnd('#main-box-paste-end', collageView)

collage({
    heading: 'pasteEnd()',
    comment: `
    Inserts inside target at the end
    `,
    collageClass: 'paste-end',
})