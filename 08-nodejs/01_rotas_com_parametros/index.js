const app = require('./src/server')

app.get('/', (req, res, next)=>{
    const {nome} = req.query
    res.send(`<h1> Olá ${nome}</h1>`)
})
app.get('/ola/:nome?/', function(req, res) {
    if(req.params.nome) {
        res.send("<h1> Olá "+ req.params.nome)
    }
})
// app.get('/produtos',(req, res, next) => {
//     console.log("passou aqui primeiro")
//     next()
// })
const user = ['Diego', 'André']
app.get('/user/:index', (req, res)=>{
    const {index} = req.params
    return res.json(user[index])
})

// app.get('/produtos',(req, res, next) => {
//     res.send({nome:'Computador 2', valor:147147})
// })

app.get('/queryparam',(req, res)=>{
    const nome = req.query['nome']
    return res.send(nome != null ? nome : "<h1> Você precisa passar o parametro correto</h1>")
})