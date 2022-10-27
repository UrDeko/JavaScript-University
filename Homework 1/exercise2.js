str = "софия пловдив варна бургас плевен"
cities = str.split(" ")
let counter = 0
let letters = []

for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].charAt(0).toUpperCase() + cities[i].substring(1)

    if (cities[i].includes("а")) {
        counter++
    }

    letters.push(cities[i].split(""))
}

console.log(letters)