//para se pegar o tamanho de uma string em JavaScript podemos utilizar o operador length
var a = "tamamho de uma string";
console.log(a.length);

var b = "Olá sei como pegar o indice de uma palavra em Js";
//para pegar de onde se parte a ocorrencia se faz
console.log(b.indexOf("pegar"));

//para pegar de onde se finaliza a ocorrencia
console.log(b.lastIndexOf("J"));

//para se pegar um pedaço de uma string utilizamos o substring
var s = "uma string qualquer <JavaScript>";
console.log(s.substring(4, 10));

//o slice tambem serve para pegar o pedaço de uma string mas se faz a contagem inversa
console.log(s.slice(-15, -9));

//O substr pega o valor a partir do indice mais a definição que passamos para ele pegar
console.log(s.substr(4, 15))

//para se fazer o replace de um pedaço de uma string fazemos o seguinte.
console.log(s.replace('<JavaScript>', 'JS'));

//para se colocar em minusculas e maiúsculas fazemos o seguinte.
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//para concatenar string fazemos o seguinte.
console.log(s.concat(" é legal"));

//para se pegar um caractere em determinada posição fazemos o seguinte
console.log(s.charAt(5));


