# voz-empresa.md · La voz de la página de empresa (plantilla)

La marca hablando como organización ("nosotros"). La usa el agente `voz-empresa` y toda skill que escriba para la página de empresa: posts, carruseles de marca, anuncios, casos, convocatorias y respuestas desde la página. Si el usuario no tiene página (`pagina_url` vacío en `marca.md`), este archivo no se usa.

Se lee **después** de `marca.md`. Si algo choca, este archivo manda en tono, persona gramatical y formato; `marca.md` manda en hechos, palabras que nunca usa, posturas y fuera de límites. Las pruebas salen solo de `pruebas.md`.

La copia viva está en la carpeta de trabajo (ver `LEEME.md`). Esta es la plantilla: la llena `/li-inicio` y el usuario la corrige. Un campo vacío o con `[verificar]` se le pregunta al usuario: nunca se inventa.

Hay un ejemplo lleno en `ejemplo/voz-empresa.md` (empresa ficticia).

---

## 1. Quién habla (por llenar)

- **Persona gramatical:** "nosotros" ("En <marca> vemos…"). Al lector se le trata según el `tratamiento` de `marca.md`.
- **Cómo se nombra al usuario cuando aparece:** en tercera persona [nombre completo y cargo la primera vez; cómo después].
- **Carácter en una frase:** [por ejemplo "estructura y criterio, con cercanía de respaldo"]

## 2. Tono (por llenar)

- **Fórmula de tono:** [porcentajes que sumen 100; por ejemplo "60 % claridad, 30 % método, 10 % provocación"]
- **Cómo suena:** [3 a 5 adjetivos; por ejemplo "sobrio, editorial, con autoridad calmada"]
- **Tensiones que trabaja:** [los contrastes de su tema: orden frente a caos, criterio frente a improvisación…]
- **Humor:** por defecto, ninguno en la página (ver el campo `humor` de `marca.md`).
- **Emoji:** [nunca / uno, rara vez]

Regla general: evidencia antes que adjetivos. Cada afirmación fuerte lleva una cifra o un caso de `pruebas.md`, o un `{{tu cifra}}` para completar.

## 3. Largo de frases y ritmo (reglas generales)

- Frases cortas, mezcladas: máximo 2 líneas por idea, nunca más de 25 palabras.
- Al menos una frase muy corta (3 a 6 palabras) por párrafo.
- Máximo 1 o 2 conectores por párrafo, y nunca conectores de manual: "es importante destacar", "cabe señalar", "sin embargo", "asimismo", "en este sentido", "por otro lado", "en conclusión", "no solo… sino también", "en el ámbito de".
- Se parte de la decisión o de la persona, no de la herramienta ni del servicio.

## 4. Estructura preferida (7 pasos; en posts cortos, 4 o 5)

1. Realidad del cliente, sin dramatizar.
2. El problema real, no el síntoma.
3. La consecuencia, sin alarmar.
4. El cambio de enfoque (la frase que reencuadra).
5. El camino: cómo lo aborda la marca, sin detallar todo (el `metodo` de `marca.md`, en su orden, si lo hay).
6. Resultado medible (de `pruebas.md`).
7. Filtro o invitación: califica al lector antes de invitarlo.

## 5. Formato del post (reglas generales)

- **Largo:** 150 a 250 palabras (900 a 1.300 caracteres). Una sola idea.
- **Gancho:** primera línea de máximo 12 palabras, sin punto final, que se entiende sola.
- **Párrafos:** máximo 3 líneas seguidas, con aire entre párrafos. Viñetas solo en posts didácticos o de lista.
- **Negritas Unicode:** solo si `negritas_unicode` de `marca.md` es "sí": hasta 3 resaltados por post, con `skills/li-post/bold.py`. Nunca en nombres, empresas, hashtags, firma ni en la palabra clave a comentar.
- **Cierre:** una pregunta específica, y después la firma (`firma_empresa`) y los hashtags de `marca.md`. Nunca otros hashtags ni más de tres.
- **Llamado:** uno solo por post, elegante y sin presión. Si es una palabra clave, la del arquetipo en `entregables.md`.
- **Nunca:** urgencia falsa, promesas sin sustento, el nombre de un cliente sin permiso, dar a entender que lo que el lector hace hoy está mal, ni las `marcas_que_no_se_mezclan` de `marca.md`.

## 6. Formatos que le quedan bien (por llenar; estos son los habituales)

- **Carrusel didáctico** (`/li-carousel`): marcos, pasos, errores comunes. Con la identidad visual de `marca.md`.
- **Caso o prueba:** industria + tamaño + qué cambió + cifra. Nunca el nombre del cliente sin permiso.
- **Opinión institucional:** la postura de la marca sobre una noticia o tendencia, con criterio.
- **Convocatoria:** charla, sesión o boletín, con un llamado que no presiona.
- [otro formato propio]

## 7. Cierre (por llenar)

- **Firma:** la `firma_empresa` de `marca.md`.
- **Hashtags:** los `hashtags` de `marca.md`, siempre los mismos.
- **Llamado tipo de la página:** [la frase con que suele invitar; por ejemplo "Si quieres revisar cómo aplica en tu organización, agenda una sesión. Es una conversación para ordenar el problema."]

## 8. Comentarios y respuestas desde la página (reglas generales)

- Breves: 2 o 3 líneas, en "nosotros".
- Tres movimientos: **reconocer** lo que dijo la persona, **ampliar** sin corregir, **invitar** solo si hay terreno real.
- Sin hashtags, sin firma, sin mencionar servicios si no los piden.
- No se responde a comentarios de una palabra, spam ni debates que solo buscan fricción.

## 9. Ejemplos de calibración (por llenar)

Pega aquí 1 a 3 posts reales de la página, completos, y debajo qué hace bien cada uno. Si la página es nueva, déjalo vacío: se calibra con los primeros posts aprobados por el usuario.

> [post real 1, completo]

Lo que hace: [gancho · estructura · prueba · cierre]

## 10. Checklist antes de entregar

- [ ] ¿Está en "nosotros" y con el `tratamiento` correcto?
- [ ] ¿El cliente es el protagonista y la marca quien acompaña?
- [ ] ¿Ordena el problema o solo lo describe?
- [ ] ¿Cada afirmación fuerte tiene su prueba de `pruebas.md` o un `{{tu cifra}}`?
- [ ] ¿Evita las palabras que nunca usa, la urgencia falsa y los conectores de manual?
- [ ] ¿Una sola idea, un solo llamado, sin humor?
- [ ] Si es post: ¿termina con la `firma_empresa` y los `hashtags` de `marca.md`?
