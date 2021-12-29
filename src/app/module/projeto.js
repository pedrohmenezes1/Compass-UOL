import mongoose from "mongoose";

const esquema = mongoose.Schema;

const projetoEsquema = new esquema({
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
        type: esquema.Types.ObjectId,
        ref: 'tarefas',
    }],
});

const projetoModel = mongoose.model("projetos", projetoEsquema);
export { projetoModel };