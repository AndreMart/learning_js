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
        Category.findAll().then(categories=> {
            res.render("site/article/index", {articles:articles, categories:categories})
        })
    })
    
})

router.get('/:slug', (req, res)=>{
    const slug = req.params.slug
    Article.findOne({
        where: {
            slug:slug
        }
    }).then(article=>{
        Category.findAll().then(categories=> {
            res.render("site/article/selected", {article:article, categories:categories})
        })
    })
})

module.exports = router