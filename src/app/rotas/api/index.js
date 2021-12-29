import express from "express";
import { crudRotas } from "../../module/projetoRotas.js";

const apiRotas = express.Router();

apiRotas.get("/", function(req, res, next) {
    res.json({ message: "index do api" });
});

apiRotas.use("/compasso", crudRotas);

export default apiRotas;