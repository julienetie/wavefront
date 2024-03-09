import { _ } from '../../src/index.js'

// Defaults are not supported and have no plans to be supported.
export const collageView = ({ heading, comment, collageClass }) => _`
    <div class="collage ${collageClass}">
        <h3>${heading}</h3>
        <p>${comment}</p>
    </div>
`