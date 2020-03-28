const express = require("express")
const router = express.Router()
const Category = require("../models/category/Category")

router.get('/category',(req,res)=>{
    res.render("admin/category/index.ejs",{})
})

router.post('/save-category', (req, res) => {
    const title = req.body.title
    const slug = title.replace(/ /g, "-")
    if(title != undefined) {
        Category.create({
            title:title,
            slug:slug
        }).then(()=>{
            res.redirect("category")
        })
    } else {
        res.redirect("/")
    }
    console.log(title)
})

module.exports = router