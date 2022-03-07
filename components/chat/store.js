const Model = require('./model');

function addChat(users){
    const chatUsers = new Model(users);
    console.log(users)
    return chatUsers.save();
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

function listByUser(userId){
    return new Promise((resolve, reject) => {
        let filter = {}
        if (userId) {
            filter = {
                users: userId,
            }
        }
        Model.find(filter)
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
    list: getChats,
    listByUser
}

