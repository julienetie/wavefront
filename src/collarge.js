import { safeguardParams } from './safety.js'
import { query, removeDescendentEvents, removeChildNodes } from './helpers.js'
import _store from './_store.js'

/*
A closure that requres `params` to create and insert markup */
const paste = (selector, templateHandler) => {
    const el = query(selector)
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
    const el = query(selector)
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