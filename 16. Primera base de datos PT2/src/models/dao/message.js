const db = require('../db/db');

module.exports = class messageDAO {
    async sendMessage({ message, email, date }) {
        try {
            return db("messages")
                .insert({
                    message,
                    email,
                    date
                })
        } catch (error) {
            console.log(error);
        }
    }

    async selectMessages() {
        try {
            return db("messages").select()
        } catch (error) {
            console.log(error);
        }
    }
}
