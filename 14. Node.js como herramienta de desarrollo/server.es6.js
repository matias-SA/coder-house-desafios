'use strict';

var express = require("express");
var product = require('./api/product');
var handlebars = require('express-handlebars');
var http = require('http');
var socketio = require('socket.io');
var moment = require('moment');

var app = express();

// Almacenamos el server http en una constante
var server = http.createServer(app);
// Usamos el sockectio con el server http
var io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usamos los express static para cargar el javascript del cliente
app.use('/public', express.static(__dirname + '/public'));

var routerApi = express.Router();

app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs'
}));

app.set("view engine", "hbs");
app.set("views", "./views");

// HTTP endpoints

app.get('/', function (req, res) {
    res.render('vista', { isListEmpty: product.isListEmpty() });
});

routerApi.get('/productos', function (req, res) {
    res.send(product.getProductList);
});

routerApi.get('/productos/:id', function (req, res) {
    res.send(product.getProduct(req.params.id));
});

var messages = [{ email: "bot@gmail.com", date: moment().format('LLLL'), messageData: "¡Hola! ¿Que tal?" }, { email: "bot@gmail.com", date: moment().format('LLLL'), messageData: "¿Alguno de ustedes necesitan ayuda?" }];

// Socket events

io.on('connect', function (socket) {
    socket.emit('products list', product.productList);

    // recibo un evento del cliente, con su correspondiente dato
    socket.on('addNewProduct', function (data) {
        product.newProduct(data);
        console.log(data);
        io.sockets.emit('productData', { products: product.productList, isProduct: product.isListEmpty() });
    });
    socket.emit('messages', messages);

    socket.on('newMessage', function (data) {
        data.date = moment().format('LLLL');
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

// -------------------
app.use('/api', routerApi);

var puerto = 8080;

// IMPORTANTE:
// Usamos el server para hacer el .listen() no el app.listen
// Ya que este es el que va a tener el endpoint '/socket.io/socket.io.js' para usar desde el front

server.listen(puerto, function () {
    console.log('servidor escuchando en http://localhost:' + puerto);
});

server.on('error', function (error) {
    console.log('error en el servidor:', error);
});
