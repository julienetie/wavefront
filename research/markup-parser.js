const empty = ''
const output = []
let tagOpened = false
let tagNameOpened = false
let tagName = empty

const chDef = char => {
    switch (char) {
        case '<':
            tagOpened = true
            tagNameOpened = true
            return char
        case '>':
            tagOpened = false
            tagNameOpened = false
            return char
        case ' ':
        case '\t':
        case '\n':
        case '\r':
        case '\f':
        case '\v':
            tagNameOpened = false
            return char
        default:
            if (tagNameOpened) {
                tagName += char
            }
            return char
    }
}



const template = document.createElement('template')
const div = document.createElement('div')
template.appendChild(div)
const tempDiv = template.firstElementChild
let lastInsert = tempDiv

const insert = markupString => {
    lastInsert.insertAdjacentHTML('afterbegin', markupString)
    lastInsert = lastInsert.firstChild
}


const markupParser = (input, options) => {
    
    if (typeof input !== 'string') return void console.error(`markupParser: Input value ${input} is not a string`)
    if (input.length < 3) return void console.error(`markupParser: Input value ${input} is too short`)

    // Trim and split the input by new lines
    const splitInputEntries = input.trim().split(/\n/).entries()

    for (const [i, item] of splitInputEntries) {

        const i0 = item[0]
        const i1 = item[1]
        const i2 = item[2]
        const i3 = item[3]
        const i4 = item[4]
        const i5 = item[5]
        const i6 = item[6]
        const i7 = item[7]
        const i8 = item[8]
        const i9 = item[9]
        const i10 = item[10]
        const i11 = item[11]
        const i12 = item[12]
        const i13 = item[13]
        const i14 = item[14]
        const i15 = item[15]

        const lineLength = item.length
        let lineAcc = empty
        let j = 0

        // Empty line
        if(item.trim().length === 0 && !tagOpened){
            console.info('-- Skipped blank line index:', i)
            continue
        }

        console.log(i, item)
        lineAcc += chDef(i0) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i1) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i2) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i3) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i4) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i5) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i6) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i7) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i8) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i9) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i10) || empty
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i11) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }

        lineAcc += chDef(i12) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i13) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i14) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }
        lineAcc += chDef(i15) || empty
        j++
        if (lineLength  === j) {
            console.log('tagName:', tagName)
            console.log('lineAcc:', lineAcc)
            insert(lineAcc); continue
        }

        console.log('lineAcc:::', lineAcc)
        if(i === 4){
            break
        }
    }

    return tempDiv.firstElementChild
}


export default markupParser