module.exports = (sequelize, Types) =>{
    const Subcategorias = sequelize.define('Subcategorias',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        subcategoria: {
            type: Types.STRING,
        }

    },
    {
        tableName: "subcategorias",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'  
    });

    return Subcategorias;
}

