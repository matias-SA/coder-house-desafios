const express = require('express');
const router = express.Router();
const ProductService = require('../services/products')

router.get('/listar', async (req, res) => {
    const product = new ProductService();
    res.send(await product.selectProducts())
});

router.get('/listar/:id', async (req, res) => {
    const product = new ProductService();
    res.send(await product.selectProductByID(req.params.id))
});

router.post('/agregar', async (req, res) => {
    const product = new ProductService();
    await product.createProduct(req.body)
    console.log(req.body);
    res.status(200).json({
        msg: 'Product Created',
        ...req.body
    })
})

router.put('/actualizar/:id', async (req, res) => {
    const product = new ProductService();
    res.send(await product.updateProduct(req.params.id, req.body))
})

router.delete('/borrar/:id', async (req, res) => {
    const product = new ProductService();
    res.send(await product.deleteProduct(req.params.id))
})

module.exports = router;