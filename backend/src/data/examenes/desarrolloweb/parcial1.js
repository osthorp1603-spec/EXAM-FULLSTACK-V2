export const desarrolloWebParcial1 = [
    {
        enunciado: `Un botón debería cambiar el color del título, pero al hacer clic no pasa nada.<br>
    El evento solo ejecuta:<br><br>
    <span style="color:darkorange">document.getElementById("titulo")</span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
        "El botón necesita usar querySelector para funcionar.",
        `El elemento no tiene el id "titulo" en el HTML.`,
        "Los cambios de color requieren una recarga de página."
    ],
    correcta: "b"
    },

    {
        enunciado: `Una imagen debería mostrarse en pantalla, pero aparece en blanco.<br>
    En el HTML se escribió:<br><br>
    <span style="color:darkorange"> img src="foto.png" </span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "El archivo foto.png no existe o no está en la ruta correcta.",
    "Las imágenes requieren un tamaño mínimo para cargarse.",
    "El navegador bloquea imágenes con nombres cortos."
    ],
    correcta: "a"
    },

    {
        enunciado: `Se intenta aplicar una clase a un div, pero visualmente no cambia.<br>
    El código usa:<br><br>
    <span style="color:darkorange">elemento.classList.add("activo")</span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "La clase activo no está definida en el archivo CSS.",
    "classList solo funciona con botones, no con divs.",
    "El navegador ignora clases agregadas desde JavaScript."
    ],
    correcta: "a"
    },

    {
        enunciado: `Un botón debería ocultar un párrafo, pero sigue visible.<br>
    El evento ejecuta:<br><br>
    <span style="color:darkorange">document.getElementById("texto")</span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "El id del párrafo no coincide con el usado en JavaScript.",
    "Los párrafos no pueden ocultarse con JavaScript.",
    "El navegador bloquea cambios visuales en elementos de texto."
    ],
    correcta: "a"
    },

    {
        enunciado: `Un texto debería actualizarse al presionar un botón.<br><br>
    El código usa <span style="color:blue">innerText</span>,<br> pero nada cambia.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "El id usado en getElementById no coincide con el del HTML.",
    "innerText solo funciona con etiquetas p.",
    "El navegador necesita permisos especiales para cambiar texto."
    ],
    correcta: "a"
    }, 

    {
        enunciado: `Un botón debería mostrar el mensaje “Completado”,<br>pero al hacer clic no aparece.<br>
    El código evalúa:<br><br>
    <span style="color:darkorange">if (valor === "ok")</span><br>
    antes de actualizar el texto.<br><br><b>¿Qué es más probable?</b>`,
    opciones: [
    `El valor obtenido no es exactamente "ok".`,
    "if no funciona con cadenas dentro de botones.",
    "El texto solo se puede mostrar usando alert."
    ],
    correcta: "a"
    },

    {
    enunciado: `Un botón debería mostrar en pantalla el nombre escrito en un input,<br>
    pero al hacer clic no pasa nada.<br>
    El evento solo ejecuta:<br><br>
    <span style="color:darkorange">document.getElementById("nombre")</span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "El botón requiere estar dentro de un formulario para funcionar.",
    "Los inputs no funcionan sin atributo placeholder.",
    "El id del input no coincide con el usado en JavaScript."
    ],
    correcta: "c"
    },

    {
        enunciado: `Un formulario debería mostrar un mensaje al enviar,<br>pero no aparece nada.<br>
    El evento solo ejecuta:<br><br>
    <span style="color:darkorange">document.getElementById("mensaje")</span><br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "Los formularios no permiten usar JavaScript en eventos.",
    "El elemento donde debe mostrarse el mensaje tiene otro id en el HTML.",
    "Hace falta agregar un atributo name para que funcione."
    ],
    correcta: "b"
    },

    {
        enunciado: `Un botón debería ocultar un mensaje aplicando <span style="color:blue">display:none</span> desde JavaScript.<br><br>El evento sí se ejecuta, pero el mensaje sigue visible.<br><br>
    El código modifica el elemento usando un selector.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "display:none no se puede aplicar desde JavaScript.",
    "Se está modificando el elemento equivocado por usar un selector incorrecto.",
    "Los mensajes no pueden ocultarse si están dentro de un div."
    ],
    correcta: "b"
    },

    {
    enunciado: `Un menú debería cambiar de color cuando el usuario hace clic en un botón.<br>
    El evento agrega la clase activo correctamente, pero no hay cambios visuales.<br><br>
    <b>¿Qué es más probable?</b>`,
    opciones: [
    "Los estilos de color requieren actualizar el atributo alt.",
    "Las clases no pueden manejar cambios basados en clic.",
    "La clase activo no contiene ninguna regla relacionada con colores."
    ],
    correcta: "c"
    }
];
