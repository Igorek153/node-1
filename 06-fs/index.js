const fs = require('fs')
const path = require('path')
//
// console.log('Start')
// fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('папка создана')
// })
// console.log('end')

//
// fs.rmdir(path.resolve(__dirname, 'dir1'), (err) => {
//   if (err) {
//     console.log(err)
//   }
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'asdasdsad', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('File created')
//   fs.appendFile(path.resolve(__dirname, 'text.txt'), 'ADD NEW TETx', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('File updated')
//   })
// })

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path,  {encoding: 'utf-8'},(err, data) => {
      if (err) {
        return reject(err.message)
      }
      resolve(data)
    })
  })
}

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path,(err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}


// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'Data test')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '111'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '222'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '333'))
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//   .then(() => console.log('File was removed'))

const text = process.env.TEXT || '';
console.log(process.env.TEXT)
writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then(data => data.split(' ').length)
  .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Количество слов: ${count}`))
  .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))


