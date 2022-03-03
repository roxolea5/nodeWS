const express = require('express');
const message = require('../components/message/network')


const routes = function(server){
    server.use('/message', message) //con esto cada que se llame ala ruta message se llama al componente de message 
}

module.exports = routes;