const express  = require('express')
const router = express.Router()
const authController = require('../controller/authController');
const adminController = require('../controller/adminController');
const { panelPrincipal, accesoPrincipal, registroPrincipal, panelAdmin, registroAdmin, accesoAdmin, vistasAdmin, graficosAdmin, usuarioAdmin, triggersAdmin, editAdmin, deleteAdmin, logAdmin} = require('../controller/pageController');

//------------------------------Panel Principal----------------------------------//

router.get('/', authController.protected, panelPrincipal)
router.get('/accesoPrincipal', accesoPrincipal)
router.get('/registroPrincipal', registroPrincipal);

router.post('/registroPrincipal', authController.register);
router.post('/accesoPrincipal', authController.login)


//-----------------------------Panel Administrativo------------------------------//

router.get('/panelAdmin', adminController.protectedAdmin, panelAdmin)
router.get('/registroAdmin', adminController.accesoAdmin, registroAdmin)
router.get('/accesoAdmin', accesoAdmin)
router.get('/vistasAdmin', adminController.tablaPersona, vistasAdmin);
router.get('/graficosAdmin', graficosAdmin);
router.get('/usuarioAdmin', usuarioAdmin);
router.get('/logAdmin', logAdmin)
router.get('/triggersAdmin', adminController.triggersAdmin, triggersAdmin);
router.get('/editAdmin/:a_id', adminController.preupdateAdmin, editAdmin);
router.get('/deleteAdmin/:a_id', adminController.deleteAdmin, deleteAdmin);

router.post('/registroAdmin', adminController.registroAdmin);
router.post('/editAdmin', adminController.editAdmin);
router.post('/accesoAdmin', adminController.accesoAdmin);
router.get('/logoutAdmin', adminController.logoutAdmin);

module.exports = router