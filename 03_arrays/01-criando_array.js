// em javascript quase tudo é uma função e com array não poderia ser diferente
console.log(typeof Array)

// já a instancia de um Array é um object
// acho essa forma bem estranha para se declarar um array, mas é válida

let arr = new Array ("Mamão", "Oregano")
console.log(typeof arr)


var emails = [];
emails[0] = "andre martins";

console.log(emails[0]);
// isso não representa um erro em js, representa apenas indefinido
console.log(emails[5]);


var nomes = ["joão", "maria", "thiago"];

console.log(nomes.length);

nomes[3] = ["MArta"];

console.log(nomes.length);

console.log(nomes)

//essa função adiciona um elemento ao array
nomes.push('André')

console.log(nomes)

