const { PORT } = require('./config/globals');
const { getConection } = require('./dao/db/connection')
const app = require('./server')

getConection().then((message) => {
    console.log(message);
    app.listen(8080, () => {
        console.log('Escuchando en el puerto 8080')
    })
}).catch(console.log)