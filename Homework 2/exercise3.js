let numbers = new Array(5)
let sum1 = 0
for (let i = 0; i < numbers.length; i++){
    numbers[i] = Math.floor(Math.random() * (10 - 1) + 1)
}

let sumSquares = numbers.reduce((sum, element) => sum + Math.pow(element, 2), 0)
let productSquares = numbers.reduce((sum, element) => sum * Math.pow(element, 2), 1)
console.log(numbers, sumSquares, productSquares)