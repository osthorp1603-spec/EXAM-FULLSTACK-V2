import { useState, useEffect } from "react";
import { usePulso } from "../hooks/usePulso";
import { API_URL } from "../config/examen";
import { VALOR_POR_PREGUNTA } from "../config/examen";
import "./Admin.css";

export const Admin = () => {
  usePulso();

  const [respuestas, setRespuestas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState("");

  const [filtroMateria, setFiltroMateria] = useState("Todas");
  const [filtroSede, setFiltroSede] = useState("Todas");
  const [filtroJornada, setFiltroJornada] = useState("Todas");

  useEffect(() => {
    const cargarRespuestas = async () => {
      try {
        const res = await fetch(`${API_URL}/api/respuestas`);
        if (!res.ok) {
          throw new Error("No se pudieron cargar los resultados");
        }
        const data = await res.json();
        setRespuestas(data);
      } catch (error) {
        setErrorCarga(error.message);
      } finally {
        setCargando(false);
      }
    };

    cargarRespuestas();
    const intervalo = setInterval(cargarRespuestas, 10000);
    return () => clearInterval(intervalo);
  }, []);

  // Convertir { p1: "b", p2: "a" } a "P1: b · P2: a · P3: c"
  const formatearRespuestas = (respuestasJSON) => {
    try {
      const obj = JSON.parse(respuestasJSON);
      return Object.entries(obj)
        .map(([clave, valor]) => `${clave.toUpperCase()}: ${valor}`)
        .join(" · ");
    } catch {
      return respuestasJSON;
    }
  };

  // Sacar valores únicos para los <select> de filtros
  const materiasUnicas = ["Todas", ...new Set(respuestas.map((r) => r.materia))];
  const sedesUnicas = ["Todas", ...new Set(respuestas.map((r) => r.sede))];
  const jornadasUnicas = ["Todas", ...new Set(respuestas.map((r) => r.jornada))];

  // Aplicar filtros
  const respuestasFiltradas = respuestas.filter((r) => {
    const coincideMateria = filtroMateria === "Todas" || r.materia === filtroMateria;
    const coincideSede = filtroSede === "Todas" || r.sede === filtroSede;
    const coincideJornada = filtroJornada === "Todas" || r.jornada === filtroJornada;
    return coincideMateria && coincideSede && coincideJornada;
  });

  // Estados de carga y error
  if (cargando) {
    return <div className="admin-mensaje">Cargando resultados...</div>;
  }

  if (errorCarga) {
    return <div className="admin-mensaje error">Error: {errorCarga}</div>;
  }

  return (
    <div className="admin-contenedor">
      <h1>Resultados del Examen</h1>

      <div className="admin-filtros">
        <label>
          Materia:
          <select value={filtroMateria} onChange={(e) => setFiltroMateria(e.target.value)}>
            {materiasUnicas.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Sede:
          <select value={filtroSede} onChange={(e) => setFiltroSede(e.target.value)}>
            {sedesUnicas.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label>
          Jornada:
          <select value={filtroJornada} onChange={(e) => setFiltroJornada(e.target.value)}>
            {jornadasUnicas.map((j) => (
              <option key={j} value={j}>{j}</option>
            ))}
          </select>
        </label>
      </div>

      {respuestasFiltradas.length === 0 ? (
        <p className="admin-mensaje">No hay resultados que coincidan con los filtros.</p>
      ) : (
        <table className="admin-tabla">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Materia</th>
              <th>Parcial</th>
              <th>Sede</th>
              <th>Jornada</th>
              <th>Nota</th>
              <th>Respuestas</th>
            </tr>
          </thead>
          <tbody>
            {respuestasFiltradas.map((r) => (
              <tr key={r.id}>
                <td>{r.apellido}</td>
                <td>{r.nombre}</td>
                <td>{r.materia}</td>
                <td>{r.parcial}</td>
                <td>{r.sede}</td>
                <td>{r.jornada}</td>
                <td>{(r.puntaje * VALOR_POR_PREGUNTA).toFixed(1).replace(".", ",")}</td>
                <td className="admin-respuestas">{formatearRespuestas(r.respuestas)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};