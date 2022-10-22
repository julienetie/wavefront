/*
Frame View */
export const frameView = ({ boxesStr }) => `
  <!-- frameView = pasteInto('/', ({boxesStr}) -->
  <div class="frame">
  
    <div class="boxes">
      <!-- boxesStr = sequence~ -->
      ${boxesStr}
    </div>

    
    <div class="level one">
      <div class="level two">
        <div class="level three">
          <div class="level four"></div>
        </div>
      </div>
    </div>

  </div>
`

/*
Box View */
export const boxView = n => `<div class="box">${n}</div>`
