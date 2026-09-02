const produto1 = {}

produto1.nome = 'Celular foderoso'
produto1.preco = 3999.90
produto1['Desconto masssa'] = 0.30 // evitar usar espaços

console.log(produto1)
 
 produto1.nome = 'Celular desfoderoso'
 
 
 console.log(produto1)

 const variavelTalvez = 10

 // variavelTalvez = 11 // aqui o const trabalha diferente para tipos diferentes
 // este exemplo foi com um tipo primitivo, já objetos arrays e funções são tipos de referencia
 // por isso dá para modificar o conteúdo interno deles e dos tipos primitivos não


 console.log(variavelTalvez)

 console.log("------------------\n")

 const produto2 = {
    nome:'',
    preco: null,
    desconto: 0
 }

 console.log(produto2)
 produto2.nome= 'Byketa'
 produto2.preco= 899
 console.log(produto2)

 const produto3 = {
    nome: 'Patins',
    valor: 300,
        opcionais: {
            NomeOpcional1: "Rodinhas Extras",
            valor: 10
        }
 }
 console.log("\n()()()()()\n")

 console.log(produto3)
 
 produto3.opcionais.valor= 30
 
 console.log(produto3)