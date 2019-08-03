//function declaration

function somar(a, b) {
	return a + b;
}

function pegandoArguments() {
	console.log("argumentos da função ->", arguments);
}

//function expression

var subtrair  = function(a, b) {
	return a - b;
}
var resultadoSubtrair = subtrair(10,5);
console.log("restultado subtração = " , resultadoSubtrair);

var resultadoSomar = somar(10, 70);
console.log("resultado da Soma = ", resultadoSomar);

var argumentos =  pegandoArguments(2, 4, 5);
console.log(argumentos);

console.log(typeof subtrair);