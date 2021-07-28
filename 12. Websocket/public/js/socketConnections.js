// inicializamos la conexion
const socket = io.connect();
socket.on('products list', data => {
    console.log("products list", data)
})

const $titleData = document.getElementById('title')
const $priceData = document.getElementById('price')
const $thumbnailData = document.getElementById('thumbnail')
const $addList = document.getElementById('addList')
const $table = document.getElementById('table')

const template = Handlebars.compile(`{{#if isListEmpty}}
<div class="table-responsive">
    <table class="table table-dark">
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Foto</th>
        </tr>
        {{#each products}}
        <tr>
            <td>{{this.title}}</td>
            <td>´$´{{this.price}}</td>
            <td><img width="50" src={{this.thumbnail}} alt="not found"></td>
        </tr>
        {{/each}}
    </table>
</div>
{{else}}
<h3 class="alert alert-warning">No se encontraron productos</h3>
{{/if}}
`);

socket.on('productData', data => {
    $("#table").html(template({ isListEmpty: data.isProduct, products: data.products }))
    // console.log($table.innerHTML.);
})


// Cuando el usuario haga click en el boton se envia el socket con el mensaje del input
const addProduct = () => {
    const data = {
        title: $titleData.value,
        price: $priceData.value,
        thumbnail: $thumbnailData.value
    }
    socket.emit('addNewProduct', data)
}

$addList.addEventListener('click', addProduct)