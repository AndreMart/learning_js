/* MAP 
* com a função map podemos modificar o conteudo de um array passando 
* o resultado em mesma quantidade de indice para outro array
*/
// Exemplo 01
const notas = [12,15,16,14,18,19]
const newNotas = notas.map(function(e){
    return e + 2
})
console.log(newNotas)

/* MAP 
* podemos chamar maps encadeados um atraz do outro 
*/
// Exemplo 02
const soma5 = x => x + 5
const soma1 = x => x + 1
const notas2 = [1,5,8,10,9]
const saidaNotas2 = notas2.map(soma1).map(soma5)
console.log(saidaNotas2)