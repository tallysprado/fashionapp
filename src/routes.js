//apenas um item do express, usa-se chaves
const { Router } = require('express')

const routes = Router();

routes.post('/lojas', (req, res)=>{
    
    console.log(req.body)
    
    return res.json({message: 'Hello'})
})

//para cadastrar no banco de dados

module.exports = routes