function sortear(min, max) {
    const result = Math.random() * (max - min) + min
    return Math.floor(result)
}
let pontoParada = -1


do {
    pontoParada = sortear(-1,10)
    console.log(pontoParada)
} while (pontoParada != -1)
