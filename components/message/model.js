const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

// todo lo que se creara tendra ese schema con la base de datos
const model = mongoose.model('Message', mySchema)

module.exports = model;