import { app } from "./src/app.js";

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

//URL ´prueba: http://localhost:3000/api/preguntas?materia=Desarrollo web&parcial=Parcial I