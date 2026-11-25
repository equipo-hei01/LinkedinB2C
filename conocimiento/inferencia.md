# Mapa de inferencia: de dónde sale cada dato sin preguntarlo

`/li-inicio` usa este mapa para llenar `marca.md`, las voces, `arquetipos.md`, `ofertas.md` y `entregables.md` **leyendo y deduciendo**, y para preguntar solo lo que no se puede leer en ninguna parte. Regla: si el dato se puede leer o deducir, se propone ya escrito con la marca `(supuesto)`; el usuario lo corrige en el resumen o, más adelante, el sistema lo corrige solo con lo que aprende (columna "Se corrige con").

Las 4 preguntas que **sí** se hacen siempre (un solo bloque, con opciones):
1. **Meta:** cuántas reuniones por semana quiere desde LinkedIn (opciones 1, 2, 3, 5).
2. **Ticket:** cuánto vale una venta típica de las que quiere lograr, con moneda (rangos según su país).
3. **Acción del perfil:** qué quiere que haga quien lo visita (agendar, escribirle, descargar algo). Por defecto se propone lo que su sitio ya hace (si tiene botón de agenda, "agendar").
4. **Cuál de estos posts eres tú:** los 3 que mejor rindieron, para elegir uno como texto de referencia de la voz. Si no hay posts, se reemplaza por "pega un texto tuyo que te guste cómo quedó".

Todo lo demás tiene una fuente o un valor por defecto:

## Identidad (`marca.md` §1)

| Campo | Se lee de | Si no se encuentra | Se corrige con |
| --- | --- | --- | --- |
| `usuario` | Nombre del perfil | — (siempre está) | — |
| `marca` | Página de empresa, experiencia actual, sitio | El nombre del usuario | Resumen del paso 1 |
| `que_hace` | Titular, Acerca de, portada del sitio | Frase armada con la oferta principal | Resumen |
| `metodo` | Sitio, documentos, posts que nombran pasos | Vacío (no es obligatorio) | El usuario lo agrega cuando quiera |
| `pilares` | Los 3 temas de sus posts que más conversaron + su oferta | Los 3 temas de su oferta | `analista-li` a las 4 semanas |
| `pais` | Ubicación del perfil | — | — |
| `zona_horaria` | País de la ubicación (la capital) | `America/Bogota` | El usuario, si vive en otra zona |
| `idioma` | Idioma de sus posts y del sitio | Español neutro | — |
| `marcas_que_no_se_mezclan` | Otras empresas propias en la experiencia actual | Vacío | El usuario |

## Voz (`marca.md` §2 y §3, `voz-persona.md`, `voz-empresa.md`)

| Campo | Se deduce de sus posts así | Por defecto | Se corrige con |
| --- | --- | --- | --- |
| `tratamiento` | Tú / usted / vos según cómo se dirige al lector | tú | Primera corrección de un post o DM |
| `saludo_dm` | Si hay DMs o comentarios suyos: cómo saluda | "Hola [nombre], ¿cómo estás?" | Primer DM que corrija |
| `firma_persona` / `firma_empresa` | Línea de cierre repetida en 3 o más posts | Vacío | — |
| `hashtags` | Los que repite en 3 o más posts (máx. 3) | Ninguno | — |
| `humor` | Hay ironía, juegos de palabras o exageraciones en 2 o más posts | "una pincelada en el perfil" si hay, "no" si no | Correcciones de la revisora |
| `negritas_unicode` | Las usa en sus posts | no | — |
| Largo de frase y de post | Mediana de sus posts | Frases cortas, 120–220 palabras | — |
| Palabras que sí usa | Las 10–15 palabras propias que más repite (sin las comunes) | — | Cada corrección suma |
| Palabras que nunca usa | Las de `skills/li-human/slop.json` + las que el usuario borre al corregir | slop.json | Cada corrección suma |
| Posturas | Frases de opinión fuerte en sus posts ("no creo en…", "lo que nadie dice…") | Vacío `(supuesto)` | Posts aprobados |
| Persona gramatical de la página | Posts de la página | nosotros | — |
| Textos de referencia | El que elige en la pregunta 4 + los 2 que mejor rindieron | — | Cada post aprobado sin cambios puede pasar a referencia |

