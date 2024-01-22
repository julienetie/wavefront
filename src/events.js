import { query, getAncestors, removeDescendentEvents } from './helpers.js'
import _store from './_store.js'
import { wfEnv } from './environment.js'

/*
Add single event listener */
const listenTo = (selector, event, eventHandler, options) => {
  if(wfEnv.isEnvNotSet()) return

  const el = query(selector)
  if (!el) {
    console.error(`Invalid selector ${el}`)
    return
  }
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

const createDelegate = (selector, event, eventHandler) => {
  if(wfEnv.isEnvNotSet()) return

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
  if(wfEnv.isEnvNotSet()) return

  const events = _store.delegatedEvents.get(selector)
  if (events) {
    const match = events.find(eventObject => eventObject.event === event)
    match && match.eventHandler(e)
  }
}

const removeDelegate = (selector, event) => {
  if(wfEnv.isEnvNotSet()) return

  let events = _store.delegatedEvents.get(selector)
  if (events) {
    events = events.filter(eventObject => eventObject.event !== event)
    _store.delegatedEvents.set(selector, events)
  }
}

const removeListener = (selector, event) => {
  if(wfEnv.isEnvNotSet()) return

  const el = query(selector)
  // Remove event
  const boundEvent = _store.singleEvents.get(el)

  boundEvent.find(eventObject => {
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
    return false
  })

  _store.singleEvents.delete(el)

  const index = _store.singleEventsAncestors
    .findIndex(ancestors => ancestors[0] === el)

  // Remove event ancesotrs
  _store.singleEventsAncestors.splice(index, 1)
}

export {
  listenTo,
  dismiss,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  removeListener
}
