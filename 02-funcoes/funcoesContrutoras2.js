function Pessoa(nome="Usuário Anonimo", idade = 00, cor) {
    // atributos estáticos em funcoes contrutoras devem ser declarados com let ou const
    // métodos e atributos públicos podem ser declarodos com o this
    this.cor = cor
    this.falar = function() {
        console.log("Olá eu sou " + nome + " tenho " + idade + " Anos")
    }

    // podemos fazer os retornos de atributos da função por meio de métodos públicos
    this.getCor = function(){
        return this.cor
    }

    this.setCor = function(cor){
        this.cor = cor
    }
    
}

// Para instanciarmos um objeto podemos fazer 
const anonimo = new Pessoa
anonimo.falar()
anonimo.setCor("branco")
console.log(anonimo.getCor())

const pedro = new Pessoa("Pedro ", 35, "Buriti")
pedro.falar()
console.log(pedro.getCor())