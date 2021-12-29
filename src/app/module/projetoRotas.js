import express from "express";
import projectController from "./projetoController.js";
import { funcaoAssincrona } from "../../utils/funcaoAssisncrona.js";

const crudRotas = express.Router();

// Criar projetos
crudRotas.post("/projects", funcaoAssincrona(projectController.criar));

//Listar todos (projetos e tarefas(Array))
crudRotas.get("/projects", funcaoAssincrona(projectController.listar));

//Listar por ID
crudRotas.get("/projects/:projectId", funcaoAssincrona(projectController.listarPorId));

//Atualizar projetos e tarefas
crudRotas.put("/projects/:projectId", funcaoAssincrona(projectController.atualizar));

//Deletar projetos e tarefas
crudRotas.delete("/projects/:projectId", funcaoAssincrona(projectController.deletar));

export { crudRotas };