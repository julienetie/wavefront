



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

// Get properties
alter('selector')
.prop('className', value => void console.log(value))

// Set properties
alter('selector')
.prop('href', value => `${value}/new-page`)

// Get multiple properties
alter('selector')
.prop('href, value, classList.contains, dataset.test123', 
props => {
	const {href, value, dataset, test123} = props
	console.log(href, value, dataset, test123)
	console.log(props['classList.contains']('active'))
})

// Set multiple properties
alter('selector')
.prop(() => {
	return {
		href: '#new-href',
		value: 'new-value',
		test123: 'new-data-abc-value'
	}
})

// Set multiple properties shorthand
alter('selector')
.prop({
		href: '#new-href',
		value: 'new-value',
		test123: 'new-data-abc-value'
})


// Query nested elements and or chain
alter('selector')
.attr('class', value => void console.log(value))
.prop('className', value => void console.log(value))
.query('ul li a')
.attr('class', value => void console.log(value))
.prop('className', value => void console.log(value))
.query('span a')
.query('div:nth-child(5)')

// All reads and writes are batched

// Query all nested elements and or chain
alterAll('selector')  // Affects all matching selectors 
.attr('class', value => void console.log(value))
.prop('className', value => void console.log(value))
.query('ul li a')
.attr('class', value => void console.log(value))
.prop('className', value => void console.log(value))
.queryAll('span a') // Affects all matching nested selectors


// .closest(selector)

  

// .offsetParent()

// .parentElement()

// .parentNode()

// .nextSibling()

// .NextElementSibling()

// .previousSibling()

// .previousElementSibling()

// .lastChild()

// .firstChild()

// .lastElementChild()

// .firstElementChild
```
