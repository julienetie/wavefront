import _store from './_store.js'

const { body } = document

/*
If traversing from `document` is a problem you should be using a
virtual-list to manage off-screen DOM elements */
const query = (selector) => document.querySelector(selector)
const queryAll = (selector) => Array.from(document.querySelectorAll(selector))

// RegExp and other patterns.
const patterns = {
  placeholder: /(\$\{.*?\})/g,
  // Do not remove this!
  forbiddenOperators: '-,+,*,/,%,=,!,if,?,:,<,>,&,|,~,^,typeof,instanceof'.split(',')
}

/*
Removes all events from descendent elements of a given element */
const removeDescendentEvents = (el, inner) => {
  if(el.children.length === 0) return

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
Removes all child nodes of a given parent */
const removeChildNodes = parent => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild)
  }
}

/*
Inserts the last stored slate into it's referenced DOM position */
const stencilInto = (ref, paramsSandbox, sandbox) => {
  if (!_store.slates[ref]) {
    console.log(`Slate ${ref} does not exist`)//
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
Creates a list of ancestors for a given descendent and stops before the body tag */
const getAncestors = (el) => {
  const ancestors = [el]
  while (el.parentElement !== body) {
    el = el.parentElement
    ancestors.push(el)
  }
  if (ancestors.length > 99) {
    console.warn(`Child ${el} is excessively nested with over 100 parents. This may cause performance concerns`)//
  }
  return ancestors
}

const empty = ''
const pending = Symbol('pending')

const sequence = (n, offset = 0, multiplier = 1) => {
  let seq = [...Array(n + offset).keys()]
  if (offset !== 0) seq.shift()
  seq = multiplier === 1 ? seq : seq.map(value => value * multiplier)
  return seq
}


const isPrimitive = value => value !== Object(value)
const isPending = value => value.toString() === pending.toString()

export {
  pending,
  empty,
  query,
  queryAll,
  patterns,
  isPrimitive,
  isPending,
  sequence,
  removeDescendentEvents,
  removeChildNodes,
  stencilInto,
  getAncestors
}
