const escola = "Cod3r"

console.log(escola.charAt(2))

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('r'))

console.log("Escola ".concat(escola).concat("!"))

console.log(escola.replace(3,"e"))

console.log(escola.replace(/\d/,"r"))
console.log(escola.replace(/\w/g, "e"))

console.log(escola.search(/3r/i))


console.log('Ana,Maria,Pedro'.split(","))

console.log("ana,maria,pedro".split(/,/)) // usando regex(Regular Expressions)



let x = 123432

console.log("------------")
console.log(x)
let y = x.toString().split("")
console.log(y)


