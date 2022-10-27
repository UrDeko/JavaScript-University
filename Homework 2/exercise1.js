let numbers = new Array(5)
for (let i = 0; i < numbers.length; i++){
    numbers[i] = Math.floor(Math.random() * (10 - 1) + 1)
}
let cubicNumbers = numbers.map(e => Math.pow(e, 3))
console.log(numbers, cubicNumbers)