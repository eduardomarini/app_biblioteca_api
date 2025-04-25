const express = require('express')
const router = express.Router();
const EmprestimoController = require('../controllers/EmprestimoController');

router.get('/', EmprestimoController.listarEmprestimo);
router.get('/:id', EmprestimoController.buscarEmprestimoID);
router.post('/', EmprestimoController.criarEmprestimo);
router.post('/:id', EmprestimoController.buscarEmprestimoIDUsuario)
router.post('/:id', EmprestimoController.buscarEmprestimoIDLivro)
router.put('/:id', EmprestimoController.atualizarEmprestimo);
router.delete('/:id', EmprestimoController.excluirEmprestimo);


module.exports = router;