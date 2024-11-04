import {Propiedad,  Categoria} from '../models/index.js'

//devuelve una respuesta json
const propiedades = async(req, res) => {

    const propiedades = await Propiedad.findAll({
        include: [
            {model: Categoria, as: 'categoria'},
            //{model: Categoria, as: 'categoria'},
        ]
    })

    res.json(propiedades)
}
export {
    propiedades
}
