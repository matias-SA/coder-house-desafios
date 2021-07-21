const express = require("express");
const app = express();
const product = require('./api/product');
const handlebars = require('express-handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let routerApi = express.Router()

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render("vista.pug", { isProduct: product.isListEmpty(), products: product.productList });
})
app.get('/guardar-producto', (req, res) => {
    res.render("formulario.pug");
})


routerApi.get('/productos', (req, res) => {
    res.send(product.getProductList)
});

routerApi.get('/productos/:id', (req, res) => {
    res.send(product.getProduct(req.params.id))
});

routerApi.post('/productos/guardar', async (req, res) => {
    await product.newProduct(req.body)
    res.redirect('/guardar-producto')
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
