/*
When params are provided `null`, `NaN` and `undefined` values will be replaced
by a blank spaced string. When a denylist and replacement word is additionally provided
param's values will be treated as strings and matching results will be replaced by the
replacement word */
const safeguardParams = (params, denylistPattern, replaceWord) => {
  if (denylistPattern) {
    let paramsJSON = JSON.stringify(params)
    const foundDeniedWords = paramsJSON.match(denylistPattern)
    if (foundDeniedWords) {
      console.warn(`Denied pattern ${denylistPattern} was found in ${JSON.stringify(params)}`)
      foundDeniedWords.forEach(deniedWord => {
        paramsJSON = paramsJSON.replace(new RegExp(deniedWord, 'g'), replaceWord)
      })
    }
    return JSON.parse(paramsJSON)
  }

  Object.entries(params).forEach(([key, value]) => {
    switch (true) {
      case value === undefined:
      case value === null:
      case Object.is(value, NaN):
        params[key] = ' '
        break
    }
  })
  return params
}

// const sanitizeURL = text => {
//     if (isJavaScriptProtocol.test(url)) {
//         throw new Error(
//             'React has blocked a javascript: URL as a security precaution.',
//         );
//     }
// }

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either an allowed protocol (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */
const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi

/* A pattern that matches safe srcset values */
// const SAFE_SRCSET_PATTERN = /^(?:(?:https?|file):|[^&:/?#]*(?:[/?#]|$))/gi

/** A pattern that matches safe data URLs. Only matches image, video and audio types. */
const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

const sanitizeURL = (url) => {
  url = String(url)
  if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN)) return url

  console.warn(`WARNING: sanitizing unsafe URL value ${url}`)
  return `unsafe:${url}`
}

const sanitizeSrcset = (srcset) => {
  srcset = String(srcset)
  return srcset.split(',').map((srcset) => sanitizeURL(srcset.trim())).join(', ')
}

export {
  safeguardParams,
  sanitizeURL,
  sanitizeSrcset
}
