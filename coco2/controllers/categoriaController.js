let db = require('../database/models');

const categoriaController = {

    'categoria': function(req,res){
        
        db.Categorias.findByPk(req.params.id)
        .then(categoria => {

            if(categoria.categoria != 0 ||  categoria.categoria != '' || categoria.categoria != null) {
                console.log('Resultado Categoria:')
                console.log(categoria.categoria)


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
                    
                                    res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria});
                
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