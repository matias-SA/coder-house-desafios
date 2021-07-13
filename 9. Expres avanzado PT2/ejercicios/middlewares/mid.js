const express = require("express")

const app = express()

const routerUsuarios = express.Router()

let PORT = 8080


const cargarUsuarioMiddleware = (req, res, next) => {
    req.username = "randomuser"
    next()
}

const soloAdminMiddleware = (req, res, next) => {
    if (req.username == "admin") {
        next()
    } else {
        throw("Acceso denegado")
        res.send()
    }
}


app.get('/', (req, res) => {
    if (req.username == "admin") {
        console.log("Puede hacer x")
    }
    res.send('Request terminado')
})

app.get('/otraurl', (req, res) => {
    res.send("global")
})


routerUsuarios.get('/listar', soloAdminMiddleware, (req, res) => {
    res.send("listar usuarios")
})

routerUsuarios.delete('/borrar', soloAdminMiddleware, (req, res) => {
    res.send("borrar usuarios")
})


app.use('/usuarios', routerUsuarios)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

