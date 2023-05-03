const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    apellido: String,
    cc: String,
    correo: String,
    telefono: String,
    edad: String,
    sexo: String,
    tipoVinculo: String,
    formacion: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

//prueba
/*
router.get('/ejemplo', (req,res) => {
    res.end('ejemplo carga conexcion')
})
*/

//Crear usuario

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario ({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cc: req.body.cc,
    correo: req.body.correo,
    telefono: req.body.telefono,
    edad: req.body.edad,
    sexo: req.body.sexo,
    tipoVinculo: req.body.tipoVinculo,
    formacion: req.body.dormacion,
    idusuario: req.body.idusuario
    })
    nuevousuario.save()
        .then(result => {
            res.send('usuario agregado correctamente');
        })
        .catch(error => {
            res.send(error);
        });
})

//Lista de usuarios
router.get('/obtenerusuarios', (req,res)=> {
    ModeloUsuario.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(error => {
            res.send(error);
        });
});


