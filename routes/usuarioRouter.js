const express = require ('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuariosController');

router.get('/', UsuarioController.listarUsuarios);
router.get('/:id', UsuarioController.buscarUsuarioID);
router.post('/', UsuarioController.criarUsuario);
router.put('/:id', UsuarioController.atualizarUsuario);
router.delete('/:id', UsuarioController.excluirUsuario);

module.exports = router;



