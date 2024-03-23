/*
 * The `_store` object serves as the primary source for managing globally shared
 * data and state throughout the entirety of the Wavefront codebase.
 */
const _store = {
  delegatedEvents: new Map(),
  template: document.createElement('template'),
  slates: {},
  singleEvents: new WeakMap(),
  singleEventsAncestors: [],
  events: {
    globals: new Map(),
    delegates: new Map(),
    isSuspended: new Map(),
    bound: []
  },
  env: null,
  envSource: null,
  debug: {
    isDebugMode: false,
    warnings: {}
  },
  cps: {
    disable: false
  }
}

export default _store
