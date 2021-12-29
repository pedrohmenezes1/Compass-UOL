import express from "express";
import apiRotas from "./api/index.js";

const principalRota = express.Router();

principalRota.use("/api/", apiRotas);

export default principalRota;