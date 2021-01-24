module.exports = (sequelize, Types) =>{
    const ImagenesServicios = sequelize.define('ImagenesServicios',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        imagen: {
            type: Types.STRING,
        },
        servicio_id: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "imagenesservicios",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    });


    return ImagenesServicios;
}

