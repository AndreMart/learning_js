// usando notação literal
const obj = {}
console.log(obj)

// tipos 
console.log(typeof Object, typeof new Object)

const obj1 = new Object
console.log(obj1)

//podemos utilizar as construtoras para criar objetos posteriormente
function Produto(nome, preco, desconto) {
    this.nome = nome
    // preco está encapsulado
    this.getPreco = () => {
        return preco = (preco - desconto)
    }
}
const computador = new Produto("Imac", 100, 20)
console.log(computador.nome, computador.getPreco())
const computador2 = new Produto("macbook", 10000, 200)
console.log(computador.nome, computador2.getPreco())

//funcao factory para criar objetos
function criarPessoa(nome, salariobase, faltas) {
    return {
        nome, salariobase, faltas,
        getSalario(){
            return (salariobase /30) * (30 - faltas)
        }
    }
}
const func1 = criarPessoa("Maria", 7899, 5)
console.log(func1.getSalario())

// convertendo Json para objeto
const fromJSON = JSON.parse('{"info":"Olá eu já fui um JSON"}')
console.log(fromJSON.info)
