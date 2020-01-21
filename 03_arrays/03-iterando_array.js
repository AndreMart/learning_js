var nomes = ["João", "Maria", "Cláudia", "Manoel"];

//for convencional
for(var i = 0; i<nomes.length; i++) {
	console.log("indice ["+ i + "] " + nomes[i]);
}

//utilizando o forEach do JS
nomes.forEach(function(element,i){
	i++
	console.log("[ "+ i + element + "]");
});

