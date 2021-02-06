module.exports = (sequelize, Types) =>{
    const Marcas = sequelize.define('Marcas',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        marca: {
            type: Types.STRING,
        }

    },
    {
        tableName: "marcas",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'  
    });

    return Marcas;
}

