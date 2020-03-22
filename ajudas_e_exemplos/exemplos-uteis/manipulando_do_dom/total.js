console.log('Ok estamos carregando');

//pega o valor da entrada id valor
var valorElemento = document.getElementById("valor");

//pega o valor da entrada resultado
var valorElementoSaida = document.getElementById("resultado")

//AddEventListenner fica escutando tudo e o keyup joga automanticamente 
valorElemento.addEventListener("keyup", function(evento){
	 var total = 0;
	 var valor = parseFloat(valorElemento.value ? valorElemento.value : 0);

	 total = valor;

	 if(total > 0 && total > 10) {
	 	total = total + (total * 0.30);
	 }


	valorElementoSaida.innerHTML = total;
});
