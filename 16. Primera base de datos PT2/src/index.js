const { PORT } = require('./config/globals');
const app = require('./server')

app.listen(PORT, () => {
    console.log(PORT);
    console.log(`Escuchando en el puerto: ${PORT}`)
})