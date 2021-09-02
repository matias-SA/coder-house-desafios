const express = require('express');
const router = express.Router();
const MessageService = require('../services/message')

router.get('/listar', async (req, res) => {
    const message = new MessageService();
    res.send(await message.selectMessage())
});

router.post('/agregar', async (req, res) => {
    const message = new MessageService();
    await message.sendMessage(req.body)
    res.status(200).json({
        msg: 'Message send',
        ...req.body
    })
})

module.exports = router;
