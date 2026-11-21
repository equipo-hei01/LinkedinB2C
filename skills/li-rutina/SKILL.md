---
name: li-rutina
description: 'Programa el sistema de LinkedIn del usuario para que trabaje solo: instala desde plantillas las tareas programadas que corren los agentes (radar, plan y revisión del miércoles, comentarios, respuestas de la primera hora, ronda de DMs, cierre de reuniones, reutilización, tablero y análisis, auditoría, alianzas, charlas) con el modelo justo para cada una, y la tarjeta diaria de las 7:45. Usar cuando el usuario diga /li-rutina, "programa LinkedIn", "automatiza LinkedIn", "que el sistema trabaje solo", "reinstala las tareas", o como paso final de /li-inicio.'
---

# li-rutina · el sistema que no espera a que el usuario lo active

```
ESCUCHAR      radar del nicho y del algoritmo ............ lunes
PLANEAR       planificador (y revisión de mitad de semana)  lunes y miércoles
APARECER      comentarios en cuentas objetivo ............. lunes a viernes
CONVERSAR     respuestas de la primera hora + DMs .......... días de post y mar/vie
CERRAR        guía antes de la reunión y seguimiento ....... cuando hay reunión
REUTILIZAR    lo mejor de otras redes, charlas y videos .... viernes
MEDIR         tablero + analista .......................... viernes
MEJORAR       auditoría, alianzas, charlas, mejoras ........ primer lunes del mes
                 └──────── lo que se mide vuelve a ESCUCHAR y PLANEAR ────────┘
```

## Antes de nada

Lee `marca.md` en la carpeta de trabajo (ver `../../datos/LEEME.md`). Si no existe, o si su sección "Estado del inicio" no llegó al paso de las conexiones (faltan `carpeta_trabajo`, `kanban_url` o `tablero_url`), di "primero corre `/li-inicio`" y no sigas: las tareas necesitan esos valores.

"El usuario" es la persona dueña de la cuenta (campo `usuario` de `marca.md`); "la marca", el campo `marca`.

## Dónde corren

En el **computador del usuario**: ahí están su navegador con LinkedIn (la extensión Claude in Chrome, si el campo `navegador` de `marca.md` la indica) y la carpeta de trabajo. Cada tarea se crea con la herramienta de tareas programadas de la sesión (Claude Desktop o Cowork: tareas programadas; Claude Code: `/schedule` o la herramienta de triggers).

Si el usuario trabaja con capturas (sin la extensión), las tareas que leen LinkedIn no entran: usan los archivos y lo que el usuario pegue, y lo dicen en una línea.

## Quién instala las tareas

- **`/li-inicio`**, en su paso final, llama a esta skill.
- **Esta skill, a pedido** ("programa LinkedIn", "reinstala la tarea del viernes", "me cambié de computador").

En los dos casos la instalación es la misma y **siempre con el sí del usuario antes de crear cada grupo de tareas**.

## Cómo se instalan

Las plantillas están en `tareas/` (una por tarea, con `name`, `description`, `horario` y `cron` en el encabezado). `tareas/README.md` tiene la tabla de marcadores y el detalle.

