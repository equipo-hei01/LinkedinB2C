---
name: li-dm
description: Write connection notes and DM follow-ups that get replies - the 200-character invite, the first message, and the two follow-ups. Use when the user says "write a connection request", "DM this person", "outreach message", "how do I follow up", or is reaching out to someone specific on LinkedIn.
---

# li-dm

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

The invite note is 200 characters. The first DM decides whether there is a
second one. Neither is a pitch.

> **Embudo de conversaciones.** Antes de escribir, abre `conversaciones.md` en la carpeta de trabajo (plantilla en `../../datos/conversaciones.md`). Si la persona ya está, sigue desde su estado; si no, agrégala. Al terminar, deja su fila actualizada: estado (PENDIENTE, ENVIADO, RESPONDIÓ, CITA, DESCARTADO), fecha del próximo seguimiento y el borrador. Regla de seguimiento: primer DM en 24 horas, seguimiento al día 4 y al día 10 con algo nuevo, y DESCARTADO después de 2 sin respuesta. Cuando alguien responde, ofrece **una** cosa de `ofertas.md` según su arquetipo. Nunca envíes: el usuario envía.

> **Palabra clave (la del arquetipo en `entregables.md`; en los ejemplos, `PALABRA`).** Si la persona comentó una palabra clave, no es un mensaje en frío: no pidas los datos de abajo ni escribas nota de invitación si ya es contacto. Usa el DM de entrega de esa palabra en `entregables.md` de la carpeta de trabajo (plantilla en `../../datos/entregables.md`): cambia el nombre y una frase para que ninguno sea igual, agrega el link con UTM `utm_source=linkedin&utm_medium=dm&utm_content=<palabra>` y deja la pregunta que abre la conversación. Forma del DM de entrega (fuente: post de David Ibáñez, nov 2026): después del saludo, **primero el link**; luego **una sola pregunta diagnóstica** sobre su situación con el tema; **máximo 3 líneas**, en su tono; sin propuesta de llamada, sin hablar de los servicios del usuario y sin cerrar con "cualquier cosa me dices", "quedo atento" o parecidos. Seguimientos: día 4 con algo nuevo y día 10 para cerrar el ciclo, como abajo. La oferta llega solo si responde, y es una sola de `ofertas.md` según su arquetipo. Si no es contacto, primero la nota de invitación (200 caracteres) que nombra la palabra clave; el DM de entrega va cuando acepte.

> **Reglas de la casa para todos los mensajes.** Saludo siempre: el `saludo_dm` de `marca.md`, ajustado a la hora y al día del envío si el saludo lo pide; en notas de invitación, solo el saludo corto. Si la persona está en `amigos.md`, va el mensaje cercano de ese archivo (¿comentó para apoyarte o por interés?), sin oferta ni seguimientos. Nunca pidas que la persona cuente cosas de sus clientes: pregunta por los desafíos que ve en las organizaciones. Guarda la URL de su perfil en la columna "Perfil (URL)" de `conversaciones.md`. Enviar: por defecto el usuario envía. Solo la ronda de conversaciones puede enviar desde el navegador, y solo lo que el usuario apruebe en el chat (regla 1 de `seguridad.md`).

> **Datos de la marca.** Lee `../../datos/LEEME.md` para saber dónde está la carpeta de trabajo. De ahí lee `marca.md`, `arquetipos.md`, la voz que corresponda, `ofertas.md`, `pruebas.md` y `entregables.md`, y respeta siempre `seguridad.md`.

## Before writing, get the specifics

Ask for, in one batched question:

1. **Who** - name, role, company.
2. **The hook** - the actual reason to reach out now. A post they wrote, a
   thing their company shipped, a mutual connection, a talk they gave. Not
   "they fit my ICP".
3. **What the user wants** - a conversation, a referral, a job, a sale. Be
   honest internally, even if the message does not lead with it.

If there is no specific reason to message this person today, say so. A message
with no reason is what everyone else sends, and it is why their reply rate is
2%.

## The invite note (200 characters)

```
{one specific reference to them} + {one line of who you are} + {no ask}
```

The note asks for nothing. It exists to make the accept obvious. Under 200
characters including spaces - count them and show the count.

