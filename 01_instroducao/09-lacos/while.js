// executando um exemplo de laço while
randomico = function(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let saida = 0

while(saida != -1) {
    saida = randomico(-1,10)
    console.log("saida " + saida)
}