1. **Lista las tareas que ya existen.** No dupliques: si una ya existe con el mismo id, ofrece actualizarla con la plantilla vigente; solo se actualiza con el sí del usuario.
2. **Arma los valores** desde `marca.md`: `<CARPETA>` = `carpeta_trabajo`, `<USUARIO>` = `usuario`, `<MARCA>` = `marca`, `<ZONA_HORARIA>` = `zona_horaria`, `<KANBAN_URL>` = `kanban_url`, `<TABLERO_URL>` = `tablero_url`, `<PLANILLA_URL>` = `planilla_historial`, `<CALENDARIO>` = `calendario`, `<CRM>` = `crm`. Los tres últimos son opcionales: si están vacíos, reemplaza el marcador por `(vacío)` y la tarea se salta ese paso. Nunca inventes un valor: si falta uno obligatorio, pregúntalo o deriva a `/li-inicio`.
3. **Muestra un grupo a la vez** con su tabla (tarea, cuándo, qué deja, modelo) y espera el sí:
   - **Diario:** tarjeta del día, comentarios, respuestas de la tarde.
   - **Semanal:** radar, plan, revisión del miércoles, ronda de conversaciones, tablero, reutilizador.
   - **Mensual:** auditoría, alianzas, charlas.
   - **Manual:** auditoría, alianzas y charlas a pedido, y publicar la siguiente pieza.

   Un sí vale para ese grupo y nada más. Si el usuario quiere solo algunas tareas del grupo, crea solo esas. Si dice que no, ese grupo no se crea y se anota en `estado.md`.
4. **Crea cada tarea** del grupo aprobado: reemplaza los marcadores en el encabezado y en el cuerpo de la plantilla; `taskId` = `name`, `description` = la del encabezado, `cronExpression` = `cron` (vacío = manual), `prompt` = todo lo que va después del encabezado. Los cron corren con la hora del computador: si no es la `zona_horaria` de `marca.md`, ajusta la hora y dilo.
5. **Cierra** con la lista de lo creado, lo que quedó sin crear y el pedido de guardarlas en modo Auto y correr cada una una vez a mano para aprobar los permisos. Anota en "Estado del inicio" de `marca.md` (o en `estado.md` si el inicio ya estaba completo) qué grupos quedaron instalados y con qué fecha.

Si hay tareas de otra red a la misma hora (por ejemplo, de un plugin de Instagram), propone correr las de LinkedIn 15 minutos antes, o al revés, según la red que el usuario diga que le trae más reuniones.

## Las tareas (hora de la `zona_horaria` de `marca.md`; valores por defecto)

| # | Cuándo | Tarea | Agente o skill | Modelo |
| --- | --- | --- | --- | --- |
| 1 | Lunes a viernes 7:45 | **Tarjeta del día** (un solo mensaje) | li-estratega | Haiku |
| 2 | Lunes 7:00 | Radar del nicho y del algoritmo → `radar.md`, ideas al banco, mejoras propuestas | radar-nicho-li | Sonnet |
| 3 | Lunes 8:00 | Plan de la semana de las cuentas | planificador-li | Sonnet |
| 4 | Miércoles 12:00 | Revisión del plan con lo publicado | planificador-li | Haiku |
| 5 | Lunes a viernes 7:30 | Comentarios del día con link y texto listo (antes de la tarjeta, para que la tarjeta los traiga) | comentarista-li | Sonnet |
| 6 | 45 min después de cada post publicado (columna "Publicada" del kanban) y 20:00 | Respuestas de la primera hora; palabra clave a DMs | respuestas-li | Sonnet |
| 7 | Martes y viernes 18:00 | Ronda de DMs: entregas de palabra clave, calificación, seguimientos día 4 y 10, citas. Termina con la tabla de aprobación y envía solo lo que el usuario apruebe en el chat | conversaciones-li | Sonnet |
| 8 | El día antes de cada reunión 18:00, el día después 10:00 y los días 4 y 10 de cada propuesta enviada 10:00 | Guía de la reunión; seguimiento, propuesta, seguimiento de la propuesta y paso en el CRM (o en `reuniones.md`) | cierre-li | Sonnet |
| 9 | Viernes 8:00 | Tablero, análisis y, si las hay, planilla y dinero desde el CRM | li-tablero + analista-li | Sonnet |
| 10 | Viernes 15:30 | Reutilizar lo mejor de la semana hacia LinkedIn | reutilizador-li | Sonnet |
| 11 | Primer lunes del mes 9:00 | Auditoría, perfil y página | auditor-li | Sonnet |
| 12 | Primer lunes del mes 9:30 | Alianzas del mes | alianzas-li | Sonnet |
| 13 | Primer lunes del mes 10:00 | Charlas y convocatorias | charlas-li | Sonnet |
| 14 (manual) | Sin horario: el usuario la corre a mano | Auditoría a pedido de los últimos 30 días, sin la regla del primer lunes; guarda `auditoria_<AAAA-MM-DD>_manual.md` sin pisar la mensual. Hay también alianzas y charlas a pedido | auditor-li, alianzas-li, charlas-li | Sonnet |
| 15 (manual) | Sin horario: el usuario la corre con un clic | **Publicar la siguiente pieza:** toma la primera de "Lista para publicar" del carril LinkedIn, le muestra al usuario qué sale y, solo con su "sí" en el chat, la publica desde su Chrome, agrega el primer comentario y la mueve a "Publicada" con el link (segunda excepción de la regla 1 de `seguridad.md`; un post al día) | li-estratega (o la tarea directa) | Sonnet |

