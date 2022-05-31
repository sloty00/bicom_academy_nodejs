//--------------------------Panel Administracion-----------------------------//

const panelAdmin = (req, res) =>{
    res.render('admin/panelAdmin')
}

const registroAdm = (req, res) =>{
    res.render('admin/registroAdmin', {message:false})
}

const accesoAdm = (req, res) =>{
    res.render('admin/accesoAdmin', {message:false})
}

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

module.exports = {
    panelAdmin,
    registroAdm,
    accesoAdm,
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
    habilitarAcc
}