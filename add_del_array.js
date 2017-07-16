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

console.log(emails);

//adicionando no inicio
emails.unshift("mauro@fr.com");
console.log(emails);

//removendo o ultimo elemento do array
emails.shift("mauro@fr.com");
