const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : process.env.BC_HOST_MYSQL,
    user : process.env.BC_USER_MYSQL,
    password : process.env.BC_PASSWORD_MYSQL,
    database : process.env.BC_DATABASE_MYSQL,
})

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+(error));
        return
    } else {
        console.log('Se ha conectado con exito');
    }

})

module.exports = conexion;