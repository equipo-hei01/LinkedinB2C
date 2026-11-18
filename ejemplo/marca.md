# marca.md · El ADN de la marca (EJEMPLO FICTICIO: Norte Consultores)

> Ejemplo inventado para mostrar cómo queda este archivo cuando `/li-inicio` termina. Ni la empresa ni las personas existen. Ver `LEEME.md` de esta carpeta.

Este archivo es la fuente única de quién es el usuario, cómo suena y qué vende. Todas las skills, agentes y tareas lo leen antes de escribir. Si un campo está vacío o dice `[verificar]`, se le pregunta al usuario: nunca se inventa.

## 1. Identidad

| Campo | Valor |
| --- | --- |
| `usuario` | Ana Pérez (los agentes le dicen "Ana") |
| `marca` | Norte Consultores |
| `que_hace` | Ayudamos a empresas medianas a que su operación deje de depender de dos o tres personas, ordenando sus procesos críticos en 90 días con el Método Norte |
| `metodo` | Método Norte: 1) Mapa (ver cómo se trabaja hoy), 2) Dueños (una persona responsable por proceso), 3) Ritmo (una revisión corta cada semana) |
| `pilares` | 1) El trabajo que vive en una sola cabeza (riesgo y relevos) · 2) Primero el mapa, después la herramienta · 3) Cambiar con la gente, no contra ella · 4) Ritmo: la revisión corta que sostiene el orden |
| `pais` | México |
| `zona_horaria` | `America/Mexico_City` |
| `idioma` | Español (variante: México) |
| `perfil_url` | https://example.com/linkedin/in/ana-perez |
| `pagina_url` | https://example.com/linkedin/company/norte-consultores |
| `sitio_web` | https://example.com |
| `marcas_que_no_se_mezclan` | "Sabores de Ana" (su blog personal de cocina): ni sus temas ni su tono aparecen aquí |

## 2. Cuentas y voces

| Cuenta | Voz | Persona gramatical | Archivo de voz |
| --- | --- | --- | --- |
| Perfil personal | `voz-persona` | yo | `voz-persona.md` |
| Página de empresa | `voz-empresa` | nosotros | `voz-empresa.md` |

- `tratamiento`: tú.
- `saludo_dm`: "Hola [nombre], ¿cómo vas?"
- `firma_persona`: "Procesos claros, equipos tranquilos."
- `firma_empresa`: "Norte Consultores · Procesos claros, equipos tranquilos."
- `hashtags`: #NorteConsultores #ProcesosClaros
- `humor`: una pincelada en el perfil.
- `negritas_unicode`: sí (máximo 3 por post).

## 3. Cómo suena

- **Palabras que sí usa:** proceso, dueño del proceso, paso a paso, operación, cuello de botella, ritmo, claridad, lo que ya funciona, entregar a tiempo, tablero, relevo.
- **Palabras que nunca usa:** reingeniería, disrupción, sinergia, optimizar al máximo, clase mundial, recorte, "hacer más con menos", best practices, transformación (como frase suelta).
- **Posturas:**
  1. Un proceso que vive en la cabeza de una persona no es un proceso: es un riesgo.
  2. Antes de comprar un software, dibuja cómo trabajas hoy. El software ordena lo que ya está claro; lo que no, lo desordena más rápido.
  3. La gente no se resiste al cambio. Se resiste a que le cambien el trabajo sin preguntarle.
  4. Documentar no es llenar manuales. Una página que se usa vale más que cien que nadie abre.
  5. Crecer sin procesos es contratar más gente para apagar los mismos incendios.
