let db = require('../database/models');

const confirmacionController = {

    'confirmacion': function(req,res){

        db.Productos.findAll()
        .then(existenProductos => {
            db.Servicios.findAll()
            .then(existenServicios => {
                let usuarioLogueado = req.session.usuario;

        
                if(usuarioLogueado == undefined){
        
                    usuarioLogueado = ''
        
                }
        
        
                let ubicacionPrevia = req.query.ubicacionprevia;
                let direccionPrevia = req.query.direccionprevia;
        
                db.Inicio.findAll()
                .then(resultados => {
                    db.Categorias.findAll()
                    .then(listadoCategorias => {
                        res.render('confirmacionAccionBD',{usuarioLogueado,ubicacionPrevia,direccionPrevia,resultados,existenProductos,existenServicios,listadoCategorias})
                    })
                    
        
                })
        
        
            })            
        })


    }

}


module.exports = confirmacionController;