# linkedin-agent-b2b

Un plugin de Claude que lleva LinkedIn de punta a punta para un profesional o una empresa B2B de habla hispana: escucha el nicho, escribe con tu voz, conversa con quien se interesa, lleva cada reunión hasta la propuesta y mide qué pieza trajo reuniones. Tú apruebas; nada se publica ni se envía sin tu sí.

Se configura una sola vez con `/li-inicio` y desde ahí trabaja con tus datos: tu marca, tus clientes, tus ofertas y tus pruebas. No trae datos de nadie más.

## Para quién

- Consultores, fundadores y equipos comerciales que venden servicios o productos B2B y quieren reuniones desde LinkedIn, no solo alcance.
- Quien publica en su perfil personal, en la página de su empresa o en ambos.
- Quien escribe en español (cualquier variante: la eliges en el inicio).

No es para automatizar LinkedIn sin supervisión. Está hecho para que dediques unos minutos al día a aprobar, no para que la cuenta funcione sola.

## Qué incluye

### Skills (comandos)

| Comando | Qué hace |
| --- | --- |
| `/li-inicio` | La configuración inicial: lee tu perfil, tu página y tus posts, y arma contigo `marca.md`, las voces, los arquetipos, las ofertas, el kanban y el tablero. |
| `/li-estratega` | Tu acompañante diario: qué toca hoy, en qué orden y con qué voz. |
| `/li-rutina` | Deja las tareas programadas trabajando solas y te entrega una tarjeta diaria. |
| `/li-post` | De una idea a un post: tres ganchos sobre 21 fórmulas, un borrador humanizado y su puntaje. |
| `/li-carousel` | Carruseles con tu identidad visual, listos para subir (PDF, y PNG si los quieres para otra red). |
| `/li-comment` | Comentarios para posts de otras personas, según el tipo de post y el arquetipo. |
| `/li-reply` | Respuestas a los comentarios bajo tus posts, ordenadas por valor. |
| `/li-dm` | Nota de conexión, primer mensaje y los dos seguimientos. |
| `/li-inbox` | Ordena la bandeja de entrada y deja las respuestas listas. |
| `/li-profile` | Puntúa tu perfil sobre 100 y reescribe lo que pierde puntos. |
| `/li-plan` | La semana: qué publicar, en qué cuenta, para qué arquetipo y a quién comentar. |
| `/li-repurpose` | De un video, una charla o un boletín a varios posts que se sostienen solos. |
| `/li-audit` | Qué funcionó de lo ya publicado y qué dejar de hacer. |
| `/li-human` | El humanizador: limpia el texto y lo puntúa con cinco chequeos locales, en español y en inglés. |
| `/li-tablero` | La revisión del viernes: alcance, conversaciones, reuniones y si vas en camino a tu meta. |
| `/li-mejora` | Aplica, con tu aprobación y con respaldo, las mejoras que proponen los agentes. |

### Agentes

| Agente | Qué hace |
| --- | --- |
| `voz-persona` y `voz-empresa` | Las dos voces que escriben: tu perfil ("yo") y tu página ("nosotros"). |
| `revisora-marca` | Revisa cada borrador antes de que lo veas: voz, arquetipo, datos, llamado. |
| `radar-nicho-li` | Cada lunes: qué formatos y ganchos rinden en tu nicho y si cambió el algoritmo. |
| `planificador-li` | Arma la semana y la revisa el miércoles. |
| `comentarista-li` | Los comentarios del día, con link y texto listo. |
| `respuestas-li` | Cuida la primera hora de cada post. |
| `conversaciones-li` | Convierte interacciones en DMs listos y lleva el embudo hasta la reunión. |
| `cierre-li` | Prepara cada reunión y deja el seguimiento y el borrador de propuesta. |
| `reutilizador-li` | Lleva lo mejor de la semana a nuevas piezas. |
| `analista-li` | Cada viernes: qué funcionó, por arquetipo, gancho y formato. |
| `auditor-li` | Auditoría mensual del perfil y de la página. |
| `alianzas-li` | Propone con quién colaborar cada mes. |
| `charlas-li` | Busca convocatorias a charlas y arma las propuestas. |

### Tareas programadas

`/li-rutina` crea las tareas con horarios por defecto en tu zona horaria (puedes cambiarlos): tarjeta del día y comentarios de lunes a viernes; radar y plan los lunes; revisión del plan los miércoles; ronda de conversaciones dos veces por semana; respuestas de la tarde; tablero, análisis y reutilización los viernes; auditoría, alianzas y charlas el primer lunes del mes. La publicación es una tarea a pedido: nunca corre con horario.

### Kanban y tablero

- **Fila de contenido (kanban):** la única fuente de lo que se publica. Ideas → En preparación → Por aprobar → Lista para publicar → Publicada. Sin calendario: cada día sale la primera pieza lista, ordenada por puntaje (si lleva a reunión, si pierde valor al esperar, si trae prueba real y equilibrio entre arquetipos).
- **Tablero LinkedIn:** se actualiza los viernes con alcance, conversaciones, reuniones, hábitos y charlas, y dice si vas en camino a tu meta de reuniones por semana.

