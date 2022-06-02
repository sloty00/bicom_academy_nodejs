const conexion = require('../database/db')

exports.register = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 2
        const estado = 1
        if (user && pass) {
            conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:pass, fk_tipo:type, act_desact:estado}, (error, result)=>{
                if(error){
                    console.log(error);
                }else{
                    res.render('registroPrincipal', {
                        message: 'Datos Guardados Satisfactoriamente'
                    })
                }
            });
        }else{
            res.render('registroPrincipal', {
                message: 'Datos Invalidos'
            })
        }
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
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=2', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    // Redirect to home page
                    res.render('panelPrincipal')
                } else {
                    res.render('accesoPrincipal', {
                        message: 'Datos Incorrectos'
                    })
                }		
            });
        } else {
            res.render('accesoPrincipal', {
                message: 'Rellene sus datos'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.protected = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('panelPrincipal')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.logout = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('/')
}