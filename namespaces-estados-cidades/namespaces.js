var AlgaWorks = AlgaWorks || {};

AlgaWorks.Estado = (function() {
	//cria um construtor dessa função
	function Estado() {
		//atrela ao id do  select
		this.comboEstado = $('#combo-estado');
		//criar um objeto gerenciado pelo jQuery
		this.emitter = $({});
		//atrela o bind referente aos dados do estado
		this.on = this.emitter.on.bind(this.emitter);
	}
	//função que retorna os estados
	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			//chama essa função
			success: onEstadosRetornados.bind(this),
			error: onError
		});

		this.comboEstado.on('change', onEstadoAlterado.bind(this));
	}

	function onEstadoAlterado() {
		this.emitter.trigger('alterado', this.comboEstado.val());
	}
	//nesta função temos o paramentro estado
	//no combo de estaod adicionamos option vazio
	//fazemos um laço percorrendo os estados e concatenamos como o append
	//definimos o bind do estado 
	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option value="">Selecione o estado</option>');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}
	//se der erro
	function onError() {
		alert('Erro carregando estados do servidor!');
	}
	//o retorno final dessa função
	return Estado;
	
})();

//
AlgaWorks.Cidade = (function() {
	//no construtor eu atrelo ao combo de cidade
	function Cidade(estado) {
		this.comboCidade = $('#combo-cidade');
		//e na assinatura do método espero um estado
		this.estado = estado;
	}

	//fico escutando esse evento
	Cidade.prototype.iniciar = function() {
		this.estado.on('alterado', onEstadoSelecionado.bind(this));
	}

	function onEstadoSelecionado(evento, uf) {
		if (uf) {
			$.ajax({
				url: 'http://localhost:8080/cidades',
				method: 'GET',
				dataType: 'jsonp',
				data: {
					uf: uf
				},
				success: onCidadesRetornadas.bind(this),
				error: onError
			});
		} else {
			reset.call(this);
		}
	}
	//reset o selet
	function reset() {
		this.comboCidade.html('');
		this.comboCidade.attr('disabled', 'disabled');
	}
	//
	function onCidadesRetornadas(cidades) {
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<option>Selecione a cidade</option>');
		cidades.forEach(function(cidade) {
			var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
			this.comboCidade.append(optionCidade);
		}.bind(this));
	}

	function onError() {
		alert('Erro carregando cidades');
	}

	return Cidade;
})();

$(function() {
	//crio um novo estado
	//e chamo sua iniciação
	var estado = new AlgaWorks.Estado();
	estado.iniciar();

	var cidade = new AlgaWorks.Cidade(estado);
	cidade.iniciar();
});
