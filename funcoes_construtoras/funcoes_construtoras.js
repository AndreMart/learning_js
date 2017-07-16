//funções construtoras
var Carro = function(nome, cor){
	this.nome = nome;
	this.cor = cor;
	this.fabricante = "GM";
}

var novoCarro = new Carro("Gol", "Branco");

console.log(novoCarro);