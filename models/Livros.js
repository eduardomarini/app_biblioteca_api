module.exports = (sequelize, DataTypes) => {
    const Livros = sequilize.define('Livros', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        titulo: DataTypes.STRING,

        id_autor: {
            type: DataTypes.INTEGER,
            references: {
                model: 'autor',
                key: 'id',
            },
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categorias',
                key: 'id',
            },
        },

        ano_publicacao: DataTypes.INTEGER,
        isbn: DataTypes.STRING,
    }, {
        tableName: 'livros',
        timestamps: false,
    })
    return Livros;
};