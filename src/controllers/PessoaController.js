const database = require('../models')


class PessoaController{
   static async listaTodasAsPessoas(req, res){
    try{
        const todasAsPessoas = await database.Pessoas.findAll(); //esperando eu ir até o banco pegar as pessoas e voltar
        return res.status(200).json(todasAsPessoas)

    }catch(error){
        return res.status(500).json(error.message)
    }

    }
}


module.exports = PessoaController;