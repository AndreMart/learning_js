const express = require("express")
const app = express()
const bodyParser = require("body-parser") // for forms
const connection = require('./src/database/connection') // my conncection

const categoriaController = require("./src/controllers/CategoriaController") // categoriaController
const artigoController = require("./src/controllers/ArtigoController")

const Category = require("./src/models/category/Category")
const Article = require("./src/models/article/Article")


app.use(bodyParser.urlencoded({ extended: false })) //body parser
app.use(bodyParser.json()) // format body parser

app.set("view engine", 'ejs') // my engine view
app.use(express.static('public')) // meus statics

connection.authenticate().then(() => {
    console.log("deu certo")
}).catch(error => {
    console.log(error)
})

app.use('/', categoriaController)
app.use('/', artigoController)

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})