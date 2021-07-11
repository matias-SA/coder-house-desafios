// Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
// a) Ruta get '/api/sumar/5/6
// b) Ruta get '/api/sumar?num1=5&:num2=62) 
// c) Ruta get '/api/operacion/5+6
// No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
// Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. 
// Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
// El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.

// req.body => viene en un body
// req.params.num => viene en url
// req.query.otroNum => viene en query string

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/sumar/:num1/:num2', (req, res) => {
    console.log(req.params.num1);
    console.log(req.params.num2);

    try {
        sum = parseInt(req.params.num1) + parseInt(req.params.num2)
    } catch (error) {
        console.log(error);
    }
    res.send(`La suma de los numeros es ${sum}`)
})

app.post('/sumar/', (req, res) => {
    console.log(req.query.num1);
    console.log(req.query.num2);

    try {
        sum = parseInt(req.query.num1) + parseInt(req.query.num2)
    } catch (error) {
        console.log(error);
    }
    res.send(`La suma de los numeros es ${sum}`)
})

app.listen(8080, () => console.log(`El servidor esta funcionando`))