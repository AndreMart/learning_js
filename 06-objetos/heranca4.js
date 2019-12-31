function ObjetoContrutor() {
    this.nome = "André Martins"
}
let filho = new ObjetoContrutor
console.log(filho.nome)

console.log(ObjetoContrutor.prototype === filho.__proto__)
console.log(ObjetoContrutor.prototype.__proto__ === Object.prototype)

console.log('#########################')
const filho2 = {}
filho2.__proto__ = ObjetoContrutor.prototype
filho2.nome = "fausto"
console.log(filho2.nome)

ObjetoContrutor.prototype.novaPropriedade = function () {
    return console.log("isso é legal")
}
ObjetoContrutor.prototype.novaPropriedade()