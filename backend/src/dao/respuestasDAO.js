import { db } from "../config/db.js";

// Crea la tabla respuestas si no existe
export const crearTabla = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS respuestas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            apellido TEXT NOT NULL,
            nombre TEXT NOT NULL,
            materia TEXT NOT NULL,
            parcial TEXT NOT NULL,
            sede TEXT NOT NULL,
            jornada TEXT NOT NULL,
            puntaje INTEGER NOT NULL,
            respuestas TEXT NOT NULL,
            UNIQUE(apellido, nombre, materia, parcial, sede, jornada)
        )
    `);
};

// Verifica si ya existe una respuesta con esos datos
export const existeRespuesta = (apellido, nombre, materia, parcial, sede, jornada) => {
    const fila = db.prepare(`
        SELECT id FROM respuestas
        WHERE apellido = ? AND nombre = ? AND materia = ? AND parcial = ? AND sede = ? AND jornada = ?
    `).get(apellido, nombre, materia, parcial, sede, jornada);

    return !!fila;
};

// Inserta una respuesta nueva
export const insertarRespuesta = (apellido, nombre, materia, parcial, sede, jornada, puntaje, respuestas) => {
    const resultado = db.prepare(`
        INSERT INTO respuestas (apellido, nombre, materia, parcial, sede, jornada, puntaje, respuestas)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(apellido, nombre, materia, parcial, sede, jornada, puntaje, JSON.stringify(respuestas));
    return resultado;
};

// Devuelve todas las respuestas para el admin
export const obtenerTodas = () => {
    return db.prepare(`
        SELECT * FROM respuestas
        ORDER BY id DESC
    `).all();
};