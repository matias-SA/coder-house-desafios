const express = require("express")
const bodyParser = require("body-parser")
const app = express()

let PORT = 8080

let personas = []
const routerPersonas = express.Router()

app.use(bodyParser.json())

// MIDLEWARES
const middlewareGlobal = (req, res, next) => {
    console.log("Global Middleware: Paso por el global")
    next()
}

const middlewarePersonas = (req, res, next) => {
    console.log('Router middleware: Se accedio al recurso personas')
    next()
    console.log("Router midleware: marcha atras")
}


// RUTAS

// Rutas / Endpoints de recurso Persona
routerPersonas.use(middlewarePersonas)

routerPersonas.get('/', (req, res) => {
    res.send(personas)
})

routerPersonas.post('/', (req, res) => {
    console.table(req.body)
    personas.push(req.body)
    res.send(personas)
})

routerPersonas.get('/:id', (req, res) => {
    const persona = personas.filter((persona) => persona.id == req.params.id)
    res.status(404).send(persona)
})

routerPersonas.put('/:id', (req, res) => {
    const persona = personas.filter((persona) => persona.id == req.params.id)
    for (let i=0; i < personas.length; i++) {
        console.log(`for ${i}`)
        if (personas[i].id == req.params.id) {
            console.log(req.body)
            personas[i] = req.body
            console.log(personas)
        }
    }
    res.send(personas)
})


routerPersonas.delete('/:id', (req, res) => {
    personas = personas.filter((persona) => persona.id != req.params.id)
    res.send(personas)

})


// Rutas GLOBALES
app.use(middlewareGlobal)
app.get('/global', (req ,res) => {
    res.send('controller global')
})


app.use('/personas', routerPersonas)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

