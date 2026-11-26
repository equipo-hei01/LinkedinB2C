# Plantillas de las tareas programadas

Cada archivo de esta carpeta es la **plantilla** de una tarea programada de LinkedIn. Las tareas no se instalan solas con el plugin: viven fuera de él, en la app de escritorio, y en cada corrida leen las skills y los agentes de la versión instalada del plugin linkedin-agent-b2b.

`/li-inicio` las instala en su paso final (y `/li-rutina` a pedido): toma cada plantilla, reemplaza los marcadores con los valores de `marca.md` y crea la tarea con la herramienta de tareas programadas, siempre con el sí del usuario antes de crear cada grupo.

## Los marcadores

| Marcador | Sale de `marca.md` | Si está vacío |
| --- | --- | --- |
| `<CARPETA>` | `carpeta_trabajo` (ruta absoluta, sin barra final) | No se instala nada: primero `/li-inicio` |
| `<USUARIO>` | `usuario` | No se instala nada: primero `/li-inicio` |
| `<MARCA>` | `marca` | No se instala nada: primero `/li-inicio` |
| `<ZONA_HORARIA>` | `zona_horaria` | Se pregunta al usuario |
| `<KANBAN_URL>` | `kanban_url` | No se instala nada: primero `/li-inicio` crea la Fila de contenido |
| `<TABLERO_URL>` | `tablero_url` | No se instala `tablero-linkedin-semanal` |
| `<PLANILLA_URL>` | `planilla_historial` (opcional) | Se reemplaza por `(vacío)`: la tarea omite la planilla |
| `<CALENDARIO>` | `calendario` (opcional) | Se reemplaza por `(vacío)`: la tarea cuenta las citas desde `reuniones.md` |
| `<CRM>` | `crm` (opcional) | Se reemplaza por `(vacío)`: la tarea usa `reuniones.md` para el dinero |

Dentro de las plantillas hay otros textos entre `< >` que **no** son marcadores y no se reemplazan (por ejemplo `<AAAA-MM-DD>`, `<fecha>`, `<tema>`, `<link>`): los completa la tarea cuando corre. Solo se reemplazan los nueve de la tabla.

Ninguna plantilla lleva correos, IDs de conectores ni rutas fijas. Cuando una tarea necesita un conector (calendario, planilla, CRM), lo busca con ToolSearch entre los que el usuario tenga conectados.

## Las tareas (horario y cron por defecto)

Las horas son de la `zona_horaria` de `marca.md`. El cron corre con la hora del computador: si el computador está en otra zona, ajusta la hora del cron al crear la tarea.

| Grupo | Id | Cuándo | Cron |
| --- | --- | --- | --- |
| Diario | `tarjeta-diaria-linkedin` | Lunes a viernes 7:45 | `45 7 * * 1-5` |
| Diario | `comentarios-diarios-linkedin` | Lunes a viernes 7:30 | `30 7 * * 1-5` |
| Diario | `respuestas-tarde-linkedin` | Lunes a viernes 20:00 | `0 20 * * 1-5` |
| Semanal | `radar-nicho-linkedin` | Lunes 7:00 | `0 7 * * 1` |
| Semanal | `plan-semanal-linkedin` | Lunes 8:00 | `0 8 * * 1` |
| Semanal | `revision-plan-miercoles-linkedin` | Miércoles 12:00 | `0 12 * * 3` |
| Semanal | `ronda-conversaciones` | Martes y viernes 18:00 | `0 18 * * 2,5` |
| Semanal | `cuentas-objetivo-semanal` | Lunes 10:30 | `30 10 * * 1` |
| Diaria | `bienvenida-contactos-linkedin` | Lunes a viernes 12:30 | `30 12 * * 1-5` |
| Semanal | `tablero-linkedin-semanal` | Viernes 8:00 | `0 8 * * 5` |
| Semanal | `reutilizador-viernes-linkedin` | Viernes 15:30 | `30 15 * * 5` |
| Mensual | `auditoria-mensual-linkedin` | Lunes 9:00 (la tarea solo actúa el primer lunes del mes) | `0 9 * * 1` |
| Mensual | `alianzas-mensual-linkedin` | Lunes 9:30 (solo el primer lunes del mes) | `30 9 * * 1` |
| Mensual | `charlas-mensual-linkedin` | Lunes 10:00 (solo el primer lunes del mes) | `0 10 * * 1` |
| Manual | `auditoria-linkedin-manual` | Sin horario | `—` |
| Manual | `alianzas-linkedin-manual` | Sin horario | `—` |
| Manual | `charlas-linkedin-manual` | Sin horario | `—` |
| Manual | `publicar-siguiente-pieza-linkedin` | Sin horario: el usuario la lanza con un clic | `—` |

Fuera de estas plantillas quedan las tareas de una sola vez (las respuestas de los 45 minutos después de publicar y las de cada reunión o propuesta): se crean en vivo, con el sí del usuario, cuando la tarjeta del día las ofrece.

## Cómo las instala `/li-inicio` (o `/li-rutina`)

1. Lee `marca.md` de la carpeta de trabajo. Si falta, o faltan `carpeta_trabajo`, `usuario`, `marca` o `kanban_url`, no instala nada y deriva a `/li-inicio`.
2. Lista las tareas programadas que ya existen, para no duplicar ninguna.
3. Muestra al usuario la tabla de un grupo (Diario, Semanal, Mensual, Manual) con lo que se va a crear y espera su sí. Un sí por grupo; sin sí, ese grupo no se crea.
4. Por cada plantilla del grupo: reemplaza los nueve marcadores en el encabezado y en el cuerpo, y crea la tarea con `taskId` = el `name` del encabezado, `description` = la del encabezado, `cronExpression` = el `cron` del encabezado (vacío = tarea manual) y `prompt` = todo lo que está después del encabezado.
5. Le pide al usuario que las guarde en modo Auto y corra cada una una vez a mano, para aprobar los permisos.

## Cómo reinstalar una a mano

Sirve para recuperar una tarea que se borró, cambiar de computador o actualizar una tarea después de subir la versión del plugin.

1. En una sesión de Claude, pide: "reinstala la tarea programada `<id>` desde la plantilla `skills/li-rutina/tareas/<id>.md` del plugin linkedin-agent-b2b, con los valores de mi `marca.md`".
2. Claude lee la plantilla y `marca.md`, reemplaza los marcadores, te muestra el resultado y, con tu sí, crea la tarea (o actualiza la que existe con el mismo id) con los campos del paso 4 de arriba.
3. Guárdala en modo Auto y córrela una vez a mano.

Si cambiaste de carpeta de trabajo, de kanban o de tablero, corrige primero `marca.md` y después reinstala: las tareas ya creadas guardan los valores viejos.

## Cuando cambies una tarea

Las plantillas son genéricas: nunca copies aquí una tarea ya instalada con tus rutas, links o nombres. Si quieres cambiar cómo trabaja una tarea para todos, edita la plantilla con los marcadores y reinstálala. Si el cambio es solo tuyo (otra hora, por ejemplo), cámbialo en la tarea instalada y anótalo en `estado.md`.
