# Datos de linkedin-agent-b2b

Estos archivos son las fuentes únicas que leen las skills y los agentes. Las copias de esta carpeta son **plantillas**: la copia viva está en la carpeta de trabajo, y esa gana siempre.

## Carpeta de trabajo

Se busca en este orden:

1. La ruta guardada en `~/.claude/linkedin-agent-b2b/carpeta.txt`, si el archivo existe (lo escribe `/li-inicio` cuando el usuario elige su carpeta).
2. Por defecto: `~/.claude/linkedin/`.

Si un archivo no existe en la carpeta de trabajo, cópialo desde aquí la primera vez y avisa al usuario qué falta llenar. **Si falta `marca.md` en la carpeta de trabajo, ninguna skill ni agente sigue: se le dice al usuario "primero corre `/li-inicio`".**

En `ejemplo/` (raíz del plugin) hay un juego de archivos llenos para una empresa ficticia. Sirve para ver cómo queda un inicio terminado; nunca se copia a la carpeta de trabajo.

## Archivos con plantilla

| Archivo | Para qué | Lo leen |
| --- | --- | --- |
| `marca.md` | El ADN: identidad, cuentas y voces, cómo suena, metas, identidad visual y conexiones | todas las skills, agentes y tareas |
| `arquetipos.md` | Los 1 a 4 tipos de cliente, cómo hablarle a cada uno y el reparto del contenido | todas las skills de escritura, voz-persona, voz-empresa, planificador-li, revisora-marca |
| `voz-persona.md` | La voz del perfil personal ("yo") | voz-persona, li-post, li-comment, li-reply, li-dm, revisora-marca |
| `voz-empresa.md` | La voz de la página de empresa ("nosotros"), si hay página | voz-empresa, li-post, li-carousel, revisora-marca |
| `ofertas.md` | Qué se vende, a quién, con qué llamado y link | li-post, li-dm, li-inbox, li-estratega |
| `pruebas.md` | Testimonios autorizados, casos y datos con fuente | li-post, li-carousel, li-dm, las dos voces |
| `entregables.md` | Palabra clave y entregable por arquetipo | li-post, li-dm, conversaciones-li, cierre-li |
| `conversaciones.md` | El embudo de personas y los seguimientos | li-dm, li-inbox, li-reply, conversaciones-li, analista-li |
| `kanban.md` | Reglas de la Fila de contenido (kanban): la única fuente de lo que se publica, sin fechas salvo las fijas | li-plan, li-post, li-estratega, planificador-li, tareas programadas |
| `cuentas-objetivo.md` | A quién comentar cada semana, por arquetipo | li-comment, li-plan, comentarista-li |
| `charlas.md` | Embudo de charlas (encontrada → dada) | charlas-li, li-tablero |
| `reuniones.md` | Cada reunión que viene de LinkedIn, hasta el cierre | cierre-li, analista-li, li-tablero |
| `radar.md` | Formatos y ganchos que rinden en el nicho, y cambios del algoritmo | radar-nicho-li, li-plan, li-post |
| `mejoras.md` | Mejoras propuestas a las skills, con su estado | radar-nicho-li, analista-li, auditor-li, li-mejora |
| `amigos.md` | Amigos y cercanos: reciben un mensaje cercano, no comercial | conversaciones-li, li-dm, respuestas-li |
| `seguridad.md` | Límites para no arriesgar la cuenta (y las únicas excepciones de envío y publicación con aprobación) | todas las skills y tareas |

## Archivos sin plantilla

El agente que los escribe los crea al primer uso. Si no existen, no es un error.

| Archivo | Para qué | Lo escribe |
| --- | --- | --- |
| `estado.md` | Aprendizajes, última auditoría y puntaje del perfil | analista-li, auditor-li |
| `borradores/plan_<AAAA-MM-DD>.md` | El plan de la semana (la fecha es la del lunes; vale el más reciente). Da el orden y el tipo de las piezas, no el día ni la hora | li-plan, planificador-li, tarea del plan semanal |
| `log.md` | Cada post publicado con su puntaje estimado y sus métricas | li-post, analista-li |
| `rondas_log.md` | Rondas de conversación hechas (meta: 2 por semana) | conversaciones-li, li-tablero |
| `swipe-li.md` | Resumen del radar ordenado por múltiplo | radar-nicho-li (con `swipe.py`) |
| `colaboraciones.md` | Alianzas propuestas | alianzas-li |
| `pendientes-hoy.md` | Una línea por cosa que dejó cada tarea; la tarjeta del día lo junta y lo vacía | todas las tareas, li-rutina |

## Reglas

- Si un dato no está en estos archivos, no existe. Se le pide al usuario, nunca se inventa.
- **Marcadores de dato faltante: solo dos**, en todos los archivos, borradores y skills. `[verificar]` es un dato que falta confirmar (un cargo, un caso, una fecha, una anécdota, una fuente); puede decir qué falta: `[verificar: nombre del cliente]`. `[TU DATO]` es una cifra que solo el usuario puede poner (un monto, un porcentaje, un plazo). No se usa ninguna otra forma, y ningún texto se publica ni se envía con un marcador adentro.
- Las filas y los bloques marcados `EJEMPLO` en las plantillas muestran cómo se llena la tabla. `/li-inicio` copia las plantillas a la carpeta de trabajo sin ellos (si alguno quedó, se borra) y **nunca se cuentan** en el tablero, el embudo ni los análisis.
- Sin correos ni teléfonos de personas en ningún archivo (ver `seguridad.md`).
