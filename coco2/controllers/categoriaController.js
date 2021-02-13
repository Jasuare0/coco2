let db = require('../database/models');

const categoriaController = {

    'categoria': function(req,res){
        

        db.Categorias.findByPk(req.params.id)
        .then(categoria => {

            if(categoria.categoria != 0 ||  categoria.categoria != '' || categoria.categoria != null) {

                db.Inicio.findAll()
                .then(resultados=>{
                    db.RedesSociales.findAll()
                    .then(redessociales => {
                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes => {
                            db.Productos.findAll()
                            .then(existenProductos => {
        
                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
        
                                    if(usuarioLogueado == undefined){
                        
                                        usuarioLogueado = ''
                        
                                    }
                                    
                                    db.Productos.findAll({
                                        where: {
                                            categoria_id: req.params.id,
                                        }
                                    })
                                    .then(productosCategoria => {

                                        db.Categorias.findAll()
                                        .then(categorias => {

                                            db.Productos.findAll(
                                                {
                                                    where: {
                                                        categoria_id: req.params.id,
                                                    },
                                                    include: [{association: "marcaProducto"}],
                                                }
                                            )
                                            .then(productoConMarca => {

                                                db.Productos.findAll(
                                                    {
                                                        attributes:['marca_id'],
                                                        where: {
                                                            // marca_id: req.params.idMarca,
                                                            categoria_id: req.params.id,
                                                        },
                                                        group: 'marca_id',
                                                        include: [{association: "marcaProducto"}],
                                                    })
                                                .then(todasMarcasProductos => {

                                                    db.Productos.findAll(
                                                        {
                                                            attributes:['subcategoria_id'],
                                                            where: {
                                                                // marca_id: req.params.idMarca,
                                                                categoria_id: req.params.id,
                                                            },
                                                            group: 'subcategoria_id',
                                                            include: [{association: "subcategoriaProducto"}],
                                                        }
                                                    )
                                                    .then(todasSubcategoriasProductos => {

                                                        res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria,productosCategoria,categorias,productoConMarca,todasMarcasProductos,todasSubcategoriasProductos});

                                                    })


                                                })


                                            })

                                        })

                                    })

                
                                })
        
                            })
                        })
                    })
                })
    


            }

    

        })
        .catch(function(e) {
            console.log(e); // "oh, no!"
            res.redirect('/');
        })

    },
    'marca': function(req,res){
    

        db.Categorias.findByPk(req.params.id)
        .then(categoria => {

            if(categoria.categoria != 0 ||  categoria.categoria != '' || categoria.categoria != null) {

                db.Inicio.findAll()
                .then(resultados=>{
                    db.RedesSociales.findAll()
                    .then(redessociales => {
                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes => {
                            db.Productos.findAll()
                            .then(existenProductos => {
        
                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
        
                                    if(usuarioLogueado == undefined){
                        
                                        usuarioLogueado = ''
                        
                                    }

                                    db.Productos.findAll({
                                        where: {
                                            categoria_id: req.params.id,
                                            marca_id: req.params.idMarca,
                                        }
                                    })
                                    .then(productosCategoria => {

                                        db.Categorias.findAll()
                                        .then(categorias => {

                                            db.Productos.findAll(
                                                {
                                                    where: {
                                                        categoria_id: req.params.id,
                                                        marca_id: req.params.idMarca,
                                                    },
                                                    include: [{association: "marcaProducto"}],
                                                }
                                            )
                                            .then(productoConMarca => {

                                                db.Productos.findAll(
                                                    {
                                                        attributes:['marca_id'],
                                                        where: {
                                                            categoria_id: req.params.id,
                                                            // marca_id: req.params.idMarca,
                                                        },
                                                        group: 'marca_id',
                                                        include: [{association: "marcaProducto"}],
                                                    })
                                                .then(todasMarcasProductos => {

                                                    db.Productos.findAll(
                                                        {
                                                            attributes:['subcategoria_id'],
                                                            where: {
                                                                // marca_id: req.params.idMarca,
                                                                categoria_id: req.params.id,
                                                                marca_id: req.params.idMarca,
                                                            },
                                                            group: 'subcategoria_id',
                                                            include: [{association: "subcategoriaProducto"}],
                                                        }
                                                    )
                                                    .then(todasSubcategoriasProductos => {

                                                        res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria,productosCategoria,categorias,productoConMarca,todasMarcasProductos,todasSubcategoriasProductos});

                                                    })

                                                })


                                            })

                                        })

                                    })

                
                                })
        
                            })
                        })
                    })
                })
    


            }

    

        })
        .catch(function(e) {
            console.log(e); // "oh, no!"
            res.redirect('/');
        })


    },
    'subcategoria': function(req,res){
    

        db.Categorias.findByPk(req.params.id)
        .then(categoria => {

            if(categoria.categoria != 0 ||  categoria.categoria != '' || categoria.categoria != null) {

                db.Inicio.findAll()
                .then(resultados=>{
                    db.RedesSociales.findAll()
                    .then(redessociales => {
                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes => {
                            db.Productos.findAll()
                            .then(existenProductos => {
        
                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
        
                                    if(usuarioLogueado == undefined){
                        
                                        usuarioLogueado = ''
                        
                                    }

                                    db.Productos.findAll({
                                        where: {
                                            categoria_id: req.params.id,
                                            subcategoria_id: req.params.idSubcategoria,
                                        }
                                    })
                                    .then(productosCategoria => {

                                        db.Categorias.findAll()
                                        .then(categorias => {

                                            db.Productos.findAll(
                                                {
                                                    where: {
                                                        categoria_id: req.params.id,
                                                        subcategoria_id: req.params.idSubcategoria,
                                                    },
                                                    include: [{association: "marcaProducto"}],
                                                }
                                            )
                                            .then(productoConMarca => {

                                                db.Productos.findAll(
                                                    {
                                                        attributes:['marca_id'],
                                                        where: {
                                                            categoria_id: req.params.id,
                                                            // marca_id: req.params.idMarca,
                                                        },
                                                        group: 'marca_id',
                                                        include: [{association: "marcaProducto"}],
                                                    })
                                                .then(todasMarcasProductos => {

                                                    db.Productos.findAll(
                                                        {
                                                            attributes:['subcategoria_id'],
                                                            where: {
                                                                // marca_id: req.params.idMarca,
                                                                categoria_id: req.params.id,
                                                                subcategoria_id: req.params.idSubcategoria,
                                                            },
                                                            group: 'subcategoria_id',
                                                            include: [{association: "subcategoriaProducto"}],
                                                        }
                                                    )
                                                    .then(todasSubcategoriasProductos => {

                                                        res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria,productosCategoria,categorias,productoConMarca,todasMarcasProductos,todasSubcategoriasProductos});

                                                    })

                                                })


                                            })

                                        })

                                    })

                
                                })
        
                            })
                        })
                    })
                })
    


            }

    

        })
        .catch(function(e) {
            console.log(e); // "oh, no!"
            res.redirect('/');
        })


    }



}


module.exports = categoriaController;