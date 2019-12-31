const ferrari = {
    modelo: "f40",
    veloMax: 240 
}
const volvo = {
    modelo: "v40",
    veloMax: 1456 
}
// em objeto não temos a função prototype
console.log(ferrari.prototype)
// em um objeto seu prototype é definido pelo __proto__
console.log(ferrari.__proto__)
//podemos comparar se é igual ao Object.prototype
console.log(volvo.__proto__ === Object.prototype)
//O object.prototype é o liminte