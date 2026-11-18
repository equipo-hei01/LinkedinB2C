---
name: li-profile
description: Score a LinkedIn profile out of 100 against a 12-part rubric (and a company page against its own 10-part rubric) and rewrite the parts that lose points - headline, about, experience, featured, banner. Use when the user says "optimize my profile", "score my LinkedIn", "rewrite my headline", "fix my about section", or pastes their profile and asks how it reads.
---

# li-profile

> **Two voices.** Before writing anything, read `marca.md` in the working
> folder (see `../../datos/LEEME.md`): it is the brand's DNA (who the user is,
> how they sound, what they sell). If `marca.md` is missing, say "primero corre
> `/li-inicio`" and stop. Then read the voice file for this task, also in the
> working folder: `voz-empresa.md` (the company, "nosotros", company page) or
> `voz-persona.md` (the user in first person, personal profile). If
> `/li-estratega` or the user named the voice, use it. If the user says
> empresa, marca or página, use `voz-empresa`; if they say personal, yo or mi
> perfil, use `voz-persona`. Comments and DMs default to `voz-persona`.
> Otherwise ask once, offering both. Write in Spanish unless asked otherwise.
> `marca.md` and the voice files override the generic advice in this file
> where they differ.

> **Arquetipos.** Antes de escribir, lee también `arquetipos.md` de la carpeta
> de trabajo (plantilla en `../../datos/arquetipos.md`): elige **un** arquetipo
> para la pieza, usa su dolor, su miedo, lo que busca y su reencuadre, y
> nómbralo al entregar.

A profile is not a resume. A resume answers "what have you done". A profile
answers "should I message this person", and it answers it in about four
seconds, from the headline and the first two lines of the about.

## Input

Ask the user to paste: headline, about section, current role and the last two
experience entries, plus whether they have a banner and featured section. A
screenshot of the top card is enough for the first pass. Do not log into
LinkedIn on their behalf.

## Prueba del amigo (antes del puntaje)

Lee solo el titular (y la primera línea del Acerca de) y escribe en una frase
qué hace la persona y para quién, como lo diría alguien que no la conoce
("Por lo que leo, ayuda a [quién] a [qué]"). Compárala con `que_hace` de
`marca.md` y con lo que vende (`ofertas.md`). Si la frase no sale clara o no
coincide con lo que vende, **el titular es lo primero que se arregla**, aunque
otros ítems resten más puntos. Muestra esa frase en la salida, arriba de la
tabla: `Prueba del amigo: "…" · clara y coincide / no se entiende / no
coincide con lo que vende`.

## Acción deseada del perfil

Lee `accion_perfil` de `marca.md`: qué quiere el usuario que haga quien visita
el perfil (agendar, escribir, descargar…). Titular, Acerca de, destacados y
banner se juzgan contra esa acción: en cada uno pregunta "¿lleva a
[accion_perfil]?" y, si no lleva, dilo en su fila de la tabla y en la
reescritura. Si `accion_perfil` está vacío o dice `[verificar]`, pregúntalo
una vez antes de reescribir.

## Score it

Read `rubric.json` in this folder. Twelve items, 100 points, each with what
full marks looks like. Score every item, show the table, and give the total.
Be honest - most profiles land in the 30s and 40s on the first pass, and a
generous score is useless.

**Nombres en español.** El puntaje se muestra siempre en español, con estos
nombres y en este orden (son también el `item` del dataset `puntaje` del
tablero). No inventes otros nombres:

| `id` en `rubric.json` | Nombre que se muestra | Puntos |
| --- | --- | --- |
| `headline` | Titular | 12 |
| `about_open` | Acerca de: primeras 2 líneas | 10 |
| `about_body` | Acerca de: cuerpo | 10 |
| `featured` | Destacados | 8 |
| `banner` | Banner (portada) | 6 |
| `photo` | Foto | 6 |
| `current_role` | Cargo actual | 10 |
| `experience_depth` | Experiencia anterior | 8 |
| `skills` | Aptitudes | 6 |
| `recommendations` | Recomendaciones | 8 |
| `activity` | Actividad reciente | 10 |
| `contact` | Contacto y URL | 6 |

