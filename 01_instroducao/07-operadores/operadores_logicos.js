//operadores logicos

var contador = true;
var adm = false;

//operator AND
if(contador && adm) {
	console.log("Verdadeiro");
} else {
	console.log("Falso");
}

//operator OR
if(contador || adm) {
	console.log("Verdadeiro");
} else {
	console.log("Falso");
}

//operator OR
if(contador || adm) {
	console.log("Verdadeiro");
} else {
	console.log("Falso");
}

function fazerCompras(trab1, trab2) {
	// operador OU, retorna true se atender uma das condições
	const comprarSorvete = trab1 || trab2
	// operador and, retorna true se atender as duas condições
	const comprarTv100 = trab2 && trab1

	//js não tem o operdor XOR mas podemos fazer da seguinte forma
	const comprarTv50 = trab1 != trab2
	//retorno a negação de comprar sorvete
	const saudavel = !comprarSorvete

	return {comprarSorvete,comprarTv100,comprarTv50,saudavel}

}

console.log(fazerCompras(true, false))
console.log(fazerCompras(true, true))
console.log(fazerCompras(false, true))
console.log(fazerCompras(false,false))