```
Saw your post on killing the discovery call - we did the same thing in March
and it worked. I run ops at a 12-person studio. Would like to follow along.
                                                                    [187/200]
```

## The first message, after they accept

Wait a day. Then:

- **Two to four sentences.** A screen of text is a delete.
- **Reference the specific thing** from the note - continuity is the whole
  reason the note was specific.
- **Give something before asking.** A number, a template, a name, an answer.
- **One ask, and make it small.** "Worth a 15-minute call?" beats "let me walk
  you through our platform".
- **No calendar link in message one.** It reads as a funnel, because it is.

> **Regla de la casa: primer mensaje a quien dio una señal** (aceptó, visitó el perfil o comentó) (fuente: post de David Ibáñez, nov 2026). Esto reemplaza el "15-minute call" de arriba, porque aquí la oferta llega solo si la persona responde:
> - Después del saludo, **2 frases**. La primera entra por algo concreto de lo que hace la persona (su último post, un dato de su perfil), no por lo que vende el usuario.
> - Termina en **una pregunta de verdad**, que el usuario quiera saber la respuesta y que se conteste fácil.
> - **Sin links, sin propuesta de llamada y sin presentar al usuario con su cargo.** El perfil ya lo dice.
> - Si no hay nada concreto de la persona, dilo y no inventes: un mensaje sin motivo es el que todos mandan.

## Follow-ups

Two. That is the number.

- **+4 days** - add something new. Never "just bumping this" or "following up
  on my last message". If you have nothing new, you have no follow-up.
- **+10 days** - the close-the-loop message. Say you will stop, and mean it.
  This one gets a surprising share of the total replies, because it removes
  the pressure.

Then stop. A third follow-up converts nobody and costs the relationship.

> **Regla de la casa: cómo se escribe el seguimiento** (fuente: post de David Ibáñez, nov 2026). De 2 a 3 líneas, con algo útil sobre **lo que la persona contó** (si contó algo), sin reprochar el silencio ("no me has respondido", "te escribo de nuevo") y sin pedirle nada. Si en la conversación ya hay 2 seguimientos sin respuesta, no escribas otro: márcala DESCARTADO y avísale al usuario.

> **Regla de la casa: cómo seguir la conversación** (10 videos de LinkedIn, nov 2026)
> - **Prueba "tú vs. yo":** si el mensaje dice más yo, nosotros o el nombre de la marca que tú o tu equipo, se reescribe.
> - **Espejo:** igual largo, tono y formalidad que la persona (si escribe dos líneas, no le respondas ocho).
> - **Siempre un siguiente paso concreto:** qué, quién y cuándo ("Te mando el ejemplo el jueves"). Nada de "seguimos en contacto".
> - **Diagnóstico antes de ofrecer la reunión:** entiende su situación, su dolor y su urgencia, una pregunta a la vez, y habla menos que la persona. Ofrece la reunión (con el `link_reservas` de `marca.md`) solo si hay encaje; si no, dale algo útil y déjala en NUTRIR.
> - **Nunca edites ni borres un mensaje ya enviado.** Si hay un error, se aclara en el siguiente.
> - **NUTRIR:** quien respondió pero no está listo recibe un toque al mes con algo útil (un post, un dato, un recurso), sin oferta. **DESCARTADO** se revisa una sola vez a los 90 días, y solo si hay algo nuevo que contarle.
> - **Prueba en curso, nota de voz:** a quien estaba interesado y dejó de responder, el usuario puede grabar una nota de voz corta (30 segundos) en vez del texto del día 10. Anota "nota de voz" en la fila para comparar respuestas.

## Never

- Never send an automated connection or message sequence. Automated outreach
  tools violate LinkedIn's User Agreement and get accounts restricted. (The
  only exception is a message the user approved in the chat, sent one by one with pauses;
  see rule 1 of `seguridad.md`.)
- Never fabricate a mutual connection, a shared school, or having read
  something the user has not read.
- Never write the message that opens "I hope this message finds you well".
- Never send more than 20 invites a day. Beyond that, LinkedIn throttles the
  account, and a throttled account is a dead one.

## Output

The invite note with its character count, the first message, and both
follow-ups with the day they go out. All humanized through `/li-human`. The
user sends every one of them by hand.
