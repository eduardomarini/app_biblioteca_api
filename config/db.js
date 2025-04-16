const { Sequilize} = require('sequelize'); // classe responsável por criar a conexão com o banco de dados

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // desativa os logs SQL no terminal
});
// Verifica se a conexão com o banco de dados foi estabelecida com sucesso

module.exports = sequelize; // exporta a conexão para ser utilizada em outros arquivos