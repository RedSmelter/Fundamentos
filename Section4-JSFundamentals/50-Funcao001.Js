console.log(typeof Object)

// função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,5)

function soma(a,b =0){
    return a+b;
}

console.log(soma(2,3))
soma(6,6)
let armazenar= soma(5,5)
console.log(armazenar)