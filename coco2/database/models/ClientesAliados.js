module.exports = (sequelize, Types) =>{
    const ClientesAliados = sequelize.define('ClientesAliados',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        nombre: {
            type: Types.STRING,
        },
        imagen: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "clientesaliados",
        underscored: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',  
    });

    return ClientesAliados;
}

