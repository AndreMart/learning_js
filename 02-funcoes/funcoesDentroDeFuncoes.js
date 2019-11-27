function add(y) {
    return y +1
}
console.log(add(2))

let minhaVar = function(x){
    return x*x
}
console.log(minhaVar(2))

//chamando uma função dentro de outra, basicamente ela executa a função mais
//profunda e em seguida usa seu valor para executar a segunda função
console.log(minhaVar(add(2)))