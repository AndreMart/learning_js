const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos',(req, res, next) => {
    console.log("passou aqui primeiro")
    next()
})

app.get('/produtos',(req, res, next) => {
    res.send({nome:'Computador 2', valor:147147})
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})

module.exports = app