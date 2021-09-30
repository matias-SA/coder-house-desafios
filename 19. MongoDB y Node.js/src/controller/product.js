const ProductService = require('../services/product')
const productService = new ProductService();

exports.createProduct = async (req, res) => {
    await productService.createProduct(req.body)
    res.status(200).json({
        msg: 'Producto agregado',
        message: req.body
    })
}

exports.selectProducts = async (req, res) => {
    res.send(await productService.selectProducts())
}

exports.selectByID = async (req, res) => {
    const { params: id } = req;
    res.send(await productService.selectProductByID(id.id))
}

exports.updateProduct = async (req, res) => {
    const { body, params: id } = req;
    res.send(await productService.updateProduct(id.id, body))
}

exports.deleteProduct = async (req, res) => {
    const { params: id } = req;
    res.send(await productService.deleteProduct(id.id));
}