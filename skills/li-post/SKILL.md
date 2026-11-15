---
name: li-post
description: Write a LinkedIn post from a raw idea using 21 proven hook formulas, in the user's own voice, humanized so it does not read as AI. Use whenever the user wants a LinkedIn post, a hook, a draft for the feed, "post about X", "turn this into a LinkedIn post", or asks for hook options. Produces three hook options, one full draft, a score for hook, virality and reach per archetype of the brand, and a copy-ready block that is never published without an explicit yes.
---

# li-post

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

Turns one raw idea into a LinkedIn post that sounds like the person who
posted it.

## Datos de la marca (antes de escribir)

Lee de la carpeta de trabajo: `marca.md`, `arquetipos.md`, la voz que corresponda (`voz-persona.md` o `voz-empresa.md`), `ofertas.md`, `pruebas.md` y `entregables.md`.

- **Pieza:** búscala en la fila del kanban (reglas en `kanban.md` de la carpeta de trabajo; plantilla en `../../datos/kanban.md`). Si no existe, créala en "Ideas" o "En preparación" con su puntaje. No hay fechas, salvo las 📌 reales.
- **Prueba:** usa solo lo que está en `pruebas.md`. Las citas van textuales. Si falta una prueba, pídela; nunca la inventes.
- **Palabra clave por arquetipo:** si el llamado es comentar, usa la palabra clave del arquetipo en `entregables.md` (en los ejemplos, `PALABRA`). Anota la palabra clave en el campo `cta` de la pieza del kanban.
- **Lo que rinde afuera:** lee solo la sección "Esta semana" de `radar.md` (la escribe `radar-nicho-li` los lunes) y prefiere un formato y una fórmula que estén rindiendo, si calzan con la idea.
- **Oferta:** como máximo una de `ofertas.md`, la del arquetipo elegido y no vencida. El link va en el primer comentario, nunca en el texto, con UTM: `?utm_source=linkedin&utm_medium=<perfil|pagina>&utm_content=<AAAA-MM-DD-tema>`.
- **Firma de contraste:** si `voz-persona.md` dice que el usuario usa el contraste como recurso propio ("No dice X. Dice Y.", "No fue X. Fue Y."), puede ir una vez por post. El humanizador lo permite una vez; desde la segunda, reescribe.
- **Video:** si la pieza lleva video (testimonios u otro) y hay un plugin o skill de video instalado, úsalo para el formato 4:5 del feed. Entrega junto al post: el texto, el primer comentario con el link UTM y a quién etiquetar.
- **Al aprobar:** con el texto revisado, la pieza pasa a "Por aprobar" con `texto` y `comentario`; solo el usuario la pasa a "Lista para publicar". Para publicarla sin hacerlo a mano, el usuario usa la tarea "LinkedIn · publicar la siguiente pieza" (publica solo con su sí en el chat). Al publicarse, anota el post en `log.md`. Si etiqueta a alguien, recuérdale al usuario avisarle el día antes.

## Before you write

1. Read the voice profile: `marca.md` in the working folder (see
   `../../datos/LEEME.md`) and the voice file for this task. Together they
   are the user's voice profile: how they talk, what they never say, who they
   are talking to. If `marca.md` does not exist, say "primero corre
   `/li-inicio`" and stop: `/li-inicio` builds it from the user's profile and
   past posts. Do not skip this and do not invent a voice. A post in the
   wrong voice is worse than no post.
2. Read `hooks.json` in this folder. All 21 formulas, with templates, filled
   examples, what each is for, and how each one usually gets ruined.
3. If the idea is thin - "post about AI" - do not pad it. Ask one batched
   question: what happened, to whom, and what did it cost or return. A post
   needs one specific true thing. Get it before writing.
