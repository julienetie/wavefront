/**
 * Copyright © Wavefront, Julien Etienne 2024.
 *
 * This source code is subject to the terms of the MIT license, 
 * which are detailed in the LICENSE file located at the root 
 * directory of the Wavefront repository.
 *
 */

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
  bound,
  events,
  target
} from './events.js'

import { safeguardParams } from './safety.js'
import { stencil, removeSlate, getSlate } from './slate.js'
import { stencilInto, sequence, pending } from './helpers.js'
import { waveEnv, c, waveCps } from './environment.js'

// XssKillah
import xssKillah from '../libs/xsskillah.js'

const raf = window.requestAnimationFrame
const caf = window.cancelAnimationFrame
const sanitize = xssKillah
const empty = ''

/**
 *
 * @param value
 * @param type
 */
const validateInput = (value, type) => {
  const input = document.createElement('input')
  input.type = type
  input.requred = true
  input.value = value
  return input.checkValidity()
}

/**
 *
 * @param strings
 * @param {...any} values
 */
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
  paste,
  pasteInto,
  pasteBefore,
  pasteAfter,
  pasteStart,
  pasteByIndex,
  pasteEnd,
  bound,
  events,
  target,
  pending,

  alter,
  alterAll,
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

  removeWithin,
  remove,

  safeguardParams,
  getSlate,
  // muteSlate
  // unmuteSlate

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
  _
}
