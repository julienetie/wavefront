# Safety

## Sanitization
Most popular VDOM implementations feature built-in sanitization. This is a generic and care-free approach to DOM manipulation which comes at the cost of:
- VDOM performance
- Over sanitization
- Difficulty to override without the use of features such as `dangerouslySetInnerHTML`

Wavefront does not use a VDOM, therefore changes are made to the DOM with optimal performance. The implementor is responsible for sanitizing data at the source.

### Recommendation
#### Everything does not need to be sanitized
All DOM writes do not need to sanitize. The most important question to determine what should be sanitized is "Can you trust where the data is coming from"
- Local content: Local content within the project's codebase is considered trustworthy.
- Externally derived data: Data outside of the domain cannot be trusted, even if you have full control and access to their backends they are additional points of concern for compromisation. 
- User input: Typically, a user's input should be escaped to prevent compromise.

#### NoMarkup()
`NoMarkup()` is use for text that should never include HTML or markup of any kind. This should be used at the source.

#### SanitizeURL()
Use `SanitizeURL()` to sanitize what will be part or all of an HTML attribute. This should be used at the source.

#### EscapeInput()
`EscapeInput()` cleans an inputted value.

#### Sanitize API / DOMPurify
Use if fetched content is expected to include markup. E.g. fetching a string of HTML. 


//@todo wavefront cli with safety checks.
