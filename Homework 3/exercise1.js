function sum(numbers){
    return numbers.reduce((s, e) => s + e, 0)
}

function add(numbers){
    numbers.push(Math.floor(Math.random() * 10) + 1)
    return numbers
}

function process(arr, f){
    return f(arr)
}

console.log(process([4,5,6], add))