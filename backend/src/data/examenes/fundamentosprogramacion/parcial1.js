export const fundamentosProgramacionParcial1 = [
    {
        enunciado: `Un estudiante escribe los siguientes pasos para calcular el precio final de un producto con descuento:<br><br>
    &nbsp;&nbsp;1. Inicio<br>
    &nbsp;&nbsp;2. Guardar el precio original<br>
    &nbsp;&nbsp;3. Mostrar el precio final<br>
    &nbsp;&nbsp;4. Restar el descuento al precio<br>
    &nbsp;&nbsp;5. Fin<br><br>
    Al ejecutarlo, el precio mostrado nunca refleja el descuento.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
        "Los pasos 3 y 4 están en orden incorrecto: se muestra el resultado antes de calcularlo.",
        "Falta declarar el tipo de dato del precio en el pseudocódigo.",
        "El algoritmo necesita un símbolo de decisión para aplicar el descuento."
    ],
    correcta: "a"
    },
      // ─── P2 — Orden entrada/proceso/salida ───
  {
    enunciado: `Un estudiante arma el siguiente algoritmo para mostrar si un estudiante aprobó:<br><br>
    <span style="color:darkorange">Entrada:</span> mensaje de aprobado o reprobado<br>
    <span style="color:darkorange">Proceso:</span> comparar nota con 60<br>
    <span style="color:darkorange">Salida:</span> nombre y nota del estudiante<br><br>
    El algoritmo no produce resultados correctos.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "La entrada y la salida están intercambiadas: los datos se reciben, el mensaje se muestra.",
      "El proceso debería ejecutarse antes de recibir cualquier entrada.",
      "Faltan más pasos en el proceso para que el algoritmo funcione."
    ],
    correcta: "a"
  },

  // ─── P3 — Diagrama símbolo incorrecto ───
  {
    enunciado: `Observa el siguiente diagrama de flujo.<br>
    Representa la lectura del nombre de un usuario y su visualización en pantalla.<br><br>
    Uno de los símbolos usados <b>no corresponde</b> a su función según la simbología estándar.<br><br>
    <b>¿Qué es más probable?</b>`,

    diagrama: `<svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <ellipse cx="340" cy="40" rx="70" ry="24" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1"/>
      <text x="340" y="45" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1b5e20">Inicio</text>
      <line x1="340" y1="64" x2="340" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)"/>
      <rect x="210" y="100" width="260" height="50" rx="4" fill="#e8f0fe" stroke="#4a6fa5" stroke-width="1"/>
      <text x="340" y="130" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1a3a6b">Leer nombre</text>
      <line x1="340" y1="150" x2="340" y2="190" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)"/>
      <rect x="210" y="190" width="260" height="50" rx="4" fill="#e8f0fe" stroke="#4a6fa5" stroke-width="1"/>
      <text x="340" y="220" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1a3a6b">Preparar mensaje</text>
      <line x1="340" y1="240" x2="340" y2="280" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)"/>
      <polygon points="200,280 480,280 460,330 180,330" fill="#e8f0fe" stroke="#4a6fa5" stroke-width="1"/>
      <text x="330" y="310" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1a3a6b">Mostrar nombre</text>
      <line x1="330" y1="330" x2="330" y2="358" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)"/>
      <ellipse cx="330" cy="370" rx="70" ry="24" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1"/>
      <text x="330" y="375" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1b5e20">Fin</text>
    </svg>`,

    opciones: [
      "El símbolo de 'Leer nombre' debería ser un paralelogramo porque representa una entrada de datos.",
      "El símbolo de inicio debería ser un rectángulo, no un óvalo.",
      "El símbolo de 'Mostrar nombre' debería ser un rectángulo porque es una acción del programa."
    ],
    correcta: "a"
  },

  // ─── P4 — float vs int ───
  {
    enunciado: `Un estudiante declara la edad de una persona así:<br><br>
    <span style="color:darkorange">float edad = 17;</span><br><br>
    El programa compila sin errores, pero el profesor indica que
    el tipo de dato <b>no es el más adecuado</b>.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "Se debería usar int porque la edad es un número entero, no decimal.",
      "Se debería usar string porque la edad se escribe como texto en documentos.",
      "Se debería usar bool porque la persona solo puede ser mayor o menor de edad."
    ],
    correcta: "a"
  },

  // ─── P5 — std::cout fácil ───
  {
    enunciado: `Un estudiante escribe el siguiente código:<br><br>
    <span style="color:darkorange">int nota = 95;</span><br>
    <span style="color:darkorange">std::cout &lt;&lt; "nota" &lt;&lt; nota;</span><br><br>
    ¿Qué aparece exactamente en pantalla?<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "nota95",
      "9595",
      "nota nota"
    ],
    correcta: "a"
  },

  // ─── P6 — std::cout medio ───
  {
    enunciado: `Un estudiante escribe este código:<br><br>
    <span style="color:darkorange">int precio = 100;</span><br>
    <span style="color:darkorange">int descuento = 10;</span><br>
    <span style="color:darkorange">std::cout &lt;&lt; "El precio es: " &lt;&lt; precio &lt;&lt; " descuento: " &lt;&lt; descuento;</span><br><br>
    ¿Qué aparece exactamente en pantalla?<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "El precio es: 100 descuento: 10",
      "El precio es: precio descuento: descuento",
      "El precio es:  descuento:"
    ],
    correcta: "a"
  },

  // ─── P7 — std::cout difícil ───
  {
    enunciado: `Un estudiante escribe este código:<br><br>
    <span style="color:darkorange">int edad = 25;</span><br>
    <span style="color:darkorange">std::cout &lt;&lt; "Tu edad es: " &lt;&lt; "edad" &lt;&lt; edad;</span><br><br>
    El estudiante esperaba ver solo <b>Tu edad es: 25</b><br>
    pero en pantalla aparece algo diferente.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "Aparece 'Tu edad es: edad25' porque 'edad' entre comillas es texto literal, no la variable.",
      "Aparece 'Tu edad es: 2525' porque la variable se imprime dos veces.",
      "Aparece 'Tu edad es: 25' exactamente como esperaba."
    ],
    correcta: "a"
  },

  // ─── P8 — int trunca decimal ───
  {
    enunciado: `Un estudiante escribe este código para guardar el promedio:<br><br>
    <span style="color:darkorange">int promedio = 85.5;</span><br>
    <span style="color:darkorange">std::cout &lt;&lt; promedio;</span><br><br>
    En pantalla aparece <b>85</b> en lugar de <b>85.5</b>.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "El tipo int no almacena decimales, trunca el valor y pierde la parte decimal.",
      "std::cout elimina automáticamente los decimales al mostrar cualquier número.",
      "El compilador redondea todos los números al entero más cercano."
    ],
    correcta: "a"
  },

  // ─── P9 — Leer diagrama y entender qué hace ───
  {
    enunciado: `Observa el siguiente diagrama de flujo.<br><br>
    Un estudiante debe describir con sus palabras qué hace este algoritmo.<br><br>
    <b>¿Qué es más probable?</b>`,

    diagrama: `<svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>
      <ellipse cx="340" cy="36" rx="70" ry="24" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1"/>
      <text x="340" y="41" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1b5e20">Inicio</text>
      <line x1="340" y1="60" x2="340" y2="96" stroke="#555" stroke-width="1.5" marker-end="url(#arrow2)"/>
      <polygon points="180,96 500,96 480,146 200,146" fill="#e8f0fe" stroke="#4a6fa5" stroke-width="1"/>
      <text x="340" y="126" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1a3a6b">Celsius = 36</text>
      <line x1="340" y1="146" x2="340" y2="190" stroke="#555" stroke-width="1.5" marker-end="url(#arrow2)"/>
      <rect x="180" y="190" width="320" height="50" rx="4" fill="#fff8e1" stroke="#e6a817" stroke-width="1"/>
      <text x="340" y="220" text-anchor="middle" font-size="13" font-family="monospace" fill="#7a4f00">F = (Celsius x 9/5) + 32</text>
      <line x1="340" y1="240" x2="340" y2="284" stroke="#555" stroke-width="1.5" marker-end="url(#arrow2)"/>
      <polygon points="180,284 500,284 480,334 200,334" fill="#e8f0fe" stroke="#4a6fa5" stroke-width="1"/>
      <text x="340" y="314" text-anchor="middle" font-size="12" font-family="sans-serif" fill="#1a3a6b">Mostrar F</text>
      <line x1="340" y1="334" x2="340" y2="374" stroke="#555" stroke-width="1.5" marker-end="url(#arrow2)"/>
      <ellipse cx="340" cy="396" rx="70" ry="24" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1"/>
      <text x="340" y="401" text-anchor="middle" font-size="13" font-family="sans-serif" fill="#1b5e20">Fin</text>
    </svg>`,

    opciones: [
      "Recibe un valor de temperatura, aplica una fórmula de conversión y muestra el resultado.",
      "Compara dos temperaturas y muestra cuál es mayor.",
      "Muestra un mensaje fijo en pantalla sin realizar ningún cálculo."
    ],
    correcta: "a"
  },

  // ─── P10 — int vs float para precio ───
  {
    enunciado: `Un estudiante necesita guardar el precio de un producto
    que puede costar <b>$12.99</b> o <b>$5.50</b>.<br><br>
    Declara la variable así:<br><br>
    <span style="color:darkorange">int precio = 12.99;</span><br><br>
    Al mostrar el valor en pantalla aparece <b>12</b> en lugar de <b>12.99</b>.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
      "Debería usar float porque el precio tiene decimales y int los elimina.",
      "Debería usar string porque los precios siempre se muestran como texto.",
      "Debería usar bool porque el precio puede ser verdadero o falso."
    ],
    correcta: "a"
  }


]