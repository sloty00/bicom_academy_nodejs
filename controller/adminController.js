const conexion = require('../database/db')
const { vistaAdmin } = require('./cursoController')

exports.registroAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1
        const act = 1

        if (user && pass) {
            conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:pass, fk_tipo:type, act_desact:act}, (error, result)=>{
                if(error){
                    console.log(error);
                }else{
                    res.render('admin/registroAdmin',{
                        message: 'Datos Guardados Satisfactoriamente'
                    })
                }
            });
        }else{
            res.render('admin/registroAdmin',{
                message: 'Rellene sus datos'
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
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=1 AND act_desact=1', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    // Redirect to home page
                    res.render('admin/panelAdmin')
                    console.log(user);
                } else {
                    res.render('admin/accesoAdm',{
                        message: 'Datos Incorrectos'
                    })
                }		
            });
        } else {
            res.render('admin/accesoAdm',{
                message: 'Rellene sus Datos'
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.protectedAdmin = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('panelAdmin')
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}
	res.end();
}

exports.logoutAdmin = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('accesoAdm')
}