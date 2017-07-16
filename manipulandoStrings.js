var s = "the winter is coming";

//pegando o tamanho da string
console.log(s.length);

//pegando o indice de uma palavra
console.log(s.indexOf("coming"));

//Pegando a primeira posição de um caractere
console.log(s.lastIndexOf("winter"));

//cortando uma palavra entre intervalos
console.log(s.slice(4,12));

//cortando a partir de um indice (o parametro 6 é a partir do 4)
console.log(s.substr(4,6));

//replace
console.log(s.replace("winter","summer"));

//upperCase
console.log(s.toUpperCase());

//LowerCase
console.log(s.toLowerCase());

//concatenar
console.log(s.concat("!", "outra String e assim por diante para concatenar"));

var novaString = "Ned,Jon,Robb,Sansa,Bryan";

//separar
console.log(novaString.split(","));


