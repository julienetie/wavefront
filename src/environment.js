import _store from './_store.js'

const { isArray, from } = Array
const { href, origin, hostname } = window.location
const WfEnvHeader = 'Wavefront_Env'
const wfEnvUrl = `${origin}/wf_env`
const metaEnv = 'meta[name="environment"]'
let precedence = ['header', 'meta', 'wf_env', 'set']
let methodAttempt = 0

const isLocal = customHostname => hostname.includes('localhost') || hostname.includes('127.0.0.1') || hostname.includes(customHostname)

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

const waveEnv = {
    set: (env, customHostname) => {
        /*
            This will only action for local development and will fail for server environments */
        if (isLocal(customHostname)) { // @todo Refactor
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


const c = {}
Object.keys(console).forEach(fn => {
    c[fn] = (...params) => {
        const env = envMethods.get()
        if (env.endsWith('prod')) return
        console[fn](...params)
    }
})

const waveDebug = {
    enable: () => _store.debug.isDebugMode = true,
    disbale: () => _store.debug.isDebugMode = false,
    isEnabled: () => _store.debug.isDebugMode,
    warnings: {
        toggle: (type, value) => {
            if (typeof value !== 'boolean') return

            if (type === 'all') {
                Object.keys(_store.debug.warnings).forEach(key => {
                    _store.debug.warnings[key] = value
                })
            } else {
                _store.debug.warnings[type] = value
            }
        }
    }
}

const waveCps = {
    /* 
    Disables Trusted types for local development

    This will override the creation of trusted type policies in the Wavefront API.
    It does not tamper with the requirements of the meta tags. 

    The implementor will be responsible for: 
    - Conditionally hiding/ showing the meta tags from the backend
    - Removing or commenting the meta tags when developing or if necessary for other environments.
    */
    disable: (type = 'dev') => {
        switch (type) {
            case 'dev':  // Disable Trusted Types for local development 
                if (envMethods.get().endsWith('dev')) {
                    _store.cps.disable = true
                }
                break
            case 'prod': // Disable Trusted Types for prod
                if (envMethods.get().endsWith('prod')) {
                    _store.cps.disable = true
                }
                break
            case 'all': // Disable Trusted Types for prod
                _store.cps.disable = true
                break
            default: // Disable Truested Types for custom environments
                if (envMethods.get() === type) {
                    _store.cps.disable = true
                }
                break
        }
    }
}

export {
    waveDebug,
    waveEnv,
    waveCps,
    c
}
