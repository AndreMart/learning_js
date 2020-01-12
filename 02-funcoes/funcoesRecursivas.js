/* Função fatorial com recursividade
* criamos uma função que recebe um parametro
* caso o parametro seja igual a zero retornamos 1
* caso seja maior que zero retornamos a propria função que possui o seu parametro e podemos fazer uma ação
* nesse caso estamos decrementando um e multiplicando pelo parametro anterior
*/
function fat(f) {
    if(f == 0) {
        return 1
    } else {
        return f * fat(f-1)
    }
}
console.log(fat(5))

//agora vamos resolver a com arrow
fat = (x)=>{return x==0 ? 1 : x * fat(x-1)}
console.log(fat(5))