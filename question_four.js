let str1 = 'The Lazy Fox'
let str2 = 'Jumped Over the Fast Rabbit'

let result = str1 < str2

console.log(
  `${str1} is lexicographically ${result ? 'smaller' : 'greater'} than ${str2}`
)
