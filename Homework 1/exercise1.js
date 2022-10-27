let str = "аз уча javascript"
str = str.charAt(0).toUpperCase() + str.slice(1)

let js = str.substring(str.indexOf("javascript"))
str = str.slice(0, str.indexOf("j")) + "JavaScript"
str = str.substring(0, str.indexOf("уча")) + "обичам" + str.substring(str.lastIndexOf(" "))

console.log(str)