/*
    e Y8b     Y88b Y88 88P'888'Y88 888
   d8b Y8b     Y88b Y8 P'  888  'Y 888
  d888b Y8b   b Y88b Y     888     888
 d888888888b  8b Y88b      888     888
d8888888b Y8b 88b Y88b     888     888

Licensed under the Apache License Version 2.0
Copyright 2022 © Julien Etienne, Vanslang */

const { body } = document

/*
The `_store` object is the single origin for globally
shared data and state across the ANIT codebase */
const _store = {
  delegatedEvents: new Map(),
  template: document.createElement('template'),
  slates: {},
  singleEvents: new WeakMap(),
  singleEventsAncestors: []
}

/*
If traversing from `document` is a problem you should be using a
virtual-list to manage off-screen DOM elements */
const query = selector => document.querySelector(selector)

/*
Removes all child nodes of a given parent */
const removeChildNodes = parent => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild)
  }
}

/*
Creates a list of ancestors for a given descendent and stops before the body tag */
const getAncestors = (el) => {
  const ancestors = [el]
  while (el.parentElement !== body) {
    el = el.parentElement
    ancestors.push(el)
  }
  if (ancestors.length > 99) {
    console.warn(`Child ${el} is excessively nested with over 100 parents. This may cause performance concerns`)
  }
  return ancestors
}

/*
Removes all events from descendent elements of a given element */
const removeDescendentEvents = (el, inner) => {
  const startPosition = inner ? 0 : -1
  const eventsToRemove = _store.singleEventsAncestors.reduce((acc, entry, i) => {
    // Looks thought each singleEventsAncestor for a match
    if (entry.indexOf(el) > startPosition) {
      // Accumilates the first element (the descendent) of each match
      acc.push(entry[0])

      // Marks the entry as null in _store.singleEventsAncestors[i]
      _store.singleEventsAncestors[i] = null
    }
    return acc
  }, [])

  // Remove events
  eventsToRemove.forEach(boundedElement => {
    _store.singleEvents.get(boundedElement).forEach(eventObject => {
      const {
        event,
        eventHandler,
        options
      } = eventObject
      boundedElement.removeEventListener(event, eventHandler, options)
    })
    _store.singleEvents.delete(boundedElement)
  })

  // Cleans null values
  _store.singleEventsAncestors = _store.singleEventsAncestors.filter(Boolean)
}

/*
When params are provided `null`, `NaN` and `undefined` values will be replaced
by a blank spaced string. When a denylist and replacement word is additionally provided
param's values will be treated as strings and matching results will be replaced by the
replacement word */
const safeguardParams = (params, denylistPattern, replaceWord) => {
  console.log('denylistPattern', denylistPattern)
  if (denylistPattern) {
    let paramsJSON = JSON.stringify(params)
    const foundDeniedWords = paramsJSON.match(denylistPattern)
    if (foundDeniedWords) {
      console.warn(`Denied pattern ${denylistPattern} was found in ${JSON.stringify(params)}`)
      foundDeniedWords.forEach(deniedWord => {
        paramsJSON = paramsJSON.replace(new RegExp(deniedWord, 'g'), replaceWord)
      })
    }
    return JSON.parse(paramsJSON)
  }

  Object.entries(params).forEach(([key, value]) => {
    switch (true) {
      case value === undefined:
      case value === null:
      case Object.is(value, NaN):
        params[key] = ' '
        break
    }
  })
  return params
}

/*
A closure that requres `params` to create and insert markup */
const insertInto = (selector, templateHandler) => {
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
      // Remove all children
      removeChildNodes(el)
    }
    el.insertAdjacentHTML('afterbegin', markup)
  }
}

