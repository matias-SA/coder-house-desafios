const express = require('express');
const router = express.Router();
const messageController = require('../controller/message')

router.get('/listar', messageController.selectMessage);

router.post('/agregar', messageController.createMessage)

module.exports = router;
