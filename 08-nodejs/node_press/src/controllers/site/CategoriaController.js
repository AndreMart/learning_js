const express = require("express")
const router = express.Router()
const Category = require("../../models/category/Category")
const Article = require("../../models/article/Article")

router.get('/site/category/selected/:id', (req, res) => {
    const id = req.params.id
    Category.findByPk(id).then(category => {
        Article.findAll({
            where: {
                categoryId: category.id
            }
        }).then(articles => {
            Category.findAll().then(categories => {
                res.render("site/category/selected.ejs", { category: category, articles: articles, categories: categories })
            }).catch(()=>{
                res.redirect('/')
            })
        })
    }).catch(() => {
        console.log("deu erro")
    })
})

module.exports = router