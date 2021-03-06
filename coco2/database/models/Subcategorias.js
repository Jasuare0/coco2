module.exports = (sequelize, Types) =>{
    const Subcategorias = sequelize.define('Subcategorias',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        subcategoria: {
            type: Types.STRING,
        },
        categoria_id: {
            type: Types.INTEGER,
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

  
    Subcategorias.associate = function (models) {
        Subcategorias.belongsTo(models.Categorias,{
            as: "categoriaSubcategoria",
            foreignKey: "categoria_id"
        })

    }


    return Subcategorias;
}

