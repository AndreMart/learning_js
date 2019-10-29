//Agora vamos utilizar o destructuring em array dentro da assisnatura
// uma funcao

//declaramso a funcao

function rand([min=0,max=1000]) {
    //vamos fazer uma condição utilizando o destructuring para fazer uma troca
    //caso o min for maior que o max
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//teste normal
console.log(rand([10,20]))

//teste sem declarar o min
console.log(rand([,20]))

//teste sem declarar o max
console.log(rand([100,]))

//por fim o teste declarando o min maior que o max para usar a desestruturação
console.log(rand([100,10]))

