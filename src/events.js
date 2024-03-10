import { query, getAncestors, removeDescendentEvents } from './helpers.js'
import _store from './_store.js'
import { waveEnv } from './environment.js'


/*

  // Must have window or document
  events.create({
    'resize': {
        window,
        options
    },
    'resize.r2': {
        window,
        options
    },
    'click': {
        document
    },
    'click.bubble': {
        document,
        options: false
    }
  })

  // Contains
  targetOf('click').contains('selector', ()=>{

  })

  // Equals
  targetOf('click').equals('selector', ()=>{

  })

  // Closest
  targetOf('click.bubble').closest('selector', ()=>{

  })

  // Manual
  targetOf('click', ()=>{

  })

  // multi events 
  targetOf('click:mousedown:click.r2', ()=>{

  }, 'ref')


  suspect(target).contains('selector') // Boolean

  // Suspend handlers
  events.suspend(...list-of-event-names or 1)
  // Resume handlers
  events.resume(...list-of-event-names)

  events.remove(...list of event names)

  events.removeDelegate(...list of refs)

  debounce
  throttle
  // No ignore 
  // no create or remove delegate

*/

/*
Add single event listener */
const addListener = (selector, event, eventHandler, options) => {
  // Ensure the environment is set
  if (waveEnv.isEnvNotSet()) return

  // Assing the element or log error if non-existent
  const el = query(selector)
  if (!el) {
    console.error(`Invalid selector ${el}`)
    return
  }

  // Get storedEvents of the given element create empty
  const storedEvents = _store.singleEvents.get(el)
  const events = storedEvents || []

  // Add event arguments and store
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
const removeListener = (selector) => {
  const el = query(selector)
  // Missing element
  if (!el) {
    console.error(`Cannot find element ${selector}`)
    return
  }
  removeDescendentEvents(el)
}

// const createDelegate = (selector, event, eventHandler) => {
//   if (waveEnv.isEnvNotSet()) return

//   const delegatedSelector = _store.delegatedEvents.get(selector)

//   const eventObject = {
//     event,
//     eventHandler
//   }

//   if (delegatedSelector) {
//     // @todo if includes delegate
//     const updatedEvents = delegatedSelector.push(eventObject)
//     _store.delegatedEvents.set(selector, updatedEvents)
//   } else {
//     _store.delegatedEvents.set(selector, [eventObject])
//   }
// }

// const suspect = el => ({
//   equals: selector => el === query(selector),
//   closest: selector => el.closest(selector) === query(selector),
//   contains: selector => !!el.querySelector(selector)
// })

// const trigger = (selector, event, e) => {
//   if (waveEnv.isEnvNotSet()) return

//   const events = _store.delegatedEvents.get(selector)
//   if (events) {
//     const match = events.find(eventObject => eventObject.event === event)
//     match && match.eventHandler(e)
//   }
// }

// const removeDelegate = (selector, event) => {
//   if (waveEnv.isEnvNotSet()) return

//   let events = _store.delegatedEvents.get(selector)
//   if (events) {
//     events = events.filter(eventObject => eventObject.event !== event)
//     _store.delegatedEvents.set(selector, events)
//   }
// }

// const removeListener = (selector, event) => {
//   if (waveEnv.isEnvNotSet()) return

//   const el = query(selector)
//   // Remove event
//   const boundEvent = _store.singleEvents.get(el)

//   boundEvent.find(eventObject => {
//     const {
//       event: storedEvent,
//       eventHandler,
//       options
//     } = eventObject
//     console.log('storedEvent === event', storedEvent, event)
//     if (storedEvent === event) {
//       el.removeEventListener(event, eventHandler, options)
//       return true
//     }
//     return false
//   })

//   _store.singleEvents.delete(el)

//   const index = _store.singleEventsAncestors
//     .findIndex(ancestors => ancestors[0] === el)

//   // Remove event ancesotrs
//   _store.singleEventsAncestors.splice(index, 1)
// }

export {
  addListener,
  removeListener,
}
