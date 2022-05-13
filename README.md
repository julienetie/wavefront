![Anti-Framework Ant Image](https://github.com/julienetie/anti-framework/blob/06398a8ab78780795e143689c2c4ccc426455bb3/anti-framework.webp?raw=true)
# Anti-Framework

### Ultramodern JavaScript Anti-Framework

[![Standard-Js](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com/)

Anti-Framework is a UI library that takes an anti approach to the nature of frameworks like [React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue), [Angular](https://github.com/angular/angular), [Svelte](https://github.com/sveltejs/svelte) and [jQuery](https://github.com/jquery/jquery).

- **No JSX**:Anti uses template-literals to define DOM nodes
- **No Virtual-DOM**: Anti does not use a VDOM, which means it can perform better
- **No compiler needed** 
- **No dependencies**
- **High performance**: ideal for mobile
- **Decoupled events**: Both delegated and direct event listeners are decoupled from the DOM 
- **Separation of Concerns**: Logic and semantics are separated
- **Lightweight**: Less than 5kb minified
- **Minimalistic**
- **Scalable**: Solves real-world problems without inventing new ones
- **Easy customization**: Anti was made with the intention of forking and customization.  

## Install 
```bash
npm install anti-framework
```
or 
```html
<script src="anti-framework.js"></srcipt>
```

## Hello World Example _(For the birds)_
```javascript
import { insertInto } from 'anti-framework'

const helloView = insertInto('#root', ({greeting}) => `<h1>${greeting}</h1>`)

helloView({greeting: 'Hello World!') // <div id="root"><h1>Hello World!</h1></div>
```
## Features 

### Logic-less Views
> Anti is a simple string-based DOM engine that uses template-literals for generating DOM nodes. The values you place inside template-literal placeholders `${}` will result into a string _(this is just standard JavaScript)_. Putting logic inside template-literal placeholders will cause a mess and break the semantic and visual nature of markup like HTML and SVG. Therefore all values are to be evaluated before being passed into a template function.

### Viewless Controllers
> Your components should be separated by view/s and controller _(files or directories)_. The logic of your components only reside in the controller module/s. Markup is not defined within the controller, only in the view. The controller should import view-functions to instantiate with required values.
You can also separate event logic into event _(files or directories) as an extension to your controller logic.

### Decoupled Events 
> Event-delegation should be the first desirable approach when managing events. But when this is not possible we must add event-listeners directly to non-global and non-top-level UI elements. Anti will remove events from descendents before they are written over to prevent memory-leaks. This allows us to completely decouple both delegated and direct events from our natural inclination of writing to the DOM.

### DRY Templates
> View-template are parametrised, meaning that they can take a variety of values for reuse without additional boilerplate code.
This is just one of the many benefits of logic-less views.

### Slats
> Slates are snapshots of changes to a particular selector. Slates can be optionally stored or ignored when making a change to the DOM.
They are stored as strings and can be modified as strings or elements. Each selector can have one slate which represents the last recorded change. 
This is useful for:
> - Preserving the integrity of the DOM: (A slate can be used to rectify a subtree that the user or a browser extension has modified) 
> - Security: To prevent modifying or reading dangerous changes made on the user's side
> - Last state modifications: To make modifications based on the last saved state

### Direct Modifications
> Because of Anti's event model, you can modify the DOM directly. This is ideal in places where the integrity of the DOM is relaxed (not data critical).
For data-critical UIs it is important to use the sanitiser before reading directly from the DOM.

### Sanitiser
> For safely reading directly from potentially dangerous parts of the DOM. This is your responsibility.

### String-based UI manipulation
> You will notice there are no APIs for manipulating data or control flow when rendering. This is because Anti is a string-based DOM engine.
Because JavaScript has very strong string manipulation capablities, this makes Anti the most powerful UI framework for manipulating DOM elements.

### No environment dependencies
> With Anti we are going back to the basics
> - Anti can work directly in the browser using the `<script...` tag
> - NPM usage is not mandatory
> - Bundlers are not mandatory
> - Babel and TypeScrpt are not needed 

## Support
Anti-Framework supports all modern browsers beyond IE11

## Style
The Anti codebase and examples use [Standard](https://github.com/standard/standard) for code conformancy. 

## TBA (External libraries) 
- Router
- Static generator
- State Management System

## Concepts

### Collarge Development _(Overlaying)_ 
When using frameworks like React and Angular you will typically make changes to the UI by setting different states as well as flow control logic within the component semantics.

Anti uses a _Collarge Development_ style, which allows you to overlay changes for any DOM selector of your choice, similar to how collarge artwork is produced in the physical world. This means you generally do not need to be concerned about component hierarchy or managing hidden state changes when building or manipulating the UI.

The beauty of event-delegation is that you can change any part of the page without being concerend about overwriting an event. There are some cases where event-delegation is not possible or less intuitive when compared to using direct-events.

The reason you don't have to worry about what you overwrite in Anti is because direct-events are automatically removed on DOM mutations made within the Anti API.

So there is zero component hierarchy model in Anti, which means complete creative freedom and maximum maintainability.

### Params
This is simply the the ability to provide an object literal of values to a view-function. This allows the logic of a view-function to live outside of the semantics which is very different to DSLs like JSX which enourages you to pollute semantics with logic. 

To re-iterate, params are just but object lietrals with values. They should always be named  `params`

### Slate
A slate is an internal variable that stores the state of the last DOM mutation of a given view-function.

Previously we talked about how Anti use a _Collarge_ style to allow you to manipulae the DOM without constraints. But this could cause some concerns.
- If you overwrite part of the DOM you may lose the previous state and if your `params` are abritrary or unpredictable you may lose them forever.
- You could store that state manually but that will require more boileplate code
- If you try to read from the DOM, a the user, extension or vunerability could have made security compromises beforehand.

A slate is a representation of the last state of an applied collarge. It contributes to:
- Integrity: If you are working on a sensitive part of your app (e.g. contact form, login, user input etc) you should be using the slate to prevent unwarranted external changes.
- Security: You can use the slate when you want to read or evaluate a copy of what was last applied to the DOM by yourself.

Each view-function has one slate which is updaed on each applied collarge. The markup of a slate is stored in memory as a string.

### Delegates 
A delegate is a virtual event target to help minimise the boilerplate logic of event-delegation mangement.
- You can create a delegate for any selector using `createDelegate(...)`
- You can detect a delegate conditinoally using `suspect(...)` and determine if the target is equal, contained or closest to another element.
- You can call a delegate's handler using `trigger(...)`
- You can remove delegates using `removeDelegate`

This minimalistic API was not intended to be a technical masterpiece but it is a viable solution that avoids tight coupling to make event management light-weight and maintainable. Because of this flexability you can manage delegated events in any part of the app and even trigger events from unrelated places.

Anti has no intention to mask and polish things in JavaScript that are simple and work well. Therefore you can use the native `addEventListener` for global events _(document and window events only)`

### Sanitize 
It's inevitable that you must be able to read from the active DOM for various user inputs and interactions. Anti has an encapsulated way to do this using the `mutate(...)` method. 
Anti has a buti-in security linter which ensures that you use the `santizer(...)` when reading from a DOM element via the `mutate` function. 
- Mutate will understand the argument name and ensure that there are no left hand assignments to other variables without the use of the santizer.
- Mutate will also understand if that argument is being used as an argument for another function
- Mutate will warn about assigning exernal variables, the warning can be surprsessd with an annotation 

The linter ensures that the DOM is read safely without any additional plugins or IDEs. This allows you to freely work directly with the DOM without unecessary or costly restrictions.

The sanitizer removes dangerous content from a string.

### Safeguarding
