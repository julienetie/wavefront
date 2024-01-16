import Benchmark from 'benchmark'

const suite = new Benchmark.Suite

// https://github.com/angular/angular/blob/e9c659a48674eef326b0f808aef4d4640337739e/packages/core/src/sanitization/url_sanitizer.ts#L36
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
const sanitizeUrl = url => {
    url = String(url)
    if (url.match(SAFE_URL_PATTERN)) return url
    return 'unsafe:' + url;
}

const generateElements = (withSanitize = false) => {
    const items = []
    if (withSanitize) {
        for (let i = 0; i < 10000; i++) {
            Date.now()
            const className = sanitizeUrl(Date.now().toString(36))
            const id = sanitizeUrl(Date.now().toString(36) + className)
            const dataTest = sanitizeUrl(className + id + Date.now())
            items.push(`<div class="${className}" id="${id}" data-test="${dataTest}"><div>`)
        }
    } else {
        for (let i = 0; i < 10000; i++) {
            Date.now()
            const className = Date.now().toString(36)
            const id = Date.now().toString(36) + className
            const dataTest = className + id + Date.now()
            items.push(`<div class="${className}" id="${id}" data-test="${dataTest}"><div>`)
        }
    }
}

suite
    .add('generate-elements#without-sanitizer', () => {
        generateElements()
    })
    .add('generate-elements#with-sanitizer', () => {
        generateElements(true)
    })
    .on('complete', () => {
        console.log(suite[0].toString())
        console.log(suite[1].toString())
    })
    .run({
        async: true
    })


