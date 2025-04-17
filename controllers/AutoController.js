const {Autor} = require('../models'); // importa o model Autor da pasta models

const AutorController = { // cria um objeto chamado AutorController, onde vamos guardar todas as funções(listar, buscar, criar...)
    async listarAutores(req, res) {
        try {
            const autores = await Autor.findAll(); // busca todos os registros da tabela autores
            res.json(autores);
        }catch (error) {
            res.status(500).json({error: 'Erro ao buscar autores' })
        }
    },

    async buscarAutorID(req, res) {
        try {
            const {id} = req.params; // acessa os parÂmetros da URL(/autores/:id)
            const autor = await Autor.findByPk(id); // busca o autor com a chave primária
            if (!autor) {
                return res.status(404).json({error: 'Autor não encontrado'});
            }
            res.json(autor);
        } catch (error) {
        res.status(500).json({error: 'Erro ao buscar autor'});
        }
    },

    async criarAutor(req, res) {
        try {
            const {nome, nacionalidade, data_nascimento} = req.body; // contém os dados enviados na requisição POST
            const novoAutor = await Autor.create({nome, nacionalidade, data_nascimento}); // cria um novo autor no banco
            res.status(201).json(novoAutor); // autor criado com sucesso
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar autor'});
        }
    },

    async atualizarAutor(req, res) { // função assíncrona, que recebe os parâmetros req -> requisição, res -> resposta
        try {
            const {id} = req.params; // extrai o parâmetro id da URL -> id será usado para procurar o autor no banco
            const{nome, nacionalidade, data_nascimento} = req.body; // extrai os dados enviados no corpo da requisição JSON
            const autor = await Autor.findByPk(id); // buscar autor pela ID no banco
        
        if(!autor) {
            return res.status(404).json({error: 'Autor não encontrado'});
        } 
        await autor.update({nome, nacionalidade, data_nascimento}); // se o autor for encontrado, faz o update no banco de dados, método update() modifica os dados direto no banco
        res.json(autor); // envia como resposta o autor atualizado em formato json
        } catch (error) { // se ocorre qualquer erro inesperado, responde com o status 500
            res.status(500).json({error: 'Erro ao atualizar autor' })
        }
    },

    async excluirAutor(req, res) {
        try {
            const {id} = req.params;
            const autor = await Autor.findByPk(id);

            if(!autor) {
                return res.status(404).json({error: 'Autor não encontrado'});
            }

            await autor.destroy(); // deleta o autor do banco de dados
            res.json({message: 'Erro ao excluir autor'});
        } catch (error) {
            res.status(500).json({error: 'Erro ao excluir autor'});
        }
    },
};

module.exports = AutorController;