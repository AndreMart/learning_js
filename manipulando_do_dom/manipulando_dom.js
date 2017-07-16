$(function() {
	//pegando pelo metodo get a seguinte url
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	//como é o metodo get podemos passar os parametros da url
	resposta.done(function(estados) {
		var comboEstado = $('#combo-estado');
		//se quisessemos limpar 
		// comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	//apenas se falhar
	resposta.fail(function() {
		alert('Erro carregando estados do servidor!');
	});

});