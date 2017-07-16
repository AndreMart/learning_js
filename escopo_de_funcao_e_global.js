//variável global
var nome = "SuperMidia";

var capitalizar = function() {
	//variavel local
	var nome = "SuperMidia".toUpperCase();
}

console.log("nome: ", nome);


var capitalizar2 = function() {
	//passar a ser a mesma variável global de cima
	nome = "SuperMidias".toUpperCase();
}

capitalizar2();
console.log("nome", nome);
