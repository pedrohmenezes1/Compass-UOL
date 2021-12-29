import { tarefaModel } from "./tarefas.js";
import { projetoModel } from "./projeto.js";

const projectController = {};


 projectController.listar =  async (req, res) => {
    try {
        const projects = await projetoModel.find().populate(['tasks']);

        return res.status(200).send({ projects });
    }   catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar os projetos'});
    }
};
 
projectController.listarPorId = async (req, res) => {
    try {
        const project = await projetoModel.findById(req.params.projectId).populate(['tasks']);

        return res.status(200).send({ project });
    }   catch (err) {
        return res.status(400).send({ error: 'Erro ao carregar o projeto'});
    }
};

projectController.criar = async (req, res, next) => {
    try {
        const { title, description, tasks } = req.body

        const project = await projetoModel.create({ title, description });

        await Promise.all(tasks.map(async task => {
            const tarefaProjeto = new tarefaModel({ ...task, project: project._id });

            await tarefaProjeto.save();

            project.tasks.push(tarefaProjeto);
        }));

        await project.save();
 
      return res.status(201).send({ project });
      
    } catch (err) {
      return res.status(400).send({ error: 'Erro ao criar novo projeto'});
    } 
};

projectController.atualizar = async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await projetoModel.findByIdAndUpdate(req.params.projectId, {
         title, 
         description, 
    }, { new : true});

    project.tasks = [];
    await tarefaModel.deleteOne({ projeto: project.id });


        await Promise.all(tasks.map(async task => {
            const tarefaProjeto = new tarefaModel({ ...task, project: project._id });

            await tarefaProjeto.save();

            project.tasks.push(tarefaProjeto);
        }));

        await project.save();


        return res.status(200).send({ project });
    }   catch (err) {
        return res.status(404).send({ error: 'Erro ao atualizar projeto'});
    }
};

projectController.deletar = async (req, res) => {
    try {
        await projetoModel.findByIdAndRemove(req.params.projectId);

        return res.status(204).send();
    }   catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir projeto'});
    }
};

export default projectController;