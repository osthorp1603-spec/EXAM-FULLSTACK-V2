import express from "express";
import cors from "cors"
import {router as preguntasRouter} from "./routes/preguntas.js"
import {router as respuestasRouter} from "./routes/respuestas.js"
import { crearTabla } from "./dao/respuestasDAO.js";
// TODO: agregar router de token cuando se implemente routes/token.js

export const app = express();

app.use(cors());
app.use(express.json()),

crearTabla();

app.use("/api/preguntas",preguntasRouter);
app.use("/api/respuestas",respuestasRouter);





