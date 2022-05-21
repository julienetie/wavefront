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

export {
    safeguardParams
}