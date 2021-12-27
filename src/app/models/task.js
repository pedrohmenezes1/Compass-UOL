const mongoose = require('../../database');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    taskRelevance:{
        type: Number, min: 1, max: 10,
        require: true,
    },
    completed:{
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;