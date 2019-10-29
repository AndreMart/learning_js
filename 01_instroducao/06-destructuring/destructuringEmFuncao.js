//defino minha função e em sua asssinatura de metodo em coloco o destructuring
function rand({min=0, max=1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//agora podemos chamar essa funcao e passar um objeto como parametro
obj = {min:10,max:40}
console.log(rand(obj))

//também podemos passar diretamente esse obj nos paramtros
console.log(rand({min:1, max:10}))

//caso não passemos argumentos retorna erro pois não haverá como desestruturar
//console.log(rand())

//se passarmos um objeto vazio ela vai considerar com os atributos atribuidos
// na declaração
console.log(rand({}))