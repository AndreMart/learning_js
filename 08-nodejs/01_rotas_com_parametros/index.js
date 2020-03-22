const app = require('./src/server')
app.get('/', (req, res, next)=>{
    res.send("<h1> Olá </h1>")
})
app.get('/ola/:nome?/', function(req, res) {
    if(req.params.nome) {
        res.send("<h1> Olá "+ req.params.nome)
    }
})
app.get('/produtos',(req, res, next) => {
    console.log("passou aqui primeiro")
    next()
})

app.get('/produtos',(req, res, next) => {
    res.send({nome:'Computador 2', valor:147147})
})