# marca.md · El ADN de la marca (plantilla)

Este archivo es la fuente única de quién es el usuario, cómo suena y qué vende. Lo llena `/li-inicio` con lo que lee del perfil, la página, los posts y los documentos que suba el usuario, y el usuario lo corrige. Todas las skills, agentes y tareas lo leen antes de escribir. Si un campo está vacío o dice `[verificar]`, se le pregunta al usuario: nunca se inventa.

La copia viva está en la carpeta de trabajo (ver `LEEME.md`). Esta es la plantilla.

## 1. Identidad

| Campo | Valor |
| --- | --- |
| `usuario` | Nombre de la persona dueña del perfil (como quiere que la nombren los agentes) |
| `marca` | Nombre de la empresa o marca |
| `que_hace` | Una frase: a quién ayuda, a lograr qué, con qué método |
| `metodo` | Nombre y pasos del método propio, en orden (si lo hay) |
| `pais` | País o países donde vende |
| `zona_horaria` | Por ejemplo `America/Santiago` |
| `idioma` | Español (variante: Chile, México, España, neutro…) |
| `perfil_url` | URL del perfil personal de LinkedIn |
| `pagina_url` | URL de la página de empresa (vacío si no hay) |
| `sitio_web` | URL |
| `marcas_que_no_se_mezclan` | Otras marcas del usuario que nunca deben aparecer en este contenido |

## 2. Cuentas y voces

| Cuenta | Voz | Persona gramatical | Archivo de voz |
| --- | --- | --- | --- |
| Perfil personal | `voz-persona` | yo | `voz-persona.md` |
| Página de empresa (si hay) | `voz-empresa` | nosotros | `voz-empresa.md` |

- `tratamiento`: tú / usted / vos.
- `saludo_dm`: cómo saluda en un mensaje (por ejemplo "Hola [nombre], ¿cómo estás?").
- `firma_persona`: línea de cierre de los posts del perfil (vacío si no usa).
- `firma_empresa`: línea de cierre de los posts de la página.
- `hashtags`: los 0 a 3 hashtags de marca, siempre los mismos.
- `humor`: no / una pincelada en el perfil / sí.
- `negritas_unicode`: sí (máximo 3 por post) / no.

## 3. Cómo suena

- **Palabras que sí usa:**
- **Palabras que nunca usa:**
- **Posturas** (lo que defiende, 3 a 6):
- **Fuera de límites** (temas, clientes o datos que no se tocan):
- **Textos de referencia** (2 a 4 posts reales que suenan a la persona, pegados completos):

## 4. A quién le vende

Los arquetipos (1 a 4 tipos de cliente) viven en `arquetipos.md`: nombre, cargos, dolor, lo que piensa y no dice, palabras que lo activan, objeciones, evidencia que necesita y reparto del contenido. Las palabras clave y los entregables de cada uno, en `entregables.md`. Las ofertas, en `ofertas.md`. Las pruebas autorizadas, en `pruebas.md`.

## 5. Metas

| Campo | Valor |
| --- | --- |
| `meta_reuniones_semana` | Reuniones por semana que quiere desde LinkedIn |
| `ticket_meta` | Valor de una venta típica (con moneda) |
| `moneda` | CLP, MXN, USD, EUR… |
| `cadencia` | Posts por semana en el perfil y en la página |
| `minutos_dia` | Tiempo diario que el usuario le dedica |

## 6. Identidad visual (carruseles e imágenes)

| Campo | Valor |
| --- | --- |
| `color_fondo` | hex |
| `color_texto` | hex |
| `color_acento` | hex |
| `color_acento2` | hex (opcional) |
| `tipografia` | Nombre de la fuente (o "del sistema") |
| `logo` | Ruta del archivo |
| `foto` | Ruta de la foto del usuario |
| `iniciales` | Para cuando no hay foto |

## 7. Conexiones (las llena `/li-inicio`; vacío = no se usa)

| Campo | Valor |
| --- | --- |
| `carpeta_trabajo` | Ruta absoluta de la carpeta de trabajo |
| `kanban_url` | Link del artefacto "Fila de contenido" del usuario |
| `tablero_url` | Link del artefacto "Tablero LinkedIn" del usuario |
| `planilla_historial` | Link de la planilla con el historial semanal (opcional) |
| `crm` | Dónde lleva sus ventas (Jira, HubSpot, planilla…) y cómo leerlo (opcional) |
| `calendario` | Calendario donde llegan las reservas (opcional; solo lectura) |
| `link_reservas` | Link para agendar una reunión |
| `navegador` | Con qué se lee LinkedIn: extensión de Chrome / capturas que pega el usuario |

## 8. Estado del inicio

`/li-inicio` anota aquí qué paso quedó hecho y con qué fecha, para retomarlo si se interrumpe.
