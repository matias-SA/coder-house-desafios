const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

let PORT = 8080

app.use('/', express.static(__dirname + '/public'))


// API
let routerPersonas = express.Router()
let routerMascotas = express.Router()

let mascotas = [] 
let personas = []

// personas
routerPersonas.get('/listar', (req, res) => {
    res.json(personas)
})

routerPersonas.post('/guardar', (req, res) => {
    personas.push(req.body)
    res.json(personas)
})

// mascotas
routerMascotas.get('/listar', (req, res) => {
    res.json(mascotas)
})
routerMascotas.post('/guardar', (req, res) => {
    mascotas.push(req.body)
    res.json(mascotas)
})


app.use('/personas', routerPersonas)
app.use('/mascotas', routerMascotas)
app.use((err, req, res, next) => {
    console.log(`Courrio el siguiente error ${err}`)
    next()
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

