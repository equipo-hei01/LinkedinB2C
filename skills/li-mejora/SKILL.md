---
name: li-mejora
description: Aplica al plugin de LinkedIn las mejoras que el usuario aprobó en mejoras.md (cambios del algoritmo, fórmulas nuevas, pesos del puntaje, reglas de formato), con respaldo de la versión anterior y registro de cambios. Usar cuando el usuario diga "aplica las mejoras", "sí a la mejora", "actualiza las skills con lo del radar", o la tarjeta diaria muestre mejoras aprobadas.
---

# li-mejora

El sistema aprende, pero no se cambia solo. `radar-nicho-li`, `analista-li` y `auditor-li` proponen; el usuario aprueba; esta skill aplica.

## Filtro de alineación

Toda práctica que venga de una fuente externa (un post, un video, una herramienta, un curso, una infografía) pasa por estas 6 preguntas antes de proponerse:

1. ¿Cumple el Acuerdo de Usuario de LinkedIn (sin automatizar invitaciones, mensajes, publicaciones ni scraping)? Si no, se descarta.
2. ¿Respeta `seguridad.md` (nada sale sin el sí; 15 DMs al día; 50 invitaciones a la semana; un post al día, o los límites más estrictos que haya puesto el usuario)? Si no, se descarta.
3. ¿Calza con la voz y la marca (sin urgencia falsa, sin cebo de interacción, sin mezclar con las `marcas_que_no_se_mezclan` de `marca.md`)? Si no, se descarta.
4. ¿Sirve a B2B en español, con los decisores de `arquetipos.md` en los países del campo `pais` de `marca.md`? Si no, se adapta o se descarta.
5. ¿Tiene evidencia (un dato, una fuente o un resultado propio) o se puede probar con una prueba A/B en el kanban (ver "Pruebas en curso" en `kanban.md`)? Sin evidencia, entra como prueba, no como regla.
6. ¿Es nueva o el plugin ya la hace? Si ya está, solo se anota.

Lo que pasa el filtro queda como PROPUESTA en `mejoras.md`, con la fuente y la respuesta a cada pregunta en la columna "Filtro". Se aplica solo con el sí del usuario. Si al leer `mejoras.md` una fila de fuente externa no trae el filtro, pásalo tú antes de mostrársela al usuario.

## Pasos

1. Lee `mejoras.md` en la carpeta de trabajo. Muestra al usuario las filas PROPUESTA en una lista corta (qué cambia, por qué, evidencia) y pregunta cuáles aprueba. Si ya las marcó APROBADA, sigue.
2. **Ubica el plugin editable.** Es la raíz del plugin linkedin-agent-b2b: la carpeta desde donde el usuario lo instaló. Si no la encuentras, pregúntale. No edites la copia en caché de Claude Code.
3. **Respaldo:** copia la carpeta completa a `versiones\<versión actual>\` antes de tocar nada.
4. **Aplica** cada mejora aprobada en el archivo que dice la fila, con el cambio mínimo. Si toca un script (`humanize.py`, `bold.py`, `carrusel.js`…), córrelo con un ejemplo antes y después. Si toca una voz, el cambio va en `voz-persona.md` o `voz-empresa.md` de la carpeta de trabajo (los agentes `voz-persona` y `voz-empresa` las leen de ahí).
5. **Versión:** sube el número de parche en `.claude-plugin/plugin.json` (1.12.0 → 1.12.1) y agrega una línea por mejora en `CAMBIOS.md` con la fecha y la evidencia.
6. Marca las filas APLICADA en `mejoras.md` y dile al usuario cómo actualizar: en Claude Code, `/plugin marketplace update <su marketplace>` y luego `/plugin update linkedin-agent-b2b` (o reinstalar); en Cowork, subir el `.plugin` nuevo.

## Nunca

- Nunca apliques una mejora sin el sí del usuario.
- Nunca cambies las reglas de `seguridad.md` para ganar alcance.
- Nunca borres el respaldo.

## Si la mejora toca la mezcla de formatos

Si la fila de `mejoras.md` cambia la mezcla de formatos o las fórmulas por arquetipo y el usuario tiene instalado otro plugin que lleva esa mezcla (por ejemplo, uno de contenido para varias redes), el archivo a editar puede estar ahí. Aplica igual: respaldo, cambio mínimo, versión y registro de cambios de ese plugin. Si no hay tal plugin, el reparto se cambia en `arquetipos.md` y `kanban.md` de la carpeta de trabajo.
