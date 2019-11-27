// Modos de função em javascript
// por André Martins
//######################################################

// podemos criar uma função literal 
function fun(){}

// podemos criar uma função e atribuir a mesma para uma variável
fun2 = function(){}

// podemos criar uma função atribuindo para um array
const array = [function(n,n1){console.log(n+n1)}, fun, fun2]
array[0](2,2)

//também podemos criar uma função a partir de um parametro de objeto
pessoa = {

}
pessoa.correr = function(){console.log("está correndo")}
pessoa.correr()

//podemos criar funções e dentro da nossa função ter outra função
function soma(a,b) {
    return function(c) {
        console.log(a+b+c)
    }
}
soma(3,5)(10)
//outra forma de chamar uma função assim é
const som = soma(3,5)
som(10)



