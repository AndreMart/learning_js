const express = require("express")
const router = express.Router()
const Article = require('../models/article/Article')
const Category = require('../models/category/Category')
router.get("/article", (req, res) => {
    Article.findAll({
        include: [{
            model: Category,
        }]
        //raw: true,
        // order: [
        //     ['id', 'DESC']
        // ]
    }).then(articles => {
        res.render("admin/article/index", { articles: articles })
    })

})

router.get('/create-article', (req, res) => {
    Category.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(categories => {
        res.render('admin/article/createArticle', { categories: categories })
    }).catch(error => {
        console.log(error)
    })
})

router.post('/save-article', (req, res) => {
    const idCategory = req.body.idCategory
    const title = req.body.title
    const slug = title.replace(/ /g, '-')
    const body = req.body.body

    Article.create({
        categoryId: idCategory,
        title: title,
        slug: slug,
        body: body
    }).then(() => {
        res.redirect('/article')
    }).catch(() => {
        res.redirect('/create-article')
    })

    console.log(title, slug, body, idCategory)
})

router.get('/article/edit/:id', (req, res) => {
    const id = req.params.id
    Article.findByPk(id).then(article => {
        if (article != undefined) {
            Category.findAll({
                raw: true,
                order: [
                    ['id', 'DESC']
                ]
            }).then(categories => {
                if (categories != undefined) {
                    Category.findByPk(article.categoryId).then(catselected => {
                        if (catselected != undefined) {
                            res.render('admin/article/editArticle', { 
                                article: article, 
                                categories: categories, 
                                catselected : catselected })
                        }
                    })
                }
            })
        }
    })
})
router.post('/update-article', (req, res) => {

})
router.post('/delete/article', (req, res) => {
    const id = req.body.id
    if (id != undefined && id != null) {
        Article.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/article')
        })
    } else {

    }
})

module.exports = router