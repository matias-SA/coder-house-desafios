const ProductDAO = require('../models/dao/product');

module.exports = class ProductService {
    async createProduct(product) {
        const productDAO = new ProductDAO();
        return productDAO.createProduct(product)
    }

    async selectProducts() {
        const productDAO = new ProductDAO();
        return productDAO.selectProducts()
    }

    async selectProductByID(id) {
        const productDAO = new ProductDAO();
        return productDAO.selectProductByID(id)
    }

    async updateProduct(id, productUpd) {
        const productDAO = new ProductDAO();
        await productDAO.updateProduct(id, productUpd);
        return this.selectProductByID(id)
    }

    async deleteProduct(id) {
        const productDAO = new ProductDAO();
        const productDeleted = await this.selectProductByID(id)
        await productDAO.deleteProduct(id)
        return productDeleted
    }

    async isListEmpty() {
        const products = await this.selectProducts()
        if (products.length === 0) {
            return true
        }
        return false
    }
}