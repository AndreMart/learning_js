
var x = 455e5;
//o Javascrip só armazena até 15 digitos após isso acontece um estouro
var z = 999999999999999;

//a partir do 0x se escreve o número hexadecimal e o mesmo é convertido para decimal
var hexa = 0xFFF;

//para se fazer octal basta começar com um zero.
var octal = 07777;

//para se exibir os numeros em sua base basta utilizar o numero da base no método
//toString

console.log(hexa.toString(16));
console.log(hexa.toString(10));
console.log(hexa.toString(8));
console.log(hexa.toString(2));