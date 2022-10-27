class Phone{
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }

    show() {
        return `Brand: ${this.brand} | Price: ${this.price}$`    
    }
}

class Phones{
    constructor(phonesList){
        this.phonesList = phonesList
    }

    show(){ 
        return this.phonesList.map(phone => phone.show()).join("\n")
    }

    minPrice(){
        return this.phonesList.reduce((min, currentPrice) => { if(currentPrice["price"] < min){min = currentPrice} return min}, 100000)
    }

    averagePrice(){
        return this.phonesList.reduce((sum, currentPrice) => sum + currentPrice["price"], 0) / this.phonesList.length
    }

    showSel(min, max){
        return this.phonesList.filter(phone => phone["price"] >= min && phone["price"] <= max)
    }

    showBrand(brand){
        return this.phonesList.filter(phone => phone["brand"] == brand)
    }

    countBrand(brand){
        return this.phonesList.filter(phone => phone["brand"] == brand).length
    }

    discount(p){
        this.phonesList.map(phone => phone["price"] *= (100 - p) / 100)
    }

    sortByPrice(){
        this.phonesList.sort((a, b) => (a["price"] > b["price"]) ? 1 : -1)
    }
}

list = [new Phone("Nokia", 50),
        new Phone("iPhone", 100),
        new Phone("Sony", 90),
        new Phone("iPhone", 150)]

let phones = new Phones(list)
phones.sortByPrice()
phones.discount(50)
console.log(phones.show())
console.log(phones.minPrice())
console.log(phones.averagePrice())
console.log(phones.showBrand("iPhone"))
console.log(phones.countBrand("iPhone"))
console.log(phones.showSel(50, 100))
console.log(phones.show())