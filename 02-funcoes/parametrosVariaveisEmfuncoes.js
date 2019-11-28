// Podemos passar para uma funçao parâmetros variáveis e recuperar os mesmos
// por meio dos arguments gerados, vamos ver
function soma() {
    let soma = 0
    for (const i in arguments) {
        soma+=arguments[i]
    }
    return soma
}
//não passando parametro nenhum
console.log(soma(), soma(2,2))

// concatenando strings
console.log(soma(" A ", "B ", " C"))

//somando valores
console.log(soma(1,2,3,4,5,6,4.5))

// fazendo gambis
console.log(soma(1, " uai"))