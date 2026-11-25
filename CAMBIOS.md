# Cambios

## 1.8.0
- Tarea nueva `bienvenida-contactos-linkedin` (lunes a viernes 12:30): un orquestador lee en una visita de solo lectura los contactos añadidos recientemente (quien aceptó la invitación y a quien se le aceptó) y las invitaciones pendientes; filtra amigos, clientes, conversaciones abiertas, competidores y reclutadores; abre solo los perfiles de quienes calzan con un arquetipo (máximo 10, con pausas) y reparte la redacción entre subagentes (voz personal y revisora).
- Dos formas en `li-dm`: Bienvenida A (cliente potencial: un dato concreto de lo suyo y una pregunta de su arquetipo, sin link ni reunión; la sesión se ofrece cuando responde) y Bienvenida B (contacto general: saludo corto y una línea de lo que se hace, sin seguimiento).
- Las A entran a `conversaciones.md` y `senales.md`, y la ronda lleva sus seguimientos. Registro nuevo `datos/bienvenidas.md`. Tabla de aprobación: nada sale sin el sí; las invitaciones pendientes nunca se aceptan solas. El límite de 15 mensajes por día se comparte con la ronda.

## 1.7.0
- `li-post`: tipo nuevo "Herramienta de regalo" (un prompt, una plantilla corta o una lista de verificación completa en el post, con un ejemplo y el criterio del usuario), en la mezcla de valor del planificador.

## 1.6.0
Lo que pasó el filtro de alineación de la lista "20 videos para conseguir clientes con LinkedIn" (Link360 / David Ibáñez; detalle en `conocimiento/fuentes.md`; 17 videos nuevos analizados con transcripción: Ibáñez, Olga de Andrés, Héctor Labarta, Núria Masip, Laura Pérez Izquierdo, Kallaway, Matt Gray, Connor Murray, Paolo Trivellato y los casos Dule Gil y Javier Arambarri):
- `li-post`: tipos nuevos Puerta, Palabra clave y Autodiagnóstico, y columna "Al terminar" (el cierre depende del tipo); prueba "¿lo podría haber publicado cualquiera?"; `Señal esperada` en la nota al aprobar.
- `puntaje.md` y revisora: prueba de doble lectura del gancho; ángulo flojo también en posts.
- Planificador: palabra clave según el tipo; unos 4 de cada 5 posts al perfil si hay página; ciclos de alcance y conversión después de un post que rinde el doble; pregunta semanal de vivencias (`Origen: vivencia`).
- Analista: cada post se mide por las señales que deja (visitas al perfil, guardados, envíos, seguidores y quién comenta) y la tasa de guardados más envíos por tema y formato; perfil frente a página a los 90 días; "Cómo llegó" y repaso de clientes ganados.
- Cierre y `reuniones.md`: "¿cómo llegaste?" tal como lo dice la persona y 3 preguntas a cada cliente ganado.
- `li-profile`: los primeros ~50 caracteres del titular se entienden solos; palabras clave en todo el perfil y el campo Sector; coherencia entre titular, Acerca de y cargo actual.
- Señales nuevas en `senales.md`: respondió o reaccionó a tu comentario en su post (15, 14 días) y excliente que cambió de empresa (30, 90 días). Comentarista: prioriza por el alcance de los propios comentarios y propone la invitación con nota a quien respondió.
- Voz personal: banco "Escenas y frases mías" que alimenta el reutilizador con el sí del usuario.
- Pruebas nuevas en `kanban.md`: imagen resumen contra imagen con título, radar filtrado por compradores, y pedir a quien comenta la palabra que envíe él la invitación.
- Descartado: grupos de interacción, conectar sin nota o en masa, ofertas con plazo inventado, herramientas que extraen datos de perfiles, DMs que nombran la visita al perfil y afirmaciones del algoritmo sin datos.
- Además: tipo Caso en la tabla, plantilla del tablero con los tipos nuevos, `conocimiento/fuentes.md` y `venta-base.md` actualizados.

