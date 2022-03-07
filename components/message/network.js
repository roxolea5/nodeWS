// Recibirá petición HTTP, procesará la información y la enviará al controlador

//Se importa express para crear el router
const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();



router.get('/', function(req, res){
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
    
});

router.post('/', function(req, res){
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    //Agregamos esto para trabajar con la promesa del controlador
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res, 'Información inválida', 400, 'Error en el controlador');
    });
});

router.patch('/:id', function(req, res){
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })

});

router.get('/:id', function(req, res){
    console.log(req.params.id);

    controller.getSingleMessage(req.params.id)
        .then((singleMessage) => {
            response.success(req, res, singleMessage, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })

});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
});

module.exports = router;

