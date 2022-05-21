import { paste } from './collarge.js'
import { getSlate } from './slate.js'

describe('Collarge Paste:', () => {
    it('Should paste a H1 tage with text', () => {
        const text = 'Collarge Paste'
        const h1View = paste('#paste-placeholder', ({ text }) => `
            <h1 id="paste">${text}</h1>
        `)
        h1View({ text })

        const h1 = document.querySelector('#paste')
        const pastePlaceholder = document.querySelector('#paste-placeholder')
        
        expect(h1.tagName === 'H1')
        expect(h1.textContent === text)
        expect(pastePlaceholder === null)
    });
});
