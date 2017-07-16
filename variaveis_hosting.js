var percentualImposto = 0.15;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

//não se pode fazer esse tipo de atribuição
var valor = 100;

// HOISTING
/*
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;
console.log('Total imposto a pagar', totalImposto);
valor = 100;
*/

/*
	O correto sempre é declarar primeiro as variáveis.
*/