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
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ? AND a_password = ? AND fk_tipo=2', [user, pass], function(error, result) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (result.length > 0) {
                    // Authenticate the user
                    req.session.loggedIn = true;
                    req.session.user = user;
                    req.session.user2 = result[0]
                    //console.log(result[0].a_id)
                    // Redirect to home page
                    res.render('panelPrincipal', {
                        user: req.session.user2
                    })
                    console.log(req.body)
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
        req.session.contador = req.session.contador ? req.session.contador + 1 : 1;
        console.log(req.session.contador)
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
        if(!req.session.videos){
            req.session.videos = 25
        }else{
            req.session.videos = req.session.videos + 25
            if(req.session.videos > 100){
                req.session.videos = 100
            }
        }
        var videos = req.session.videos
        
		res.render('contenido1', {
            videos
            //contenido
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected2 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
        req.session.contador = req.session.contador ? req.session.contador + 1 : 1;
        var contador = req.session.contador;
        console.log(contador)
		// Output username
		res.render('contenido2')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected3 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('contenido3')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected4 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('contenido4')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected5 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('contenido5')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected6 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('contenido6')
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}
	res.end();
}

exports.protected7 = async (req, res)=>{
    // If the user is loggedin
	if (req.session.loggedIn) {
		// Output username
		res.render('contenido7')
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