/*
Inserts the last stored slate into it's referenced DOM position */
const insertSlate = (ref, paramsSandbox, sandbox) => {
  if (!_store.slates[ref]) {
    console.log(`Slate ${ref} does not exist`)
  }

  // Get the slate
  const { templateHandler, selector, params: defaultParams } = _store.slates[ref]
  const el = query(selector)

  if (el.children.length > 0) {
    // Remove all nested events
    removeDescendentEvents(el)
    // Remove all children
    removeChildNodes(el)
  }
  let newParams
  let sandboxHandler
  switch (true) {
    case paramsSandbox === undefined:
    case paramsSandbox === null:
      el.insertAdjacentHTML('afterbegin', templateHandler(defaultParams))
      break
    case typeof paramsSandbox === 'object' && typeof sandbox === 'function':
      newParams = paramsSandbox
      sandboxHandler = sandbox
    case typeof paramsSandbox === 'function': {
      sandboxHandler = sandboxHandler || paramsSandbox
      const markup = templateHandler(newParams || defaultParams)
      const templateContainer = document.createElement('div')

      _store.template.append(templateContainer)
      templateContainer.insertAdjacentHTML('afterbegin', markup)

      const temp = templateContainer.firstElementChild

      const modifiedTemp = sandboxHandler(temp, defaultParams)
      el.insertAdjacentElement('afterbegin', modifiedTemp)
      templateContainer.remove()
    } break
    case typeof paramsSandbox === 'object':
      el.insertAdjacentHTML('afterbegin', templateHandler(paramsSandbox))
      break
  }
}

/*
Allows the DOM to be directly mutated within a scope */
const mutate = (selector, templateHandler) => {
  const el = query(selector)
  templateHandler(el)
}

/*
Removes a slate by reference */
const removeSlate = (ref) => {
  if (_store.slates[ref]) {
    delete _store.slates[ref]
  }
}

const removeListener = (selector, event) => {
  const el = query(selector)
  // Remove event
  const boundEvent = _store.singleEvents.get(el)

  boundEvent.some(eventObject => {
    const {
      event: storedEvent,
      eventHandler,
      options
    } = eventObject
    console.log('storedEvent === event', storedEvent, event)
    if (storedEvent === event) {
      el.removeEventListener(event, eventHandler, options)
      return true
    }
  })
  _store.singleEvents.delete(el)

  const index = _store.singleEventsAncestors
    .findIndex(ancestors => ancestors[0] === el)

  // Remove event ancesotrs
  _store.singleEventsAncestors.splice(index, 1)
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
Gets the slate wrapper */
const getSlate = ref => {
  return _store.slates[ref]
}

const createDelegate = (selector, event, eventHandler) => {
  const delegatedSelector = _store.delegatedEvents.get(selector)

  const eventObject = {
    event,
    eventHandler
  }

  if (delegatedSelector) {
    // @todo if includes delegate
    const updatedEvents = delegatedSelector.push(eventObject)
    _store.delegatedEvents.set(selector, updatedEvents)
  } else {
    _store.delegatedEvents.set(selector, [eventObject])
  }
}

const suspect = el => ({
  equals: selector => el === query(selector),
  closest: selector => el.closest(selector) === query(selector),
  contains: selector => !!el.querySelector(selector)
})

const trigger = (selector, event, e) => {
  const events = _store.delegatedEvents.get(selector)
  if (events) {
    const match = events.find(eventObject => eventObject.event === event)
    match && match.eventHandler(e)
  }
}

const removeDelegate = (selector, event) => {
  let events = _store.delegatedEvents.get(selector)
  if (events) {
    events = events.filter(eventObject => eventObject.event !== event)
    _store.delegatedEvents.set(selector, events)
  }
}

/*
Add single event listener */
const listenTo = (selector, event, eventHandler, options) => {
  const el = query(selector)
  const storedEvents = _store.singleEvents.get(el)
  const events = storedEvents || []

  events.push({
    event,
    eventHandler,
    options
  })
  _store.singleEvents.set(el, events)

  // Add the element to listen to and their ancestors
  _store.singleEventsAncestors.push(getAncestors(el))

  // Add event listener
  el.addEventListener(event, eventHandler, options)
}

/*
Remove single event listener */
const dismiss = (selector) => {
  const el = query(selector)
  // Missing element
  if (!el) {
    console.error(`Cannot find element ${selector}`)
    return
  }
  removeDescendentEvents(el)
}

// console.log(_store)
// setTimeout(() => {
//   console.log(_store)
// }, 8000)

export {
  insertInto,
  listenTo,
  insertSlate,
  mutate,
  removeSlate,
  removeListener,
  removeWithin,
  remove,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  safeguardParams,
  getSlate,
  dismiss
}
