# Plantillas

Dos plantillas genéricas, sin datos ni marca de nadie. Los colores son una paleta neutra definida en variables CSS, con modo oscuro; para usar tu marca se cambian esas variables o, en el tablero, los campos `color_acento` y `color_acento2` de `supuestos`.

| Archivo | Qué es |
|---|---|
| `kanban.html` | La Fila de contenido: tarjeta "Hoy" por carril y tablero de 5 columnas (ideas, prep, aprobar, lista, publicada), con puntaje de 0 a 24 y botones para copiar texto y marcar publicada. Es una página completa: se publica tal cual como artefacto. |
| `tablero.html` | El Tablero LinkedIn: semáforo, rampa, embudo, línea de tiempo, puntaje de perfiles, audiencia, posts, conversaciones, reuniones, hábitos, charlas y dinero. No es una página suelta: es el archivo `index.html` de un artefacto del tipo **Dashboard**. Usa `dash` y `d3`, que solo existen dentro de ese tipo. |
| `tablero-datos-vacios.json` | Semilla del tablero: título, y cada dataset con sus filas iniciales (vacías) y la descripción de cada columna. |
| `tablero-mapa-mundo.json` | Filas del dataset `mapa_mundo` (contornos de países de Natural Earth, datos públicos). |

## Kanban

**Capacidades al publicar:** `{"db": {}, "user": {}}`, las mismas del original. `db` guarda las piezas y la configuración; `user` solo se usa para saber si quien mira puede escribir.

**Base de datos:**

- Colección `piezas`: un documento por pieza. Campos: `t` (nombre), `carril` (id del carril), `cuenta`, `formato`, `arq` (arquetipo), `cta`, `tag`, `fija` (AAAA-MM-DD o vacío), `tema`, `hilo`, `nota`, `archivo`, `texto`, `comentario`, `link`, `cita`, `vence`, `prueba` (0 a 3), `col` (`ideas`, `prep`, `aprobar`, `lista`, `publicada`), `pubAt` (AAAA-MM-DD), `creado`, `actualizado`.
- Documento `config/marca`: la configuración. Si no existe, la página usa valores neutros.

| Campo | Qué contiene | Por defecto |
|---|---|---|
| `marca` | nombre que se agrega al título | vacío |
| `usuario` | nombre de quien usa la fila (informativo) | vacío |
| `arquetipos` | lista de nombres de arquetipos | Arquetipo A, B, C |
| `cuentas` | lista de cuentas que publican | Perfil personal, Página de empresa |
| `carriles` | lista de carriles; cada uno es un texto (`"LinkedIn"`) o un objeto `{id, n, sub, unoAlDia}` | LinkedIn, Instagram |
| `zona` | opcional: zona horaria IANA para "hoy" | la del navegador |

`unoAlDia` marca el carril donde sale una sola pieza al día; si el carril es un texto, vale solo para LinkedIn.

**Cómo se siembra:** después de publicar, se escribe `config/marca` con la herramienta de base de datos del artefacto (acción `set`, colección `config`, documento `marca`). Las piezas se crean desde la página con "+ Idea" o escribiendo documentos en `piezas`. No se escriben datos dentro del HTML.

## Tablero

**Capacidades:** no se declaran a mano. El artefacto se crea desde el tipo Dashboard y hereda las del tipo. En el original eran: `assets`, `comments` (`composer_only`), `db` (con 5 reglas: escritura general solo para editores, y `data/users/{self}` privado por persona), `downloads`, `flags`, `mcp` (sin servidores fijos; solo los conectores que apruebe quien mira, más el conector de datos propio de la plataforma, opcional), `room`, `tts` y `user` (scope `profile`), con contrato 0.2.67.

### Cómo se siembra

Son 7 llamadas: 1 para crear, 4 subidas de archivo y 2 escrituras en la base de datos. Cada paso nombra su herramienta.

1. **Crear el artefacto. Herramienta `Artifact`.** Ubicar el tipo Dashboard (`action: "list"`, `scope: "types"`) y publicar con su `type_url`, `title: "Tablero LinkedIn"` y sin archivos. El resultado trae el `url` del artefacto, que se usa en todos los pasos siguientes.
2. **Preparar 4 archivos locales** (en una carpeta temporal, no dentro del plugin):
   - `vacio.json`, cuyo contenido es `[]`. Sirve para **todos** los datasets que parten vacíos.
   - `supuestos.json`, con las `rows` de `supuestos` ya llenas con los datos reales.
   - `arquetipos.json`, con una fila por arquetipo real.
   - `tablero-mapa-mundo.json`, tal como viene en esta carpeta.
