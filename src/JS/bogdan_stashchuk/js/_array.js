const array = [1, 2, 3]
const array2 = [1, 2, 3]

console.log(array === array2)

const array3 = array

console.log(array === array3)

array.length = 7
console.log(array) // [ 1, 2, 3, <4 empty items> ]
