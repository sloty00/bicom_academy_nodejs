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
    const fk_id = req.body.fk_id
    const p_nombre = req.body.p_nombre
    const p_apellidos = req.body.p_apellidos
    const fk_comuna = req.body.fk_comuna
    const p_direccion = req.body.p_direccion
    const p_telefono = req.body.p_telefono
    const p_email = req.body.p_email
    if(p_rut && p_nombre && p_apellidos && p_direccion && p_telefono && p_email) {
        conexion.query('INSERT INTO tbl_persona SET ?', {p_rut:p_rut,fk_id:fk_id, p_nombre:p_nombre, p_apellidos:p_apellidos, fk_comuna:fk_comuna, p_direccion:p_direccion, p_telefono:p_telefono, p_email:p_email}, function(error, result){
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
    const fk_id = req.body.fk_id;
    const p_nombre = req.body.p_nombre;
    const p_apellidos = req.body.p_apellidos;
    const fk_comuna = req.body.fk_comuna;
    const p_direccion = req.body.p_direccion;
    const p_telefono = req.body.p_telefono;
    const p_email = req.body.p_email;
    conexion.query("UPDATE tbl_persona SET ? WHERE p_rut=?", [{p_rut:p_rut, fk_id:fk_id, p_nombre:p_nombre, p_apellidos:p_apellidos, fk_comuna:fk_comuna, p_direccion:p_direccion, p_telefono:p_telefono, p_email:p_email}, p_rut], (error, result)=>{
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
    const av_id = req.body.av_id
    const av_descripcion = req.body.av_descripcion
    const av_estado = req.body.av_estado
    const fk_rut = fk_rut
    if (tp_descripcion) {
        conexion.query('INSERT INTO tbl_estado SET ?', {av_id:av_id, av_descripcion, av_estado, fk_rut}, function(error, result){
            if (error) throw error;
            res.redirect('/')
        });
    } else {

    }
}