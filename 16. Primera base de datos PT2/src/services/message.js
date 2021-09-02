const MesssageDAO = require('../models/dao/message')

module.exports = class MessageService {
    async sendMessage(message) {
        const messageDao = new MesssageDAO();
        return messageDao.sendMessage(message)
    }

    async selectMessage() {
        const messageDAO = new MesssageDAO();
        return messageDAO.selectMessages();
    }
}
