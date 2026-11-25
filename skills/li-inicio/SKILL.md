---
name: li-inicio
description: Puesta en marcha del sistema de LinkedIn para una marca nueva, en modo rápido (20 a 30 minutos y 4 preguntas, el resto se deduce con la base de conocimiento del plugin) o completo. Lee todo lo que puede (perfil, página, posts, métricas, sitio web y los documentos que suba el usuario), arma el ADN de la marca en marca.md, define arquetipos, voces, ofertas y entregables, puntúa el perfil, audita lo publicado, crea el kanban y el tablero con los datos iniciales, instala las tareas programadas y deja lista la primera semana. Usar cuando alguien diga /li-inicio, "empecemos", "configura el plugin", "es mi primera vez", "instala el sistema", "por dónde parto", o cuando cualquier skill o agente no encuentre marca.md en la carpeta de trabajo.
---

# li-inicio · puesta en marcha

Deja el plugin listo para una marca nueva, de punta a punta. Al terminar, el usuario tiene su ADN escrito, su perfil puntuado, su tablero con la línea base, su kanban con las primeras ideas y las tareas programadas corriendo. Nada del sistema funciona bien sin este paso: todas las skills, agentes y tareas leen `marca.md`.

## Dos modos: rápido (por defecto) y completo

Al partir, ofrece los dos en una línea y, si el usuario no elige, sigue en **rápido**.

**Rápido: 20 a 30 minutos y 4 preguntas.** El plugin trae una base de conocimiento (`conocimiento/` del plugin) para que el usuario no tenga que enseñarle nada que ya se sepa:
- `conocimiento/inferencia.md`: de dónde sale cada campo de `marca.md`, las voces, los arquetipos, las ofertas y los entregables **sin preguntarlo**, qué valor por defecto lleva si no se encuentra y con qué se corrige solo después. Lo deducido entra marcado `(supuesto)`.
- `conocimiento/arquetipos-biblioteca.md`: 8 arquetipos B2B ya escritos (Decisor, Implementador, Cuidador de personas, Guardián del presupuesto, Guardián técnico, Líder comercial, Dueño de pyme, Pares). Se eligen de 1 a 4 según lo leído y se adaptan a su oferta e industria.
- `conocimiento/venta-base.md`: el método de venta del sistema, para no preguntarle cómo vende.
- `conocimiento/fuentes.md`: de dónde sale cada regla.

En modo rápido cambian estos pasos (lo demás sigue igual):
- **Paso 0:** la carpeta de trabajo por defecto se crea sin preguntar; se avisa la ruta en una línea por si quiere otra.
- **Pasos 2 y 3 en uno:** con lo leído en el paso 1 y los tres archivos de arriba, escribe de una vez `marca.md`, `voz-persona.md` (y `voz-empresa.md` si hay página), `arquetipos.md`, `ofertas.md`, `pruebas.md` (solo lo ya publicado), `entregables.md` y `cuentas-objetivo.md` (con quienes ya interactuaron). Haz **solo las 4 preguntas** de `conocimiento/inferencia.md` en un único bloque con opciones (`AskUserQuestion`). Muestra **un solo resumen** de una pantalla: qué entendiste, qué arquetipos elegiste y por qué, la palabra clave de cada uno, y la lista de `(supuesto)` que más pesan (máximo 5). Un "sí" cierra los dos pasos. Arma el primer entregable del arquetipo principal (con la skill `lead-magnets` si está instalada) y déjalo en "Revisar": no detiene el inicio.
- **Paso 4:** puntaje del perfil con lo ya leído y la línea base en `estado.md`. La auditoría de posts y el radar del nicho no se hacen ahora: los hacen solas las tareas de la primera semana (radar del lunes y análisis del viernes) y se anota en "Estado del inicio".
- **Paso 6:** activa con un solo sí las tareas diarias y semanales (las mensuales quedan para el segundo mes, anotadas en "Estado del inicio").
- **Lo que no se pregunta, se aprende:** dilo en el cierre en una línea ("la voz y los arquetipos se ajustan solos con tus correcciones y tus conversaciones; no tienes que llenar nada más").

**Completo: 60 a 90 minutos.** Los 8 pasos tal como están abajo, con todas las preguntas por bloque. Para quien prefiere revisar campo por campo, o cuando casi no hay nada que leer (perfil vacío, sin sitio, sin posts).

## Cómo acompaña

