const fs = require('fs')

// a constante __dirname pega o caminho atual
const caminho = __dirname + '/db.json'

// imprimindo o caminho atual 
console.log(caminho)

/*
 Comunicação síncrona é como uma conversa por rádio
Numa comunicação por rádio VHF, somente uma pessoa pode falar de cada vez (precisa apertar um botão para falar, e o outro lado
precisa soltar o botão para escutar). Enquanto uma pessoa fala, a outra só escuta. É preciso esperar o outro terminar sua
mensagem para poder responder. Somente uma mensagem por vez é trafegada pelo canal de comunicação, e num único sentido.

Comunicação assíncrona é como uma ligação telefônica
Ignorando a latência da rede telefônica e o tempo que a informação leva para trafegar pelas linhas, os dois lados da conversa
podem falar e escutar ao mesmo tempo. A capacidade de receber informação e emitir informação simultaneamente é limitada apenas
pelas habilidades da própria pessoa, mas o canal de comunicação é assíncrono. Se eu faço uma pergunta ao meu interlocutor,
posso muito bem fazer uma segunda enquanto ele está respondendo à primeira. Ele responde quando quiser/puder.
*/

// exemplo de sincrono, lembrando que no node isso irá travar o event loop

// sincrono
const arquivo = fs.readFileSync(caminho, 'UTF-8')
console.log(arquivo)
// convertendo para objeto
const convertObj = file => JSON.parse(file)

// retornando a função de conversão para uma constante
const arquivoConvertido = convertObj(arquivo)

// imprimindo o server
console.log(arquivoConvertido.db.server)

// exemplo de função assincrona do node
fs.readFile(caminho, 'UTF-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(config)
})

// pegando o arquivo de forma a retornar um obj, isso é sincrono
const config = require('./db.json')
console.log(config.db.port)

//lendo uma pasta
fs.readdir(__dirname, (err, arquivos)=>{
    console.log("arquivos da pasta...")
    console.log(arquivos)
})