//entendendo o laço for

for(var i = 0; i<5; i++) {
	console.log(i);
}

var s = "supermidia";

for(var k = 0, tamanho = s.length; k < tamanho; k++) {
	console.log("K", k);
}

var b = 8;
for (; b < 15; b++) {
	console.log("B" , b);
}

var z = 0;

for(;z<4;) {
	console.log(z);
	z++;
}

//loop infinito
var l = 1;
for (;;) {
	console.log("->", l++);
	if(l === 101) {
		break;
	}
	
}