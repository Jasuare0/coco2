let db = require('../database/models');
const nodemailer = require('nodemailer');

const mailController = {

    'enviandomail': async function(req,res){


        const {nombre,email,telefono,comentario,emailEmpresa} = req.body;


        contentHTML = `

            <h1>Información Cliente:</h1>

            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${telefono}</li>
                <li>Comentario: ${comentario}</li>
            </ul>
        `

        // console.log(contentHTML);

        const transporter = nodemailer.createTransport({
            host: 'mail.javiersuarezdominguez.com',
            port: 587,
            secure: false,
            auth: {
                user: 'edgconstructores@javiersuarezdominguez.com',
                pass: 'Jasuare0'
            },
            tls: {
                rejectUnauthorized: false
            }

        });

        const info = await transporter.sendMail({
            from: "'EDG Consultores' <edgconstructores@javiersuarezdominguez.com>",
            to: emailEmpresa,            
            bcc: 'edgconstructores@javiersuarezdominguez.com',
            subject: 'Datos del Formulario',
            // text: 'Hello World',
            html: contentHTML

        });

        console.log('Mensaje Enviado', info.messageId);



        res.redirect('/contactenos/confirmacion')

    },

    'confirmacionEnvio': function(req,res){

        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        db.Inicio.findAll()
        .then(resultados => {
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
                            db.Categorias.findAll()
                            .then(listadoCategorias => {
                                res.render('graciasContactarnos',{usuarioLogueado,redessociales, resultados,fuentes,existenProductos,existenServicios,listadoCategorias});
                            })


                        })                        
                    })

                })

    
            })
    
        })


    }
    
}


module.exports = mailController;