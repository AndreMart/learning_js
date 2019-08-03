//obj carro
var acessorio = {som:"Pioneer", cor:"branco"};

var ligar = function(a) {
	console.log("Ligando "+a);
}
//podemos passar varios tipos de elementos dentro de um array
var gol = ["GOL BOLA", 2001, acessorio, ligar];

console.log(gol);

//acessando esses elementos
console.log(gol[2].cor);

gol[3]("GOLZAO");