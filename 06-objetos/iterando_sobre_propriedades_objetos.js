//iterando sobre propriedades e objetos do js
var pedro = {
	nome:"Pedro de Sousa",
	idade:"25 anos",
	endereco: {
		logradouro:"Av Brasil",
		numero:100,
		cidade:"Palmas-To"
	}
}
// percorrendo e comparando com um atributo do obj
for(var aux in pedro){
	console.log(aux, "*=>>>>>", pedro[aux]);
	if(aux === "endereco") {
		console.log("temos endereço", pedro[aux].logradouro);
	}
}
