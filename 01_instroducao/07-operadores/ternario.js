//podemos utilizar um operador ternario para definir retornos
const resultado = nota => nota>=7?'aprovado':'reprovado'
console.log(resultado(8))
console.log(resultado(6.1))

//também podemos fazer a comparação dentro da função
const media = (nota, nota2) => {
    return ((nota+nota2)/2) > 7 ? 'aprovado':'reprovado'
}
console.log(media(7,3))
