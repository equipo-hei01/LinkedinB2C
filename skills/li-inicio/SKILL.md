---
name: li-inicio
description: Puesta en marcha completa del sistema de LinkedIn para una marca nueva. Lee todo lo que puede (perfil, página, posts, métricas, sitio web y los documentos que suba el usuario), arma el ADN de la marca en marca.md, define arquetipos, voces, ofertas y entregables, puntúa el perfil, audita lo publicado, crea el kanban y el tablero con los datos iniciales, instala las tareas programadas y deja lista la primera semana. Usar cuando alguien diga /li-inicio, "empecemos", "configura el plugin", "es mi primera vez", "instala el sistema", "por dónde parto", o cuando cualquier skill o agente no encuentre marca.md en la carpeta de trabajo.
---

# li-inicio · puesta en marcha

Deja el plugin listo para una marca nueva, de punta a punta. Al terminar, el usuario tiene su ADN escrito, su perfil puntuado, su tablero con la línea base, su kanban con las primeras ideas y las tareas programadas corriendo. Nada del sistema funciona bien sin este paso: todas las skills, agentes y tareas leen `marca.md`.

## Cómo acompaña

- **Leer primero, preguntar después.** Nunca le preguntes al usuario algo que puedes leer en su perfil, su página, sus posts, su sitio o sus documentos. Lo que leas se propone ya escrito y el usuario solo corrige.
- **Un paso a la vez.** Son 8 pasos. No pases al siguiente sin cerrar el anterior con un "sí" del usuario. Muestra siempre en qué paso va ("Paso 3 de 8").
- **Se puede interrumpir.** Al cerrar cada paso, anótalo con fecha en la sección "Estado del inicio" de `marca.md`. Si la skill se abre de nuevo, lee esa sección y sigue donde quedó, sin repetir preguntas.
- **Nada inventado.** Lo que no se pudo leer ni el usuario dijo queda como `[verificar]` y se lista al final. Las cifras, clientes, cargos y testimonios solo entran si vienen de una fuente leída o del usuario.
- **Preguntas en bloques cortos**, de 1 a 4 por vez, con opciones cuando se pueda (`AskUserQuestion`).
- **LinkedIn solo se lee.** Durante el inicio no se publica, comenta, reacciona, conecta ni envía nada. Aplican todas las reglas de `datos/seguridad.md`.

## Paso 0 · Revisar con qué se cuenta (2 minutos)

1. **Carpeta de trabajo.** Propón `~/.claude/linkedin/` (o la carpeta conectada del proyecto, si hay una) y pregunta si prefiere otra. Créala, guarda la ruta absoluta en `~/.claude/linkedin-agent-b2b/carpeta.txt` y copia ahí todas las plantillas de `datos/` del plugin que no existan todavía. Nunca sobrescribas un archivo que ya tenga contenido del usuario.
2. **Cómo se leerá LinkedIn.** Revisa si están las herramientas del navegador (extensión de Chrome con la sesión del usuario). Si no están, el inicio sigue con lo que el usuario pegue o suba: texto del perfil, capturas, el PDF "Guardar como PDF" del perfil y los exports de Analytics. Anota la vía en `navegador`.
3. **Conectores opcionales.** Busca con ToolSearch si hay calendario, correo, planilla o CRM conectados. Anota cuáles hay; ninguno es obligatorio.
4. Explica en 4 líneas qué va a pasar, cuánto demora (60 a 90 minutos en total, se puede partir en dos sesiones) y qué necesita del usuario: su permiso para leer, sus documentos y sus respuestas a lo que falte.

## Paso 1 · Leer todo lo que se pueda (15 minutos, casi sin preguntas)

Pide permiso una vez ("Voy a leer tu perfil, tu página y tus últimos posts, sin tocar nada") y lee, despacio y en una sola pasada por fuente:

