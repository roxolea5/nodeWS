const express = require('express');
const message = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')


const routes = function(server){
    server.use('/message', message); //con esto cada que se llame a la ruta message se llama al componente de message 
    server.use('/user', user);
    server.use('/chat', chat)
}

module.exports = routes;