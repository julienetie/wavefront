const trust = () => {
    const test = document.head.querySelector('[http-equiv="Content-Security-Policy"]')?.content
    console.info('trust', test)
}



export {
    trust
}