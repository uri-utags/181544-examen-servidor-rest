const express = require('express');
const Usuarios = require('../models.js/usuarios'); 
const app = express();

app.get('/usuarios', function (req, res) {
    res.json({
        ok: 200,
        mensaje: 'usuarios consultados con éxito'
    });
});


app.post('/usuarios', function(req, res){
    let body = req.body;
    let usrs = new Usuarios ({
        nombre: body.nombre,
        primer_apellido: body.primer_apellido,
        segundo_apellido: body.segundo_apellido,
        edad: body.edad,
        curp: body.curp,
        telefono: body.telefono,
        mail: body.mail
    });

    usrs.save((err, usrsDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                mensaje: 'Ocurrio un error',
                err
            });
        }

        res.json({
            ok: true,
            msj: 'Usuario insertado con exito',
            usrsDB 
        });
    });
});

app.put('/usuarios/:id/:nombre', function(req, res){
    let id = req.params.id;
    let nombre = req.params.nombre;

    res.json({
        ok: 200, 
        mensaje: 'Uusario actualizado con exito',
        id: id,
        nombre: nombre
    });
});

app.delete('/usuarios/id:', function(req, res){
    let id = req.params.id;

    res.json({
        ok: 200,
        mensaje: 'Usuario eliminado con exito',
        id: id 
    });
});

module.exports = app; 