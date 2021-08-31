const db = require('../db/db');

module.exports = class ProductDAO {
    async createProduct({ title, price, description, thumbnail }) {
        await db("products").
            insert({
                title,
                price,
                thumbnail
            })
    }

    async selectProducts() {
        try {
            return db("products").select()
        } catch (error) {
            console.log(error);
        }
    }

    async selectProductByID(id) {
        try {
            return db("products").select().where({ id: id })
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(id, productUpd) {
        try {
            return db("products").where({ id: id })
                .update({
                    title: productUpd.title,
                    price: productUpd.price,
                    thumbnail: productUpd.thumbnail
                })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id) {
        try {
            return db("products").where({ id: id })
                .del()
        } catch (error) {
            console.log(error);
        }
    }
}