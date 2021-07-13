class Product {
    constructor(title, price, thumbnail, id) {
        this.title = title,
            this.price = price,
            this.thumbnail = thumbnail,
            this.id = id
    }
    productList = [];
    newProduct(dataProduct) {
        let productsLength = this.productList.length
        let newProduct = {
            title: dataProduct.title,
            price: dataProduct.price,
            thumbnail: dataProduct.thumbnail,
            id: productsLength + 1
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
        let productsLength = this.productList.length;
        if (id > productsLength) {
            return { error: 'producto no encontrado' }
        }
        return this.productList[id - 1]

    }
}
module.exports = new Product;