
const vistasGeneral = (req, res)=>{
    res.render('admin/vistasGeneral')
}

const vistasAdmin = (req, res)=>{
    res.render('admin/vistasAdmin')
}

const vistasPersona = (req, res)=>{
    res.render('admin/vistasPersona')
}

const usuarioAdmin = (req, res)=>{
    res.render('admin/usuarioAdmin')
}

const triggerAdmin = (req, res) =>{
    res.render('admin/triggersAdmin')
}

const logAdmin = (req, res) =>{
    res.render('admin/logAdmin')
}

const editAdminTip = (req, res) =>{
    res.render('admin/editAdminTipo')
}

const editAdminAdm = (req, res) =>{
    res.render('admin/editAdminAdm')
}

const editAdminPerf = (req, res) =>{
    res.render('admin/editAdminPerfil')
}

const editAdminPai = (req, res) =>{
    res.render('admin/editAdminPais')
}

const editAdminReg = (req, res) =>{
    res.render('admin/editAdminRegion')
}

const editAdminProv = (req, res) =>{
    res.render('admin/editAdminProvincia')
}

const editAdminCom = (req, res) =>{
    res.render('admin/editAdminComuna')
}

const deshabilitarAcc = (req, res) =>{
    res.render('admin/deshabilitarAcceso')
}

const habilitarAcc = (req, res) =>{
    res.render('admin/habilitarAcceso')
}

const contenido1 = (req, res) =>{
    res.render('contenido1');
}

const contenido2 = (req, res) =>{
    res.render('contenido2');
}

const contenido3 = (req, res) =>{
    res.render('contenido3');
}

const contenido4 = (req, res) =>{
    res.render('contenido4');
}

const contenido5 = (req, res) =>{
    res.render('contenido5');
}

const contenido6 = (req, res) =>{
    res.render('contenido6');
}

const contenido7 = (req, res) =>{
    res.render('contenido7');
}

const prueba = (req, res) =>{
    res.render('prueba');
}


module.exports = {
    vistasGeneral,
    vistasAdmin,
    vistasPersona,
    usuarioAdmin,
    triggerAdmin,
    logAdmin,
    editAdminTip,
    editAdminAdm,
    editAdminPerf,
    editAdminPai,
    editAdminReg,
    editAdminProv,
    editAdminCom,
    deshabilitarAcc,
    habilitarAcc,
    contenido1,
    contenido2,
    contenido3,
    contenido4,
    contenido5,
    contenido6,
    contenido7,
    prueba
}