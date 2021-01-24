module.exports = (sequelize, Types) =>{
    const Blogs = sequelize.define('Blogs',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        titulo: {
            type: Types.STRING,
        },
        contenido: {
            type: Types.TEXT,
        },
        imagen: {
            type: Types.TEXT,
        },
        visualizaciones: {
            type: Types.INTEGER,
        },
        megusta: {
            type: Types.INTEGER,
        }
    },
    {
        tableName: "blog",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'  
    });

    return Blogs;
}

