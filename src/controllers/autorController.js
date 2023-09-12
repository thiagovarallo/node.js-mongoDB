import Autor from '../models/Autor.js';

class AutorController {

    static async listarAutores (req, res) {
        try {
            const listAutor = await Autor.find();
            res.status(200).json(listAutor)
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

}