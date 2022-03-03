// Recibirá petición HTTP, procesará la información y la enviará al controlador

//Se importa express para crear el router
const express = require('express');
const router = express.Router();
const response = require('../../network/response')


router.get('/', function(req, res){
    response.success(req, res, 'Lista de mensajes', 202) //va a la respuesta success y me da la respuesta
    
});

router.post('/', function(req, res){
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
    
});

router.delete('/message', function(req, res){
    res.send('Mensaje borrado')
});

module.exports = router;

