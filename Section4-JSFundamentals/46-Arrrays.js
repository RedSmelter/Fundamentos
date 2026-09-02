const valoress = [7.7, 8.9, 5.9, 2.3]

console.log(valoress[0],valoress[3])
console.log(valoress[4])

valoress[4] = 11
console.log(valoress)

valoress.push( {id:3}, false, true, 'teste')
console.log(valoress)

console.log(valoress.pop())
console.log(valoress)
delete valoress[0]

console.log(valoress)

console.log(typeof valoress)