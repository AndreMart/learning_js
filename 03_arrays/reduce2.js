const alunos = [
    { nome: 'João', nota: 7.3, bolsista:false},
    { nome: 'Maria', nota: 8.0, bolsista:true},
    { nome: 'João', nota: 6.0, bolsista:false}
]

// todos alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
