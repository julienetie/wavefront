/* global describe, beforeEach, afterEach, it, expect, Element */
import {
  paste,
  pasteInto,
  pasteBefore,
  pasteAfter,
  pasteStart,
  pasteEnd,
  removeWithin,
  remove,
  mutate
} from './collage.js'
import { waveEnv } from './environment.js'
// import { patterns } from './helpers.js'
// import { getSlate } from './slate.js'

waveEnv.set()

// const { placeholder, forbiddenOperators } = patterns

let d // eslint-disable-line
const invalidList = [
  {
    invalidDT: () => `<span>${2 - 2}</span>`,
    operator: '-'
  },
  {
    invalidDT: () => `<span>${2 + 2}</span>`,
    operator: '+'
  },
  {
    invalidDT: () => `<span>${2 * 2}</span>`,
    operator: '*'
  },
  {
    invalidDT: () => `<span>${2 / 2}</span>`,
    operator: '/'
  },
  {
    invalidDT: () => `<span>${2 % 2}</span>`,
    operator: '%'
  },
  {
    invalidDT: () => `<span>${d = 2}</span>`,
    operator: '='
  },
  {
    invalidDT: () => `<span>${!2}</span>`,
    operator: '!'
  },
  {
    invalidDT: () => `<span>${2 ? 2 : 2}</span>`,
    operator: '?'
  },
  {
    invalidDT: () => `<span>${{ test: 123 }}</span>`,
    operator: ':'
  },
  {
    invalidDT: () => `<span>${2 < 2}</span>`,
    operator: '<'
  },
  {
    invalidDT: () => `<span>${2 > 2}</span>`,
    operator: '>'
  },
  {
    invalidDT: () => `<span>${2 & 2}</span>`,
    operator: '&'
  },
  {
    invalidDT: () => `<span>${2 | 2}</span>`,
    operator: '|'
  },
  {
    invalidDT: () => `<span>${~2}</span>`,
    operator: '~'
  },
  {
    invalidDT: () => `<span>${2 ^ 2}</span>`,
    operator: '^'
  },
  {
    invalidDT: () => `<span>${typeof (2)}</span>`,
    operator: 'typeof'
  },
  {
    invalidDT: () => `<span>${2 instanceof Element}</span>`,
    operator: 'instanceof'
  }
]

let pastePlaceholder
describe('Collage API:', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('afterbegin', '<div id="paste-placeholder"></div>')
    pastePlaceholder = document.body.querySelector('#paste-placeholder')
  })
  afterEach(() => pastePlaceholder && pastePlaceholder.remove())

  it('Should paste a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = paste('#paste-placeholder', ({ text }) => `
            <h1 id="paste" >${text}</h1>`
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
            <h1 id="paste" >${text}</h1>`
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
            <h1 id="paste" >${text}</h1>`
    )
    h1View({ text })
    const elementInsertedBefore = pastePlaceholder.previousElementSibling
    expect(elementInsertedBefore.tagName).to.equal('H1')
    expect(elementInsertedBefore.textContent).to.equal(text)
  })

  it('Should pasteAfter a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = pasteAfter('#paste-placeholder', ({ text }) => `
            <h1 id="paste">${text}</h1>`
    )
    h1View({ text })
    const elementInsertedAfter = pastePlaceholder.nextElementSibling
    expect(elementInsertedAfter.tagName).to.equal('H1')
    expect(elementInsertedAfter.textContent).to.equal(text)
  })

  it('Should pasteStart a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = pasteStart('#paste-placeholder', ({ text }) => `
            <h1 id="paste">${text}</h1>`
    )
    h1View({ text })
    const elementInsertedAtStart = pastePlaceholder.firstElementChild
    expect(elementInsertedAtStart.tagName).to.equal('H1')
    expect(elementInsertedAtStart.textContent).to.equal(text)
    // @todo, check child elements are preserved
  })

  it('Should pasteEnd a H1 tag with text', () => {
    const text = 'Collage Paste'
    const h1View = pasteEnd('#paste-placeholder', ({ text }) => `
            <h1 id="paste">${text}</h1>`
    )
    h1View({ text })
    const elementInsertedAtEnd = pastePlaceholder.lastElementChild
    expect(elementInsertedAtEnd.tagName).to.equal('H1')
    expect(elementInsertedAtEnd.textContent).to.equal(text)
    // @todo, check child elements are preserved
  })

  it('removeWithin: Should remove all internal nodes', () => {
    const wrapper = pasteInto('#paste-placeholder', ({ text1, text2, text3 }) => `
      <span >${text1}</span>
      <span >${text2}</span>
      <span >${text3}</span>
    `)
    wrapper({ text1: 'one', text2: 'two', text3: 'three' })
    removeWithin('#paste-placeholder')

    expect(document.querySelector('#paste-placeholder')).to.not.equal(null)
    expect(document.querySelector('#paste-placeholder').firstElementChild).to.equal(null)
    // @todo check removed events
  })

  it('remove: Should remove a given element', () => {
    const wrapper = pasteInto('#paste-placeholder', ({ text1, text2, text3 }) => `
      <span >${text1}</span>
      <span >${text2}</span>
      <span >${text3}</span>
    `)
    wrapper({ text1: 'one', text2: 'two', text3: 'three' })
    remove('#paste-placeholder')

    expect(document.querySelector('#paste-placeholder')).to.equal(null)
    // @todo check removed events
  })

  it('mutate: Should modify an element directly', () => {
    const content = 'content'
    mutate('#paste-placeholder', el => {
      el.textContent = content
    })

    expect(document.querySelector('#paste-placeholder').textContent).to.equal(content)
  })
})

describe('validateTemplateHandler:', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('afterbegin', '<div id="paste-placeholder"></div>')
    pastePlaceholder = document.body.querySelector('#paste-placeholder')
  })
  afterEach(() => pastePlaceholder && pastePlaceholder.remove(), pastePlaceholder = null)
  /*
  These tests cannot be implicitly verfified, ideally they should be tested with syntax (Avoid DRY) */
  // -
  it('Should paste a H1 tag containing an attribute with forbidden operators', () => {
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

  invalidList.forEach(({ invalidDT, operator }) => {
    it(`Should throw a SyntaxError when a declarative template\'s placeholder contains \'${operator}\'`, () => {
      let hasError
      try { paste('#paste-placeholder', invalidDT) } catch (err) {
        hasError = err
        expect(err).to.have.property('message',
          `Operators are not allowed in declarative templates. \'${operator}\' was found within \'declarativeTemplate\'`
        )
      }
      if (!hasError) throw Error('No error thrown')
    })
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
