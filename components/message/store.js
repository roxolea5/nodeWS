const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://rotz05:rotz050990@cluster0.qgnvy.mongodb.net/NodeAPI',{
    useNewUrlParser: true,
});

console.log('[db] Conectada con éxito')

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message)
    myMessage.save()
}; //js puro

async function getMessages(){
    //return list;
    const messages = await Model.find();
    return messages;
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

module.exports = {
    add: addMessage,
    list: getMessages,
    getOne: getMessage,
    updateText
    //delete
}