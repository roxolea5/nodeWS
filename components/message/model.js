const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User', 
    },
    // user: 
    // [{ type: Schema.ObjectId, ref: 'User'}] 
    // ,
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

// todo lo que se creara tendra ese schema con la base de datos
const model = mongoose.model('Message', mySchema)

module.exports = model;