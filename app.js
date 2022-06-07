const express  = require('express');
const session = require('express-session')
const path = require('path');
const dotenv =  require('dotenv');
const loggerHTTP =  require('morgan');

const app = express();
var fs = require('fs'); var util = require('util');
const { set } = require('express/lib/application');
var log_file = fs.createWriteStream(__dirname + '/public/node.log', {flags : 'a'});
app.use(loggerHTTP({stream: log_file}));
app.use(loggerHTTP('dev'));
//seteamos el motor de plantillas
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


//para poder trabajar con cookies
//app.use(cookieParser())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Escribimos el error
	log_file.write(err.stack)

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

//Llamar al router
app.use('/', require('./routes/router'));



app.listen(3000, ()=>{
    console.log('SERVER UP running in http://localhost:3000');
})