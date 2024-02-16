



Alter will: 
- Update the DOM directly
- Optonally, lazily update a corresponding slate

```javascript 
alter('selector', ref) // Updates both the DOM and the slate (lazily)
```

```javascript
// Get attribute
alter('selector')
.attr('class', value => void console.log(value))

// Set attribute
alter('selector')
.attr('class', value => `${value}-123`)

// Get multiple attributes
alter('selector')
.attr('class,id,name,data-abc', (Class, id, name, dataAbc) => {
	console.log(Class, id, name, dataAbc)
})

// Set multiple attributes
alter('selector')
.attr(() => {
	return {
		Class: 'new-class',
		id: 'new-id',
		name: 'new-name',
		dataAbc: 'new-data-abc-value'
	}
})

// Set multiple attributes shorthand
alter('selector')
.attr({
		Class: 'new-class',
		id: 'new-id',
		name: 'new-name',
		dataAbc: 'new-data-abc-value'
	})

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
