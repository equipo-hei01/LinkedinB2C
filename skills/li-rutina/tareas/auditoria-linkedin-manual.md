---
name: auditoria-linkedin-manual
description: 'Sin horario, el usuario la corre cuando quiere. Misma auditoría que la mensual (auditor-li) sobre los últimos 30 días, sin la regla del primer lunes. No entra a LinkedIn.'
horario: "Manual (sin horario)"
cron: ""
---

Tarea "auditoría a pedido" de LinkedIn para <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. <USUARIO> la lanza a mano cuando quiere: trabaja siempre, cualquier día. Escribe en español. Las horas son de <ZONA_HORARIA>.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

FILA DE CONTENIDO: lo que se publica vive en el tablero kanban "Fila de contenido" (<KANBAN_URL>, colección piezas, herramienta ArtifactData: cárgala con ToolSearch "select:ArtifactData"). Lee <CARPETA>/kanban.md antes de leer o tocar piezas: ahí están los campos, el puntaje, las columnas, quién mueve qué y los límites (máximo 6 ideas del sistema por semana y 5 piezas en curso).

Si el subagente linkedin-agent-b2b:auditor-li está disponible, delégale la auditoría (modelo sonnet) con estas reglas y espera su resultado en primer plano; si no, busca la raíz del plugin linkedin-agent-b2b (Glob **/linkedin-agent-b2b/**/skills/li-rutina/SKILL.md en ~/.claude/plugins/ o en la carpeta de plugins de la app; si hay varias versiones, la más alta), lee agents/auditor-li.md y síguelo tú.

REGLAS: no entrar a LinkedIn ni abrir navegador (usar solo archivos ya descargados). No inventar cifras: si un dato no está, dilo. No crear tareas. Las mejoras a las skills van a mejoras.md como propuesta, nunca se aplican. Sin correos ni teléfonos en los archivos.

PERIODO: los últimos 30 días hasta hoy. Si el sistema lleva menos tiempo (mira la sección "Estado del inicio" de marca.md), dilo y analiza lo que haya.

PASOS
1. Leer en <CARPETA>:
   - Las carpetas de exports del periodo: exports/<AAAA-MM-DD>/ (archivos de la tarea semanal y resumen_semanal.md). Usa el export más reciente para las cifras.
   - borradores/analisis_semanal_*.md, plan_*.md y ronda-*.md del periodo; conversaciones.md; reuniones.md; log.md; radar.md; estado.md; amigos.md; rondas_log.md; arquetipos.md; ofertas.md.
   - exports/perfil_snapshot.json (titular, Acerca de, destacados, página de empresa).
2. Analizar con las skills linkedin-agent-b2b:li-audit y li-profile (con rubric.json para el perfil y rubric-pagina.json para la página, si hay):
   - Qué posts funcionaron (impresiones, interacciones, comentarios, conversaciones y reuniones que trajeron) y por qué: arquetipo, gancho, formato, día y hora. Compara el puntaje estimado en log.md con el real cuando exista.
   - Mezcla real de arquetipos frente al reparto vigente de arquetipos.md.
   - Embudo desde conversaciones.md y reuniones.md: personas detectadas → DMs enviados → respuestas → citas → propuestas → ganadas, contra la `meta_reuniones_semana` de marca.md. Separa a los amigos/as (Arquetipo "Amigo/a") del embudo comercial.
   - Hábitos: rondas hechas (rondas_log.md) y posts publicados frente al plan.
   - Crecimiento: seguidores del perfil y de la página de empresa (si hay `pagina_url` en marca.md), frente a la auditoría anterior.
   - Perfil y página: puntaje sobre 100 con la rúbrica y qué quedó desactualizado respecto a la oferta vigente (ofertas.md), sin tocar el tablero.
3. Guardar <CARPETA>/borradores/auditoria_<AAAA-MM-DD>_manual.md con: resumen en 5 líneas, 3 cosas que repetir, 3 que dejar de hacer, mezcla de arquetipos recomendada, puntaje de perfil y página (y su comparación con la última auditoría si existe) y 3 cambios concretos listos para aplicar. No sobrescribas las auditorías mensuales (auditoria_<AAAA-MM>.md). Actualiza ultimo_audit en estado.md. Una línea en pendientes-hoy.md.
4. Terminar con UNA línea para <USUARIO> con la cifra más importante (citas o la mejor publicación) y la ruta del archivo.
