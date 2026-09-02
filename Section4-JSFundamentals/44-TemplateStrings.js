const nome = 'Dudum'
const concatenacao = 'Olá ' + nome + '!'
const concats = 'Hello '.concat(nome).concat('!!!!!')

const template = `
    Hellou
    ${nome}!?
`

console.log( concatenacao + "  ??????  " + concats)
console.log(template)

console.log(`1+1= ${1+1}`)


const up = texto => texto.toUpperCase()
console.log(`Salve salve! ${up('cuidadum')}:O`)

