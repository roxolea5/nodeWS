const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save()
}

async function getUsers(user){
    const userList = await Model.find();
    return userList;
}

module.exports = {
    add: addUser,
    list: getUsers,
    // getOne: getMessage,
    // updateText,
    // remove: removeMessage
    
}