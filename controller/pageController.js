//--------------------------Panel Administracion-----------------------------//

const panelAdmin = (req, res) =>{
    res.render('admin/panelAdmin')
}

const registroAdmin = (req, res) =>{
    res.render('admin/registroAdmin', {message:false})
}

const accesoAdmin = (req, res) =>{
    res.render('admin/accesoAdmin', {message:false})
}

const vistasAdmin = (req, res)=>{
    res.render('admin/vistasAdmin')
}

const graficosAdmin = (req, res)=>{
    res.render('admin/graficosAdmin')
}

const usuarioAdmin = (req, res)=>{
    res.render('admin/usuarioAdmin')
}

const triggersAdmin = (req, res) =>{
    res.render('admin/triggersAdmin')
}

const logAdmin = (req, res) =>{
    res.render('admin/logAdmin')
}

const editAdmin = (req, res) =>{
    res.render('admin/editAdmin')
}

const deleteAdmin = (req, res) =>{
    res.render('admin/deleteAdmin')
}

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

//---------------------------Exportar-----------------------------------//

module.exports = {
    panelAdmin,
    registroAdmin,
    accesoAdmin,
    vistasAdmin,
    graficosAdmin,
    usuarioAdmin,
    triggersAdmin,
    logAdmin,
    editAdmin,
    deleteAdmin,
    //--------------------//
    panelPrincipal,
    accesoPrincipal,
    registroPrincipal
}