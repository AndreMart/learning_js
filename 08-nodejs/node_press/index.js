const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')

const bodyParser = require("body-parser") // for input forms
const connection = require('./src/database/connection') // my conncection

app.use(bodyParser.urlencoded({ extended: false })) //body parser
app.use(bodyParser.json()) // format body parser

app.set("view engine", 'ejs') // my engine view
//express session middleware setup
app.use(session({
    secret: 'W$q4=25*8%v-}UV',
    resave: true,
    saveUninitialized: true
}));

// app.use(session({
//     secret: "qualquercoisa", cookie: { maxAge: 30000000 }
// }))

app.use(express.static('public')) // my statics
const categoriaController = require("./src/controllers/CategoriaController") // categoriaController
const artigoController = require("./src/controllers/ArtigoController") // artigoController
const userController = require("./src/controllers/UserControler") // userController

const artigoSiteController = require("./src/controllers/site/ArtigoController") // artigoController
const categorySiteController = require("./src/controllers/site/CategoriaController") // artigoController

const Category = require("./src/models/category/Category") // model category
const Article = require("./src/models/article/Article") // model aricle
const User = require('./src/models/user/User') // model user


connection.authenticate().then(() => {
    console.log("deu certo")
}).catch(error => {
    console.log(error)
})

app.use('/', userController)
app.use('/', categoriaController)
app.use('/', artigoController)
app.use('/', artigoSiteController)
app.use('/', categorySiteController)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})