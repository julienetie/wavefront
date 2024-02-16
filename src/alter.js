import { query } from './helpers.js'



const attrPartial = (el) => {

    return (attributes, callback) => {
        const attributesList = attributes.split(',').map(attr => attr.trim())
    }
}



const alter = (selector, ref) => {
    const el = query(selector)

    return {
        attr: attrPartial(el), 
        prop: null
    }
}

const alterAll = ()=> {

}

export {
    alter,
    alterAll
}