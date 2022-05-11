const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db');
const {promisify} = require('util');
const { ifError } = require('assert');
const { resourceLimits } = require('worker_threads');

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
            res.render('login');
        } else {
            conexion.query('SELECT * FROM tbl_acceso WHERE a_cuenta = ?', [user], async (error, result)=>{
                if( result.length == 0 || ! (await bcryptjs.compare(pass, result[0].pass)) ){
                    res.render('login');
                }else{
                    const id = result[0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_TIME_EXPIRE
                    })

                    const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions)
                    res.render('/')
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}