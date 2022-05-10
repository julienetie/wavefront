import { insertInto } from '../../anti-framework.js'

const helloView = insertInto('#root', ({ greeting }) => `<h1>${greeting}</h1>`)
helloView({ greeting: 'Hello World!' })
