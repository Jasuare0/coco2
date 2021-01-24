module.exports = (sequelize, Types) =>{
    const Caracteristicas = sequelize.define('Caracteristicas',{
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
        product_id: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "caracteristicas",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

    return Caracteristicas;
}

