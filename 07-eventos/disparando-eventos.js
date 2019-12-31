$(function() {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	//o evento keyup quando a tecla é solta
	atividade.on('keyup', function(event) {
		var keyCode = event.keyCode;

		// se a tecla pressionada for enter
		if (keyCode === 13) {
			//eu crio o meu proprio evento que com o nome que quiser
			// é passado o nome do envendo mais o texto do mesmo
			atividade.trigger('enter', atividade.val());
			//logo depois apenas limpo o input
			atividade.val('');
		}
	});

	//caso chame o vento eu posso executar uma função coorelacionada
	atividade.on('enter', function(evento, texto) {
		listaAtividades.prepend('<li>' + texto + '</li>');
	});

	//caso chame o vento eu posso executar uma função coorelacionada
	atividade.on('enter', function(eventp, texto) {
		console.log('Outra funcionalidade aqui...');
	});

});