**Radar de leads:** la ronda de DMs (tarea 7) anota cada señal en `senales.md`, calcula el puntaje y decide a quién escribir (observar, lista o escribir); la del viernes busca además en la web novedades de hasta 10 cuentas objetivo, y el tablero del viernes (tarea 9) lo pasa al panel "Radar de leads". No es una tarea aparte.

**Uso mensual opcional, sin tarea programada:** el barrido de las últimas 30 conversaciones de `/li-inbox` (modo barrido). El usuario lo pide en vivo, por ejemplo el día de la auditoría mensual; no se crea una tarea para eso.

Si el usuario no tiene página de empresa (`pagina_url` vacío), las tareas trabajan solo con el perfil. Si no da charlas, no instales las tareas de charlas.

Opus no corre en ninguna tarea programada. Se usa solo cuando el usuario pide estrategia en vivo.

La tarea 6 de la tarde (20:00) corre todos los días hábiles. Las de los 45 minutos y la tarea 8 (cada reunión y cada propuesta) dependen de fechas que cambian, así que no tienen plantilla y **ningún agente crea tareas por su cuenta**:
- **Respuestas de los 45 minutos:** las ofrece la tarea "publicar la siguiente pieza" justo después de publicar, con un "¿la creo?". Si el usuario publicó a mano o programó en LinkedIn, nadie las anota: se cubren a las 20:00 o cuando el usuario diga "responde los comentarios".
- `conversaciones-li` o `cierre-li` (cuando alguien agenda o se envía una propuesta) dejan en `pendientes-hoy.md` la tarea de la reunión que hay que crear: cuándo, qué agente y para qué reunión.
- La tarjeta del día la muestra con un "¿la creo?". Solo con el sí del usuario se crea, en la sesión en vivo.
- Si no se crea, no se pierde: las respuestas se cubren a las 20:00 y la guía de la reunión la arma la tarjeta del día anterior.

## Molde de una tarea nueva

Para una tarea de una sola vez (o una que el usuario pida y no tenga plantilla), usa este molde con los valores de `marca.md`:

```
Eres la tarea "<nombre>" del sistema de LinkedIn de <USUARIO> (<MARCA>), plugin linkedin-agent-b2b.
1. Carpeta de trabajo única: <CARPETA>. Lee marca.md (si no existe: "primero corre /li-inicio" y termina), estado.md, pendientes-hoy.md y los archivos que pide el agente <agente>.
2. Ejecuta el agente <agente> con model "<modelo>" (o busca la raíz del plugin con Glob **/linkedin-agent-b2b/**/skills/li-rutina/SKILL.md y sigue su archivo en agents/ si no puedes delegar).
3. Respeta seguridad.md: LinkedIn en solo lectura, una visita como máximo, nunca publicar, comentar, dar like, conectar ni enviar. Única excepción: la ronda de conversaciones envía lo que <USUARIO> apruebe en el chat de esa sesión (regla 1).
4. Deja el resultado en su archivo y una línea en pendientes-hoy.md.
5. Si algo falla (sin navegador, sin export, advertencia de LinkedIn), dilo en una línea y termina.
```

