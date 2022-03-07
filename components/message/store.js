const Model = require('./model');

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message)
    myMessage.save()
}; //js puro

async function getMessages(filterChat){
    console.log('entra')    
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat !== null){
            //filter = { user: filterChat }; //así da errores porque toma el filtro y lo busca en el campo user, debe ser en el campo chat Ya no se puede poner el user name en query params porque ya hay una relacion y busca al object id no al nombre
            filter = { chat: filterChat };
        } 
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error){
                    return reject(error)
                }
                resolve(populated)
            });//permite ejecutar el populate
    })
    
}

async function updateText(id, message){
    const foundmessage = await Model.findOne({
        _id:id
    }); // o findById(id) en vez de findOne({_id: id})

    foundmessage.message = message;
    const newMessage = await foundmessage.save();
    return newMessage;
}

async function getMessage(id, message){
    const foundmessage = await Model.findById(id)

    return foundmessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    getOne: getMessage,
    updateText,
    remove: removeMessage
    
}