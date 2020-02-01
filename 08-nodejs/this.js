// entendendo o this do nodejs

// this não é igual ao objeto global do node
console.log(this === global)
// this não é igual ao module atual
console.log(this === module)

// this é igual ao module.exports
console.log(this === module.exports)

// this é igual ao exports e esse por sua vez tem a mesma referencia de module.exports
console.log(this === exports)

function thisEmFunc() {
    console.log("this dentro de uma função")
    // nesse ponto podemos perceber que dentro de uma função this é igual ao objeto global
    console.log(this === global)

    // quando fazemos esse tipo de atribuição na verdade estamos atribuindo o nome ao global... tenha cuidado
    this.nome = ''
}

thisEmFunc()