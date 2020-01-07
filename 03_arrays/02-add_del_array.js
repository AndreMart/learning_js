// podemos declarar array colocando os valores do mesmo entre chaves
var emails = ["andremartins@outlook.com.br", "maria@proto.com"];

console.log(emails);

delete emails[0];

console.log(emails);

//adicionando no fim
emails.push("mauro@fr.com");
console.log(emails);

//removendo o ultimo elemento do array
emails.pop("mauro@fr.com");

console.log(emails);

//adicionando no inicio
emails.unshift("mauro@fr.com");
console.log(emails);

//removendo o ultimo elemento do array
emails.shift("mauro@fr.com");
console.log(emails)

//como o shift se remove completamente
emails.shift(emails[0])
console.log(emails)

//splice
//adicionando a partir da primeira posição 2 elementos
emails.splice(2,1,"adm@adm", "am@am")
console.log(emails)
//removendo
emails.splice(2,1)
console.log(emails)

// adicionando no inicio
emails.unshift("zrt@gmail.com")
console.log(emails)

