import { query, queryAll, isPrimitive } from './helpers.js'
const { isArray } = Array

/**
 *
 * @param el
 */
const getAttributes = el => {
  const attributes = {}
  for (const attr of el.attributes) attributes[attr.name] = attr.value
  return attributes
}

/**
 *
 * @param el
 */
const getStyleObj = el => {
  const styleString = el.getAttribute('style').slice(0, -1).split('; ') // @todo No safe split needs better regex
  const styleObj = {}
  styleString.forEach(pair => {
    const [key, value] = pair.split(':') // @todo not safe split
    styleObj[key] = value.trim()
  })
  return styleObj
}

/**
 *
 * @param el
 * @param type
 */
const alterPartial = (el, type) => {
  if (el === null) console.error(`${el} is not an element`)
  const isAttr = type === 'attr'
  return (fnOrObj, callback) => {
    const isElArray = isArray(el)

    /**
     *
     * @param el
     */
    const alterElement = el => {
      // Set by object
      const isFunction = typeof fnOrObj === 'function'
      if (typeof fnOrObj === 'object' || isFunction) {
        const returnObject = isFunction ? fnOrObj(isAttr ? getAttributes(el) : null) : fnOrObj
        Object.entries(returnObject).forEach(([key, value]) => {
          if (isAttr) {
            el.setAttribute(key, value)
          } else {
            el[key] = value
          }
        })
        return
      }

      // Set style
      if (isAttr && fnOrObj === 'style') {
        const isFunction = typeof callback === 'function'
        const returnValue = isFunction ? callback(getStyleObj(el)) : callback
        Object.assign(el.style, returnValue)
        return
      }

      // Expose classList
      if (!isAttr && fnOrObj === 'classList') return el.classList

      // Expose data
      if (!isAttr && fnOrObj === 'dataset') return el.dataset

      if (isPrimitive(fnOrObj) && fnOrObj !== undefined) {
        const fnOrObjList = fnOrObj.split(',')

        // Get attributes
        if (callback === undefined) {
          // multi
          const obj = {}
          if (fnOrObjList.length > 1) {
            fnOrObjList.forEach(attrName => {
              const trimmedName = attrName.trim()

              obj[trimmedName] = isAttr ? el.getAttribute(trimmedName) : el[trimmedName]
            })
            return obj
          }
          return isAttr ? el.getAttribute(fnOrObj) : el[fnOrObj]
        }
        // Set attribute
        if (isPrimitive(callback)) {
          if (isAttr) {
            el.setAttribute(fnOrObj, callback)
          } else {
            el[fnOrObj] = callback
          }
        }
      }
    }

    return isElArray ? el.map(alterElement) : alterElement(el)
  }
}

/**
 *
 * @param selector
 * @param ref
 */
const alter = (selector, ref) => {
  const el = query(selector)
  return {
    attr: alterPartial(el, 'attr'),
    prop: alterPartial(el, 'prop'),
    classList: el.classList,
    dataset: el.dataset,
    el
  }
}

/**
 *
 * @param selector
 * @param ref
 */
const alterAll = (selector, ref) => {
  const el = queryAll(selector)
  return {
    attr: alterPartial(el, 'attr'),
    prop: alterPartial(el, 'prop')
  }
}

export {
  alter,
  alterAll
}
