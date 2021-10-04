const ProductService = require('../services/product')
const productService = new ProductService();

exports.createProduct = async (req, res) => {
    await productService.createProduct(req.body)
    res.status(200).json({
        msg: 'Producto agregado',
        message: req.body
    })
}

exports.selectProducts = async (req, res) => {
    res.send(await productService.selectProducts())
}

exports.selectByID = async (req, res) => {
    const { params: id } = req;
    try {
        // Si ocurre un error en esta operacion, la ejecucion va a ir al catch (no va a llegar a hacer el res.send() del try)
        const product = await productService.selectProductByID(id.id)

        // Si no encuentra el producto hacemos un throw que lo va a agarrar el catch
        if (!product) {
            throw {code: 404}
        }
        res.send({success: true, product})
    } catch (error) {
        /* 
        Cuando buscas un elemento por su id en mongoose y la data ingresada tiene un formato diferente a los id de mongo
        devuelve un error que en su propiedad kind es ObjectId, por ejemplo si en el id pones "hola" te va a devolver ese error

        Si el formato del id es correcto pero no encontro el producto (el error que lanzamos nosotros con el throw)
        tambien devolvemos un 404
          */
        if (error.kind == "ObjectId" || error.code == 404) {
            return res.status(404).send({success: false, msg: "Producto no encontrado."})
        }

        // Si ocurre un error y este error no lo podemos controlar como el anterior, devolvemos un 500
        res.status(500).send({success: false, msg: "Error del servidor."})
    }
}

exports.updateProduct = async (req, res) => {
    const { body, params: id } = req;
    res.send(await productService.updateProduct(id.id, body))
}

exports.deleteProduct = async (req, res) => {
    const { params: id } = req;
    res.send(await productService.deleteProduct(id.id));
}