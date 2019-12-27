//primeiro exemplo de calback
const nomes = ["MAMAO", "Goiaba", "maçã"]
function imprimeNomes(nome, indice) {
    console.log(indice+1 +" - ", nome)
}
// dessa forma estou imprindo apeas um indice e cuspindo todo array
imprimeNomes(nomes, 0)
console.log("#############################################################")
//chamando um calback
nomes.forEach(imprimeNomes)
console.log("#############################################################")
// calback a partir de uma função de seta
nomes.forEach((nome)=>{console.log(nome)})
console.log("#############################################################")