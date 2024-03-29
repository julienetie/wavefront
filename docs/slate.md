# Slate API
> Functions for logging, manipulating and applying stored stencils

#### [Slate Functions](#Slate-Functions)
> Slate Methods 
  - [applySlate()](#applySlate)
  - [copySlate()](#copySlate)
  - [getSlate()](#getSlate)
  - [logSlate()](#logSlate)
  - [removeSlate()](#removeSlate)
___
> Set Operations 
  - [set.concat()](#set.concat)
  - [set.difference()](#set.difference)
  - [set.intersect()](#set.intersect)
  - [set.symmetricDifference()](#set.symmetricDifference)
  - [set.union()](#set.union)
___
> Set Actions 
  - [set.\<setOperation\>().to()](#to)
  - [set.\<setOperation\>().apply()](#apply)
___
#### [Obscuring Operators](#Obscuring-Operators)
  - [Obscure Line](#Obscure-Line)
  - [Obscure Character](#Obscure-character)
  
<!--
## Understanding The Slate API

A slate is an object that consists of:
- stencil: _`readonly`_ (previously template handler/ delcarativeTemplate)
- cleanProps: _`readonly`_ The inital params that were rendered or last updated (always cleaned)
- selector: Where it belongs in the DOM
- collageType: The collage API used to insert it into the DOM `paste`|`pasteAfter` etc
- el: _`Not accessible`_ A detatched DOM element
- invokeType: _immediate | late | lazy_ | null
- denyListWords
- reaplceWord

Underlying API

- alterSlate() // creates the el (if not exist) -> modify the el -> replace the stencil via the el -> to the invokeType 
- replaceSlate() // Replaces the stencil -> create and replaces the el -> to the invokeType
- createSlate() // create slate from an existing salate (copies everything) -> immediately
- renderSlate() // render given slate 
- removeSlate() // remove given slate


```javascript

getSlate(ref) // Returns an object showing the last slate { stencil, cleanProps, selector, collageType, invokeType, denyListWords, replaceWord }
logSlate(ref) // logs the lsate

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


`|` Ignore line: Ignores a line in the a set operation 
`¬` Ignore character: Ignores a character in the set operation
```
---
## The Slate API
### logSlate()
#### `logSlate(...ref)`
•  ref _`String`_ •  

The logSlate() function will log given slates.
```javascript
 logSlate('sidebar', 'footer') // Logs the sidebar and footer slates
```
-->
