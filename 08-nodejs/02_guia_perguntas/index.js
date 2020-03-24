const express = require("express")
const app = express()

app.set('view engine', 'ejs') // view engine
app.use(express.static('public')) // meus statics

app.get("/:nome/:idade", (req, res)=>{
    const nome = req.params.nome
    const idade = req.params.idade
    const condicao = true
    produtos = [
        {nome:"Computador", preco:1457},
        {nome:"HD", preco:500},
        {nome:"Memória", preco:250},
        {nome:"Fonte", preco:640},
        {nome:"Placa de video", preco:3000},
        {nome:"Processador", preco:500}
    ]
    if(nome && idade) {
        res.render("index", {
            nome, idade, condicao, produtos
        })
    } 
})
app.listen(3003, ()=>{
    console.log("http://localhost:3003")
})