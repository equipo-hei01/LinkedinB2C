# Fuentes: de dónde sale lo que sabe este plugin

Catálogo de los materiales públicos que se estudiaron para construir el sistema (videos, posts, guías, estudios y repositorios), con lo que se tomó de cada uno, dónde quedó y lo que se descartó. Todo lo que entró pasó antes por el **filtro de alineación** de `/li-mejora`:

| N.º | Pregunta del filtro |
| --- | --- |
| P1 | ¿Cumple el Acuerdo de Usuario de LinkedIn (nada de automatizar, scraping, grupos de interacción, identificar visitantes anónimos)? |
| P2 | ¿Respeta `datos/seguridad.md` (nada sin el sí del usuario, 15 DMs al día, 50 invitaciones a la semana, un post al día)? |
| P3 | ¿Calza con la voz y la marca (sin urgencia falsa, sin cebo de interacción, sin cifras inventadas)? |
| P4 | ¿Sirve para vender B2B en español? |
| P5 | ¿Hay evidencia o se puede probar A/B? |
| P6 | ¿Es nuevo respecto de lo que ya hace el plugin? |

Sobre la evidencia: casi todas las cifras de los creadores son de sus propias cuentas, sin grupo de control, y muchos venden un servicio. Por eso el plugin las usa para **decidir qué probar**, nunca como dato dentro de un post. Las reglas de esta carpeta se inspiran en estas fuentes y están reescritas y adaptadas: lo que dice el plugin es responsabilidad del plugin, no de sus autores.

Para agregar una fuente nueva: pásala por `/li-mejora`, anota aquí qué se tomó y qué se descartó (con la pregunta que falla), y la versión de `CAMBIOS.md` en que entró.

## 0. Base técnica

| Fuente | Qué se tomó | Dónde |
| --- | --- | --- |
| Jake Schincariol · repositorio `linkedin-agent-skill` (MIT) · https://github.com/Jakeschincariol/linkedin-agent-skill | Las 11 skills originales, las 21 fórmulas de gancho, la rúbrica del perfil, el humanizador y los scripts de puntaje y de swipe | Todo el plugin (ver `LICENSE`) |
| Corey Haines · repositorio `marketingskills` (MIT) · https://github.com/coreyhaines31/marketingskills | Skills opcionales que el sistema usa si están instaladas: `lead-magnets` (arma el entregable que falte), `customer-research` (conclusiones con evidencia y "cómo lo dicen ellos"), `offers` (propuesta de ajuste de oferta), `emails` (secuencias solo a quien dio su permiso) | `/li-inicio`, plan y análisis semanal |
| Sistema de storyselling por arquetipos de HEI01 (propio, no público) | La estructura de los arquetipos: lo que piensa y no dice, tensión, reencuadre, mapa narrativo, el cliente como héroe y la marca como mentor | `datos/arquetipos.md`, `conocimiento/arquetipos-biblioteca.md` |
| LinkedIn · Acuerdo de Usuario · https://www.linkedin.com/legal/user-agreement | La pregunta P1 del filtro y las reglas de `seguridad.md` | `/li-mejora`, `datos/seguridad.md` |

## 1. Perfil

| Fuente | Qué se tomó | Dónde | Descartado |
| --- | --- | --- | --- |
| Luis Garau · "LinkedIn: cómo hacer un buen perfil en 2026" · https://youtu.be/R_eV2jOSjv0 | Fórmula del titular "Ayudo a [cargo] a [resultado] sin [fricción] \| palabras clave"; pedir recomendaciones a clientes con testimonio | `/li-profile` | — |
| David Ibáñez · post "10 prompts para LinkedIn" · https://www.linkedin.com/posts/david-ibanez-_deja-de-pedirle-a-la-ia-que-escriba-como-share-7527641831359283200-wQ1u | Frase del banner (máx. 12 palabras); Destacados ordenados por lo que más acerca a escribir; Experiencia en primera persona con `[TU DATO]` en vez de cifras inventadas | `/li-profile` | 3 de los 10 prompts ya estaban (P6) |
| Post "4 prompts para revisar tu perfil" (autor no registrado) | Prueba del amigo antes del puntaje; `accion_perfil` como vara de todo el perfil; la auditoría cierra con 3 ideas de contenido | `/li-profile`, `/li-audit`, `auditor-li` | Herramientas de imagen externas (P6) |

## 2. Contenido y ganchos

