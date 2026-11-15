---
name: li-profile
description: Score a LinkedIn profile out of 100 against a 12-part rubric and rewrite the parts that lose points - headline, about, experience, featured, banner. Use when the user says "optimize my profile", "score my LinkedIn", "rewrite my headline", "fix my about section", or pastes their profile and asks how it reads.
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

## Score it

Read `rubric.json` in this folder. Twelve items, 100 points, each with what
full marks looks like. Score every item, show the table, and give the total.
Be honest - most profiles land in the 30s and 40s on the first pass, and a
generous score is useless.

```
PROFILE SCORE  41/100

  headline            3/12   job title only, no outcome, no audience
  about first 2 lines 2/10   opens with "passionate about"
  about body          4/10   history, not offer
  featured            0/8    empty
  banner              0/6    default blue
  ...
```

## Then rewrite, in this order

Fix in descending order of points lost. Do not rewrite everything at once -
the user has to actually paste each of these in.

**1. Headline (220 characters).** The formula that works:
`{what you do for whom} | {proof} | {how to start}`. Not your job title. Not
"Helping X do Y" as the first three words, which every second profile now
opens with. Give three options.

> **Regla de la casa: titular** (Luis Garau, nov 2026). Fórmula clara antes que creativa: "Ayudo a [cargo] a [resultado] sin [lo que no quieren] | [palabras clave de búsqueda]". Entrega 2 opciones. **Recomendaciones:** pide una a cada cliente que ya dio un testimonio autorizado (los de `pruebas.md`) y a quienes ya trabajaron con el usuario.

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

> **Regla de la casa: Destacados** (fuente: post de David Ibáñez, nov 2026). Ordena por **lo que más acerca a escribirle al usuario**: primero la forma de contacto o la reserva (`link_reservas` de `marca.md`), después la prueba (caso, testimonio) y al final el mejor post. Cada ítem lleva un **título de menos de 8 palabras** y **una línea** que diga qué hay dentro. Si para el primer lugar falta algo (por ejemplo, no hay link de reserva), dilo en vez de rellenar.

**5. Experience.** Each role gets one line of scope and two to three bullets
that are outcomes with numbers, not duties. Cut anything older than ten years
to a single line.

> **Regla de la casa: Experiencia** (fuente: post de David Ibáñez, nov 2026). En **primera persona**, escrita para el cliente ideal, de tareas a resultados, **máximo 5 líneas** por cargo. Usa solo los logros y cifras que el usuario dio: donde una frase necesite una cifra que no está, escribe **`[TU DATO]`** y no la inventes. Cuenta cada cargo como una historia corta: qué encontraste, qué hiciste y qué cambió.

**6. Banner.** One sentence of positioning and one way to reach you. The
default blue gradient is the clearest signal on the page that nobody is home.

> **Regla de la casa: frase del banner** (fuente: post de David Ibáñez, nov 2026). Entrega 3 opciones con la fórmula **"Ayudo a [cliente ideal] a [resultado] mediante [método]"**, de **12 palabras como máximo**, que se entiendan en 3 segundos y lleven verbo. Sin frase motivacional y sin usar el nombre de la empresa como mensaje.

## Output

Score table, then the rewrites as copy-ready blocks in fix-first order, each
one already run through `/li-human`. Re-score at the end and show the delta
honestly - if the rewrite gets to 88 and not 98, say 88, and say what the
remaining points need (usually recommendations, a real banner and posting
history, none of which a rewrite can create).

Nothing is saved to LinkedIn by this skill. The user pastes each section in.
