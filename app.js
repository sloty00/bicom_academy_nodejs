const express  = require('express');
const dotenv =  require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

//seteamos el motor de plantillas
app.set('view engine', 'ejs');

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'));

//para poder trabajar con cookies
app.use(cookieParser())

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//Llamar al router
app.use('/', require('./routes/router'));

app.listen(3000, ()=>{
    console.log('SERVER UP running in http://localhost:3000');
})