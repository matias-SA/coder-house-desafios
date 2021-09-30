const express = require("express");
const handlebars = require('express-handlebars')
const product = require('./services/product');
const http = require('http');
const socketio = require('socket.io')

const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Almacenamos el server http en una constante
const server = http.createServer(app);
// Usamos el sockectio con el server http
const io = socketio(server);

// Usamos los express static para cargar el javascript del cliente
app.use('/public', express.static(__dirname + '/public'))

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
    res.render('vista', { isListEmpty: product.isListEmpty })
})

// Socket events
io.on('connect', socket => {
    socket.emit('products list', product.selectProducts());

    // recibo un evento del cliente, con su correspondiente dato
    socket.on('addNewProduct', data => {
        product.newProduct(data)
        console.log(data);
        io.sockets.emit('productData', { products: product.selectProducts(), isListEmpty: product.isListEmpty() })
    });
    // socket.emit('messages', messages)

    // socket.on('newMessage', data => {
    //     data.date = moment().format('LLLL')
    //     messages.push(data)
    //     io.sockets.emit('messages', messages)
    // })
});

// importo las rutas y las uso con el prefijo /productos
const productosRouter = require('./routes/products');
app.use('/productos', productosRouter);

// importo las rutas y las uso con el prefijo /messages
const messagesRouter = require('./routes/message');
app.use('/messages', messagesRouter);

module.exports = app;