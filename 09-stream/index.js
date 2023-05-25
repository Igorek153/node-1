const fs = require('fs')

const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test'), (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test'))
//
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('Закончил читать'))
// stream.on('open', () => console.log('начал читать'))
// stream.on('error', (e) => console.log(e))

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n')
}

writableStream.end()