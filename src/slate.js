import { removeDescendentEvents, query, removeChildNodes } from './helpers.js'
import _store from './_store.js'

/*
replaces the last stored slate into it's referenced DOM position */
const stencil = (ref, paramsSandbox, sandbox) => {
  if (!_store.slates[ref]) {
    console.log(`Slate ${ref} does not exist`)
  }

  // Get the slate
  const { templateHandler, selector, params: defaultParams } = _store.slates[ref]
  const el = query(selector)

  if (el.children.length > 0) {
    // Remove all nested events
    removeDescendentEvents(el)
    // Remove all children
    removeChildNodes(el)
  }
  let newParams
  let sandboxHandler

  const templateContainer = document.createElement('div')
  _store.template.append(templateContainer)
  templateContainer.insertAdjacentHTML('afterbegin', markup)
  const temp = templateContainer.firstElementChild

  switch (true) {
    case paramsSandbox === undefined:
    case paramsSandbox === null:
      el.insertAdjacentHTML('afterbegin', templateHandler(defaultParams))

      el.replaceWith(temp)
      templateContainer.remove()
      break
    case typeof paramsSandbox === 'object' && typeof sandbox === 'function':
      newParams = paramsSandbox
      sandboxHandler = sandbox
    case typeof paramsSandbox === 'function': {
      sandboxHandler = sandboxHandler || paramsSandbox
      const markup = templateHandler(newParams || defaultParams)

      _store.template.append(templateContainer)
      templateContainer.insertAdjacentHTML('afterbegin', markup)

      const temp2 = templateContainer.firstElementChild

      const modifiedTemp = sandboxHandler(temp2, defaultParams)
      el.replaceWith(modifiedTemp)
      templateContainer.remove()
    } break
    case typeof paramsSandbox === 'object':
      el.replaceWith(temp)
      templateContainer.remove()
      break
  }
}

/*
Removes a slate by reference */
const removeSlate = (ref) => {
  if (_store.slates[ref]) {
    delete _store.slates[ref]
  }
}

/*
Gets the slate wrapper */
const getSlate = ref => {
  return _store.slates[ref]
}

export {
  stencil,
  removeSlate,
  getSlate
}
