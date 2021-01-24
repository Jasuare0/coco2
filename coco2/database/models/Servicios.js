module.exports = (sequelize, Types) =>{
    const Servicios = sequelize.define('Servicios',{
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

    },
    {
        tableName: "servicios",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

  
    Servicios.associate = function (models) {
        Servicios.hasMany(models.ImagenesServicios,{
            as: "imagenesServicios",
            foreignKey: "servicio_id"
        })
    }


    return Servicios;
}

