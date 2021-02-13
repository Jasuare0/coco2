module.exports = (sequelize, Types) =>{
    const Productos = sequelize.define('Productos',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        nombre: {
            type: Types.STRING,
        },
        descripcion: {
            type: Types.TEXT,
        },
        descripcion_larga: {
            type: Types.TEXT,
        },
        pagina_inicio: {
            type: Types.STRING,
        },
        precio: {
            type: Types.STRING,
        },
        preciocondescuento: {
            type: Types.STRING,
        },
        categoria_id: {
            type: Types.INTEGER,
        },
        marca_id: {
            type: Types.INTEGER,
        }

    },
    {
        tableName: "productos",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

  
    Productos.associate = function (models) {
        Productos.hasMany(models.ImagenesProductos,{
            as: "imagenesProductos",
            foreignKey: "producto_id"
        }),
        Productos.belongsTo(models.Categorias,{
            as: "categoriaProducto",
            foreignKey: "categoria_id"
        }),
        Productos.belongsTo(models.Subcategorias,{
            as: "subcategoriaProducto",
            foreignKey: "subcategoria_id"
        }),
        Productos.belongsTo(models.Marcas,{
            as: "marcaProducto",
            foreignKey: "marca_id"
        })
    }


    return Productos;
}

