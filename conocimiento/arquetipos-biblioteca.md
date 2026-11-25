# Biblioteca de arquetipos B2B (punto de partida, no la respuesta)

`/li-inicio` usa esta biblioteca para **proponer** los arquetipos del usuario ya escritos, en vez de preguntarle campo por campo. Elige de 1 a 4 roles según lo que leyó (a quién le vende en su sitio y sus casos, los cargos de su audiencia en Analytics, a quién le habla en sus posts y quién le comenta), los **adapta a su oferta y su industria** y los escribe en `arquetipos.md` de la carpeta de trabajo. El usuario solo corrige.

Cómo se adapta cada rol:
- Reemplaza `[tema]` por lo que vende el usuario (por ejemplo "el ERP", "la transformación digital", "la estrategia comercial", "la adopción de IA") y `[resultado]` por el resultado que promete en su sitio o su titular.
- El nombre del arquetipo se lo puede dejar tal cual o cambiar por uno propio de la marca (en HEI01, el Decisor se llama "Orquestador").
- Todo lo que viene de aquí entra marcado `(supuesto)` hasta que una conversación real lo confirme o lo cambie. `conversaciones-li`, `respuestas-li` y `cierre-li` reemplazan los supuestos por frases reales en "Cómo lo dicen ellos" y "Qué ya probó"; `analista-li` revisa cada 4 semanas qué arquetipo conversa y propone el reparto.
- **Qué ya probó** trae lo típico del rol. Si el usuario conoce lo que probaron sus clientes, eso manda.

Base: patrones de compra B2B (comité de compra con quien decide, quien implementa, quien cuida a las personas, quien cuida el presupuesto y quien cuida la tecnología) y el sistema de storyselling por arquetipos con que se construyó el plugin de HEI01 (ver `fuentes.md`). Sin cifras: los datos de mercado se agregan con fuente en `arquetipos.md`.

## Cómo elegir (regla rápida)

| Si el usuario vende… | Arquetipos que se proponen (en orden de reparto) |
| --- | --- |
| Consultoría o servicios a empresas medianas y grandes | Decisor · Implementador · y uno de: Cuidador de personas, Guardián del presupuesto o Guardián técnico, según a quién le habla su oferta |
| Formación, talleres o desarrollo de equipos | Cuidador de personas · Implementador · Decisor |
| Software, tecnología o datos | Implementador · Guardián técnico · Guardián del presupuesto |
| Servicios comerciales, marketing o ventas | Líder comercial · Decisor |
| Servicios a pymes o a dueños | Dueño de pyme (a veces es el único arquetipo) |
| Servicios financieros, legales o de cumplimiento | Guardián del presupuesto · Decisor |

Reparto sugerido: 50 % al primero (decide y tiene presupuesto), 30 % al segundo y 20 % al tercero. Con un solo arquetipo, 100 %. Si la audiencia real (Analytics) no calza con a quién quiere venderle, se dice en el resumen del paso.

---

## 1 · Decisor (gerente general, CEO, dueño de empresa mediana o grande, director)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Decide y tiene presupuesto |
| Quiere | Que `[tema]` dé resultados que pueda mostrar al directorio o a los socios, sin perder el control |
| Dolor | Le prometen mucho y ve poco resultado; tiene que decidir sin tiempo para estudiar el detalle |
| Teme perder | Credibilidad ante el directorio, plata en algo que no escala, el control de la agenda |
| Tensión | Avanzar rápido frente a no equivocarse en público |
| Creencia actual → nueva | "Tengo que saber de esto para decidir" → "Necesito criterio para decidir qué va primero, no todas las respuestas" |
| Evidencia que necesita | Casos de pares de su tamaño, un marco que pueda defender, quién más lo hizo |
| Emoción a activar | Tranquilidad, control, orgullo de decidir con criterio |
| Tono | Directo, breve, sin tecnicismos, de par a par |
| Llamado típico | Conversación ejecutiva o diagnóstico corto |
| Entregable típico | Checklist de decisión de una página ("10 preguntas antes de aprobar `[tema]`") |

