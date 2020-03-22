//vamos entender o Arow
let valores = ["12", "13", "23"];

//fica bem legível esse código (dizemos valores recebe algo mais valores mais algo)
let precosEmReais = valores.map(valores=>"R$" + valores + ",00");
console.log(precosEmReais);

//podemos fazer um filter e após isso aplicar um mapp
let acimaDeVinte = valores.filter(valores=> valores > 20).map(valores=>"R$" + valores + ",00");
console.log(acimaDeVinte);

