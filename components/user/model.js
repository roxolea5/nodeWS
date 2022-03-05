const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

// todo lo que se creara tendra ese schema con la base de datos
const model = mongoose.model('User', mySchema)

module.exports = model;