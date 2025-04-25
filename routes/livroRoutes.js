const express = require ('express'); // importa o módulo 'express', que é o framework usado para criar o servidor e as rotas
const router = express.Router(); // cria um objeto 'router', serve para definir as rotas específicas para esse módulo
const LivroController = require('../controllers/LivroController'); // importa o controller de livros, que contém a lógica para lidar com as requisições

router.get('/', LivroController.listarLivros);
// define a rota GET para listar todos os livros
// http://localhost:3000/livros
router.get('/:id', LivroController.buscarLivroID);
// http://localhost:3000/livros/1
router.post('/', LivroController.criarLivro);
// http://localhost:3000/livros
// O corpo da requisição (req.body) deve conter os dados do novo livro
router.put('/:id', LivroController.atualizarLivro);
// http://localhost:3000/livros/1
router.delete('/:id', LivroController.excluirLivro);
//http://localhost:3000/livros/1


module.exports = router; // exporta esse router para que ele possa ser usado no arquivo principal (app.js)