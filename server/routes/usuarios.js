const express = require('express');
const app = express();

app.get('/usuarios', function (req, res) {
    res.json({
        ok: 200,
        mensaje: 'usuarios consultados con éxito'
    });
});


app.post('/usuarios', function(req, res){
    let nombre = req.body.nombre;
    let body = req.body;

    if(nombre === undefined){
        res.status(400).json({
            ok: 400,
            mensaje: 'favor de enviar el valor del nombre'
        });
    }else{

        res.json({
            ok: 200,
            mensaje: 'Usuario insertado con éxito',
            body: body
        });
    }
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