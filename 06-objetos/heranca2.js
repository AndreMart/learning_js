const avo = {atributo1:"a"}
const pai = {__proto__:avo, atributo2:"b"}
const filho = {__proto__:pai, atributo3:"c"}
console.log(pai.atributo1)
console.log(filho.atributo2)
console.log(filho.atributo3)
console.log(filho.atributo1)

const carro = {
    modelo: "comum",
    ano: 0,
    velocidade: 120,
    status() {
        return `esse é o carro comum ${this.modelo} velocidade ${this.velocidade} Ano ${this.ano}`
    }
}
const ferrari = {
    modelo: "Ferrari",
    ano: "2019"
}
const volvo = {
    modelo: "volvo",
    ano: 2018,
    status() {
        return `${super.status()} Esse é bom`
    }
}
// podemos definir o __proto__ de um objeto dessa forma
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.ano, ferrari.velocidade, ferrari.status())
console.log(volvo.status())