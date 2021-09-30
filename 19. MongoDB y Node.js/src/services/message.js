const messageModel = require('../dao/models/message')

module.exports = class MessageService {
    async createMessage(messageData) {
        const { message, email, shippingDate } = messageData;
        if (!message || !email) {
            throw "El email y mensaje son datos requeridos"
        }
        messageData.shippingDate = Date.now()
        const created = await messageModel.create(messageData);
        return created[0];
    }

    async selectMessage() {
        return messageModel.find();
    }
}
