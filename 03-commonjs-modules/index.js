const { name, favoriteNumber} = require('./multiple-exports')
const { hobbies, friend } = require('./export-and-import')
const greeting = require('./single-export')
console.log(name)
console.log(favoriteNumber)


greeting(name)

console.log(hobbies)
console.log(friend)