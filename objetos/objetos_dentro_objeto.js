//criando objetos dentro de objetos
var pedro = {
	nome:"Pedro de Sousa",
	idade:"25 anos",
	endereco: {
		logradouro:"Av Brasil",
		numero:100,
		cidade:"Palmas-To"
	}

}
console.log(pedro);

console.log("acessando a cidade do Pedro", pedro.endereco.cidade);

pedro.endereco.numero = 239;

console.log(pedro.endereco.numero);