Con menos de 5 posts propios, la voz parte de lo que escribe en el Acerca de, el sitio y los documentos, y se dice en una línea que la voz se va a ajustar con las primeras correcciones. **La corrección del primer post es la mejor calibración:** `/li-post` anota en la voz qué cambió y por qué.

## A quién le vende (`arquetipos.md`)

| Campo | Se lee o deduce de | Si no se encuentra | Se corrige con |
| --- | --- | --- | --- |
| Qué arquetipos | Clientes y casos del sitio, cargos de la audiencia (Analytics), cargos de quienes comentan, a quién le habla en sus posts → regla de `arquetipos-biblioteca.md` | Decisor + Implementador | Resumen del paso |
| Dolor, teme, tensión, creencias, palabras, objeciones, ganchos | Biblioteca adaptada a `[tema]` y `[resultado]` | Biblioteca | Conversaciones reales |
| Qué ya probó | Casos del sitio ("antes trabajaban con…"), testimonios | Lo típico del rol en la biblioteca `(supuesto)` | `cierre-li` en cada reunión |
| Cómo lo dicen ellos | Comentarios en sus posts y testimonios, textuales, sin nombre | Vacío | `conversaciones-li`, `respuestas-li`, `cierre-li` |
| Reparto | 50 / 30 / 20 según el orden de la biblioteca | — | `analista-li` cada 4 semanas, con el sí del usuario |

## Qué vende y qué regala (`ofertas.md`, `pruebas.md`, `entregables.md`)

| Campo | Se lee de | Si no se encuentra | Se corrige con |
| --- | --- | --- | --- |
| Ofertas | Sitio (servicios, precios), documentos, destacados | Una oferta: "conversación inicial" | Resumen |
| `link_reservas` | Botón del perfil, sitio (Calendly, Google Calendar, HubSpot…) | Vacío → la acción del perfil pasa a "escribirle" | El usuario |
| Duración y costo de la conversación inicial | Página de reserva | 30 minutos, sin costo `(supuesto)` | El usuario |
| Pruebas | Testimonios y casos **ya publicados** en el sitio o en LinkedIn (ya son públicos) | Vacío | Lo no publicado necesita su sí explícito |
| Palabra clave por arquetipo | Se propone: una palabra corta del tema del entregable | — | — |
| Primer entregable | Se arma con la skill `lead-magnets` si está, o con la plantilla de la biblioteca, desde lo leído | — | Revisión del usuario |

## Metas y ritmo (`marca.md` §5)

| Campo | Fuente | Por defecto |
| --- | --- | --- |
| `meta_reuniones_semana` | Pregunta 1 | — |
| `ticket_meta` y `moneda` | Pregunta 2 (moneda por el país) | — |
| `accion_perfil` | Pregunta 3 | Lo que su sitio ya hace |
| `reuniones_hoy_semana` | Calendario conectado (reuniones con personas de LinkedIn) | 0 `(supuesto)` |
| `tasa_cierre` | CRM conectado | `[verificar]`; el tablero usa 2 de 10 hasta tener dato |
| `ticket_promedio` | CRM conectado | `[verificar]` |
| `meta_charlas_mes` | Si su perfil o sitio muestra charlas | 0 |
| `plan_inicio` | — | El lunes siguiente |
| `cadencia` | Su ritmo actual de posts, subiendo como máximo 1 por semana | 3 posts por semana |
| `minutos_dia` | — | 30 |

## Identidad visual (`marca.md` §6)

| Campo | Se lee de | Por defecto |
| --- | --- | --- |
| Colores | Sitio (colores de botones y titulares), banner del perfil | Fondo blanco, texto casi negro, un acento azul sobrio |
| Tipografía | Sitio | "del sistema" |
| Logo y foto | Sitio y foto del perfil (el usuario indica el archivo si quiere usarlos en carruseles) | Iniciales |

## Lo que nunca se deduce

- Si un caso o testimonio **no publicado** se puede publicar: siempre se pregunta.
- Datos de contacto, credenciales y datos bancarios: nunca se piden ni se escriben.
- El género de una persona: no se infiere por el nombre ni por la foto.
