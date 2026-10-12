import { useEffect } from "react";
import { API_URL } from "../config/examen";

export const usePulso = () => {
  useEffect(() => {
    const mantenerActivo = setInterval(() => {
      fetch(`${API_URL}/api/respuestas`)
        .then(() => console.log("⏳ Render activo"))
        .catch(() => console.log("⚠️ No se pudo mantener activo Render"));
    }, 60000); // 1 minuto

    return () => clearInterval(mantenerActivo);
  }, []);
};