3. **Subir esos 4 archivos como assets. Herramienta `Artifact`**, `action: "publish"` con `url` (el del artefacto), `asset: true` y `file_path`. **Un archivo por llamada y una llamada a la vez:** los JSON no entran en una subida en lote (`file_paths`) y las subidas en paralelo pueden rechazarse. Cada resultado devuelve el `id` del asset y su `url` (en el original, `/_blob/<id del asset>`); anotar ambos.
4. **Escribir los documentos. Herramienta `ArtifactData`**, una sola llamada con `action: "batch"` y un `set` por documento:
   - `dash/meta` (colección `dash`, documento `meta`) con el valor de `dash/meta` de la semilla.
   - `datasets/<id>` (colección `datasets`), uno por cada dataset de la semilla, con `title`, `description`, `fixed` si lo trae, `source: {kind: "file", url: "<url del asset>", name: "<archivo>.json", format: "json"}`, `updated: {at, by}` y `edit: {via: "claude", at}`. En `source.url` va el `url` que devolvió la subida, tal como vino: el de `vacio.json` en todos los datasets vacíos, y el propio en `supuestos`, `arquetipos` y `mapa_mundo`. `columnas` y `_leeme` no se escriben.
5. **Escribir la página. Herramienta `ArtifactData`**, `action: "set"`, colección `files`, documento `index.html`, con `file_path` apuntando a un JSON local de la forma `{"text": "<contenido completo de tablero.html>"}`. Va con `file_path` para no pasar las 160 KB del HTML por la conversación.

### Cómo se actualiza cada semana

Solo se tocan los datasets que cambiaron. Por cada uno:

1. Guardar sus filas en `<id>.json` y subirlo con `Artifact` (`action: "publish"`, `url`, `asset: true`, `file_path`), una llamada por archivo.
2. Con `ArtifactData` (`action: "update"`, colección `datasets`, documento `<id>`, con el `if_version` de la última lectura) cambiar `source.url`, `source.name`, `updated` y `edit`. Si cambian varios datasets, un solo `batch`.
3. **Borrar el asset anterior** de ese dataset, para no dejar huérfanos: `Artifact` con `action: "delete"`, `url` del artefacto y `path: "<id del asset anterior>"`. **Excepción:** el asset compartido `vacio.json` no se borra mientras algún dataset todavía apunte a él.

Mientras un dataset esté vacío, su bloque muestra "Aún no hay datos: se llena con la primera actualización semanal" y no reserva el alto del gráfico.

### Frases y fichas sin huecos

Ninguna frase ni ficha del tablero se muestra con un valor faltante en medio. Si falta un valor, se ve la parte de la frase que sí tiene datos o una frase completa de estado vacío ("Aún no hay puntaje de la página: se mide en la auditoría."); en una ficha, la cifra queda en "—" y el pie dice qué falta. Todo el texto está en el HTML de `tablero.html` y un solo bloque del script ("Frases sin huecos") decide qué se ve, con estos atributos:

| Atributo | Qué hace |
|---|---|
| `data-fr` | Un trozo de frase completo. Se muestra solo si tienen valor todas las marcas que contiene y lo que pida en `data-pide="fuente.campo fuente.campo@columna=valor"`. Con `data-fr="bloque"` es un contenedor que solo mira `data-pide` y `data-pide-alguno` (basta un valor). |
| `data-frases` | Agrupa varios `data-fr` y su `data-fr-vacio`. Con `data-frases="una"` se muestra solo el primer `data-fr` completo. |
| `data-fr-vacio` | La frase de estado vacío del grupo: se muestra cuando no se ve ningún `data-fr`. Se guarda con `hidden`. |
| `data-fr-falta="fuente.campo"` | Pie que se muestra solo si falta ese valor. Se guarda con `hidden`. |

Al agregar una frase con valores: cada oración va en su propio `data-fr` (para que pueda mostrarse sola), el grupo lleva un `data-fr-vacio` que diga qué falta y de dónde sale, y ningún valor queda suelto fuera de un `data-fr`. El CSS no debe volver transparente el estado `data-dash-source-state=empty`: eso es lo que dejaba los huecos.

### Qué sembrar al inicio para que el capítulo "Te ven" no quede en "—"

El código lee estas columnas con este nombre exacto. Si falta la fila o la columna, la ficha muestra "—".

Dataset `resumen`, **una sola fila**:

