import { pasteInto, sequence, empty } from '../../src/index.js'
import { boxView, frameView } from './views.js'

// Boxes
const boxesStr = sequence(11, 1).map(boxView).join(empty)

// Paste the Frame View into the root with the boxes
const frame = pasteInto('/', frameView)
frame({ boxesStr })
