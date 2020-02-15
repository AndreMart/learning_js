// trabalhando com destructuring

// desestruturando uma string

const [a,b,c, ...d] = "Coisa"
console.log(a, b, c, d)

// desestruturando um array
const [nom,idad] = [nom=>"André", idad=>32]
console.log(nom(),idad())

// desestruturando um arry
const [arr3,arr4] = [1,2,3]
console.log(arr3,arr4)

// desestruturando objetos
const {nome:n, idade} = {nome:"André Martins", idade:32}
console.log(n, idade)