The example below shows the layout only; print it in Spanish ("PUNTAJE DEL
PERFIL 41/100", "Titular 3/12", and so on).

```
PROFILE SCORE  41/100

  headline            3/12   job title only, no outcome, no audience
  about first 2 lines 2/10   opens with "passionate about"
  about body          4/10   history, not offer
  featured            0/8    empty
  banner              0/6    default blue
  ...
```

**La foto, mirada de verdad.** Cuando hay navegador o una captura del perfil,
mira la foto real (no la supongas) con los criterios del ítem `photo` de
`rubric.json`: cara en ~60 % del encuadre, ojos visibles, fondo que no
distrae, buena luz, reciente y coherente con el público de `arquetipos.md`.
Si pierde puntos, dilo concreto ("la cara ocupa un tercio del encuadre y el
fondo es una ventana a contraluz"), no "mejora tu foto". Si hay instalada una
skill de foto profesional (por ejemplo `professional-photo-director`), ofrece
pasar a ella; nunca generes ni subas una foto sin el sí del usuario. Sin
navegador ni captura, el ítem queda `[verificar]` y sin puntos inventados.

## Página de empresa (si hay `pagina_url` en `marca.md`)

La página no se puntúa con la rúbrica del perfil. Tiene la suya:
`rubric-pagina.json` en esta carpeta, 10 ítems, 100 puntos, con el nombre de
cada ítem en español (campo `nombre`) y lo que pide el puntaje completo.
Puntúa cada ítem con lo leído o lo que pegue el usuario, muestra la tabla
("PUNTAJE DE LA PÁGINA NN/100") y reescribe con `voz-empresa` lo que más
puntos pierde: primero el eslogan y la descripción, después el botón. Los
ítems que no dependen de un texto (publicaciones, seguidores, empleados
asociados) no se arreglan reescribiendo: di qué hay que hacer. Si un dato no
se pudo leer (por ejemplo, los cargos de los seguidores), el ítem queda
`[verificar]` y sin puntos inventados. En el tablero, estas filas llevan
`perfil` = "Página".

## Then rewrite, in this order

Fix in descending order of points lost. Do not rewrite everything at once -
the user has to actually paste each of these in.

> **Regla de la casa: orden y acción.** Si la prueba del amigo falló, el
> titular va primero sin importar los puntos. Cada reescritura de titular,
> Acerca de, destacados y banner termina llevando a `accion_perfil` de
> `marca.md`; al entregarla, una línea: "¿Lleva a [accion_perfil]? sí / no,
> porque…".

**1. Headline (220 characters).** The formula that works:
`{what you do for whom} | {proof} | {how to start}`. Not your job title. Not
"Helping X do Y" as the first three words, which every second profile now
opens with. Give three options.

> **Regla de la casa: titular.** Fórmula clara antes que creativa: "Ayudo a [cargo] a [resultado] sin [lo que no quieren] | [palabras clave de búsqueda]". Entrega 3 opciones. **Recomendaciones:** pide una a cada cliente que ya dio un testimonio autorizado (los de `pruebas.md`) y a quienes ya trabajaron con el usuario.

**2. About, first two lines.** Everything after line 2 is behind "see more" on
mobile, so those two lines are the whole about section for most readers. They
must state who you help and what changes. No "passionate", no "results-driven",
no third-person bio, no opening with your own name.

**3. About body.** Written to one reader, in the second person. Structure:
the problem they have, what you do about it, one piece of proof with a number,
what to do next. Under 1,400 characters even though the limit is 2,600.

**4. Featured.** Three items: the best post, the proof asset, the way to
contact. An empty featured section is eight points and the only place on the
profile you fully control.

> **Regla de la casa: Destacados.** Ordena por **lo que más acerca a escribirle al usuario**: primero la forma de contacto o la reserva (`link_reservas` de `marca.md`), después la prueba (caso, testimonio) y al final el mejor post. Cada ítem lleva un **título de menos de 8 palabras** y **una línea** que diga qué hay dentro. Si para el primer lugar falta algo (por ejemplo, no hay link de reserva), dilo en vez de rellenar.

**5. Experience.** Each role gets one line of scope and two to three bullets
that are outcomes with numbers, not duties. Cut anything older than ten years
to a single line.

> **Regla de la casa: Experiencia.** En **primera persona**, escrita para el cliente ideal, de tareas a resultados, **máximo 5 líneas** por cargo. Usa solo los logros y cifras que el usuario dio: donde una frase necesite una cifra que no está, escribe **`[TU DATO]`** y no la inventes. Cuenta cada cargo como una historia corta: qué encontraste, qué hiciste y qué cambió.

**6. Banner.** One sentence of positioning and one way to reach you. The
default blue gradient is the clearest signal on the page that nobody is home.

> **Regla de la casa: frase del banner.** Entrega 3 opciones con la fórmula **"Ayudo a [cliente ideal] a [resultado] mediante [método]"**, de **12 palabras como máximo**, que se entiendan en 3 segundos y lleven verbo. Sin frase motivacional y sin usar el nombre de la empresa como mensaje.

## Output

The friend test sentence ("Prueba del amigo: …") first, then the score table
(with the photo verdict if the photo was seen), then the rewrites as
copy-ready blocks in fix-first order, each
one already run through `/li-human`. Re-score at the end and show the delta
honestly - if the rewrite gets to 88 and not 98, say 88, and say what the
remaining points need (usually recommendations, a real banner and posting
history, none of which a rewrite can create).

Nothing is saved to LinkedIn by this skill. The user pastes each section in.
