const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let PORT = 8080

var mensajes = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


// enviar todos : Enviar todos los mensajes
// enviar nuevo : Llega un mensaje nuevo y quiero compartirlo

io.on('connection', (socket) => {
  console.log(`El usuario ${socket.id} se conecto`)
  
  // Enviar todos los mensajes un cliente se conecta
  //socket.emit(`allMessages`, { mensajes: mensajes})
  socket.emit(`allMessages`, { mensajes: mensajes})

  socket.on('newMessage', (msg) => {
    let theMessage = {
      socketId: socket.id,
      mensaje: msg
    }
    mensajes.push(theMessage)
    io.emit('receive newMessage', [theMessage])
  })

  socket.on('disconnect', () => {
    console.log(`El usuario ${socket.id} se desconecto`);
  });

})


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))