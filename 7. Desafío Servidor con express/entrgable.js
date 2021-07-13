const express = require("express");
const fs = require('fs');

class Archivo {
    constructor(nameArch) {
        this.nameArch = nameArch;
    }
    leer = async () => {
        try {
            return await fs.promises.readFile(`./${this.nameArch}`, 'utf-8');
        } catch {
            return [];
        }
    }
}

const app = express();

let arch = new Archivo('productos.txt');

let numberVisitsItems = 0;
let numberVisitsItem = 0;

// Tambien podes usar, y te recomiendo que lo hagas, async/await en los endpoints
// No deja de ser un callback así que simplemente le pases el async
app.get('/items', async (req, res) => {
    numberVisitsItems++;
    try {
        const data = await arch.leer()
        const dataString = JSON.parse(data)
        let mensaje = {
            items: dataString,
            cantidad: dataString.length
        }

        res.send(mensaje)
    } catch (error) {
        console.error(error)
        res.status(500).send("Ocurrio un error")
    }
})

app.get('/item-random', (req, res) => {
    arch.leer().then(data => {
        const dataString = JSON.parse(data)
        let numberRandom = Math.floor(Math.random() * ((dataString.length) - 0)) + 0;
        let mensaje = { item: dataString[numberRandom] }
        res.send(mensaje)
    })
    numberVisitsItem++;
})

app.get('/visitas', (rew, res) => {
    let mensaje = {
        visitas: {
            items: numberVisitsItems,
            item: numberVisitsItem
        }
    }
    res.send(mensaje)
})

app.listen(8080, () => console.log(`El servidor esta corriendo`))
