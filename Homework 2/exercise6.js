let names = ["Стефка", "Георги", "Петър", "Васко", "Кирчо", "Анна", "Матей", "Борис-Михаил"]
let countVowelsInName = []

function countVowels(count, letter){
    let vowels = ["а", "ъ", "о", "у", "е", "и"]
    if (vowels.includes(letter.toLowerCase())){
        return count += 1
    }

    return count
}

for (let i = 0; i < names.length; i++){
    countVowelsInName.push(names[i].split("").reduce(countVowels, 0))
}

console.log(countVowelsInName)