**Lo que piensa y no dice:** "No quiero que se note que no lo tengo claro" · "Ya aprobé dos iniciativas que no llegaron a nada" · "¿Quién responde si esto sale mal?"

**Palabras que lo activan:** criterio, prioridad, riesgo, resultado, directorio, control, decisión, retorno, foco, plazo.
**Palabras que lo alejan:** disruptivo, revolucionario, hack, tendencias, "transformar tu vida", jerga técnica.

**Objeciones:** "No es prioridad este año" · "Ya tenemos a alguien viendo eso" · "Muéstrame casos de empresas como la mía".

**Qué ya probó (típico):** consultoras grandes con informes que nadie usó; delegarlo en un área sin presupuesto ni mandato; pilotos que no pasaron de piloto.

**Ganchos:** "¿Qué le respondes al directorio cuando pregunta por `[tema]`?" · "El problema no es `[tema]`. Es decidir qué va primero."

---

## 2 · Implementador (gerente de transformación, innovación, operaciones, proyectos o del área que ejecuta)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Influye mucho: arma el caso, elige al proveedor y después responde por el resultado |
| Quiere | Mostrar algo funcionando en 90 días y tener argumentos para priorizar |
| Dolor | Demasiadas iniciativas a la vez, poco equipo, expectativas altas de arriba |
| Teme perder | Su reputación si el proyecto no muestra resultados; el apoyo de su jefatura |
| Tensión | Mostrar resultados rápido frente a hacerlo bien |
| Creencia actual → nueva | "Tengo que saberlo todo antes de partir" → "Con un marco y un primer paso acotado ya puedo avanzar" |
| Evidencia que necesita | Plantillas, pasos concretos, quick wins de otros, cómo se mide |
| Emoción a activar | Alivio, capacidad ("sí puedo liderar esto") |
| Tono | Práctico, concreto, con pasos y ejemplos |
| Llamado típico | Taller, diagnóstico práctico o primer proyecto acotado |
| Entregable típico | Matriz de priorización o plantilla de plan de 90 días |

**Lo que piensa y no dice:** "Me lo tiraron sin presupuesto" · "Si esto falla, el que queda mal soy yo" · "No sé por cuál partir".

**Palabras que lo activan:** priorizar, primer paso, plan, plantilla, 90 días, medir, equipo, piloto que escala.
**Palabras que lo alejan:** visión, propósito sin pasos, "todo el mundo ya lo hace", teoría.

**Objeciones:** "No tengo presupuesto aprobado" · "Lo podemos hacer internamente" · "Mi jefe no lo va a aprobar".

**Qué ya probó (típico):** cursos genéricos que no cambiaron la forma de trabajar; herramientas compradas que nadie adoptó; hacerlo con su equipo en los ratos libres.

**Ganchos:** "Tienes 20 iniciativas y presupuesto para 3. ¿Cuáles?" · "Cómo mostrar `[resultado]` en 90 días sin pedir más equipo."

**Nota:** cuando el Implementador está convencido y la jefatura no, la salida es un **primer paso más chico** que su jefe pueda aprobar y ver funcionar (ver `venta-base.md`).

---

## 3 · Cuidador de personas (gerente de personas, RR. HH., cultura, desarrollo organizacional, formación)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Influye: habilita o bloquea la adopción; a veces tiene el presupuesto de formación |
| Quiere | Que los equipos adopten el cambio por elección, no por miedo |
| Dolor | Resistencia, miedo y desgaste en los equipos; le piden "capacitar" sin cambiar nada más |
| Teme perder | La confianza de las personas; el clima; ser el área que "no aporta al negocio" |
| Tensión | Cuidar a las personas frente a acompañar la velocidad del negocio |
| Creencia actual → nueva | "Con una capacitación basta" → "Sin una historia clara del porqué, ninguna capacitación cambia el comportamiento" |
| Evidencia que necesita | Casos de adopción real, cambios de comportamiento, resultados en clima |
| Emoción a activar | Esperanza, cuidado, orgullo de liderar el cambio |
| Tono | Cálido, humano, sin alarmismo |
| Llamado típico | Taller con equipos o sesión con líderes |
| Entregable típico | Guía de conversación o de narrativa para los equipos |

