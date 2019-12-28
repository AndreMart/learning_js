// factory são funções que retornam objetos 

function criaPessoa()
{
    return {
        nome:'André Martins',
        idade: 32
    }
}
console.log(criaPessoa())

function criarProduto(nome, preco, qtd, desconto = 5) {
    return {nome, preco, qtd, desconto}
}
console.log(criarProduto("PC", 1452, 14))   