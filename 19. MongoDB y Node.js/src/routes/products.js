const express = require('express');
const router = express.Router();
const productController = require('../controller/product')

router.get('/listar', productController.selectProducts);

router.get('/listar/:id', productController.selectByID);

router.post('/agregar', productController.createProduct)

router.put('/actualizar/:id', productController.updateProduct)

router.delete('/borrar/:id', productController.deleteProduct)

module.exports = router;