| Fuente | Qué se saca |
| --- | --- |
| Perfil personal | Titular, acerca de, experiencia, destacados, banner, foto, recomendaciones, aptitudes, URL, número de seguidores y contactos |
| Página de empresa (si hay) | Descripción, eslogan, botón, seguidores, últimos posts |
| Actividad reciente | Los últimos 15 a 20 posts del perfil y de la página: texto completo, formato, fecha, reacciones, comentarios, compartidos e impresiones si se ven |
| Analytics | Impresiones, visitas al perfil, apariciones en búsquedas, seguidores nuevos y audiencia (cargos, industrias, tamaño de empresa, ubicación). Si se puede, el export de 365 días |
| Sitio web | Qué vende, a quién, casos, precios publicados, tono, colores y logo |

Después pide los documentos: "Sube lo que tengas: manual de marca, brochure, presentación comercial, propuestas, casos, testimonios, tu CV, posts que te gusten cómo quedaron". Lee todo lo que suba. Si no tiene, sigue.

Reglas de lectura: una visita por página, sin abrir perfiles de terceros en serie, pausas entre páginas, y si aparece una advertencia, un captcha o un pedido de inicio de sesión, para y sigue con lo que el usuario pegue. Guarda lo leído en `borradores/inicio/` de la carpeta de trabajo (un archivo por fuente), para no tener que volver a leer.

Cierra el paso con un resumen de una pantalla: "Esto es lo que entendí de ti" (qué haces, a quién, qué vendes, cómo suenas) y "Esto no lo encontré".

## Paso 2 · El ADN: marca.md (15 minutos)

Llena `marca.md` de la carpeta de trabajo con lo leído, campo por campo, y muéstraselo al usuario por secciones para que corrija:

1. **Identidad:** `usuario`, `marca`, `que_hace`, `metodo`, `pais`, `zona_horaria`, `idioma`, URLs y `marcas_que_no_se_mezclan`.
2. **Cuentas y voces:** qué cuentas se van a usar (solo perfil, o perfil y página), `tratamiento`, `saludo_dm`, firmas, `hashtags`, `humor`, `negritas_unicode`.
3. **Cómo suena:** de sus posts reales saca las palabras que repite, las que nunca usa, sus posturas y 2 a 4 textos de referencia completos (los que mejor rindieron y los que el usuario diga "este soy yo"). Escribe `voz-persona.md` y, si hay página, `voz-empresa.md`, con las plantillas de `datos/`.
4. **Metas:** `meta_reuniones_semana`, `ticket_meta`, `moneda`, `cadencia`, `minutos_dia`. Estas sí se preguntan: no se leen en ninguna parte.
5. **Identidad visual:** colores, tipografía, logo, foto e iniciales, desde el manual de marca, el sitio o el banner. Si no hay manual, propón una paleta sacada del sitio y el usuario la confirma.

Pregunta solo lo que quedó vacío. Si el usuario no sabe algo (por ejemplo el ticket), deja `[verificar]` y sigue.

## Paso 3 · A quién le vende y qué entrega (15 minutos)

1. **Arquetipos** (`arquetipos.md`): propón de 1 a 4 tipos de cliente a partir de sus clientes y casos, de los cargos de su audiencia en Analytics y de a quién le habla en sus posts. Por cada uno: nombre corto, cargos, tamaño de empresa, dolor, lo que piensa y no dice, palabras que lo activan y lo alejan, objeciones, evidencia que necesita y el llamado que le calza. Compara con la audiencia real: si su audiencia no calza con a quién quiere venderle, dilo ahora. Define el reparto del contenido entre arquetipos.
2. **Ofertas** (`ofertas.md`): qué vende, a qué arquetipo, formato, precio si lo publica, llamado y link. La primera oferta siempre es la conversación inicial (`link_reservas`).
3. **Pruebas** (`pruebas.md`): casos, cifras y testimonios. Para cada uno pregunta si está autorizado a publicarse y con qué nombre ("empresa de retail" en vez del nombre real, si no).
4. **Palabra clave y entregable** por arquetipo (`entregables.md`): una palabra fácil de escribir en el teléfono y algo útil y corto que se entrega por DM, con la pregunta que deja abierta. Si el entregable no existe, queda "Por armar" y se propone cuál sería.
5. **Cuentas objetivo** (`cuentas-objetivo.md`): 15 a 30 personas o cargos a quienes comentar, por arquetipo, que el usuario nombra o que salen de quienes ya interactúan con sus posts. **Amigos y cercanos** (`amigos.md`): a quién se le habla con cercanía y no con un mensaje comercial.
6. **Límites** (`seguridad.md`): confirma los límites por defecto (15 DMs al día, 50 invitaciones a la semana, un post al día, nada se publica ni se envía sin su sí) y pregunta si quiere alguno más estricto.

