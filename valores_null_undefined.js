//valores null e undefined quando determinada variável não tem um valor

//retorna undefined
var x = null;
console.log(x);

if (x != null) {
	console.log('Existe um valor em x:', x);
} else {
	console.log('x não tem um valor útil');
}

