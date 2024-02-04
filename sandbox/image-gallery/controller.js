// ./controller.js
import { pasteInto, waveEnv, empty } from '../../src/index.js'
import { containerView, imageView } from './view.js'

// Set the env
waveEnv.set()

// Get the data
let imagesData
try {
    const response = await fetch('./images.json')
    if (!response.ok) throw new Error(`Network response was not ok, status: ${response.status}`)
    imagesData = await response.json()
} catch (e) {
    console.error('Fetch error:', e)
}

// Create the image HTML string
const images = imagesData.map(({ style, url }) => imageView({ type: style, url })).join(empty)

// Target the container to #root selector
const container = pasteInto('/', containerView)

// Insert the images and write to the DOM
container({ images })
