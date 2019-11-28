// a instancia de uma função em js pode ser considerada um objeto quando
// o mesmo é atribuido a uma variável
function Pessoa() {
    //nesse caso o tipo deve ser o atributo
    this.idade = 10
}
pessoa = new Pessoa
console.log(typeof(pessoa))
console.log(pessoa.idade)