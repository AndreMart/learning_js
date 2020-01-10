let notas = [7,8,6,8,10]

// com o foreach podemos percorrer facilmente um array
// em um foreach recemos 3 parametros, o conteúdo, o indice e por fim o próprio array
notas.forEach(function(nota, indice){
    console.log(`${indice + 1} ) ${nota}`)
})

// agora um exemplo com arrow
notas.forEach(nota=>{console.log(nota)})

// também podemos passar os parâmetros em nosso foreach
notas.forEach((nota, indice)=>{console.log(indice +1, nota)})

// outra forma de fazer é atribuir a uma constante
const n = (nota, indice)=>console.log(indice +1, nota)
notas.forEach(n)