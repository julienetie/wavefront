/*
    e Y8b     Y88b Y88 88P'888'Y88 888
   d8b Y8b     Y88b Y8 P'  888  'Y 888
  d888b Y8b   b Y88b Y     888     888
 d888888888b  8b Y88b      888     888
d8888888b Y8b 88b Y88b     888     888

MIT Copyright 2024 © Julien Etienne, Vanslang */

// Alter
import {
  alter, alterAll
} from './alter.js'

// Collage 
import {
  paste,
  pasteInto,
  pasteBefore,
  pasteAfter,
  pasteStart,
  pasteByIndex,
  pasteEnd,
  removeWithin,
  remove,
  mutate
} from './collage.js'

// Events
import {
  listenTo,
  dismiss,
  createDelegate,
  suspect,
  trigger,
  removeDelegate,
  removeListener
} from './events.js'

import { safeguardParams } from './safety.js'
import { stencil, removeSlate, getSlate } from './slate.js'
import { stencilInto, sequence } from './helpers.js'
import { waveEnv, c, waveCps } from './environment.js'

// XssKillah
import xssKillah from '../libs/xsskillah.js'

const raf = window.requestAnimationFrame
const caf = window.cancelAnimationFrame
const sanitize = xssKillah
const empty = ''


const validateInput = (value, type) => {
  const input = document.createElement('input')
  input.type = type
  input.requred = true
  input.value = value
  return input.checkValidity()
}

const tag = (strings, ...values) => {
  let result = empty

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]
    if (i < values.length) result += values[i]
  }
  return result
}

const _ = tag
const html = tag

export {
  alter,
  alterAll,
  paste,
  pasteInto,
  pasteBefore,
  pasteAfter,
  pasteStart,
  pasteByIndex,
  pasteEnd,
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
  validateInput,
  waveEnv,
  waveCps,
  c,
  html,
  _,
}
