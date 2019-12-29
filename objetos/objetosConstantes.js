// em javascript conseguimos alterar atributos de objetos
const pessoa = {nome: "joao"}
pessoa.nome = "carlim"
console.log(pessoa)

// porem podemos definir, congelar esse objeto
const pessoa1 = Object.freeze({nome:"Audenor"})
console.log(pessoa1)

//abaixo não altera o código
pessoa1.nome = "novoNome"
console.log(pessoa1)