## La tarjeta del día (7:45)

Junta todo en un mensaje que se lee en un minuto. Lee `pendientes-hoy.md`, la fila del kanban (`kanban.md`), `conversaciones.md`, `reuniones.md`, `mejoras.md` y el último resumen del tablero. El "2/5" es reuniones de la semana frente a la `meta_reuniones_semana` de `marca.md`. La "semana N" se calcula desde `plan_inicio` de `marca.md`: N = 1 + las semanas completas que pasaron desde esa fecha (antes de `plan_inicio` es "semana 0"; si `plan_inicio` está vacío, la tarjeta omite la semana y lo deja como pendiente). La tarjeta no da horas de publicación: sale la primera pieza de "Lista para publicar", a la hora que el usuario elija.

Ejemplo (ficticio: marca "Norte Consultores", arquetipo "Implementador", palabra clave "GUIA"):

```
LINKEDIN · miércoles 19 · semana 3 · reuniones de la semana 2/5

Ayer: ¿enviaste los 4 DMs y publicaste el post de ayer? → responde "todo", "nada" o cuáles
Publicar hoy: perfil, carrusel "3 pasos que tu proyecto espera" · Implementador · GUIA (listo)
Primer comentario: link con UTM listo → respuestas 45 minutos después de publicar
Comentar (10 min): 6 links con comentario listo
DMs: 2 CALIENTES (ofrecer reunión) · 3 entregas de palabra clave · 2 seguimientos
Reunión: jueves 10:00, gerente general (Decisor) · guía lista mañana 18:00
Propuestas: 1 en día 4 sin respuesta · seguimiento listo para enviar
Para decidir: 1 mejora del radar (los documentos de 8 láminas rinden 2x) → "sí" o "no" · 1 tarea por crear (respuestas del próximo post) → "¿la creo?"
Acción de la semana: …
```

**Hora de comunidad:** la línea "Publicar hoy" siempre recuerda bloquear 30 minutos después de publicar para responder en vivo con los borradores de `respuestas-li` (los comentarios de la primera hora sostienen el alcance).

**La línea "Ayer" es la única fuente de lo enviado y lo publicado.** Con la respuesta del usuario: marca ENVIADO en `conversaciones.md` con la fecha del próximo seguimiento (día 4 o 10), mueve la pieza a "Publicada" en el kanban con fecha y link y anota el post en `log.md`; lo que no salió queda PENDIENTE y vuelve a la tarjeta. Si el usuario no responde, no supongas que se envió.

Después de leerla, `pendientes-hoy.md` se vacía, **salvo las líneas con una fecha futura** (por ejemplo "Lunes 16 · validar…"): esas se quedan y se muestran el día que indican. Si el usuario no abre la tarjeta 2 días seguidos, la siguiente trae solo lo que vence (DMs calientes y reuniones).

## Reglas

- Ninguna tarea se crea, se cambia ni se borra sin el sí del usuario en el chat.
- Ninguna tarea publica, comenta, da like, conecta ni envía (con las dos excepciones de la regla 1 de `seguridad.md`, siempre con el sí del usuario en esa sesión).
- Una visita de solo lectura a LinkedIn por tarea, como máximo. Si aparece una advertencia o un captcha, se pausan **todas** las tareas que leen LinkedIn y se avisa en la tarjeta.
- Las mejoras a las skills nunca se aplican solas: van a `mejoras.md` y las aplica `/li-mejora` con el sí del usuario.
- Si el usuario pausa el sistema ("pausa LinkedIn"), se desactivan las tareas 2 a 13 y queda solo la tarjeta con lo que vence.
- Las plantillas de `tareas/` son genéricas: nunca guardes ahí una tarea con rutas, links, correos o nombres reales.
