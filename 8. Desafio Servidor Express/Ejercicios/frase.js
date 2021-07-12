const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = 'Frase inicial';

app.get('/api/leer', (req, res) => {
    res.send(frase)
})

app.get('/api/leer/:pos', (req, res) => {
    res.send(frase.split(' ')[req.params.pos - 1])
})

app.post('/api/guardar', (req, res) => {
    // let frase = frase + `${req.body.palabra}`
    let mensaje = frase + ` ${req.body.palabra}`
    res.send(mensaje)
})

app.listen(8080, () => console.log('El servidor esta corriendo'))
