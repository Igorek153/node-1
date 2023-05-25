const name = 'Ihor'
const hobbies = ['dancing', 'drink coca-cola']
const favoriteNumber = 153
console.log('Text from the multiple-exports')


exports.name = name;
exports.hobbies = hobbies;
module.exports.favoriteNumber = favoriteNumber;