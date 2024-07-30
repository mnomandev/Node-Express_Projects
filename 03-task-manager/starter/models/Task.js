const mongoose = require('mongoose');   // Import mongoose

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must provide a name'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
          default: false,
    }})    // Create a schema


module.exports = mongoose.model('Task', TaskSchema);