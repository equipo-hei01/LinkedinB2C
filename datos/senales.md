# Señales de compra (radar de leads)

Una lista dice a quién; una señal dice cuándo. Aquí se anota cada señal por persona, con su fecha y su fuente. Las señales vencen, suman un puntaje de encaje + intención y deciden qué hacer con cada persona. La lee y la escribe `conversaciones-li` en cada ronda; la leen `analista-li` y la tarea del tablero de los viernes.

Una fila por señal. **Nunca se borra una fila:** al calcular, las que pasaron su fecha de "Vence" cuentan como vencidas. Sin correos ni teléfonos (`seguridad.md`). **Nunca se agrega una señal sin fuente** ni se inventa una.

| Fecha | Persona | Cargo | Empresa | Arquetipo | Tipo de señal | Detalle (sin datos de contacto) | Fuente | Vence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EJEMPLO (borra esta fila; no se cuenta): AAAA-MM-DD | Carlos Ruiz Soto | Director de Operaciones | empresa ficticia | Decisor | Comentó con contenido | Comentó el post sobre procesos que dependen de una sola persona | Ronda de conversaciones (notificaciones) | AAAA-MM-DD |

**Arquetipo:** uno de `arquetipos.md` por el cargo (la misma regla de `conversaciones.md`), u **Otro**.

## Tipos de señal, peso y vencimiento

| Tipo de señal | Peso | Vence a los |
| --- | --- | --- |
| Te escribió por DM (mensaje nuevo, sin que le escribieras primero) | 35 | 14 días |
| Respondió tu mensaje | 30 | 14 días |
| Escribió a la página de la empresa | 35 | 14 días |
| Comentó la palabra clave | 30 | 14 días |
| Comentó con contenido | 15 | 14 días |
| Reaccionó | 8 | 14 días |
| Vio tu perfil | 10 | 7 días |
| Aceptó tu invitación o te invitó | 10 | 14 días |
| Cargo nuevo (aviso de LinkedIn en notificaciones) | 20 | 90 días |
| Novedad de la empresa (nueva gerencia, un área nueva en lo que resuelven tus ofertas, fusión, plan estratégico, un proyecto anunciado en ese tema) | 25 | 30 días |
| La empresa está contratando para los cargos o áreas que `arquetipos.md` asocia a cada arquetipo | 20 | 30 días |
| Siguió la página de la empresa | 8 | 14 días |
| Visita anónima de un cargo de decisión (señal de cuenta; ver abajo) | 15 | 30 días |

"Vence" = Fecha + los días de su tipo. Estos pesos solo los cambia el usuario (ver "Aprender").

## Fuentes (las únicas)

- **La ronda de conversaciones:** interacciones, visitas al perfil, invitaciones y avisos de cargo nuevo en notificaciones, en la misma visita de solo lectura que la ronda ya hace (`seguridad.md`, regla 2). Las visitas anónimas no entran como fila de persona; solo la de un cargo de decisión entra como señal de cuenta (abajo).
- **Los dos buzones, en esa misma visita de solo lectura:** el buzón personal (https://www.linkedin.com/messaging/), conversaciones con actividad en los últimos 14 días, y el de la página de empresa (vista de administración de la página, sección Mensajes o Bandeja de entrada), si el usuario tiene página. Se usan el nombre y el titular que se ven en la conversación, sin abrir perfiles en serie (la regla de investigación de `seguridad.md` no cambia: máximo 10 perfiles por ronda, solo con arquetipo claro).
- **Búsqueda web (fuera de LinkedIn), en la ronda del viernes:** las empresas de `cuentas-objetivo.md`, máximo 10 por semana, solo para "Novedad de la empresa" y "La empresa está contratando". En "Fuente" va el sitio donde se vio (web de la empresa, prensa, portal de empleo).

Sin herramientas de terceros que saquen datos de LinkedIn, sin identificar visitas anónimas a la web, sin buscar correos de terceros ni escribir correos en frío.

## Puntaje (0 a 100)

- **Encaje (0 a 50):** cargo que calza con un arquetipo de `arquetipos.md` 25 (cargo cercano 10) · tamaño de empresa del arquetipo 15 · país (`pais` de `marca.md`) y sector del público 10.
- **Intención (0 a 50):** suma de los pesos de las señales vigentes (sin vencer) de esa persona, con tope 50.
- **Puntaje = encaje + intención.**

## Qué hacer con cada persona

| Señales vigentes | Acción |
| --- | --- |
| Te escribió (al perfil o a la página) y el usuario aún no le responde | **Responder:** va primero en la tabla de aprobación, sin importar el puntaje, con el borrador listo y su "por qué ahora". |
| 1 | **Observar:** no se escribe. |
| 2 | **A la lista:** si es cuenta objetivo, comentar sus posts. |
| 3 en 14 días, o puntaje de 70 o más | **Escribir** en la próxima ronda (con el sí del usuario, como siempre). |

Si el usuario ya le respondió, la señal ("Te escribió", "Respondió tu mensaje" o "Escribió a la página") suma como cualquier otra y sigue la regla 1-2-3. A quien escribió se le aplican los mismos filtros: vendedores, reclutadores, spam, quien busca empleo y competencia se saltan; amigos van por el mensaje cercano de `amigos.md`; clientes actuales y propuestas abiertas, por el flujo de cierre (`cierre-li`).

**Se salta siempre:** clientes actuales y propuestas abiertas (van por el cierre, `cierre-li`), competencia, quien busca empleo, vendedores, quien recibió un mensaje en los últimos 30 días, y amigos (van por el mensaje cercano de `amigos.md`).

**Por qué ahora:** cada persona que pasa a "escribir" lleva una frase con la señal + el momento + su problema (ejemplo ficticio: "nuevo gerente de operaciones + comentó dos posts sobre traspasos entre áreas"). El DM que sale de ahí tiene menos de 60 palabras, una sola pregunta suave, entra por su problema y nunca dice "vi que te gustó un post" ni "vi que viste mi perfil" (ver `/li-dm`).

**Cuentas, no solo personas:** si una empresa de `cuentas-objetivo.md` tiene 2 o más personas con señales vigentes, es **cuenta activa**: se anota en ese archivo y se propone a quién más conviene conocer ahí (quién decide), sin buscar correos.

**Visita anónima de un cargo de decisión (señal de cuenta):** cuando "Quién ha visto tu perfil" muestra un visitante anónimo con un cargo que calza con un arquetipo (por ejemplo, "Director ejecutivo en una empresa de consumo masivo"), no se intenta identificar a la persona ni se le escribe.
- Su empresa entra a `cuentas-objetivo.md` como **cuenta caliente** durante 30 días, con la nota "visita anónima de [cargo] el [fecha]", y la fila aquí va con Persona "—" y la empresa (si la empresa no se ve, solo la línea de visitas anónimas para el contenido).
- Mientras esté vigente, suma su peso a cualquier persona de esa empresa que dé otra señal, y `comentarista-li` prioriza los posts de esa empresa y de sus gerentes.
- Nunca: adivinar quién es, escribir "vi que viste mi perfil" ni recorrer los perfiles de la empresa.

**Aprender:** `analista-li` cruza cada viernes las reuniones agendadas con el tipo de señal que las originó. Con 8 o más reuniones, propone en `mejoras.md` reajustar los pesos de la tabla de arriba. Nunca los cambia solo.
