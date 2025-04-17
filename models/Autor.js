module.exports = (sequelize, DataTypes) => { // exporta a conexão para que possamos importar em outros arquivos do projeto
    const Autor = sequelize.define('Autor', { // cria o model chamado 'Autor', irá mapear a tabela 'autores'
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        nacionalidade: DataTypes.STRING,
        data_nascimento: DataTypes.DATEONLY,
    }, {
        tableName: 'autores',
        timestamps: false, // Desativa os campos createdAt e updatedAt
    });
    return Autor;
};