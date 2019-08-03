$(function(){
	var selecaoTodosUsuarios = $("#selecao-todos-usuarios");
	var selecaoUsuarios = $(".js-selecao-usuario");

	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}


	selecaoUsuarios.click(function() {
		if($(".js-selecao-usuario:checked").length === selecaoUsuarios.length) {
			selecaoTodosUsuarios.prop("checked", true);			
		} else {
			selecaoTodosUsuarios.prop("checked", false);				
		}
		
	});

	selecaoTodosUsuarios.click(function(){
		selecaoUsuarios.prop("checked", selecaoTodosUsuarios.prop("checked"));

		if(selecaoTodosUsuarios.prop("checked")){
			selecaoUsuarios.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}

	});

	selecaoUsuarios.change(function(evento){
		var selecaoUsuario = $(evento.target);
		if(selecaoUsuario.prop("checked")){
			selecaoUsuario.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}
	});

});