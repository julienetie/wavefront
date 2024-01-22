const empty = ''
const output = []
let tagOpened = false
let tagNameOpened = false
let tagName = empty

const htmlString = `
<h1>This is a dangerous HTML string</h1>
    <a href="javascript:alert(\'XSS attack!\')">
    Click me
    </a>
    'He'
    "Hello"
<script class='th" "ing'>
    alert(\'yo\'); console.log(\'YOUUUU\')
</script>'`


const markupParser = (input, options) => {

    if (typeof input !== 'string') return void console.error(`markupParser: Input value ${input} is not a string`)
    if (input.length < 3) return void console.error(`markupParser: Input value ${input} is too short`)


    input = htmlString
    /*
    
    ''
    ""
    ``
    \'\' - ignore
    \"\" - ignore
    \`\` - ignore
    
    - 1) Identify corresponding tick groups 
       - Make an object of tick ranges
       {
        34:95,
        206:208,
        1045:1243,
       }
    
       - Handle broken ranges
         - Abroken range should invalidate the tag capturing group and remove it entirely 
         - backtick values are ignored
         - Single quotes are ignored
         - absent quotes are ignored 
    
    - 2) Identify Open Tag capture groups foollowed by Closed tag capture groups
         Anything else is a text range
    
        - comments 
        - white space
        - text 
        - opening tag 
        - closing tag 
        - attribute values 
    */
    console.time('test')
    const ranges = {
        doubleQuotes: {},
        singleQuotes: {}
    }
    let i = -1
    let openingDoubleQuote = null
    let openingSingleQuote = null
    const head = {
        openTag: {
            inside: false
        },
        closingTag: {
            inside: false
        },
        doubleQuotes: {
            inside: false
        },
        singleQuotes: {
            inside: false
        }

    }
    let headInsideDoubleQuotes = false
    let headInsideOpenTag = false
    for (const char of input) {
        i++

        // Record Opening and closing tags
        switch (true) {
            // Open Tag Start
            case char === '<' && !head.doubleQuotes.inside && !head.openTag.inside && !head.closingTag.inside && !head.singleQuotes.inside:
                head.openTag.inside = true       
                break
            // Open Tag End
            case char === '>' && !head.doubleQuotes.inside && head.openTag.inside && !head.closingTag.inside && !head.singleQuotes.inside :
                head.openTag.inside = false
                break
            // Closing Tag Start
            case char === '</' && !head.doubleQuotes.inside && !head.openTag.inside && !head.closingTag.inside && !head.singleQuotes.inside:
                head.closingTag.inside = true
                break
            // Closing Tag End
            case char === '>' && !head.doubleQuotes.inside && !head.openTag.inside && head.closingTag.inside && !head.singleQuotes.inside:
                head.closingTag.inside = false
                break
            // DoubleQuotes Start
            case char === '"' && !head.doubleQuotes.inside && head.openTag.inside && !head.singleQuotes.inside:
                head.doubleQuotes.inside = true
                openingDoubleQuote = i
                break
            // DoubleQuotes End
            case char === '"' && head.doubleQuotes.inside && head.openTag.inside && !head.singleQuotes.inside:
                head.doubleQuotes.inside = false
                console.log(i)
                ranges.doubleQuotes[openingDoubleQuote] = i
                openingDoubleQuote = null
                break
            // SingleQuotes Start
            case !!char.match('\\.'):
                console.log('char ===', char, i )
            case char === '\'' && !head.doubleQuotes.inside && head.openTag.inside && !head.singleQuotes.inside:
                head.singleQuotes.inside = true
                openingSingleQuote = i
                break
            // SingleQuotes End
            case char === '\'':
                // console.log(i, head.doubleQuotes.inside, head.singleQuotes.inside)
            case char === '\'' && head.singleQuotes.inside && head.openTag.inside && !head.doubleQuotes.inside:
                head.singleQuotes.inside = false
                ranges.singleQuotes[openingSingleQuote] = i
                openingSingleQuote = null
                break
        }



    }
    console.log(ranges)
    console.timeEnd('test')
}


export default markupParser