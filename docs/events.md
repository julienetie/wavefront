# Events API
The Events API manages event listeners.

- [Understanding The Events API](#Understanding-the-Collage-API)
- [A Basic Event Delegation Example](#a-basic-event-delegation-example)
- [A Comprehensive Event Delegation Example](#a-comprehensive-event-delegation-example)

## Understanding The Events API

The Events API is a set of functions that provide a comprehensive event management solution.
Wavefront features two strategies for intercepting events:
- `events`: Event Delegation API
- `bound`: Bound Events API

As a rule of thumb, always prefer event delegation over bound events. Certain events may require enabling capture for effective propagation. Direct events should typically serve as a final option when event delegation becomes problematic, incapable, or to navigate around 3rd party caveats.

Wavefront recommends the following approach when using the Events API:
1. Initialize **events.venue**, which is a configuration for defining global event listeners.
2. Create event delegates using the **targets** function. Think of each delegate as a virtual event-listener.
3. If necessary, use the `bound` function to manage scenarios that cannot be solved using event-delegation.

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
[addEventListenerLink]:https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[optionsLink]:https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#options
[useCaptureLink]:https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture
[pendingLink]:https://github.com/julienetie/wavefront/???

## The Events API
### events.venue()
The `events.venue()` is where you define [addEventListeners][addEventListenerLink] on _root-objects_. 
venue() takes an object literal which contains _listeners_.
- Each property name represents a _listener_.
- You can define additional listeners of the same _event-type_ by prefixing an alias delimited by an underscore, e.g:
  - click
  - click_2
  - click_video
  
  Listener names cannot contain more than 1 underscore.
- Each listener represents an individual `addEventListener` under the hood
- Event-listeners must contain a self-named _root-object_ or the [pending][pendingLink] primative. And can optionally contain the [options][optionsLink] property as an object or boolean for [useCapture][useCaptureLink].

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
The root-object is typically a `document` or `window` object. 

`events.venue(...)` can only be called once per JavaScript execution context. So it is advisable to place it in a file named.
`./src/events.venue.js` this file can represent all gloabl events across your application, or you can have multiple `*.venue.js` files to represent different golabl events per page or per JavaScript execution context.


### events.setPending()
If iframe events need to be intercepted, the `pending` primitive should be used until the iframe is available, then it can be set using 
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

### target()
The `target()` function creates a delegate, which is like a virtual event-listener based on a listener you defined in the venue object.
To create a global delegate you can use the target function with a callback

```javascript
target('mousemove', ({ClientX, ClientY}) => {
 ...
})
```
Relationship methods are used to target elements ancestors, descendents or that are equal to the target.
```javascript
// Closest ancestor or equal to target
target('click').closest('#ancestor')

// Contains descendent or equal to target
target('click').contains('#descendent')

// Equal to target
target('click').equals('#equal-selector')

// Nearest ancestor, not euqal to
target('click').nearest('#ancestor')

// Includes descendent, not equal to
target('click').includes('#descendent')

```



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
