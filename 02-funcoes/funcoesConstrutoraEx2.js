function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log("falo " + nome)
    }
}

let joao = new Pessoa("João")
joao.falar()

// deve sempre utilizar o operador new em uma função construtora
let pedro = Pessoa("Pedro")
console.log(pedro)