| Columna | Dónde se ve |
|---|---|
| `impresiones_perfil_365d` | ficha "Impresiones · 365 días" |
| `variacion_impresiones` | la misma ficha, variación frente a los 365 días anteriores; fracción (0.12 = +12 %) |
| `visitas_perfil_7d` | ficha "Visitas al perfil", la frase del capítulo y el embudo del perfil antes de la primera semana medida |
| `seguidores_perfil` | ficha "Seguidores" |
| `miembros_alcanzados` | la misma ficha, "personas alcanzadas en el año" |
| `busquedas_7d` | ficha "Apariciones en búsquedas" |
| `fuera_de_red` | ficha "Impresiones fuera de tu red"; fracción de 0 a 1 |
| `fase_actual` | fase marcada en el capítulo 8 (0 a 4) |
| `semana` | "semana N desde el arranque", capítulo 8 |
| `linea_base_sesiones_semana` | línea base de reuniones por semana, capítulos 6 y 8 |
| `linea_base_charlas_mes` | línea base de charlas por mes, capítulo 8 (solo si hay charlas) |
| `posts_pagina`, `impresiones_pagina`, `seguidores_pagina`, `comentarios_pagina`, `clics_pagina`, `reacciones_pagina` | fichas de la página de empresa; con `sin_pagina: true` se dejan en `null` |

`impresiones_perfil_7d` y `fecha_linea_base` existen en la semilla pero el tablero no las lee.

Dataset `linea_base`, **una sola fila**. De aquí sale el texto "+N desde la línea base" de cada ficha; sin esta fila ese texto queda en "—":

| Columna | Se compara con |
|---|---|
| `visitas_perfil_7d` | `resumen.visitas_perfil_7d` |
| `busquedas_7d` | `resumen.busquedas_7d` |
| `seguidores_perfil` | `resumen.seguidores_perfil` |
| `seguidores_pagina` | `resumen.seguidores_pagina` (solo con página) |
| `puntaje_perfil` | la suma del dataset `puntaje` con `perfil: "Perfil"` |
| `puntaje_pagina` | la suma del dataset `puntaje` con `perfil: "Página"` (solo con página) |

`fecha`, `impresiones_perfil_7d`, `citas_semana` y `charlas_mes` quedan como registro; el tablero no las lee.

El resto del capítulo sale de `personal_mensual` (`mes` como AAAA-MM, `impresiones`, `interacciones`, `nuevos_seguidores`): la frase "Tu mejor mes fue…" y los dos gráficos por mes. Conviene sembrarlo con al menos 3 meses, porque el primero y el último se tratan como incompletos.

### Datasets

Clave → qué contiene; el detalle de cada columna está en `columnas` dentro de la semilla.

| Dataset | Qué contiene |
|---|---|
| `supuestos` | Una fila de configuración: `meta_reuniones_semana`, `meta_charlas_mes`, `plan_inicio`, `plan_dias`, `rampa_semanas`, `evento_nombre`, `evento_fecha`, `evento_cupos`, `ticket_promedio`, `tasa_cierre`, `moneda`, `ticket_meta`, `ticket_meta_siguiente`, `sin_pagina`, `color_acento`, `color_acento2`. De aquí salen todas las metas, las fechas del plan, la rampa, la moneda, qué secciones se muestran y los colores. |
| `arquetipos` | Una fila por arquetipo: `arquetipo`, `quien`, `dolor`, `busca`, `oferta`. Pueden ser 2, 3 o los que haya. |
| `resumen` | Una fila con los totales del perfil y de la página, la fase y la línea base de reuniones y charlas. |
| `linea_base` | Una fila con los valores al inicio del plan (visitas, búsquedas, seguidores, puntajes). |
| `citas_semanas` | Una fila por semana: reuniones, conversaciones, mensajes, respuestas, inscritos al evento, alcance del perfil y de la página, posts publicados y planificados, rondas. |
| `citas_detalle` | Una fila por reunión, sin datos personales: `semana`, `fecha`, `origen`, `arquetipo`, `presupuesto`, `modalidad`, `estado`, `tema`. |
| `conv_arquetipo` | Una fila por semana y arquetipo: `conversaciones`, `respuestas`, `citas`. |
| `aprendizajes` | Una fila por semana: `repetir`, `dejar`, `aprendizaje`, `accion_semana`, `post_semana`, `post_cuenta`, `post_por_que`, `temas`. |
| `hitos` | Una fila por hito: `fecha`, `evento`, `cuenta` (Perfil, Página o Ambas), `tipo`, `estado` (realizado o planificado). |
| `charlas` | Una fila por charla: `fecha`, `evento`, `estado` (encontrada, propuesta, aceptada, dada), `origen`. |
| `puntaje` | Una fila por ítem de la rúbrica: `item`, `puntaje`, `maximo`, `nota`, `perfil` (Perfil o Página). |
| `personal_mensual` | Una fila por mes del perfil: `mes`, `impresiones`, `interacciones`, `nuevos_seguidores`. |
| `pagina_mensual` | Una fila por mes de la página: `mes`, `impresiones`, `clics`, `reacciones`, `comentarios`, `compartidos`. |
| `posts_perfil` | Una fila por post del perfil: `post`, `grupo`, `cuando`, `tipo`, `impresiones`, `interacciones`, `reacciones`, `comentarios`, `reposts`. |
| `posts_pagina` | Una fila por post de la página: `post`, `cuando`, `tipo`, `impresiones`, `clics`, `reacciones`, `comentarios`, `compartidos`. |
| `audiencia` | Una fila por grupo del público: `categoria`, `valor`, `porcentaje`; en las de ubicación, además `pais`, `pais_mapa`, `iso2`, `lat`, `lon`. |
| `audiencia_arquetipos` | Una fila por fecha de export y arquetipo: `fecha`, `arquetipo`, `porcentaje`. Qué porcentaje de la audiencia calza con cada arquetipo del dataset `arquetipos`, más una fila con `arquetipo: "Fuera del público"`. |
| `ventas` | Una fila por oportunidad, sin nombres: `key`, `estado`, `creado`, `cierre`, `valor`, `servicio`, `origen`, `con_fecha_reunion`, `linea`. Las ventas usan los estados "Venta cerrada" y "Venta perdida". |
| `mapa_mundo` | Una fila por país: `id`, `pais`, `geometria`. |

