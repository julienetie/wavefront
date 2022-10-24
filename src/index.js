/*
    e Y8b     Y88b Y88 88P'888'Y88 888
   d8b Y8b     Y88b Y8 P'  888  'Y 888
  d888b Y8b   b Y88b Y     888     888
 d888888888b  8b Y88b      888     888
d8888888b Y8b 88b Y88b     888     888

Licensed under the Apache License Version 2.0
Copyright 2022 © Julien Etienne, Vanslang */

import {
  paste,
  pasteInto,
  pasteBefore,
  removeWithin,
  remove,
  mutate
} from './collage.js'
import { safeguardParams } from './safety.js'
import { stencil, removeSlate, getSlate } from './slate.js'
import { stencilInto, sequence } from './helpers.js'
// import _store from './_store.js'
import {
  listenTo,
  dismiss,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  removeListener
} from './events.js'

const sanitize = string => {
  return string
}

// console.log(_store)
// setTimeout(() => {
//   console.log(_store)
// }, 8000)

const empty = ''

const raf = window.requestAnimationFrame
const caf = window.cancelAnimationFrame

const validateInput = (value, type) => {
  const input = document.createElement('input')
  input.type = type
  input.requred = true
  input.value = value
  return input.checkValidity()
}

export {
  paste,
  pasteInto,
  pasteBefore,
  // pasteAfter,
  // pasteStart,
  // pasteByIndex,
  // pasteEnd,
  listenTo,
  // ingnore
  stencilInto, // stencilInto
  stencil,
  // copy     string based copy
  // copyWithin
  // copyStart
  // copyEnd
  // copyByIndex
  // copyAfter
  // CopyBefore
  // cut       string based cut
  // cutStart
  // cutEnd
  // cutByIndex
  // cutWithin
  // cutAfter
  // cutBefore
  // displace     Element based move, keeps events updates state
  // swap
  mutate, // slate needs to store mutation, (if any)
  removeSlate,
  removeListener,
  removeWithin,
  remove,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  safeguardParams,
  getSlate,
  // muteSlate
  // unmuteSlate
  dismiss,
  sanitize,
  empty,
  sequence,
  raf,
  caf,
  validateInput
}
