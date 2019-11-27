// podemos em js verificar a existencia de determinado dado
function soma(valor, valor2) {
    valor = valor || 1
    valor2 = valor2 || 1
    return valor + valor2
}
console.log(soma(), soma(2), soma(0,0))

function soma2(valor, valor2) {
    valor = valor !== undefined ? valor : 0
    valor2 = 1 !== arguments ? valor2 : 0 
    return valor + valor2
}
console.log(soma2(), soma2(0,0), soma2(3,3))

// utilizando o es2015
function soma3(valor = 1, valor2 = 1) {
    return valor + valor2
}
console.log(soma3(), soma3(0,0), soma3(1,3))