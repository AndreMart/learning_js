const express = require("express")
const bodyParser = require("body-parser")
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

// connection
//         .authenticate()
//         .then(() =>{
//             console.log("deu certo")
//         })
//         .catch(()=>{
//             console.log("erro")
//         })

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs') // view engine
app.use(express.static('public')) // meus statics

app.get('/perguntas', (req, res) => {
    
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        res.render("perguntas", { "perguntas": perguntas })
    })
})

app.get('/pergunta', (req, res) => {
    res.render("pergunta")
})

app.get('/pergunta-selecionada/:id', (req, res) => {
    const id = req.params.id
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {

            Resposta.findAll({
                raw: true, order: [
                    ['id', 'DESC']
                ],
                where: {perguntaId : pergunta.id}
            }).then(respostas => {
                res.render("pergunta-selecionada", {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })

        } else {
            console.log("passou aqui")
            res.redirect("/")
        }
    })
})

app.post('/saveperguntas', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    Pergunta.create({
        "title": title,
        "description": description
    })
        .then(() => {
            res.redirect("/")
        })
})

app.get('/', (req, res) => {
    const nome = "André"
    const idade = 32
    const condicao = true
    produtos = [
        { nome: "Computador", preco: 1457 },
        { nome: "HD", preco: 500 },
        { nome: "Memória", preco: 250 },
        { nome: "Fonte", preco: 640 },
        { nome: "Placa de video", preco: 3000 },
        { nome: "Processador", preco: 500 }
    ]
    if (nome && idade) {
        res.render("index", {
            nome, idade, condicao, produtos
        })
    }
})

app.get("nome/:nome/:idade", (req, res) => {
    const nome = req.params.nome
    const idade = req.params.idade
    const condicao = true
    produtos = [
        { nome: "Computador", preco: 1457 },
        { nome: "HD", preco: 500 },
        { nome: "Memória", preco: 250 },
        { nome: "Fonte", preco: 640 },
        { nome: "Placa de video", preco: 3000 },
        { nome: "Processador", preco: 500 }
    ]
    if (nome && idade) {
        res.render("index", {
            nome, idade, condicao, produtos
        })
    }
})

app.post('/resposta/', (req, res) => {
    const corpo = req.body.corpo
    const id = req.body.id
    if (corpo != undefined && id != undefined) {
        Resposta.create({
            corpo: corpo,
            perguntaId: id
        }).then(() => {
            res.redirect("/")
        })
    }
})

app.get("/delete-pergunta/:id", (req, res) =>{
    const id = req.params.id
    if(id != undefined) {
        Pergunta.destroy({
            where: {id:id}
        }).then(()=>{
            Resposta.destroy({
                where:{perguntaId:id}
            }).then(()=>{
                res.redirect("/")
            })
        }).catch(()=>{
            console.log("deu erro")
        })
    }
})

app.listen(3003, () => {
    console.log("http://localhost:3003")
})