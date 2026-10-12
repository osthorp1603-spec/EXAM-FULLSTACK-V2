import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VALOR_POR_PREGUNTA, TIEMPO_EXAMEN, API_URL } from "../config/examen";
import { usePulso } from "../hooks/usePulso";
import "./Examen.css";

export const Examen = () => {
    usePulso();
    
    const navigate = useNavigate();

    // Obtener materia y parcial guardados
    const materia = localStorage.getItem("materia") || "";
    const parcial = localStorage.getItem("parcial") || "";    

    // Pregunta actual
    const [indiceActual,setIndiceActual] = useState(0);
    // Respuestas del estudiante { p1: "a", p2: "b" }
    const [respuestas, setRespuestas] = useState({});
    // Tiempo del examen
    const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_EXAMEN);
    // valor de la nota
    const [resultado, setResultado] = useState(null); 
     // Mostrar/ocultar errores
    const [mostrarErrores, setMostrarErrores] = useState(false);
    //preguntas del backend
    const [preguntas, setPreguntas] = useState([]);
    const [cargando,setCargando] = useState(true);
    const [errorCarga, setErrorCarga] = useState("");

    
    const handleSeleccion = (e) => {
      const nombreCampo = `p${indiceActual + 1}`;
      setRespuestas({
        ...respuestas,
        [nombreCampo]: e.target.value
      });
    };

    const handleSiguiente = () => {
      const nombreCampo = `p${indiceActual + 1}`;
      if (!respuestas[nombreCampo]) {
        alert("⚠️ Debes seleccionar una respuesta");
        return;
      }
      setIndiceActual(indiceActual + 1);
    };

    // ENVIO DE REPSUTEAS AL BACKEND
    const enviarExamen = async (forzar = false) => {
      const nombreCampo = `p${indiceActual + 1}`;
      if (!forzar && !respuestas[nombreCampo]) {
        alert("⚠️ Debes seleccionar una respuesta antes de enviar.");
        return;
      }         
      const apellido = localStorage.getItem("apellido") || "";
      const nombre = localStorage.getItem("nombre") || "";
      const sede = localStorage.getItem("sede") || "";
      const jornada = localStorage.getItem("jornada") || ""; 

      try {
        const res = await fetch(`${API_URL}/api/respuestas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            apellido,
            nombre,
            materia,
            parcial,
            sede,
            jornada,
            respuestas            
          })
        });
        if (!res.ok) {
          throw new Error("Error al enviar el examen");          
        }
        const data = await res.json();
        setResultado({
          puntaje:data.puntaje,
          nota: data.puntaje * VALOR_POR_PREGUNTA,
          correcciones: data.correcciones
        });
      } catch (error) {
        alert("⚠️ Hubo un error al guardar tu examen.");
        console.error(error);
      }
    };

    // USEEFFECT API
    useEffect(() => {
      const cargarPreguntas = async () => {
        try {
          const res = await fetch(`${API_URL}/api/preguntas?materia=${materia}&parcial=${parcial}`);  

          if (!res.ok) {
            throw new Error("No se pudieron cargar las preguntas");
          }     
            
          const data = await res.json();
          setPreguntas(data);
        } catch (error) {
          setErrorCarga(error.message);
        } finally {
          setCargando(false);
        }
      };
      cargarPreguntas();
    },[materia, parcial]);
    
    // USEEFFECT DEL TEMPORIZADOR
    useEffect(() => {
      if (tiempoRestante <= 0) {
        enviarExamen(true);
        return;
      }

      const intervalo = setInterval(() => {
        setTiempoRestante((t) => t-1);
      },1000);

      return () => clearInterval(intervalo);
    },[tiempoRestante]);

    // USEEFFECT DEL BLOQUEAR COPY AND PASTE
    useEffect(() => {
      const bloquear = (e) => e.preventDefault();

      document.addEventListener("copy", bloquear);
      document.addEventListener("cut", bloquear);
      document.addEventListener("paste", bloquear);

      return () => {
        document.removeEventListener("copy", bloquear);
        document.removeEventListener("cut", bloquear);
        document.removeEventListener("paste", bloquear);
      };
    }, []);

    // ESTADOS DE CARGA
    if (cargando) {
      return <div>Cargando preguntas...</div>;
    }

    if (errorCarga) {
      return <div>Error: {errorCarga}</div>
    }

    // Aviso si no hay preguntas
    if (preguntas.length === 0) {
      return <div>No hay preguntas disponibles.</div>;
    }
    // PANTALLA RESULTADOS
    if (resultado) {
    //JSX  
    return (
      <div className="contenedor-examen">
        <div className="resultado">
          <h2>✅ Examen enviado</h2>
          <p className="nota">
            Nota: {resultado.nota.toFixed(1).replace(".", ",")}
          </p>
          <p className="detalle">
            {resultado.puntaje} de {preguntas.length} respuestas correctas
          </p>
          <button onClick={() => setMostrarErrores(!mostrarErrores)}>
            {mostrarErrores ? "Ocultar errores" : "Ver respuestas incorrectas"}
          </button>
          {mostrarErrores && (
            <div className="errores">

              {resultado.correcciones.map((c) => {
                const pregunta = preguntas[c.numero - 1];
                
                // Sacar letra e índice de la opción elegida
                const letraEstudiante = c.tuRespuesta || "—";
                const indiceEstudiante = c.tuRespuesta && c.tuRespuesta !== "sin responder"
                  ? c.tuRespuesta.charCodeAt(0) - 97
                  : null;
                const indiceCorrecto = c.correcta.charCodeAt(0) - 97;
                // Mostrar pregunta, respuesta mal y respuesta correcta
                return (
                  <div key={c.numero} className="error-item">
                    <p className="error-pregunta">
                      {c.numero}. <span dangerouslySetInnerHTML={{ __html: pregunta.enunciado }} />
                    </p>
                    <p className="error-respuesta">
                      Tu respuesta:{" "}
                      <span className="marcada-incorrecta">
                        {indiceEstudiante !== null
                          ? `${letraEstudiante}. ${pregunta.opciones[indiceEstudiante]}`
                          : "Sin responder"}
                      </span>
                    </p>
                    <p className="error-respuesta">
                      Respuesta correcta:{" "}
                      <span className="marcada-correcta">
                        {c.correcta}. {pregunta.opciones[indiceCorrecto]}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  const pregunta = preguntas[indiceActual];

  return (
    <div className="contenedor-examen">
      <div className="pregunta">
        <p>
          {indiceActual + 1}.{" "} 
          <span dangerouslySetInnerHTML={{__html: pregunta.enunciado}} />          
          </p>
      </div>

      <div className="opciones">
        {pregunta.opciones.map((opcion,i) => {
          const valor = String.fromCharCode(97 + i);
          return (
            <label key={i}>
              <input
              type="radio"
              name={`p${indiceActual + 1}`}
              value={valor}
              checked={respuestas[`p${indiceActual + 1}`] === valor }
              onChange={handleSeleccion}
              />
              {valor}. {opcion}              
            </label>
          );
        })}
      </div>

      <div className="zona-inferior">
        {indiceActual < preguntas.length - 1 ? (
          <button onClick={handleSiguiente}>Siguiente pregunta</button>
        ) : (
          <button onClick={enviarExamen}>Enviar examen</button>
        )}        
        <div className="temporizador">
          ⏳{Math.floor(tiempoRestante / 60)}:{String(tiempoRestante % 60).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}
