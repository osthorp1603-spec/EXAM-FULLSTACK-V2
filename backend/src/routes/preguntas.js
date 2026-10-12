// Express para crear el router - Objeto con todos los exámenes (materia -> parcial -> preguntas)
import express from "express";
import { examenes } from "../data/examenes/index.js";

// CREAR ROUTER
export const router = express.Router();

// RUTA GET /
router.get("/", (req, res) => { 
  const { materia, parcial } = req.query;  //viene de: ESTADO FORMULARIO frontend RegistroDatos
  const preguntas = examenes[materia]?.[parcial];  
  if (!preguntas) {
    return res.status(404).json({ error: "Examen no encontrado" });
  }  
  const preguntasLimpias = preguntas.map((p) => ({
    enunciado: p.enunciado,
    opciones: p.opciones
  }));
  // DEVOLVER JSON
  res.json(preguntasLimpias);
});