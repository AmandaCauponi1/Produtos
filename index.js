const express = require('express')
const app = express()

const door = 3333

const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Importar a rota
const products = require('./products')


//Middleware para json
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use('/', products)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})


app.listen(door, ()=>{
    console.log(`Rodando na porta ${door}`)
})