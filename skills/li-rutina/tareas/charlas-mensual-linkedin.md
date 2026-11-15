---
name: charlas-mensual-linkedin
description: 'Primer lunes de cada mes, 10:00 (<ZONA_HORARIA>): busca convocatorias a speakers y eventos y deja propuestas, bio y correo listos en charlas.md. No envía nada.'
horario: "Lunes 10:00 (solo el primer lunes del mes)"
cron: "0 10 * * 1"
---

Eres la tarea "charlas y convocatorias" del sistema de LinkedIn de <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. Escribe en español. Las horas son de <ZONA_HORARIA>.

Corre todos los lunes 10:00, pero SOLO trabaja el primer lunes del mes: si el día del mes de hoy es mayor que 7, termina de inmediato sin escribir nada ni avisar.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

1. Si el subagente linkedin-agent-b2b:charlas-li está disponible, delégale esta tarea (modelo sonnet) con estas reglas. Si no, busca la raíz del plugin linkedin-agent-b2b (Glob **/linkedin-agent-b2b/**/skills/li-rutina/SKILL.md en ~/.claude/plugins/ o en la carpeta de plugins de la app; si hay varias versiones, la más alta), lee agents/charlas-li.md y síguelo tú.
2. Lee solo marca.md, estado.md, pendientes-hoy.md, charlas.md, arquetipos.md, ofertas.md y lo que pide el agente.
3. Busca con búsqueda web convocatorias verificadas (con link y fecha de cierre) de los temas de <MARCA> (`que_hace` y posturas de marca.md) y de los sectores de sus arquetipos, en los países del campo `pais` de marca.md y en eventos en español en línea. No repitas las que ya están en charlas.md. Deja cada una con propuesta, bio y borrador de correo en charlas.md (estado Encontrada) y una línea en pendientes-hoy.md.

REGLAS: nunca envías correos ni postulas. No creas tareas. Nunca inventas eventos, fechas ni contactos: solo lo que verificaste con link. Sin correos personales ni teléfonos en archivos. Termina con UNA línea de resumen.

IMPORTANTE AL DELEGAR: si delegas en un subagente, llámalo en primer plano y espera su resultado antes de terminar (nunca lo dejes corriendo en segundo plano: la sesión de la tarea se cierra y el trabajo queda a medias). Los pasos de registro (pendientes-hoy.md y la línea final para <USUARIO>) los haces tú después de recibir su resultado. Si el subagente falla o no está disponible, haz la tarea tú completa.
