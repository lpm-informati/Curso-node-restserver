const {response, request} = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;
    
    res.json({
        msg: 'Get Api - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body; 

    res.json({
        msg: 'Post Api - Controlador',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {
    
    const {id} = req.params;

    res.json({
        msg: 'Put Api - Controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api - Controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch Api - Controlador'
    });
}

module.exports = {
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch
};