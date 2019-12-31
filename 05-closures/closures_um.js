var init = (function(){
	var contagem = 0;

	return function(){
		contagem = contagem + 1;
		console.log(" -> " + contagem);
	}
})();

init();
init();
init();