# arquetipos.md · A quién le hablamos y cómo llegarle (plantilla)

Lo leen todas las skills de escritura del plugin **antes** de escribir, junto con `marca.md` y la voz elegida (`voz-persona.md` o `voz-empresa.md`). La voz dice *cómo suena* el usuario; este archivo dice *a quién le habla cada pieza, qué le duele, qué teme, qué busca y qué tiene que creer para actuar*.

La copia viva está en la carpeta de trabajo (ver `LEEME.md`). Esta es la plantilla: la llena `/li-inicio` con lo que el usuario cuenta de sus clientes y el usuario la corrige. Se definen de **1 a 4 arquetipos** (tipos de cliente). Un campo vacío o con `[verificar]` se le pregunta al usuario: nunca se inventa.

Hay un ejemplo lleno en `ejemplo/arquetipos.md` (empresa ficticia, con los arquetipos "Decisor", "Implementador" y "Cuidador").

## Reglas de uso

1. **Un arquetipo por pieza.** Si el usuario no lo dice, infiérelo del tema o del cargo del lector y dilo como supuesto. Un mensaje para todos no le habla a nadie.
2. **El cliente es el héroe; la marca es el mentor** que da el mapa. Nunca la marca como protagonista.
3. **Reparto vigente (la única fuente; los demás archivos citan esta línea):** ver la sección "Reparto del contenido" de abajo. Si cambia, se cambia solo ahí.
4. **Nunca inventes** casos, métricas, nombres ni testimonios. Si falta evidencia, usa los datos de mercado con fuente (al final de este archivo o en `pruebas.md`) o deja `[caso real: …]`.
5. Al entregar, nombra el arquetipo en el recibo (`arquetipo: <nombre>`).
6. Los nombres de los arquetipos son los que el usuario puso aquí. Son los valores del campo `arq` del kanban, más `Pares`.

## Reparto del contenido (por llenar)

Qué parte de los posts y de los comentarios va a cada arquetipo. Se decide con la meta de `marca.md` (`meta_reuniones_semana`, `ticket_meta`): quien decide y tiene presupuesto recibe la mayor parte; quienes influyen (habilitan o bloquean), el resto.

| Arquetipo | % de los posts | % de los comentarios | Por qué |
| --- | --- | --- | --- |
| [arquetipo 1] | [ ] | [ ] | [decide y tiene presupuesto / influye / usa] |
| [arquetipo 2] | [ ] | [ ] | |
| [arquetipo 3] | [ ] | [ ] | |

- **Reparto mientras dure la meta actual:** [por ejemplo "60 / 25 / 15 mientras la meta sea subir el ticket"]
- **Reparto base, cuando la meta cambie:** [por ejemplo "50 / 30 / 20"]

Con un solo arquetipo, el reparto es 100 % y esta tabla tiene una fila.

## Cómo se usa en cada formato

| Formato | Qué tomar del arquetipo |
| --- | --- |
| **Post** (li-post) | Gancho del arquetipo o una observación propia que toque su dolor → realidad → tensión → **un** reencuadre (en negrita Unicode, si `marca.md` lo permite) → el camino de la marca en 1 o 2 líneas → el llamado del arquetipo. En posts cortos, solo 4 o 5 pasos del mapa: realidad, tensión, reencuadre, camino, acción. |
| **Carrusel** (li-carousel) | Portada = gancho del arquetipo. Láminas = mapa narrativo completo (realidad → tensión → problema de fondo → consecuencia → reencuadre → camino → evidencia → acción). |
| **Comentario** (li-comment, li-reply) | Detecta el arquetipo de quien escribe por su cargo. Reconoce su dolor con sus palabras, amplía con el reencuadre, sin vender. |
| **DM** (li-dm, li-inbox) | Abre con lo que "piensa y no dice", como pregunta. Ofrece el llamado del arquetipo solo cuando responda. Para objeciones: reconocer tal cual → reencuadre → evidencia → siguiente paso pequeño. |
| **Plan semanal** (li-plan) | Asigna un arquetipo a cada pieza y respeta el reparto vigente. |
| **Perfil** (li-profile) | Titular y Acerca de le hablan primero al arquetipo que decide (el primero del reparto). |
| **Reutilizar** (li-repurpose) | Cada pieza derivada para un arquetipo distinto. |
| **Auditoría** (li-audit) | Clasifica los posts por arquetipo y mira cuál conversa y cuál trae reuniones. |

## Lo que le alivia y lo que busca (resumen rápido, por llenar)

