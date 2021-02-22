//************ +__+ ************///
//* DATA DA REVISÃO 03/01/2021 *///
//************ +__+ ************///

function rand({min=0, max=1000}) { //defino minha função e em sua asssinatura de metodo em coloco o destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

obj = {min:10,max:40} //agora podemos chamar essa funcao e passar um objeto como parametro
console.log(rand(obj))


console.log(rand({min:1, max:10})) //também podemos passar diretamente esse obj nos parametros

//console.log(rand()) //caso não passemos argumentos retorna erro pois não haverá como desestruturar

console.log(rand({})) //se passarmos um objeto vazio ela vai considerar com os atributos atribuidos na declaração