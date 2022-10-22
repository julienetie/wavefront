/*
ticks.js */
/*
clock.js */
import { insertInto, empty, mutate, raf } from '../../anti-framework.js'

const makeDegList = (length, offset) => [...new Array(length)].map((value, i) => i * offset)
const fiveMinuteTicksAngles = makeDegList(12, 30)
const minuteTicksAngles = makeDegList(60, 6)

const fiveMinuteTicksStr = fiveMinuteTicksAngles.map(rotate => `
    <line 
        stroke="currentColor"
        stroke-linecap="round"
        y1="-90"
        y2="-95"
        stroke-width="2"
        class="hour"
        transform="rotate(${rotate})">
    </line>
`).join(empty)

const minuteTicksStr = minuteTicksAngles.map(rotate => `
<line 
    stroke="currentColor"
    stroke-linecap="round"
    y1="-93"
    y2="-95"
    stroke-width="1"
    class="subsecond"
    transform="rotate(${rotate})">
</line>`
).join(empty)

/*
export {
    fiveMinuteTicksStr,
    minuteTicksStr
}
*/

/*
clock-view.js */
const clockView = insertInto('#root', ({ minuteTicksStr, fiveMinuteTicksStr }) => `
    <div class="clock">
        <svg viewBox="0 0 200 200" width="95vh">
            <g transform="translate(100, 100)">
                <circle class="text-neutral-900" r="99" fill="white" stroke="currentColor"></circle>
                ${minuteTicksStr}
                ${fiveMinuteTicksStr}
                <line id="subsecond" stroke="currentColor" stroke-linecap="round" y2="-85" stroke-width="5" class="subsecond"
                transform="rotate(0)"></line>
                <line id="hour" stroke="currentColor" stroke-linecap="round" y2="-50" stroke-width="4" class="hour"
                transform="rotate(0)"></line>
                <line id="minute" stroke="currentColor" stroke-linecap="round" y2="-70" stroke-width="3" class="minute"
                transform="rotate(0)"></line>
                <line id="second" stroke="currentColor" stroke-linecap="round" y2="-80" stroke-width="2" class="second"
                transform="rotate(0)"></line>
            </g>
        </svg>
    </div>
`)
// import { minuteTicksStr, fiveMinuteTicksStr } from 'ticks.js'
const fullDeg = 360

const rotate = (selector, deg) => {
  mutate(selector, el => el.setAttribute('transform', `rotate(${deg})`))
}

clockView({
  minuteTicksStr,
  fiveMinuteTicksStr
})

const loop = (timestamp) => {
  const d = new Date()
  rotate('#second', 6 * d.getSeconds() + (6 * 0.001 * d.getMilliseconds()))
  rotate('#subsecond', fullDeg * 0.001 * d.getMilliseconds())
  rotate('#minute', 6 * d.getMinutes())
  rotate('#hour', 30 * (d.getHours() % 12) + d.getMinutes() / 2)
  raf(loop)
}
raf(loop)
