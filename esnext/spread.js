// com o operador spred podemos passar uma coleção de dados por parametro
const som = (...va) => {
    let total = 0
    va.forEach(v => {
        total += v
    });
    return total

}
console.log(som(1, 1, 3))

// trabalhando com objetos
const funcionario = {nome:"andré", idade:32}
const caracteristica = {nacionalidade:"Brasileira", alura: 180, ...funcionario}
console.log(caracteristica)