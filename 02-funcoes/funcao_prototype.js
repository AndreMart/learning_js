//entendendo o prototype de uma função
var Carro = function(nome, cor, placa) {
	this.nome = nome;
	this.cor = cor;
	this.placa = placa;
}

var fox = new Carro("Fox", "Prata", "JVC-8989");

console.log(fox);

Carro.prototype.marca="WV";

console.log(fox.marca);