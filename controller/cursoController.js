const conexion = require('../database/db')
const multer = require('multer')

//--------------------------Panel Administrativo-----------------------------//

mult_images = "";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img_bicom')
    },
    mult_images : false,
    filename: function (req, file, cb) {
      const mimeExtension = {
          'image/jpeg':'.jpeg',
          'image/jpg':'.jpg',
          'image/png':'.png',
          'image/gif':'.gif'
      }
      const uniqueSuffix = Date.now() + mimeExtension[file.mimetype];
      cb(null, file.fieldname + '-' + uniqueSuffix)
      mult_images = file.fieldname + '-' + uniqueSuffix
      console.log(mult_images);
    }
})

exports.uploadImage = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log(file.mimetype)
        if(file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/gif') {
            cb(null, true); 
        } else {
            cb(null, false);
            req.fileError = 'Archivo: Formato invalido';
        }
    }
 })

exports.registroMantenedor = async (req, res)=>{

    const tp_descripcion = req.body.tp_descripcion
    if (tp_descripcion) {
        conexion.query('INSERT INTO tbl_tipo SET ?', {tp_descripcion:tp_descripcion}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {

    }

    const c_cut = req.body.c_cut
    const c_descripcion = req.body.c_descripcion
    const fk_provincia = req.body.fk_provincia
    if (c_cut && c_descripcion) {
        conexion.query('INSERT INTO tbl_comuna SET ?', {c_cut:c_cut,c_descripcion:c_descripcion, fk_provincia:fk_provincia}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {

    }

    const r_cut = req.body.r_cut
    const r_descripcion = req.body.r_descripcion
    const fk_pais = req.body.fk_pais
    if (r_cut && r_descripcion) {
        conexion.query('INSERT INTO tbl_region SET ?', {r_cut:r_cut,r_descripcion:r_descripcion, fk_pais:fk_pais}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
    });
    }else{

    }
    const p_rut = req.body.p_rut;
    const fk_acceso = req.body.fk_acceso
    const p_nombre = req.body.p_nombre
    const p_apellidos = req.body.p_apellidos
    const fk_comuna = req.body.fk_comuna
    const p_direccion = req.body.p_direccion
    const p_telefono = req.body.p_telefono
    const p_email = req.body.p_email
    if(p_rut && p_nombre && p_apellidos && p_direccion && p_telefono && p_email) {
        conexion.query('INSERT INTO tbl_persona SET ?', {p_rut:p_rut,fk_acceso:fk_acceso, p_nombre:p_nombre, p_apellidos:p_apellidos, fk_comuna:fk_comuna, p_direccion:p_direccion, p_telefono:p_telefono, p_email:p_email}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
    });
    }else{

    }
    const p_cut = req.body.p_cut;
    const descripcion = req.body.descripcion
    const fk_region = req.body.fk_region
    if(p_cut && descripcion){
        conexion.query('INSERT INTO tbl_provincia SET ?', {p_cut:p_cut,descripcion:descripcion,fk_region:fk_region}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    }else{

    }

    const pa_cut = req.body.pa_cut;
    const pa_descripcion = req.body.pa_descripcion
    if(pa_cut && pa_descripcion){
        conexion.query('INSERT INTO tbl_pais SET ?', {pa_cut:pa_cut,pa_descripcion:pa_descripcion}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {

    }

    const cu_descripcion = req.body.cu_descripcion;
    const fk_rut = req.body.fk_rut;
    const cu_estado = 1;
    if(cu_descripcion && fk_rut && cu_estado){
        conexion.query('INSERT INTO tbl_cursos SET ?', {cu_descripcion:cu_descripcion,fk_rut:fk_rut, cu_estado:cu_estado}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {

    }

    const sec_descripcion = req.body.sec_descripcion;
    if(sec_descripcion){
        conexion.query('INSERT INTO tbl_seccion SET ?', {sec_descripcion:sec_descripcion}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {

    }

    const con_encabezado = req.body.con_encabezado;
    const con_descripcion = req.body.con_descripcion;
    const fk_cursos = req.body.fk_cursos;
    if(con_encabezado && con_descripcion && fk_cursos){
        conexion.query('INSERT INTO tbl_contenidos SET ?', {con_encabezado:con_encabezado,con_descripcion:con_descripcion, fk_cursos:fk_cursos}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {
        
    }

    const fk_cursoc = req.body.fk_cursoc;
    const fk_persona = req.body.fk_persona;
    const cal_nota = req.body.cal_nota;
    if(cal_nota && fk_cursoc && fk_persona){
        conexion.query('INSERT INTO tbl_calificacion SET ?', {cal_nota:cal_nota, fk_curso:fk_cursoc, fk_persona:fk_persona}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {
        
    }

    const mul_URL = req.body.mul_URL;
    const mul_fecha = req.body.mul_fecha;
    const fk_seccion = req.body.fk_seccion;
    const fk_curso = req.body.fk_curso;
    if(mult_images && mul_URL && mul_fecha && fk_curso){

        conexion.query('INSERT INTO tbl_multimedios SET ?', {mul_images:mult_images, mul_URL:mul_URL, mul_fecha:mul_fecha, fk_seccion:fk_seccion, fk_curso:fk_curso}, function(error, result){
            if (error) throw error;
            res.redirect('/usuarioAdmin')
        });
    } else {
        
    }
}

exports.tablaGeneral = (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT * from tbl_tipo;" + 
                    "SELECT a_id, a_cuenta, a_password, fk_tipo, if (act_desact = 1, 'Activado', 'Desactivado') as act_desact  FROM `tbl_acceso`;"+
                    "SELECT * FROM tbl_persona;"+
                    "SELECT * FROM tbl_comuna;"+
                    "SELECT * FROM tbl_provincia;" +
                    "SELECT * FROM tbl_region;" +
                    "SELECT * FROM tbl_pais", [1, 2, 3, 4, 5, 6, 7], function(err, results) {
        if (err) throw err;
        res.render('admin/vistasGeneral', {tipo:results[0], acceso:results[1], persona:results[2], comuna:results[3], provincia:results[4], region:results[5], pais:results[6]});
    });
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}
}

exports.vistaAdmin = (req, res)=>{

    if (req.session.loggedIn) {
		// Output username
		//res.render('panelAdmin')
        console.log("sdgfsdfg");
        conexion.query('select * from vista_admin', (error, results)=>{
            if (error) throw error;
            res.render('admin/vistasAdmin', {vistasAdmin:results});
        })
        //console.log(req.route.path)
        //res.redirect(req.route.path+"/2")
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}

}

exports.vistaPersona = (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query('select * from vista_persona', (error, results)=>{
            if (error) throw error;
            res.render('admin/vistasPersona', {vistasPersona:results});
        })
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}
}

exports.ususarioAdminDrop = (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query( "SELECT tp_id from tbl_tipo;"+
                    "SELECT a_id, a_cuenta FROM tbl_acceso where act_desact='1';"+
                    "SELECT c_cut, c_descripcion FROM tbl_comuna;"+
                    "SELECT p_cut, descripcion FROM tbl_provincia;" +
                    "SELECT r_cut, r_descripcion FROM tbl_region;" +
                    "SELECT pa_cut, pa_descripcion FROM tbl_pais;" +
                    "SELECT p_rut, p_nombre, p_apellidos FROM tbl_persona;" +
                    "SELECT cu_id, cu_descripcion FROM tbl_cursos;" +
                    "SELECT sec_id, sec_descripcion FROM tbl_seccion", [1, 2, 3, 4, 5, 6, 7, 8, 9], function(err, results) {
        if (err) throw err;
        res.render('admin/usuarioAdmin', {tipo:results[0], acceso:results[1], comuna:results[2], provincia:results[3], region:results[4], pais:results[5], persona:results[6], cursos:results[7], seccion:results[8]});
    });
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}
}

exports.preupdateAdminTipo = (req, res)=>{
    const tid = req.params.tp_id;
    conexion.query('select * from tbl_tipo where tp_id=?', [tid], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminTipo', {tipo:results[0]});
        }
    })
}

exports.preupdateAdminAdmin = (req, res)=>{
    const a_id = req.params.a_id;
    conexion.query('select * from tbl_acceso where a_id=?', [a_id], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminAdmin', {adminad:results[0]});
        }
    })
}

exports.preupdateAdminPerfil = (req, res)=>{
    const p_rut = req.params.p_rut;
    conexion.query('select * from tbl_persona where p_rut=?', [p_rut], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminPerfil', {perfil:results[0]});
        }
    })
}

exports.preupdateAdminPais = (req, res)=>{
    const pa_cut = req.params.pa_cut;
    conexion.query('select * from tbl_pais where pa_cut=?', [pa_cut], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminPais', {pais:results[0]});
        }
    })
}

exports.preupdateAdminRegion = (req, res)=>{
    const r_cut = req.params.r_cut;
    conexion.query('select * from tbl_region where r_cut=?', [r_cut], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminRegion', {region:results[0]});
        }
    })
}

