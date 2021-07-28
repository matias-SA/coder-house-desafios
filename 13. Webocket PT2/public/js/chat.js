
function render(data) {
    let html = data.map((elem, index) => {
        return (`<div>
        <strong style="color: blue">${elem.email}</strong> <spam style="color: brown">[${elem.date}]</spam>: <em style="color: green">${elem.messageData}</em>
    </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
socket.on('messages', data => {
    { render(data) }
});

const $email = document.getElementById('email');
const $message = document.getElementById('mensaje')

function addMessage() {
    let message = {
        email: $email.value,
        messageData: $message.value
    }
    socket.emit('newMessage', message)
    $message.value = "";
}
