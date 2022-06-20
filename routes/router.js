const express  = require('express')
const router = express.Router()
const {protected, protected1, register, login, logout, protected3, protected2, protected4, protected5, protected6, protected7 } = require('../controller/authController');
const { registroAdmin, accesoAdmin, protectedAdmin, protectedReg, logoutAdmin } = require ('../controller/adminController');
const { registroMantenedor, tablaGeneral, vistaAdmin, vistaPersona, ususarioAdminDrop, preupdateAdminTipo, preupdateAdminAdmin, preupdateAdminPerfil, preupdateAdminPais, preupdateAdminRegion, preupdateAdminProvincia, preupdateAdminComuna, editAdminTipo, editAdminAdmin, editAdminPerfil, editAdminPais, editAdminRegion, editAdminProvincia, editAdminComuna, deshabilitarAcceso, habilitarAcceso, triggersAdmin, uploadImage, registroAvance, vistaAvance, calificacion_video, vistaContenidos, vistaContenido1, vistaContenido2, vistaContenido3, vistaContenido4, vistaContenido5, vistaContenido6, vistaContenido7, perfilUsuario, perfilUsuarioC, perfilUsuarioP } = require ('../controller/cursoController');
const { panelPrincipal, accesoPrincipal, registroPrincipal} = require('../middleware/authMiddleware');
const { registroAdm, accesoAdm, editAdminTip, editAdminAdm, editAdminPerf, editAdminPai, editAdminReg, editAdminProv, editAdminCom, deshabilitarAcc, habilitarAcc, logAdmin} = require('../middleware/adminMiddleware');
const { contenido1, calificaciones } = require('../middleware/cursoMiddleware');
//------------------------------Panel Principal----------------------------------//

router.get('/', protected, panelPrincipal);
router.get('/contenido1', vistaContenido1);
router.get('/contenido2', vistaContenido2);
router.get('/contenido3', vistaContenido3);
router.get('/contenido4', vistaContenido4);
router.get('/contenido5', vistaContenido5);
router.get('/contenido6', vistaContenido6);
router.get('/contenido7', vistaContenido7);
router.get('/perfilUsuario', perfilUsuarioC);
router.get('/calificaciones', calificacion_video);
router.get('/accesoPrincipal', accesoPrincipal);
router.get('/registroPrincipal', registroPrincipal);
router.get('/logout', logout);

router.post('/registroPrincipal', register)
router.post('/accesoPrincipal', login)
router.post('/contenido1', registroAvance)
router.post('/contenido7', registroAvance)
router.post('/perfilUsuario',perfilUsuario)

//-----------------------------Panel Administrativo------------------------------//

router.get('/panelAdmin', protectedAdmin);
router.get('/registroAdm', protectedReg, registroAdm);
router.get('/accesoAdm', accesoAdm);
router.get('/vistasGeneral', tablaGeneral);
router.get('/vistasAdmin', vistaAdmin);
router.get('/vistasPersona', vistaPersona);
router.get('/usuarioAdmin', ususarioAdminDrop);
router.get('/logAdmin', logAdmin)
router.get('/triggerAdmin', triggersAdmin);
router.get('/editAdminTip/:tp_id', preupdateAdminTipo, editAdminTip);
router.get('/editAdminAdm/:a_id', preupdateAdminAdmin, editAdminAdm);
router.get('/editAdminPerf/:p_rut', preupdateAdminPerfil, editAdminPerf);
router.get('/editAdminPai/:pa_cut', preupdateAdminPais, editAdminPai);
router.get('/editAdminReg/:r_cut', preupdateAdminRegion, editAdminReg);
router.get('/editAdminProv/:p_cut', preupdateAdminProvincia, editAdminProv);
router.get('/editAdminCom/:c_cut', preupdateAdminComuna, editAdminCom);

router.get('/deshabilitarAcc/:a_id', deshabilitarAcceso,  deshabilitarAcc);
router.get('/habilitarAcc/:a_id', habilitarAcceso,  habilitarAcc);

router.post('/registroAdm', registroAdmin);
router.post('/usuarioAdmin', uploadImage.single('images1'), registroMantenedor);
router.post('/editAdminTip', editAdminTipo);
router.post('/editAdminAdm', editAdminAdmin);
router.post('/editAdminPerf', editAdminPerfil);
router.post('/editAdminPai', editAdminPais);
router.post('/editAdminReg', editAdminRegion);
router.post('/editAdminProv', editAdminProvincia);
router.post('/editAdminCom', editAdminComuna);
router.post('/accesoAdm', accesoAdmin);
router.get('/logoutAdm', logoutAdmin);

module.exports = router