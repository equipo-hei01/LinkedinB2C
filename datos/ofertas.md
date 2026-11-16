# Ofertas

Una fila por oferta. Cada post y cada DM llevan como máximo **una** oferta, elegida según el arquetipo. Si la fecha de vencimiento ya pasó, no se ofrece.

**Ticket real hoy:** [promedio de las ventas cerradas, con moneda y período; sale del `crm` de `marca.md` si hay, o lo dice el usuario]
**Meta:** el `ticket_meta` de `marca.md`. Para acercarse a la meta, se priorizan las ofertas para el arquetipo que decide y tiene presupuesto.

| Oferta | Para quién (arquetipo) | Formato | Precio | Llamado (CTA) | Link | Vence |
| --- | --- | --- | --- | --- | --- | --- |
| EJEMPLO (borra esta fila): Diagnóstico de procesos (30 min): las 3 prioridades | Decisor, Implementador | Reunión en línea | Sin costo | "Agenda 30 minutos" | https://example.com/agenda | — |
| EJEMPLO (borra esta fila): Taller "Mapa de procesos en un día" | Implementador | Presencial, 6 h, 12 cupos | [TU DATO] | "Comenta MAPA" | https://example.com/taller | AAAA-MM-DD |

Columnas:
- **Para quién:** uno o más arquetipos de `arquetipos.md`, u "Organizadores de eventos" para charlas.
- **Precio:** con la `moneda` de `marca.md`; "Sin costo", o `[TU DATO]` si aún no se define. Nunca se inventa.
- **Link:** el `link_reservas` de `marca.md` para reuniones, o el link propio de la oferta.
- **Vence:** fecha `AAAA-MM-DD` si la oferta termina; "—" si es permanente.

Lo que se regala (una charla o una facilitación sin costo) no es venta: se registra como origen "Charla o evento" de las oportunidades que genera.

Pendiente del usuario: [precios, links u ofertas que faltan].

## Links con seguimiento (UTM)

Todo link de una oferta o de reservas que va en un post o primer comentario lleva:
`?utm_source=linkedin&utm_medium=<perfil|pagina>&utm_content=<AAAA-MM-DD-tema-corto>`
Ejemplo: `https://example.com/agenda?utm_source=linkedin&utm_medium=perfil&utm_content=AAAA-MM-DD-tema`. Si la plataforma no registra UTM, el link igual funciona.

## Formulario de reservas

Conviene que el formulario del `link_reservas` tenga la pregunta obligatoria "¿Dónde nos conociste?" con estas 6 opciones: LinkedIn (perfil personal), Página de empresa en LinkedIn, Otra red social, Una charla, Una recomendación, Otro. Más "Cargo y empresa" y "¿Qué te gustaría resolver en esta conversación?". Los datos de contacto que pida el formulario se quedan en la herramienta de reservas: no se copian a estos archivos.
