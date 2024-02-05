import { paste } from '../../src/index.js'
import { collageView } from './collage.view.js'

const collage = paste('#main-box-paste', collageView)

collage({
    heading: 'paste()',
    comment: `
    Removes all events,
    removes all childNodes, 
    replaces the target`,
    collageClass: 'paste'
})