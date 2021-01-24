module.exports = (sequelize, Types) =>{
    const CaracteristicasServicios = sequelize.define('CaracteristicasServicios',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        caracteristica: {
            type: Types.STRING,
        },
        descripcion: {
            type: Types.TEXT,
        },
        imagen: {
            type: Types.TEXT,
        },
        servicio_id: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "caracteristicasservicios",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

    return CaracteristicasServicios;
}

