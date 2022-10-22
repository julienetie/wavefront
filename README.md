
![Anti-Framework Ant Image](https://github.com/julienetie/anti-framework/blob/06398a8ab78780795e143689c2c4ccc426455bb3/anti-framework.webp?raw=true)
# Wavefront

### The Anti-Framework

[![Standard-Js](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com/)


Wavefront is an ultramodern UI library that deviates from common JavaScript framework norms found in:  
[React](https://github.com/facebook/react), [Vue](https://github.com/vuejs/vue), [Angular](https://github.com/angular/angular), [Svelte](https://github.com/sveltejs/svelte) and [Solid.js](https://www.solidjs.com/).

- **Anti JSX**: Wavefront uses template-literal strings to define DOM nodes
- **Anti Virtual-DOM**: Wavefront does not use a VDOM, it queries the DOM 
- **Anti compiler**:  The code you see in your text editor is the source code 
- **Anti dependencies**  
- **High performance**: Anti-over-engineering 
- **Decoupled events**: The management of delegated and direct events are decoupled from the DOM
- **Separation of Concerns**: Logic and semantics are separated
- **Lightweight**: Less than 6kb minified
- **Minimalistic**
- **Scalable**: Solves real-world problems without inventing new ones
- **Easy customization**: Fork and customize without losing sleep

## Install 
```bash
npm install wavefront
```
or 
```html
<script src="wavefront.js"></srcipt>
```

## Hello World Example _(For the birds)_
```javascript
import { pasteInto } from 'wavefront'

const helloView = pasteInto('#root', ({greeting}) => `<h1>${greeting}</h1>`)

helloView({greeting: 'Hello World!') // <div id="root"><h1>Hello World!</h1></div>
```
## Features 

### Logic-less Views
> Wavefront is a simple string-based DOM engine that uses template-literals for generating DOM nodes. The values you place inside template-literal placeholders `${}` will result into a string _(this is just standard JavaScript)_. Wavefront prohibits logical syntax within placeholders. Values are to be evaluated before being passed into a template function.

### Viewless Controllers
> A component is made up of a single view or views, and a controller represented as files or directories. The logic of your component should only reside in the controller. Markup is not defined within the controller, only in the view. The controller should import view-functions for instantiation using required values.
You can also separate event logic into event _(files or directories)_ as an extension to your controller logic.
E.g.
- ui/
- - side-menu/
- - - controller.js
- - - view.js
- - - events.js  _(optional)_

### Decoupled Events 
> Event-delegation should be the first desirable approach when managing events. When delegation is not possible direct-events will suffice. When using Wavefront's API, Wavefront will automatically remove events from descendants before they are overwritten, to prevent memory-leaks. This means we can naturally write to the DOM without worrying about the ramifications of overwriting event driven components.

### DRY Templates
> View-templates are parameterized, meaning that they can take a variety of values for reuse without additional boilerplate code. This is just one of the many benefits of logic-less views.

### Slates
> Slates are snapshots of changes to a particular selector. Slates can be optionally stored or ignored when making a change to the DOM.
They are stored as strings and can be modified as either strings or elements. Each selector can have one slate which represents the last recorded change. 
This is useful for:
> - Preserving the integrity of the DOM: (A slate can be used to rectify a subtree that the user or a browser extension has modified) 
> - Security: To prevent modifying or reading dangerous changes made on the user's side
> - Last state modifications: To make modifications based on the last saved state

### Direct Modifications
> Because of Wavefront's event model, you can modify the DOM directly. This is ideal in places where the integrity of the DOM is relaxed (not data critical).
For data-critical UIs it is important to use the sanitizer before reading directly from the DOM.

### Sanitiser
> For safely reading directly from potentially dangerous parts of the DOM. This is your responsibility.

### String-based UI manipulation
> You will notice there are no APIs for manipulating data or control flow when rendering. This is because Wavefront is a string-based DOM engine. Because JavaScript has very strong string manipulation capabilities, this makes Wavefront the most powerful UI library for DOM manipulation.

### No environment dependencies
> With Wavefront we are going back to the basics
> - Wavefront can work directly in the browser using the `<script...` tag
> - NPM usage is not mandatory
> - Bundlers are not mandatory
> - Babel and TypeScrpt are not needed 

## Support
Wavefront supports all modern browsers beyond IE11

## Style
The Wavefront codebase and examples use [Standard](https://github.com/standard/standard) for code conformance. 

## TBA (External libraries) 
- Router
- Static generator
- State Management System

## Concepts

### Collage Development _(Overlaying)_ 
When using frameworks like React and Angular you will typically make changes to the UI by setting different states as well as flow control logic within the component semantics.

Wavefront uses a _Collage Development_ style, which allows you to overlay changes for any DOM selector of your choice, similar to how collage artwork is produced in the physical world. This means you generally do not need to be concerned about component hierarchy or managing hidden state changes when building or manipulating the UI.

The beauty of event-delegation is that you can change any part of the page without being concerned about overwriting an event. There are some cases where event-delegation is not possible or less intuitive when compared to using direct-events.

The reason you don't have to worry about what you overwrite via Wavefront is because direct-events are automatically removed on DOM mutations made within the Wavefront API.

So there is zero component hierarchy model in Wavefront, which means complete creative freedom and maximum maintainability.

### Params
This is simply the the ability to provide an object literal of values to a view. This allows the logic of a view-function to live outside of the semantics which is very different to DSLs like JSX which encourages you to pollute semantics with logic. 

To re-iterate, params are just object literals with values. They should always be named  `params`

### Slate
A slate is an internal variable that stores the state of the last DOM mutation of a given view-function.

Previously we talked about how Wavefront uses a _Collage_ style to allow you to manipulate the DOM without constraints. But this could cause some concerns.
- If you overwrite part of the DOM you may lose the previous state and if your `params` are arbitrary or unpredictable you may lose them forever.
- You could store that state manually but that will require more boilerplate code
- If you try to read from the DOM, a the user, extension or vulnerability could have made security compromises beforehand.

A slate is a representation of the last state of an applied collage. It contributes to:
- Integrity: If you are working on a sensitive part of your app (e.g. contact form, login, user input etc) you should be using the slate to prevent unwarranted external changes.
- Security: You can use the slate when you want to read or evaluate a copy of what was last applied to the DOM by yourself.

Each view-function has one slate which is updated on each applied collage. The markup of a slate is stored in memory as a string.

### Delegates 
A delegate is a virtual event target to help minimize the boilerplate logic of event-delegation management.
- You can create a delegate for any selector using `createDelegate(...)`
- You can detect a delegate conditionally using `suspect(...)` and determine if the target is equal, contained or closest to another element.
- You can call a delegate's handler using `trigger(...)`
- You can remove delegates using `removeDelegate`

This minimalist API was not intended to be a technical masterpiece but it is a viable solution that avoids tight coupling to make event management light-weight and maintainable. Because of this flexibility you can manage delegated events in any part of the app and even trigger events from unrelated places.

Wavefront has no intention to mask and polish things in JavaScript that are simple and work well. Therefore you can use the native `addEventListener` for global events _(document and window events only)`

### Sanitize 
It's inevitable that you must be able to read from the active DOM for various user inputs and interactions. Wavefront has an encapsulated way to do this using the `mutate(...)` method. 
Wavefront has a buti-in security linter which ensures that you use the `santizer(...)` when reading from a DOM element via the `mutate` function. 
- Mutate will understand the argument name and ensure that there are no left hand assignments to other variables without the use of the sanitizer.
- Mutate will also understand if that argument is being used as an argument for another function
- Mutate will warn about assigning external variables, the warning can be suppressed with an annotation 

The linter ensures that the DOM is read safely without any additional plugins or IDEs. This allows you to freely work directly with the DOM without unnecessary or costly restrictions.

The sanitizer removes dangerous content from a string.

### Safeguarding