- **Leer primero, preguntar después.** Nunca le preguntes al usuario algo que puedes leer en su perfil, su página, sus posts, su sitio o sus documentos. Lo que leas se propone ya escrito y el usuario solo corrige.
- **Un paso a la vez.** Son 8 pasos. No pases al siguiente sin cerrar el anterior con un "sí" del usuario. Muestra siempre en qué paso va ("Paso 3 de 8").
- **Un solo "sí" por paso.** Dentro de un paso el usuario corrige lo que quiera, pero no se le pide una aprobación por archivo ni por sección: al final se le muestra un resumen del paso (qué quedó escrito y en qué archivos, qué quedó `[verificar]`) y con UN "sí" a ese resumen el paso se cierra. Lo único que pide su propio sí es lo que se crea afuera (artefactos, tareas, planilla).
- **Se puede interrumpir.** Al cerrar cada paso, anótalo con fecha en la sección "Estado del inicio" de `marca.md`. Si la skill se abre de nuevo, lee esa sección y sigue donde quedó, sin repetir preguntas.
- **Nada inventado.** Lo que no se pudo leer ni el usuario dijo queda como `[verificar]` y se lista al final. Las cifras, clientes, cargos y testimonios solo entran si vienen de una fuente leída o del usuario.
- **Preguntas en bloques cortos**, de 1 a 4 por vez, con opciones cuando se pueda (`AskUserQuestion`).
- **LinkedIn solo se lee.** Durante el inicio no se publica, comenta, reacciona, conecta ni envía nada. Aplican todas las reglas de `datos/seguridad.md`.

## Paso 0 · Revisar con qué se cuenta (2 minutos)

1. **Carpeta de trabajo.** Propón `~/.claude/linkedin/` (o la carpeta conectada del proyecto, si hay una) y pregunta si prefiere otra. Créala, guarda la ruta absoluta en `~/.claude/linkedin-agent-b2b/carpeta.txt` y copia ahí todas las plantillas de `datos/` del plugin que no existan todavía. **Cópialas sin las filas ni los bloques marcados `EJEMPLO`** ("EJEMPLO (borra esta fila)", "EJEMPLO · …"): en la carpeta de trabajo las tablas parten vacías, solo con sus encabezados, y díselo al usuario en una línea ("copié las plantillas sin los ejemplos; los ejemplos llenos están en `ejemplo/` del plugin"). Nunca sobrescribas un archivo que ya tenga contenido del usuario.
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
| Quién interactuó | Quién comentó y reaccionó en esos últimos posts y las notificaciones recientes, en la misma visita y sin abrir perfiles: nombre, cargo si se ve y qué dijo. Lo usan los pasos 3.5 y 7.3 |
| Analytics | Impresiones, visitas al perfil, apariciones en búsquedas, seguidores nuevos y audiencia (cargos, industrias, tamaño de empresa, ubicación). Si se puede, el export de 365 días |
| Sitio web | Qué vende, a quién, casos, precios publicados, tono, colores y logo |

Después pide los documentos: "Sube lo que tengas: manual de marca, brochure, presentación comercial, propuestas, casos, testimonios, tu CV, posts que te gusten cómo quedaron". Lee todo lo que suba. Si no tiene, sigue.

**Si LinkedIn no se lee con el navegador** (modo "lo que el usuario pega"), pídele además que pegue sus notificaciones recientes o los comentarios de sus 3 mejores posts, para saber quién interactuó. Si no los tiene, no se inventa a nadie: los pasos 3.5 y 7.3 lo dicen en una línea y siguen solo con las personas que el usuario nombre.

Reglas de lectura: una visita por página, sin abrir perfiles de terceros en serie, pausas entre páginas, y si aparece una advertencia, un captcha o un pedido de inicio de sesión, para y sigue con lo que el usuario pegue. Guarda lo leído en `borradores/inicio/` de la carpeta de trabajo (un archivo por fuente), para no tener que volver a leer. Quién interactuó va en `borradores/inicio/interacciones.md`, sin correos ni teléfonos.

Cierra el paso con un resumen de una pantalla: "Esto es lo que entendí de ti" (qué haces, a quién, qué vendes, cómo suenas) y "Esto no lo encontré".

## Paso 2 · El ADN: marca.md (15 minutos)

Llena `marca.md` de la carpeta de trabajo con lo leído, campo por campo, y muéstraselo al usuario por secciones para que corrija:

