import _store from './_store.js'

const { isArray, from } = Array
const { href, origin, hostname } = window.location
const WfEnvHeader = 'Wavefront_Env'
const wfEnvUrl = `${origin}/wf_env`
const metaEnv = 'meta[name="environment"]'
let precedence = ['header', 'meta', 'wf_env', 'set']
let methodAttempt = 0

const tryNextMethod = () => {
  methodAttempt++
  const method = precedence[methodAttempt]
  const nextMethod = envMethods[method]
  if (nextMethod) {
    nextMethod()
  } else {
    throw new Error(`WavefrontError: Cannot set environment after ${methodAttempt} attempts`)
  }
}

const envMethods = {
  header: async () => {
    try {
      const response = await fetch(href)
      const env = response.headers.get(WfEnvHeader)

      if (response.ok) {
        if (env) {
          envMethods.set(env, 'header')
        } else {
          console.warn('Wf: There\'s a problem with the WfEnvHeader value', env)
          tryNextMethod(methodAttempt)
        }
      } else {
        console.warn(`Wf: the HTTP request for ${href} did not succeed: status: ${response.status}`)
      }
    } catch (err) {
      console.warn(`Wf: Error fetching ${WfEnvHeader} header`, err)
    }
  },
  meta: () => {
    const env = document.head.querySelector(metaEnv)?.content
    if (env) {
      envMethods.set(env, 'meta')
    } else {
      console.warn(`Wf: ${metaEnv} not found.`)
      tryNextMethod()
    }
  },
  wf_env: async () => {
    try {
      const response = await fetch(wfEnvUrl)
      if (response.ok) {
        const text = await response.text()
        const env = text.replace('env=', '').trim()

        if (['prod', 'dev'].some(value => env.endsWith(value))) {
          envMethods.set(env, 'wf_env')
        } else {
          console.warn('Wf: There\'s a problem with the `wf_env` env value')
          tryNextMethod()
        }
      } else {
        console.warn(`Wf: the HTTP request for ${wfEnvUrl} did not succeed: status: ${response.status}`)
        tryNextMethod()
      }
    } catch (err) {
      console.warn('Wf: Error fetching wf_env:', err)
      tryNextMethod()
    }
  },
  set: (env = 'prod', source = 'set') => {
    if (!['prod', 'dev'].some(value => env.startsWith(value)) && !env.includes(':')) {
      console.error('Wf: Custom environments must be prefixed with a colon followed by `prod` or `dev`')
    }
    console.info('Env:', env)
    console.info('From source:', source)
    _store.env = env
    _store.envSource = source
  },
  get: () => _store.env
}

const wfEnv = {
  set: (env, customHostname) => {
    /*
        This will only action for local development and will fail for server environments */
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1') || hostname.includes(customHostname)) { // @todo Refactor
      envMethods.set(env)
    } else {
      envMethods[precedence[0]]()
    }
  },
  get: envMethods.get,
  define: order => {
    if (isArray(order)) {
      if (order.length <= 4 && order.length >= 1) {
        precedence = from(order)
      } else {
        console.warn('Wf: Order length is invalid')
      }
    }
    envMethods[precedence[0]]()
  },
  source: () => _store.envSource,
  isEnvNotSet: () => {
    console.error('Wavefront: The environment needs to be set to use the Wavefront API')
    console.log(typeof _store.env === 'string')
    console.log(['prod', 'env'].some(value => _store.env.includes(value)))
    return !(typeof _store.env === 'string' && ['prod', 'env'].some(value => _store.env.includes(value)))
  }
}

export {
  wfEnv
}