| Fuente | Qué se tomó | Dónde | Descartado |
| --- | --- | --- | --- |
| Pierre Herubel · "How I write LinkedIn posts that get 100,000+ views" · https://www.youtube.com/watch?v=i-YDUfx84f8 | Gancho de una línea con re-gancho en la segunda, todo antes del "ver más" | `/li-post`, `puntaje.md`, revisora | — |
| Kasey Brown · "I only write 5 types of LinkedIn posts" · https://www.youtube.com/watch?v=2t-EBcS43Lw | Los 5 tipos de post; mezcla 1 de alcance, 2 de valor y 1 de relación por cada 4; filtro "¿un cliente pagaría por esta idea?" | `/li-post`, `planificador-li`, revisora | Sus cifras de ingresos (P5) |
| Justin Welsh · "Systemizing your content structure" · https://www.youtube.com/watch?v=SkR3XB6Bvq8 | Un tema largo en 5 piezas repartidas en semanas | `reutilizador-li`, `/li-repurpose` | — |
| Jasmin Alić · "How he grew to 300K followers" (The Futur) · https://www.youtube.com/watch?v=1z1lsaQJ8K4 | Señal de credibilidad; casos sin la industria en el gancho; pregunta final que empuja a justificar; hora de comunidad de 30 minutos; método 1 + 3 en comentarios | `/li-post`, `puntaje.md`, `/li-comment`, `comentarista-li` | Venta en el comentario fijado: quedó como prueba A/B (P5) |
| Dan Koe · "The most profitable niche is you" · https://www.youtube.com/watch?v=4pm5C3erORo | Solo contexto | — | "80 % del contenido fuera de lo que vendes" diluye la autoridad en B2B (P3, P4) |
| Link360 / David Ibáñez · post de las 3 etapas que faltan e infografías (12 ideas, 6 piezas, embudo) | Pilares fijos repartidos cada semana; a las 4 semanas sin conversaciones, otro ángulo antes que otro tema; un caso real por semana; "Qué ya probó" y "Cómo lo dicen ellos" en los arquetipos | `marca.md` (`pilares`), `planificador-li`, `analista-li`, `arquetipos.md` | Herramientas de DMs automáticos (P1) |
| Estudios de rendimiento de posts (LinkedIn Engineering 2020; AuthoredUp, 309.614 posts; ContentIn; MagicPost; Burnkrant y Unnava 1995; estudios de negación correctiva en español) | Pesos del puntaje de ganchos: largo, especificidad, contraste, carga temprana y tuteo | `skills/li-post/hookscore.py` | Son correlacionales y no separan por idioma |
| Estudios de carruseles (Socialinsider, Oktopost, MagicPost, Metricool con 673.658 posts y otros, 2026) | 9 a 12 láminas; la portada pesa casi todo; una idea por lámina; lámina resumen; un solo llamado; los perfiles personales rinden más que las páginas | `skills/li-carousel/formulas.md` | Se usan como guía de diseño, nunca como dato dentro de un post |

## 3. Algoritmo

| Fuente | Qué se tomó | Estado |
| --- | --- | --- |
| LinkedIn Engineering · "Profile Relevance: boosting feed relevance with LLMs" (nov 2026) · https://www.linkedin.com/blog/engineering/feed/profile-relevance-boosting-feed-relevance-with-llms-at-linkedin | Tema y tipo de lector claros en las 2 primeras líneas; nombrar el país; una pregunta que sirva a quien no está en la red | Propuesta para probar (`radar-nicho-li`) |
| Social Media Today · "LinkedIn cracks down on AI-generated comments" (nov 2026) | Cada comentario o respuesta lleva un dato, un caso o una postura propia | Propuesta (`/li-comment`, `/li-reply`, `/li-human`) |
| Forbes Argentina · LinkedIn frena el contenido de baja calidad hecho con IA (ago 2026) | Chequeo de "perspectiva propia" en el humanizador | Propuesta (`/li-human`) |

## 4. Conversaciones y mensajes

