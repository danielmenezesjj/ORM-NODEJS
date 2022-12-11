const {Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router();

router.get('/pessoas', PessoaController.listaTodasAsPessoas)


module.exports = router