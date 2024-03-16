import { query, getAncestors, removeDescendentEvents, pending, isPending } from './helpers.js'
import _store from './_store.js'
import { waveEnv } from './environment.js'

const isDocument = value => typeof value === 'object' && typeof value?.createElement === 'function'
const isWindow = value => typeof value === 'object' && typeof value?.document === 'object'
const isGlobal = value => isWindow(value) || isDocument(value)
const validListenerName = value => (value.match(/_/g) || []).length <= 1

const { isArray } = Array
let hasVenue = false

const events = {
  venue: (eventsConfig = {}) => {
    // Ensure the environment is set
    if (waveEnv.isEnvNotSet()) return

    // Confirm venue is set
    hasVenue = true

    // Ensure eventsConfig is an object
    if (typeof eventsConfig !== 'object') return console.error('`eventsConfig` should be an object')

    const eventsConfigEntries = Object.entries(eventsConfig)

    if (eventsConfigEntries.length === 0) return console.error('`eventsConfig` has no listeners')

    eventsConfigEntries
      .forEach(([key, eventParams]) => {
        if (!validListenerName(key)) return console.error(`${key} is not a valid listener-name`)

        const [event, alias] = key.split('_')
        let global

        for (const value of Object.values(eventParams)) {
          if (isGlobal(value)) {
            global = value
            break
          }

          if (isPending) {
            global = pending
            break
          }
        }

        if (!global) return console.error('Event entries must include a self named global or `pending` primitive')

        const handler = (e) => {
          const delegates = _store.events.delegates.get(key)

          if (!isArray(delegates)) return
      
          delegates.forEach(delegateHandler => {
            const equalsSuspect = global.querySelector(delegateHandler.suspect)
            switch (delegateHandler.method) {
              case 'closest':
                const closestSuspect = e.target.closest(delegateHandler.suspect) || equalsSuspect
                if (closestSuspect ) {
                  delegateHandler.handler(e, closestSuspect)
                }
                break
              case 'contains':
                const containsSuspect = e.target.querySelector(delegateHandler.suspect) || equalsSuspect
                if (containsSuspect) {
                  delegateHandler.handler(e, containsSuspect)
                }
                break
              case 'equals':
                if (e.target === equalsSuspect) { // Need to update for all global docs
                  delegateHandler.handler(e, equalsSuspect)
                }
                break
              case 'nearest':
                const nearestSuspect = e.target.closest(delegateHandler.suspect)
                if (nearestSuspect) {
                  delegateHandler.handler(e, nearestSuspect)
                }
                break
              case 'includes':
                const includesSuspect = e.target.querySelector(delegateHandler.suspect)
                if (includesSuspect) {
                  delegateHandler.handler(e, includesSuspect)
                }
                break
              default:
                delegateHandler(e)
            }
          })
        }

        const params = [event, handler, eventParams.options]
        _store.events.globals.set(key, params)

        if (isGlobal(global)) global.addEventListener(...params)
      })
  },
  setPending: (eventsWithAlias, global, parent = document) => {
    const eventsList = eventsWithAlias.split(' ')
    console.log('eventsList', eventsList)
    eventsList.forEach(eventAlias => {
      const globalObject = typeof global === 'string' ? parent.querySelector(global) : global
      if (isGlobal(globalObject)) {
        const params = _store.events.globals.get(eventAlias)
        globalObject.addEventListener(...params)
      } else {
        // error
        console.error('Global not found')
      }
    })
  }
}



const target = (eventsWithAlias, handler) => {
  const eventsList = eventsWithAlias.split(' ')

  if (typeof handler === 'function') {
    eventsList.forEach(eventAlias => {

      const delegates = _store.events.delegates.get(eventAlias) || []
      // Manipulate the array in the delegates map
      if (delegates.length === 0) {
        _store.events.delegates.set(eventAlias, delegates)
      }

      if (!delegates.includes(handler)) delegates.push(handler)
    })
    return
  }


  const suspectMethod = method => (suspect, handler) => {
    if (typeof handler !== 'function') console.error('Handler must be a function')

    eventsList.forEach(eventAlias => {
      const delegates = _store.events.delegates.get(eventAlias) || []

      // Manipulate the array in the delegates map
      if (delegates.length === 0) {
        _store.events.delegates.set(eventAlias, delegates)
      }

      const fn = delegates.find(delegate => delegate && delegate.method === method && delegate.handler === handler)

      if (typeof fn !== 'object') {
        delegates.push({
          handler,
          method,
          suspect,
        })
      }
    })
  }

  return {
    closest: suspectMethod('closest'),
    equals: suspectMethod('equals'),
    contains: suspectMethod('contains'),
    nearest: suspectMethod('nearest'),
    includes: suspectMethod('includes'),
  }
}

const bound = {
  addListener: (selector, event, eventHandler, options) => {
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
  },
  removeListener: (selector) => {
    const el = query(selector)
    // Missing element
    if (!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }
    removeDescendentEvents(el)
  }
}


export {
  bound,
  events,
  target
}
