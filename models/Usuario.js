module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        date_registro: DataTypes.DATEONLY
    }, {
        tableNAme: 'usuarios',
        timestamps: false,
    })
    return Usuario;
};