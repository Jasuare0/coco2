module.exports = (sequelize, Types) =>{
    const Usuarios = sequelize.define('Usuarios',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        usuario: {
            type: Types.STRING,
        },
        contrapass: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "usuarios",
        underscored: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',  
    });

    return Usuarios;
}

