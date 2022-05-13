const express  = require('express')
const router = express.Router()
const authController = require('../controller/authController');
const adminController = require('../controller/adminController');

//router para las vistas
router.get('/', authController.protected, (req, res)=>{    
    res.render('index', {user:req.user})
})

router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})

router.get('/register', (req, res)=>{
    res.render('register',{alert:false});
})

router.get('/registerAdmin', (req, res)=>{
    res.render('registerAdmin',{alert:false})
})

router.get('/loginAdmin', (req, res)=>{
    res.render('loginAdmin', {alert:false})
})

router.get('/panelAdmin', authController.protected, (req, res)=>{    
    res.render('panelAdmin')
})


//router para los metodos del controller
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/registerAdmin', adminController.registerAdmin);
router.post('/loginAdmin', adminController.loginAdmin);
router.get('/logoutAdmin', adminController.logoutAdmin);


module.exports = router