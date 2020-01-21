const alunos = [
    { nome: 'João', nota: 7.3, bolsista:true},
    { nome: 'Maria', nota: 8.0, bolsista:false},
    { nome: 'João', nota: 6.0, bolsista:true}
]

const resultado = alunos.map(a =>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
})
console.log(resultado)