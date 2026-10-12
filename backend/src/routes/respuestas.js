import express from "express";
import { existeRespuesta, insertarRespuesta, obtenerTodas } from "../dao/respuestasDAO.js";
import { examenes } from "../data/examenes/index.js";

// CREAR ROUTER
export const router = express.Router();

// DECLARAR POST
router.post("/", (req, res) => {
    const { apellido, nombre, materia, parcial, sede, jornada, respuestas } = req.body;

    if (!apellido || !nombre || !materia || !parcial || !sede || !jornada || !respuestas) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const preguntas = examenes[materia]?.[parcial];
    if (!preguntas) {
        return res.status(404).json({ error: "Examen no encontrado" });
    }

    const yaExiste = existeRespuesta(apellido, nombre, materia, parcial, sede, jornada);
    if (yaExiste) {
        return res.status(409).json({ error: "Ya has respondido este examen" });
    }

    let puntaje = 0;
    const correcciones = [];

    preguntas.forEach((p, i) => {
        const campo = `p${i + 1}`;
        const respuestaEstudiante = respuestas[campo];

        if (respuestaEstudiante === p.correcta) {
            puntaje++;
        } else {
            correcciones.push({
                numero: i + 1,
                tuRespuesta: respuestaEstudiante || "sin responder",
                correcta: p.correcta
            });
        }
    });

    insertarRespuesta(apellido, nombre, materia, parcial, sede, jornada, puntaje, respuestas);

    res.status(201).json({ mensaje: "Respuesta guardada", puntaje, correcciones });
});

// DECLARAR GET
router.get("/", (req, res) => {
    const todas = obtenerTodas();
    res.json(todas);
});