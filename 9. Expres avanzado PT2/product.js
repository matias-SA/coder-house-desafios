class Product {
    constructor(title, price, thumbnail) {
        this.title = title,
            this.price = price,
            this.thumbnail = thumbnail
    }
    productList = [
        {
            "title": "Cosa 1",
            "price": 256.2,
            "thumbnail": "www.olaquease.com",
            "id": 1
        },
        {
            "title": "Cosa 2",
            "price": 256.2,
            "thumbnail": "www.olaquease.com",
            "id": 2
        },
        {
            "title": "Cosa 3",
            "price": 256.2,
            "thumbnail": "www.olaquease.com",
            "id": 3
        },
        {
            "title": "Cosa 4",
            "price": 256.2,
            "thumbnail": "www.olaquease.com",
            "id": 4
        },
        {
            "title": "Cosa 5",
            "price": 256.2,
            "thumbnail": "www.olaquease.com",
            "id": 5
        }
    ];
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
    postProduct(idData, dataProduct) {
        let id = parseInt(idData)
        let indexProduct = this.productList.findIndex(product => product.id === id);
        let { title, price, thumbnail } = dataProduct
        this.productList.splice(indexProduct, 1, { title, price, thumbnail, id })
        return { title, price, thumbnail, id }
    }

    deleteProduct(idData) {
        let id = parseInt(idData)
        let productRemoved = this.getProduct(id);
        let indexProduct = this.productList.findIndex(product => product.id === id);
        console.log(indexProduct);
        this.productList.splice(indexProduct, 1)
        return productRemoved
    }
}
module.exports = new Product;