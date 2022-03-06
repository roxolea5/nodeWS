const Model = require('./model');

function addChat(users){
    const chatUsers = new Model(users);
    console.log(users)
    return chatUsers.save(users)
}

function getChats(){
    return new Promise((resolve, reject) => {
        Model.find()
            .populate('users')
            .exec((error, populated) => {
                if (error){
                    return reject(error)
                }
                resolve(populated)
            });
    })
}

module.exports = {
    add: addChat,
    list: getChats
}

