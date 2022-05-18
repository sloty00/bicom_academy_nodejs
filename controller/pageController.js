const panelAdmin = (req, res) =>{
    res.render('admin/panelAdmin', {alert:false})
}

const registroAdmin = (req, res) =>{
    res.render('admin/registroAdmin', {alert:false})
}

const accesoAdmin = (req, res) =>{
    res.render('admin/accesoAdmin', {alert:false})
}

const panelPrincipal = (req, res) =>{
    res.render('panelPrincipal', {alert:false })
}

const accesoPrincipal = (req, res) =>{
    res.render('accesoPrincipal', {alert:false })
}

const registroPrincipal = (req, res) =>{
    res.render('registroPrincipal', {alert:false })
}

module.exports = {
    panelAdmin,
    registroAdmin,
    accesoAdmin,
    panelPrincipal,
    accesoPrincipal,
    registroPrincipal
}