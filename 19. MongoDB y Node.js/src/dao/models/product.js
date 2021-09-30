const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    code: String,
    thumbnail: String,
    stock: Number,
    timestamp: Date
})

module.exports = model('Products', productSchema);

