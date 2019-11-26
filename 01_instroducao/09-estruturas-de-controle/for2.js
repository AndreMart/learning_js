//utilizando o for IN trata-se de uma abreviação do for
const notas = [5.3,4.2,3.1,2.7,5.8]
for ( let i in notas ) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Bia da Silva",
    idade: "22 anos",
    peso: 43,
    altura:"155cm"
}

for(atributos in pessoa) {
    console.log(pessoa[atributos])
}
