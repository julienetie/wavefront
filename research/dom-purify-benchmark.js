import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import Benchmark from 'benchmark'

const suite = new Benchmark.Suite

const window = new JSDOM('').window
const purify = DOMPurify(window)



const dirty = `
<p>HELLO</p><style>*{x:expression(alert(1))}</style>
<iframe/\/src=JavScript:alert&lpar;1)></ifrAMe><br>goodbye</p><h1>not me!</h1>
`

// Specify a configuration directive, only <P> elements allowed
// Note: We want to also keep <p>'s text content, so we add #text too
const config = { ALLOWED_TAGS: ['p', '#text'], KEEP_CONTENT: false }
// const clean = purify.sanitize(dirty, config)


suite
    .add('purify#without-sanitizer', () => {
        for (let i = 0; i < 100; i++) {
            // console.log('clean', dirty)
            const a = dirty
        }
    })
    .add('purify#with-sanitizer', () => {
        for (let i = 0; i < 100; i++) {
            const clean = purify.sanitize(dirty, config)
            // console.log('clean', clean)
            const a = clean
        }
    })
    .on('complete', () => {
        console.log(suite[0].toString())
        console.log(suite[1].toString())
    })
    .run({
        async: true
    })