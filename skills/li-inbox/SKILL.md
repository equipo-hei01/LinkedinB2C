---
name: li-inbox
description: Triage the LinkedIn inbox - sort connection requests and DMs into leads, recruiters, peers and spam, and draft the replies worth sending. Use when the user says "my inbox is a mess", "triage my DMs", "should I reply to this", pastes a batch of LinkedIn messages, or is drowning in connection requests.
---

# li-inbox

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

Most LinkedIn inboxes are 80% noise, and the cost of that noise is that the
20% goes unanswered for a week. This skill separates them, then writes only
what is worth writing.

> **Embudo de conversaciones.** Antes de escribir, abre `conversaciones.md` en la carpeta de trabajo (plantilla en `../../datos/conversaciones.md`). Si la persona ya está, sigue desde su estado; si no, agrégala. Al terminar, deja su fila actualizada: estado (PENDIENTE, ENVIADO, RESPONDIÓ, CITA, DESCARTADO), fecha del próximo seguimiento y el borrador. Regla de seguimiento: primer DM en 24 horas, seguimiento al día 4 y al día 10 con algo nuevo, y DESCARTADO después de 2 sin respuesta. Cuando alguien responde, ofrece **una** cosa de `ofertas.md` según su arquetipo. Nunca envíes: el usuario envía.

> **Datos de la marca.** Lee `../../datos/LEEME.md` para saber dónde está la carpeta de trabajo. De ahí lee `marca.md`, `arquetipos.md`, la voz que corresponda, `ofertas.md`, `pruebas.md` y `entregables.md`, y respeta siempre `seguridad.md`.

## Input

The user pastes the messages. Screenshots are fine. Do not log into their
account or read their inbox with a browser tool (the only exception is the
monthly sweep below).

## Modo barrido (una vez al mes o a pedido)

> **Regla de la casa.** A pedido ("barre mi bandeja", "revisa mis últimas conversaciones") o una vez al mes (por ejemplo, junto a la auditoría mensual), lee las **últimas 30 conversaciones** de LinkedIn en **una sola visita de solo lectura** a la bandeja (https://www.linkedin.com/messaging/), con el navegador del campo `navegador` de `marca.md`; si no hay navegador, con lo que el usuario pegue. Mientras lees, nunca respondas, marques, archives ni borres nada (regla 2 de `seguridad.md`). Ordena cada conversación en uno de 4 grupos:
> 1. **Propongo responder:** con el borrador listo y el porqué en una línea.
> 2. **Del público, pero le toca mover a la otra persona** (ya hay reunión, sin presupuesto ahora, quedó en retomar más adelante) → NUTRIR con fecha en "Seguimiento (fecha)" de `conversaciones.md`.
> 3. **Fuera del público** (competencia, candidatos, gente que vende, pares, quien solo pidió un recurso): sin acción.
> 4. **Mensajes propios sin respuesta de 4 días o más** → candidatos a seguimiento con algo nuevo (regla de seguimiento de `conversaciones.md`; si ya hubo 2 seguimientos, DESCARTADO).
>
> Entrega primero los conteos por grupo, después los borradores. Actualiza las filas de `conversaciones.md` (agrega a quien no esté). Nada se envía sin el sí del usuario en el chat.

## Sort into five

| bucket | signal | action |
| --- | --- | --- |
| **LEAD** | describes a problem the user solves, or asks about working together | reply today, full answer |
| **RECRUITER** | a role, a company, a salary band | reply if the role is real, one line if not |
| **PEER** | someone in the same field with something to say | reply this week, keep it human |
| **ASK** | wants advice, time, an intro, a favour | reply if it is cheap and specific, decline cleanly if not |
| **SPAM** | agency pitch, lead-gen sequence, crypto, "quick question" with no question | archive, no reply |

Print the counts first. Seeing "3 leads, 2 recruiters, 41 spam" is most of the
value.

## Detecting a sequence

Automated outreach has a shape: an invite note with no specifics, a message
that arrives within minutes of the accept, "quick question", "I noticed you're
in {industry}", a calendar link in message one, then a bump exactly four days
later. When you see it, mark it SPAM and say which tell gave it away. The user
does not owe a reply to a script.

## Replies

- **LEAD** - answer the actual question in the message, in full, for free. If
  it is a fit, the offer is one sentence at the end. If it is not, say so and
  point them somewhere useful. Both outcomes are good.
- **RECRUITER** - if the role is genuinely interesting, ask the three things
  the message left out: comp band, level, and whether it is in-office. If it
  is not, one line: not looking, happy to refer, and mean the refer.
- **ASK** - if it costs under ten minutes and is specific, do it. If it is
  "can I pick your brain", decline in one warm sentence and give them the one
  answer you would have given on the call. That is the polite version and it
  is also the more useful one.
- **DECLINES** are short, warm and final. No "let's revisit in Q3" if there is
  no Q3.

## Output

Grouped by bucket, counts first, drafts only for the buckets that get replies,
each one humanized. Then the gate: the user sends them.

```
INBOX  ·  52 items  ·  3 LEAD, 2 RECRUITER, 4 PEER, 2 ASK, 41 SPAM

SPAM  (41) - archive. 38 are the same sequence: no-specifics invite,
"quick question" within 4 minutes of accept, calendar link in message one.
```
