const express  = require('express')
const router = express.Router()
const {protected, register, login, logout } = require('../controller/authController');
const { registroAdmin, accesoAdmin, protectedAdmin, logoutAdmin } = require ('../controller/adminController');
const { registroMantenedor, tablaGeneral, vistaAdmin, vistaPersona, ususarioAdminDrop, preupdateAdminTipo, preupdateAdminAdmin, preupdateAdminPerfil, preupdateAdminPais, preupdateAdminRegion, preupdateAdminProvincia, preupdateAdminComuna, editAdminTipo, editAdminAdmin, editAdminPerfil, editAdminPais, editAdminRegion, editAdminProvincia, editAdminComuna, deshabilitarAcceso, habilitarAcceso, triggersAdmin, uploadImage } = require ('../controller/cursoController');
const { panelPrincipal, accesoPrincipal, registroPrincipal} = require('../middleware/authMiddleware');
const { panelAdmin, registroAdm, accesoAdm, vistasGeneral, vistasAdmin, vistasPersona, usuarioAdmin, triggerAdmin, editAdminTip, editAdminAdm, editAdminPerf, editAdminPai, editAdminReg, editAdminProv, editAdminCom, deshabilitarAcc, habilitarAcc, logAdmin} = require('../middleware/adminMiddleware');
//------------------------------Panel Principal----------------------------------//

//router.get('/', authController.protected, panelPrincipal)
router.get('/', protected, panelPrincipal);
router.get('/accesoPrincipal', accesoPrincipal);
router.get('/registroPrincipal', registroPrincipal);
router.get('/logout', logout);

router.post('/registroPrincipal', register);
router.post('/accesoPrincipal', login)


//-----------------------------Panel Administrativo------------------------------//

router.get('/panelAdmin', panelAdmin);
//router.get('/registroAdmin', adminController.accesoAdmin, registroAdmin);
router.get('/registroAdm', registroAdm);
router.get('/accesoAdm', accesoAdm);
router.get('/vistasGeneral', tablaGeneral, vistasGeneral);
router.get('/vistasAdmin', vistaAdmin, vistasAdmin);
router.get('/vistasPersona', vistaPersona, vistasPersona);
router.get('/usuarioAdmin', ususarioAdminDrop, usuarioAdmin);
router.get('/logAdmin', logAdmin)
router.get('/triggerAdmin', triggersAdmin, triggerAdmin);
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