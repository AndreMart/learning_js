const express = require("express")
const router = express.Router()
const Category = require("../models/category/Category")

router.get('/category', (req, res) => {
    Category.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(categorys => {
        res.render("admin/category/index.ejs", { 'categorys': categorys })
    }).catch(() => {
        console.log("deu erro")
    })
})

router.get('/create-category', (req, res) => {
    res.render("admin/category/createCategory.ejs", {})
})

router.post('/save-category', (req, res) => {
    const title = req.body.title
    const slug = title.replace(/ /g, "-")
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slug
        }).then(() => {
            res.redirect("category")
        })
    } else {
        res.redirect("/")
    }
    console.log(title)
})

router.get('/category/edit/:id', (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        res.render("/category")
    }
    Category.findByPk(id).then((category) => {
        if (category != undefined) {
            res.render('admin/category/editCategory.ejs', { category: category })
        } else { res.render("/category") }
    }).catch((error) => {
        console.log(error)
        res.render("/category")
    })
})

router.post('/category/update', (req, res) => {
    const title = req.body.title
    const id = req.body.id
    const slug = title.replace(/ /g, "-")
    
    Category.update({ title: title, slug:slug }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/category')
    })
})
router.post('/delete/category', (req, res) => {
    const id = req.body.id
    console.log(id)
    if (id != undefined && id != null) {
        Category.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/category')
        })
    } else {

    }
})
module.exports = router