import { safeguardParams } from './safety.js'
import { waveEnv } from './environment.js'
import { query, removeDescendentEvents, removeChildNodes, patterns, empty } from './helpers.js'
import xssKillah from '../libs/xsskillah.js'
import _store from './_store.js'

const insertions = {
  pasteInto: 'afterbegin',
  pasteBefore: 'beforebegin',
  pasteAfter: 'afterend',
  pasteStart: 'afterbegin',
  pasteEnd: 'beforeend',
}

const xss = xssKillah()

const { placeholder, forbiddenOperators } = patterns
const { min } = Math

const validateTemplateHandler = (templateHandler) => {
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
    if (returnStatementIndex > openingFunctionBodyIndex) {
      if (returnStatementIndex > 3 && firstTickIndex > returnStatementIndex) {
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
}


const domOperations = (target, newEl, type, pasteByIndex) => {
  switch (type) {
    case 'paste':
      // Remove all nested events
      removeDescendentEvents(target)

      // Remove all descendents 
      removeChildNodes(target)

      // Paste Over
      target.replaceWith(newEl)
      break
    case 'pasteInto':
      // Remove all nested events
      removeDescendentEvents(target, 'inner')

      // Remove all descendents 
      removeChildNodes(target)

      // Paste Into
      target.append(newEl)
      break
    case 'pasteAfter':
      // Paste After
      target.insertAdjacentElement('afterend', newEl)
      break
    case 'pasteBefore':
      // Paste Before
      target.insertAdjacentElement('beforebegin', newEl)
      break
    case 'pasteStart':
      // Paste Start
      target.insertAdjacentElement('afterbegin', newEl)
      break
    case 'pasteEnd':
      // Paste End
      target.insertAdjacentElement('beforeend', newEl)
      break
    case 'pasteByIndex':
      // Paste End
      const targetChildren = target.children

      if (pasteByIndex === targetChildren.length) {
        targetChildren[pasteByIndex - 1].insertAdjacentElement('afterend', newEl)
      } else {
        targetChildren[pasteByIndex].insertAdjacentElement('beforebegin', newEl)
      }
      break
  }
}

/*
A closure that requres `params` to create and insert markup */
const paster = (type = 'paste') => (selector, templateHandler, pasteByIndex) => {
  if (waveEnv.isEnvNotSet()) return

  selector = selector === '/' ? '#root' : selector
  const el = query(selector)

  validateTemplateHandler(templateHandler)

  return (params = {}, ref, denylistPattern, replaceWord) => {
    // const shouldPasteInto = type === 'pasteInto'
    console.log('type', type)
    // Missing element
    if (!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }

    // @todo Add comments
    const cleanedParams = safeguardParams(params, denylistPattern, replaceWord)
    const templateParamsPattern = /\({\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^}]+)\s*}/
    const templateParamsList = templateHandler.toString().match(templateParamsPattern)
    const templateParams = templateParamsList.slice(1)
    const paramsMatchTemplateParams = templateParams.every(value => cleanedParams.hasOwnProperty(value.trim()))

    // If params do not match the template params
    if (!paramsMatchTemplateParams) {
      console.error('Given params do not match template params')
      return
    }


    // Create markup
    const markup = templateHandler(cleanedParams).trim()

    // Store copy of markup
    if (ref) _store.slates[ref] = { templateHandler, cleanedParams, selector }


    // if (el.children.length > 0) {
    //   // Remove all nested events
    //   removeDescendentEvents(el, shouldPasteInto && 'inner')

    //   if (shouldPasteInto) {
    //     // Remove all children
    //     removeChildNodes(el)
    //   }
    // }

    // const insertion = insertions[type]
    const cleanedMarkup = xss(markup)[0]
    // if (insertion) {

    domOperations(el, cleanedMarkup, type, pasteByIndex)
    // el.append(...cleanedMarkup) // Needs correct position
    // el.insertAdjacentHTML(insertion, markup)
    return
    // }

    const templateContainer = document.createElement('div')
    _store.template.append(templateContainer)
    templateContainer.append(...cleanedMarkup)
    // templateContainer.insertAdjacentHTML('afterbegin', markup)
    const temp = templateContainer.firstElementChild
    el.replaceWith(temp)
    templateContainer.remove()
  }
}

const paste = paster()
const pasteInto = paster('pasteInto')
const pasteBefore = paster('pasteBefore')
const pasteAfter = paster('pasteAfter')
const pasteStart = paster('pasteStart')
const pasteEnd = paster('pasteEnd')
const pasteByIndex = paster('pasteByIndex')

const removeWithin = selector => {
  if (waveEnv.isEnvNotSet()) return

  const el = query(selector)
  if (el && el.children.length > 0) {
    // Remove all nested events
    removeDescendentEvents(el, 'inner')
    // Remove all children
    removeChildNodes(el)
  }
  return el
}

const remove = selector => {
  if (waveEnv.isEnvNotSet()) return

  const el = query(selector)
  if (el) {
    // Remove all nested events
    removeDescendentEvents(el)
    // Remove all children
    removeChildNodes(el)
  }
  el.remove()
}

/*
Allows the DOM to be directly mutated within a scope */
const mutate = (selector, templateHandler) => {
  if (waveEnv.isEnvNotSet()) return

  const el = query(selector)
  templateHandler(el)
}

export {
  paste,
  pasteInto,
  pasteBefore,
  pasteAfter,
  pasteStart,
  pasteEnd,
  pasteByIndex,
  removeWithin,
  remove,
  mutate
}
