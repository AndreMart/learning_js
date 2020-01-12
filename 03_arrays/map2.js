/*
Como retornar apenas o preço utilizando MAP
*/
const carrinhoDeCompras = [
    '{"nome": "camiseta", "preco": 35.00}',
    '{"nome": "lapis", "preco": 45.00}',
    '{"nome": "travesseiro", "preco": 15.00}'
]
//primeira solução
// saidaPreco = carrinhoDeCompras.map(function(e){
//     return `${e.preco}`
// })
// console.log(saidaPreco)

//segunda solução
const paraObjeto =json => JSON.parse(json)
const preco = obj => obj.preco

const saidaPreco2 = carrinhoDeCompras.map(paraObjeto).map(preco)
console.log(saidaPreco2)
