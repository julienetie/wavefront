# Collage API
The Collage API helps to you layer parts of your UI.

- [Understanding The Collage API](#Understanding-the-Collage-API)
- [The Collage API](#The-Collage-API)
  - [paste()](#paste)
  - [pasteInto()](#pasteInto)
  - [pasteAfter()](#pasteAfter)
  - [pasteBefore()](#pasteBefore)
  - [pasteStart()](#pasteStart)
  - [pasteEnd()](#pasteEnd)
## Understanding The Collage API
Let's first look at the **_paste()_** function to gain a fundamental understanding.

`paste(selector, declarativeTemplate)`

The _paste()_ function will paste a new DOM subtree over an existing one.
```javascript
const inlineNotice = paste('#mulit-line-notice', ({ text }) =>  `
	<span id="inline-notice" >${text}</span>`
)

inlineNotice({ text:  '<strong>Notice</strong>: You are using an unsupported browser.' })
```

**tl;dr**: Wavefront locates the DOM element via a given _selector_, using [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) CSS syntax and subsequently swaps it with the specified markup outlined in the _declarativeTemplate_.

### What's happening?
#### The Paste function
1. _paste()_ queries the target element in the DOM using the _selector_ which will be pasted over.
2. _paste()_ will validate the new markup syntax to ensure there is no _JSX-like_ logic.
3. Upon completion, _paste()_ returns the new **_Collage_** function, which is assigned the name _inlineNotice()_

#### The returned Collage function
1. **Parameter Input**: _inlineNotice()_ accepts a **_props_** object. In the example we are using just a single prop named **_text_**.
2. **Props Safeguarding**: Wavefront ensures that the props are shielded against non-values, preventing exposure of `null`, `undefined`, and `NaN` values.
3. **Sanitization**: Prior to being written to the DOM, the props will be sanitization process to mitigate the risk of potential malicious code. 
4. **Multiple Invocations**: The inlineNotice() function is designed to be invoked multiple times, optionally with different values.

### Constructing user interfaces by collarging (Layering)
<img  align="left" src="https://upload.wikimedia.org/wikipedia/en/6/6b/Hoch-Cut_With_the_Kitchen_Knife.jpg"  width="220" height="277" alt="An image of Hannah Höch's artwork - Cut with the Dada Kitchen Knife" title="Hannah Höch - Cut with the Dada Kitchen Knife">

Wavefront works in a similar manner to layering images to create collage art in the real-world. Consider the DOM as a state machine which represents the current state of the UI. 

Wavefront does not use a virtual DOM and does not depend on reading the DOM. The _declarativeTemplates_ you define can not only be layered anywhere on the page but can also be reused in innumerable ways as well as retained when using [**_slates_**](#).

### Logicless Templates
Wavefront enforces a separation of logic and presentation. Separating visual building blocks from a logical system is a profound quality that is appreciated in many forms of engineering. This does not only separate concerns but also allows for people focusing on different concerns to have more focus on their specific tasks and goals. 

The aim of Wavefront is not to exhaust you with a plethora of tools. The majority of the Collage API functions are performing similar actions with different intents.

###  Markup though variables
You can think of Wavefront as a string-based JavaScript framework. Not only can you define a collage with markup syntax, but you can also take advantage of the powerful string manipulation native to JavaScript to manage your layouts using native data-methods.

This is possible due to Wavefront's built-in sanitizer and direct insertion of text-nodes for text content. Wavefront also harnesses Trusted Types for modern protection which can optionally be polyfilled for unsupported browsers.

### The Collage Function
The Collage function is a [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation) function that is returned when creating a _declarativeTemplate_.

### `collage(props = {}, {ref, denyListPattern, replaceWord, temp})`  
 - **_props_** - _`Object`_: An object of props (primitive values or other declarative templates). In the code example above, _text_ is a _prop_.
 - **_ref_** - _`String`_ : A given reference that stores a copy of the _declarativeTemplate_ to a a place in memory called a slate.	 
 - **_denyListPattern_** - _`RegExp`_ : A regex pattern of words to ignore.
 - **_replaceWord_** - _`String`_ : A replacement value for each denied word.
 - **_temp_** - _`boolean`_ : If true it will not render but will be stored to a slate of a given `ref`. Default is `false`

### Other considerations
- **Shorthand root selector**: A _selector_ value of `'/'` is shorthand for `#root` . Root is the outer most element of the page.
- **Safeguarding of non-values**: Non-values like `null`, `undefined` and`NaN` cannot slip though the cracks. By default they will be rendered as an empty string.
- **Trusted Types**: DOM sinks are protected by [Trusted Types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) in supported browsers.
- **Escaping**: Primitive variables are escaped by default 
- **Sanitization**: Variables prefixed with `$$$` are sanitized using the native Sanitizer API with its default configuration.
- **Sanitization Polyfill**: By default, the [Sanitize API](https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer) will be dynamically fetched for unsupported browsers _(This can be disabled)_
- **Custom Sanitization**: This can be done outside of Wavefront using Trusted Types.
---
## The Collage API

### paste()
#### `paste(selector, declarativeTemplate)`
•  selector _`String`_ •  declarativeTemplate _`Function`_

The paste() function will paste a new DOM subtree over a given selector.
```javascript
const inlineNotice = paste('#mulit-line-notice', ({ text, displayClass }) =>  `
	<span id="inline-notice" class="${displayClass}">${text}</span>`
)
```
> _Destructive_

### pasteInto()
The pasteInto() function will paste a new DOM subtree inside a given selector.
> _Destructive_

### pasteAfter()
The pasteAfter() function will paste a new DOM subtree after a given selector.
> _Non destructive_

### pasteBefore()
The pasteBefore() function will paste a new DOM subtree before a given selector.
> _Non destructive_

### pasteStart()
The pasteStart() function will paste a new DOM subtree inside at the beginning of a given selector.
> _Non destructive_

### pasteEnd()
The pasteEnd() function will paste a new DOM subtree inside at the end of a given selector.
> _Non destructive_

### pasteByIndex()
TBA

### remove()
#### `remove(selector)`
•  selector _`String`_

The remove() function will remove all descendent events and elements aswell as removing the given selector and it's own events.
```javascript
remove('#mulit-line-notice')
```
> _Destructive_

### removeWithin()
The removeWithin() function removed all descendent events and elements but preserves the selector and it's events. 
> _Destructive_

### mutate()
#### `mutate(selector, templateHandler)`
•  selector _`String`_ •  templateHandler _`Function`_

The mutate() function exposes a DOM element to be directly mutated within a function scope.
```javascript
mutate('#mulit-line-notice', (el, listEvents) =>  {
	console.log(listEvents()) // A list of events belonging to the selector
	el.style.background = 'red'
})
```
You can mutate a ref and update the DOM at the same time.
Below will expose the stencil element. The modified element is returned which will update both the slate and the DOM.

```javascript
mutate(ref, el =>  {
	console.log(listEvents()) // A list of events belonging to the selector
	el.style.background = 'lime'
	return el
})
````
The `sterelize()` function will sanitize primitive values and will return a Trusted Type which can be used for DOM sinks. 
```javascript
mutate(ref, el =>  {
	console.log(listEvents()) // A list of events belonging to the selector
        el.textContent = sterelize('Hello World')
	return el
})
```
> _Destructive_

MIT © Julien Etienne 2024
