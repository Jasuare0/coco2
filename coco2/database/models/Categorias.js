module.exports = (sequelize, Types) =>{
    const Categorias = sequelize.define('Categorias',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        categoria: {
            type: Types.STRING,
        }

    },
    {
        tableName: "categorias",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'  
    });

    return Categorias;
}