## 1.5.0
Base de conocimiento para que el inicio pregunte lo mínimo:
- Carpeta nueva `conocimiento/`: `arquetipos-biblioteca.md` (8 arquetipos B2B ya escritos y la regla para elegirlos según lo que vende el usuario), `inferencia.md` (de dónde sale cada dato de la marca sin preguntarlo, su valor por defecto y con qué se corrige solo), `venta-base.md` (el método de venta en una página y cómo aprende el sistema) y `fuentes.md` (catálogo de videos, posts, guías, estudios y repositorios con lo que se tomó, lo que se descartó y la pregunta del filtro que falló).
- `/li-inicio`: modo rápido por defecto, de 20 a 30 minutos y 4 preguntas (meta de reuniones, valor de una venta, acción del perfil y el post que suena al usuario). Los pasos 2 y 3 se hacen juntos con un solo resumen; lo deducido queda como `(supuesto)`; la auditoría y el radar los hacen las tareas de la primera semana. El modo completo sigue disponible.
- `fuentes.md` registra la lista de 20 videos de Link360 / David Ibáñez analizada con transcripción: lo que pasó el filtro queda como candidato para una versión siguiente.

## 1.4.0
- La ronda de conversaciones lee los dos buzones (perfil y página) en la misma visita de solo lectura.
- Señales nuevas: te escribió por DM (35), respondió tu mensaje (30), escribió a la página (35) y visita anónima de un cargo de decisión (15, señal de cuenta, 30 días).
- Acción "responder", primero en la tabla de aprobación y en el radar del tablero, para quien escribió y no tiene respuesta.
- Cuentas calientes en `cuentas-objetivo.md`: la empresa de una visita anónima con cargo de decisión, sin intentar identificar a la persona; el comentarista las prioriza.

## 1.3.0
Radar de leads por señales: `senales.md` con fecha, tipo, fuente y vencimiento; puntaje de encaje + intención; regla de 1, 2 y 3 señales con su "por qué ahora"; cuentas activas; búsqueda web semanal de cuentas objetivo; el analista reajusta los pesos con las reuniones; capítulo "Radar de leads" en la plantilla del tablero con los datasets `radar_leads` y `senales_semana`; `/li-inicio` crea `senales.md` y siembra los datasets vacíos.

## 1.2.0
Prácticas que pasaron el filtro de alineación (se descartaron los conectores de terceros que actúan en la cuenta y los envíos sin aprobación):
- Ronda de conversaciones: "Quién ha visto tu perfil" como señal, en la misma visita y en solo lectura; los anónimos se suman por sector y ciudad para el contenido.
- `li-inbox`: modo barrido mensual de las últimas 30 conversaciones en 4 grupos, sin envíos.
- `li-dm`, revisora y conversaciones: marcan los ángulos flojos y la propuesta de reunión dice para qué es.
- Estratega, cuentas objetivo, comentarista y `/li-inicio`: el frío solo cuando los mensajes templados ya tienen respuestas.
- `seguridad.md`, regla 2: para investigar antes de un DM, máximo 10 perfiles por ronda, solo con arquetipo claro, uno por uno con pausas; la web de la empresa, fuera de LinkedIn.

## 1.1.0
Buenas prácticas de fuentes externas que pasaron el nuevo filtro de alineación:
- `li-mejora` y `radar-nicho-li`: filtro de alineación de 6 preguntas (Acuerdo de Usuario de LinkedIn, `seguridad.md`, voz y marca, B2B en el idioma y países de la marca, evidencia o prueba A/B, si ya existe). `mejoras.md` registra el filtro.
- `marca.md`: campos `accion_perfil` y `pilares`; `/li-inicio` los propone en el paso 2.
- `li-profile`: prueba del amigo antes del puntaje, juicio contra `accion_perfil` y análisis de la foto real.
- `li-audit` y `auditor-li`: cierran con 3 líneas de contenido que pasan a Ideas.
- Plan: reparto semanal entre pilares y al menos un caso real por semana. `analista-li`: otro ángulo antes que otro tema.
- Arquetipos: "Qué ya probó y por qué no le funcionó", "Cómo lo dicen ellos" y respuesta por tipo de objeción (precio, competencia, "ahora no" → NUTRIR).
- `revisora-marca`: lector simulado antes del veredicto.
- `cierre-li`: testimonio pedido a tiempo, mapa de quién decide y práctica de 5 minutos.
- Cuentas objetivo, comentarista y `/li-inicio`: buscar en la propia red con el export oficial de contactos (`Connections.csv`).

