const MessageService = require('../services/message')
const messageService = new MessageService();

exports.createMessage = async (req, res) => {
    await messageService.createMessage(req.body)
    res.status(200).json({
        msg: 'Mensaje enviado',
        message: req.body
    })
}

exports.selectMessage = async (req, res, next) => {
    res.send(await messageService.selectMessage())
}