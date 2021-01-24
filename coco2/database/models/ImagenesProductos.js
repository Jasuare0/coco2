module.exports = (sequelize, Types) =>{
    const ImagenesProductos = sequelize.define('ImagenesProductos',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        imagen: {
            type: Types.STRING,
        },
        producto_id: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "imagenesproductos",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    });


    return ImagenesProductos;
}

