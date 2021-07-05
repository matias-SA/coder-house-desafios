const fs = require('fs')

class Archivo {
    constructor(nameArch) {
        this.nameArch = nameArch;
    }
    borrar = async () => {
        try {
            await fs.promises.unlink(`./${this.nameArch}`)
        } catch (error) {
            console.log('error al eliminar el archivo', error);
        }
    }
    guardar = async (title, price, thumbnail) => {
        try {
            let data = await fs.promises.readFile(`./${this.nameArch}`, 'utf-8');
            let info = JSON.parse(data);
            let id = info.length + 1;
            let product = {
                title: title,
                price: price,
                thumbnail: thumbnail,
                id: id
            }
            info.push(product);
            try {
                await fs.promises.writeFile(`./${this.nameArch}`, JSON.stringify(info, null, '\t'))
            } catch (error) {
                console.error("error de guardado en el archivo", error);
            }
        } catch (error) {
            console.log(error);
        }

    }
    leer = async () => {
        try {
            const data = await fs.promises.readFile(`./${this.nameArch}`, 'utf-8');
            console.log(data);
        } catch {
            return [];
        }
    }
}

let arch = new Archivo('productos.txt');

arch.guardar('Plasticola', 20.00, 'https://docs.google.com/presentation/d/1Q1JQ_rnAnaa-hjeZgSrODZiUeqSvaJ2I_RFptPp1CY0/edit#slide=id.gb4c7753833_1_119');

arch.guardar('Jorgito', 20.58, 'https://docs.google.com/presentation/d/1Q1JQ_rnAnaa-hjeZgSrODZiUeqSvaJ2I_RFptPp1CY0/edit#slide=id.gb4c7753833_1_119');

arch.leer()
