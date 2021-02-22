var s = "the winter is coming";

//pegando o tamanho da string
console.log(s.length);

//pegando o indice de uma palavra
console.log(s.indexOf("coming"));

//Pegando a primeira posição de um caractere
console.log(s.lastIndexOf("the"));

//cortando uma palavra entre intervalos
console.log(s.slice(4, 12));

//cortando a partir de um indice (o parametro 6 é a partir do 4)
console.log(s.substr(4, 6));

console.log(s.substring(1, 5));

//replace
console.log(s.replace("winter", "summer"));

//upperCase
console.log(s.toUpperCase());

//LowerCase
console.log(s.toLowerCase());

//concatenar
console.log(s.concat("!", "outra String e assim por diante para concatenar"));

var novaString = "Ned,Jon,Robb,Sansa,Bryan";

//separar por determinado caractére
console.log(novaString.split(","));

let novaString2 = "André";
const n = [...novaString2];
console.log(n);
const n2 = n.map((n, i) => `${n.toLocaleUpperCase()}${i}`);
console.log(n2);
