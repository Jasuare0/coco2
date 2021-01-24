module.exports = (sequelize, Types) =>{
    const Fuentes = sequelize.define('Fuentes',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        fuente: {
            type: Types.STRING,
        },
        link: {
            type: Types.TEXT,
        },
        css: {
            type: Types.TEXT,
        },
        status: {
            type: Types.STRING,
        }
    },
    {
        tableName: "fuentes",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'  
    });

    return Fuentes;
}

