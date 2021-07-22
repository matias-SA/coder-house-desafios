// Libraries
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import {Server} from 'socket.io';

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new Server(server);

const PUERTO = process.env.PORT || 8000;

server.listen(PUERTO, () => {
    console.log(`Servidor iniciado en el puerto: ${server.address().port}`);
});
server.on('error', error => console.log(`Error al iniciar el servidor: ${error}`));

io.on('chat', (socket) => {
    console.log('llego el msj');
});

io.on('alert', (socket) => {
    console.log('Alerta socket');
});

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`);
});

app.get('/enviar', (req, res) => {
    /* Emitimos el evento desde backend */
    io.emit('msg-new', 'mandamos un nuevo msg');
    res.send('success');
});

io.on('connection', (socket) => {
    /* Recibimos en el back */
    socket.on('msg-new', (data) => {
        console.log(data);
    });
});