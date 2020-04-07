const express = require("express")
const app = express()
const bodyParser = require("body-parser") // for input forms
const connection = require('./src/database/connection') // my conncection

app.use(bodyParser.urlencoded({ extended: false })) //body parser
app.use(bodyParser.json()) // format body parser

app.set("view engine", 'ejs') // my engine view
app.use(express.static('public')) // my statics

const categoriaController = require("./src/controllers/CategoriaController") // categoriaController
const artigoController = require("./src/controllers/ArtigoController") // artigoController

const artigoSiteController = require("./src/controllers/site/ArtigoController") // artigoController
const categorySiteController = require("./src/controllers/site/CategoriaController") // artigoController

const Category = require("./src/models/category/Category") // model category
const Article = require("./src/models/article/Article") // model aricle


connection.authenticate().then(() => {
    console.log("deu certo")
}).catch(error => {
    console.log(error)
})

app.use('/', categoriaController)
app.use('/', artigoController)
app.use('/', artigoSiteController)
app.use('/', categorySiteController)

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})