//criando algumas funções anonimas
const soma = function(x,y) {
    return x + y
}
console.log(soma(4,4))

const soma2 = function(x, y, somando = soma) {
    return console.log(somando(x,y))
}
soma2(3,4)

const pessoa = {
    falar:function(){
        console.log("EEEEi")
    }
}

pessoa.falar()