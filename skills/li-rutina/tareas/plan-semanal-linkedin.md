---
name: plan-semanal-linkedin
description: 'Lunes 8:00 (<ZONA_HORARIA>): elige de la fila del kanban las 3 a 5 piezas de la semana (dentro del límite de 5 en curso), las redacta y revisa y las deja en "Por aprobar" con su puntaje. Sin fechas. No entra a LinkedIn ni publica.'
horario: "Lunes 8:00"
cron: "0 8 * * 1"
---

Tarea "plan de la semana" de LinkedIn para <USUARIO> (<MARCA>). Lunes 8:00 (<ZONA_HORARIA>). Escribe todo en español. Plugin linkedin-agent-b2b.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

FILA DE CONTENIDO: lo que se publica vive en el tablero kanban "Fila de contenido" (<KANBAN_URL>, colección piezas, herramienta ArtifactData: cárgala con ToolSearch "select:ArtifactData"). Lee <CARPETA>/kanban.md antes de tocar piezas: ahí están los campos, el puntaje, las columnas, quién mueve qué y los límites. No hay fechas de publicación: el tablero publica cada día la primera pieza lista de cada carril por puntaje.

OBJETIVO: que <USUARIO> tenga, sin saturarse, las piezas de la semana redactadas y listas para su sí. Meta comercial: la `meta_reuniones_semana` de marca.md y, si ofertas.md tiene una oferta con fecha (un evento o una formación abierta), sus inscripciones hasta esa fecha.

REGLAS DURAS
- No entrar a LinkedIn, ni abrir navegador, ni publicar nada.
- Nunca mover piezas a "lista" ni a "publicada": eso es de <USUARIO>.
- Límite: máximo 5 piezas entre "prep" y "aprobar". Si ya hay 5 o más, no pases nada nuevo a preparación: en su lugar, termina las piezas de "prep" que ya existen (texto revisado → "aprobar") y avísale a <USUARIO> cuántas esperan su sí.
- Nunca inventar casos, métricas, nombres ni testimonios. Si falta un dato, [dato real: …] y anotarlo en "insumos que faltan".
- Nunca mezclar con las `marcas_que_no_se_mezclan` de marca.md. No crear ni anotar tareas programadas (las respuestas de los 45 minutos las ofrece la tarea de publicar).

PASOS
0. Si el subagente linkedin-agent-b2b:planificador-li está disponible, delégale los pasos 1 y 2 (modelo sonnet) con estas reglas y espera su resultado; si no, busca la raíz del plugin linkedin-agent-b2b (Glob **/linkedin-agent-b2b/**/skills/li-rutina/SKILL.md en ~/.claude/plugins/ o en la carpeta de plugins de la app; si hay varias versiones, la más alta), lee agents/planificador-li.md y síguelo tú.
1. Contexto (leer lo que exista, sin fallar si falta):
   - De la raíz del plugin: puntaje.md.
   - De <CARPETA>: marca.md, voz-persona.md, voz-empresa.md, arquetipos.md (reparto vigente), kanban.md, estado.md, pendientes-hoy.md, radar.md ("Esta semana"), entregables.md, ofertas.md, pruebas.md, seguridad.md, conversaciones.md y el más reciente borradores/analisis_semanal_*.md.
   - El kanban completo (todas las columnas).
2. Elegir la semana: cuenta las piezas en "prep" + "aprobar". Si hay espacio bajo 5, elige de "ideas" (las de <USUARIO> primero en empate) las que mejor calcen con el cuello de botella del último análisis y con el reparto vigente de arquetipos, hasta llegar a 5 en curso y nunca más de 5 piezas nuevas. Una palabra clave por pieza: la del arquetipo en entregables.md (una palabra ligada a una oferta con fecha, solo mientras esa oferta esté abierta). Rota formatos: nunca el mismo 3 veces seguidas en un carril. LinkedIn es un carril (perfil y página): no elijas dos del mismo tema para la misma semana sin decirlo.
3. Para cada pieza elegida: ArtifactData update (con if_version) a col "prep", agrega a nota "Plan <fecha del lunes>", y completa cta, formato, arq, tema y el puntaje (cita, vence, prueba) con criterio.
4. Redactar cada una con linkedin-agent-b2b:li-post. Perfil: voz de voz-persona.md, en "yo", 120-180 palabras, nombrar el miedo que el lector no dice, firma `firma_persona` de marca.md. Página: voz de voz-empresa.md, en "nosotros", firma `firma_empresa`. Siempre los `hashtags` de marca.md (si hay). Link solo en el primer comentario, con UTM. Negrita Unicode con bold.py en máximo 3 frases, solo si `negritas_unicode` de marca.md dice sí. hookscore.py es una señal; decide puntaje.md.
5. Revisión de marca de cada borrador (subagente revisora-marca si está; si no, tú): voz, un arquetipo con su dolor y alivio, un reencuadre, nada inventado, li-human en PASS, CTA sin urgencia falsa, link fuera del cuerpo y el `metodo` de marca.md en su orden, si lo hay. Nunca quitar la idea o la tesis de <USUARIO> para subir un puntaje.
6. Con el texto revisado: ArtifactData update a col "aprobar" con texto, comentario y archivo (si aplica). Las que no se alcanzaron a terminar quedan en "prep" con lo que falte en nota.
7. Guardar <CARPETA>/borradores/plan_<AAAA-MM-DD>.md: tabla (pieza, carril, cuenta, formato, arquetipo, palabra clave, puntaje, columna en que quedó), cada post listo para copiar con su primer comentario y su receta, y "Insumos que faltan". Una línea en pendientes-hoy.md: "Plan: N piezas esperan tu sí en Por aprobar del kanban".
8. Terminar con UNA línea: "Plan de la semana listo: N piezas en Por aprobar (X perfil, Y página) · en curso C de 5 · faltan K insumos · kanban: <KANBAN_URL>".

IMPORTANTE AL DELEGAR: si delegas en un subagente, llámalo en primer plano y espera su resultado antes de terminar. Los pasos de registro los haces tú después. Si el subagente falla o no está disponible, haz la tarea tú completa.