**Lo que piensa y no dice:** "Me van a culpar si la gente no lo adopta" · "No quiero ser quien anuncia despidos" · "Ya capacitamos y nada cambió".

**Palabras que lo activan:** personas, equipos, confianza, adopción, cultura, conversación, acompañar, miedo.
**Palabras que lo alejan:** reemplazar, eficiencia a costa de las personas, recortes, "los que no se suban se quedan".

**Objeciones:** "Los equipos están saturados" · "Ya hicimos un curso" · "Eso lo ve otra área".

**Qué ya probó (típico):** capacitaciones de un día sin seguimiento; comunicados internos; plataformas de e-learning con poco uso.

**Ganchos:** "El problema no son los equipos. Es el miedo que nadie gestiona." · "¿Cuántas personas usan de verdad lo que capacitaste?"

---

## 4 · Guardián del presupuesto (gerente de finanzas, CFO, compras, controller)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Aprueba o frena; mira el riesgo y el retorno |
| Quiere | Saber cuánto cuesta, cuánto devuelve y cuándo, sin sorpresas |
| Dolor | Proyectos con costos que crecen y beneficios que no se miden |
| Teme perder | Plata, control del gasto, quedar como quien aprobó algo que falló |
| Tensión | Invertir para no quedarse atrás frente a cuidar la caja |
| Creencia actual → nueva | "Esto es un gasto" → "Es una inversión con etapas, y cada etapa se paga sola o se detiene" |
| Evidencia que necesita | Números con fuente, etapas con salida, casos con retorno medido |
| Emoción a activar | Seguridad, control |
| Tono | Sobrio, con números, sin adjetivos |
| Llamado típico | Propuesta por etapas o caso de negocio |
| Entregable típico | Plantilla de caso de negocio o calculadora simple del costo de no hacerlo |

**Lo que piensa y no dice:** "Me van a pedir más plata a mitad de camino" · "¿Cómo lo mido?" · "No entiendo qué estoy comprando".

**Palabras que lo activan:** retorno, costo, etapas, riesgo, medible, plazo, control, ahorro.
**Palabras que lo alejan:** "invaluable", "no se puede medir", entusiasmo sin cifras.

**Objeciones:** "No está en el presupuesto" · "¿Cuál es el retorno?" · "Lo vemos el próximo año".

**Qué ya probó (típico):** proyectos aprobados sin hitos que se alargaron; proveedores que cobraron extra por cambios.

**Ganchos:** "¿Cuánto cuesta no hacerlo este año?" · "Un proyecto que se paga por etapas o se detiene."

---

## 5 · Guardián técnico (gerente de TI, CTO, sistemas, seguridad, datos)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Puede bloquear: integración, seguridad, mantenimiento |
| Quiere | Que lo nuevo funcione con lo que ya hay, sea seguro y no le sume trabajo a su equipo |
| Dolor | Áreas que compran herramientas por su cuenta y después TI responde por ellas |
| Teme perder | Seguridad de los datos, estabilidad, el control de la arquitectura |
| Tensión | Habilitar a las áreas frente a no perder el control |
| Creencia actual → nueva | "Cada proveedor nuevo es un riesgo" → "Con reglas claras desde el inicio, habilitar es más seguro que prohibir" |
| Evidencia que necesita | Detalle técnico, políticas, cómo se integra, quién mantiene |
| Emoción a activar | Control, respeto por su criterio |
| Tono | Preciso, técnico cuando hace falta, sin exagerar |
| Llamado típico | Reunión técnica o revisión de arquitectura |
| Entregable típico | Checklist de seguridad o de integración |

**Lo que piensa y no dice:** "Después me lo dejan a mí" · "Nadie me consultó" · "¿Dónde quedan los datos?"

**Palabras que lo activan:** seguridad, integración, datos, política, arquitectura, gobierno, soporte.
**Palabras que lo alejan:** "sin necesidad de TI", "listo en un clic", promesas sin detalle.

