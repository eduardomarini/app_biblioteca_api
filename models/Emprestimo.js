 module.exports = (sequelize, DataTypes) => {
    const Emprestimo = sequelize.define('Emprestimo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'usuarios',
                key: 'id'
            },
        },
        id_livro: {
            type: DataTypes.INTEGER,
            references: {
                model: 'livros',
                key: 'id',
            },
        },
        data_emprestimo: DataTypes.DATEONLY,
        data_devolucao: DataTypes.DATEONLY,
    }, {
        tabelName: 'emprestimos',
        timestamps: false,
    })
    return Emprestimo
 }