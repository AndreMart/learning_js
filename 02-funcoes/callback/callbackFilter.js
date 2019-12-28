//vamos ver como selecionar as menores notas
const notas = [1,2,5,5,8,9,6,4.5,8.6]
// função sem callback
menoresNotas=[]
nota = (notas) => {
    for (const ind in notas) {
        if (notas[ind] < 5) {
                menoresNotas.push(notas[ind])
            }  
    }
    return menoresNotas
}
console.log(nota(notas))

//função utilzando callbakc

menoresNotas2 = notas.filter((content)=>{return content < 5})
console.log(menoresNotas2)

const menorQueCinco = content => content < 5
menoresNotas3 = notas.filter(menorQueCinco)
console.log(menoresNotas3)
