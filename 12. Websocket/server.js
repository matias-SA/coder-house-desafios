const express = require("express");
const product = require('./api/product');
const handlebars = require('express-handlebars')
const http = require('http');
const socketio = require('socket.io')

const app = express();

// Almacenamos el server http en una constante
const server = http.createServer(app);
// Usamos el sockectio con el server http
const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usamos los express static para cargar el javascript del cliente
app.use('/public', express.static(__dirname + '/public'))

let routerApi = express.Router()

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

// HTTP endpoints

app.get('/', (req, res) => {
    res.render('vista', { products: product.getProductList, isListEmpty: product.isListEmpty() })
})

routerApi.get('/productos', (req, res) => {
    res.send(product.getProductList)
});

routerApi.get('/productos/:id', (req, res) => {
    res.send(product.getProduct(req.params.id))
});

// Socket events

io.on('connect', socket => {
    console.log('usuario conectado');
    socket.emit('mi mensaje', 'este es mi mensaje desde el servidor');

    // recibo un evento del cliente, con su correspondiente dato
    socket.on('notification', data => {
        console.log(data);
        // Si el usuario escribio Hola, se responde con un socket el saludo
        if (data.message == 'Hola') {
            socket.emit('response', {message: 'Hola, como estas?'})
        }
    });
});



// -------------------
app.use('/api', routerApi)

const puerto = 8080;


// IMPORTANTE:
// Usamos el server para hacer el .listen() no el app.listen
// Ya que este es el que va a tener el endpoint '/socket.io/socket.io.js' para usar desde el front

server.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
