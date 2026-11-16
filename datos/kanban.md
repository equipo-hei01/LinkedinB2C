# Fila de contenido (kanban) · reglas para agentes y tareas

La **única** fuente de lo que se publica es el tablero kanban "Fila de contenido" del usuario. Su link es el `kanban_url` de `marca.md` (lo crea `/li-inicio`). Si `kanban_url` está vacío, se le dice al usuario "primero corre `/li-inicio`" y no se sigue.

No hay calendario. Nadie escribe fechas de publicación: cada día sale la primera pieza "Lista para publicar" de cada carril, ordenada por puntaje. Solo las piezas con 📌 fecha fija real (un evento, un curso con fecha, una persona etiquetada que espera) llevan fecha.

## Cómo leer y escribir el tablero

- Herramienta: `ArtifactData` (cárgala con ToolSearch "select:ArtifactData"), `url` = el `kanban_url` de `marca.md`, `collection` = `piezas`.
- Leer: `action: "list"` con `query.limit: 200` (o `out_dir` para guardarlas como archivos).
- Crear: `action: "set"` con un `doc_id` nuevo, en minúsculas, que empiece por el carril (`li-…`, por ejemplo `li-radar-AAAA-MM-DD-contraste`). Sin `if_version` solo al crear.
- Cambiar: `action: "update"` con `if_version` = la versión que leíste (si falla, vuelve a leer y reintenta una vez). Nunca reescribas una pieza entera para cambiar un campo.
- Nunca borres piezas. Si una idea no sirve, el usuario la borra.

## Campos de cada pieza

| Campo | Qué va |
| --- | --- |
| `t` | Título corto de la pieza (el gancho o el tema) |
| `carril` | `linkedin` (perfil personal + página de empresa, un solo carril). Si el usuario lleva otra red en el mismo tablero, esa red es otro carril (por ejemplo `instagram`) |
| `cuenta` | El perfil (el `usuario` de `marca.md`) o la página (la `marca` de `marca.md`) |
| `formato` | Texto, imagen, carrusel, video 4:5, encuesta… |
| `arq` | El nombre de uno de los arquetipos de `arquetipos.md`, o `Pares` |
| `cta` | El llamado (ej. "Comenta PALABRA"). Si el entregable del arquetipo está "Por armar" en `entregables.md`, el llamado es una pregunta, no una palabra clave |
| `tag` | Persona a etiquetar (si hay) |
| `fija` | Fecha `AAAA-MM-DD` solo si es real; si no, vacío |
| `tema` | Tema corto, para no repetir el mismo día |
| `texto` | Texto final listo para publicar (con negritas y firma) |
| `comentario` | Primer comentario (link con UTM) |
| `archivo` | Ruta del video, PDF o imagen |
| `hilo` | Borrador o archivo de origen |
| `nota` | Notas. Si se sabe, el tipo de post ("Tipo: contrario / noticia / lección / marco / caso / relación") y la serie ("Serie <tema> 2/5"). Las ideas que agregan los agentes empiezan con `Origen: <agente> <fecha> · Fuente: <link o archivo>` |
| `link` | Link publicado (lo pone el usuario o la tarjeta al confirmar) |
| `cita`, `vence`, `prueba` | Puntaje 0 a 3 cada uno (ver abajo) |
| `col` | `ideas`, `prep`, `aprobar`, `lista` o `publicada` |
| `pubAt` | Fecha de publicación `AAAA-MM-DD` (solo en `publicada`) |
| `creado`, `actualizado` | Fechas de creación y último cambio |

## Puntaje (lo calcula el tablero)

- **Lleva a reunión** (`cita`) × 3: 0 sin llamado · 1 conversación general · 2 palabra clave con entregable · 3 invita directo a sesión o programa.
- **Pierde valor si espera** (`vence`) × 2: 0 atemporal · 1 conviene esta semana · 2 alguien espera (persona etiquetada, par perfil y página) · 3 tema caliente o evento cerca.
- **Prueba real** (`prueba`) × 2: 0 opinión · 1 caso de terceros con fuente · 2 dato o caso propio · 3 testimonio o resultado de cliente.
- **Equilibrio de arquetipo**: +3 automático si su arquetipo no salió en las 2 últimas publicadas del carril.

Pon `cita`, `vence` y `prueba` con criterio y sin inflarlos: el tablero ordena la fila con ellos.

## Columnas y quién mueve qué

