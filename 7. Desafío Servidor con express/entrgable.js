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

app.get('/items', (req, res) => {
    arch.leer().then(data => {
        const dataString = JSON.parse(data)
        let mensaje = {
            items: dataString,
            cantidad: dataString.length
        }
        res.send(mensaje)
    })
    numberVisitsItems++;
    // console.log('hola, soy Dati el mas lindo de todos uwu :3 c: <3');
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
