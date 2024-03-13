# Events API
The Events API manages event listeners.


- [Understanding The Events API](#Understanding-the-Collage-API)
- [The Collage API](#The-Collage-API)
  - [paste()](#paste)
  - [pasteInto()](#pasteInto)
  - [pasteAfter()](#pasteAfter)
  - [pasteBefore()](#pasteBefore)
  - [pasteStart()](#pasteStart)
  - [pasteEnd()](#pasteEnd)

## Understanding The Events API

The Events API is a set of functions that provide comprehensive event management.
Wavefront offers two approaches to intercepting events:
- `events`: Event Delegation API
- `bound`: Bound Events API

It's always recommended to prioritize event delegation over bound events. Some events require capture to be enabled. Direct-events should only be used when event-delegation cannot resolve an event.

Wavefront recommends the following approach to the Events API:
1. Initialize the events.venue, which is a configuration for defining global event listeners.
2. Define event delegates using the `targets` function. Each delegate behaves like a virtual event listener.
3. If necessary, you can use the `bound` function to manage scenarios that cannot be solved using event-delegation.

When an element containing a bound event is overwritten, the bound-event will be removed.
Global events are not automatically removed but can be manually removed if needed.


## A Basic Event Delegation Example
Below is an example of how to target multiple anchor tags.
```javascript

// Add a click event-listener to the document
events.venue({
  click: {
    document
  }
})

// Matches all anchor tags and their descendents
target('click').closest('a', e => {
  ...
})
```

## A Comprehensive Event Delegation Example
./src/events.venue.js
```javascript
events.venue({
    click: {
        document
    },
    'click:iframe1': {
        pending
    },
    resize: {
        window
    },
    input: {
        document,
        options: true
    },
    transitionend: {
        document,
        options: true
    },
    focus: {
        document,
        options: {
            once: true
        }
    },
    mousemove: {
        document
    }
})
```
./src/some-component/somefile.events.js
```javascript

// Matches all elements
target('click', e => {...})

// Matches all anchor tags and their descendents
target('click').closest('a', e => {...})

// Matches all elements that are descendents of an anchor tag
target('click').contains('a', e => {...})

// Matches anchor tags
target('click').equals('a', e => {...})

// Matches all anchor tags and their descendents for multiple event-listeners
target('click', 'mousemove', 'focus').closest('a', e => {...})

// Matches multiple selectors and their descendents 
target('click').closest('header', 'footer', '#side-bar' , e => {...})

// Named delegate
target('click:iframe1').closest('a', e => {...}).ref('abc123')

// Set pending global-object
const iframe1 = document.querySelector('#iframe1')
events.setPending('click:iframe1', iframe1.contentDocument)

// Suspend event-listeners
events.suspend('resize', 'click', 'input')

// resume event listeners
events.resume('click', 'resize')

// Remove event listener
events.removeListener('transitionend')

// Remove a delegate.
events.removeDelegate('abc123')

// Suspect expressions
target('mousemove', ({target) => {
  // Contains
  if(suspect(target).contains('#some-element1')){...}

  // Closest
  if(suspect(target).closest('#some-element2')){...}

  // Equals
  if(suspect(target).equals('#some-element3')){...}
})
```

## The Events API
### events.venue()
The `events.venue()` function initalizes global-objects with listeners to be used for event-delegation. 
- Each property name represents a _listener_
- You can define mutliple listeners of the same type by prefixing an alias to the event-type in question
  - click
  - 'click:2'
  - 'click:video'
    
  Each listener represents an individual `addEventListener` under the hood.
- Event-listeners must contain a self-named global-object or the pending primative. And can optionally contain the `options` property as an object or boolean.

```javascript
events.venue({
...
focus: {
  document,
  options: true
}
...
})
```
The global-object is typically the `document` or `window` object. 

### events.setPending()
If an iframe is required the `pending` primitive should be used until the iframe is available, then it can be set using 
`events.setPending`
```javascript
import { pending } from './vendor/wavefront.js'
events.venue({
...
click: {
  pending,
  options: true
}
...
})
const { contentDocument } = document.querySelector('#some-iframe')
events.setPending('click', contentDocument)

// Set pending for multiple listeners
events.setPending('click', 'click:2', 'input', contentDocument)
```

### events.suspend()
Prevent listeners from executing their handlers
```javascript
// Set pending for multiple listeners
events.suspend('click', 'focus', 'mousedown')
```

### events.resume()
Re-enable execution of a listeners handler
```javascript
// Set resume for multiple listeners
events.resume('click', 'focus', 'mousedown')
```
### events.removeListener()

### events.removeDelegate()



### subject().addListener()
The _subject()_ API is similar to addEventListener though it is crucial for preventing memory leaks in conjunction with other Wavefront APIs.
Event Delegation should always be preffered over _subject()_ if plausible.

`addListener()` adds an event listener to a given selector, and uses the same options as the native _addEventListener_.
addListener uses the same style of event-naming as event delegates.

### subject().removeListener()
Removes a given event listener by it's event-name

### subject().suspend
Suspends a given event listener by it's event-name
### subject().resume
Resumes a given event listener by it's event-name

## suspect


MIT © Julien Etienne 2024
