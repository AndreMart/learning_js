// algumas funções arow simples

soma = (a,b) => {
    return a + b
}
console.log(soma(2,4))

// função arow sem chaves sem parametros
ola = () => 'Olá'
console.log(ola())

// função de um parametro, função especialista
maiuscula = a => a.toUpperCase()
console.log(maiuscula("ola"))

// função de soma, lembrando que nesse caso devemos deixar explicito os argumentos
soma2 = (...arguments) => {
    let acumulador = 0
    for (const i in arguments) {
        acumulador += arguments[i]
    }
    return acumulador
}
console.log(soma2(5,5))