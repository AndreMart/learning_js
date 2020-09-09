const express = require('express')
const router = express.Router()
const checkProdutosExists = require('./src/middleware/checkProdutosExists')
const checkNameExist = require('./src/middleware/checkNameExists')

const produtos = ['computador', 'carro', 'notebook']

//listagem de produtos
router.get('/produtos',(req, res)=>{
  return res.json(produtos)
})

// listagem unica
router.get('/produto/:index',checkProdutosExists,(req, res)=>{
  const{index} = req.params
  return res.json(produtos[index])
})
// cadastro de produdos
router.post('/add/produdo', checkNameExist, (req,res)=>{
  const {name} = req.body
  produtos.push(name)
  return res.json(produtos)
})

// update de produtos
router.put('/update/produtos/:index',checkNameExist,(req, res)=>{
  const {index} = req.params
  const { name } = req.body
  produtos[index] = name
  return res.json(produtos)
})

// delte de produtos
router.delete('/delete/produto/:index',(req, res)=>{
  const {index} = req.params
  produtos.shift(produtos[index])
  return res.send()
})

module.exports = router