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
  
  // Enviar todos los mensajes un cliente se conecta
  socket.emit(`todos-los-mensajes`, { mensajes: mensajes})

  socket.on('nuevo-mensaje', (nuevoMensaje) => {

    let elNuevoMensaje = {
      mensaje: nuevoMensaje.mensaje,
      username: nuevoMensaje.username
    }
    mensajes.push(elNuevoMensaje)
    io.sockets.emit('recibir nuevoMensaje', [elNuevoMensaje])
  })

})


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))