Los dos son artefactos tuyos: `/li-inicio` los crea y guarda sus links en `marca.md`.

### Datos

Todo lo tuyo vive en una carpeta de trabajo (por defecto `~/.claude/linkedin/`; ver `datos/LEEME.md`), en archivos de texto que puedes abrir y corregir: `marca.md`, `arquetipos.md`, `voz-persona.md`, `voz-empresa.md`, `ofertas.md`, `entregables.md`, `pruebas.md` y los registros de conversaciones, reuniones y charlas. La carpeta `datos/` del plugin trae las plantillas, y `ejemplo/` trae un juego completo de una empresa ficticia para ver cómo queda un inicio terminado.

## Cómo empezar

1. Instala el plugin.

   **Claude Code**

   ```
   /plugin marketplace add [URL DEL REPOSITORIO]
   /plugin install linkedin-agent-b2b@linkedin-agent-b2b
   ```

   **App de escritorio de Claude:** agrega el plugin desde Personalizar → Plugins.

2. Corre `/li-inicio`. Con tu permiso lee tu perfil, tu página, tus últimos posts, tus métricas y tu sitio web, te pide los documentos que tengas (manual de marca, brochure, casos) y te propone tu ADN, tus voces y tus arquetipos para que los corrijas. Después puntúa tu perfil, crea tu kanban y tu tablero con la línea base, instala las tareas programadas y deja lista la primera semana. Dura entre 60 y 90 minutos y se puede retomar si se interrumpe.
3. Cuando termine, corre `/li-estratega` para tu primer día, y `/li-rutina` cuando quieras dejar las tareas programadas.

Si falta `marca.md` en tu carpeta de trabajo, cualquier comando te dirá que primero corras `/li-inicio`.

## Reglas de seguridad y aprobación

LinkedIn restringe las cuentas con actividad automatizada. Por eso el plugin sigue estas reglas en todas sus skills, agentes y tareas (el detalle está en `datos/seguridad.md`):

- **Nada se publica ni se envía sin tu sí en el chat.** Todo queda como borrador. Solo hay dos excepciones, y las dos exigen tu aprobación en esa misma sesión: enviar los mensajes de una ronda de conversaciones que aprobaste uno por uno o por lote, y publicar la siguiente pieza que ya dejaste en "Lista para publicar".
- **Un post al día** como máximo, entre perfil y página.
- **Máximo 15 DMs nuevos al día y 50 invitaciones por semana**, todos distintos y con una razón concreta.
- **Lectura mínima:** una visita de solo lectura a LinkedIn por tarea, sin recorrer perfiles en serie.
- **Si aparece una advertencia o un captcha, todo se detiene** y se te avisa.
- **Sin correos ni teléfonos** de otras personas en archivos, tableros ni planillas.
- **Nada inventado:** ningún caso, cifra, cliente ni testimonio que no esté en tu `pruebas.md`. Si falta un dato, el borrador vuelve con `[TU DATO]` y una pregunta.
- **Amigos y cercanos** reciben un mensaje cercano, no el comercial.

Los cinco chequeos del humanizador son heurísticas locales: corren en tu equipo, no llaman a ningún detector y no prometen el veredicto de ninguno.

## Requisitos

- La **app de escritorio de Claude** o **Claude Code**.
- La **extensión de Chrome de Claude**, para leer LinkedIn en solo lectura desde tu propio navegador y tu propia sesión. Sin ella, el plugin funciona con las capturas y los textos que pegues en el chat.
- Python 3 para el humanizador y las negritas (sin dependencias). Para exportar los carruseles, Node.js con Playwright; sin Playwright, el carrusel queda en HTML para imprimirlo como PDF desde Chrome.
- Opcional: un calendario, un CRM y una planilla para el historial. Si los conectas, se anotan en `marca.md`; si no, el plugin lleva todo en sus propios archivos.

## Atribución y licencia

Este plugin se basa en [linkedin-agent](https://github.com/Jakeschincariol/linkedin-agent-skill) de Jake Schincariol, publicado con licencia MIT. De ahí vienen las fórmulas de gancho, la rúbrica del perfil y el humanizador, que aquí se ampliaron al español.

Licencia MIT. Ver `LICENSE`.

## Referencias

Algunas reglas de la casa (el titular, los destacados, la experiencia y el banner del perfil, los mensajes y sus seguimientos, y la forma de los posts) se inspiran en publicaciones de David Ibáñez y Luis Garau sobre LinkedIn para B2B en español, y en videos públicos de otros creadores que enseñan LinkedIn. Aquí están reescritas y adaptadas: lo que diga este plugin es responsabilidad del plugin, no de esas personas.