| Arquetipo | Le alivia | Busca |
| --- | --- | --- |
| [arquetipo 1] | [qué le quita peso] | [qué necesita llevarse] |
| [arquetipo 2] | | |
| [arquetipo 3] | | |

## Detalle por formato de LinkedIn (por llenar: una columna por arquetipo)

| Pieza | [arquetipo 1] | [arquetipo 2] | [arquetipo 3] |
| --- | --- | --- | --- |
| Gancho de post | [su miedo o su dolor principal] | | |
| Reencuadre | [la frase que le cambia la lectura] | | |
| Comentario en post ajeno | [qué aporta; nunca vende] | | |
| Nota de conexión (≤200 car.) | [referencia concreta a su empresa, rol o post + un interés genuino] | | |
| Primer DM (sin agenda) | [pregunta abierta sobre su situación] | | |
| Llamado | [la oferta de `ofertas.md` que le corresponde] | | |
| Palabra clave | [la de `entregables.md`] | | |

"Lo que piensa y no dice" es el mejor material: nombrar ese miedo en una línea detiene el scroll. En el recibo de cada pieza: `arquetipo: X · tensión: Y · reencuadre: Z`.

## Checklist antes de entregar

- [ ] ¿Está claro a qué arquetipo le habla?
- [ ] ¿Nombra el dolor real (no el síntoma) y la tensión del arquetipo?
- [ ] ¿Usa un reencuadre que cambie la lectura?
- [ ] ¿El cliente es el héroe y la marca el mentor?
- [ ] ¿La evidencia es real o tiene fuente?
- [ ] ¿El llamado corresponde al arquetipo y no presiona?
- [ ] ¿Usa palabras que lo activan y evita las que lo alejan?

---

## Los arquetipos (de 1 a 4)

Copia el bloque de abajo una vez por arquetipo. Mejor un arquetipo bien descrito que cuatro a medias. El nombre es corto, de una palabra si se puede, y describe su papel en la compra (quien decide, quien implementa, quien cuida a las personas, quien usa).

### ARQUETIPO 1 · [NOMBRE]

| Campo | Valor |
| --- | --- |
| **Nombre** | [una palabra; es el valor de `arq` en el kanban] |
| **Cargos** | [los cargos como aparecen en LinkedIn] |
| **Tamaño de empresa** | [n.º de personas o facturación; industrias] |
| **Papel en la compra** | [decide y tiene presupuesto / influye / usa] |
| **Quiere** | [el resultado que busca, con plazo si lo tiene] |
| **Dolor** | [lo que le duele hoy, con sus palabras] |
| **Teme perder** | [credibilidad, presupuesto, confianza del equipo…] |
| **Tensión** | [X frente a Y] |
| **Creencia actual → nueva** | ["…" → "…"] |
| **Evidencia que necesita** | [casos de pares, métricas, referencias, plantillas…] |
| **Emoción a activar** | [alivio, confianza, orgullo…] |
| **Tono** | [cómo se le habla] |
| **Llamado** | [la oferta de `ofertas.md` y la frase con que se le invita] |
| **Palabra clave** | [`PALABRA`: una palabra, sin tilde, fácil de escribir en el teléfono; la misma de `entregables.md`] |

**Lo que piensa y no dice:** ["…" · "…" · "…"]

**Palabras que lo activan:** [10 a 15 palabras de su mundo]

**Palabras que lo alejan:** [las que le suenan a humo, a amenaza o a otro mundo]

**Objeciones:** ["…" · "…" · "…"]

**Reencuadres:** ["…" · "…"]

**Ganchos (preguntas que detienen el scroll):**
- [¿Qué pasa si…?]
- [¿Cómo… sin…?]

**Mapa narrativo:** [realidad] → [tensión] → [problema de fondo] → [consecuencia] → [reencuadre] → [camino] → [evidencia] → [quién llega a ser]

**Metáforas (opcional):** [ ]

---

### ARQUETIPO 2 · [NOMBRE]

(copia el bloque del arquetipo 1)

---

### ARQUETIPO 3 · [NOMBRE] (opcional)

(copia el bloque del arquetipo 1)

---

### ARQUETIPO 4 · [NOMBRE] (opcional)

(copia el bloque del arquetipo 1)

---

## Datos de mercado con fuente (para la evidencia)

Solo datos con fuente verificable. Citar siempre la fuente. Si se necesita un dato nuevo, verificarlo antes de usarlo y agregarlo aquí.

| Dato | Fuente | Fecha |
| --- | --- | --- |
| | | |
