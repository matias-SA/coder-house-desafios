const express = require("express")

const app = express()
const routerMascotas = express.Router()
const routerPersonas = express.Router()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/public'))

let PORT = 8080

var personas = []
var mascotas = []

// Mascotas
routerMascotas.get('/listar', (req, res) => {
    res.send(mascotas)
})
routerMascotas.post('/guardar', (req, res) => {
    mascotas.push(req.body)
    res.json(mascotas)
})

// Personas
routerPersonas.get('/listar', (req, res) => {
    res.send(personas)
})

routerPersonas.post('/guardar', (req, res) => {
    personas.push(req.body)
    res.json(personas)
})


app.use('/personas', routerPersonas)
app.use('/mascotas', routerMascotas)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

