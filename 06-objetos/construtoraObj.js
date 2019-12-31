function Point(x, y) {
    this.x = x
    this.y = y
}
// para referenciar essa função construtora usamos a palavra chave new como abaixo

let p = new Point(1, 1)
console.log(p.x)