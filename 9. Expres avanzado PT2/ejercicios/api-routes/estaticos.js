const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

let PORT = 8080

///prefijovirtual/unarchivo/dado.png
// unarchivo/dado.png

console.log(__dirname + '/misarchivos')
console.log(__dirname + '/fotos')

app.use('/misarchivos', express.static(__dirname + '/misarchivos'))
app.use('/fotos', express.static(__dirname + '/fotos'))


app.use((err, req, res, next) => {
    console.log(`Courrio el siguiente error ${err}`)
    next()
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

