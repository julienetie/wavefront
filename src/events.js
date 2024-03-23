import { query, getAncestors, pending, isPending } from './helpers.js'
import _store from './_store.js'
import { waveEnv } from './environment.js'

/**
 *
 * @param value
 */
const isDocument = value => typeof value === 'object' && typeof value?.createElement === 'function'
/**
 *
 * @param value
 */
const isWindow = value => typeof value === 'object' && typeof value?.document === 'object'
/**
 *
 * @param value
 */
const isGlobal = value => isWindow(value) || isDocument(value)
/**
 *
 * @param value
 */
const validListenerName = value => (value.match(/_/g) || []).length <= 1

const { isArray } = Array

const events = {
  /**
   *
   * @param eventsConfig
   */
  venue: (eventsConfig = {}) => {
    // Ensure the environment is set
    if (waveEnv.isEnvNotSet()) return

    // Ensure eventsConfig is an object
    if (typeof eventsConfig !== 'object') return console.error('`eventsConfig` should be an object')

    const eventsConfigEntries = Object.entries(eventsConfig)

    if (eventsConfigEntries.length === 0) return console.error('`eventsConfig` has no listeners')

    for (const [listenerName, listener] of eventsConfigEntries) {
      if (!validListenerName(listenerName)) return console.error(`${listenerName} is not a valid listener-name`)
      if (typeof listener !== 'object') return console.error(`${listenerName} should be an object`)

      const eventType = listenerName.split('_')[0]
      let global

      for (const value of Object.values(listener)) {
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

      /**
       *
       * @param rootObject
       */
      const handler = rootObject => (e) => {
        const { target } = e
        const delegates = _store.events.delegates.get(listenerName)

        if (!isArray(delegates)) return

        global = isPending(global) ? rootObject : global

        // console.log('delegates::',listenerName, delegates)
        delegates.forEach(delegateHandler => {
          const { method, selectors, reference } = delegateHandler

          const ref = typeof reference === 'string' ? reference : delegateHandler?.handler?.reference
          const isSuspended = _store.events.isSuspended.get(ref)

          if (isSuspended) {
            return
          }

          switch (method) {
            case 'closest':
              selectors.forEach(selector => {
                const closestSuspect = target.closest(selector)
                if (closestSuspect) delegateHandler.handler(e, closestSuspect)
              })
              break
            case 'contains':
              selectors.forEach(selector => {
                const containsEqualsSuspect = global.querySelector(selector) === target
                const containsSuspect = target.querySelector(selector) || containsEqualsSuspect
                if (containsSuspect) delegateHandler.handler(e, containsSuspect)
              })
              break
            case 'equals':
              selectors.forEach(selector => {
                const equalsEqualsSuspect = global.querySelector(selector) === target
                if (equalsEqualsSuspect) delegateHandler.handler(e, target)
              })
              break
            case 'nearest':
              selectors.forEach(selector => {
                const nearestSuspect = target.closest(selector)
                if (nearestSuspect) delegateHandler.handler(e, nearestSuspect)
              })
              break
            case 'includes':
              selectors.forEach(selector => {
                const includesSuspect = target.querySelector(selector)
                if (includesSuspect) delegateHandler.handler(e, includesSuspect)
              })
              break
            default:
              delegateHandler(e)
          }
        })
      }

      const params = [eventType, handler, listener.options]
      _store.events.globals.set(listenerName, params)

      if (isGlobal(global)) {
        params[1] = params[1]()
        global.addEventListener(...params)
      }
    }
  },
  /**
   *
   * @param {...any} pendingParams
   */
  setPending: (...pendingParams) => {
    const globalObject = pendingParams.at(-1)
    const listenerNames = pendingParams.slice(0, -1)

    if (typeof globalObject !== 'object') return console.error('Last param of setPending should be a rootObject')

    if (pendingParams.length < 2) return console.error(`setPending requires at least 1 listener and a rootObject`)

    listenerNames.forEach(listenerName => {
      if (isGlobal(globalObject)) {
        const params = _store.events.globals.get(listenerName)
        params[1] = params[1](globalObject)
        globalObject.addEventListener(...params)
      } else {
        // error
        console.error('Global not found')
      }
    })
  },
  /**
   *
   * @param {...any} references
   */
  suspend: (...references) => {
    references.forEach(ref => {
      _store.events.isSuspended.set(ref, true)
    })
  },
  /**
   *
   * @param {...any} references
   */
  resume: (...references) => {
    references.forEach(ref => {
      _store.events.isSuspended.set(ref, false)
    })
  }
}

/**
 *
 * @param {...any} targetParams
 */
const target = (...targetParams) => {
  const targetnParamsLength = targetParams.length
  const handler = targetParams.at(-1)
  const hasHandler = typeof handler === 'function'
  const listenerNames = targetParams.slice(0, -1)

  if (hasHandler && targetnParamsLength > 1) {
    listenerNames.forEach(listenerName => {
      const delegates = _store.events.delegates.get(listenerName) || []
      // Manipulate the array in the delegates map
      if (delegates.length === 0) {
        _store.events.delegates.set(listenerName, delegates)
      }

      if (!delegates.includes(handler)) delegates.push(handler)
    })
    return {
      /**
       *
       * @param reference
       */
      ref: reference => {
        handler.reference = reference
      }
    }
  }

  if (hasHandler && !targetParams.every(param => typeof param === 'string')) {
    return console.error('Invalid listeners')
  }

  /**
   *
   * @param method
   */
  const suspectMethod = method => (...suspectParams) => {
    const suspectParamsLength = suspectParams.length
    const handler = suspectParams.at(-1)
    const hasHandler = typeof handler === 'function'
    const selectors = suspectParams.slice(0, -1)

    if (suspectParamsLength < 2) return console.error(`${method} requires at least 1 listener and a function`)

    if (!hasHandler) return console.error(`The last parameter of ${method} must be a function`)

    if (!selectors.every(param => typeof param === 'string')) {
      return console.error(`Each selector must be a string`)
    }

    if (typeof handler !== 'function') console.error('Handler must be a function')

    targetParams.forEach(listenerName => {
      const delegates = _store.events.delegates.get(listenerName) || []

      // Manipulate the array in the delegates map
      if (delegates.length === 0) {
        _store.events.delegates.set(listenerName, delegates)
      }

      const fn = delegates.find(delegate => delegate && delegate.method === method && delegate.handler === handler)

      if (typeof fn !== 'object') {
        // handlerFn = handler
        delegates.push({
          handler,
          method,
          selectors
        })
      }
    })
    return {
      /**
       *
       * @param reference
       */
      ref: reference => {
        console.log('handlerFn', reference)
        handler.reference = reference
      }
    }
  }

  return {
    closest: suspectMethod('closest'),
    equals: suspectMethod('equals'),
    contains: suspectMethod('contains'),
    nearest: suspectMethod('nearest'),
    includes: suspectMethod('includes')
  }
}

const bound = {
  /**
   *
   * @param selector
   * @param event
   * @param eventHandler
   * @param options
   */
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
  /**
   *
   * @param selector
   * @param {...any} events
   */
  removeListener: (selector, ...events) => {
    const boundedElement = query(selector)
    // Missing element
    if (!boundedElement) {
      console.error(`Cannot find element ${selector}`)
      return
    }

    _store.singleEvents.get(boundedElement).forEach(eventObject => {
      const {
        event,
        eventHandler,
        options
      } = eventObject

      if (events.includes(event)) {
        boundedElement.removeEventListener(event, eventHandler, options)
      }
    })
    _store.singleEvents.delete(boundedElement)
  }
}

export {
  bound,
  events,
  target
}