### Lo que se adapta solo

- **Arquetipos.** El dibujo "Tu audiencia por arquetipo", las fichas y la palanca se arman con los arquetipos que existan en `arquetipos`, en ese orden, y dejan "Fuera del público" al final. Un arquetipo sin fila en la última lectura de `audiencia_arquetipos` aparece como "s/d".
- **Tipos de post.** El tablero muestra el `tipo` que traigan `posts_perfil` y `posts_pagina`, sin lista fija. El orden de referencia es el del resto del plugin (contrario, noticia, lección, marco, caso, relación) y cualquier otro va al final; un post sin tipo aparece como "Sin tipo". En `posts_perfil`, `grupo` marca "Mejores del año" y "Últimos 15": los mejores del año quedan como barra de referencia y no entran en el promedio por tipo.
- **Rampa.** La línea ideal sube parejo hasta la meta de reuniones en la semana `rampa_semanas` (10 si no viene) y nunca pasa de las semanas del plan, que salen de `plan_dias`.
- **Próximo evento.** Si `evento_nombre` está vacío, se ocultan la ficha del evento, su velocímetro, la ficha de inscritos y las menciones al evento.
- **Charlas.** Si `meta_charlas_mes` está vacío o es 0 y `charlas` no tiene filas, se ocultan el velocímetro, el embudo y la meta de charlas.
- **Página de empresa.** Si `sin_pagina` es `true` y ningún dataset trae datos de la página (`pagina_mensual`, `posts_pagina`, filas de `puntaje` o de `hitos` con Página, columnas de página en `resumen` o `citas_semanas`), se ocultan todos los bloques de la página. Si hay datos de página, se muestran aunque `sin_pagina` sea `true`.
- **Ticket.** Se usa `ticket_promedio`; si es `null`, el promedio de las ventas cerradas; si tampoco hay, `ticket_meta`, y el texto lo llama "ticket de referencia". Si no hay ninguno, el capítulo del dinero dice que falta el ticket.
- **Tasa de cierre.** Si `tasa_cierre` es `null`, el tablero no calcula dinero por reunión y muestra "Falta la tasa de cierre".
- **Colores de la marca.** `color_acento` y `color_acento2` aceptan un color hex (`#rrggbb` o `#rgb`). El primero reemplaza el acento (variable `--tb-acento`: puntos reales, avance, reuniones) y el segundo, el color principal de las series del perfil (variable `--tb-1`). Vacíos o con otro formato, queda la paleta neutra. El mismo color se usa en modo claro y oscuro, así que conviene uno que se lea en ambos.

**Valores que deben coincidir:** los nombres de arquetipo son los mismos en `arquetipos`, `audiencia_arquetipos`, `conv_arquetipo`, `citas_detalle` y en `config/marca` del kanban (el tablero ignora mayúsculas y tildes al cruzarlos). En `audiencia_arquetipos`, la fila de quienes no calzan se llama exactamente "Fuera del público". En `citas_detalle.origen`, el embudo cuenta "Perfil de LinkedIn" y "Página de LinkedIn".
