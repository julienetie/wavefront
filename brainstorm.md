# Brainsstorm 
Figuring out Wavefront issues: 

## Template literal highlighting
Will be using a tagged function to aid with the template literal lighlighting.

There's two potential options: 
- The `o` function can be used as a passthough for template literal highlighters.
- The `@` symbol can be used to begin a string that should be highlighted as HTML

## Passing values into HTML tags
- You can only pass values between "" double quotes. E.g. `<div class="${someClass}">`. This limits the number of attack vectors.
- There's roughly a 40% decrease in performance when sanitizing this way, which is satisfactory
- We can treat developers like adults and allow them to opt out of sanitizing using an upwards arrow `<div class="^${someClass}">.
- Wavefront can be configured to
  - Disable automatic url sanitization
  - Enable automatic url sanitization (default)
  - Disallow url santiization bypass
  - Allow url santization bypass
  - Disallow components list
  - Allow components list
-  