## Paso 4 · Dónde está hoy: perfil y auditoría (15 minutos)

1. **Perfil sobre 100** con `/li-profile`, usando lo leído en el paso 1: la tabla de puntaje, las 3 cosas que más puntos pierden y las reescrituras listas para copiar (titular, acerca de, destacados, banner, experiencia). El usuario decide cuáles aplica; las aplica él.
2. **Auditoría** con `/li-audit` sobre los posts leídos: qué formatos, ganchos y temas rindieron sobre su mediana, cuáles trajeron conversaciones, y qué dejar de hacer. Con menos de 8 posts, dilo y no saques conclusiones.
3. **Nicho:** una primera pasada de `radar-nicho-li` (qué formatos y ganchos rinden hoy en su nicho, en español) para escribir `radar.md`.
4. Escribe la **línea base** en `estado.md`: fecha, puntaje del perfil, seguidores, mediana de impresiones e interacción, tasa de interacción, visitas al perfil, mezcla de formatos y arquetipos de lo ya publicado, y los 3 aprendizajes. Es el "antes" contra el que se medirá todo.

## Paso 5 · El kanban y el tablero (10 minutos)

Todo artefacto se publica en la cuenta del usuario, privado, y solo con su sí.

1. **Kanban "Fila de contenido":** publica `plantillas/kanban.html` del plugin como artefacto nuevo, con las capacidades que indica `plantillas/LEEME.md`. Siembra su configuración (marca, usuario, arquetipos, cuentas, carriles) y de 6 a 10 ideas iniciales en la columna "Ideas", cada una con arquetipo, formato, tema y puntaje, sacadas de la auditoría, del radar y de las objeciones de sus clientes. Guarda el link en `kanban_url`.
2. **Tablero LinkedIn:** no es una página suelta. Se crea desde el tipo de artefacto **Dashboard** y se siembra como indica `plantillas/LEEME.md`, paso por paso: el título, cada dataset de `plantillas/tablero-datos-vacios.json`, el mapa de `plantillas/tablero-mapa-mundo.json` y la página `plantillas/tablero.html`. Después llena `supuestos` (metas, ticket y moneda de `marca.md`, fecha de inicio del plan), `arquetipos` (desde `arquetipos.md`), `linea_base`, `puntaje` y los posts y la audiencia leídos en los pasos 1 y 4. Lo que no tiene dato queda vacío, no en cero inventado. Guarda el link en `tablero_url`. Si el tipo Dashboard no está disponible en la cuenta del usuario, dilo, deja la línea base en `estado.md` y anótalo en "Estado del inicio".
3. **Opcionales**, solo si el usuario quiere y hay conector: la planilla con el historial semanal (`planilla_historial`), el calendario de reservas (`calendario`) y el CRM (`crm`).
4. Muéstrale los dos artefactos abiertos y explícale en 5 líneas cómo se usan: qué mueve él y qué mueven los agentes (`kanban.md`).

Si no se pueden publicar artefactos en esta sesión, dilo, deja el kanban como archivo `fila.md` en la carpeta de trabajo con las mismas columnas y anótalo en "Estado del inicio" para crearlos después.

## Paso 6 · Las tareas programadas (10 minutos)

