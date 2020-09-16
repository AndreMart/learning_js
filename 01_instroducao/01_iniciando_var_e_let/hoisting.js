//************ +__+ ************///
//* DATA DA REVISÃO 15/09/2020 *///
//************ +__+ ************///

/*
    Não ha muita utilidade, basicamente o Hoisting do javascript joga a declaração
    para a parte superior do objeto window
*/
console.log("a = ", a);

var a = "joguei a declaração var para antes do console.log";

console.log(a);
