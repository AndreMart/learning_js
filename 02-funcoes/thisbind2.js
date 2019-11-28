function Pessoa() {
    this.nome = 1
    // o contexto this do setInterval é pertencente a ele, então o this dele é diferente do this da função Pessoa
    setInterval(function() {
        console.log(this.nome++)
    }.bind(this),1000)
}
new Pessoa

//segunda estratégia, obs essa eu ja conhecia quando utilizei o vuejs

function Pessoa2() {
    this.nome = 1
    const self = this
    // o contexto this do setInterval é pertencente a ele, então o this dele é diferente do this da função Pessoa
    setInterval(function() {
        console.log(self.nome++)
    },1000)
}
new Pessoa2