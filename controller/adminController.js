const conexion = require('../database/db')

exports.registerAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1

        if (user && pass) {
            conexion.query('INSERT INTO tbl_admin SET ?', {ad_cuenta:user, ad_password:pass, fk_tipo:type}, (error, result)=>{
                if(error){
                    console.log(error);
                }else{
                    res.render('register',{
                        alert:true,
                        alertTitle: "Informacion",
                        alertMessage: "Usuario Creado",
                        alertIcon:'success',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                }
            });
        }else{
            res.render('register',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'register'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.loginAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (user && pass) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            conexion.query('SELECT * FROM tbl_admin WHERE ad_cuenta = ? AND ad_password = ?', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    // Redirect to home page
                    res.render('panelAdmin', {
                        'usuario':user, 
                        'password':pass,
                        alert:true,
                        alertTitle: "success",
                        alertMessage: "Acceso Correcto",
                        alertIcon:'info',
                        showConfirmButton: true,
                        timer: false,
                    })
                } else {
                    res.render('loginAdmin',{
                        alert:true,
                        alertTitle: "Advertencia",
                        alertMessage: "Datos Invalidos",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'loginAdmin'
                    })
                }		
            });
        } else {
            res.render('loginAdmin',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'warning',
                showConfirmButton: true,
                timer: false,
                ruta: 'loginAdmin'
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
		res.redirect('/loginAdmin')
	}
	res.end();
}

exports.logoutAdmin = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('/loginAdmin')
}