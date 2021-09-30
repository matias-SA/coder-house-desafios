const mongoose = require('mongoose')

const link = 'mongodb+srv://maatiassoto:triumph53@cluster0.r6p2o.mongodb.net/DB_CODER?retryWrites=true&w=majority'

exports.getConection = async () => {
    try {
        await mongoose.connect(link, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        return 'conexion con exito'
    } catch (error) {
        return 'conexion fallida'
    }

}