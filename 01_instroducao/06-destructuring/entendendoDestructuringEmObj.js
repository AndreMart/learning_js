//************ +__+ ************///
//* DATA DA REVISÃO 03/01/2021 *///
//************ +__+ ************///

//O destructuring é um parametro de desestruturação vamos declarar um objeto

let pessoa  = {
    nome:'Mauricio Gaspar',
    idade: 65,
    profissão: 'programador',
    endereco : {
        logradouro:'rua 21 entre a 3 e a 4',
        numero:23
    }
}
console.log(pessoa) // imprimindo a pessoa

const {nome, idade} = pessoa // desetruturando

console.log(nome, idade) //a partir desse ponto podemos acessar de forma global nesse caso nossa variável nome e idade

const {profissão:p} = pessoa //podemos atribuir como chave valor dentro da declaração
console.log(p) // bem interessante esse comportamento

//isso não funciona, nem outros métodos
p.concat(" A profissão mais legal...")
console.log(p)

const novaDeclaracao = p + " A profissão mais legal, aqui sim" // seria uma forma de atribuir um valor ao comportamento
console.log(novaDeclaracao)

//caso o atributo não exista podemos declarar algum valor padrão para ele
const {atributoInexistente = 'sem valor'} = pessoa // assim não volta null ou NaN
console.log(atributoInexistente)


