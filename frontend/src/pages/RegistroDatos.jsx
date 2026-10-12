import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {materias,parciales} from "../data/catalogos"
import { SEDES_VALIDAS, JORNADAS_VALIDAS } from "../config/examen";
import "./RegistroDatos.css"


export const RegistroDatos = () => {
    // ESTADO DEL FORMULARIO
    const[formData,setFormData] = useState({
        apellido: "",
        nombre: "",
        materia: "",
        parcial: "",
        sede: "",
        jornada: ""
    });

    const [error,setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    // ENVIAR FORMULARIO
    const handleSubmit = (e) => {

        e.preventDefault();         // evita que se envíe el formulario

        // EXTRAER DATOS DEL FORMULARIO
        const {apellido,nombre,materia,parcial,sede,jornada} = formData;

        const apellidoTrim = apellido.trim();
        const nombreTrim = nombre.trim();
        const materiaTrim = materia.trim();
        const parcialTrim = parcial.trim();
        const sedeTrim = sede.trim().toLowerCase();
        const jornadaTrim = jornada.trim().toLowerCase();

         // VALIDAR CAMPOS VACÍOS
        if (!apellidoTrim || !nombreTrim || !materiaTrim || !parcialTrim || !sedeTrim || !jornadaTrim) {
            setError("⚠️ Debe Completar todos los campos, antes de continuar");
            return;
        }
        
        // VALIDAR SEDE
        if (!SEDES_VALIDAS.includes(sedeTrim)) {
            setError("⚠️ Sede inválida. Solo se permite: norte o sur.");
            return;
        }
        
        // VALIDAR JORNADA
        if (!JORNADAS_VALIDAS.includes(jornadaTrim)) {
            setError("⚠️ Jornada inválida. Solo se permite: diurno, nocturno o sabatino.");
            return;
        }

        localStorage.setItem("apellido", apellidoTrim);
        localStorage.setItem("nombre", nombreTrim);
        localStorage.setItem("materia", materiaTrim);
        localStorage.setItem("parcial", parcialTrim);
        localStorage.setItem("sede", sedeTrim);
        localStorage.setItem("jornada", jornadaTrim);

        setError("");    
        navigate("/instrucciones");
    }

    return (

    <div className="contenedor">
        <h1>Estudiante</h1>

        <form onSubmit={handleSubmit} >
            <label htmlFor="apellido">Apellido:</label>
            <input 
                type="text"
                id="apellido" 
                name="apellido" 
                value={formData.apellido}
                onChange={handleChange}
            />

            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text" 
                id="nombre"
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}              
            />

            <label htmlFor="materia">Materia:</label>
            <select
                id="materia"
                name="materia"
                value={formData.materia}
                onChange={handleChange}   
            >
                <option value="">--Selecciona la materia--</option>
                {materias.map((m) => (
                    <option key={m} value={m}>{m}</option>                
            ))} 
            </select>    

            <label htmlFor="parcial">Parcial: </label>
            <select
                id="parcial"
                name="parcial"
                value={formData.parcial}
                onChange={handleChange}           
            >
                <option value="">--Seleccion Parcial--</option>
                {parciales.map((p) => (
                    <option key={p} value={p}>{p}</option>
                ))}
            </select>

            <label htmlFor="sede">Sede:</label>
            <input 
                type="text"
                id="sede" 
                name="sede"
                placeholder="norte o sur"
                value={formData.sede}
                onChange={handleChange}  
            />

            <label htmlFor="jornada">Jornada:</label>
            <input 
                type="text" 
                id="jornada"
                name="jornada" 
                placeholder="diurno, nocturno o sabatino"
                value={formData.jornada}
                onChange={handleChange}  
            />

            <button type="submit">Entrar</button>     
            
        </form>
        {error && <p className="mensaje-error">{error}</p>}
    </div>
  )
}

