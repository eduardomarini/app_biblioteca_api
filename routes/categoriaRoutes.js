const express = require('express')
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');

router.get('/', CategoriaController.listarCategorias);
router.get('/:id', CategoriaController.buscarCategoriaID);
router.post('/', CategoriaController.criarCategoria);
router.put('/:id', CategoriaController.atualizarCategoria);
router.delete('/:id', CategoriaController.excluirCategoria);

module.exports = router;