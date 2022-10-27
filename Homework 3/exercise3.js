function makeList(group){
    let list = group

    function addName(name){
        list += ` ${name};`
        return list
    }

    return addName
}

list = makeList("КСТ-11")
console.log(list("Чочко"))
console.log(list("Дечко"))
console.log(list("Печко"))