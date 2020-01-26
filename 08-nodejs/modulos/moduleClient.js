// para utilizarmos os modulos podemos requerer os mesmos
const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

console.log(moduleA)
console.log(moduleB)

console.log(moduleA.jafui)
console.log(moduleA.nome)

console.log(moduleB.nome)
console.log(moduleB.grita())