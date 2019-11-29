//primeiro exemplo de calback
const nomes = ["MAMAO", "Goiaba", "maçã"]
function imprimeNomes(nome, indice){
    console.log(indice+1 +" - ", nome)
}
nomes.forEach(imprimeNomes)
console.log("#############################################################")

nomes.forEach((nome, indice)=>{console.log(indice+1 +" - ", nome)})