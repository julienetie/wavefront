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

The Events API is a set of function that provide granular and comprehensive mangement of event listeners.
Wavefront takes two kind of approaches to intercepting events. 
- Event Delegates
- Direct Listeners

### Rule of thumb
If you are unsure how to approach event management in a project consider this order: 
1. Try Event Delegates first: Many common events will work using event-delegation in some cases you may need to enable or disable capturing in the event-listener's options.
2. If event delegation does not work you can use subject-events which attach directly to elements


### Event Delegates

Wavefront uses a technique called "event delegation," where a single event listener can intercept events across multiple child elements. 
This not a new concept, it's supported in front-end JavaScript frameworks but Unlike other JavaScript frameworks, Wavefront does 
not entirely abstract the event delegation system away. Wavefront's event delegation is granular and idiomatic to the nature of the DOM.  

- **Decoupled listeners**: Event listeners are detatched from the working DOM allowing the same events and delegates to be re-used no matter how or when the DOM is rebuilt
- **Global listeners**: Event listeners can be attached to window and document objects, including iframe global objects  
- **Options**: Define native options for each event-listener e.g. capture, once, passive, signal and useCapture
- **pending**: Indicate if a gloabl will be set in the future using `setPending`, this is necessary for iframes
- **Multiple event instances**: Define multiple event listenres using event-aliases for the same event-type but with different options.
- **Target by relationship**: Find an ancestor, descendent or equivalent to the target.
- **Multiple event alias targets**: target with multiple event-aliases   
- **Multiple suspects**: target multiple selectors using a single or multple event-aliases
- **Suspectable expressions**: Freely detect the relationship of suspects. 

[targetLink]:https://developer.mozilla.org/en-US/docs/Web/API/Event/target
[selectorLink]:https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
[addEventListenerLink]:https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[eventTypeLink]:https://developer.mozilla.org/en-US/docs/Web/API/Event/type
[windowLink]:https://developer.mozilla.org/en-US/docs/Web/API/Window/window
[documentLink]:https://developer.mozilla.org/en-US/docs/Web/API/Document
[contentWindowLink]:https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow
[contentDocumentLink]:https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument
#### The lingo

| Term           | Type            | Description                                                                                                                                                 |
|----------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Target         | Object          | An event [target][targetLink]                                                                                                                               |  
| Suspect        | String          | A [selector][selectorLink] related to target (closest, contains, equals)                                                                                    |   
| Delegate       | N/A             | A set of parameters and instructions which informs an _event-listener_ when and how to react to an event                                                    |   
| Event-listener | Object          | Each represents an [addEventListener][addEventListenerLink] and is defined in the `events.venue`. Each _event-listener_ is assigned to an _event-act_       |   
| Event-Act      | String          | A unique name of the event-listener. Each event-act begins with the [event-type][eventTypeLink] followed by a custom alias.                                 |   
| Venue          | Object          | An object where _event-listeners_ are defined against _event-acts_                                                                                              |   
| Global-object  | Object          | A [window][windowLink] or [document][documentLink] object including iFrame [contentWindow][contentWindowLink] and [contentDocument][contentDocumentLink] objects                                                                      |   
| Options        | Object\|Boolean | Native [addEventListener][addEventListenerLink] options object or useCapture boolean                                                                                                |   

Basic Event Delegates usage
```javascript

// Create the venue and assign event-listeners to event acts `resize` and `click`
events.venue({
  resize: {
    window 
  },
  click: {
    document
  }
})

// Manage window resize
target('resize', ({target}) => {
  console.info('window object', target)
  ...
})

// Manage link clicks
target('click').closest('a', ({target}) => {
    console.info('Click target', target)
  ...
})
```



### Subject Events





## The Events API

### events.venue 

### events.setPending

### events.suspend

### events.resume

### events.removeListener

### events.removeDelegate

### subject().addListener

### subject().removeListener

### subject().suspend

### subject().resume

MIT © Julien Etienne 2024
