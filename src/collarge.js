import { safeguardParams } from './safety.js'
import { query, removeDescendentEvents, removeChildNodes, patterns, empty } from './helpers.js'
import _store from './_store.js'
const { placeholder, forbiddenOperators } = patterns
const { min } = Math
/*
A closure that requres `params` to create and insert markup */
const paste = (selector, templateHandler) => {
  console.log('paste')
  const el = query(selector)

  const templateHandlerStr = templateHandler.toString()
  const placeholders = (templateHandlerStr.match(placeholder) || []).join(empty)

  if (templateHandlerStr.startsWith('function')) {
    throw new SyntaxError('\'Declarative templates must be declared with an arrow function expression \'=>\'')
  }

  const openingFunctionBodyIndex = templateHandlerStr.indexOf('{')
  const arrowFunctionIndex = templateHandlerStr.indexOf('=>')
  const returnStatementIndex = templateHandlerStr.indexOf('return')
  const strDelimiters = ['`', '\'', '"'].map(delimiter => templateHandlerStr.indexOf(delimiter)).filter(v => v !== -1)
  const firstTickIndex = min(...strDelimiters)

  // Arrow function with body
  if (arrowFunctionIndex > 0 && arrowFunctionIndex < openingFunctionBodyIndex) {
    console.log('returnStatementIndex', returnStatementIndex)
    if (returnStatementIndex > openingFunctionBodyIndex) {
      if (returnStatementIndex > 3 && firstTickIndex > returnStatementIndex) {
        console.log('}~~~~~')
        throw new SyntaxError('\'return\' statements are not allowed in declarative templates.')
      }
    }
  }

  if (placeholders !== empty) {
    const culpritIndex = forbiddenOperators.findIndex(operator => placeholders.includes(operator))
    if (culpritIndex > -1) {
      const culprit = forbiddenOperators[culpritIndex]
      throw new SyntaxError(`Operators are not allowed in declarative templates. '${culprit}' was found within 'declarativeTemplate'`)
    }
  }

  return (params, ref, denylistPattern, replaceWord) => {
    // Missing element
    if (!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }

    //
    const cleanedParams = safeguardParams(params, denylistPattern, replaceWord)

    // Create markup
    const markup = templateHandler(cleanedParams)

    // Store copy of markup
    if (ref) {
      _store.slates[ref] = { templateHandler, cleanedParams, selector }
    }

    if (el.children.length > 0) {
      // Remove all nested events
      removeDescendentEvents(el)
    }
    const templateContainer = document.createElement('div')
    _store.template.append(templateContainer)
    templateContainer.insertAdjacentHTML('afterbegin', markup)
    const temp = templateContainer.firstElementChild
    el.replaceWith(temp)
    templateContainer.remove()
  }
}

/*
A closure that requres `params` to create and insert markup */
const pasteInto = (selector, templateHandler) => {
  selector = selector === '/' ? '#root' : selector
  const el = query(selector)
  return (params, ref, denylistPattern, replaceWord) => {
    params = params || {}
    // Missing element
    if (!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }

    //
    const cleanedParams = safeguardParams(params, denylistPattern, replaceWord)

    // Create markup
    const markup = templateHandler(cleanedParams)

    // Store copy of markup
    if (ref) {
      _store.slates[ref] = { templateHandler, cleanedParams, selector }
    }

    if (el.children.length > 0) {
      // Remove all nested events
      removeDescendentEvents(el, 'inner')
      // Remove all children
      removeChildNodes(el)
    }
    el.insertAdjacentHTML('afterbegin', markup)
  }
}

const removeWithin = selector => {
  const el = query(selector)
  if (el.children.length > 0) {
    // Remove all nested events
    removeDescendentEvents(el, 'inner')
    // Remove all children
    removeChildNodes(el)
  }
  return el
}

const remove = selector => {
  removeWithin(selector)
    // @todo remove self event
    .remove()
}

/*
Allows the DOM to be directly mutated within a scope */
const mutate = (selector, templateHandler) => {
  const el = query(selector)
  templateHandler(el)
}

export {
  paste,
  pasteInto,
  removeWithin,
  remove,
  mutate
}
