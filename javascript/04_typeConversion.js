// let score = 10
// let scoreInString = String(score)

// console.log(typeof score)
// console.log(typeof scoreInString)


// let score = "10aba"
// let scoreInNumber = Number(score)

// console.log(typeof score)
// console.log(scoreInNumber)  ///gives NaN


let score = "10aba"  //gives true . but if string is empty it gives false
let scoreInNumber = Boolean(score)

console.log(typeof score)
console.log(scoreInNumber)