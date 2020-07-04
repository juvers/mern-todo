const mongoose = require('mongoose');

const Schema = mongoose.schema;


const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;