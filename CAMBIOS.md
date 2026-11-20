# Cambios

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
