Alter will: 
- Update the DOM directly
- Optonally, lazily update a corresponding slate

```javascript 
alter('selector', ref) // Updates both the DOM and the slate (lazily)
```

```javascript
// Use callback functions with caution.
// Each callback function will read attributes or style attribtues before setting them.


// Get attribute value
const attr = alter('selector')
	.attr('class')

// Get multiple attributes, returns object of attr/ values
const attr = alter('selector')
	.attr('class,id,name,data-abc')

// Set attribute
alter('selector')
	.attr('class', 'side-bar')

// Set multple attributes by callback
alter('#test > section')
  .attr(() => {
    return {
      'data-test': 123,
      class: 'some-class',
      id: 'new-id'
    }
  })


// Set multple attributes by object
alter('#test > section')
  .attr({
    href: 'https://hello.com',
    name: 'name',
    'data-multiple': 'multi',
  })

// Set style by callbacks
alter('#test')
  .attr('style', () => {
    return {
      color: 'red',
      background: 'blue',
      'margin-top': '5rem',
      'z-index': '10',
      'display': 'grid',
    }
  })

// Set style by object
alter('#test')
  .attr('style', {
    color: 'darkgreen',
    background: 'yellow',
    'margin-top': '2rem',
    'z-index': '10',
    'display': 'grid',
  })

////////////////////////////////
// Get property value
const propClass = alter('#test').prop('className')

// Get multiple properties, returns object of attr/ values
const propGet = alter('#test').prop('className, id, tagName')

// Set property
alter('#test').prop('className', 'This is new Class')

// Set multple properties by callback
alter('#test > section')
  .prop((obj) => {
    console.log('obj:', obj)
    return {
      textContent: 'This is some text',
      className: 'apple',
      checked: true
    }
  })


// Set multple properties by object
alter('#test > section')
  .attr({
    innerText: 'https://hello.com',
    checked: false,
    offsetWidth: 1000,
  })
```
