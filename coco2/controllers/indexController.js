let db = require('../database/models');

const indexController = {

    'index': function(req,res){

        db.Inicio.findAll()
        .then(resultados=>{
            db.ClientesAliados.findAll()
            .then(clientes=>{
                db.Carousel.findAll({
                    where: {
                        ubicacion: 'Inicio',
                    }
                })
                .then(carousel=>{

                    db.RedesSociales.findAll()
                    .then(redessociales => {

                        db.Productos.findAll({
                            
                                where: {
                                    pagina_inicio: 'Si'
                                },

                                include: [{association: "imagenesProductos"}]
                        })
                        .then(productos => {

                            db.Fuentes.findAll({
                                where: {
                                    status: 'Selected',
                                }
                            })
                            .then(fuentes => {
                                db.Servicios.findAll({
                            
                                    where: {
                                        pagina_inicio: 'Si'
                                    },
    
                                    include: [{association: "imagenesServicios"}]
                                })
                                .then(servicios => {


                                    db.Productos.findAll()
                                    .then(existenProductos => {

                                        db.Servicios.findAll()
                                        .then(existenServicios => {
                                            let usuarioLogueado = req.session.usuario;

                                            if(usuarioLogueado == undefined){
                
                                                usuarioLogueado = ''
                
                                            }
            
                                            res.render('index',{resultados,clientes,carousel,usuarioLogueado,redessociales, productos,fuentes,servicios,existenServicios,existenProductos});
               
        
                                        })

                                    })

    
                                })
                            })
    
                        })
    
                    })

                })

            })
        })
    },
    'nosotros': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {

            db.Carousel.findAll({
                where: {
                    ubicacion: 'Nosotros',
                }
            })
            .then(carousel=>{
                db.RedesSociales.findAll()
                .then(redessociales => {
                    db.Nosotros.findAll()
                    .then(nosotros => {

                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes =>{
                            
                            db.Productos.findAll()
                            .then(existenProductos => {

                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
    
                        
                                    if(usuarioLogueado == undefined){
                
                                        usuarioLogueado = ''
                
                                    }
                
                                    res.render('nosotros',{carousel,usuarioLogueado,redessociales,nosotros,resultados,fuentes,existenProductos,existenServicios});
                    
            
    
                                })
    
                            })
                        })
                    })
        
                })
    
            })
    

        })

    },
    'productos': function(req,res){


        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll({
                include: [{association: "imagenesProductos"}]
            })
            .then(productos => {
                db.Carousel.findAll({
                    where: {
                        ubicacion: 'Productos',
                    }
                })
                .then(carousel => {
                    
                    db.RedesSociales.findAll()
                    .then(redessociales => {

                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes =>{


                            db.Productos.findAll()
                            .then(existenProductos => {

                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
                        
                                    if(usuarioLogueado == undefined){
                
                                        usuarioLogueado = ''
                
                                    }
                
                
                                    res.render('productos',{productos, carousel,usuarioLogueado,redessociales,resultados,fuentes,existenProductos,existenServicios});
            
        
                                })
                            })

                        })
        
                    })
    
                })
    
            })
    

        })


    },
    'detalleProducto': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findByPk(req.params.id,{include: [{association: "imagenesProductos"}]})
            .then(producto =>{
                db.RedesSociales.findAll()
                .then(redessociales =>{
    
                    db.Caracteristicas.findAll({
                        where: {
                            product_id: req.params.id,
                        }
                    })
                    .then(caracteristicas => {

                        db.Fuentes.findAll({
                            where: {
                                status: 'Selected',
                            }
                        })
                        .then(fuentes =>{

                            db.Productos.findAll()
                            .then(existenProductos => {
                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    let usuarioLogueado = req.session.usuario;
    
                                    if(usuarioLogueado == undefined){
                
                                        usuarioLogueado = ''
                
                                    }
                
                                    res.render('DetalleProducto',{usuarioLogueado,producto,redessociales,caracteristicas,resultados,fuentes,existenProductos,existenServicios})
            
        
                                })                                
                            })

                        })
        
                    })
        
                })
        
            })
    

        })

     },
     'servicios': function(req,res){


        db.Inicio.findAll()
        .then(resultados => {

            db.Servicios.findAll({
                include: [{association: "imagenesServicios"}]
            })
            .then(servicios => {
                db.Carousel.findAll({
                    where: {
                        ubicacion: 'Servicios',
                    }
                })
                .then(carousel => {
                    
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
                
            
                                    res.render('servicios',{servicios, carousel,usuarioLogueado,redessociales,resultados,fuentes,existenProductos,existenServicios});
                    
        
                                })                                
                            })

    
                        })
                    })
    
                })
    
            })
    

        })


    },
    'detalleServicio': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {

            db.Servicios.findByPk(req.params.id,{include: [{association: "imagenesServicios"}]})
            .then(servicio =>{
                db.RedesSociales.findAll()
                .then(redessociales =>{
    
                    db.CaracteristicasServicios.findAll({
                        where: {
                            servicio_id: req.params.id,
                        }
                    })
                    .then(caracteristicas => {
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
                
                                    res.render('DetalleServicio',{usuarioLogueado,servicio,redessociales,caracteristicas,resultados,fuentes,existenProductos,existenServicios})
                    
        
                                })                                
                            })
    
                        })
                    })
        
                })
        
            })
    

        })

     },
    
    // 'blog': function(req,res){

    //     db.Inicio.findAll()
    //     .then(resultados => {

    //         db.Blogs.findAll()
    //         .then(blogs => {
    //             db.Carousel.findAll()
    //             .then(carousel =>{
    //                 db.RedesSociales.findAll()
    //                 .then(redessociales =>{
    //                     let usuarioLogueado = req.session.usuario;
    
                        
    //                     if(usuarioLogueado == undefined){
    
    //                         usuarioLogueado = ''
    
    //                     }
    
    //                     res.render('blog',{blogs, carousel,usuarioLogueado,redessociales,resultados});
        
    //                 })
    
    //             })
    
    //         })
    


    //     })


    // },
    // 'blogDetalle': function(req,res){


    //     db.Inicio.findAll()
    //     .then(resultados => {
    //         db.Blogs.findByPk(req.params.id)
    //         .then(blog => {

    //             let visualizaciones = blog.visualizaciones + 1;

    //             db.Blogs.update({
    //                 visualizaciones: visualizaciones,
    //                 },
    //                 {
    //                     where: {
    //                         id: req.params.id,
    //                     }
    //                 }
    //             )
                
    //             db.RedesSociales.findAll()
    //             .then(redessociales => {

    //                 let usuarioLogueado = req.session.usuario;
                    
    //                 if(usuarioLogueado == undefined){

    //                     usuarioLogueado = ''

    //                 }


    //                 res.render('blogDetalle',{blog,usuarioLogueado,redessociales,resultados});
    
    //             })

    //         })

    //     })


    // },

    
    'contactenos': function(req,res){
        
        db.Inicio.findAll()
        .then(resultados=>{
            db.Carousel.findAll({
                where: {
                    ubicacion: 'Contactenos',
                }
            })
            .then(carousel => {
                
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
            
                                res.render('contactenos',{resultados, carousel,usuarioLogueado,redessociales,fuentes,existenProductos,existenServicios});
                
        
                            })                            
                        })
    
                    })
                })

            })
        })
    }
    
}


module.exports = indexController;