//Zero em JavaScript é falso
if(0) {
	console.log("0 é True");
} else {
	console.log("0 é falso");	
}

//outra forma de se ver o verdadeiro tipo de um boleano é
console.log(!!0);

//uma string vazia é false
console.log(!!"");

//também é considerado false
console.log(!!NaN);

//também é considerado false
console.log(!!null);

//também é considerado false
console.log(!!undefined);