4. **Pick one decision archetype per post**, from `arquetipos.md` in the
   working folder. Name it in the receipt. A post for everyone speaks to no
   one. For the archetype, `arquetipos.md` gives: who they are (roles), what
   hurts and what they fear, what they are looking for, and the reframe.

   Ejemplo de cómo se lee una fila (ficticio, de la consultora inventada "Norte Consultores"; los arquetipos reales son los del usuario):

   | Arquetipo | Quién | Le duele / teme | Busca | Reencuadre tipo |
   | --- | --- | --- | --- | --- |
   | Decisor | gerente general | proyectos que no llegan a resultados, quedar expuesto ante su directorio | criterio, control, algo defendible con evidencia | "No necesitas todas las respuestas. Necesitas criterio." |
   | Implementador | jefe de proyecto u operaciones | sobrecarga, 20 iniciativas a la vez, resistencia de los mandos medios | un marco para priorizar, resultados rápidos, no cargar solo | "El problema no es falta de conocimiento. Es falta de marco." |
   | Cuidador | gerente de personas | miedo de los equipos, capacitaciones que no cambian nada | cuidar y avanzar, adopción voluntaria | "No es personas o resultados. Es personas con resultados." |

   Reparto de la semana: el vigente de `arquetipos.md`.
   The client is the hero; the brand is the mentor with the map.

## Gancho con script (ahorra tokens)

Antes de elegir entre los tres ganchos, córrelos por `hookscore.py` de esta carpeta (un gancho por línea en un archivo, o `--hook "..."`; en Windows, `python -X utf8`). Mide largo (5 a 12 palabras, sin punto final, menos de 140 caracteres), algo concreto, tensión, la palabra fuerte adelante y a quién le habla. El script no predice alcance.

**El script avisa, no decide.** Está calibrado para LinkedIn B2B en español: reconoce el contraste ("No fue innovación. Fue tranquilidad" sale STRONG), cargos y escenas de empresa, el tuteo y las negritas Unicode. Si en la carpeta de trabajo hay un archivo `nicho.txt` (una palabra o frase por línea: cargos, escenas y términos del nicho del usuario), pásalo con `--nicho <ruta>` para que también los cuente como concretos. Pero no sabe si una frase tiene sentido: un gancho absurdo con una cifra puede sacar más que uno bueno. Úsalo así:
- Lo que vale siempre del script: largo, punto final, aperturas de relleno ("Hoy quiero compartir", "Estoy feliz de"), saludo, hashtag o emoji en la línea 1. Eso se corrige siempre.
- La decisión final la da el puntaje de hook de `../../puntaje.md`, hecho por ti con criterio. Un gancho WEAK en el script puede quedarse si en `puntaje.md` saca 7 o más.
- **Nunca** cambies un gancho solo para meterle una cifra o un nombre que el script premia: la frase tiene que seguir teniendo sentido y decir la idea del usuario.
- **Nunca** quites la idea o la tesis que el usuario pidió para subir el puntaje. Si choca con algo (por ejemplo, se repite con un post reciente), propón la variante al lado y deja que el usuario elija.

## The shape

LinkedIn rewards dwell time, saves and comments, in that order. So:

```
Line 1     the hook. Alone. It has to survive truncation at ~140 chars mobile.
Line 2     the payoff of line 1, not setup for line 3.
Body       short paragraphs, 1-3 lines each, blank line between every one.
           No wall. The white space is the format.
The turn   one line that reframes what came before.
Close      one specific question, or one instruction. Never both.
```