| Fuente | Qué se tomó | Dónde | Descartado |
| --- | --- | --- | --- |
| David Ibáñez · post "10 prompts para LinkedIn" (el de la sección 1) | Primer mensaje: 2 frases sobre algo de la persona y una pregunta de verdad, sin link ni llamada; DM de entrega con el link primero y una pregunta diagnóstica; seguimiento sin reproche; respuestas de unas 40 palabras | `/li-dm`, `entregables.md`, `/li-reply`, `respuestas-li` | — |
| Christian Krause · "I've sent 25 LinkedIn DMs every day for a year" · https://www.youtube.com/watch?v=3uw_qwvwAw4 | Prueba "tú vs. yo"; imitar el largo y el tono de la otra persona; siguiente paso concreto; estado NUTRIR; DESCARTADO revisado a los 90 días | `/li-dm`, `conversaciones-li` | 25 DMs al día (P2); su tasa de respuesta (P5); notas de voz solo como prueba |
| Link360 / David Ibáñez · guía "Sistema Claude x LinkedIn de ventas: de la lista a la reunión" (Notion) · https://pattern-alfalfa-6f3.notion.site/Sistema-Claude-x-LinkedIn-de-ventas-de-la-lista-a-la-reuni-n-40ea0235e5df815faff1d1c76e09895e | "Quién ha visto tu perfil" como señal de solo lectura; barrido mensual de las últimas 30 conversaciones; ángulos flojos marcados; la propuesta de reunión dice para qué es; el frío solo cuando el templado ya responde; investigación previa de máximo 10 perfiles | `conversaciones-li`, `/li-inbox`, `/li-dm`, revisora, `seguridad.md` | Conectores de terceros que actúan en la cuenta (P1); envíos sin aprobación (P2) |
| Post e imagen "La generación de leads se basa en las señales" (agencia no registrada) | "Una lista dice a quién, una señal dice cuándo"; señales que vencen; pesos por tipo; puntaje de encaje + intención; regla de 1, 2 y 3 señales; "por qué ahora" en menos de 60 palabras | `datos/senales.md`, `conversaciones-li`, tablero "Radar de leads" | Herramientas de scraping, enriquecimiento y envío masivo (P1, P2); identificar visitantes anónimos (P1, P3); sus cifras (P5) |
| Pablo Rodríguez · video sobre automatizar LinkedIn con IA · https://youtu.be/h-wIoplHUC4 | Lector simulado (el arquetipo lee la pieza antes del veredicto); buscar en la propia red con el export oficial `Connections.csv` | Revisora, `cuentas-objetivo.md`, `comentarista-li` | La herramienta (automatiza invitaciones, DMs y publicación: P1, P2); sus cifras (P5) |

## 5. Lead magnets y venta

| Fuente | Qué se tomó | Dónde | Descartado |
| --- | --- | --- | --- |
| David Ibáñez · "El embudo de lead magnets que convierte comentarios en llamadas" · https://youtu.be/BgXlKV9VuC0 | Diagnóstico antes de ofrecer la sesión; nunca editar mensajes enviados; la objeción de cada reunión pasa a ideas de contenido | `/li-dm`, `conversaciones-li`, `cierre-li` | Palabra clave solo en la imagen o el primer comentario: quedó como prueba A/B (P5); secuencias de correo sin consentimiento (P2, P3) |
| David Ibáñez · "El sistema para conseguir clientes B2B con LinkedIn + IA" · https://youtu.be/byMyyF2Q8cY | Confirmó el camino de 7 piezas del post a la reunión | `conocimiento/venta-base.md` | Sales Navigator obligatorio (P6) |
| Post "50 skills de Claude para ventas B2B" (autor no registrado) | Mapa de quién decide; respuesta por tipo de objeción (precio, competencia, "ahora no" → NUTRIR); ensayo de 5 minutos antes de la reunión | `cierre-li`, `arquetipos.md` | Demos, negociación y renovaciones: fuera de LinkedIn (P4, P6) |

## 6. Métricas

| Fuente | Qué se tomó | Dónde |
| --- | --- | --- |
| Delaware ShoutOut · "How to use LinkedIn Analytics to grow your business" · https://www.youtube.com/watch?v=DXX45_RWxeg | Sin decisiones con una sola semana: ventanas de 90 días y 6 meses sin atípicos; tasa por tema y formato; audiencia contra arquetipos cada trimestre; seguidores nuevos de la página como señal | `analista-li`, `auditor-li` |

## 7. Lista "20 videos para conseguir clientes con LinkedIn" (Link360 / David Ibáñez, nov 2026)

Los n.º 6, 13 y 15 ya están arriba. Los otros 17 se analizaron con transcripción completa el 25 de noviembre de 2026. Lo que pasó el filtro está como **candidata**: se aplica en una versión siguiente, cuando se apruebe.

