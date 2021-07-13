const express = require("express");
const app = express();
const product = require('./product');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// class Product {
//     constructor(title, price, thumbnail, id) {
//         this.title = title,
//             this.price = price,
//             this.thumbnail = thumbnail,
//             this.id = id
//     }
// }

// let productList = [];


app.get('/api/productos', (req, res) => {
    // let productsLength = productList.length
    // if (productsLength == 0) {
    //     return res.send({ error: 'no hay productos cargados' })
    // } else {
    //     return res.send(productList)
    // }
    res.send(product.getProductList)
});

app.get('/api/productos/:id', (req, res) => {
    // let productsLength = productList.length;
    // if (req.params.id > productsLength) {
    //     return res.send({ error: 'producto no encontrado' })
    // } else {
    //     return res.send(productList[req.params.id - 1])
    // }
    res.send(product.getProduct(req.params.id))
});

app.post('/api/productos/guardar', (req, res) => {
    // product.id = productsLength + 1
    // let newProduct = new Product(req.body.title, req.body.price, req.body.thumbnail, productsLength + 1);
    // console.log(newProduct);
    // res.send(newProduct)
    res.send(product.newProduct(req.body))
})


const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
