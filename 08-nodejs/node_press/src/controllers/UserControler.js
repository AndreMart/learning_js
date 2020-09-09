const express = require("express")
const router = express.Router()
const User = require("../models/user/user")
const bcrypt = require('bcryptjs')
const isAuthenticated = require('../middleware/isAuthenticated')
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (username, password, done) {
        User.findOne({ where: { email: username } }).then(function(user){
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

router.use(passport.initialize());
router.use(passport.session());

router.get('/users', isAuthenticated,
    (req, res) => {
        User.findAll({
            raw: true, order: [
                ['id', 'DESC']
            ]
        }).then(users => {
            res.render("admin/user/index.ejs", { users: users })
        }).catch(() => {
            console.log("deu erro")
        })
    })

router.get('/create-user', (req, res) => {
    res.render("admin/user/createUser.ejs", { emailExistente: false })
})

router.post('/save-user', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const emailExistente = 'O e-mail já existe'

    //const salt = bcrypt.genSaltSync(10)
    //const hash = bcrypt.hashSync(password, salt)
    User.findOne({ where: { email: email } }).then(user => {
        if (user == undefined) {
            User.create({
                email: email,
                password: password
            }).then(
                User.findAll({
                    raw: true, order: [
                        ['id', 'DESC']
                    ]
                }).then(users => {
                    res.redirect('/users')
                }).catch(error => {
                    console.log(error)
                }).catch(error => {
                    console.log(error)
                })
            )
        } else {
            res.render("admin/user/createUser.ejs", { emailExistente: emailExistente })
        }
    })
})

router.get('/login', (req, res) => {
    res.render('admin/user/login')
})

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login',
        failureFlash: true
    })
);

module.exports = router