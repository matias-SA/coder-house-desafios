const express = require("express");
const app = express();
const product = require('./api/product');
const handlebars = require('express-handlebars')
const http = require('http').Server(app);

// le pasamos la constante http a socket.io
const io = require('socket.io')(http);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.get('/', (req, res) => {
    res.render('vista', { products: product.getProductList, isListEmpty: product.isListEmpty() })
})

routerApi.get('/productos', (req, res) => {
    res.send(product.getProductList)
});

routerApi.get('/productos/:id', (req, res) => {
    res.send(product.getProduct(req.params.id))
});

io.on('connect', socket => {
    console.log('usuario conectado');
    socket.emit('mi mensaje', 'este es mi mensaje desde el servidor');

    // recibo un evento del cliente, con su correspondiente dato
    socket.on('notificacion', data => {
        console.log(data);
    });
});

app.use('/api', routerApi)

const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
