//O destructuring é um parametro de desestruturação

// vamos declarar um objeto

let pessoa  = {
    nome:'Mauricio Gaspar',
    idade: 65,
    profissão: 'programador',
    endereco : {
        logradouro:'rua 21 entre a 3 e a 4',
        numero:23

    }
}
console.log(pessoa)
//agora vamos  utilizar o destructuring

const {nome, idade} = pessoa
//a partir desse ponto podemos acessar de forma global nesse caso nossa variável nome e idade
console.log(nome, idade)

//podemos atribuir como chave valor dentro da declaração
const {profissão:p} = pessoa
console.log(p)

//isso não funciona,  nem outros métodos
p.concat(" A profissão mais legal")
console.log(p)

const novaDeclaracao = p + " A profissão mais legal"
console.log(novaDeclaracao)

//caso o atributo não exista podemos declarar algum valor padrão para ele
const {atributoInexistente = 'sem valor'} = pessoa
console.log(atributoInexistente)


