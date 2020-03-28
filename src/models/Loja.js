const mongoose = require('mongoose')

const LojaSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    box_number: Number,
    bio: String,
    image_url: String,
})


module.exports = mongoose.model('Loja', LojaSchema)