const fs = require('fs')
const dns = require('dns')

function timeStamp(text) {
    console.log(text, performance.now().toFixed(2))
    // return performance.now().toFixed(2)
}

console.log('Program start')

setTimeout(() => {
    timeStamp('setTime 1')
}, 0)

setTimeout(() => {
    process.nextTick(() => timeStamp('Next tick 2'))
    timeStamp('setTime 2')
}, 100)

let interval = 0
const intervalId = setInterval(() => {
    timeStamp(`Interval: ${interval += 1}`)
    if(interval === 2) clearInterval(intervalId)
}, 50)

fs.writeFile('./test.txt', 'Hello Node', () => timeStamp('File written'))

Promise.resolve().then(() => timeStamp('Promise 1'))

process.nextTick(() => timeStamp('Next tick 1'))

setImmediate(() =>  timeStamp('Immediate 1'))


dns.lookup('localhost', (err, address, family) => {
    timeStamp('DNS 1 localhost', address, family)
    Promise.resolve().then(() => timeStamp('Promise 2'))
    process.nextTick(() => timeStamp('Next tick 3'))
} )

console.log('Program finis')