---
name: cuentas-objetivo-semanal
description: Lunes 10:30 (<ZONA_HORARIA>): revisa las 30 cuentas objetivo de <USUARIO> (semáforo, siguiente paso, quién falta), completa los links que faltan en una visita de solo lectura y deja la acción del mes con cada cliente (recompra, referido o caso). Envía solo lo que <USUARIO> apruebe en el chat.
horario: "Lunes 10:30"
cron: "30 10 * * 1"
---

Tarea "cuentas objetivo" de LinkedIn para <USUARIO> (<MARCA>), plugin linkedin-agent-b2b. Lunes 10:30 (<ZONA_HORARIA>). Escribe todo en español.

ADN: lee primero <CARPETA>/marca.md: si no existe, escribe "primero corre /li-inicio" y termina.

Eres el ORQUESTADOR. Carpeta de trabajo única: <CARPETA>. Las reglas completas están en el agente linkedin-agent-b2b:cuentas-li: léelo antes de empezar (si el subagente no está, sigue tú agents/cuentas-li.md del plugin).

REGLAS DURAS
- LinkedIn en solo lectura y una sola visita (pasos 3 y 4 del agente): como máximo 10 perfiles, uno por uno, con pausas de 40 a 90 segundos. Nunca conectar, comentar, reaccionar ni seguir.
- Envío solo con el sí de <USUARIO> en el chat de esta sesión (regla 1 de seguridad.md). Si nadie responde, todo queda PENDIENTE y la tarjeta del día lo muestra.
- Límite: 15 mensajes nuevos por día en total, sumando la ronda y las bienvenidas (cuenta los ENVIADO de hoy en conversaciones.md y bienvenidas.md).
- Si Chrome no está conectado o LinkedIn pide login, CAPTCHA, verificación o muestra una advertencia: no insistas, termina y avisa en una línea.
- Nada inventado: empresas, personas, cargos, cifras ni relaciones.

PASOS
1. Delegar el análisis a linkedin-agent-b2b:cuentas-li (modelo sonnet), en primer plano, con estas reglas. Espera su resultado.
2. Si dejó mensajes, pásalos por linkedin-agent-b2b:revisora-marca (modelo haiku): voz, vocabulario, nada inventado, una sola pregunta, sin vender en el primer toque.
3. Registrar: borradores/cuentas_<AAAA-MM-DD>.md (lo deja el agente), los links completados y las marcas de prioridad en cuentas-objetivo.md, y una línea en pendientes-hoy.md ("Cuentas: N avanzan, M quietas, K frías · X mensajes para aprobar · Y personas para sumar").
4. TABLA DE APROBACIÓN. Línea resumen y debajo: # | Cuenta (nivel) | Persona (nombre, cargo, URL) | Por qué ahora | Mensaje completo, tal cual saldría. Los clientes primero, después nivel 1 y nivel 2. Aparte: "Personas para sumar" (cuenta, nombre, cargo, por qué) y "Cambios de nivel propuestos". Cierra con: "¿Cuáles envío? Responde «todos», los números o «ninguno». También dime a quién sumo y qué cambios de nivel apruebas." Y detente.
5. ENVÍO (solo con el sí de <USUARIO>): igual que el paso 8 de la tarea ronda-conversaciones (pestaña propia, uno a la vez, texto exacto, pausa de 1 a 2 minutos, desde la URL del perfil, verificando nombre y cargo, leyendo la conversación antes; forma de escribir sin errores). Marca ENVIADO en conversaciones.md con la fecha y el seguimiento. Las personas que <USUARIO> apruebe sumar pasan a la tabla de su arquetipo en cuentas-objetivo.md (la invitación con nota va a la ronda, con su propio sí).

IMPORTANTE AL DELEGAR: subagentes en primer plano, nunca en segundo plano. Los registros los haces tú. Si no hay cuentas aprobadas en cuentas-objetivo.md, termina con una línea: "Cuentas <fecha>: no hay cuentas aprobadas todavía."