1. **Identidad:** `usuario`, `marca`, `que_hace`, `metodo`, `pilares`, `pais`, `zona_horaria`, `idioma`, URLs y `marcas_que_no_se_mezclan`. **Pilares:** propón 3 o 4 pilares de contenido a partir de lo que ya rinde en sus posts leídos (los temas que más conversaron) y de lo que vende (sus ofertas y su `metodo`); el usuario los corrige. Son siempre los mismos y se repiten sin miedo.
2. **Cuentas y voces:** qué cuentas se van a usar (solo perfil, o perfil y página), `tratamiento`, `saludo_dm`, firmas, `hashtags`, `humor`, `negritas_unicode`.
3. **Cómo suena:** de sus posts reales saca las palabras que repite, las que nunca usa, sus posturas y 2 a 4 textos de referencia completos (los que mejor rindieron y los que el usuario diga "este soy yo"). Escribe `voz-persona.md` y, si hay página, `voz-empresa.md`, con las plantillas de `datos/`.
4. **Metas:** `accion_perfil`, `meta_reuniones_semana`, `reuniones_hoy_semana`, `tasa_cierre`, `ticket_meta`, `ticket_promedio`, `moneda`, `meta_charlas_mes`, `plan_inicio`, `cadencia`, `minutos_dia`. Estas sí se preguntan: no se leen en ninguna parte.
5. **Identidad visual:** colores, tipografía, logo, foto e iniciales, desde el manual de marca, el sitio o el banner. Si no hay manual, propón una paleta sacada del sitio y el usuario la confirma.

Antes de preguntar cualquier cosa, revisa `conocimiento/inferencia.md`: si el campo tiene una fuente o un valor por defecto, se propone escrito y no se pregunta. En modo rápido solo van sus 4 preguntas. En modo completo, **lo que no se puede leer se pregunta**, en bloques de 1 a 4 preguntas y con opciones cuando se pueda (lo demás, solo si quedó vacío):

- **Bloque de voz 1:** cómo saluda en un mensaje (`saludo_dm`) · si cierra sus posts con una firma fija, en el perfil y en la página (`firma_persona`, `firma_empresa`; vacío si no usa) · si quiere negritas Unicode en sus posts (`negritas_unicode`) · qué palabras nunca usa.
- **Bloque de voz 2:** de los posts leídos, cuál es "este soy yo" (muéstrale los 3 o 4 que mejor rindieron para que elija) · si hay página, en qué persona gramatical habla (nosotros, tercera persona o el nombre de la marca).
- **Bloque del perfil:** qué quiere que haga quien visita su perfil (`accion_perfil`; opciones: agendar una reunión, escribirle por mensaje, descargar algo, otra) · si los `pilares` propuestos son los suyos o cuál cambiaría.
- **Bloque de metas 1:** cuántas reuniones por semana quiere desde LinkedIn (`meta_reuniones_semana`) · cuántas tiene hoy desde LinkedIn (`reuniones_hoy_semana`) · de cada 10 reuniones, cuántas terminan en venta (`tasa_cierre`, aproximada) · cuánto vale una venta típica de las que quiere lograr (`ticket_meta`) y, si lo sabe, cuánto valen sus ventas de hoy (`ticket_promedio`), con su `moneda`.
- **Bloque de metas 2:** cuántas charlas al mes quiere dar (`meta_charlas_mes`; 0 si no aplica) · cuándo parte el plan (`plan_inicio`; por defecto, el lunes siguiente) · cuántos posts por semana (`cadencia`) · cuántos minutos al día le dedica (`minutos_dia`).
- **Bloque de archivos:** dónde están los archivos del logo y de su foto (ruta en su computador, o que los suba), para `logo` y `foto`.

Si el usuario no sabe algo (por ejemplo el ticket o la tasa de cierre), deja `[verificar]` y sigue.

## Paso 3 · A quién le vende y qué entrega (15 minutos)

