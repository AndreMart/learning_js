const notas = [12,45,78,85,52]
Array.prototype.foreach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

notas.foreach2(function(notas, indice){
    console.log(notas, indice)
})
