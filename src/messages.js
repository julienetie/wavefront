const errors = {
    type_1: (
        value,
        expectedType,
    ) => `TypeError: Argument '${value}' must be of type ${expectedType}, received ${typeof value}`,
    el_1:  (
        value,
    ) => `TypeError: Expected argument to be an element, but received ${typeof value}`,
}

const warnings = {
    arg1: (
        value,
        expectedType,
        receivedType
    ) => `TypeError: Argument '${value}' must be of type ${expectedType}, received ${receivedType}`
}

export {
    errors,
    warnings,
}