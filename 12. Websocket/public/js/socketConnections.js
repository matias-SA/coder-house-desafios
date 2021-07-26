// inicializamos la conexion
const socket = io.connect();
socket.on('products list', data => {
    console.log("products list", data)
})
const $titleData = document.getElementById('title')
const $priceData = document.getElementById('price')
const $thumbnailData = document.getElementById('thumbnail')
const $addList = document.getElementById('addList')

// Cuando el usuario haga click en el boton se envia el socket con el mensaje del input
const sendNotification = () => {
    const data = {
        title: $titleData.value,
        price: $priceData.value,
        thumbnail: $thumbnailData.value
    }
    socket.emit('notification', data)
}

$addList.addEventListener('click', sendNotification)