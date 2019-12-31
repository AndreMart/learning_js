$(function(){
	var selecaoTodosUsuarios = $("#selecao-todos-usuarios");
	var selecaoUsuarios = $(".js-selecao-usuario");


	selecaoUsuarios.click(function() {
		if($(".js-selecao-usuario:checked").length === selecaoUsuarios.length) {
			selecaoTodosUsuarios.prop("checked", true);			
		} else {
			selecaoTodosUsuarios.prop("checked", false);				
		}
	});

	selecaoTodosUsuarios.click(function(){
		selecaoUsuarios.prop("checked", selecaoTodosUsuarios.prop("checked"));
	});

	

});