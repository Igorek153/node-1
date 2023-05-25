let running = true
setTimeout(() => {
    running = false
}, 10)

function setImmediatePromise() {
    return new Promise((res, rej) => {
        setImmediate(() => res())
    })
}

async function whileLoop() {
    while (running) {
        console.log('while loop running...')
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log('END'))