const porta = 3003

const express = require('express')
const app = express()
app.use(express.json())
// app.use((req, res, next)=>{
//     console.log(`Método --> ${req.method} <> URL --> ${req.url}`)

//     return next()
// })

const crud = require('../crud')

// app.get('/produtos',(req, res, next) => {
//     console.log("passou aqui primeiro")
//     next()
// })

// app.get('/produtos',(req, res, next) => {
//     res.send({nome:'Computador 2', valor:147147})
// })
app.use('/', crud)

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})

module.exports = app