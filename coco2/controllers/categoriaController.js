let db = require('../database/models');

const categoriaController = {

    'categoria': function(req,res){
        
        console.log('Categoria en el body: ')
        console.log(req.body.categoria)

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
                                            res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria,productosCategoria,categorias});

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

    'categoria2': function(req,res){
        
        console.log('Categoria en el body: ')
        console.log(req.body.categoria)

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
                                            res.render('categoria',{resultados,usuarioLogueado,redessociales, fuentes,existenServicios,existenProductos,categoria,productosCategoria,categorias});

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