const express = require ('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController');

router.get('/', AutorController.listarAutores);
router.get('/:id', AutorController.buscarAutorID);
router.post('/', AutorController.criarAutor);
router.put('/:id', AutorController.atualizarAutor);
router.delete('/:id', AutorController.excluirAutor);

module.exports = router;


