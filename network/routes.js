const express = require('express');
const message = require('../components/message/network')
const user = require('../components/user/network')


const routes = function(server){
    server.use('/message', message); //con esto cada que se llame ala ruta message se llama al componente de message 
    server.use('/user', user)
}

module.exports = routes;