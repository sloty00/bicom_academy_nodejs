//--------------------------Panel Principal-----------------------------//

const panelPrincipal = (req, res) =>{
    res.render('panelPrincipal');
}

const accesoPrincipal = (req, res) =>{
    res.render('accesoPrincipal', {message:false});
}

const registroPrincipal = (req, res) =>{
    res.render('registroPrincipal', {message:false});
}

module.exports = {
    panelPrincipal,
    accesoPrincipal,
    registroPrincipal
}