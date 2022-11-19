// . é um coring - valido apenas para uma posição

const text = '1X2,3,4XX5,6,7,8,9,0'

console.log(text.match(/1.2/g))
console.log(text.match(/4..5/g))

