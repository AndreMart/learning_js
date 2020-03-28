const express = require("express")
const router = express.Router()

router.get("/artigo",(res, req)=>{
    res.send("está chegando no artigo")
})

module.exports = router