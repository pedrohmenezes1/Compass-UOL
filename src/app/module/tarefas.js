import mongoose from "mongoose";

const esquema = mongoose.Schema;

const tarefaEsquema = new esquema({
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

const tarefaModel = mongoose.model('tarefas', tarefaEsquema);
export { tarefaModel };