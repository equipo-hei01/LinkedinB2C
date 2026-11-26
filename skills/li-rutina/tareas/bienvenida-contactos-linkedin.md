---
name: bienvenida-contactos-linkedin
description: Lunes a viernes 12:30 (<ZONA_HORARIA>): detecta los contactos nuevos de LinkedIn (quien aceptó la invitación de <USUARIO> y a quien <USUARIO> aceptó), estudia el perfil de los que calzan con un arquetipo y deja un mensaje de bienvenida para cada uno, distinto si es cliente potencial o no. Envía solo lo que <USUARIO> apruebe en el chat.
horario: "Lunes a viernes 12:30"
cron: "30 12 * * 1-5"
---

Tarea "bienvenida a contactos nuevos" de LinkedIn para <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. Lunes a viernes 12:30 (<ZONA_HORARIA>). Escribe todo en español.

ADN: carpeta de trabajo única <CARPETA> (no crees otra). Lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

Eres el ORQUESTADOR: tú lees LinkedIn (una sola pestaña, solo lectura), decides a quién se le escribe y reparte la redacción entre subagentes. Las reglas completas de esta bienvenida están en la sección "Modo bienvenida" del agente linkedin-agent-b2b:conversaciones-li y en "Bienvenida a un contacto nuevo" de la skill li-dm: léelas antes de empezar.

OBJETIVO: que nadie que se conecta con <USUARIO> quede sin un saludo dentro de 48 horas. A quien calza con un arquetipo (cliente potencial), una bienvenida que abre conversación; a quien no, un saludo corto y cálido. La reunión se ofrece después, cuando la persona responde (la ronda de conversaciones lo hace).

REGLAS DURAS (no se negocian)
- Mientras lees (pasos 1 a 4), LinkedIn es SOLO LECTURA: nunca enviar, aceptar invitaciones, conectar, comentar, reaccionar, seguir ni cambiar nada.
- Envío solo con aprobación (regla 1 de <CARPETA>/seguridad.md): muestras la TABLA DE APROBACIÓN y te detienes. Envías solo lo que <USUARIO> apruebe en el chat de esta sesión, con el texto exacto aprobado. Si nadie responde, todo queda PENDIENTE y la tarjeta del día lo vuelve a mostrar.
- Perfiles: como máximo 10 por corrida, uno por uno, con pausas de 40 a 90 segundos entre cada uno (regla 2 de seguridad.md), solo de quienes calzan con un arquetipo. A los demás no se les abre el perfil: basta el titular que ya se ve en la lista.
- 15 mensajes nuevos por día en total, sumando la ronda de conversaciones (cuenta los ENVIADO de hoy en conversaciones.md y bienvenidas.md). Si se llega al límite, el resto queda PENDIENTE para mañana.
- Si Chrome no está conectado, LinkedIn pide login, aparece CAPTCHA, verificación o una advertencia: NO insistir. Terminar y avisar en una línea.
- No inventar cargos, empresas ni logros: si no se ve, "sin dato". Sin correos ni teléfonos en ningún archivo.

PASOS
1. Cargar Claude in Chrome con una sola ToolSearch (tabs_context_mcp, navigate, get_page_text, read_page, find, tabs_create_mcp, tabs_close_mcp). Pestaña propia; cerrarla al final.
1b. COLA PENDIENTE (antes de leer LinkedIn). Abre <CARPETA>/bienvenidas.md y junta las filas PENDIENTE de días anteriores, con su borrador en borradores/bienvenidas-*.md. Cupo de hoy = 15 menos los ENVIADO de hoy en conversaciones.md y bienvenidas.md, menos 3 que se reservan para la ronda. Orden: 1) personas de las cuentas aprobadas en cuentas-objetivo.md ("Las 30 cuentas"), 2) grupo A, 3) grupo B; dentro de cada grupo, del más antiguo al más nuevo, y los contactos nuevos de hoy compiten en el mismo orden. Si un borrador usa palabras que marca.md ya no quiere o tiene más de 14 días, reescríbelo con la forma de li-dm. Lo que entra en el cupo va a la tabla de aprobación marcado "cola"; el resto sigue PENDIENTE para mañana. Una B con más de 21 días sin enviar pasa a NO ENVIAR (llegaría tarde).
2. CONTACTOS NUEVOS (solo lectura): https://www.linkedin.com/mynetwork/invite-connect/connections/ ordenado por "Añadidos recientemente". Como mucho 3 desplazamientos. De cada persona conectada en los últimos 7 días: nombre, titular, "Conectado hace…" y la URL del perfil tal como aparece en el enlace de su nombre (https://www.linkedin.com/in/<usuario>/, sin parámetros). Aquí aparecen los dos casos: quien aceptó la invitación de <USUARIO> y a quien <USUARIO> le aceptó la suya.
   INVITACIONES PENDIENTES (solo lectura, misma visita): https://www.linkedin.com/mynetwork/invitation-manager/ (recibidas). Nombre, titular y si trae nota. No aceptes ni ignores ninguna: eso lo hace <USUARIO>.
