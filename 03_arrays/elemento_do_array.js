// variável acessório recebe um objeto
var acessorio = {som:"Pioneer", cor:"branco"};

//function de ligar o carro
var ligar = function(a) {
	console.log("Ligando "+a);
}
//podemos passar varios tipos de elementos dentro de um array, isso é uma bela característica
//mas em mãos erradas pode virar uma grande m
var gol = ["GOL BOLA", 2001, acessorio, ligar];

console.log(gol);

//acessando esses elementos
console.log(gol[2].cor, gol[2].som);
//é muito interessante essa abordagem onde passamos o parametro com a chamada da
//function sendo meio obscura, não fica explicito
gol[3]("GOLZAO");