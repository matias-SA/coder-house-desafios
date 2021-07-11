// Dada la siguiente constante: const frase = 'Hola mundo como están'
// Realizar una aplicación de servidor node.js con express que contenga los siguientes endpoints get:
// 1) '/api/getFrase' -> devuelve la frase en forma completa
// 2) '/api/getLetra/:num  -> devuelve por número de orden la letra dentro de esa frase (1 es la primera letra)
// 3) '/api/getPalabra/:num  -> devuelve por número de orden la palabra dentro de esa frase (1 es la primera palabra)
// Aclaraciones:
// - En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total 
// de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
// { error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
// { error: "El parámetro está fuera de rango" } cuando el parámetro no es numérico
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, 
// junto a los mensajes de error si ocurriesen.

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = 'Hola mundo como están';

app.get('/getFrase', (req, res) => {
    res.send(frase)
})

app.get('/getLetra/:num', (req, res) => {
    console.log(req.params.num);
    res.send(frase[req.params.num - 1]);
})

app.get('/getPalabra/:num', (req, res) => {
    console.log(req.params.num);
    res.send(frase.split(' ')[req.params.num - 1]);
})


app.listen(8080, () => console.log('El servidor esta corriendo'));