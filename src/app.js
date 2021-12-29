import express from "express";
import config from "config";
import principalRota from "./app/rotas/index.js";
import conectarMongo from "./database/conectarMongo.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Conectar ao MongoDB
conectarMongo();

app.use("/", principalRota);

app.listen(config.get('app.port'), () => console.log('A API do projeto está funcionando!'));