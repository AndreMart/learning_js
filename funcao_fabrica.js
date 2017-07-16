var criarCarroDaVolks = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}


var criarAviao = function(tipo, tamanho, quantidade){
	return{
		tipo: tipo,
		tamanho: tamanho,
		quantidade: quantidade
	};
};

var fox = criarCarroDaVolks('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = criarCarroDaVolks('Gol', 'AAA-2222');
console.log('gol', gol);


var boing = criarAviao('Para civis', 'Gigante', 100);
console.log(boing);

