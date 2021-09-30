const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
    message: String,
    email: String,
    shippingDate: Date
})

module.exports = model('Messages', messageSchema);

