import { pasteInto, sequence, empty, waveEnv } from '../../src/index.js'
import { boxView, frameView } from './views.js'

// Boxes
const boxesStr = sequence(9, 1).map(boxView).join(empty).trim()

// Paste the Frame View into the root with the boxes
const frame = pasteInto('/', frameView)
frame({ boxesStr })