## 1.0.2
- Tablero: ninguna frase ni ficha queda con huecos cuando falta un dato; se muestra la parte que sí tiene datos o un estado vacío que dice qué falta. Comprobado en un tablero real recién configurado.

## 1.0.1
Correcciones después de la primera prueba de punta a punta de `/li-inicio` con una marca ficticia:
- `/li-inicio`: lee quién interactuó, pregunta todo lo que el tablero necesita (tasa de cierre, reuniones actuales, charlas, inicio del plan), arma un primer entregable, siembra `resumen` y cierra cada paso con un solo sí.
- Tablero: audiencia por los arquetipos de cada usuario, ticket de referencia, rampa configurable, secciones de evento, charlas y página opcionales, colores de la marca, paneles vacíos compactos y siembra en 7 llamadas.
- Rúbrica nueva para la página de empresa (`rubric-pagina.json`) y nombres en español de la rúbrica del perfil.
- Una sola regla de largo del post; sin días ni horas fijas de publicación; un solo archivo de plan; dos marcadores de dato faltante (`[verificar]` y `[TU DATO]`).
- Los scripts ya no fallan con tildes en Windows; `hookscore.py` sin modismos de un solo país.
- Mientras un entregable esté "Por armar", el post de ese arquetipo cierra con una pregunta. Las ideas del inicio no cuentan para el límite semanal.

## 1.0.0

Primera versión de `linkedin-agent-b2b`: LinkedIn de punta a punta para profesionales y empresas B2B de habla hispana, configurable con los datos de cada usuario.

- **Inicio guiado** (`/li-inicio`): arma `marca.md`, las dos voces, de 1 a 4 arquetipos, las ofertas, los entregables, el kanban y el tablero a partir del perfil, la página y los posts del usuario.
- **Dos voces**: perfil personal (`voz-persona`) y página de empresa (`voz-empresa`), con una revisora de marca que pasa por cada borrador.
- **Escritura**: posts con 21 fórmulas de gancho y puntaje de gancho, viralidad y alcance por arquetipo; carruseles con la identidad visual del usuario; comentarios, respuestas, DMs, perfil y reutilización de contenido.
- **Humanizador** en español e inglés, con cinco chequeos locales.
- **Fila de contenido (kanban)**: la única fuente de lo que se publica, ordenada por puntaje y sin calendario, con límites para no saturar y pruebas A/B.
- **Conversaciones y cierre**: palabra clave y entregable por arquetipo, embudo con seguimientos a los días 4 y 10, mensaje cercano para amigos, y guía, seguimiento y propuesta de cada reunión.
- **Rutina**: tareas programadas (radar, plan, comentarios, respuestas, ronda de conversaciones, tablero, reutilización, auditoría, alianzas y charlas) y una tarjeta diaria.
- **Medición**: tablero semanal con la meta de reuniones, análisis por arquetipo, gancho y formato, y mejoras a las skills que solo se aplican con la aprobación del usuario.
- **Seguridad**: nada se publica ni se envía sin el sí del usuario en el chat; un post al día; máximo 15 DMs al día y 50 invitaciones por semana; todo se detiene ante una advertencia o un captcha; sin correos ni teléfonos en archivos.
- **Plantillas y ejemplo**: plantillas en `datos/` y un juego completo de una empresa ficticia en `ejemplo/`.

Basado en linkedin-agent de Jake Schincariol (licencia MIT). Mejorado por HEI01.
