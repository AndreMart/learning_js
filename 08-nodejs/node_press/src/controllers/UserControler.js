const express = require("express")
const router = express.Router()
const User = require("../models/user/User")
const bcrypt = require('bcryptjs')
const session = require('express-session')
const adminAuth = require('../middleware/auth')

router.get('/users', adminAuth, (req, res) => {
    User.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(users => {
        res.render("admin/user/index.ejs", { users: users})
    }).catch(() => {
        console.log("deu erro")
    })
})

router.get('/create-user', adminAuth,(req, res) => {
    res.render("admin/user/createUser.ejs", { emailExistente : false })
})

router.post('/save-user', adminAuth,(req, res) => {
    const email = req.body.email
    const password = req.body.password
    const emailExistente = 'O e-mail já existe'
    
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    User.findOne({where:{email:email}}).then(user=>{
        if(user == undefined) {
            User.create({
                email:email,
                password:hash
            }).then(
                User.findAll({
                    raw: true, order: [
                        ['id', 'DESC']
                    ]
                }).then(users =>{
                    res.redirect('/users')
                    }).catch(error=>{
                        console.log(error)
                }).catch(error=>{
                    console.log(error)
                })
                )
            }else {
                res.render("admin/user/createUser.ejs", {emailExistente: emailExistente})
            }
    })
})

router.get('/login',(req, res)=>{
    res.render('admin/user/login')
})

router.post('/auth', (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    User.findOne({
        where:{email:email}
    }).then(user => {
        if(user != undefined) {
            const pass = bcrypt.compareSync(password, user.password)
            if(pass) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                console.log('ta validando')
                res.redirect('/users')
            } else {
                res.redirect('/login')
            }
        } else {
            res.redirect('/login')
        }
    })
})

module.exports = router