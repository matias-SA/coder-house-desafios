const express = require("express");
const app = express();
const product = require('./product');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let routerApi = express.Router()

app.use('/', express.static(__dirname + '/public'))

routerApi.get('/productos', (req, res) => {
    res.send(product.getProductList)
});

routerApi.get('/productos/:id', (req, res) => {
    res.send(product.getProduct(req.params.id))
});

routerApi.post('/productos/guardar', (req, res) => {
    res.send(product.newProduct(req.body))
})

routerApi.put('/productos/actualizar/:id', (req, res) => {
    res.send(product.postProduct(req.params.id, req.body))
})

routerApi.delete('/productos/borrar/:id', (req, res) => {
    res.send(product.deleteProduct(req.params.id))
})

app.use('/api', routerApi)

const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
