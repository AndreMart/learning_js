function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log("falo " + nome)
    }
}

let joao = new Pessoa("João")
joao.falar()