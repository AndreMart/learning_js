//************ +__+ ************///
//* DATA DA REVISÃO 15/09/2020 *///
//************ +__+ ************///

// Para se pegar o tamanho de uma string em JavaScript podemos utilizar o operador length
var a = "tamamho de uma string";
console.log(a.length); // resultado 21

var b = "Olá sei como pegar o indice de uma palavra em Js";
// Para pegar de onde se parte a ocorrencia se faz
console.log(b.indexOf("pegar")); // resultado 13

// Para pegar de onde se finaliza a ocorrencia
console.log(b.lastIndexOf("J")); // resultado 46

// Para se pegar um pedaço de uma string utilizamos o substring
var s = "uma string qualquer <JavaScript>";
console.log(s.substring(4, 10)); // resultado string

// O slice tambem serve para pegar o pedaço de uma string mas se faz a contagem inversa
console.log(s.slice(-15, -9)); // resultado er <Ja

// O substr pega o valor a partir do indice mais a definição que passamos para ele pegar
console.log(s.substr(4, 15)); // resultado string qualquer

// Para se fazer o replace de um pedaço de uma string fazemos o seguinte.
console.log(s.replace("<JavaScript>", "JS"));

// Para colocar em minusculas e maiúsculas.
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//para concatenar string fazemos o seguinte.
console.log(s.concat(" é legal"));

// Para pegar o caractere na posição 5
console.log(s.charAt(5));
