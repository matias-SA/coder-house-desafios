const fs = require('fs');


try {
    const leerEscribir = async () => {
        let data = await fs.promises.readFile('./info.txt', 'utf-8');
        info = JSON.parse(data);
        info.contenidoObjeto.author = "Coderhouse";
        info.contenidoStr = JSON.stringify(info.contenidoObjeto);

        await fs.promises.writeFile('./package.json.coder', JSON.stringify(info, null, '\t'))
    }
    leerEscribir()
} catch (error) {
    console.log(error);
}


