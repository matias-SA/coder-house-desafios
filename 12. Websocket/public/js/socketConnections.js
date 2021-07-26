// inicializamos la conexion
const socket = io.connect();

// recibo desde el servidor un mensaje
socket.on('mi mensaje', data => {
    alert(data);
    socket.emit('notificacion', 'mensaje recibido exitosamente en el cliente');
});
socket.on('response', data => {
    console.log('El servidor respondio el saludo')
    console.log(data)
})

const $notification = document.getElementById('notification')
const $sendNotification = document.getElementById('send-notification')

// Cuando el usuario haga click en el boton se envia el socket con el mensaje del input
const sendNotification = () => {
    const message = $notification.value;

    socket.emit('notification', {message})
}

$sendNotification.addEventListener('click', sendNotification)