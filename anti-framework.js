const _store = {
  template: document.createElement('template'),
  slates: {},
  singleEvents: new WeakMap(),
  singleEventsAncestors: []
}


/* 
If traversing from `document` is a problem you should be using a 
virtual-list to manage off-screen DOM elements */
const query = selector => document.querySelector(selector)
const queryAll = selector => [...document.querySelectorAll(selector)]

// Removes all child nodes not just children
const removeChildNodes = parent => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild)
  }
}

// Gets a list of all ancestors up to the body
const getAncestors = (el) => {
  const ancestors = [el],
    {
      body
    } = document
  while (el.parentElement !== body) {
    el = el.parentElement;
    ancestors.push(el)
  }
  if(ancestors.length > 99) {
    console.warn(`Child ${el} is excessively nested with over 100 parents. This may cause performance concerns`)  
  }
  
  return ancestors
}


/*
Removes all events from descendent elements of a given element */
const removeDescendentEvents = (el) => {
  const eventsToRemove = _store.singleEventsAncestors.reduce((acc, entry, i) => {
    // Looks thought each singleEventsAncestor for a match
    if (entry.indexOf(el) > -1) {

      // Accumilates the first element (the descendent) of each match
      acc.push(entry[0])
      
      // Marks the entry as null in _store.singleEventsAncestors[i]
      _store.singleEventsAncestors[i] = null
    }
    return acc
  }, [])

  // Remove events 
   eventsToRemove.map(boundedElement => {
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

A closure that requres `params` to create and insert markup */
const insertInto = (selector, templateHandler) => {
   const el = query(selector)
  return (params, ref) => {
   

    // Missing element
    if(!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }

    // Create markup 
    const markup = templateHandler(params)

    // Store copy of markup
    if (ref) {
      _store.slates[ref] = {templateHandler, params, selector}
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
  - insertSlate(ref) // Inserts the last rendered slate
  - insertSlate(ref, params) // Inserts slate but with new parameters 
  - insertSlate(ref, sandbox) // Mutate the slate before inserting  
*/
const insertSlate = (ref, paramsSandbox, sandbox) => {
    if(!_store.slates[ref]) {
      console.log(`Slate ${ref} does not exist`)
    }

    // Get the slate 
   const {templateHandler, selector, params: defaultParams } =  _store.slates[ref]
   const el = query(selector)

   if (el.children.length > 0) {
      // Remove all nested events
      removeDescendentEvents(el)
      // Remove all children 
      removeChildNodes(el)
    }
let newParams
let sandboxHandler
   switch(true) {
    case paramsSandbox === undefined:
    case paramsSandbox === null:
      el.insertAdjacentHTML('afterbegin', templateHandler(defaultParams))
    break

    break
    case typeof paramsSandbox === 'object' && typeof sandbox === 'function':
    newParams = paramsSandbox
    sandboxHandler = sandbox
    case typeof paramsSandbox === 'function':
      sandboxHandler ? sandboxHandler : paramsSandbox
      const markup = templateHandler(newParams ? newParams : defaultParams)
      const templateContainer = document.createElement('div')
      console.log(_store.template)
      _store.template.append(templateContainer)
      templateContainer.insertAdjacentHTML('afterbegin',markup)

      const temp = templateContainer.firstElementChild
   
      const modifiedTemp = sandboxHandler(temp, defaultParams)
      el.insertAdjacentElement('afterbegin', modifiedTemp)
      templateContainer.remove()
    break
    case typeof paramsSandbox === 'object' :
      el.insertAdjacentHTML('afterbegin', templateHandler(paramsSandbox))
    break
   }
}


const mutate = (selector, templateHandler) => {
  const el = query(selector)
  templateHandler(el)
} 

const removeSlate = (ref) => {
  if(_store.slates[ref]) {
    delete _store.slates[ref]
  }
}

const removeListener = (selector, event) => {
  const el = query(selector)
  // Remove event 
  const boundEvent =_store.singleEvents.get(el)

  boundEvent.some(eventObject => {
      const {
        event: storedEvent,
        eventHandler,
        options
      } = eventObject
      console.log('storedEvent === event',storedEvent , event)
      if(storedEvent === event) {
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
      removeDescendentEvents(el)
      // Remove all children 
      removeChildNodes(el)
  }
}


// createDelegate('#selector', 'event', handler)

// triggerDelegate('#selector', 'event')

// removeDelegate('#selector', 'event') 

/*

Add single event listener */
const listenTo = (selector, event, eventHandler, options) => {
  const el = query(selector)
  const storedEvents = _store.singleEvents.get(el)
  const events = storedEvents ? storedEvents : []

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
    if(!el) {
      console.error(`Cannot find element ${selector}`)
      return
    }
    removeDescendentEvents(el)
}

console.log(_store)
setTimeout(()=>{
  console.log(_store)
}, 8000)
export {
  insertInto,
  listenTo,
  insertSlate,
  mutate,
  removeSlate,
  removeListener,
  removeWithin
}
