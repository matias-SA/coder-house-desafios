const express = require("express")
const multer = require("multer")


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
            cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
    }
})

//const upload = multer({ dest: 'uploads/'})
const upload = multer({storage: storage})

let PORT = 8080
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/multiple.html')
})

app.post('/', upload.single('foto'), (req, res, next) => {
    console.table(req.file)
    res.send(`La foto ${JSON.stringify(req.file.originalname)} fue subida con exito!`)
})

app.get('/mul', (req, res) => {
    res.sendFile(__dirname + '/mul-upload.html')
})

app.post('/mul', upload.array('fotos'), (req, res, next) => {
    res.send(`La fotos se subieron con exito!`)
})
app.listen(PORT, () => console.log(`El server esta corriendo en ${PORT}`))