1. **Arquetipos** (`arquetipos.md`): parte de `conocimiento/arquetipos-biblioteca.md` (regla "Cómo elegir") y propón de 1 a 4 tipos de cliente ya escritos y adaptados a su oferta, a partir de sus clientes y casos, de los cargos de su audiencia en Analytics y de a quién le habla en sus posts. Por cada uno: nombre corto, cargos, tamaño de empresa, dolor, lo que piensa y no dice, palabras que lo activan y lo alejan, objeciones (separando precio, competencia y "ahora no"), evidencia que necesita y el llamado que le calza. **Pregunta siempre, por arquetipo, "Qué ya probó y por qué no le funcionó"** (otra consultora, un software, un curso, hacerlo con su equipo…): no se lee en ninguna parte; si el usuario no lo sabe, queda `[verificar]`. Si en lo leído (comentarios, mensajes, documentos) hay frases textuales de clientes que describen su problema, propónlas para "Cómo lo dicen ellos", sin nombre ni empresa. Compara con la audiencia real: si su audiencia no calza con a quién quiere venderle, dilo ahora. Propón el reparto del contenido entre arquetipos (por ejemplo "60 / 25 / 15") y pregúntale al usuario si es ese: lo decide él, según a quién quiere venderle más.
2. **Ofertas** (`ofertas.md`): qué vende, a qué arquetipo, formato, precio si lo publica, llamado y link. La primera oferta siempre es la conversación inicial (`link_reservas`): pregunta cuánto dura y si tiene costo, y anótalo en su fila (columnas Formato y Precio).
3. **Pruebas** (`pruebas.md`): casos, cifras y testimonios. Por cada caso pregunta si es publicable y con qué nombre ("empresa de retail" en vez del nombre real, si no). Lo que no tiene un sí explícito queda como no publicable.
4. **Palabra clave y entregable** por arquetipo (`entregables.md`): una palabra fácil de escribir en el teléfono y algo útil y corto que se entrega por DM, con la pregunta que deja abierta. **Arma aquí mismo al menos UN entregable sencillo para el arquetipo principal** (el de mayor reparto): una página, checklist o guía corta, escrita solo con lo leído y lo que el usuario dijo, en su voz y con la pregunta que deja abierta. El usuario lo aprueba dentro del resumen del paso y queda "Listo" (o "Revisar", si pidió cambios). Guárdalo en `entregables/` de la carpeta de trabajo. Los demás quedan "Por armar", con la propuesta de cuál sería cada uno. Mientras el entregable de un arquetipo esté "Por armar", sus posts cierran con una pregunta y no con palabra clave (ver `/li-post`): así la primera semana no se bloquea.
5. **Cuentas objetivo** (`cuentas-objetivo.md`): 15 a 30 personas o cargos a quienes comentar, por arquetipo, que el usuario nombra o que salen de quienes ya interactúan con sus posts ("Quién interactuó", paso 1). Si en el paso 1 no se pudo leer ni el usuario pegó quién interactuó, dilo y sigue con las personas y cargos que el usuario nombre, sin inventar. **Su propia red:** ofrécele descargar sus contactos de forma oficial (LinkedIn → Configuración → Privacidad de datos → Obtener una copia de tus datos → Contactos; llega un archivo `Connections.csv`) y dejarlo en la carpeta de trabajo. Si lo hace, léelo, cruza cargo y empresa con los arquetipos y propón a quién comentar primero y a quién escribirle (prospección templada), siguiendo `cuentas-objetivo.md`. Sin scraping ni abrir perfiles en serie; si el archivo trae correos, se ignoran y no se copian. Si no lo descarga ahora, sigue: se puede hacer después. Dile en una línea que se parte por su red y por quien ya interactuó: escribirle en frío a quien no es contacto ni interactuó espera hasta que esos mensajes tengan respuestas de forma constante (ver "El frío espera" en `cuentas-objetivo.md`). **Amigos y cercanos** (`amigos.md`): a quién se le habla con cercanía y no con un mensaje comercial.
6. **Límites** (`seguridad.md`): confirma los límites por defecto (15 DMs al día, 50 invitaciones a la semana, un post al día, nada se publica ni se envía sin su sí) y pregunta si quiere alguno más estricto.

Las preguntas de este paso (reparto, qué ya probó cada arquetipo, duración y costo de la conversación inicial, casos publicables, si descarga `Connections.csv`) van también en bloques de 1 a 4. El paso se cierra con un solo "sí" al resumen, no con uno por archivo.

## Paso 4 · Dónde está hoy: perfil y auditoría (15 minutos)