> **Regla de la casa: forma que suma alcance y confianza** (10 videos de LinkedIn, nov 2026)
> - **Una idea por post.** Si caben dos, son dos posts.
> - **Gancho de una sola línea en el celular, y re-gancho en la línea 2.** LinkedIn muestra unas 3 líneas, contando la línea en blanco: si el gancho ocupa 2 líneas, el re-gancho queda bajo el "ver más". En español las frases son más largas, así que cuenta en el celular.
> - **Señal de credibilidad:** media frase que diga cómo lo sabe el usuario (años en el oficio, trabajos hechos, el tipo de cliente), cerca del gancho y una o dos veces en el cuerpo. Solo datos de `marca.md` o `pruebas.md`.
> - **Casos sin la industria en el gancho:** arriba, el problema amplio que cualquier cliente ideal reconoce; la industria y el cliente, después del "ver más".
> - **Pregunta final fácil que empuje a justificar** ("¿Están sobre o bajo lo que esperaban?"). La pregunta profunda va en el primer comentario.
> - **Imagen con título:** si lleva imagen, que el título funcione como segundo gancho.
> - **Filtro antes de "Por aprobar":** "¿el cliente ideal pagaría por esta idea?". Si la respuesta honesta es no, no pasa: dilo y propone qué le falta.
>
> **Los 5 tipos de post y su estructura** (anota el tipo en `nota` del kanban como "Tipo: …"):
> | Tipo | Para qué | Estructura |
> | --- | --- | --- |
> | Contrario | alcance | afirmación contra la creencia común → por qué la creencia falla → la alternativa del usuario |
> | Noticia del día | alcance | qué pasó → qué se está perdiendo la mayoría → qué significa para el cliente ideal → qué hacer. Solo si sale en 48 horas |
> | Lección de detrás de escena | valor | qué pasó → qué hizo el usuario (lo que salió mal llega más lejos que lo que salió bien) → qué aprendió → cómo se aplica. Siempre real |
> | Marco | valor | nombre recordable → 3 a 5 pasos → una línea por paso. Es el que más se guarda |
> | Relación | conversación | una postura → una pregunta real que revele un problema que la marca resuelve, o "trabajo con [cargo], ¿te pasa esto?" |

Length: 900-1,300 characters is the working range for a text post. Under 400
reads as a thought, not a post. Over 2,000 needs to earn every line, and the
"see more" tap has to be paid for by line 2.

## Post de método (cuando el usuario comparte un proceso suyo)

Para un post de pasos (fuente: post de David Ibáñez, nov 2026):
- **Solo los pasos que el usuario dio.** No agregues, no inventes ni completes pasos; si falta uno, pregúntalo.
- **Entrada de 2 líneas** con el problema dicho como lo diría el cliente ideal (sus palabras, no las del usuario).
- **Cada paso empieza con un verbo** y se puede aplicar en las próximas 24 horas.
- **Máximo 250 palabras**, y un solo llamado: guardarlo, seguir al usuario o la palabra clave, no varios.

## The loop

**1. Pick three hooks, not one.** Run the idea through `hooks.json` and choose
the three formulas that genuinely fit it. Different formulas, not three
variations of one. Show them as three numbered lines and say which you would
ship and why, in one sentence.

**2. Draft the full post** on the strongest hook.

**3. Humanize it.** Run the draft through `/li-human` before showing it. Every
post from this skill ships humanized. That is not an optional extra step, it
is the reason the draft is worth reading.

**3b. Negritas Unicode (solo si `negritas_unicode` de `marca.md` dice sí).**
LinkedIn no tiene negrita ni cursiva, así que el formato se hace con letras
Unicode. Marca en el borrador con `**texto**` (negrita) o `*texto*` (cursiva)
y conviértelo **después** de `/li-human`, porque el detector mide el texto
plano:

```
python3 <base de esta skill>/bold.py borrador.txt -o listo.txt
```

