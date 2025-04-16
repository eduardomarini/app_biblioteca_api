module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('Autor', {
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
}