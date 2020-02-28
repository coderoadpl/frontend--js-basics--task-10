'use strict'

var names = ['Ala', 'Ola', 'Ela']

var objectNames = {
    0: 'Ala',
    1: 'Ola',
    2: 'Ela'
}

console.log(names) // Array
console.log(names.length) // 3
console.log(names[0]) // 'Ala'
console.log(names[1]) // 'Ola'
console.log(names[2]) // 'Ela'

names[0] = 'Alicja'
names[1] = names[1] + '!'
names[3] = 'Iza'
console.log(names) // Array

console.log(objectNames) // Object
console.log(objectNames.length) // undefined