| Columna | Qué significa | Quién la mueve |
| --- | --- | --- |
| Ideas (`ideas`) | Del usuario y de los agentes, sin fecha | Radar, reutilizador y el usuario agregan aquí |
| En preparación (`prep`) | Se está redactando, grabando o diseñando | El plan del lunes pasa aquí las ideas que elige |
| Por aprobar (`aprobar`) | Con `texto` listo; falta el sí del usuario | El plan del lunes, cuando la pieza ya tiene texto revisado |
| Lista para publicar (`lista`) | Aprobada por el usuario | **Solo el usuario** (o un agente cuando el usuario lo aprueba en el chat) |
| Publicada (`publicada`) | Con `pubAt` y `link` | El usuario con el botón del tablero, la tarjeta del día cuando el usuario confirma "Ayer", o la tarea "LinkedIn · publicar la siguiente pieza" después de publicar con el sí del usuario en el chat |

**Publicar sin hacerlo a mano:** la tarea a pedido "LinkedIn · publicar la siguiente pieza" toma la primera de "Lista para publicar" del carril LinkedIn, le muestra al usuario exactamente qué sale y, solo con su "sí" en esa sesión, la publica desde su navegador, agrega el primer comentario y la mueve a "Publicada" con el link (segunda excepción de la regla 1 de `seguridad.md`). Un post al día como máximo.

## Pruebas en curso

Una prueba compara dos formas de hacer lo mismo (A y B) para decidir con datos del propio usuario, no con opiniones de terceros. Mecanismo:

1. Se anota aquí, en la tabla, con un nombre corto en mayúsculas.
2. Cada pieza que participa lleva en `nota` "PRUEBA <NOMBRE> A" o "PRUEBA <NOMBRE> B". Si la prueba es sobre mensajes, la marca va en la fila de la persona en `conversaciones.md`.
3. Mínimo 4 piezas (2 de A y 2 de B), parecidas en arquetipo y formato, para que la diferencia sea de la variante y no del tema.
4. El viernes `analista-li` compara lo que la prueba mide (comentarios de palabra clave, DMs, reuniones) y lo anota en "Resultado".
5. La regla general no cambia hasta que el usuario decida con los resultados completos. Si decide cambiarla, pasa por `mejoras.md` y `/li-mejora`.
6. Una prueba a la vez por tipo de pieza; al terminar, se borra de la tabla y el aprendizaje queda en `estado.md`.

| Prueba | Variante A | Variante B | Qué se mide | Piezas (mín. 4) | Resultado | Estado (EN CURSO, TERMINADA) |
| --- | --- | --- | --- | --- | --- | --- |
| EJEMPLO (borra esta fila): CTA | La palabra clave escrita en el texto del post | La palabra clave solo en la imagen y en el primer comentario; el texto termina con una pregunta fácil | Comentarios de palabra clave, DMs y reuniones por post | 0 de 4 | | EN CURSO |
| EJEMPLO (borra esta fila): NOTA DE VOZ | Seguimiento del día 10 por texto | Seguimiento del día 10 con nota de voz ("nota de voz" en la fila de `conversaciones.md`) | Respuestas al seguimiento | 0 de 4 | | EN CURSO |

## Límites para no saturar al usuario

1. **Ideas de los agentes: máximo 6 por semana** entre todos (radar 3, reutilizador 3; alianzas las deja en `colaboraciones.md`, no aquí). Antes de agregar, cuenta las ideas con `Origen:` de los últimos 7 días; si ya hay 6, no agregues: deja la idea en una línea de `pendientes-hoy.md`. **Las ideas con `Origen: li-inicio` no cuentan para este límite**: son las 6 a 10 que siembra la puesta en marcha, una sola vez.
2. **Piezas en curso: máximo 5** entre "En preparación" y "Por aprobar". Si ya hay 5 o más, el plan del lunes no pasa nada nuevo a preparación: avisa al usuario que primero apruebe o descarte.
3. **No dupliques**: antes de crear, revisa que no exista una pieza con el mismo `tema` o un título casi igual en cualquier columna.
4. **Un post al día en LinkedIn** (perfil y página comparten carril) y nunca el mismo tema dos veces el mismo día. Otras redes van aparte.
5. Ningún agente pasa piezas a `lista` ni a `publicada` sin el sí del usuario.

## Qué lee cada tarea

- **Tarjeta del día:** "Publicar hoy" = la primera pieza de `lista` de cada carril (las 📌 con fecha a 2 días o menos van primero). Muestra cuántas hay "Por aprobar" y si se pasó el límite de 5. Con la respuesta "Ayer" del usuario, mueve a `publicada` con `pubAt` y `link`.
- **Respuestas de la tarde:** los posts del día son las piezas `publicada` con `pubAt` de hoy o ayer.
- **Tablero del viernes y auditoría:** posts publicados = piezas `publicada` con `pubAt` en la semana; "posts del plan" = piezas que el plan del lunes pasó a `prep` o `aprobar` esa semana (las que tienen en `nota` "Plan <fecha del lunes>").
- **Revisión del miércoles:** compara las piezas `publicada` de la semana con las que el plan del lunes eligió, y propone qué aprobar o mover; no cambia fechas porque no hay.
