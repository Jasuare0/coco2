module.exports = (sequelize, Types) =>{
    const ImagenesCasosExito = sequelize.define('ImagenesCasosExito',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        imagen: {
            type: Types.STRING,
        },
        casodeexito_id: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "imagenescasosdeexito",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',   
    });


    return ImagenesCasosExito;
}

