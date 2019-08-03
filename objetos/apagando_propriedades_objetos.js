var pedro = {
	nome:"Pedro de Sousa",
	idade:"25 anos",
	endereco: {
		logradouro:"Av Brasil",
		numero:100,
		cidade:"Palmas-To"
	}

}

console.log(pedro);

delete pedro.nome;
delete pedro.endereco;

console.log(pedro);