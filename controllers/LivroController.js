const {Livros} = require('../models');

const LivroController = {
    async listarLivros(req, res) {
        try {
            const livros = await Livros.findAll();
            res.json(livros);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar livros'})
        }
    },

    async buscarLivroID(req, res) {
        try {
            const {id} = req.params;
            const livro = await Livros.findByPk(id);
            if(!livro) {
                return res.status(404).json({error: 'Livro não encontrado'});
            }
            res.json(livro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar livro'})
        }
    },

    async criarLivro(req, res) {
        try {
            const {titulo, id_autor, id_categoria, ano_publicacao, isbn} = req.body
            const novoLivro = await Livros.create({titulo, id_autor, id_categoria, ano_publicacao, isbn});
            res.status(201).json(novoLivro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar livro'});
        }
    },

    async atualizarLivro(req, res) {
        try {
            const {id} = req.params
            const {titulo, id_autor, id_categoria, ano_publicacao, isbn} = req.body;
            const livro = await Livros.findByPk(id);

            if (!livro) {
                return res.status(404).json({error: 'Livro não encontrado'});
            }

            await livro.update({titulo, id_autor, id_categoria, ano_publicacao, isbn});
            res.json(livro)
        } catch (error) {
            res.status(500).json({error: 'Erro ao atualizar livro'})
        }
    },

    async excluirLivro(req, res) {
        try {
            const {id} = req.params;
            const livro = await Livros.findByPk(id);

            if (!livro) {
                return res.status(404).json({error: 'Livro não encontrado'})
            }

            await livro.destroy();
            res.json({message: 'Erro ao excluir autor'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir livro'})
        }
    },
};

module.exports = LivroController;
