module.exports = (sequelize, Types) =>{
    const Inicio = sequelize.define('Inicio',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        item: {
            type: Types.STRING,
        },
        value: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "inicio",
        underscored: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',  
    });

    return Inicio;
}

