const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

const array = []

router.get('/cadastrarProdutos.html', (req, res) => {
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})
//Cadastrar usuário
router.post('/save', (req, res) => {
    const {name, price, description } = req.body
    array.push({
        nome: name,
        preco: price,
        descricao: description
    })
    console.log(array)
    
})

router.get('/visualizarProdutos.html', (req, res) => {
    res.sendFile(`${basePath}/visualizarProdutos.html`)
})
module.exports = router