---
name: auditoria-mensual-linkedin
description: 'Primer lunes de cada mes, 9:00 (<ZONA_HORARIA>): auditor-li revisa el mes, vuelve a puntuar perfil y página, compara la mezcla de arquetipos con el reparto vigente y propone qué cambiar. No entra a LinkedIn.'
horario: "Lunes 9:00 (la tarea solo actúa el primer lunes del mes)"
cron: "0 9 * * 1"
---

Tarea "auditoría mensual" de LinkedIn para <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. Corre todos los lunes 9:00 (<ZONA_HORARIA>), pero SOLO trabaja el primer lunes del mes: si el día del mes de hoy es mayor que 7, terminar de inmediato sin escribir nada ni avisar. Escribe en español.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

FILA DE CONTENIDO: lo que se publica vive en el tablero kanban "Fila de contenido" (<KANBAN_URL>, colección piezas, herramienta ArtifactData: cárgala con ToolSearch "select:ArtifactData"). Lee <CARPETA>/kanban.md antes de leer o tocar piezas: ahí están los campos, el puntaje, las columnas, quién mueve qué y los límites (máximo 6 ideas del sistema por semana y 5 piezas en curso).

Si el subagente linkedin-agent-b2b:auditor-li está disponible, delégale la auditoría (modelo sonnet) con estas reglas; si no, busca la raíz del plugin linkedin-agent-b2b (Glob **/linkedin-agent-b2b/**/skills/li-rutina/SKILL.md en ~/.claude/plugins/ o en la carpeta de plugins de la app; si hay varias versiones, la más alta), lee agents/auditor-li.md y síguelo tú.

REGLAS: no entrar a LinkedIn ni abrir navegador (usar solo archivos ya descargados). No inventar cifras. No crear tareas. Las mejoras a las skills van a mejoras.md como propuesta, nunca se aplican. Sin correos ni teléfonos en los archivos.

PASOS
1. Leer en <CARPETA>:
   - Las carpetas de exports del último mes: exports/<AAAA-MM-DD>/ (archivos de la tarea semanal y resumen_semanal.md).
   - borradores/analisis_semanal_*.md y plan_*.md del mes; conversaciones.md; reuniones.md; log.md; radar.md; estado.md; arquetipos.md; ofertas.md.
   - exports/perfil_snapshot.json (titular, Acerca de, destacados, página de empresa).
2. Analizar con las skills linkedin-agent-b2b:li-audit y li-profile (con rubric.json para el perfil y rubric-pagina.json para la página, si hay):
   - Qué posts del mes funcionaron (impresiones, interacciones, comentarios, conversaciones y reuniones que trajeron) y por qué: arquetipo, gancho, formato (texto, video, carrusel), día y hora. Compara el puntaje estimado en log.md con el real.
   - Mezcla real de arquetipos frente al reparto vigente de arquetipos.md.
   - Embudo del mes desde conversaciones.md y reuniones.md: personas detectadas → DMs enviados → respuestas → citas → propuestas → ganadas, contra la `meta_reuniones_semana` de marca.md.
   - Crecimiento: seguidores del perfil y de la página de empresa (si hay `pagina_url` en marca.md), frente al mes anterior.
   - Perfil y página: puntaje sobre 100 con la rúbrica y qué quedó desactualizado respecto a la oferta vigente (sin tocar el tablero).
3. Guardar <CARPETA>/borradores/auditoria_<AAAA-MM>.md con: 3 cosas que repetir, 3 que dejar de hacer, la mezcla de arquetipos para el mes siguiente, el puntaje de perfil y página frente al mes anterior, 3 cambios concretos listos y las 3 líneas de contenido con que cierra li-audit (tema, arquetipo, tipo de post, pilar de marca.md si hay, y por qué según los datos). Esas 3 líneas van como ideas a la columna "ideas" del kanban (ArtifactData set, nota "Origen: auditoría <fecha> · Fuente: borradores/auditoria_<AAAA-MM>.md"), dentro del límite de 6 ideas del sistema por semana y sin duplicar temas; las que no quepan, a pendientes-hoy.md. Actualizar ultimo_audit y ultimo_profile en estado.md. Una línea en pendientes-hoy.md.
4. Terminar con UNA línea para <USUARIO> con la cifra más importante del mes (citas agendadas o la mejor publicación) y la ruta del archivo.

IMPORTANTE AL DELEGAR: si delegas en un subagente, llámalo en primer plano y espera su resultado antes de terminar (nunca lo dejes corriendo en segundo plano: la sesión de la tarea se cierra y el trabajo queda a medias). Los pasos de registro (pendientes-hoy.md y la línea final para <USUARIO>) los haces tú después de recibir su resultado. Si el subagente falla o no está disponible, haz la tarea tú completa.
