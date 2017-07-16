//crio uma fabrica de funções
var Estado = (function() {
	//crio uma função publica com o combo de estado
	function Estado() {
		this.comboEstado = $('#combo-estado');
	}
	//aponto o prototype da função para esta chamada ajax
	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			//altero o bind para dizer qual a função que quero referenciar
			success: onEstadosRetornados.bind(this),
			error: onError
		});
	}

	// função para carregar os estados no option
	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	//se der erro
	function onError() {
		alert('Erro carregando estados do servidor!');
	}

	/*var comboEstado = $('#combo-estado');
	
	function iniciar() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});
	}
	function onEstadosRetornados(estados) {
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	}
	function onError() {
		alert('Erro carregando estados do servidor!');
	}*/
	//como o modell pattern retorno apenas o eu quero que seja 
	//publico no caso Estado
	return Estado;
	
})();
//quando carregar toda a pagina vou..
$(function() {
	//iniciar um novo Estado e chamar o iniciar
	var estado = new Estado();
	estado.iniciar();

	// var cidade = new Cidade(estado);
	// cidade.iniciar();
});