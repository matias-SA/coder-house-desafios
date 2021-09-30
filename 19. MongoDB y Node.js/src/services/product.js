const productModel = require('../dao/models/product')

module.exports = class ProductService {
    async createProduct(productData) {
        const { title, price, description, code, thumbnail, stock } = productData;
        if (!title || !price || !description || !code || !thumbnail || !stock) {
            throw "Necesitamos todos los datos"
        }
        productData.timestamp = Date.now()
        const created = await productModel.create(productData);
        return created[0];
    }

    async selectProducts() {
        return productModel.find();
    }

    async selectProductByID(id) {
        return productModel.findById(id);
    }

    async updateProduct(id, productUpdate) {
        const userToUpdate = await productModel.findByIdAndUpdate(id, productUpdate, {
            new: true
        })
        return userToUpdate;
    }

    async deleteProduct(id) {
        try {
            return productModel.findByIdAndDelete(id)
        } catch (error) {
            return 'No se pudo borrar el producto'
        }
    }
}