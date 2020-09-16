//************ +__+ ************///
//* DATA DA REVISÃO 15/09/2020 *///
//************ +__+ ************///

// Zero em JavaScript é FALSO
if(0) {
	console.log("0 é True");
} else {
	console.log("0 é falso");	
}

// Outra forma de se ver o verdadeiro tipo de um boleano é
console.log(!!0); // é estranho mas faz sentido

// Uma string vazia é false
console.log(!!"");

// Também é considerado false
console.log(!!NaN);

// Também é considerado false
console.log(!!null);

// Também é considerado false
console.log(!!undefined);
