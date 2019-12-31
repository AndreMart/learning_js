// Object.preventExtensions()
// pode deletar um atributo? sim
// pode adicionar um atributo? não
// pode alterar um atributo? sim
const produto = Object.preventExtensions({
    nome: "Alberto Roberto", idade: 25
})
produto.nome = "Roberto"
delete produto.nome
produto.descricao = "esse é um produto doido"
console.log(produto)

// Object.Seal
// pode deletar atributos? Não
// pode adicionar atributos? Não
// pode alterer atributos? Sim
const cidade = Object.seal({
    nome:"Palmas", habitantes: 270.000
})
cidade.nome = "Gurupi"
console.log(cidade)
cidade.descricao = "Quente feito o ..."
console.log(cidade)
delete cidade.nome
console.log(cidade)

// Object.freeze
// pode adicionar atributos? Não
// pode deletar atributos? Não
// pode alterer atributos? Não

const molde = Object.freeze({
    nome: "Molde de papel", qtd: 20
})
molde.descricao = "Papel chamex"
console.log(molde)
delete molde.nome
console.log(molde)
molde.nome = "Mode de acrilico"
console.log(molde)
