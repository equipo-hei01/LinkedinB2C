# Cuentas objetivo por arquetipo

Personas cuyos posts el usuario comenta cada semana, para estar visible ante quienes compran. li-comment las prioriza y li-plan reparte 3 a 5 comentarios al día. Solo nombres y cargos públicos de LinkedIn.

Meta: 20 a 30 por arquetipo. Los comentarios se reparten según el reparto vigente de `arquetipos.md`.

Una sección por cada arquetipo de `arquetipos.md` (copia el bloque y pon su nombre), más la de pares.

## Buscar en la propia red (prospección templada)

Los mejores primeros nombres suelen estar ya entre los contactos del usuario. El usuario puede descargarlos de forma oficial: LinkedIn → Configuración → Privacidad de datos → Obtener una copia de tus datos → Contactos. Llega un archivo `Connections.csv`, que deja en la carpeta de trabajo.

Con ese archivo, el plugin:
1. Lo lee desde la carpeta de trabajo (nunca lo pide por otra vía ni lo sube a ningún lado).
2. Cruza cargo y empresa de cada contacto con los cargos y tamaños de empresa de los arquetipos de `arquetipos.md`.
3. Propone a quién comentar primero (pasa a la tabla de su arquetipo aquí abajo, con "Por qué: contacto de primer grado") y a quién escribirle (pasa como PENDIENTE a `conversaciones.md` para `conversaciones-li`, con un primer DM sin agenda). Quien esté en `amigos.md` va con su mensaje cercano.
4. Anota al final de este archivo "Connections.csv cruzado: AAAA-MM-DD", para no cruzarlo dos veces. Si el usuario baja una copia nueva, se cruza solo lo nuevo.

Reglas: sin scraping y sin abrir perfiles en serie (`seguridad.md`); los límites de DMs e invitaciones no cambian. **Si el CSV trae correos, se ignoran y no se copian** a ningún archivo. Solo nombre, cargo, empresa y URL del perfil.

## [Arquetipo 1] ([cargos y tamaño de empresa, como en `arquetipos.md`])

| Nombre | Cargo y empresa | Link al perfil | Por qué | Última interacción |
| --- | --- | --- | --- | --- |
| EJEMPLO (borra esta fila): Marta Solís Vega | Directora general, empresa ficticia de logística | https://example.com/in/marta-solis | Publica cada semana sobre crecimiento y procesos; su equipo es del tamaño de nuestros clientes | AAAA-MM-DD, comentario en su post |

## [Arquetipo 2] ([cargos])

| Nombre | Cargo y empresa | Link al perfil | Por qué | Última interacción |
| --- | --- | --- | --- | --- |

## [Arquetipo 3] ([cargos])

| Nombre | Cargo y empresa | Link al perfil | Por qué | Última interacción |
| --- | --- | --- | --- | --- |

## Pares y amplificadores (otros consultores, organizadores de eventos, medios)

| Nombre | Cargo y empresa | Link al perfil | Por qué | Última interacción |
| --- | --- | --- | --- | --- |

Pendiente del usuario: la primera lista de 10 a 20. Mientras no exista, li-comment trabaja con los posts que el usuario pegue.
