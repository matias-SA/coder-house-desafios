const express = require("express")

const app = express()

let PORT = 8080

var visitas = 0

const middlewareUno = (req, res, next) => {
    req.aporte1 = "Usuario pepito"
    next()
}

const middlewareDos = (req, res, next) => {
    console.log(`Entra atras middleware 2`)
    visitas++
    req.visitas = visitas
    next()
}

app.get('/', middlewareUno, middlewareDos, (req, res) => {
    console.log(`El middleware uno escribio ${req.aporte1}`)
    console.log(`El middleware dos escribio visitas = ${req.visitas}`)
    res.send()
})

app.get('/visitas', middlewareDos, (req, res) => {
    console.log(`El middleware uno escribio ${req.aporte1}`)
    console.log(`El middleware dos escribio visitas = ${req.visitas}`)
    res.send()
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

