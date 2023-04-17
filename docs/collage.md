# Collage API
The collage API helps to you layer parts of your UI.

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

**tl;dr**: Wavefront finds the DOM element via a given _selector_, using [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) CSS syntax. Then replaces the found element with the new markup defined in the _declarativeTemplate_.
### What's happening?
#### The Paste function
1.  _paste()_ queries the DOM using the _selector_ for the element which will be pasted over.
2. _paste()_ will validate the new markup syntax to ensure there is no _JSX-like_ logic.
3. _paste()_ returns the new **_Collage_** function that we name as _inlineNotice()_

#### The returned Collage function
1. _inlineNotice()_ takes the **_props_** object. In the example we are using just one prop we are naming as **_text_**.
2. Wavefront safeguard props against non-values to prevent "null", "undefined" and "NaN" values from being exposed.
3. props are also escaped before being written to the DOM to restrict potentially malicious code. Therefore the _text_ will output as `'&lt;strong&gt;Notice&lt;/strong&gt;: You are using an unsupported browser.'` when rendered to the DOM.
4. _inlineNotice()_ can be called multiple times again with different text values

### Constructing user interfaces by collarging (Layering)
<img  align="left" src="https://upload.wikimedia.org/wikipedia/en/6/6b/Hoch-Cut_With_the_Kitchen_Knife.jpg"  width="220" height="277" alt="An image of Hannah Höch's artwork - Cut with the Dada Kitchen Knife" title="Hannah Höch - Cut with the Dada Kitchen Knife">

Wavefront works in a similar manner to how you would layer images to create collage art in the real-world. Consider the DOM as a state machine which represents the current state of the UI. 

Wavefront does not use a virtual DOM and does not depend on reading the DOM. The _declarativeTemplates_ you define can not only be layered anywhere on the page but can also be reused in innumerable ways as well as retained when using [**_slates_**](#).

### Logicless Templates
Wavefront enforces a separation of logic and presentation. Separating visual building blocks from a logical system is a profound quality that is appreciated in many forms of engineering. This does not only separate concerns but also allows for people with different skillsets to have more focus on their specific tasks and goals. 

The goal of Wavefront is not to exhaust you with a plethora of tools. Most of the Collage API functions are performing the same actions but with different intents.

###  Allowing markup though variables
By default, all primitive-props are escaped. You can enable primitive-props as markup by prefixing `$$$` to the variable name. So if we were to rename the _text_ prop as _text$$$_ in the above code example it would output:

`'<strong>Notice</strong>: You are using an unsupported browser.'`
All variables prefixed with `$$$` are sanitized using the native Sanitizer API with the default configuration.

> By design, Wavefront does not allow you to configure how variables are sanitized. We recommend creating your own Trusted Types policy outside of the framework if you need to whitelist HTML entities.

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
mutate('#mulit-line-notice', el =>  `
	el.textContent = 'Hello World'
)
```
> _Destructive_