- **Fuera de límites:** ningún cliente por su nombre sin permiso escrito (se habla por giro y tamaño: "una distribuidora de 180 personas"). Nada de política ni de temas laborales en litigio. Nunca insinuar que ordenar procesos sirve para despedir gente. Sin cifras que no estén en `pruebas.md`.
- **Textos de referencia** (posts reales que suenan a la persona):

  > El director me dijo: "Si Lupita se enferma, no facturamos"
  >
  > No lo dijo con orgullo. Lo dijo bajito, como quien confiesa algo.
  >
  > Lupita lleva 14 años en la empresa. Sabe qué cliente paga tarde, qué pedido urge y qué archivo de Excel no hay que tocar.
  >
  > El problema no es Lupita. Es que nadie más sabe lo que ella sabe.
  >
  > Empezamos por ahí: una hoja, sus pasos, con sus palabras. Tres semanas después, otra persona facturó sola por primera vez.
  >
  > ¿Quién es la Lupita de tu empresa?
  >
  > Procesos claros, equipos tranquilos.
  >
  > #NorteConsultores #ProcesosClaros

  > Compraron el software en enero. En junio seguían usando Excel
  >
  > Nadie hizo nada mal. Solo nadie dibujó antes cómo se trabajaba.
  >
  > El software pedía un flujo. La empresa tenía cinco, uno por cada persona.
  >
  > Primero el mapa. Después la herramienta.
  >
  > ¿Qué herramienta de tu empresa está esperando a que alguien dibuje el proceso?
  >
  > Procesos claros, equipos tranquilos.
  >
  > #NorteConsultores #ProcesosClaros

## 4. A quién le vende

Los arquetipos (Decisor, Implementador y Cuidador) viven en `arquetipos.md`. Las palabras clave y los entregables de cada uno, en `entregables.md`. Las ofertas, en `ofertas.md`. Las pruebas autorizadas, en `pruebas.md`.

## 5. Metas

| Campo | Valor |
| --- | --- |
| `accion_perfil` | Agendar el diagnóstico de procesos de 30 minutos (`link_reservas`) |
| `meta_reuniones_semana` | 4 |
| `reuniones_hoy_semana` | 1 |
| `tasa_cierre` | 2 de 10 |
| `ticket_meta` | 350,000 MXN por proyecto (el valor de una venta típica de las que quiere lograr) |
| `ticket_promedio` | 210,000 MXN por proyecto (el promedio de sus ventas de los últimos 12 meses) |
| `moneda` | MXN |
| `meta_charlas_mes` | 1 |
| `plan_inicio` | 2025-03-10 (el lunes siguiente al inicio) |
| `cadencia` | 3 posts por semana en el perfil y 1 en la página |
| `minutos_dia` | 30 |

## 6. Identidad visual (carruseles e imágenes)

| Campo | Valor |
| --- | --- |
| `color_fondo` | `#0F2A3D` |
| `color_texto` | `#FFFFFF` |
| `color_acento` | `#F2A541` |
| `color_acento2` | `#5FB3B3` |
| `tipografia` | Inter |
| `logo` | `marca/logo-norte.png` (dentro de la carpeta de trabajo) |
| `foto` | `marca/ana-perez.jpg` |
| `iniciales` | AP |

## 7. Conexiones

| Campo | Valor |
| --- | --- |
| `carpeta_trabajo` | `~/.claude/linkedin/` |
| `kanban_url` | https://example.com/artefactos/fila-de-contenido |
| `tablero_url` | https://example.com/artefactos/tablero-linkedin |
| `planilla_historial` | https://example.com/planillas/historial-linkedin |
| `crm` | Planilla "Oportunidades" (una fila por oportunidad: empresa, etapa, valor y origen). Se lee la columna "Origen" = LinkedIn |
| `calendario` | Calendario "Reuniones Norte" (solo lectura) |
| `link_reservas` | https://example.com/agenda |
| `navegador` | Extensión de Chrome |

## 8. Estado del inicio

| Paso de `/li-inicio` | Hecho | Fecha |
| --- | --- | --- |
| 0. Carpeta de trabajo y conexiones | Sí | 2025-03-03 |
| 1. Leer perfil, página, posts, métricas, sitio y documentos | Sí (subió brochure y 2 casos) | 2025-03-03 |
| 2. ADN: marca y voces | Sí (Ana corrigió 2 posturas) | 2025-03-03 |
| 3. Arquetipos, ofertas, pruebas y entregables | Sí (falta el precio del taller) | 2025-03-04 |
| 4. Perfil puntuado, auditoría y línea base | Sí (perfil 61/100) | 2025-03-04 |
| 5. Kanban y tablero | Sí | 2025-03-05 |
| 6. Tareas programadas | Sí (diarias y semanales) | 2025-03-05 |
| 7. Primera semana | Sí (primera pieza aprobada) | 2025-03-05 |
| 8. Cierre | Inicio completo | 2025-03-05 |
