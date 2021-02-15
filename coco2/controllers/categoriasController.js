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
    'crearCategoria': function(req,res){

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
                            db.Categorias.findAll()
                            .then(categoria => {
                                res.render('adminCrearCategoria',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,categoria});

                            })

                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }




        


        
    },

    'crearNuevaCategoria': function(req,res){

        db.Categorias.create(
            {
                categoria: req.body.categoria,
            }
            
        )
        .then(categoriaNuevaActualizada => {

            let ubicacionPrevia = 'Categorias';
            let direccionPrevia = 'categorias';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

        })


        
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
    'eliminarCategoria': function(req,res){
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
            db.Categorias.destroy({
                where: {
                    id: req.params.id,
                }
            })
            .then(eliminacionCategoria => {

                let ubicacionPrevia = 'Categorias';
                let direccionPrevia = 'categorias';
    
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
                
    
            })

        }else{
            res.redirect('/users');

        }

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




    },
    'editarSubcategoria': function(req,res){

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
                                    where: {
                                        id: req.params.id,
                                    },
                                    
                                    include: [{association: 'categoriaSubcategoria'}]
                                                                
                                }    
                            )
                            .then(subcategoria => {

                                res.render('adminSubCategoriasEditar',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,subcategoria});

                            })

                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }




    },

    'actualizarSubCategoria': function(req,res){



        db.Subcategorias.update(
            {
                subcategoria: req.body.subcategoria,
                categoria_id: req.body.categoria,
            },
            {
                where:{
                    id: req.params.id,
                }     
            }
            
        )
        .then(subcategoriaActualizada => {

            let ubicacionPrevia = 'Subcategorias';
            let direccionPrevia = 'categorias/subcategorias';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

        })


    },
    'crearSubCategoria': function(req,res){

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
                            db.Categorias.findAll()
                            .then(categoria => {
                                res.render('adminCrearSubCategoria',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,categoria});

                            })

                        })


                    })
                })
            })

        }else{
            res.redirect('/users');

        }


        
    },

    'crearNuevaSubCategoria': function(req,res){

        db.Subcategorias.create(
            {
                subcategoria: req.body.subcategoria,
                categoria_id: req.body.categoria
            }
            
        )
        .then(categoriaNuevaActualizada => {

            let ubicacionPrevia = 'Subcategorias';
            let direccionPrevia = 'categorias/subcategorias';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

        })

    },
    'eliminarSubCategoria': function(req,res){
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
            db.Subcategorias.destroy({
                where: {
                    id: req.params.id,
                }
            })
            .then(eliminacionSubCategoria => {
                
                let ubicacionPrevia = 'Subcategorias';
                let direccionPrevia = 'categorias/subcategorias';
    
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
                
    
            })

        }else{
            res.redirect('/users');

        }

    }



}


module.exports = categoriasController;