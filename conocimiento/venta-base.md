# Cómo vende este sistema (el método, en una página)

Resumen del método de venta que siguen las skills y los agentes del plugin. Sirve para que el usuario entienda qué va a pasar y para que `/li-inicio` no tenga que preguntarle cómo vende: se parte de este método y se ajusta con lo que el usuario ya hace. Cada paso dice qué archivo lo detalla. De dónde sale cada regla: `fuentes.md`.

## El camino, de la primera señal al cierre

| Etapa | Qué pasa | Quién lo prepara | Qué hace el usuario |
| --- | --- | --- | --- |
| 1. Atención | Posts para un arquetipo por vez, con la mezcla 1 de alcance, 2 de valor y 1 de relación por cada 4, y al menos un caso real por semana si hay pruebas autorizadas | `planificador-li`, `/li-post` | Aprueba y publica |
| 2. Presencia | Comentarios con aporte en las cuentas objetivo (método 1 + 3) y respuestas a quien comenta sus posts | `comentarista-li`, `respuestas-li` | Pega los comentarios |
| 3. Señal | Alguien comenta la palabra clave, escribe, responde, ve el perfil, cambia de cargo o su empresa anuncia algo. Cada señal suma puntos; 3 en 14 días o 70 puntos = escribirle | `datos/senales.md`, `conversaciones-li` | — |
| 4. Primer mensaje | 2 frases sobre algo concreto de la persona y una pregunta de verdad. Sin link, sin llamada, sin presentarse. A quien pidió el entregable: el link primero y una pregunta diagnóstica | `/li-dm` | Aprueba y envía |
| 5. Conversación | Responder sobre lo que la persona contó, con sus palabras. Seguimientos el día 4 y el día 10, con algo útil, sin reprochar el silencio. Dos sin respuesta = se deja | `conversaciones-li` | Aprueba y envía |
| 6. Oferta | La reunión se ofrece **solo cuando la persona respondió y está caliente** (decide, tiene el problema, hay urgencia) | `conversaciones-li` | Aprueba |
| 7. Reunión | Guía con lo que la persona dijo, su arquetipo y la objeción probable; simulación de 5 minutos antes | `cierre-li` | Tiene la reunión |
| 8. Propuesta y cierre | Seguimiento al día siguiente, borrador de propuesta, objeción → idea de contenido, pedido de testimonio a tiempo | `cierre-li` | Envía |

## Reglas que no cambian

- **Nada se publica ni se envía sin el sí del usuario.** Los agentes dejan todo como borrador.
- **Sin automatizar LinkedIn:** ni invitaciones, ni mensajes, ni scraping, ni herramientas que identifiquen visitantes anónimos. Límites en `datos/seguridad.md` (15 DMs al día, 50 invitaciones a la semana, un post al día).
- **Templado antes que frío:** primero su red y quien ya interactuó; el frío espera hasta que los mensajes templados tengan respuestas de forma constante.
- **Sin urgencia falsa ni presión.** Nada de "quedan 2 cupos" si no es verdad.
- **Sin cifras inventadas.** Lo que falta va como `[verificar]`.

## Objeciones (las 3 que más se repiten en B2B)

| Tipo | Salida |
| --- | --- |
| Precio | Responder con el valor y el costo de no hacerlo. No bajar el precio en la misma conversación |
| Competencia | Comparar por criterio, sin criticar al otro. Preguntar qué valora |
| "Ahora no" | Acordar cuándo, pasar a NUTRIR con fecha y escribir en esa fecha con algo útil. Nunca insistir en el momento |

**Cuando quien conversa está convencido y su jefatura no:** proponer un **primer paso más chico** que su jefe pueda aprobar y ver funcionar antes de invertir más (un piloto acotado, un diagnóstico, una sesión con el equipo).

## Cómo vender a cada arquetipo

El llamado, la evidencia y el tono de cada uno están en `arquetipos.md` (y su punto de partida, en `arquetipos-biblioteca.md`). Regla general: a quien **decide**, criterio y casos de pares; a quien **implementa**, pasos y un primer resultado en 90 días; a quien **cuida a las personas**, historias de adopción; a quien **cuida el presupuesto**, etapas y números con fuente; a quien **cuida la tecnología**, detalle y reglas claras.

## Cómo aprende el sistema (sin preguntarle al usuario)

- Cada post que el usuario corrige ajusta la voz (`/li-post` anota qué cambió).
- Cada conversación agrega frases a "Cómo lo dicen ellos" y reemplaza los supuestos del arquetipo.
- Cada reunión agrega la objeción real y "qué ya probó" (`cierre-li`).
- Cada viernes, `analista-li` mide qué tema, formato y arquetipo trajo conversaciones y reuniones, y propone cambios en `mejoras.md`.
- Cada mes, `auditor-li` vuelve a puntuar el perfil.
- Toda práctica nueva pasa por el filtro de alineación de `/li-mejora` antes de entrar.
