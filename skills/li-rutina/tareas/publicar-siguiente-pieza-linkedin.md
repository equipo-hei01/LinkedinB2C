---
name: publicar-siguiente-pieza-linkedin
description: 'Sin horario, el usuario la lanza con un clic. Toma la primera pieza de "Lista para publicar" del kanban, le muestra qué saldrá, y solo con su "sí" en el chat la publica en LinkedIn y la marca Publicada con su link.'
horario: "Manual (sin horario): el usuario la lanza con un clic"
cron: ""
---

Tarea "publicar la siguiente pieza" de LinkedIn para <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. <USUARIO> la lanza a mano y está en la sesión. Escribe en español. Las horas y fechas son de <ZONA_HORARIA>.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

REGLA DE ORO: no publicas nada sin que <USUARIO> escriba "sí" (o equivalente claro) EN ESTA SESIÓN, después de ver exactamente lo que va a salir. Si <USUARIO> no responde, terminas sin publicar. Lee primero <CARPETA>/seguridad.md (regla 1, segunda excepción) y <CARPETA>/kanban.md.

Si el campo `navegador` de marca.md dice que el usuario trabaja con capturas (sin la extensión de Chrome), esta tarea no publica: haz los pasos 1 y 2, entrega el texto y el primer comentario listos para copiar y, cuando <USUARIO> diga que publicó y pegue el link, haz el paso 4.

PASO 1 · Elegir la pieza
- Carga ArtifactData con ToolSearch "select:ArtifactData" y lee el kanban: url <KANBAN_URL>, collection "piezas", action "list" con query.limit 200.
- Si <USUARIO> nombró una pieza al lanzar la tarea, usa esa. Si no, toma la primera de "lista" del carril linkedin con el mismo orden del tablero: primero las que tienen `fija` a 2 días o menos (la más cercana primero); luego por puntaje = cita×3 + vence×2 + prueba×2 + 3 si su arquetipo no está entre los 2 últimos de "publicada" en el carril; en empate, por título.
- Antes de seguir, revisa: (a) que no haya ya una pieza del carril linkedin en "publicada" con pubAt de hoy: si la hay, dilo y termina, porque es un post al día; (b) que no salió hoy otra del mismo `tema`; (c) que la pieza tenga `texto`. Si falla algo, explícalo y termina sin publicar.

PASO 2 · Mostrar y pedir el sí
Muéstrale a <USUARIO>, tal cual va a salir:
- Cuenta: perfil personal o página de empresa (campo `cuenta`).
- Texto completo (campo `texto`), sin cambiarle nada.
- Archivo (campo `archivo`): ruta y si existe en disco (compruébalo). Si la ruta no existe, dilo: sin el archivo no se publica una pieza que lo necesita.
- Primer comentario (campo `comentario`), si hay.
- A quién avisar antes (campo `tag`), si hay, recordándole que es mejor avisarle antes de publicar.
Pregunta: "¿La publico ahora? Responde «sí» o dime qué cambiar." Y detente.
Si <USUARIO> pide un cambio en el texto, aplícalo, muéstralo de nuevo y espera otro sí; guarda el texto nuevo en la pieza (ArtifactData update con if_version) antes de publicar.

PASO 3 · Publicar (solo con el sí)
- Carga Claude in Chrome con una sola ToolSearch: tabs_context_mcp, tabs_create_mcp, navigate, computer, find, read_page, get_page_text, file_upload, tabs_close_mcp. Abre una pestaña propia.
- Perfil personal: https://www.linkedin.com/feed/ → "Crear publicación" / "Empieza una publicación". Página de empresa: la `pagina_url` de marca.md, en su vista de administrador → "Crear" / "Empieza una publicación" como la página. Confirma en el editor que publicas como la cuenta correcta (foto y nombre arriba del cuadro).
- Pega el texto exactamente. Si hay archivo, súbelo con el botón de foto/video/documento usando file_upload; espera a que termine de procesar y confirma la vista previa. Para un PDF (carrusel), usa "Agregar un documento" y ponle título con el campo `t`.
- Antes de apretar "Publicar", toma una captura y comprueba que el texto, el archivo y la cuenta son los correctos. Luego publica.
- Espera a que aparezca el post y copia su link ("Copiar enlace a la publicación" en el menú ··· del post).
- Si hay `comentario`, agrégalo como primer comentario del post, exactamente, y publícalo.
- Si en cualquier momento aparece una advertencia, un captcha, un límite, un error de carga o algo que no calza: para ahí, no reintentes, cierra la pestaña y cuéntale a <USUARIO> qué alcanzó a salir y qué no.

PASO 4 · Registrar
- ArtifactData update de la pieza (con if_version): col "publicada", pubAt = fecha de hoy (AAAA-MM-DD), link = el link del post, actualizado = ahora.
- Agrega la fila a <CARPETA>/log.md (fecha y hora, cuenta y voz, gancho y fórmula si la conoces, primera línea, arquetipo, llamado; puntajes de hook/viralidad/alcance si estaban en la pieza o en el plan; "Métricas reales" = "(pendiente)").
- Si la pieza tenía `tag`, deja en pendientes-hoy.md: "Avisar a <tag> que salió el post: <link>".
- Cierra la pestaña y escribe: "Publicado: <título> · <cuenta> · <link>".
- Recuérdale a <USUARIO> la hora de comunidad: quedarse 30 minutos respondiendo los primeros comentarios.
- Pregunta: "¿Creo la tarea de respuestas para dentro de 45 minutos?". Solo con el sí de <USUARIO> en esta sesión, crea una tarea programada de una sola vez (fireAt = ahora + 45 min) llamada "LinkedIn · respuestas 45 min · <título corto>", cuyo prompt pida usar el agente respuestas-li de linkedin-agent-b2b sobre ese link, dejar las respuestas listas en <CARPETA>/borradores/respuestas_<fecha>.md, pasar la palabra clave a conversaciones.md y no responder nunca. Si dice que no, termina: las respuestas de las 20:00 lo cubren.

NUNCA: publicar sin el sí de esta sesión, publicar dos posts de LinkedIn el mismo día, cambiar el texto sin mostrarlo, comentar en posts ajenos, dar like o conectar. Si <USUARIO> pide publicar en otra red, dile que esta tarea es solo para LinkedIn.
