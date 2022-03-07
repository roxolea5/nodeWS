const socketIO = require('socket.io');
const socket = {}  //generar socket como un objeto y cada que cualquier cosa cambie la variable estará actualizada


function connect(server){
    socket.io = socketIO(server)
};

module.exports = {
    connect,
    socket
}