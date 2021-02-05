let db = require('../database/models');

const categoriaController = {

    'categoria': function(req,res){

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
            
                            res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos});
               
        
                        })

                    })
                })
            })
        })

    }
}


module.exports = categoriaController;