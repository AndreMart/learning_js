// vamos criar uma função e a partir dela vamos instanciar alguns objetos

function Pessoa(nome, idade, sobrenome) {
    //note que a palavra reservada this irá fazer com que qualquer uma que atribua a determinado
    //objeto instanciado consiga acesssar essar atributo
    this.nome = nome
    this.idade = idade
    this.sobrenome = sobrenome

    this.uperCase = function() {
        return this.nome = nome.toUpperCase()
    }

}
let joao = new Pessoa('João', 24, 'Martins')
let maria = new Pessoa('Maria', 25, 'Martins')
console.log(joao)
console.log(joao.uperCase())
console.log(joao)

//na verdade todo objeto em js é uma função


//nesse exemplo declaramos uma função e não estamos colocando seu retorno como publico, não utilizamos
//o this
function Cidade(nome) {
    return nome = nome
}

let novaCidade = new Cidade('Cariri')
console.log(novaCidade)

//caso queira utilizar como retorno basta utilizar seu comportamento como função e não instanciando
// um novo objeto
function cidade(nome) {
    return nome = nome
}
console.log(cidade("Cariri"))

