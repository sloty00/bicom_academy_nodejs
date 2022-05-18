const conexion = require('../database/db')

exports.registroAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1

        if (user && pass) {
            conexion.query('INSERT INTO tbl_admin SET ?', {ad_cuenta:user, ad_password:pass, fk_tipo:type}, (error, result)=>{
                if(error){
                    console.log(error);
                }else{
                    res.render('registroAdmin',{
                        alert:true,
                        alertTitle: "Informacion",
                        alertMessage: "Usuario Creado",
                        alertIcon:'success',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'registroAdmin'
                    })
                }
            });
        }else{
            res.render('registroAdmin',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'registroAdmin'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.accesoAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (user && pass) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=1', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    // Redirect to home page
                    res.render('admin/panelAdmin', {
                        'usuario':user, 
                        'password':pass,
                        alert:true,
                        alertTitle: "success",
                        alertMessage: "Acceso Correcto",
                        alertIcon:'info',
                        showConfirmButton: true,
                        timer: false,
                        ruta: '/'
                    })
                    console.log(user);
                } else {
                    res.render('admin/accesoAdmin',{
                        alert:true,
                        alertTitle: "Advertencia",
                        alertMessage: "Datos Invalidos",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'accesoAdmin'
                    })
                }		
            });
        } else {
            res.render('admin/accesoAdmin',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'accesoAdmin'
            })
        }
    } catch (error) {
        
    }
}

exports.protectedAdmin = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('panelAdmin')
	} else {
		// Not logged in
		res.redirect('accesoAdmin')
	}
	res.end();
}

exports.logoutAdmin = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('accesoAdmin')
}
/*
exports.fechahora = (req, res)=>{
    const moment = require('moment')
    currentDate = moment().format('DD-MM-YYYY')
    currentTime = moment().format('hh:mm')
    console. log(currentTime, currentDate);
    res.render('admin/accesoAdmin', {alert:false, hora:currentTime, fecha:currentDate})
}
*/