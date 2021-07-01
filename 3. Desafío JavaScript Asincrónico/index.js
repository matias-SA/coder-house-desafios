
const textos = [
    "Esto es un texto",
    "Puede que sea un texto diferente",
    "Otro texto que no es igual al anterior"
]
const esperar = ret => {for (let i = 0; i < ret * 3e6; i++);}

const timeOut = (palabra, tiempo)=>{
    console.log(palabra)
    esperar((tiempo / 3.3))
}

const leerTextos  = (text, tiempo, totalPalabras, callback)=>{
    const palabras = text.split(" ")
    for (let i = 0; i < palabras.length; i++) {
        timeOut(palabras[i], tiempo)
    }
    totalPalabras += palabras.length;
    setTimeout(callback(false, totalPalabras), tiempo);
}

const operaciones = (textos, tiempo)=>{
    console.log("Leyendo textos")
    leerTextos(textos[0], tiempo, 0, (error, totalPalabras) =>{
        leerTextos(textos[1], tiempo, totalPalabras, (error, totalPalabras) =>{
            leerTextos(textos[2], tiempo,  totalPalabras, (error, totalPalabras) =>{
                console.log("Proceso completo")
                console.log(`Palabras totales: ${totalPalabras}`)
            })
        })
    })
}
operaciones(textos, 1000);