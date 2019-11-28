// pequenos conflito com o this
const pessoa = {
    grita: "AAAAAAAAAAH",
    fala() {
        console.log(this.grita)
    }
}
const fala = pessoa.fala
fala()

// para resolver esse problema podemos avisar o bind qual é o this do contexto
const fala2 = pessoa.fala.bind(pessoa)
fala2()