1. **Perfil sobre 100** con `/li-profile`, usando lo leído en el paso 1 (y, si hay página de empresa, la página sobre 100 con su propia rúbrica, `rubric-pagina.json`): la tabla de puntaje, con los nombres de los ítems en español, las 3 cosas que más puntos pierden y las reescrituras listas para copiar (titular, acerca de, destacados, banner, experiencia). El usuario decide cuáles aplica; las aplica él.
2. **Auditoría** con `/li-audit` sobre los posts leídos: qué formatos, ganchos y temas rindieron sobre su mediana, cuáles trajeron conversaciones, y qué dejar de hacer. Con menos de 8 posts, dilo y no saques conclusiones.
3. **Nicho:** una primera pasada de `radar-nicho-li` (qué formatos y ganchos rinden hoy en su nicho, en español) para escribir `radar.md`.
4. Escribe la **línea base** en `estado.md`: fecha, puntaje del perfil, seguidores, mediana de impresiones e interacción, tasa de interacción, visitas al perfil, mezcla de formatos y arquetipos de lo ya publicado, y los 3 aprendizajes. Es el "antes" contra el que se medirá todo.

## Paso 5 · El kanban y el tablero (10 minutos)

Todo artefacto se publica en la cuenta del usuario, privado, y solo con su sí.

1. **Kanban "Fila de contenido":** publica `plantillas/kanban.html` del plugin como artefacto nuevo, con las capacidades que indica `plantillas/LEEME.md`. Siembra su configuración en `config/marca` (marca, usuario, arquetipos, cuentas, carriles): `arquetipos` lleva los nombres de los arquetipos del usuario, tal como están en `arquetipos.md`, más `Pares`. Siembra también de 6 a 10 ideas iniciales en la columna "Ideas", cada una con arquetipo, formato, tema y puntaje, sacadas de la auditoría, del radar y de las objeciones de sus clientes. Cada idea del inicio empieza su `nota` con `Origen: li-inicio <fecha>`: así no cuentan para el límite de 6 ideas por semana de `kanban.md`. Guarda el link en `kanban_url`.
2. **Tablero LinkedIn:** no es una página suelta. Se crea desde el tipo de artefacto **Dashboard** y se siembra como indica `plantillas/LEEME.md`, paso por paso: el título, cada dataset de `plantillas/tablero-datos-vacios.json`, el mapa de `plantillas/tablero-mapa-mundo.json` y la página `plantillas/tablero.html`. Después llena `supuestos` (las metas de `marca.md`: `meta_reuniones_semana`, `meta_charlas_mes`, `plan_inicio`, `ticket_promedio`, `tasa_cierre`, `moneda` y `ticket_meta`), `arquetipos` (desde `arquetipos.md`), `resumen` (seguidores, impresiones y visitas leídos en el paso 1, y las `reuniones_hoy_semana` como línea base de reuniones), `linea_base`, `puntaje` y los posts y la audiencia leídos en los pasos 1 y 4. Pasa los colores de `marca.md` (`color_fondo`, `color_texto`, `color_acento`, `color_acento2`) a los dos artefactos donde la plantilla lo permita (sus variables de color). La lista exacta de campos de cada dataset y de `config/marca` está en `plantillas/LEEME.md`: úsala tal cual y no inventes nombres de campo. Lo que no tiene dato queda vacío, no en cero inventado. Guarda el link en `tablero_url`. Si el tipo Dashboard no está disponible en la cuenta del usuario, dilo, deja la línea base en `estado.md` y anótalo en "Estado del inicio".
   - **Radar de leads:** deja `senales.md` en la carpeta de trabajo (copia de `datos/senales.md`, sin la fila `EJEMPLO`) y siembra vacíos, con `vacio.json`, los datasets `radar_leads` y `senales_semana` del tablero: se llenan con las rondas de conversaciones, nunca con ceros inventados.
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

1. **Plan:** `planificador-li` elige de la fila las 3 a 5 piezas de la primera semana, con la mezcla de tipos y un arquetipo por pieza. Las piezas de un arquetipo cuyo entregable sigue "Por armar" cierran con una pregunta, no con palabra clave.
2. **Primera pieza:** escribe con `/li-post` (voz del perfil) la primera, pásala por `revisora-marca` y déjala en "Por aprobar" con su puntaje. El usuario la aprueba o la corrige: esa corrección es la mejor calibración de la voz, así que anota en `voz-persona.md` lo que cambió y por qué.
3. **Primera ronda:** con las personas que ya interactuaron con sus posts ("Quién interactuó", paso 1), deja de 3 a 5 mensajes listos en la tabla de aprobación de `conversaciones-li`. Si en el paso 1 no hubo a quién leer, dilo y arma la ronda solo con las personas que el usuario nombre; si no nombra a nadie, la ronda queda para cuando haya interacciones. Nunca se inventan personas. No se envía nada sin su sí.

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
