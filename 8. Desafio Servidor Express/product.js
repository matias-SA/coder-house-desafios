class Product {
    constructor(title, price, thumbnail) {
        this.title = title,
            this.price = price,
            this.thumbnail = thumbnail
    }
    productList = [];
    id = 0;

    newProduct(dataProduct) {
        let productsLength = this.productList.length
        let newProduct = {
            title: dataProduct.title,
            price: dataProduct.price,
            thumbnail: dataProduct.thumbnail,
            id: this.id += 1
        }
        this.productList.push(newProduct);
        return newProduct
    }

    get getProductList() {
        let productsLength = this.productList.length
        if (productsLength == 0) {
            return { error: 'no hay productos cargados' }
        }
        return this.productList
    }
    getProduct(id) {
        let productFound = this.productList.find(product => product.id == id)
        if (productFound == undefined) {
            return { error: 'producto no encontrado' }
        }
        return productFound
    }
}
module.exports = new Product;