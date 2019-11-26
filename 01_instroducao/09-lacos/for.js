// perceba o comportamento da linguágem, ele irá de 9 a 10 posições em sua
// iteração no laço se tratando de uma variável comum
let indice = 10
for(let i =0; i < indice; i++) {
    console.log([i])
}
//agora vamos percorer esse array para ver a diferença
// dessa forma ele percorre o que está dentro do array indo do primeiro ao
// ultimo indice, não havendo a necessidade de dizer menor ou igual
let valores = [0.9,3.9,5,5.8,9.9,10]
for (let j = 0; j < valores.length; j++) {
    console.log(valores[j])
}