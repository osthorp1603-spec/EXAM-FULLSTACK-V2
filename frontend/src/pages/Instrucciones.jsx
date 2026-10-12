import { useNavigate } from "react-router-dom"
import "./Instrucciones.css"

export const Instrucciones = () => {
    const navigate = useNavigate();

   
    const handlestart = () => {
        navigate("/examen");
    }
    
    return (
        <div className="contenedor-instrucciones" >
            <h1>🧾 INSTRUCCIONES DEL EXAMEN</h1>

            <div className="cuadro-instrucciones">
                <p>📝 Lee con atención antes de iniciar:</p>
                <ul>
                    <li>Se cancela el examen a quien sea visto copiando, usando inteligencia artificial, internet o cualquier medio externo.</li>
                    <li>🧠 Valor total: 5.0 puntos / Cada pregunta vale 0.5 puntos</li>
                    <li>❌ No puedes regresar a una pregunta anterior.</li>
                    <li>✅ Al finalizar, se enviarán automáticamente tus respuestas.</li>
                </ul>
            </div>

            <button onClick={handlestart}>Empezar Examen</button>
        </div>
  );
};
