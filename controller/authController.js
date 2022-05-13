const conexion = require('../database/db')

exports.register = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1

        conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:pass, fk_tipo:type}, (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/')
            }
        });
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass

        if (user && pass) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ?', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    // Redirect to home page
                    res.render('index', {'usuario':user, 'password':pass})
                } else {
                    res.render('login',{
                        alert:true,
                        alertTitle: "Advertencia",
                        alertMessage: "Datos Invalidos",
                        alertIcon:'info',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                }		
            });
        } else {
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }
    } catch (error) {
        
    }
}

exports.protected = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('index')
	} else {
		// Not logged in
		res.redirect('/login')
	}
	res.end();
}

exports.logout = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('/')
}