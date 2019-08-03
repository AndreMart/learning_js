var pedro = {
	nome:"Pedro Roberto",
	idade:34,
	email:"teste@gmail.com",
	comparaEmail : function(objeto) {
		return this.email === objeto.email;
	}
}

var maria = {
	nome:"Maria Roberto",
	idade:35,
	email:"teste@gmail.com"
}

//comparando objetos em javascript

console.log(pedro.comparaEmail(maria));