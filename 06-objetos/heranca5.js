console.log(typeof Array)
console.log(typeof String)
console.log(typeof Boolean)

// como prototype podemos acrescentar novas funcionálidades a uma funtion pois funtion tem o prototype
// ex: vamos reveter uma palavra

//perceba que não temos essa função reverse na string, mas atribuimos a mesma por meio do prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
// agora que a mesma está atribuída a uma string podemos fazer o seguinte
console.log("OLá Olá".reverse())

Array.prototype.firstKey = function() {
    return this[0]
}
console.log([1,2,3,4,5,6,7,8,9,10].firstKey())
console.log(["UM",1,2,3,4,5,6,7,8,9,10].firstKey())
