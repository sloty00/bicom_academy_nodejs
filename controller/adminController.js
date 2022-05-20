const { query } = require('express')
const conexion = require('../database/db')

exports.registroAdmin = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1

        if (user && pass) {
            conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:pass, fk_tipo:type}, (error, result)=>{
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
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=1', [user, pass], function(error, result) {
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
                    res.render('admin/accesoAdmin',{
                        message: 'Datos Incorrectos'
                    })
                }		
            });
        } else {
            res.render('admin/accesoAdmin',{
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
		res.redirect('accesoAdmin')
	}
	res.end();
}

exports.logoutAdmin = (req, res)=>{
    req.session.destroy((err)=>{})
    return res.redirect('accesoAdmin')
}

exports.tablaPersona = (req, res)=>{
    conexion.query("SELECT * from tbl_tipo;" + 
                    "SELECT * from tbl_acceso;"+
                    "SELECT * FROM tbl_persona;"+
                    "SELECT * FROM tbl_comuna;"+
                    "SELECT * FROM tbl_provincia", [1, 2, 3, 4, 5], function(err, results) {
        if (err) throw err;
        res.render('admin/vistasAdmin', {results:results[0], result:results[1], persona:results[2], comuna:results[3], provincia:results[4]});
    });
}

exports.preupdateAdmin = (req, res)=>{
    const a_id = req.params.a_id;
    conexion.query('select * from tbl_acceso where a_id=? and fk_tipo=1', [a_id], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdmin', {user:results[0]});
        }
    })
}

exports.editAdmin = (req, res)=>{
    const a_id = req.body.id;
    const user = req.body.user;
    const pass = req.body.pass;
    const tipo = 1;
    conexion.query("UPDATE tbl_acceso SET ? WHERE a_id=?", [{a_cuenta:user, a_password:pass, fk_tipo:tipo}, a_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasAdmin');
        }
    })
}

exports.deleteAdmin = (req, res)=>{
    const a_id = req.params.a_id;
    conexion.query("DELETE FROM tbl_acceso WHERE a_id=?", [a_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasAdmin');
        }
    })
}

exports.triggersAdmin = (req, res)=>{
    conexion.query('select * from auditoria_acceso', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/triggersAdmin', {results:results});
        }
    });
}