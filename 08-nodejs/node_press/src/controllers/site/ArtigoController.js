const express = require("express")
const router = express.Router()
const Article = require('../../models/article/Article')
const Category = require('../../models/category/Category')

router.get("/site/article", (req, res) => {
    Article.findAll({
        include: [{
            model: Category,
        }]
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("site/article/index", { articles: articles, categories: categories })
        })
    })

})

router.get('/article/:numberPage', (req, res) => {
    let numberPage = req.params.numberPage
    numberPage = parseInt(numberPage) ? parseInt(numberPage) : 0
    let pageSize = 4
    const offset = numberPage * pageSize
    Article.findAndCountAll({
        limit: pageSize,
        offset: offset
    }).then(articles => {
        let next = true
        if (pageSize * numberPage >= articles.count - 1) {
            next = false
        }
        numberPages = articles.count / pageSize,

        Category.findAll().then(categories=>{
            result = {
                next: next,
                articles: articles,
            }
            res.render("site/article/articles",{numberPages:numberPages, result:result, categories:categories})
        })

    }).catch(error => {
        console.log(error)
    })

})

router.get('/article/:slug', (req, res) => {
    const slug = req.params.slug
    if (slug == null || slug == undefined) {
        res.redirect('/')
    }
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        Category.findAll().then(categories => {
            res.render("site/article/selected", { article: article, categories: categories })
        })
    })
})




module.exports = router