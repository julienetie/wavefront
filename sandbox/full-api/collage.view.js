// Defaults are not supported and have no plans to be supported.
export const collageView = ({heading, comment, collageClass }) => `
    <div class="collage ${collageClass}">
        <h3>${heading}</h3>
        <p>${comment}</p>
    </div>
`