const {Emprestimo} = require('../models');

const EmprestimoController = {
    async listarEmprestimo(req, res) {
        try {
            const emprestimos = await Emprestimo.findAll();
            res.json(emprestimos);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar emprestimos'})
        }
    },

    async buscarEmprestimoID(req, res) {
        try {
            const {id} = req.params;
            const emprestimo = await Emprestimo.findByPk(id);
            if(!emprestimo) {
                return res.status(404).json({error: 'Empréstimo não encontrado'});
            }
            res.json(emprestimo);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar empréstimo'})
        }
    },

    async criarEmprestimo(req, res) {
        try {
            const {id_usuario, id_livro, data_emprestimo, data_devolucao} = req.body
            const novoEmprestimo = await Emprestimo.create({id_usuario, id_livro, data_emprestimo, data_devolucao});
            res.status(201).json(novoEmprestimo);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar empréstimo'});
        }
    },

    async atualizarEmprestimo(req, res) {
        try {
            const {id} = req.params
            const {id_usuario, id_livro, data_emprestimo, data_devolucao} = req.body;
            const emprestimo = await Emprestimo.findByPk(id);

            if (!emprestimo) {
                return res.status(404).json({error: 'Emprestimo não encontrado'});
            }

            await emprestimo.update({id_usuario, id_livro, data_emprestimo, data_devolucao});
            res.json(emprestimo)
        } catch (error) {
            res.status(500).json({error: 'Erro ao atualizar empréstimo'})
        }
    },

    async excluirEmprestimo(req, res) {
        try {
            const {id} = req.params;
            const emprestimo = await Emprestimo.findByPk(id);

            if (!emprestimo) {
                return res.status(404).json({error: 'Empréstimo não encontrado'})
            }

            await emprestimo.destroy();
            res.json({message: 'Empréstimo excluído com sucesso'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir empréstimo'})
        }
    },

    async buscarEmprestimoIDUsuario(req, res) {
        try {
            const {id_usuario} = req.params;
            const emprestimos = await Emprestimo.findAll({where: {id_usuario}});

            if (emprestimos.length == 0) {
                return res.status(404).json({error: 'Nenhum empréstimo encontrado para este usuário'})
            }
            res.json(emprestimos);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar empréstimos por usuário'})
        }
    },

    async buscarEmprestimoIDLivro(req, res) {
        try {
            const {id_livro} = req.params;
            const emprestimos = await Emprestimo.findAll({where: {id_livro}});

            if (emprestimos.length == 0) {
                return res.status(404).json({error: 'Nenhum empréstimo encontrado para este livro'})
            }
            res.json(emprestimos);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar empréstimos para esse livro'})
        }
    },
};

module.exports = EmprestimoController;