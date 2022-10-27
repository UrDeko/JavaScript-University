let date = "2017-09-21"
let year = date.slice(0, date.indexOf("-"))
date = year + "." 
    + date.slice(date.indexOf("-") + 1, date.lastIndexOf("-")) + "." 
    + date.slice(date.lastIndexOf("-") + 1)
let monthDay = date.slice(date.indexOf(".") + 1)
console.log(monthDay)