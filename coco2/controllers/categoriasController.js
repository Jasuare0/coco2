let db = require('../database/models');

const categoriasController = {

    'categorias': function(req,res){

        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findAll()
                .then(existenProductos => {
                    db.Servicios.findAll()
                    .then(existenServicios => {
                        db.Categorias.findAll()
                        .then(listadoCategorias => {

                            res.render('adminCategorias',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias});
                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }




    },
    'editar': function(req,res){

        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findAll()
                .then(existenProductos => {
                    db.Servicios.findAll()
                    .then(existenServicios => {
                        db.Categorias.findAll()
                        .then(listadoCategorias => {
                            db.Categorias.findAll(
                                {
                                    where: {
                                        id: req.params.id,
                                    }
                                }
                            )
                            .then(categoria => {
                                res.render('adminCategoriasEditar',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,categoria});

                            })

                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }




    },

    'actualizarCategoria': function(req,res){

        db.Categorias.update(
            {
                categoria: req.body.categoria,
            },
            {
                where:{
                    id: req.params.id,
                }     
            }
            
        )
        .then(categoriaActualizada => {

            let ubicacionPrevia = 'Categorias';
            let direccionPrevia = 'categorias';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

        })


    },
    'subcategorias': function(req,res){
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findAll()
                .then(existenProductos => {
                    db.Servicios.findAll()
                    .then(existenServicios => {

                        db.Categorias.findAll()
                        .then(listadoCategorias => {

                            db.Subcategorias.findAll(
                                {
                                    include: [{association: 'categoriaSubcategoria'}]
                                }
                            )
                            .then(subcategorias => {
    
                                res.render('adminSubCategorias',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,subcategorias});
                                
                            })
    
                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }




    }

}


module.exports = categoriasController;