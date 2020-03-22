// vamos entender o que a função replace faz
// a função recebe dois parametros o primeiro para busca e o segundo para substituição
let nome = "noite"
console.log(nome.replace("noite", "dia"))
// perceba que essa função não altera a variável original
console.log(nome)
// assim devemos atribuir a outra ou a mesma variável

nome = nome.replace("noite", "dia")
console.log(nome)

// Seu exercício: Sua missão agora é criar uma função chamada "substituicaoRapida" que você recebe um texto, uma palavra 
//para procurar e a palavra que substituirá a que você está procurando. A função deve retornar o texto com a palavra substituída.

// primeira opção de função e eu gosto mais dessa opção seria utilizado arow functions
let nomeAntigo = "nomeAntigo"
const trocaNomes = (nome, novoNome) => nome.replace(nome, novoNome)
nomeAntigo = trocaNomes(nomeAntigo, "nomeNovo")
console.log(nomeAntigo)

// segunda forma seria utilizando uma função mais convencinal da linguagem

function substituicaoRapida() {
    let texto = "Boa tarde"
    let textoNovo = texto.replace("tarde", "noite")
    return (`${textoNovo}`)
}

console.log(substituicaoRapida('Boa tarde'))
