const {Livro} = require('../models');

const LivroController = {
    async listarLivros(req, res) {
        try {
            const livros = await Livro.findAll();
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
            const novoLivro = await Livro.create({titulo, id_autor, id_categoria, ano_publicacao, isbn});
            res.status(201).json(novoLivro);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar livro'});
        }
    },

    async atualizarLivro(req, res) {
        try {
            const {id} = req.params
            const {titulo, id_autor, id_categoria, ano_publicacao, isbn} = req.body;
            const livro = await Livro.findByPk(id);

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
            const livro = await Livro.findByPk(id);

            if (!livro) {
                return res.status(404).json({error: 'Livro não encontrado'})
            }

            await livro.destroy();
            res.json({message: 'Livro excluído com sucesso'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir livro'})
        }
    },

    async buscarLivroIDAutor(req, res) {
        try {
            const {id_autor} = req.params;
            const livros = await Livro.findAll({where: {id_autor}});

            if (livros.length == 0) {
                return res.status(404).json({error: 'Nenhum livro encontrado para este autor'})
            }
            res.json(livros);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar livros do autor'})
        }
    },

    async buscarLivroIDCategoria(req, res) {
        try {
            const {id_categoria} = req.params;
            const livros = await Livro.findAll({where: {id_categoria}})

            if(livros.lenght == 0) {
                return res.status(404).json({error: 'Nenhum livro encontrado para essa categoria'})
            }
            res.jsont(livros)
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar livro por categoria'})
        }
    }
};

module.exports = LivroController;
