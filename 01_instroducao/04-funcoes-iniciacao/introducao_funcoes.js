//formas de se criar uma função em JS

//primeira forma de se declarar uma função em JS
function nomeFuncao(argumentos) {
	//retorno da função
	return;
}

// em js tem um padrão muito legal que é retornar a execução de uma função
//para uma variável

soma = function(a, b) {
	return (a + b)
}
console.log(soma(1,3))

//vamos mesclar funções e objetos, então declaramos nosso objeto com os seguintes
//parametros
var carro = {nome:'Golzao', modelo: 'Gol', ano: 1999}

//criamos nossa função passamos o objeto e então alteramos o carro.nome
function addCarro(carro) {
	return carro.nome = 'Golzimvei'
}
//declaramos duas variáveis que nesse momento estão undefined
var x, y

//atribuimos para x o nome Golzão
var x = carro.nome
console.log(x)

//executamos nossa função
addCarro(carro)
//então agora vamos verificar o que tem em nosso objeto
console.log(carro)

//podemos atribuir a variável y o outro nome
y = carro.nome
//imprimindo apenas a variável y
console.log(y)

//agora vamos avançar um pouco em uma função
/*
	1) atribuimos a função a variável
	2) criamos a função fac com o parametro numero
	3) se for menor de 2 retornamos 1
	4) se não com o parametro numero multiplicamos pelo numero menos 1
	5) o ponto de parada é quando o numero 1 for o multiplicador 

	// Fatorial :)
*/
var fatorial = function fac(numero) {return numero < 2 ? 1 : numero * fac(numero-1)}
console.log(fatorial(4))


