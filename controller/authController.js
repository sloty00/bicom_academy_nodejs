const conexion = require('../database/db')

exports.register = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 2
        const estado = 1
        conexion.query('select a_cuenta from tbl_acceso where fk_tipo=2', [1], (error, results)=>{
            if(error){
                throw error;
            } else {
                var a_user = results[0].a_cuenta;
            }
            console.log(a_user);
            if (user && pass) {
                console.log(a_user)
                if (user != a_user){
                    conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:pass, fk_tipo:type, act_desact:estado}, (error, result)=>{
                        if(error){
                            console.log(error);
                        }else{
                            res.render('registroPrincipal', {
                                message: 'Datos Guardados Satisfactoriamente'
                            })
                        }
                    });
                } else {
                    res.render('registroPrincipal', {
                        message: 'Usuario Existe'
                    })
                }
            }else{
                res.render('registroPrincipal', {
                    message: 'Datos Invalidos'
                })
            }
        })

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
            conexion.query('SELECT a_id, a_cuenta, a_password, p_rut FROM tbl_acceso INNER JOIN tbl_persona ON tbl_acceso.a_id = tbl_persona.fk_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=2', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    req.session.a_id = result[0].a_id
                    // Redirect to home page
                    res.render('panelPrincipal', {
                        Id: req.session.a_id
                    })
                    req.session.save(function(err) {
                        req.session.a_id
                    })
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
        return user
    } catch (error) {
        console.log(error);
    }
}

exports.protected = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
        req.session.contador = req.session.contador ? req.session.contador + 1 : 1;
        console.log("rut: "+req.session.a_id)
		res.render('panelPrincipal')
        
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected1 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3

        var a_id = req.session.a_id

		res.render('contenido1', {
            a_id,
            video1,
            video2,
            video3,
            video4
            //contenido
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
}

exports.protected2 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido2', {
            video1,
            video2,
            video3,
            video4
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected3 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido3', {
            video1,
            video2,
            video3,
            video4
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected4 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido4', {
            video1,
            video2,
            video3,
            video4
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected5 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido5', {
            video1,
            video2,
            video3,
            video4
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected6 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido6', {
            video1,
            video2,
            video3,
            video4
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected7 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        var arr = ["","","",""]
        req.session.video1 = 100 / arr.length;
        var video1 = req.session.video1

        req.session.video2 = 100 / arr.length;
        var video2 = req.session.video2 + video1

        req.session.video3 = 100 / arr.length;
        var video3 = req.session.video3 + video2

        req.session.video4 = 100 / arr.length;
        var video4 = req.session.video4 + video3
		// Output username
		res.render('contenido7',{
            video1,
            video2,
            video3,
            video4
        })
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