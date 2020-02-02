const fs = require('fs')
// escrevendo um arquivo om file system do node.
const pessoa = {
    nome: "João",
    idade: 25,
    peso: 85
}
fs.writeFile(__dirname+"/escrita.json", JSON.stringify(pessoa), err=>{
    console.log(err || "Arquivo Escrito com sucesso")
})