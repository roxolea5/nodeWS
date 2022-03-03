// Recibirá petición HTTP, procesará la información y la enviará al controlador

//Se importa express para crear el router
const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();



router.get('/', function(req, res){
    response.success(req, res, 'Lista de mensajes', 202) //va a la respuesta success y me da la respuesta
    
});

router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message)
    //Agregamos esto para trabajar con la promesa del controlador
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res, 'Información inválida', 400, 'Error en el controlador');
    });
});

router.delete('/message', function(req, res){
    res.send('Mensaje borrado')
});

module.exports = router;

