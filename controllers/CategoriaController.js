const {Categoria} = require('../models');

const CategoriaController = {

    async listarCategorias(req, res) {
        try {
            const categorias = await Categoria.findAll();
            res.json(categorias)
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar categorias'})
        }
    },

    async buscarCategoriaID(req, res) {
        try {
            const {id} = req.params; 
            const categoria = await Categoria.findByPk(id); 
            if (!categoria) {
                return res.status(404).json({error: 'Categoria não encontrada'});
            }
            res.json(categoria);
        } catch (error) {
        res.status(500).json({error: 'Erro ao buscar categoria'});
        }
    },

    async criarCategoria(req, res) {
        try {
            const {descricao} = req.body; 
            const novaCategoria = await Categoria.create({descricao}); 
            res.status(201).json(novaCategoria); 
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar nova categoria'});
        }
    },

    async atualizarCategoria(req, res) { 
        try {
            const {id} = req.params; 
            const{descricao} = req.body; 
            const categoria = await Categoria.findByPk(id); 
        
            if(!categoria) {
                return res.status(404).json({error: 'Categoria não encontrada'});
            } 

            await categoria.update({descricao}); 
            res.json(categoria); 
            } catch (error) { 
                res.status(500).json({error: 'Erro ao atualizar categoria' })
            }
        },

        async excluirCategoria(req, res) {
            try {
                const {id} = req.params;
                const categoria = await Categoria.findByPk(id);
    
                if(!categoria) {
                    return res.status(404).json({error: 'Categoria não encontrada'});
                }
    
                await categoria.destroy(); 
                res.json({message: 'Categoria excluída com sucesso'});
            } catch (error) {
                res.status(500).json({error: 'Erro ao excluir categoria'});
            }
        },
    };

module.exports = CategoriaController