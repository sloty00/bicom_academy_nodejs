const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db');
const {promisify} = require('util');
const { ifError } = require('assert');

exports.register = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass
        const type = 1
        let passHash = await bcryptjs.hash(pass, 8);
        //console.log(user + " " + passHash + " " + type);
        conexion.query('INSERT INTO tbl_acceso SET ?', {a_cuenta:user, a_password:passHash, fk_tipo:type}, (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/')
            }
        });
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass

        if(!user || !pass){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un Usuario y Contraseña",
                ruta: 'login',
            })
        }
    } catch (error) {
        console.log(error);
    }
}