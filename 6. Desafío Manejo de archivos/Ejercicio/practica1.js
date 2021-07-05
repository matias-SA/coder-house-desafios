const fs = require('fs');



// SOBREESCRIBIR UN ARCHIVO
// fs.writeFileSync('./texto.txt', 'Sobreescribo un archivo');

// AGREGAR CONTENIDO  A UN ARCHIVO
// fs.appendFileSync('./texto.txt', '/nEstoy agregando contenido a un archivo')

// BORRAR UN ARCHIVO
// fs.unlinkSync('./texto.txt');

// MANEJO DE ERRORRES
try {
    // LEER UN ARCHIVO
    const data = fs.readFileSync('./textos.txt', 'utf-8');
    console.log(data);
} catch (error) {
    throw new Error('El archivo no existe')
}
