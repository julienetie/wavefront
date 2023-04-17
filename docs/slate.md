# Slate API
The Slate API allows you to manage and use stored declarativeTemplates

- [Understanding The Slate API](#Understanding-the-Slate-API)
- [The Slate API](#The-Slate-API)
  - [getSlate()](#getSlate)
  - [removeSlate()](#removeSlate)
  - [stencil()](#pasteAfter)

## Understanding The Slate API





```javascript

getSlate(ref) // Returns an object showing the last slate { templateHandler, cleanedParams, selector }
setSlate(ref, slate)  // Sets a new or existing slate using a templateHandler, cleanedParams and selector
copySlate(ref, ref)  // Shorthand for setSlate(ref, getSlate(ref))
applySlate(ref) // Renders the slate to it's selector
applySlate(ref, props) // Renders a slate with new props
removeSlate(ref)  // remove a slate


set.join(ref, ref) // Join two or more slates
set.intersect(ref, ref) // intersect two or more slates
set.difference(ref, ref) // difference of two or more slates
set.symmetricDifference(ref, ref) // symmetric difference of two or more slates
set.union(ref, ref) // union of two or more slates

set.<setoperation>().to(ref)  // write to a new or existing slate
set.<setoperation>().get()   // Returns the new set without writing 

`|` Ignore line: Ignores a line in the a set operation 
`¬` Ignore character: Ignores a character in the set operation
```
