const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3333
const routes = require('./routes')

mongoose.connect('mongodb+srv://tallys:teste123@cluster0-oqkft.mongodb.net/center?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//o express entenderá requisições com corpo no formato json
//express.json() precisa vir antes das rotas
app.use(express.json())
app.use(routes)


//query params, req.query, usados em filtros, paginação, ordenação e etc search?=123
//route params, req.params, identificar um recurso na alteração ou remoção, localhost:3000/users/1
//body params, req.body, dados para criação ou alteração de um registro



app.listen(PORT, ()=>{
    console.log('server running on port '+PORT)
})