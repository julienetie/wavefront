import { paste } from './collarge.js'
import { patterns } from './helpers.js'
// import { getSlate } from './slate.js'
let pastePlaceholder
describe('Collarge Paste:', () => {
    beforeEach(() => {
        document.body.insertAdjacentHTML('afterbegin', `<div id="paste-placeholder"></div>`)
        pastePlaceholder = document.querySelector('#paste-placeholder')
    });
    afterEach(() => pastePlaceholder && pastePlaceholder.remove());
    it('Should paste a H1 tage with text', () => {
        const text = 'Collarge Paste'
        const h1View = paste('#paste-placeholder', ({ text }) => `
            <h1 id="paste" data-patterns="${patterns.forbiddenOperators}">${text}</h1>
        `)
        h1View({ text })

        const h1 = document.querySelector('#paste')
        const pastePlaceholder = document.querySelector('#paste-placeholder')

        expect(h1.tagName === 'H1')
        expect(h1.textContent === text)
        expect(pastePlaceholder === null)
    });

    it('Should throw a type error when logic is mixed with syntax', () => {
        let hasError
        try {
            paste('#paste-placeholder', () => `<span>${2 + 2}</span>`)
            // throw new Error('\'+\' is not allowed in the viewTemplate')
        } catch (err) {
            hasError = err
            expect(err).to.have.property('message', '\'+\' is not allowed in the viewTemplate')
        }
        if(!hasError) throw Error('No error thrown')
    });
});
