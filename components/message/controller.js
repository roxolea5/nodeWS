//Primera función: añadir un nuevo mensaje

const store = require('./store');

function addMessage(chat, user, message){
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[message controller] No hay chat, usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        };
        console.log(fullMessage);
        store.add(fullMessage); //se comunica con la bd mockeada
        resolve(fullMessage);
    });    
}

function getMessages(filterChat){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if (!id || !message){
            return reject('Invalid data');
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })
}

function getSingleMessage(id){
    return new Promise(async (resolve, reject) => {
        if (!id){
            return reject('Invalid request')
        }
        const result = await store.getOne(id);
        resolve(result);
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if (!id){
            return reject('ID incorrecto')
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    getSingleMessage,
    deleteMessage
}