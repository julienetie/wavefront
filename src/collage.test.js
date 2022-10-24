/* global describe, beforeEach, afterEach, it, expect, Element */
import { paste, pasteInto, pasteBefore } from './collage.js'
// import { patterns } from './helpers.js'
// import { getSlate } from './slate.js'

// const { placeholder, forbiddenOperators } = patterns

let pastePlaceholder
describe('Collage API:', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('afterbegin', '<div id="paste-placeholder"></div>')
    pastePlaceholder = document.querySelector('#paste-placeholder')
  })
  afterEach(() => pastePlaceholder && pastePlaceholder.remove())

  it('Should paste a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = paste('#paste-placeholder', ({ text }) => `
            <h1 id="paste" data-patterns="-,+,*,/,%,=,!,?,:,<,>,&,|,~,^,typeof,instanceof">${text}</h1>`
    )
    h1View({ text })

    const h1 = document.querySelector('#paste')
    const pastePlaceholder = document.querySelector('#paste-placeholder')

    expect(h1.tagName).to.equal('H1')
    expect(h1.textContent).to.equal(text)
    expect(pastePlaceholder).to.equal(null)
  })



  it('Should pasteInto a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = pasteInto('#paste-placeholder', ({ text }) => `
            <h1 id="paste" data-patterns="-,+,*,/,%,=,!,?,:,<,>,&,|,~,^,typeof,instanceof">${text}</h1>`
    )
    h1View({ text })

    const h1 = pastePlaceholder.querySelector('#paste')
    
    expect(h1.tagName).to.equal('H1')
    expect(h1.textContent).to.equal(text)
    expect(pastePlaceholder.firstElementChild).to.equal(h1)

  })

  it('Should pasteBefore a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = pasteBefore('#paste-placeholder', ({ text }) => `
            <h1 id="paste" data-patterns="-,+,*,/,%,=,!,?,:,<,>,&,|,~,^,typeof,instanceof">${text}</h1>`
    )
    h1View({ text })
    const elementInsertedBefore = pastePlaceholder.previousElementSibling
    expect(elementInsertedBefore.tagName).to.equal('H1')
    expect(elementInsertedBefore.textContent).to.equal(text)
  })

})


describe('validateTemplateHandler:', () => {
  /*
  These tests cannot be implicitly verfified, ideally they should be tested with syntax (Avoid DRY) */
  // -
  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'-\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 - 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'-\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'+\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 + 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'+\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'*\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 * 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'*\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'/\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 / 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'/\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'%\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 % 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'%\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'=\'', () => {
    let hasError
    let d // eslint-disable-line
    try { paste('#paste-placeholder', () => `<span>${d = 2}</span>`) } catch (err) { // eslint-disable-line
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'=\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'!\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${!2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'!\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'?\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 ? 2 : 2}</span>`) } catch (err) { // eslint-disable-line
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'?\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \':\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${{ test: 123 }}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \':\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'<\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 < 2}</span>`) } catch (err) { // eslint-disable-line
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'<\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'>\'', () => {
    let hasError
    let d // eslint-disable-line
    try { paste('#paste-placeholder', () => `<span>${2 > 2}</span>`) } catch (err) { // eslint-disable-line
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'>\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'&\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 & 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'&\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'|\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 | 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'|\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'~\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${~2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'~\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'^\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 ^ 2}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'^\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'typeof\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${typeof (2)}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'typeof\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template\'s placeholder contains \'instanceof\'', () => {
    let hasError
    try { paste('#paste-placeholder', () => `<span>${2 instanceof Element}</span>`) } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        'Operators are not allowed in declarative templates. \'instanceof\' was found within \'declarativeTemplate\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template is declared using \'function\' syntax\'', () => {
    let hasError
    try {
      paste('#paste-placeholder', function () {
        return `<div></div>`
      })
    } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        '\'Declarative templates must be declared with an arrow function expression \'=>\''
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

  it('Should throw a SyntaxError when a declarative template contains a return statement\'', () => {
    let hasError
    try {
      paste('#paste-placeholder', () => {
        return `<div></div>`
      })
    } catch (err) {
      hasError = err
      expect(err).to.have.property('message',
        '\'return\' statements are not allowed in declarative templates.'
      )
    }
    if (!hasError) throw Error('No error thrown')
  })

})
