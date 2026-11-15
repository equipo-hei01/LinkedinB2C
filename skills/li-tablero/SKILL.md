---
name: li-tablero
description: 'Actualiza cada semana el tablero de LinkedIn del usuario y, si la tiene, su planilla de historial: alcance, conversaciones, reuniones, hábitos, charlas y dinero desde el CRM, y dice si va en camino a la meta. Usar en la tarea del viernes, o cuando el usuario diga "actualiza el tablero", "cómo vamos con la meta", "refresca el dinero" o "pasa los números de la semana".'
---

# li-tablero

**Estructura de los datos:** los nombres de los datasets y de sus columnas son los de `plantillas/LEEME.md` y `plantillas/tablero-datos-vacios.json` del plugin; si algo de aquí no coincide, manda la plantilla. Las metas, el ticket, la moneda y las fechas del plan viven en el dataset `supuestos`, y las fichas de cada arquetipo, en el dataset `arquetipos`.

La revisión semanal de números. Lee las fuentes, escribe **solo datos** (nunca la página del tablero) y cierra con una frase: si se va en camino, cuál es el cuello de botella y la única acción de la semana. Respeta `seguridad.md`: una vez por semana, solo lectura en LinkedIn.

## Antes de nada

Lee `marca.md` en la carpeta de trabajo (ver `../../datos/LEEME.md`). Si no existe, di "primero corre `/li-inicio`" y no sigas. Si `tablero_url` está vacío, lo mismo: el tablero lo crea `/li-inicio`.

De `marca.md` salen: `meta_reuniones_semana` (la meta), `ticket_meta`, `moneda`, `zona_horaria`, `pagina_url`, `tablero_url`, `kanban_url`, `planilla_historial`, `calendario`, `crm`, `navegador` y las `marcas_que_no_se_mezclan`. Los nombres de los arquetipos salen de `arquetipos.md`.

En los datos, **"Perfil"** es el perfil personal del usuario y **"Página"** es la página de la marca. Si `pagina_url` está vacío, se omite todo lo de la página.

## Dónde está todo

- **Tablero:** el `tablero_url` de `marca.md` (artefacto tipo Dashboard). Se escribe con la base de datos del artefacto: un documento `datasets/<nombre>` por fuente, cada uno con su archivo JSON subido como asset y la marca `{via: "claude", at}`. Siempre con `if_version`. La página (`files/index.html`) no la edita esta skill ni la tarea.
- **Historial (opcional):** la `planilla_historial` de `marca.md`. Si está vacío, omite todo lo de la planilla. Si hay, usa el conector de planillas que el usuario tenga conectado (búscalo con ToolSearch). Respeta la configuración regional de la planilla (formato de fecha, decimales, separador de fórmulas). Escribe con una actualización de valores en la primera fila vacía; nunca con "append", porque desplaza las fórmulas.
- **Carpeta de trabajo:** ver `../../datos/LEEME.md`.
- **Versión detallada, paso a paso:** la plantilla `../li-rutina/tareas/tablero-linkedin-semanal.md` (columnas de cada dataset y de cada hoja).

## Paso a paso (viernes 8:00, hora de la `zona_horaria`)

1. **LinkedIn (una visita de solo lectura):** baja los exports de la semana del perfil y de la página desde el navegador del usuario, y lee el Panel del perfil (visualizaciones del perfil, impresiones, apariciones en búsquedas). Si `navegador` dice que el usuario trabaja con capturas, no entres: usa los exports que haya dejado en `exports/<AAAA-MM-DD>/`.
   - **Lee cada cifra por su etiqueta exacta** ("N visualizaciones del perfil"), con el texto de la página, no por su posición en la pantalla. No la confundas con los seguidores nuevos ni con los seguidores de la página.
   - **Anota el periodo** que LinkedIn muestra junto a cada cifra. Si no aparece, escribe "periodo sin dato": no supongas 7 días. Las visualizaciones del perfil suelen ser un acumulado largo, así que no se comparan con las impresiones de 7 días.
   - **Control:** compara cada cifra con la semana anterior. Si cambia más de 50 % sin una razón visible, vuelve a leerla una vez; si sigue rara, márcala "[revisar]" en el resumen y avísale al usuario en vez de guardarla como dato firme.
