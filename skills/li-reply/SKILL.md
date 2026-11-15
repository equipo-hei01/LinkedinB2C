---
name: li-reply
description: Handle the replies under the user's own LinkedIn posts - draft answers to every comment, sorted by which ones are worth answering. Use when the user pastes the comments on their post, says "reply to these", "handle my comments", "someone said X on my post", or is dealing with a critic or a lead in the comments.
---

# li-reply

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

The reply thread under your own post is where reach is actually decided. Every
reply is a second engagement event on the post, and the first hour of replies
does most of the work. But the value is not equal across comments, so this
skill sorts before it writes.

> **Embudo de conversaciones.** Antes de escribir, abre `conversaciones.md` en la carpeta de trabajo (plantilla en `../../datos/conversaciones.md`). Si la persona ya está, sigue desde su estado; si no, agrégala. Al terminar, deja su fila actualizada: estado (PENDIENTE, ENVIADO, RESPONDIÓ, CITA, DESCARTADO), fecha del próximo seguimiento y el borrador. Regla de seguimiento: primer DM en 24 horas, seguimiento al día 4 y al día 10 con algo nuevo, y DESCARTADO después de 2 sin respuesta. Cuando alguien responde, ofrece **una** cosa de `ofertas.md` según su arquetipo. Nunca envíes: el usuario envía.

> **Datos de la marca.** Lee `../../datos/LEEME.md` para saber dónde está la carpeta de trabajo. De ahí lee `marca.md`, `arquetipos.md`, la voz que corresponda, `ofertas.md`, `pruebas.md` y `entregables.md`, y respeta siempre `seguridad.md`.

## Input

The user pastes the comments, ideally with names and roles. Screenshots are
fine. Do not scrape the thread with a browser tool.

## Triage first

Sort every comment into one of five buckets and say the count out loud:

| bucket | what it is | what it gets |
| --- | --- | --- |
| **LEAD** | someone describing the problem you solve | a real answer + a soft open door |
| **SUBSTANCE** | adds data, disagrees, extends | the longest reply on the thread |
| **PEER** | a name worth being seen next to | a reply that gives them something |
| **SUPPORT** | "great post", 🔥, a tag | a like, and a 3-8 word reply at most |
| **NOISE** | pitch, spam, bad faith | nothing, or one line and out |

Then write in that order, and stop writing when the value stops.

## How to reply

- **Answer the actual question.** If someone asks how, tell them how, in the
  reply. Do not send them to a DM to hear the answer they could have had.
- **Use their name once**, at the start, and never with an exclamation mark.
- **Match their length.** A two-line comment does not get a six-line reply.
- **To a critic:** concede the true part first, in their words, then hold the
  line on the part you believe. Never delete, never get defensive, never reply
  twice on the same thread.
- **To a lead:** answer fully in public. The open door is one sentence at the
  end, and it is an offer of help, not a pitch. Public value is what makes the
  next person DM you.
- **To a pitch in your comments:** ignore it. Replying gives it reach.

> **Regla de la casa: forma de cada respuesta** (fuente: post de David Ibáñez, nov 2026). Máximo unas **40 palabras** (en apoyo, menos). Primero reconoce **lo que aporta en concreto** (repite su idea, no la elogies). Cierra, cuando sea aporte, pregunta o posible cliente, con **una pregunta que invite a contar su caso** ("¿En tu equipo pasa al revés?"). Prohibido el "gracias por tu comentario" de plantilla y prohibido mencionar lo que vende el usuario en público: la conversación comercial va por DM y solo si la persona la abre.

## Output

One block, grouped by bucket, each reply copy-ready and already humanized:

```
REPLIES  ·  17 comments  ·  1 LEAD, 3 SUBSTANCE, 4 PEER, 8 SUPPORT, 1 NOISE

LEAD
@Sarah Chen - "we have the same problem with proposals"
> The part that fixed it for us was pulling the pricing table out of the doc
> entirely and sending it as its own page. Cut a whole review round. Happy to
> send you the template if it is useful.

SUBSTANCE
@Marcus Webb - disagrees on cadence
> Fair, and 4x a week only worked because I had 8 months of posts behind it.
> From a standing start I would do what you said.

SUPPORT  (like these, reply to the first three)
@... "This is great" -> Thanks Dan.
...

NOISE  (1)
Skipped: an agency pitch. Replying gives it reach.
```

Then the gate: **nothing is posted until the user says yes.** They paste the
replies themselves.
