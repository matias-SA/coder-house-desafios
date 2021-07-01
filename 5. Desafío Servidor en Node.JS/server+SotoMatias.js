const http = require('http');

const server = http.createServer((req, res) => {
    let numberId = Math.floor(Math.random() * (10 - 1)) + 1;
    let price = (Math.random() * (9999.99)).toFixed(2);
    object = {
        id: numberId,
        title: "Producto " + numberId,
        price: price,
        thumbnail: "Foto " + numberId
    }

    res.end(`Objeto: ${JSON.stringify(object)}`)
});

server.listen(3000, function () {
    console.log(`Servidor escuchando en http://localhost:${this.address().port}`);
})