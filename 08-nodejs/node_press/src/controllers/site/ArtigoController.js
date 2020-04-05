const express = require("express")
const router = express.Router()
const Article = require('../../models/article/Article')
const Category = require('../../models/category/Category')

router.get("/site/article",(req, res)=>{
    Article.findAll({
        include: [{
            model: Category,
        }]
    }).then(articles=>{
        res.render("site/article/index", {articles:articles})
    })
    
})


module.exports = router