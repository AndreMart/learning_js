//************ +__+ ************///
//* DATA DA REVISÃO 03/01/2021 *///
//************ +__+ ************///

var s = "the winter is coming";

console.log(s.length); // tamanho da string

console.log(s.indexOf("coming")); // indice de uma palavra

console.log(s.lastIndexOf("winter")); // primeira posição de um caractere em uma string aplicada

console.log(s.slice(4, 12)); //cortando uma palavra entre intervalos, sempre a partir do primeiro caractere da string

//Pegando a primeira posição de um caractere
console.log(s.lastIndexOf("the"));

//cortando uma palavra entre intervalos
console.log(s.slice(4, 12));

//cortando a partir de um indice (o parametro 6 é a partir do 4)
console.log(s.substr(4, 6));

console.log(s.substring(1, 5));

//replace
console.log(s.replace("winter", "summer"));

console.log(s.toLowerCase()); //LowerCase

console.log(s.concat("!", "outra String e assim por diante para concatenar")); //concatenar

var novaString = "Ned,Jon,Robb,Sansa,Bryan"; // criando uma string, mas poderia ser recebendo uma string

const arr = novaString.split(",");
console.log(arr[0]); // podemos pegar a string dessa forma, também poderíamos fazer um foreach para a mesma

console.log(novaString.split(",")); //separar por determinado caractére

let novaString2 = "André";
<<<<<<< HEAD
const n = [...novaString2];
console.log(n);
const n2 = n.map((n, i) => `${n.toLocaleUpperCase()}${i}`);
=======
const n = [...novaString2]; // espalhamento com spred e já separa por virgula, bem estranho 
console.log(n, "essa");

const n2 = n.map((n, i) => `${n.toLocaleUpperCase()}${i}`); // map para cada item adicionando maiúsculas e indice
>>>>>>> e75f7e251c058e0c2a743ec39437ab58e797a24a
console.log(n2);
