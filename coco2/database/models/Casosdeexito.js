module.exports = (sequelize, Types) =>{
    const Casosdeexito = sequelize.define('Casosdeexito',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        titulo: {
            type: Types.STRING,
        },
        descripcion: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "casosdeexito",
        underscored: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',  
    });

      
    Casosdeexito.associate = function (models) {
        Casosdeexito.hasMany(models.ImagenesCasosExito,{
            as: "imagenesCasosDeExito",
            foreignKey: "casodeexito_id"
        })
    }


    return Casosdeexito;
}

