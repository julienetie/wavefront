![Anti-Framework Ant Image](https://raw.githubusercontent.com/julienetie/anti-framework/main/anti-framework.webp?token=GHSAT0AAAAAABS5JG5XH3FGRCVYWPYM2C2UYTZP4HA)
# Anti-Framework

### Ultramodern DOM UI Development

Anti-Framework is a UI framework that takes an anti approach to the riged nature of frameworks like React, Vue, Angular and Svelte.

- No JSX:         Anti uses template-literals to define DOM nodes
- No Virtual-DOM: Anti does not use a VDOM, which means it can perform better
- No compiler/ transpiler required 
- No dependencies
- High performance ideal for mobile
- Decoupled events: Both global and element event listeners are decoupled from DOM mutations 
- Separation of concerns: Logic and semantics are separated
- Less than 5kb minified
- Minimalistic but capable API
- A modern approach to UI development

## Useless Example
Hello World is not a useful example for demonstrating UI frameworks but here it is:
```javascript
<div id="root"></div> // .html

// .js
import { insertInto } from 'anti-framework'

const helloView = insertInto('#root', ({greeting}) => `<h1>${greeting}</h1>`)

helloView({greeting: 'Hello World!')
```
## Features 

### Logic-less Views
Anti is a simple string-based DOM engine that uses template-literals for generating DOM nodes. The values you place inside template-literal placeholders `${}` will result into a string _(this is just standard JavaScript)_. Putting logic inside template-literal placeholders will cause a mess and break the semantic and visual nature of markup like HTML and SVG. Therefore all values are to be evaluated before being passed into a template function.

### Viewless Controllers
Your components should be separated by view/s and controller _(files or directories)_. The logic of your components only reside in the controller module/s. Markup is not defined within the controller, only in the view. The controller should import view-functions to instantiate with required values.
You can also separate event logic into event _(files or directories) as an extension to your controller logic.

### Decoupled Events 
Event-delegation should be the first desirable approach when managing events. But when this is not possible we must add event-listeners directly to non-global and non-top-level UI elements. Anti will remove events from descendents before they are written over to prevent memory-leaks. This allows us to completely decouple both delegated and direct events from our natural inclination of writing to the DOM.

### DRY Templates
View-template are parametrised, meaning that they can take a variety of values for reuse without additional boilerplate code.
This is just one of the many benefits of logic-less views.

### Slats
Slates are snapshots of changes to a particular selector. Slates can be optionally stored or ignored when making a change to the DOM.
They are stored as strings and can be modified as strings or elements. Each selector can have one slate which represents the last recorded change. 
This is useful for:
- Preserving the integrity of the DOM: (A slate can be used to rectify a subtree that the user or a browser extension has modified) 
- Security: To prevent modifying or reading dangerous changes made on the user's side
- Last state modifications: To make modifications based on the last saved state

### Direct Modifications
Because of Anti's event model, you can modify the DOM directly. This is ideal in places where the integrity of the DOM is relaxed (not data critical).
For data-critical UIs it is important to use the sanitiser before reading directly from the DOM.

### Sanitiser
For safely reading directly from potentially dangerous parts of the DOM. This is your responsibility.

### String-based UI manipulation
You will notice there are no APIs for manipulating data or control flow when rendering. This is because Anti is a string-based DOM engine.
Because JavaScript has very strong string manipulation capablities, this makes Anti the most powerful UI framework for manipulating DOM elements.

### No environment dependencies
With Anti we are going back to the basics
- Anti can work directly in the browser using the `<script...` tag
- NPM usage is not mandatory
- Bundlers are not mandatory
- Babel and TypeScrpt are not needed 

## Support
Anti-Framework supports all modern browsers beyond IE11

## TBA (External libraries) 
- Router
- Static generator
- State Management System

Copyright 2022 © Julien Etienne, Vanslang 
