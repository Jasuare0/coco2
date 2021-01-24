module.exports = (sequelize, Types) =>{
    const RedesSociales = sequelize.define('RedesSociales',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        nombre: {
            type: Types.STRING,
        },
        direccionhtml: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "redessociales",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

    return RedesSociales;
}