**Objeciones:** "No cumple nuestras políticas" · "No tenemos capacidad para integrarlo" · "Ya tenemos una herramienta para eso".

**Qué ya probó (típico):** prohibir herramientas (y que se usen igual a escondidas); pilotos de proveedores sin plan de soporte.

**Ganchos:** "Prohibir no es gobernar." · "Lo que nadie le pregunta a TI antes de comprar `[tema]`."

---

## 6 · Líder comercial (gerente comercial, de ventas, de marketing, de clientes)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Decide en su área; tiene meta propia y presión por resultados |
| Quiere | Más reuniones calificadas, más cierre y un equipo que venda con método |
| Dolor | Meta alta, embudo irregular, equipo que depende de pocos vendedores estrella |
| Teme perder | La meta del trimestre, su equipo, el apoyo de la gerencia |
| Tensión | Resultados este mes frente a construir un sistema que dure |
| Creencia actual → nueva | "Necesito más leads" → "Necesito convertir mejor los que ya tengo" |
| Evidencia que necesita | Números de embudo, casos de equipos parecidos, guiones probados |
| Emoción a activar | Ambición, alivio de tener un sistema |
| Tono | Energético pero concreto, con números |
| Llamado típico | Diagnóstico del embudo o sesión con el equipo |
| Entregable típico | Guion o plantilla de seguimiento, diagnóstico del embudo en una página |

**Lo que piensa y no dice:** "Si no llego a la meta, me cambian" · "Mi equipo no hace seguimiento" · "Probamos de todo".

**Palabras que lo activan:** embudo, cierre, reuniones, meta, seguimiento, conversión, guion, pipeline.
**Palabras que lo alejan:** "viral", seguidores, marca sin ventas.

**Objeciones:** "Mi equipo no tiene tiempo" · "Ya tenemos un CRM" · "Muéstrame números".

**Qué ya probó (típico):** comprar bases de datos; mensajes masivos con baja respuesta; capacitaciones de ventas genéricas.

**Ganchos:** "No te faltan leads. Te falta el segundo mensaje." · "Cómo un equipo pasó de `[x]` a `[y]` reuniones sin contratar."

---

## 7 · Dueño de pyme (fundador o dueño que decide y ejecuta)

| Campo | Valor |
| --- | --- |
| Papel en la compra | Decide, paga y muchas veces ejecuta |
| Quiere | Crecer sin quemarse y sin depender de sí mismo para todo |
| Dolor | Todo pasa por él; poco tiempo; cada peso cuenta |
| Teme perder | Plata, tiempo, el negocio |
| Tensión | Invertir en crecer frente a sobrevivir el mes |
| Creencia actual → nueva | "Lo hago yo, sale más barato" → "Lo que hago yo es lo que no crece" |
| Evidencia que necesita | Casos de pares chicos, resultado rápido, precio claro |
| Emoción a activar | Alivio, libertad, orgullo |
| Tono | Cercano, simple, de igual a igual |
| Llamado típico | Llamada corta o primer servicio de entrada |
| Entregable típico | Checklist o plantilla que pueda usar hoy |

**Lo que piensa y no dice:** "No tengo plata para equivocarme" · "No sé delegar" · "Esto es para empresas grandes".

**Palabras que lo activan:** tiempo, simple, hoy, paso a paso, precio claro, sin complicaciones.
**Palabras que lo alejan:** corporativo, estrategia sin acción, "inversión a largo plazo" sin explicar.

**Objeciones:** "Es caro para mí" · "No tengo tiempo" · "Lo veo más adelante".

**Qué ya probó (típico):** cursos en línea que no terminó; un freelance que no entendió su negocio; hacerlo solo de noche.

**Ganchos:** "Si todo pasa por ti, tu negocio tiene tu tamaño." · "Lo que haría con 2 horas a la semana."

---

## 8 · Pares (otros profesionales del rubro)

No compran, pero comentan, recomiendan y amplifican. Es el valor `Pares` del kanban: hasta 1 de cada 5 piezas puede hablarles (alianzas, aprendizajes del oficio). Nunca se les vende.
