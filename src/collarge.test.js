import { paste } from './collarge.js'
import { patterns } from './helpers.js'
// import { getSlate } from './slate.js'

const { placeholder, forbiddenOperators } = patterns

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
            <h1 id="paste" data-patterns="-,+,*,/,%,=,!,?,:,<,>,&,|,~,^,typeof,instanceof">${text}</h1>
        `)
    h1View({ text })

    const h1 = document.querySelector('#paste')
    const pastePlaceholder = document.querySelector('#paste-placeholder')

    expect(h1.tagName === 'H1')
    expect(h1.textContent === text)
    expect(pastePlaceholder === null)
  });
  /*
  These tests cannot be implicitly verfified, it must be tested with syntax (No DRY) */
  // -
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '-'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 - 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '-' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '+'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 + 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '+' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '*'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 * 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '*' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '/'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 / 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '/' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '%'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 % 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '%' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '='`, () => {
    let hasError
    var d
    try { paste('#paste-placeholder', () => `<span>${d = 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '=' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '!'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${!2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '!' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '?'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 ? 2 : 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '?' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains ':'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${{ test: 123 }}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. ':' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '<'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 < 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '<' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '>'`, () => {
    let hasError
    var d
    try { paste('#paste-placeholder', () => `<span>${2 > 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '>' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains '&'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 & 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '&' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template's placeholder contains '|'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 | 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '|' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template's placeholder contains '~'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${~2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '~' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template's placeholder contains '^'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 ^ 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. '^' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
  it(`Should throw a SyntaxError when a declarative template's placeholder contains 'typeof'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${typeof (2)}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. 'typeof' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template's placeholder contains 'instanceof'`, () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 instanceof Element}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `Operators are not allowed in declarative templates. 'instanceof' was found within 'declarativeTemplate'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template is declared using 'function' syntax'`, () => {
    let hasError
    try {
      paste('#paste-placeholder', function () {
        return `<div></div>`
      })
    } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `'Declarative templates must be declared with an arrow function expression '=>'`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it(`Should throw a SyntaxError when a declarative template contains a return statement'`, () => {
    let hasError
    try {
      paste('#paste-placeholder', () => {
        return `<div></div>`
      })
    } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        `'return' statements are not allowed in declarative templates.`
      )
    }
    if (!hasError) throw Error('No error thrown')
  })
})