| # | Fuente | Candidatas que pasaron el filtro | Descartado |
| --- | --- | --- | --- |
| 1 | David Ibáñez · "Por qué LinkedIn no te trae clientes" · https://youtu.be/sR_QwouySyQ | Preguntar "¿cómo llegaste?" y repasar el camino de cada cliente ganado | Software que capta y puntúa leads de forma automática (P1) |
| 2 | David Ibáñez · "Copiar posts te aleja de tus clientes" · https://youtu.be/8_Tg2pbaybc | Medir cada post por las señales que deja (visitas al perfil, guardados, envíos, quién comenta) y no por las reacciones; el radar solo toma de referencia posts que comentan los compradores | — |
| 3 | Olga de Andrés · "Lo que funciona en 2026" · https://youtu.be/rkDuCcS6a9w | La mayoría de los posts al perfil y no a la página; usar el alcance de los propios comentarios para elegir a quién comentar | Post que es solo una pregunta (P3) |
| 4 | Héctor Labarta · "El nuevo algoritmo de 2026" · https://youtu.be/nTbfQ0yGCFo | Revisar que titular, Acerca de y cargo actual cuenten la misma historia | Afirmaciones sobre el algoritmo sin datos (P5) |
| 5 | Núria Masip · "Perfil para atraer clientes sin Premium" · https://youtu.be/L68XlKw01xE | Las mismas palabras clave a lo largo de todo el perfil y el campo Sector bien puesto | "El Sector afecta el SSI" (P5) |
| 7 | Laura Pérez Izquierdo · "Perfil con ejemplos reales" · https://youtu.be/zqSK6gm8AyA | Los primeros ~50 caracteres del titular se entienden solos | Destacados solo con enlaces externos (P5) |
| 8 | Daniela Zapata · "Clientes solo optimizando tu perfil" · https://youtu.be/uIo1W9krOWQ | — | Modo creador (ya no existe, P6); página de servicios con presupuesto (P4, P5) |
| 9 | David Ibáñez · "14K seguidores y +40 clientes" · https://youtu.be/Gb5JgdXcCK8 | Ciclos de alcance y conversión después de un post que rinde; tipo de post "puerta" que muestra cómo es trabajar juntos, sin urgencia | Conectar en masa sin nota (P2); ofertas con plazo inventado (P3); extensiones que extraen datos (P1) |
| 10 | Laura Pérez Izquierdo · "Posts de +100.000 impresiones" · https://youtu.be/4iJY6n5Aiec | Decidir qué debe pasar al terminar de leer según el tipo de post; pregunta semanal de vivencias al usuario; prueba "¿lo podría haber publicado cualquiera?" | — |
| 11 | Kallaway · "Make your hooks impossible to skip" · https://youtu.be/2byPP_9F0-Q | Prueba de doble lectura del gancho | — |
| 12 | Matt Gray · "Beat the new LinkedIn algorithm" · https://youtu.be/0H4uouOn7lI | Prueba A/B de imagen que resume el post contra imagen con título | Grupos que interactúan en los primeros minutos (P1); pedir "repostea" (P3) |
| 14 | David Ibáñez · "70 llamadas de venta con 1 solo post" · https://youtu.be/wXNYWBIiHo0 | Tipo de post "palabra clave" con estructura propia y una frase que saca la presión | Calificar con IA sacando datos de perfiles y enviar el link solo (P1, P2) |
| 16 | Connor Murray · "How social selling actually works" · https://youtu.be/-yNoCeiqcII | Señal "exclientes que cambiaron de empresa" | Conectar sin nota (P2); exportar listas para sacar correos (P1, P2) |
| 17 | Canal de David Ibáñez · "5 clientes en 60 días: Dule Gil" · https://youtu.be/E_jMtjsaKPs | Señal "respondió a tu comentario en su post" y de ahí la invitación con nota | Mandar cada post por DM para que lo muevan (P1, P3) |
| 18 | Canal de David Ibáñez · "Javier Arambarri, Top 3 CEO en LinkedIn" · https://youtu.be/BCdqzt9gmOQ | Banco de escenas y frases propias del usuario sacado de sus charlas y videos; medir guardados y envíos | — |
| 19 | Paolo Trivellato · "Agencia a 1,2 M$ al año solo con LinkedIn" · https://youtu.be/-gq8euRvNR4 | Post de autodiagnóstico (preguntas con umbral); pedir a quien comenta la palabra que envíe él la invitación | DM que nombra la visita al perfil (P3); precio en el gancho (P3) |
| 20 | Paolo Trivellato · "Agencia SEO cierra 150.000 $ con un post" · https://youtu.be/4eoxInK66hg | Confirma la invitación iniciada por quien comenta | Publicar siempre a la misma hora como regla (P5) |

## 8. Revisadas y descartadas enteras

| Fuente | Por qué |
| --- | --- |
| Página "11 skills de Claude para tu LinkedIn" (linkedin.iahipster.com) | Copia del repositorio original (P6) |
| Curso "Recurso ventas Claude" (linkedingrowthsystem.com) | Campañas y mensajes automáticos (P1); lo demás pide datos personales para verse |
