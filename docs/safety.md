# Safety

## Sanitization
Popular VDOM implementations may featuer built-in sanitization. This is a generic and care-free approach to DOM manipulation but it comes at the cost of:
- VDOM performance
- A lot of changes are being checked in places it's not needed
- There's no way to control or get around these changes unless you use something like `dangerouslySetInnerHTML`

Antii does not have a VDOM so changes can be made to the DOM with optimal performance. It also does not generically sanitize everything you output to the DOM. 
Instead the implementor is responsible for sanitizing data at the source.

### Recommendation
#### Everything does not need to be sanitized
You do not need to sanitize everything you output. The most important question to determine what should be sanitized is "Can you trust where the data is coming from"
- Local content: Content local to the repository is usually trustworthy as it resides in the same place as the codebase
- Externally derrived data: Cannot be trusted, even if you have full control and access to the backend, the backend can become compromised 
- User input: Usualy this should be escaped to protect compromisation of any database that may store it.

#### NoHTML()
Use this function for text content that should never include HTML or markup. This should be used at the source.

#### SanitizeURL()
Use SanitizeURL to sanitize what will be part or all of an HTML attribute. This should be used at the source.

#### EscapeInput()
EscapeInput cleans the an inputted value before being sent to a database

#### Sanitize API / DOMPurify
Use if the content you expect may include HTML but with/ without dangerous tags or attributes

Using inappropriate sanitizers will not make your application safery. They should be used with their appropriate expectations.
