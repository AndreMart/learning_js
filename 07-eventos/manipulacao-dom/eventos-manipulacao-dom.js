$(function(){
	$("#botao").on("click", function(eve){
		console.log(eve);
	});

	$("#link1").on("click", function(eve){
		eve.preventDefault();
	});

	$("#inputUm").on("keyup",function(){

		console.log("inputando");

	});
});