exports.preupdateAdminProvincia = (req, res)=>{
    const p_cut = req.params.p_cut;
    conexion.query('select * from tbl_provincia where p_cut=?', [p_cut], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminProvincia', {provincia:results[0]});
        }
    })
}

exports.preupdateAdminComuna = (req, res)=>{
    const c_cut = req.params.c_cut;
    conexion.query('select * from tbl_comuna where c_cut=?', [c_cut], (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('admin/editAdminComuna', {comuna:results[0]});
        }
    })
}

exports.editAdminTipo = (req, res)=>{
    const tp_id = req.body.tp_id;
    const tp_descripcion = req.body.tp_descripcion;
    conexion.query("UPDATE tbl_tipo SET ? WHERE tp_id=?", [{tp_id:tp_id, tp_descripcion:tp_descripcion}, tp_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminAdmin = (req, res)=>{
    const a_id = req.body.a_id;
    const a_cuenta = req.body.a_cuenta;
    const a_password = req.body.a_password;
    const fk_tipo = req.body.fk_tipo;
    conexion.query("UPDATE tbl_acceso SET ? WHERE a_id=?", [{a_cuenta:a_cuenta, a_password:a_password, fk_tipo:fk_tipo}, a_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminPerfil = (req, res)=>{
    const p_rut = req.body.p_rut;
    const fk_acceso = req.body.fk_acceso;
    const p_nombre = req.body.p_nombre;
    const p_apellidos = req.body.p_apellidos;
    const fk_comuna = req.body.fk_comuna;
    const p_direccion = req.body.p_direccion;
    const p_telefono = req.body.p_telefono;
    const p_email = req.body.p_email;
    conexion.query("UPDATE tbl_persona SET ? WHERE p_rut=?", [{p_rut:p_rut, fk_acceso:fk_acceso, p_nombre:p_nombre, p_apellidos:p_apellidos, fk_comuna:fk_comuna, p_direccion:p_direccion, p_telefono:p_telefono, p_email:p_email}, p_rut], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminPais = (req, res)=>{
    const p_cut = req.body.p_cut;
    const p_descripcion = req.body.p_descripcion;
    conexion.query("UPDATE tbl_pais SET ? WHERE p_cut=?", [{p_cut:p_cut, p_descripcion:p_descripcion}, p_cut], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminRegion = (req, res)=>{
    const r_cut = req.body.r_cut;
    const r_descripcion = req.body.r_descripcion;
    const fk_pais = req.body.fk_pais;
    conexion.query("UPDATE tbl_region SET ? WHERE r_cut=?", [{r_cut:r_cut, r_descripcion:r_descripcion, fk_pais:fk_pais}, r_cut], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminProvincia = (req, res)=>{
    const p_cut = req.body.p_cut;
    const descripcion = req.body.descripcion;
    const fk_region = req.body.fk_region;
    conexion.query("UPDATE tbl_provincia SET ? WHERE p_cut=?", [{p_cut:p_cut, descripcion:descripcion, fk_region:fk_region}, p_cut], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.editAdminComuna = (req, res)=>{
    const c_cut = req.body.c_cut;
    const c_descripcion = req.body.c_descripcion;
    const fk_provincia = req.body.fk_provincia;
    conexion.query("UPDATE tbl_comuna SET ? WHERE c_cut=?", [{c_cut:c_cut, c_descripcion:c_descripcion, fk_provincia:fk_provincia}, c_cut], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.deshabilitarAcceso = (req, res)=>{
    const a_id = req.params.a_id;
    conexion.query("UPDATE tbl_acceso SET act_desact = '0' WHERE a_id=?", [a_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.habilitarAcceso = (req, res)=>{
    const a_id = req.params.a_id;
    conexion.query("UPDATE tbl_acceso SET act_desact = '1' WHERE a_id=?", [a_id], (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/vistasGeneral');
        }
    })
}

exports.triggersAdmin = (req, res)=>{
    if (req.session.loggedIn) {
        conexion.query('select * from auditoria_acceso', (error, results)=>{
            if(error){
                throw error;
            } else {
                res.render('admin/triggersAdmin', {results:results});
            }
        });
	} else {
		// Not logged in
		res.redirect('accesoAdm')
	}
}

exports.registroAvance = async (req, res)=>{
    if (req.session.loggedIn) {
        const av_descripcion = req.body.av_descripcion
        const av_estado = req.body.av_estado
        const fk_acceso = req.session.a_id
        const fk_contenido = req.body.fk_contenido
        if (av_descripcion) {
            conexion.query('INSERT INTO tbl_estado SET ?', {av_descripcion, av_estado, fk_acceso, fk_contenido}, function(error, result){
                if (error) throw error;
                res.redirect('/contenido1')
                
            });
        } else {
            res.redirect('/rtert')
        }
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }  
}

exports.vistaContenido1 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id FROM `tbl_multimedios` WHERE fk_contenido = 1 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 1;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 1 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
            var a_id = req.session.a_id
            var mul_id = 0

            var arr = results[0];
            var count = arr.length
            var videos = 100/count
            var videos_vistos = 1

            if (!mul_id){
                console.log(videos_vistos*videos)
            } else {
                console.log("Video ya visto");
            }

            res.render('contenido1', {
                a_id,
                titulos1:results[3],
                contenido1:results[2][0],
                multimedios:results[3],
                mlength:results[0]

            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido2 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 2 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 2;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 2 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id2 = 1
            
                var arr2 = results[0];
                var count2 = arr2.length
                var videos2 = 100/count2
                var videos_vistos2 = 1
            
                if (!mul_id2){
                    console.log(videos_vistos2*videos2)
                } else {
                    console.log("Video ya visto");
                }

            res.render('contenido2', {
                a_id,
                titulos2:results[0],
                contenido2:results[2][1],
                multimedios2:results[3], 
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido3 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 3 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 3;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 3 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id3 = 1
            
                var arr3 = results[0];
                var count3 = arr3.length
                var videos3 = 100/count3
                var videos_vistos3 = 1
            
                if (!mul_id3){
                    console.log(videos_vistos3*videos3)
                } else {
                    console.log("Video ya visto");
                }
                console.log(results[3])
            
            res.render('contenido3', {
                a_id,
                titulos3:results[0],
                contenido3:results[2][2],
                multimedios3:results[3]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido4 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 4 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 4;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 4 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id3 = 1
            
                var arr3 = results[0];
                var count3 = arr3.length
                var videos3 = 100/count3
                var videos_vistos3 = 1
            
                if (!mul_id3){
                    console.log(videos_vistos3*videos3)
                } else {
                    console.log("Video ya visto");
                }
                console.log(results[3])
            
            res.render('contenido4', {
                a_id,
                titulos4:results[0],
                contenido4:results[2][3],
                multimedios4:results[3]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido5 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 5 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 5;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 5 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id3 = 1
            
                var arr3 = results[0];
                var count3 = arr3.length
                var videos3 = 100/count3
                var videos_vistos3 = 1
            
                if (!mul_id3){
                    console.log(videos_vistos3*videos3)
                } else {
                    console.log("Video ya visto");
                }
                console.log(results[3])
            
            res.render('contenido5', {
                a_id,
                titulos5:results[0],
                contenido5:results[2][4],
                multimedios5:results[3]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido6 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 6 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 6;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 6 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id3 = 1
            
                var arr3 = results[0];
                var count3 = arr3.length
                var videos3 = 100/count3
                var videos_vistos3 = 1
            
                if (!mul_id3){
                    console.log(videos_vistos3*videos3)
                } else {
                    console.log("Video ya visto");
                }
                console.log(results[3])
            
            res.render('contenido6', {
                a_id,
                titulos6:results[0],
                contenido6:results[2][5],
                multimedios6:results[3]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.vistaContenido7 = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT mul_id AS m_id, mul_encabezado FROM `tbl_multimedios` WHERE fk_contenido = 7 AND fk_seccion = 2;" + 
                    "SELECT av_estado FROM tbl_estado WHERE av_fecha  = ( SELECT MAX(av_fecha) FROM tbl_estado WHERE fk_acceso =" + req.session.a_id + ") AND fk_contenido = 7;"+
                    "SELECT cu_id, cu_descripcion, con_encabezado, con_descripcion FROM tbl_acceso RIGHT JOIN tbl_cursos ON tbl_acceso.a_id = tbl_cursos.fk_acceso LEFT JOIN tbl_contenidos ON tbl_cursos.cu_id = tbl_contenidos.fk_cursos WHERE tbl_cursos.fk_acceso =" + req.session.a_id + " AND tbl_contenidos.fk_cursos= 2 AND fk_seccion = 2 AND con_estado = 1;"+
                    "SELECT mul_id, mul_encabezado, mul_descripcion, mul_images, mul_URL, mul_fecha FROM `tbl_multimedios` WHERE mul_estado = 1 AND fk_contenido = 7 AND fk_seccion = 2;", [1, 2, 3, 4], function(err, results) {
            if (err) throw err;
                var a_id = req.session.a_id
            
                var mul_id3 = 1
            
                var arr3 = results[0];
                var count3 = arr3.length
                var videos3 = 100/count3
                var videos_vistos3 = 1
            
                if (!mul_id3){
                    console.log(videos_vistos3*videos3)
                } else {
                    console.log("Video ya visto");
                }
                console.log(results[3])
            
            res.render('contenido7', {
                a_id,
                titulos7:results[0],
                contenido7:results[2][6],
                multimedios7:results[3]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }
}

exports.perfilUsuarioC = async (req, res)=>{
    if (req.session.loggedIn) {
		conexion.query("SELECT * FROM tbl_acceso WHERE a_id = "+ req.session.a_id +";" +
                    "SELECT * FROM tbl_persona WHERE fk_acceso = "+ req.session.a_id +";"+
                    "SELECT * FROM tbl_comuna", [1, 2, 3], function(err, results) {
            if (err) throw err;
            res.render('perfilUsuario', {
                perfilUs:results[0][0],
                perfilPer:results[1][0],
                comuna:results[2]
            });
        });
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }  
}

exports.perfilUsuario = async (req, res)=>{
    if (req.session.loggedIn) {
        const p_rut = req.body.inputRut;
        const p_nombre = req.body.inputNombre;
        const p_apellidos = req.body.inputApellido
        const fk_comuna = req.body.inputComuna
        const p_direccion = req.body.inputDireccion
        const p_telefono = req.body.inputFono
        const p_email = req.body.inputEmail
        const fk_acceso = req.session.a_id
        if (p_rut) {
            conexion.query('INSERT INTO tbl_persona SET ?', {p_rut, p_nombre, p_apellidos, fk_comuna, p_direccion, p_telefono, p_email, fk_acceso}, function(error, result){
                if (error) throw error;
                res.redirect('/perfilUsuario')
            });
        } else {
            res.redirect('/contenido1')
        }
    } else {
        // Not logged in
        res.redirect('/accesoPrincipal')
    }  
}

exports.calificacion_video = (req, res)=>{

    if (req.session.loggedIn) {
        conexion.query("SELECT cal_id, a_id, p_nombre, p_apellidos, p_email, cal_video, cal_pond, cu_descripcion FROM tbl_acceso RIGHT JOIN tbl_persona ON tbl_acceso.a_id = tbl_persona.fk_acceso LEFT JOIN vista_cal_video ON tbl_acceso.a_id = vista_cal_video.fk_persona LEFT JOIN tbl_cursos ON tbl_cursos.cu_id = vista_cal_video.fk_curso WHERE tbl_acceso.a_id =" + req.session.a_id + " AND vista_cal_video.fk_curso = 2;"+
        "SELECT cal_id, a_id, p_nombre, p_apellidos, p_email, cal_prueba, cal_pond, cu_descripcion FROM tbl_acceso RIGHT JOIN tbl_persona ON tbl_acceso.a_id = tbl_persona.fk_acceso LEFT JOIN vista_cal_prueba ON tbl_acceso.a_id = vista_cal_prueba.fk_persona LEFT JOIN tbl_cursos ON tbl_cursos.cu_id = vista_cal_prueba.fk_curso WHERE tbl_acceso.a_id =" + req.session.a_id + " AND vista_cal_prueba.fk_curso = 2;"+
        "SELECT sum(cal_pond)/2 as promedio from vista_cal_video where fk_persona =" + req.session.a_id + " and fk_curso = 2;"+
        "SELECT sum(cal_pond)/2 as promedio from vista_cal_prueba where fk_persona =" + req.session.a_id +" and fk_curso = 2;", [1, 2, 3, 4], function (err, results){
            // if any error while executing above query, throw error
            if (err) throw err;
            // if there is no error, you have the result
            // iterate for all the rows in 
            res.render('calificaciones', {vistasCalVideo:results[0], vistaCalContenido:results[1], promediog1:results[2][0].promedio, promediog2:results[3][0].promedio });
        })
	} else {
		// Not logged in
		res.redirect('/accesoPrincipal')
	}

}