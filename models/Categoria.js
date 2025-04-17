module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        deccricao: DataTypes.STRING
    }, {
        tableName: 'categorias',
        timestamps: false, // Desativa os campos createdAt e updateAt
    });
    return Categoria;
} 