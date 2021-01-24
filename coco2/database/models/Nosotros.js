module.exports = (sequelize, Types) =>{
    const Nosotros = sequelize.define('Nosotros',{
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
        tableName: "nosotros",
        underscored: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',  
    });

    return Nosotros;
}