2. **Reuniones:** si hay `calendario`, léelo en solo lectura con el conector de calendario que el usuario tenga conectado (solo ese calendario, nunca los de las `marcas_que_no_se_mezclan`). Por cada reunión, toma origen, cargo, arquetipo y el tema de lo que quiere resolver. Sin nombres, correos ni teléfonos. Si no hay calendario, cuenta desde `reuniones.md` y los estados CITA de `conversaciones.md`.
3. **Conversaciones:** cuenta en `conversaciones.md` las personas con interés, los DMs enviados, las respuestas y las citas de la semana. Cuenta también por arquetipo.
4. **Hábitos:** posts publicados (columna "Publicada" del kanban, por fecha) frente a los que eligió el plan del lunes (nota "Plan <lunes>") y rondas de conversación hechas, de 2 (`rondas_log.md`).
5. **Evento o formación abierta:** si `ofertas.md` tiene una oferta con fecha y hay un archivo con sus inscritos, anota cuántos. Si no, deja el dato vacío.
6. **Charlas:** copia `charlas.md` entero.
7. **Dinero:** desde el CRM de `marca.md` (campo `crm`), si hay; si no, desde `reuniones.md`. Solo lectura.
   - Estados, de más temprano a más tarde: abierta, propuesta enviada, negociación, ganada, perdida (usa los del CRM del usuario y agrúpalos así).
   - Exporta una fila por oportunidad con estado, fechas, valor, servicio, `linea` y origen **agrupado** (Venta cruzada, Referido, Evento propio, LinkedIn, Charla o evento, Otro, Sin dato), sin nombres de personas ni empresas.
   - **Dinero por línea:** agrupa por la etiqueta de servicio tal como está en el CRM (las líneas de `ofertas.md`). `linea` = la etiqueta, o "Sin clasificar" si está vacía. Nunca clasifiques por el nombre de la oportunidad.
   - **Calidad del dato:** cuenta las ventas ganadas y las oportunidades abiertas sin etiqueta de servicio o sin valor, y dilo en el resumen ("3 oportunidades sin etiqueta: ponles servicio en el CRM").
   - **Total vs LinkedIn:** `vendido_total` = todas las ventas ganadas; `vendido_linkedin` = las que tienen origen LinkedIn. Si muchas no tienen origen, muestra "por medir" con cuántas faltan; nunca presentes el total como si viniera de LinkedIn.
   - Lo gratuito no es venta: cuenta como origen "Charla o evento".
   - Ticket promedio = promedio del valor de las ventas ganadas. Tasa de cierre = ventas ganadas / oportunidades que pasaron de la primera etapa.
   - Si no hay acceso al CRM ni valores en `reuniones.md`, no toques el dinero y dilo.
8. **Escribe los datasets:**
   - `resumen`, `personal_mensual`, `pagina_mensual`, `posts_perfil`, `posts_pagina`, `audiencia`, `audiencia_arquetipos`, `puntaje`, `hitos`.
   - **`hitos` sale de la Fila de contenido** (el `kanban_url` de `marca.md`, colección `piezas`, lee con `ArtifactData` `query`). No lo armes desde calendarios. Reemplaza el archivo entero con: los hitos `realizado` que no son posts (auditorías, cambios de perfil) tal como estaban; cada pieza de LinkedIn (`carril: linkedin`) con `col: publicada` y `pubAt` como `realizado` (`fecha` = `pubAt` en la `zona_horaria`, `evento` = `t` corto, más el resultado si lo mediste, `cuenta` = Persona o Empresa); y cada pieza o evento con `fija` (fecha real) que aún no sale, como `planificado`. Los eventos y las ofertas con fecha van siempre como `planificado` con `cuenta: Ambas`. Las piezas sin fecha de la Fila no van a la línea de tiempo. Columnas de `hitos`: `fecha`, `evento`, `cuenta`, `tipo` (Post, Evento, Perfil, Diagnóstico), `estado`.
   - `citas_semanas`: una fila por semana con `semana` (lunes AAAA-MM-DD), `citas`, `meta`, `conversaciones`, `dms_enviados`, `respuestas`, `inscritos_evento`, `impresiones`, `interacciones`, `visitas_perfil`, `impresiones_pagina`, `clics_pagina`, `interacciones_pagina`, `seguidores_nuevos_pagina`, `posts_publicados`, `posts_plan`, `rondas`.
   - `citas_detalle`, `conv_arquetipo` (una fila por arquetipo de `arquetipos.md`, más Otro), `aprendizajes` (con `accion_semana`), `charlas` (se reemplaza entero), `ventas` y `supuestos` (`ticket_promedio`, `tasa_cierre`, `moneda` y `ticket_meta` de `marca.md`; `ticket_meta_siguiente` solo si el usuario definió una meta posterior).
9. **Escribe la planilla, si hay:** hoja Semanas (solo A, C, G, H y M a AA; el resto son fórmulas), Citas, Publicaciones, Arquetipos y Charlas.
10. **Llama a `analista-li`** con todo lo anterior.

## Cómo se lee el resultado (para el mensaje al usuario)

- **Semáforo:** promedio de reuniones de las dos últimas semanas frente a la rampa ideal: una subida pareja en 10 semanas, desde la línea base (`fecha_linea_base` del dataset `resumen`) hasta la `meta_reuniones_semana`. Verde ≥ 90 %, amarillo 60-90 %, rojo < 60 %. Pasada la semana 10, se compara directo con la meta.
- **Cuello de botella:** el paso (interacción, visita, respuesta, agenda) que más cayó frente a su propio promedio. Hace falta tener al menos dos semanas.
- **La meta al revés:** respuestas y mensajes necesarios para llegar a la `meta_reuniones_semana`, con las tasas reales.
- **Dinero:** valor de cada reunión (ticket × tasa), ticket frente al `ticket_meta` (en la `moneda` de `marca.md`), dinero por línea de servicio y vendido total frente a vendido desde LinkedIn.

Mensaje final al usuario, máximo 5 líneas:
1. Semáforo y número de la semana.
2. Qué cambió.
3. Cuello de botella.
4. La única acción de la semana.
5. Qué dato falta, si falta alguno.

## Nunca

- No publiques ni escribas nada en LinkedIn.
- No pongas nombres, correos ni teléfonos en el tablero ni en la planilla.
- No infieras el género por el nombre.
- No inventes un número: si una fuente falla, deja el dato anterior y dilo.
- No mezcles datos de las `marcas_que_no_se_mezclan`.
