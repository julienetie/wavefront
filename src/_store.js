/*
The `_store` object is the single origin for globally
shared data and state across the ANIT codebase */
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
  },
  env: null,
  envSource: null,
  debug:{
    isDebugMode: false,
    warnings: {},
  },
  cps: {
    disable: false
  }
}

export default _store
