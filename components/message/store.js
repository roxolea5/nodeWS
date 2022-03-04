const list = [] //lista para guardar mensajes

function addMessage(message) {
    list.push(message);
}; //js puro

function getMessages(){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}