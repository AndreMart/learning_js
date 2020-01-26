console.log(this === module.exports)
console.log(this === exports)
console.log(module.exports === exports)

// Apesar de todos serem iguais a referencia de exportação sempre deve ser feita a partir de module.exports