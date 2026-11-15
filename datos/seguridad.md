# Seguridad de la cuenta

LinkedIn restringe cuentas con actividad automatizada. Estas reglas valen para todas las skills, agentes y tareas programadas, sin excepción. Este archivo no tiene datos por llenar: se copia tal cual a la carpeta de trabajo.

1. **Nunca publicar, comentar, dar like, conectar ni enviar mensajes de forma automática.** Todo queda como borrador. **Única excepción, la ronda de conversaciones:** sus DMs, invitaciones con nota y respuestas a comentarios se pueden enviar desde el navegador del usuario solo así:
   - Primero se le muestra al usuario la tabla de aprobación (persona con su URL, motivo, canal y mensaje completo) y el usuario aprueba **en el chat**, por mensaje o por lote ("todos", "1, 3 y 5"). Sin ese sí, nada se envía. Un sí vale solo para esa tabla, no para rondas futuras.
   - Se envía exactamente el texto aprobado, uno a la vez, con 1 a 2 minutos entre cada uno. Si el usuario pide un cambio, se vuelve a mostrar y se espera su sí.
   - Antes de cada envío se confirma la identidad (nombre completo, cargo, URL) y se leen los últimos mensajes: si la persona respondió después del último mensaje del usuario, no se envía el seguimiento aprobado y se le propone otro al usuario. Si hay dos perfiles con el mismo nombre o el nombre no calza, no se envía.
   - Respeta las reglas 3 y 4. Si aparece una advertencia, un captcha, un límite o algo raro, se para en ese momento y se avisa (regla 9).
   - Comentar en posts ajenos, dar like y conectar sin nota siguen siendo solo del usuario.

   **Segunda excepción, publicar posts:** solo desde la tarea "LinkedIn · publicar la siguiente pieza" y solo así:
   - La pieza está en "Lista para publicar" del kanban (ya aprobada por el usuario) y tiene su texto final.
   - Antes de publicar se le muestra al usuario exactamente qué sale (cuenta, texto completo, archivo y primer comentario) y el usuario dice "sí" **en el chat de esa sesión**. Sin ese sí, nada se publica. Un sí vale para esa pieza.
   - Una pieza por vez y máximo un post al día en LinkedIn (perfil y página comparten carril), nunca el mismo tema dos veces el mismo día.
   - Se publica exactamente el texto aprobado. Si algo no calza (el archivo no sube, falta texto, advertencia, captcha o límite), se para, no se reintenta y se avisa.
   - Nunca se publica desde una tarea con horario ni sin nadie en la sesión.

   Si el usuario prefiere no usar estas excepciones, basta con borrarlas de su copia: todo vuelve a quedar como borrador.
2. **Visitas de solo lectura:** como máximo una visita a LinkedIn por tarea (ej.: una a notificaciones por ronda de conversaciones). Sin recorrer perfiles en serie. Los envíos aprobados de la regla 1 no cuentan como visitas de lectura.
3. **Invitaciones:** máximo 50 por semana, siempre con nota personal y una razón concreta.
4. **DMs:** máximo 15 nuevos por día, todos distintos. Nunca el mismo texto a varias personas.
5. **Tablero:** se actualiza una vez por semana (viernes), no a diario.
6. **Exports:** se bajan desde el navegador del usuario, una vez por semana como máximo.
7. **Nada de extensiones ni servicios de terceros** que automaticen acciones en LinkedIn. La extensión de Chrome de Claude se usa para leer, y para enviar o publicar solo dentro de las dos excepciones de la regla 1.
8. **Datos de personas:** sin teléfonos ni correos en archivos compartidos, tableros ni planillas. La URL pública del perfil de LinkedIn sí se guarda (sirve para no confundir personas). No inferir género ni datos sensibles por nombre.
9. Si LinkedIn muestra una advertencia o un captcha: parar todas las tareas y avisar al usuario.
