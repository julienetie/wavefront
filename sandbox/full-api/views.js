/*
Frame View */
export const frameView = ({ boxesStr }) => `
  <!-- frameView = pasteInto('/', ({boxesStr}) -->
  <div class="frame">
    <!-- boxesStr = sequence~ -->
    ${boxesStr}
  </div>
`

/*
Box View */
export const boxView = n => `<div class="box">${n}</div>`
