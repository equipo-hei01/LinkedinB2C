# Plantillas

Dos plantillas genéricas, sin datos ni marca de nadie. Los colores son una paleta neutra definida en variables CSS, con modo oscuro; para usar tu marca se cambian solo esas variables.

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

**Capacidades:** no se declaran a mano. El artefacto se crea desde el tipo Dashboard y hereda las del tipo. En el original eran: `assets`, `comments` (`composer_only`), `db` (con 5 reglas: escritura general solo para editores, y `data/users/{self}` privado por persona), `downloads`, `flags`, `mcp` (sin servidores fijos; conectores que apruebe quien mira, y Claude Data opcional), `room`, `tts` y `user` (scope `profile`), con contrato 0.2.67.

**Cómo se siembra** (todo con la herramienta de base de datos del artefacto, nada con `file_path`):

1. Crear el artefacto desde el tipo Dashboard con el título "Tablero LinkedIn".
2. Escribir `dash/meta` con el valor de `dash/meta` de la semilla.
3. Por cada dataset de la semilla: guardar sus `rows` en un archivo `<id>.json`, subirlo como asset del artefacto y escribir `datasets/<id>` con `title`, `description`, `fixed` si lo trae, `source: {kind: "file", url: "/_blob/<id del asset>", name: "<id>.json", format: "json"}`, `updated: {at, by}` y `edit: {via: "claude", at}`. Para `mapa_mundo` el archivo es `tablero-mapa-mundo.json`.
4. Escribir `files/index.html` con `{text: <contenido de tablero.html>}`.
5. Llenar la fila de `supuestos` y las de `arquetipos` con los datos reales. Cada actualización semanal sube un archivo nuevo por dataset que cambió y actualiza su `source.url`.

Mientras un dataset esté vacío, su sección muestra "Aún no hay datos: se llena con la primera actualización semanal".

**Datasets** (clave → qué contiene; el detalle de cada columna está en `columnas` dentro de la semilla):

| Dataset | Qué contiene |
|---|---|
| `supuestos` | Una fila de configuración: `meta_reuniones_semana`, `meta_charlas_mes`, `plan_inicio`, `plan_dias`, `evento_nombre`, `evento_fecha`, `evento_cupos`, `ticket_promedio`, `tasa_cierre`, `moneda`, `ticket_meta`, `ticket_meta_siguiente`. De aquí salen todas las metas, las fechas del plan y la moneda. |
| `arquetipos` | Una fila por arquetipo: `arquetipo`, `quien`, `dolor`, `busca`, `oferta`, `campo_audiencia`. |
| `resumen` | Una fila con los totales del perfil y de la página, la fase y la línea base de reuniones y charlas. |
| `linea_base` | Una fila con los valores al inicio del plan (visitas, impresiones, búsquedas, seguidores, puntajes). |
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
| `audiencia_arquetipos` | Una fila por fecha de export: `decisores_pct`, `alta_direccion_pct`, `empresas_1000_pct`, `rrhh_pct`, `sin_decision_pct`. |
| `ventas` | Una fila por oportunidad, sin nombres: `key`, `estado`, `creado`, `cierre`, `valor`, `servicio`, `origen`, `con_fecha_reunion`, `linea`. Las ventas usan los estados "Venta cerrada" y "Venta perdida". |
| `mapa_mundo` | Una fila por país: `id`, `pais`, `geometria`. |

**Valores que deben coincidir:** los nombres de arquetipo son los mismos en `arquetipos`, `conv_arquetipo`, `citas_detalle` y en `config/marca` del kanban. En `citas_detalle.origen`, el embudo cuenta "Perfil de LinkedIn" y "Página de LinkedIn".