Reglas para que sume y no reste:
- **Máximo 3 resaltados por post**, y nunca dos en el mismo párrafo. Lo que todo resalta, nada resalta.
- **Qué se resalta:** la palabra o frase que gira el post (el "turn"), una cifra clave (+70 %, 3 meses), los títulos de una lista didáctica (→ **Paso 1:**), o la cita textual de un testimonio. El gancho (línea 1) puede llevar una sola palabra en negrita, no la línea entera.
- **Qué NO se resalta:** nombres que se etiquetan con @, nombres de empresas, hashtags, la firma (`firma_persona` o `firma_empresa` de `marca.md`), links ni la palabra clave que la gente debe comentar: LinkedIn no encuentra ni indexa esas palabras en Unicode, y los lectores de pantalla las leen letra por letra.
- **Cursiva** solo para una palabra irónica o un término en inglés, como mucho una vez.
- Tildes y ñ quedan como letra en negrita + tilde combinada (á = 𝗮 + ´). Se ven bien en web, iOS y Android; igual revisa la vista previa de LinkedIn antes de programar.
- Comentarios, respuestas y DMs van **sin** negritas Unicode.
- Para quitar el formato: `bold.py listo.txt --plain`.

**3c. Puntúa (siempre).** Lee `../../puntaje.md` y puntúa el borrador:
hook, viralidad y alcance para cada arquetipo de `arquetipos.md` (0-10 cada
uno), con una línea "para subir" que proponga el único cambio que más suma.
Si el hook saca 6 o menos, reescríbelo antes de mostrarlo. Si el usuario pega
un post ya escrito y pide puntaje, entrégalo igual, sin reescribir salvo que
lo pida.

**4. Print the block.** Copy-ready, in a fenced block, exactly as it should be
pasted. Then, underneath (example; the archetype names are the user's own):

```
POST READY
hook:      #17 Time Anchor
arquetipo: Decisor
length:    1,140 characters
humanizer: 6 artefacts stripped, human score 84 PASS
formato:   2 resaltados Unicode (gancho y giro)
post at:   Tuesday 8:15am (from your plan)

PUNTAJE (estimación, no predicción)
hook:      8/10  específico 2 · tensión 2 · corto 2 · para alguien 1 · se entiende 1
viralidad: 7/10  lectura 2 · comentable 1 · guardable 1 · compartible 1 · emoción 2
alcance:   Decisor 8 · Implementador 5 · Cuidador 3   (principal: Decisor)
para subir: viralidad a 8 → cierra con una pregunta que solo este post puede hacer

Reply "yes" to log it, or tell me what to change.
```

**5. Never publish.** This skill produces text. The user posts it. On "yes",
append the post to `log.md` in the working folder with the date, the voice
(`voz-empresa` or `voz-persona`), the hook used, the first line and the
estimated scores (hook, viralidad, alcance por arquetipo), so `/li-audit` has a history to work from later.

## Rules that make the difference

- **One idea per post.** If the draft has two, you have two posts. Say so.
- **Numbers over adjectives.** "$4,200" beats "a lot". If the user has not
  given you a number, ask for one rather than writing around the hole.
- **No engagement bait.** "Thoughts?" and "Agree?" are dead. The closing
  question has to be one only this post could ask.
- **Three hashtags maximum**, at the bottom. They are always the `hashtags`
  in `marca.md`, after the sign-off (`firma_persona` or `firma_empresa`), if
  the user has one. That sign-off is a fixed signature, not a second close,
  so it does not break the "one question or one instruction" rule.
- **No links in the post body.** LinkedIn suppresses posts with outbound
  links. Put the link in the first comment and say so in the receipt.
- **Never fabricate.** No invented metrics, clients, revenue figures or
  outcomes under the user's name, even as a placeholder. If a number is
  needed and unknown, leave `{{your number}}` in the draft and flag it.
- **Never mix brands.** Nothing from the `marcas_que_no_se_mezclan` in
  `marca.md` goes into this content.

## Example

```
/li-post we built an internal tool that cut proposal time from 5 hours to 20 min
```

```
HOOKS
1. #17 Time Anchor    Writing a proposal used to take me 5 hours. It now takes 20 minutes.
2. #12 Comparison     A $12,000 proposal writer vs a weekend and a template. The weekend won.
3. #3  Mistake        For two years I charged clients for hours I was wasting on formatting.

Shipping #17: the ratio is believable and the number is yours.
```
