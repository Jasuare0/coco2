let db = require('../database/models');

const adminController = {

    'admin': function(req,res){
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        if(usuarioLogueado != ''){

            db.Productos.findAll()
            .then(existenProductos => {
                db.Servicios.findAll()
                .then(existenServicios => {
                    db.Inicio.findAll()
                    .then(resultados => {
                        db.Categorias.findAll()
                        .then(listadoCategorias => {
                            db.Casosdeexito.findAll()
                            .then(casosdeexitoenBD => {
                                res.render('admin',{usuarioLogueado, resultados: resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                            
                            })
                        
                        })

                    })
        
        
                })
            })
        }else{

            res.redirect('/users');

        }
    
    },
    'inicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultado=>{
    
                
                db.ClientesAliados.findAll()
                .then(clientes =>{
    
                    db.Carousel.findAll()
                    .then(carouseles=>{
     
                        db.RedesSociales.findAll()
                        .then(redessociales => {

                            db.Productos.findAll({
                            
                                where: {
                                    pagina_inicio: 'Si'
                                },

                                include: [{association: "imagenesProductos"}]
                        })
                            .then(productos => {
                                
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

                                            db.Categorias.findAll()
                                            .then(listadoCategorias => {

                                                db.Casosdeexito.findAll()
                                                .then(casosdeexitoenBD => {
                                                    res.render('adminInicio',{resultado,clientes,carouseles,usuarioLogueado,redessociales,productos, resultados: resultado,servicios,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                                                
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

        }else{
            res.redirect('/users');

        }
    


    },
    'actualizacionDatosInicio': function(req,res){

        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.update({
                value: req.body.slogan,
            },
            {
                where: {
                    id: 1,
                }
            })
    
    
            db.Inicio.update({
                value: req.body.conocenos,
            },
            {
                where: {
                    id: 2,
                }
            })
    
            
            db.Inicio.update({
                value: req.body.productosservicios,
            },
            {
                where: {
                    id: 3,
                }
            })
    
    
            
            db.Inicio.update({
                value: req.body.direccion,
            },
            {
                where: {
                    id: 4,
                }
            })
            
            db.Inicio.update({
                value: req.body.telefono,
            },
            {
                where: {
                    id: 5,
                }
            })
    
                    
            db.Inicio.update({
                value: req.body.email,
            },
            {
                where: {
                    id: 6,
                }
            })
    
                    
            db.Inicio.update({
                value: req.body.coordenadas,
            },
            {
                where: {
                    id: 7,
                }
            })
    
            let ubicacionPrevia = 'Inicio';
            let direccionPrevia = 'inicio';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

        }else{
            res.redirect('/users');

        }
            
        

    },

    'redessociales': function(req,res){
        
        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        
        if(usuarioLogueado != ''){

            db.RedesSociales.update({
                direccionhtml: req.body.facebook,
            },
            {
                where: {
                    id: 1,
                }
            })

            db.RedesSociales.update({
                direccionhtml: req.body.instagram,
            },
            {
                where: {
                    id: 2,
                }
            })


            db.RedesSociales.update({
                direccionhtml: req.body.youtube,
            },
            {
                where: {
                    id: 3,
                }
            })

            db.RedesSociales.update({
                direccionhtml: req.body.twitter,
            },
            {
                where: {
                    id: 4,
                }
            })

            db.RedesSociales.update({
                direccionhtml: req.body.linkedin,
            },
            {
                where: {
                    id: 5,
                }
            })

            db.RedesSociales.update({
                direccionhtml: req.body.whatsapp,
            },
            {
                where: {
                    id: 6,
                }
            })
            
                
            let ubicacionPrevia = 'Inicio';
            let direccionPrevia = 'inicio';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
        
        }else{
    
            res.redirect('/users');

        }
    },

    'nosotros': function(req,res){

        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Nosotros.findAll()
                .then(nosotros => {

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            db.Categorias.findAll()
                            .then(listadoCategorias => {
                                db.Casosdeexito.findAll()
                                .then(casosdeexitoenBD => {
                                    res.render('adminNosotros',{nosotros,usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                                
                                })

                            })


                        })
                    })
        
                })
    
            })

        }else{
            res.redirect('/users');

        }


    },
    'actualizacionDatosNosotros': function(req,res){


        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
            db.Nosotros.update({
                value: req.body.sobreNosotros,
            },
            {
                where: {
                    id: 1,
                }
            })
    
            db.Nosotros.update({
                value: req.body.objetivo,
            },
            {
                where: {
                    id: 2,
                }
            })
    
            db.Nosotros.update({
                value: req.body.mision,
            },
            {
                where: {
                    id: 3,
                }
            })
            
            db.Nosotros.update({
                value: req.body.vision,
            },
            {
                where: {
                    id: 4,
                }
            })


            db.Nosotros.update({
                item: req.body.titulovalor1,
            },
            {
                where: {
                    id: 5,
                }
            })
           

            db.Nosotros.update({
                value: req.body.valor1,
            },
            {
                where: {
                    id: 5,
                }
            })
            
            db.Nosotros.update({
                item: req.body.titulovalor2,
            },
            {
                where: {
                    id: 6,
                }
            })

            db.Nosotros.update({
                value: req.body.valor2,
            },
            {
                where: {
                    id: 6,
                }
            })
    
            db.Nosotros.update({
                item: req.body.titulovalor3,
            },
            {
                where: {
                    id: 7,
                }
            })
            
            
            db.Nosotros.update({
                value: req.body.valor3,
            },
            {
                where: {
                    id: 7,
                }
            })
    
    
            let ubicacionPrevia = 'Nosotros';
            let direccionPrevia = 'nosotros';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    

        }else{
            res.redirect('/users');

        }

    },

    'productos': function(req,res){


        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findAll({
                    include: [{association: "imagenesProductos"}]
                })
                .then(productos => {
    
                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            db.Categorias.findAll()
                            .then(listadoCategorias => {

                                db.Casosdeexito.findAll()
                                .then(casosdeexitoenBD => {

                                    res.render('adminProductos',{productos,usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                                
                                })
                            })


                        })
                    })
        
                })
    
            })

        }else{
            res.redirect('/users');

        }


    },

    'edicionProducto': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findByPk(req.params.id,{include:[{association:"imagenesProductos"}]})
                .then(producto => {
    
                    db.Caracteristicas.findAll({
                        where: {
                            product_id: req.params.id,
                        }
                    })
                    .then(caracteristicas => {

                        db.Productos.findAll()
                        .then(existenProductos => {
                            db.Servicios.findAll()
                            .then(existenServicios => {
                                db.Categorias.findAll()
                                .then(listadoCategorias => {

                                    db.Casosdeexito.findAll()
                                    .then(casosdeexitoenBD => {
                                        res.render('adminEditProducto', {producto,caracteristicas,usuarioLogueado,resultados: resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})

                                    })

                                })


                            })
                        })
    
                    })
        
                })
    
    
            })
        }else{
            res.redirect('/users');

        }


    },

    'actualizacionProducto': function(req,res,next){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

            if(usuarioLogueado != ''){
            

                    db.Productos.update({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion,
                        descripcion_larga: req.body.descripcionLarga,
                        precio: req.body.precio,
                        preciocondescuento: req.body.preciocondescuento,
                    },
                    {
                        where: {
                            id: req.params.id,
                        }
                    })
            
    
                    let ubicacionPrevia = 'Producto';
                    let direccionPrevia = 'productos';

                    res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
        
            }else{
                res.redirect('/users');

            }

    },

    'crearProducto': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll()
            .then(existenProductos => {
                db.Servicios.findAll()
                .then(existenServicios => {
                    db.Categorias.findAll()
                    .then(listadoCategorias => {
                        
                        db.Casosdeexito.findAll()
                        .then(casosdeexitoenBD => {

                            console.log('--- casosdeexitoenBD:  ----')
                            console.log(casosdeexitoenBD.length)
                            res.render('adminCrearProducto',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                        
                        })
                    
                    })


                })
            })

        })

    },

    'generaProducto': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

       
        let nombreArchivo = req.files;


        if(nombreArchivo == ''){
            db.Productos.create({
                nombre: req.body.nombreProducto,
                descripcion: req.body.descripcionCorta,
                descripcion_larga: req.body.descripcionLarga,
                precio: req.body.precio,
                preciocondescuento: req.body.preciocondescuento,
        
            })
            .then(resultado =>{
    
                let ubicacionPrevia = 'Producto';
                let direccionPrevia = 'productos';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            })
    
        }else{
        
            db.Productos.create({
                nombre: req.body.nombreProducto,
                descripcion: req.body.descripcionCorta,
                descripcion_larga: req.body.descripcionLarga,
            })
            .then(resultado =>{

                for (let i =0; i<nombreArchivo.length;i++) {
                    db.ImagenesProductos.create({
                        imagen: nombreArchivo[i].originalname,
                        producto_id: resultado.id,
    
                    })
    
                }

    
                let ubicacionPrevia = 'Producto';
                let direccionPrevia = 'productos';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
                })
    
        }

    },

    'edicionImagenProducto': function(req,res){
        

        // console.log('Resultado nombre archivo:')
        // console.log(req.files[0].filename)

        // console.log('Resultado req.params.idImagen:')
        // console.log(req.params.idImagen)

        if (req.files[0].filename != ''){

            db.ImagenesProductos.update(
                {
                    imagen: req.files[0].filename,
                },
                {
                    where: {
                        id: req.params.idImagen,
                    }
                }
            )
            .then(resultado => {
    
                let ubicacionPrevia = 'Producto';
                let direccionPrevia = 'productos';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })
    
    
        }else{
            res.redirect('/admin/productos')
        }

    },

    'eliminarImagenProducto': function(req,res){
    
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        

            db.ImagenesProductos.destroy({
                where: {
                    id: req.params.idImagen,
                }
            })
            .then(resultado => {
                let ubicacionPrevia = 'Producto';
                let direccionPrevia = 'productos';
    
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })

        }else{
            res.redirect('/users');

        }
    },

    'sumarImagenProducto': function(req,res){
        
        db.ImagenesProductos.create(
            {
                imagen: req.files[0].filename,
                producto_id: req.params.id,
            }
        )
        .then(resultado => {
    
            let ubicacionPrevia = 'Producto';
            let direccionPrevia = 'productos';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        })

    },

    'editarCaracteristicaProducto': function(req,res){
        
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Productos.findByPk(req.params.id)
                .then(producto => {
                    db.Caracteristicas.findByPk(req.params.idCaracteristica)
                    .then(caracteristica =>{

                        db.Productos.findAll()
                        .then(existenProductos => {
                            db.Servicios.findAll()
                            .then(existenServicios => {

                                db.Categorias.findAll()
                                .then(listadoCategorias => {

                                                            
                                    db.Casosdeexito.findAll()
                                    .then(casosdeexitoenBD => {
                                        res.render('adminEditCaracteristicaProducto',{producto,caracteristica,usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})            

                                    })

                                })


                            })
                        })
    
                    })
    
                })
    
            })
            

        }else{
            res.redirect('/users');

        }


    },

    'actualizacionCaracteristicaProducto': function(req,res){
        
        
        let nombreArchivo = req.files;

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

                        
            if(nombreArchivo == ''){

    
                db.Caracteristicas.update(
                    {
                         caracteristica: req.body.caracteristica,
                         descripcion: req.body.descripcionCaracteristica,
                    },
                    {
                         where: {
                             id: req.params.idCaracteristica,
    
                        }
                
                    }
                )
    
            }else{

    
                db.Caracteristicas.update(
                    {
                         caracteristica: req.body.caracteristica,
                         descripcion: req.body.descripcionCaracteristica,
                         imagen: req.files[0].filename,
                    },
                    {
                         where: {
                             id: req.params.idCaracteristica,
    
                        }
                
                    }
                )
    
            }

            
            res.redirect('/admin/productos');         

            

        }else{
            res.redirect('/users');

        }


    },

    'crearCaracteristicaProducto': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            let producto = req.params.id

            db.Inicio.findAll()
            .then(resultados => {

                db.Productos.findAll()
                .then(existenProductos => {
                    db.Servicios.findAll()
                    .then(existenServicios => {

                        db.Categorias.findAll()
                        .then(listadoCategorias => {

                            db.Casosdeexito.findAll()
                            .then(casosdeexitoenBD => {
                                res.render('adminCrearCaracteristica',{producto,usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})
                            
                            })


                        })

                    })
                })

            })

        }else{
            res.redirect('/users');

        }


    },

    'sumarCaracteristicaProducto': function(req,res){
        
        // console.log('Valores que están pasando:')
        // console.log(req.body.titulocaracteristica)
        // console.log(req.body.detallecaracteristica)
        // console.log(req.params.id)

        let id = req.params.id;

        db.Caracteristicas.create({

            caracteristica: req.body.titulocaracteristica,
            descripcion: req.body.detallecaracteristica,
            product_id: id,
            imagen: req.files[0].filename,
        })

        .then(resultado =>{

            let ubicacionPrevia = 'Productos';
            let direccionPrevia = 'productos';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        })


    },

    'eliminarCaracteristicaProducto': function(req,res){
        db.Caracteristicas.destroy({
            where: {
                id: req.params.idCaracteristica,
            }
        })
        .then(resultado =>{
            
            let ubicacionPrevia = 'Productos';
            let direccionPrevia = 'productos';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        })
    },

    'sacarProductoCarousel': function(req,res){
        db.Productos.update({
            pagina_inicio: '',
        },
        {
            where: {
                id: req.params.id,
            }
        })
        .then(resultado =>{
            res.redirect('/admin/inicio/productos');

        })
    },

    'productosInicio':function(req,res){
        

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Productos.findAll({
                include: [{association: "imagenesProductos"}]
            })
            .then(productos =>{

                db.Inicio.findAll()
                .then(resultados => {

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {

                            db.Categorias.findAll()
                            .then(listadoCategorias => {

                                
                                db.Casosdeexito.findAll()
                                .then(casosdeexitoenBD => {
                                    res.render('agregarProductoInicio',{usuarioLogueado, productos,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})

                                })
                                
                            })


                        })
                    })

                })

            })

        }else{
            res.redirect('/users');

        }


    },

    'sacarProductosInicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Productos.update(
                {
                  pagina_inicio: 'Si',  
                },
                {
                where: {
                    id: req.params.id
                }
            })

            res.redirect('/admin/inicio/productos');

        }else{
            res.redirect('/users');

        }        
    },
    'eliminarProducto': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Productos.destroy({
                where: {
                    id: req.params.id,
                }
            })
            .then(resultado => {
                
                db.ImagenesProductos.destroy({
                    where: {
                        producto_id: req.params.id,
                    }
                })
                .then(resultado2 => {

                    res.redirect('/admin/productos')
                })

            })


        }else{
            res.redirect('/users');

        }
    
    },
    
    // 'blog': function(req,res){

    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }


    //     if(usuarioLogueado != ''){
        
    //         db.Inicio.findAll()
    //         .then(resultados =>{
    //             db.Blogs.findAll()
    //             .then(blogs => {
    //                 res.render('adminBlog',{blogs,usuarioLogueado,resultados});
        
    //             })
    
    //         })

    //     }else{
    //         res.redirect('/users');

    //     }


    // },
    // 'editBlog': function(req,res){

    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }


    //     if(usuarioLogueado != ''){
        
    //         db.Inicio.findAll()
    //         .then(resultados => {
    //             db.Blogs.findByPk(req.params.id)
    //             .then(blog => {
    //                 res.render('adminEditBlog',{blog,usuarioLogueado,resultados});
        
    //             })
        
    
    //         })


    //     }else{
    //         res.redirect('/users');

    //     }
    


    // },
    // 'actualizacionBlog': function(req,res){
    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }


        
    //     let nombreArchivo = req.files;
    //     console.log(nombreArchivo)

    //     if(nombreArchivo == ''){
                
    //         db.Blogs.update({
    //             titulo: req.body.titulo,
    //             contenido: req.body.contenido,
    //         },
    //         {
    //             where: {
    //                 id: req.params.id,
    //             }
    //         })

    //         let ubicacionPrevia = 'Blog';
    //         let direccionPrevia = 'blogs';

    //         res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);


    //     }else{

    //         if(usuarioLogueado != ''){
            
                
    //             db.Blogs.update({
    //                 titulo: req.body.titulo,
    //                 contenido: req.body.contenido,
    //                 imagen: req.files[0].filename,
    //             },
    //             {
    //                 where: {
    //                     id: req.params.id,
    //                 }
    //             })

    
    //             let ubicacionPrevia = 'Blog';
    //             let direccionPrevia = 'blogs';

    //             res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            

    //         }else{
    //             res.redirect('/users');

    //         }
    //     }            
    // },
    // 'crearBlog': function(req,res){

    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }


    //     if(usuarioLogueado != ''){

    //         db.Inicio.findAll()
    //         .then(resultados => {
    //             res.render('adminCreateBlog',{usuarioLogueado,resultados});
    //         })

    //     }else{
    //         res.redirect('/users');

    //     }
    
    // },
    // 'crearEnBDNuevoBlog': function(req,res){

    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }

                
    //     let nombreArchivo = req.files;

    //     if(nombreArchivo == ''){

    //         db.Blogs.create({
    //             titulo: req.body.tituloBlog,
    //             contenido: req.body.contenidoBlog,
    //             visualizaciones: 0,
    //             megusta: 0,
    //         })

    //         let ubicacionPrevia = 'Blogs';
    //         let direccionPrevia = 'blogs';

    //         res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            


    //     }else{
    //         if(usuarioLogueado != ''){

    //             db.Blogs.create({
    //                 titulo: req.body.tituloBlog,
    //                 contenido: req.body.contenidoBlog,
    //                 imagen: req.files[0].filename,
    //                 visualizaciones: 0,
    //                 megusta: 0,
    //             })
    
    //             let ubicacionPrevia = 'Blogs';
    //             let direccionPrevia = 'blogs';

    //             res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
    //         }else{
    //             res.redirect('/users');
    
    //         }
    
    //     }

    
    // },

    // 'eliminarBlog':  function(req,res){

    //     let usuarioLogueado = req.session.usuario;

        
    //     if(usuarioLogueado == undefined){

    //         usuarioLogueado = ''

    //     }


    //     if(usuarioLogueado != ''){
        
    //         db.Blogs.destroy({
    //             where: {
    //                 id: req.params.id,
    //             }
    //         })
    //         .then(resultado => {
    //             res.redirect('/admin/blogs');

    //         })

    //     }else{
    //         res.redirect('/users');

    //     }
            

    // },
    

    'editCarousel': function(req,res){
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Inicio.findAll()
            .then(resultados => {
                db.Carousel.findByPk(req.params.id)
                .then(carousel =>{

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            db.Categorias.findAll()
                            .then(listadoCategorias => {

                                                                
                                db.Casosdeexito.findAll()
                                .then(casosdeexitoenBD => {
                                    res.render('adminCarousel',{carousel,usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})
                                })

                            })


                        })
                    })
        
                })
    
            })

    

        }else{
            res.redirect('/users');

        }
    

    },
    'actualizacionCarousel': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }



        let nombreArchivo = req.files;
        // console.log(nombreArchivo)

        if(nombreArchivo == ''){
            let ubicacionPrevia = 'Inicio';
            let direccionPrevia = 'inicio';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
        


        }else{
            if(usuarioLogueado != ''){

            
                db.Carousel.update({
                    imagen: req.files[0].filename,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                })
        
    
                let ubicacionPrevia = 'Inicio';
                let direccionPrevia = 'inicio';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            
    
            }else{
                res.redirect('/users');
    
            }
    
        }


    },

    'crearCarousel': function(req,res){
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll()
            .then(existenProductos => {
                db.Servicios.findAll()
                .then(existenServicios => {
                    db.Categorias.findAll()
                    .then(listadoCategorias => {

                        db.Casosdeexito.findAll()
                        .then(casosdeexitoenBD => {
                            res.render('adminCrearCarousel',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                        })

                    })


                })
            })

        })

    },

    'adicionarImagenCarousel': function(req,res){
    
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        if(usuarioLogueado != ''){

            let nombreArchivo = req.files;

            if(nombreArchivo != ''){

                db.Carousel.create({
                    imagen: req.files[0].filename,
                    ubicacion: req.body.ubicacion,
                })
                    
                let ubicacionPrevia = 'Inicio';
                let direccionPrevia = 'inicio';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            }else{
                res.redirect('/admin/inicio');
            }


        }else{
            res.redirect('/users');

        }
        
    },

    'eliminarCarousel': function(req,res){
        
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Carousel.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(resultado => {
    
                let ubicacionPrevia = 'Inicio';
                let direccionPrevia = 'inicio';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })

        }else{
            res.redirect('/users');

        }

    },

    'ubicacionCarousel': function(req,res){
        
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Carousel.update({
                ubicacion: req.body.ubicacion,
            },
            {
                where: {
                    id: req.params.id,
                }
            })
            .then(resultado => {
    
                let ubicacionPrevia = 'Inicio';
                let direccionPrevia = 'inicio';
        
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            
            })
    
        }else{
            res.redirect('/users');

        }
    
    },

    'clientes': function(req,res){
        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.ClientesAliados.findByPk(req.params.id)
                .then(cliente => {

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            db.Categorias.findAll()
                            .then(listadoCategorias => {

                                db.Casosdeexito.findAll()
                                .then(casosdeexitoenBD => {
                                    res.render('adminClientes',{usuarioLogueado, cliente,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD});
                                })

                            })


                        })
                    })
    
                })
    
            })
        }else{
            res.redirect('/users');

        }
    
    },
    'actualizacionClientes': function(req,res){
        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        let nombreArchivo = req.files;

        if(nombreArchivo == ''){

            db.ClientesAliados.update({
                nombre: req.body.nombreCliente,

            },
            {
                where: {
                    id: req.params.id,
                }
            })
    

            let ubicacionPrevia = 'Inicio';
            let direccionPrevia = 'inicio';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);


        }else{


            if(usuarioLogueado != ''){

                db.ClientesAliados.update({
                    nombre: req.body.nombreCliente,
                    imagen: req.files[0].filename,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                })
        
    
                let ubicacionPrevia = 'Inicio';
                let direccionPrevia = 'inicio';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            }else{
                res.redirect('/users');

            }
        }
    },
    'crearClientes': function(req,res){
        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll()
            .then(existenProductos => {
                db.Servicios.findAll()
                .then(existenServicios => {
                    db.Categorias.findAll()
                    .then(listadoCategorias => {

                        db.Casosdeexito.findAll()
                        .then(casosdeexitoenBD => {
                            res.render('adminCrearClientes',{usuarioLogueado,resultados,existenProductos,existenServicios,listadoCategorias,casosdeexitoenBD})
                        })

                    })


                })
            })

        })

    },
    'crearClientesEnBD': function(req,res){

        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }
       
        let nombreArchivo = req.files;

        if(nombreArchivo != ''){
            db.ClientesAliados.create({
                nombre: req.body.nombreCliente,
                imagen:  req.files[0].filename,
            })
    
        }else{
            db.ClientesAliados.create({
                nombre: req.body.nombreCliente,
            })
    
        }
        
    
        let ubicacionPrevia = 'Inicio';
        let direccionPrevia = 'inicio';

        res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
    },
    'borrarCliente': function(req,res){


        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }
       

        if(usuarioLogueado != ''){

            db.ClientesAliados.destroy({
                where: {
                    id: req.params.id,
                }
            })
            .then( resultado => {
                res.redirect('/admin/inicio');

            })
    
        }else{
            res.redirect('/users');
        }

    },
    'cambioLogo': function(req,res){
        
        db.Inicio.update(
        {
            value: req.files[0].filename,
        }
        ,{
            where: {
                id: 8,
            }
        })
        .then( logocambiado => {

            res.redirect('/admin/inicio')

        })

    }
}


module.exports = adminController;