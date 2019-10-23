//entendendo o objeto Math

// para se retornar o menor valor de determinada entrada
console.log(Math.min(1, 2, 4));

//para retornar o maior valor de determinada entrada
console.log(Math.max(1, 2, 4));

//Arrendondando a saída para o menor ou maior valor
console.log(Math.round(1.9));

//Arrendondando a saída para valor menor
console.log(Math.floor(2.9));


var valorAleatorio = Math.random();
console.log('valor aleatório', valorAleatorio);
var numero = valorAleatorio * 60;
console.log('número', numero);
var numeroMega = Math.floor(numero) + 1;
console.log('número da mega', numeroMega);