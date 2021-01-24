let db = require('../database/models');

const serviciosController = {

    'servicios': function(req,res){


        let usuarioLogueado = req.session.usuario;
        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Servicios.findAll({
                    include: [{association: "imagenesServicios"}]
                })
                .then(servicios => {

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            res.render('adminServicios',{servicios,usuarioLogueado,resultados,existenProductos,existenServicios});

                        })
                    })
    
        
                })
    
            })

        }else{
            res.redirect('/users');

        }


    },

    'edicionServicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Inicio.findAll()
            .then(resultados => {
                db.Servicios.findByPk(req.params.id,{include:[{association:"imagenesServicios"}]})
                .then(servicio => {
    
                    db.CaracteristicasServicios.findAll({
                        where: {
                            servicio_id: req.params.id,
                        }
                    })
                    .then(caracteristicas => {

                        db.Productos.findAll()
                        .then(existenProductos => {
                            db.Servicios.findAll()
                            .then(existenServicios => {
                                res.render('adminEditServicio', {servicio,caracteristicas,usuarioLogueado,resultados: resultados, existenProductos, existenServicios})

                            })
                        })

                    })
        
                })
    
    
            })
        }else{
            res.redirect('/users');

        }


    },

    'actualizacionServicio': function(req,res,next){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

            if(usuarioLogueado != ''){
            

                    db.Servicios.update({
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
            
    
                    let ubicacionPrevia = 'Servicio';
                    let direccionPrevia = 'servicios';

                    res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
        
            }else{
                res.redirect('/users');

            }

    },

    'crearServicio': function(req,res){

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
                    res.render('adminCrearServicio',{usuarioLogueado,resultados,existenProductos,existenServicios});

                })
            })
        })

    },

    'generaServicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

       
        let nombreArchivo = req.files;


        if(nombreArchivo == ''){
            db.Servicios.create({

                nombre: req.body.nombreServicio,
                descripcion: req.body.descripcionCorta,
                descripcion_larga: req.body.descripcionLarga,
                precio: req.body.precio,
                preciocondescuento: req.body.preciocondescuento,
        
            })
            .then(resultado =>{
    
                let ubicacionPrevia = 'Servicio';
                let direccionPrevia = 'servicios';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
            })
    
        }else{
        
            db.Servicios.create({
                nombre: req.body.nombreServicio,
                descripcion: req.body.descripcionCorta,
                descripcion_larga: req.body.descripcionLarga,
            })
            .then(resultado =>{

                for (let i =0; i<nombreArchivo.length;i++) {

                    // console.log('Nomre del Archivo:')
                    // console.log(nombreArchivo[i])

                    db.ImagenesServicios.create({
                        imagen: nombreArchivo[i].filename,
                        servicio_id: resultado.id,
    
                    })
    
                }

    
                let ubicacionPrevia = 'Servicio';
                let direccionPrevia = 'servicios';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
                })
    
        }

    },

    'edicionImagenServicio': function(req,res){
        

        // console.log('Resultado nombre archivo:')
        // console.log(req.files[0].filename)

        // console.log('Resultado req.params.idImagen:')
        // console.log(req.params.idImagen)

        if (req.files[0].filename != ''){

            db.ImagenesServicios.update(
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
    
                let ubicacionPrevia = 'Servicio';
                let direccionPrevia = 'servicios';

                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })
    
    
        }else{
            res.redirect('/admin/servicios')
        }

    },

    'eliminarImagenServicio': function(req,res){
    
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        

            db.ImagenesServicios.destroy({
                where: {
                    id: req.params.idImagen,
                }
            })
            .then(resultado => {
                let ubicacionPrevia = 'Servicio';
                let direccionPrevia = 'servicios';
    
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })

        }else{
            res.redirect('/users');

        }
    },

    'sumarImagenServicio': function(req,res){
        

        if (req.files.length != 0) {

            db.ImagenesServicios.create(
                {
                    imagen: req.files[0].filename,
                    servicio_id: req.params.id,
                }
            )
            .then(resultado => {
        
                let ubicacionPrevia = 'Servicio';
                let direccionPrevia = 'servicios';
    
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })
    

        }else{

            res.redirect('/admin/servicios/' + req.params.id);


        }


    },

    'editarCaracteristicaServicio': function(req,res){
        
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Inicio.findAll()
            .then(resultados => {
                db.Servicios.findByPk(req.params.id)
                .then(servicio => {
                    db.CaracteristicasServicios.findByPk(req.params.idCaracteristica)
                    .then(caracteristica =>{

                        db.Productos.findAll()
                        .then(existenProductos => {
                            db.Servicios.findAll()
                            .then(existenServicios => {
                                res.render('adminEditCaracteristicaServicio',{servicio,caracteristica,usuarioLogueado,resultados,existenProductos,existenServicios})            

                            })
                        })
    
                    })
    
                })
    
            })
            

        }else{
            res.redirect('/users');

        }


    },

    'actualizacionCaracteristicaServicio': function(req,res){
        
        
        let nombreArchivo = req.files;

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

                        
            if(nombreArchivo == ''){

    
                db.CaracteristicasServicios.update(
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

    
                db.CaracteristicasServicios.update(
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

            
            res.redirect('/admin/servicios');         

            

        }else{
            res.redirect('/users');

        }


    },

    'crearCaracteristicaServicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            let servicio = req.params.id

            db.Inicio.findAll()
            .then(resultados => {

                db.Productos.findAll()
                .then(existenProductos => {
                    db.Servicios.findAll()
                    .then(existenServicios => {
                        res.render('adminCrearCaracteristicaServicio',{servicio,usuarioLogueado,resultados,existenProductos,existenServicios})

                    })
                })

            })

        }else{
            res.redirect('/users');

        }


    },

    'sumarCaracteristicaServicio': function(req,res){
        
        // console.log('Valores que están pasando:')
        // console.log(req.body.titulocaracteristica)
        // console.log(req.body.detallecaracteristica)
        // console.log(req.params.id)

        let id = req.params.id;

        db.CaracteristicasServicios.create({

            caracteristica: req.body.titulocaracteristica,
            descripcion: req.body.detallecaracteristica,
            servicio_id: id,
            imagen: req.files[0].filename,
        })

        .then(resultado =>{

            let ubicacionPrevia = 'Servicios';
            let direccionPrevia = 'servicios';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        })


    },

    'eliminarCaracteristicaServicio': function(req,res){
        db.CaracteristicasServicios.destroy({
            where: {
                id: req.params.idCaracteristica,
            }
        })
        .then(resultado =>{
            
            let ubicacionPrevia = 'Servicios';
            let direccionPrevia = 'servicios';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        })
    },

    'sacarServicioCarousel': function(req,res){
        db.Servicios.update({
            pagina_inicio: '',
        },
        {
            where: {
                id: req.params.id,
            }
        })
        .then(resultado =>{
            res.redirect('/admin/inicio/servicios');

        })
    },

    'serviciosInicio':function(req,res){
        

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){

            db.Servicios.findAll({
                include: [{association: "imagenesServicios"}]
            })
            .then(servicios =>{

                db.Inicio.findAll()
                .then(resultados => {

                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            res.render('agregarServicioInicio',{usuarioLogueado, servicios,resultados,existenProductos,existenServicios})

                        })
                    })

                })

            })

        }else{
            res.redirect('/users');

        }


    },

    'sacarServiciosInicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Servicios.update(
                {
                  pagina_inicio: 'Si',  
                },
                {
                where: {
                    id: req.params.id
                }
            })

            res.redirect('/admin/inicio/servicios');

        }else{
            res.redirect('/users');

        }        
    },
    'eliminarServicio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        if(usuarioLogueado != ''){
        
            db.Servicios.destroy({
                where: {
                    id: req.params.id,
                }
            })
            .then(resultado => {
                
                db.ImagenesServicios.destroy({
                    where: {
                        servicio_id: req.params.id,
                    }
                })
                .then(resultado2 => {
                    res.redirect('/admin/servicios')
                })

            })


        }else{
            res.redirect('/users');

        }
    
    },
    

}


module.exports = serviciosController;