let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)// negação do valor original, se for 1 vai dar 0 e vice-versa
console.log(!!isAtivo)//negação da negação dá o valor original

console.log('\nOs de verdade kkkkkk')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('\nOs not de verdade ;(')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nFinalizante')
console.log(!!( '' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucass'

console.log(nome || 'Desconhecido')
