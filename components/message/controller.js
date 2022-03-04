//Primera función: añadir un nuevo mensaje

const store = require('./store');

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[message controller] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        console.log(fullMessage);
        store.add(fullMessage); //se comunica con la bd mockeada
        resolve(fullMessage);
    });    
}

function getMessages(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function updateMessage(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages
}