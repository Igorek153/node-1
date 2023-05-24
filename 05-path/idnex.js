const path = require('path')

console.log('DIRNAME', __dirname)
console.log('DIRNAME RESOLVE', path.resolve(__dirname, 'test'))


console.log(path.join('first', 'second'));
console.log(path.join(__dirname, '..'));
const  fullPath = path.resolve(__dirname, 'first', 'second');

console.log('Parse path', path.parse(fullPath))
console.log('Разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullPath))
console.log('Расширение файла', path.extname(fullPath))

// -----------------------------------------------------

const siteUrl = 'http://localhost:8080/users?id=153'


const url = new URL(siteUrl)

console.log(url)