/*
Vamos entender o filter
O filter ele faz um filtro dentro de um array e retorna um array filtrado
*/
// array
const produtos = [
    {"nome": "notebook", "preco": 1450.00, "fragil": true},
    {"nome": "garrafa", "preco": 12.00, "fragil": true},
    {"nome": "Lapis", "preco": 1.00, "fragil": false},
    {"nome": "Espelho", "preco": 1500.00, "fragil": true},
]

console.log(produtos.filter(function(p){
        return false
}))

// função para retornar apenas os frágeis
const fragil   = f => f.fragil
// função para retornar apenas maior que 1400
const maiorQue = x => x.preco > 1400

// primeiro retorno chamando o retorno a partir do template string
console.log(produtos.filter(function(p){
    return `${maiorQue(p)}`
}))

// essa é a forma mais comum de se utilizar, encadeamos um filter atraz do outro e passamos as funções para ele
console.log(produtos.filter(maiorQue).filter(fragil))
