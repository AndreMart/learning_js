const pai = {nome: "André Martins", corCabelo : "Preto"}
const filha1 = Object.create(pai)
filha1.nome = "ana paula"
console.log(filha1.nome, filha1.corCabelo)

// também podemos definir novos atributos diretamete
const filha2 = Object.create(pai, {
    nome: {value: "vanise", writable: false, enumerable: true}
})
console.log(filha2.nome, filha2.corCabelo)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Herdado ${key}`)
}