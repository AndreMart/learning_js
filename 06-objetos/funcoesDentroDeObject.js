const pessoa = {
    nome: "Mauro",
    idade: 25,
}
// metodos interessantes 
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave, valor)
})
//definindo uma propriedade
Object.defineProperty(pessoa, "peso",{
    // ela pode ser listada?
    enumerable:true,
    // ela pode ser reescrita?
    writable:false,
    // qual valor dela?
    value:145
})
console.log(pessoa.peso)

//função Object.assing é uma espécie de concatenação
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)