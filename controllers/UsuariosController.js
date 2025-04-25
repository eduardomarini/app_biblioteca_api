const {Usuario} = require('../models');

const UsuarioController = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll({order: [['nome', 'ASC']]}); // lista por ordem alfabética
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar usuários'})
        }
    },

    async buscarUsuarioID(req, res) {
        try {
            const {id} = req.params;
            const usuario = await Usuario.findByPk(id);
            if(!usuario) {
                return res.status(404).json({error: 'Usuário não encontrado'});
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).json({error: 'Erro ao buscar usuário'})
        }
    },

    async criarUsuario(req, res) {
        try {
            const {nome, email, telefone, data_registro} = req.body
            const novoUsuario = await Usuario.create({nome, email, telefone, data_registro});
            res.status(201).json(novoUsuario);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar usuário'});
        }
    },

    async atualizarUsuario(req, res) {
        try {
            const {id} = req.params
            const {nome, email, telefone, data_registro} = req.body;
            const usuario = await Usuario.findByPk(id);

            if (!usuario) {
                return res.status(404).json({error: 'Usuário não encontrado'});
            }

            await usuario.update({nome, email, telefone, data_registro});
            res.json(usuario)
        } catch (error) {
            res.status(500).json({error: 'Erro ao atualizar usuário'})
        }
    },

    async excluirUsuario(req, res) {
        try {
            const {id} = req.params;
            const usuario = await Usuario.findByPk(id);

            if (!usuario) {
                return res.status(404).json({error: 'Usuário não encontrado'})
            }

            await usuario.destroy();
            res.json({message: 'Usuário excluído com sucesso'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir usuário'})
        }
    },
}

module.exports = UsuarioController;
