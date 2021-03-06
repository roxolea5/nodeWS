const store = require('./store')

function addChat(users){
    if (!users || users.length < 2 || !Array.isArray(users)) {
        new Promise.reject('Needed 2 or more users')
    }
    const chatUsers = {
        users: users
    } 

    return store.add(chatUsers)
}

function getChats(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
    
}

function getChatsUser(userId){
    return new Promise((resolve, reject) => {
        resolve(store.listByUser(userId));
    })
    
}


module.exports = {
    addChat,
    getChats,
    getChatsUser
}