1. Lee `skills/li-rutina/tareas/README.md` y muestra la lista de tareas con su horario en la `zona_horaria` del usuario, agrupadas: diarias, semanales, mensuales y a pedido.
2. Pregunta qué grupo activar. Recomienda partir con las diarias y las semanales, y dejar las mensuales para el segundo mes. Ajusta horarios si el usuario lo pide.
3. Para cada tarea aprobada: toma su plantilla de `skills/li-rutina/tareas/<id>.md`, reemplaza los marcadores (`<CARPETA>`, `<KANBAN_URL>`, `<TABLERO_URL>`, `<USUARIO>`, `<MARCA>`, `<ZONA_HORARIA>`, `<PLANILLA_URL>`, `<CALENDARIO>`, `<CRM>`) con los valores de `marca.md`, y créala con la herramienta de tareas programadas (id, descripción, cron y el texto de la plantilla como instrucciones). Si un marcador opcional quedó vacío, la tarea omite ese paso.
4. Corre una vez la tarjeta del día a mano, para que el usuario apruebe los permisos y vea cómo le va a llegar cada mañana.
5. Anota en "Estado del inicio" qué tareas quedaron creadas y cuáles no.

Si la herramienta de tareas programadas no está disponible, entrega la lista de tareas con sus textos ya completos para crearlas a mano, y dilo.

## Paso 7 · La primera semana (15 minutos)

1. **Plan:** `planificador-li` elige de la fila las 3 a 5 piezas de la primera semana, con la mezcla de tipos y un arquetipo por pieza.
2. **Primera pieza:** escribe con `/li-post` (voz del perfil) la primera, pásala por `revisora-marca` y déjala en "Por aprobar" con su puntaje. El usuario la aprueba o la corrige: esa corrección es la mejor calibración de la voz, así que anota en `voz-persona.md` lo que cambió y por qué.
3. **Primera ronda:** con las personas que ya interactuaron con sus posts (leídas en el paso 1), deja de 3 a 5 mensajes listos en la tabla de aprobación de `conversaciones-li`. No se envía nada sin su sí.

## Paso 8 · Cierre

Entrega una pantalla con:

```
LISTO · [marca] · [fecha]
ADN: marca.md, arquetipos (N), voces (N), ofertas (N), entregables (N listos, N por armar)
Perfil: NN/100 · lo que más suma: …
Línea base: seguidores N · mediana de impresiones N · tasa de interacción N %
Kanban: [link] · N ideas, N por aprobar     Tablero: [link]
Tareas: N activas (la tarjeta llega a las HH:MM)
Falta de ti: [máximo 5 cosas con `[verificar]` o "Por armar"]
Mañana: [qué le va a llegar y qué tiene que hacer]
```

Marca el inicio como completo en "Estado del inicio" de `marca.md`, con la fecha. Desde aquí, el día a día lo lleva `/li-estratega`.

## Reglas

- **Nunca publicas, comentas, das like, conectas ni envías** durante el inicio. Todo queda como borrador.
- **Nunca inventas** datos, cifras, clientes, cargos ni testimonios. Lo que falta se pregunta o queda `[verificar]`.
- **Privacidad:** sin correos ni teléfonos en los archivos de la carpeta de trabajo. No infieras género por nombre ni por foto. Lo leído de terceros (quién comentó, cargos) se guarda solo en `conversaciones.md` y `cuentas-objetivo.md`.
- **Solo testimonios y casos autorizados** entran a `pruebas.md` como publicables.
- **Credenciales:** nunca pidas ni escribas contraseñas. Si LinkedIn pide iniciar sesión, lo hace el usuario.
- **Cada cosa que se crea afuera** (artefactos, tareas, planilla) se crea con el sí del usuario y se anota en `marca.md`.
- Si el usuario ya tiene `marca.md` completo y pide "actualiza mi ADN", no repitas todo: lee de nuevo solo lo que cambió y propón las diferencias.
