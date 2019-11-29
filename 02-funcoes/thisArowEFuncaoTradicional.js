// entendendo que o this é diferente do this kkk
function verificadoraThis(param){
    console.log(this === param)
}
//será que o this dessa função é igual ao objeto global?
verificadoraThis(global)
verificadoraThis(this)
// será que podemos alterar o bind dessa função?
const objeto = {}
verificadoraThis = verificadoraThis.bind(objeto)
verificadoraThis(global)
verificadoraThis(objeto)

// o comportamento das funções arow é diferente
verificadoraThisArow = (param) => {console.log(this===param)}
// nesse ponto percebemos que o this de uma função arow é diferente do global
// pois ele pertence ao seu module
verificadoraThisArow(global)
//aqui percebemos que o this é estritamente igual ao seu module
verificadoraThisArow(module.exports)
