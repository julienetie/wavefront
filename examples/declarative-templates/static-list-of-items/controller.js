import {empty} from '../../../src/index.js'
import {liView, wrapperView} from './view.js'



const staticListOfItems = items => {
    return wrapperView({
        list: items.map(([href, title]) => liView({href, title})).join(empty)
    })       
}

export default staticListOfItems
