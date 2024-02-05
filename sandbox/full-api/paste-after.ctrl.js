import { pasteAfter } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteAfter('#main-box-paste-after', collageView)

collage({
    heading: 'pasteAfter()',
    comment: `
    Inserts after target
    `,
    collageClass: 'paste-after',
})