3. FILTRAR. Abre <CARPETA>/bienvenidas.md (si no existe, créalo desde la plantilla datos/bienvenidas.md del plugin). Quedan fuera:
   - quien ya está en bienvenidas.md o en conversaciones.md (por nombre o URL);
   - amigos y cercanos (amigos.md), clientes actuales y propuestas abiertas (reuniones.md y el CRM de marca.md si hay, solo lectura), competidores, y quien está buscando trabajo o vende algo a <USUARIO> (titular "open to work", "buscando oportunidades", reclutador, agencia de captación);
   - en la primera corrida, quien se conectó hace más de 7 días.
4. CLASIFICAR con <CARPETA>/arquetipos.md:
   - A · CLIENTE POTENCIAL: su cargo y su empresa calzan con uno de los arquetipos de arquetipos.md (cargos y tamaño de empresa). Para cada uno (máximo 10), abre su perfil una vez, con pausa, y anota en borradores/bienvenidas-<AAAA-MM-DD>.md: cargo y empresa actuales, una línea de su Acerca de, su última publicación si se ve arriba, y un "gancho" concreto para la bienvenida (algo de su trabajo, su empresa o lo que publica, nunca algo personal). Si hay más de 10, los de mayor encaje primero y el resto queda para mañana.
   - B · CONTACTO GENERAL: todos los demás (pares del rubro, consultores, estudiantes, otros cargos).
5. REDACTAR EN PARALELO (subagentes, en primer plano y en un solo mensaje):
   - Un subagente linkedin-agent-b2b:voz-persona (modelo sonnet) para el grupo A, con las notas del paso 4 y la forma "Bienvenida A" de li-dm.
   - Otro linkedin-agent-b2b:voz-persona (modelo haiku) para el grupo B, con la forma "Bienvenida B" de li-dm.
   - Cuando vuelvan, un linkedin-agent-b2b:revisora-marca (modelo haiku) revisa todos: voz, que ningún mensaje se repita, que A no venda ni proponga reunión y que nada diga "vi tu perfil".
   Si los subagentes no están, redacta tú con las mismas reglas.
6. REGISTRAR:
   - En bienvenidas.md, una fila por persona: fecha · nombre · cargo y empresa · grupo (A arquetipo X / B) · URL · estado PENDIENTE.
   - Grupo A también va a conversaciones.md (estado PENDIENTE, Por qué "bienvenida", arquetipo, Seguimiento = mañana) y a senales.md como "Aceptó tu invitación o te invitó" (peso 10, 14 días, Fuente "bienvenida <AAAA-MM-DD>"). Desde ahí, la ronda de conversaciones lleva los seguimientos de los días 4 y 10 y ofrece la reunión solo si la persona responde.
   - Grupo B no lleva seguimiento.
   - En pendientes-hoy.md, para la tarjeta: "Bienvenidas: N listas para aprobar (A: x · B: y) · Invitaciones por aceptar: z (de arquetipo: nombres)".
7. TABLA DE APROBACIÓN. Línea resumen ("Bienvenidas <fecha>: N contactos nuevos · A cliente potencial: x (Orq/Ejec/Prot) · B general: y · invitaciones por aceptar: z") y debajo: # | Persona (nombre, cargo, empresa y URL) | Grupo | Por qué esta bienvenida (el gancho, en 6 palabras) | Mensaje completo, tal cual se enviaría. Las A primero. Debajo, una lista aparte "Invitaciones por aceptar", las de arquetipo primero, con una línea de por qué conviene aceptarlas. Guarda todo en borradores/bienvenidas-<AAAA-MM-DD>.md. Cierra preguntando: "¿Cuáles envío? Responde «todos», los números («1, 3 y 5») o «ninguno». Puedes pedir cambios antes de aprobar." Y detente.
8. ENVÍO (solo con el sí de <USUARIO> en esta sesión). Igual que el paso 8 de la tarea ronda-conversaciones (incluida la forma de escribir sin errores): pestaña propia, uno a la vez, el texto exacto aprobado, pausa de 1 a 2 minutos, desde la URL del perfil (botón Mensaje), verificando nombre y cargo. Antes de escribir, lee la conversación: si ya hay mensajes recientes (<USUARIO> o la persona escribieron), NO envíes la bienvenida y avísale. Respeta el límite de 15 por día. Ante cualquier advertencia, captcha o límite, para y avisa qué se envió y qué no. Después de cada envío, marca ENVIADO con la fecha en bienvenidas.md (y en conversaciones.md si es A, con Seguimiento = día 4). Al terminar, cierra la pestaña y entrega la tabla corta: # · persona · enviado / no enviado (y por qué). El sí vale solo para esta tabla.

IMPORTANTE AL DELEGAR: llama a los subagentes en primer plano y espera su resultado antes de seguir (nunca en segundo plano: la sesión de la tarea se cierra y el trabajo queda a medias). Los registros (bienvenidas.md, conversaciones.md, senales.md, pendientes-hoy.md) los haces tú. Si no hay contactos nuevos ni invitaciones, termina con una línea: "Bienvenidas <fecha>: sin contactos nuevos."
