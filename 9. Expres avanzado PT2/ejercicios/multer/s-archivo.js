const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded())


var customStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})
const upload = multer({ storage: customStorage })

let PORT = 8080


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/upload.html')
})


app.post('/', upload.single('foto'), (req, res) => {
    res.send('Se cargo la foto correctamente')
})



app.get('/mul', (req, res) => {
    res.sendFile(__dirname + '/mul-upload.html')
})

app.post('/mul', upload.array('fotos', 12), (req, res) => {
    res.send('Se cargo la foto correctamente')
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

