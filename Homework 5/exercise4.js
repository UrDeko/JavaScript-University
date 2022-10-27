let goods = ["Компютър:1200 лв", "Принтер:230лв", "Мишка:15 лв"];
let pattern = /\d+/
let result = []

for (let i = 0; i < goods.length; i++){
    result.push(pattern.exec(goods[i]))
}

console.log(result)