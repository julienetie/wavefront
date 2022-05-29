import { empty, mutate, sanitize } from '../../../src/index.js'
import { liView, wrapperView } from './view.js'
const { random } = Math

const asyncListOfItems = items => {
  items.forEach((_, i) => {
    const randomDelay = random() * random() / random() * 1000
    const limitedDelay = randomDelay > 3000 ? 3000 : randomDelay
    setTimeout(() => {
      mutate('#async-list', ({ children }) => {
        /**
                 * A warning will show in the console until you suppress it using the follwing
                 * SurpressXSSWarnings
                 * BeginXSSWarnings
                 */
        // __SurpressXSSWarnings

        const [href, title] = items[i]
        const li = children[i]
        const a = li.querySelector('a')
        a.href = href
        a.textContent = title

        // __BeginXSSWarnings
      })
    }, limitedDelay)
  })
  // let result
  // el.attr
  // // get.Attrs and get.Props have built in sanitizer
  // alter(`#async-list:nth-child(${i})`, get.Attrs({class: value => result = sanitize(value)}) // must include santize in function body, no return allowed, no body
  // .query(`a`, get.Props({
  //     href: href => x = href,
  //     textContent: text => y = text,
  //     'classList.contains': {input: args('bar','foo'), output: result => z = result}, // executes contains as a function
  //     'classList.entries': ['foo'] // executes contains as a function
  // }))
  // // alter(`#async-list:nth-child(${i})`, set.Attrs({class: ''})
  // .query(`a`, set.Props({
  //     href,
  //     textContent: text,
  //     'classList.remove': args('blah')
  // }))
  // // .
  // // alterAll(`#async-list:nth-child`, attr({class: ''})
  // // .queryAll(`a`, properties({href, textContent: text}))

  // /*
  //     .closest(selector, modifierType)

  //     .offsetParent(modifierType)
  //     .parentElement
  //     .parentNode

  //     .nextSibling
  //     .NextElementSibling
  //     .previousSibling
  //     .previousElementSibling

  //     .lastChild
  //     .firstChild
  //     .lastElementChild
  //     .firstElementChild
  // */

  const pendingListView = items.map(_ => liView({ state: 'pending', href: '#', title: '...pending' })).join(empty)
  return wrapperView({ pendingListView })
}

export default asyncListOfItems
