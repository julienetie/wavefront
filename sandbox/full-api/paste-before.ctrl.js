import { pasteBefore } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = pasteBefore('#main-box-paste-before', collageView)

collage({
    heading: 'pasteBefore()',
    comment: `
    Inserts before target
    `,
    collageClass: 'paste-before',
})