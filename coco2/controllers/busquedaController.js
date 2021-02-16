let db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const busquedaController = {

    'busqueda': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {
            db.Fuentes.findAll({
                where: {
                    status: 'Selected',
                }
            })
            .then(fuentes =>{


                db.RedesSociales.findAll()
                .then(redessociales => {

                    db.Productos.findAll()
                    .then(existenProductos => {
    
                        db.Servicios.findAll()
                        .then(existenServicios => {

                            let usuarioLogueado = req.session.usuario;
                
                            if(usuarioLogueado == undefined){
        
                                usuarioLogueado = ''
        
                            }
        
                            db.Categorias.findAll()
                            .then(listadoCategorias => {
                                
                                db.Productos.findAll(
                                    {
                                        where: {
                                          nombre: {
                                            [Op.like]: `%` + req.body.valorBusqueda + `%`,
                                          }
                                        },
                                        include: [{association: "imagenesProductos"}]
                                    }
                                )
                                .then(productosBusqueda => {

                                    db.Casosdeexito.findAll()
                                    .then(casosdeexitoenBD => {
                                        if(productosBusqueda.length != 0){

                                            res.render('resultadoBusqueda',{resultados,fuentes,existenProductos,existenServicios,listadoCategorias,usuarioLogueado,redessociales,productosBusqueda,casosdeexitoenBD})
        
                                        }else{
                                            res.render('resultadoBusquedaInexistente',{resultados,fuentes,existenProductos,existenServicios,listadoCategorias,usuarioLogueado,redessociales,productosBusqueda,casosdeexitoenBD})
    
                                        }
                                        
                                    })


                                })
    
                            })
                        })
    
                    
                    })
    
    
                
                })



            })

        })
    
    }

}


module.exports = busquedaController;