const mongoose = require('../../database');

const ProjectSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;