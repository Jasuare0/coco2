let db = require('../database/models');

const usuarioController = {

    'login': function(req,res){

        let usuarioLogueado = req.session.usuario;
        // console.log(usuarioLogueado)

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll()
            .then(existenProductos => {
                db.Servicios.findAll()
                .then(existenServicios => {
                    res.render('login',{validacionUsuario: '', usuarioLogueado, validacionContrasena: '', mensaje: '',resultados: resultados,existenProductos,existenServicios})

                })

            })

        })

    },
    'validacion': function(req,res){

        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Usuarios.findOne({
            where: {
                usuario: req.body.usuario,
            }
        })
        .then(resultadoUsuario =>{

            if(resultadoUsuario){

                db.Usuarios.findOne({
                    where: {
                        contrapass: req.body.contrasena,
                    }
                })
                .then(resultadoContrasena =>{
                    if(resultadoContrasena){

                        req.session.usuario = req.body.usuario;

                        res.redirect('/admin')
                        // res.render('login',{validacionUsuario: 'Ok', validacionContrasena: 'Ok', mensaje: 'Usuario y Contraseña Correctos!!!'})                        

                    }else{


                        db.Inicio.findAll()
                        .then(resultados => {
                            db.Productos.findAll()
                            .then(existenProductos => {
                                db.Servicios.findAll()
                                .then(existenServicios => {
                                    res.render('login',{validacionUsuario: 'Ok', validacionContrasena: 'notOk', mensaje: 'Verificar Contraseña:',existenProductos,existenServicios,resultados,usuarioLogueado})                        
    
                                })                            
                            })
                                
                        })
                    }

                })

            }
            else{

                db.Inicio.findAll()
                .then(resultados => {
                    db.Productos.findAll()
                    .then(existenProductos => {
                        db.Servicios.findAll()
                        .then(existenServicios => {
                            res.render('login',{validacionUsuario: 'notOk', validacionContrasena: '', mensaje: 'El usuario ingresado no existe en la base de datos, favor reingresar los datos:',existenProductos,existenServicios,resultados,usuarioLogueado})                        
    
                        })
                    })
    
                })


            }

        })
        
    },
    'logout': function(req,res){
        req.session.usuario = '';

        res.redirect('/')
    },
}


module.exports = usuarioController;