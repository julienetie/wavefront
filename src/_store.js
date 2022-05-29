/*
The `_store` object is the single origin for globally
shared data and state across the ANIT codebase */
const _store = {
  delegatedEvents: new Map(),
  template: document.createElement('template'),
  slates: {},
  singleEvents: new WeakMap(),
  singleEventsAncestors: []
}

export default _store
