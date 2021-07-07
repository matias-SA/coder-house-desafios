const express = require("express");

const app = express();

let contador = 0;

app.get('/', (req, res) => {
    let mensaje = `
    <html>
        <body>
            <h1 style="color: blue">Bienvenidos al servidor express</h1>
        </body>
    </html>
    `

    res.send(mensaje)
})

app.get('/visitas', (req, res) => {
    contador++;
    res.send(`La cantidad de visitas es ${contador}`)
})

app.listen(8080, () => console.log(`Nuestro servidor esta corriendo`))