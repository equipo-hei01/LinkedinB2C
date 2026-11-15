---
name: li-carousel
description: 'Crea carruseles para LinkedIn (PDF) e Instagram (imágenes) con la voz de la marca o de la persona y un diseño simple, limpio y oxigenado: elige la estructura y la portada con fórmulas probadas, escribe lámina por lámina, el texto que va arriba y exporta el PDF y los PNG listos para subir. Usar cuando digan "carrusel", "carousel", "document post", "láminas para LinkedIn", "carrusel de Instagram", "convierte esto en carrusel" o tengan una idea con pasos, lista o antes/después que moriría como post de texto.'
---

# li-carousel · LinkedIn e Instagram

> **Dos voces.** Antes de escribir, lee `marca.md` de la carpeta de trabajo
> (ver `../../datos/LEEME.md`; es el ADN de la marca) y la voz de la tarea,
> también en la carpeta de trabajo: `voz-empresa.md` ("nosotros", página de
> empresa) o `voz-persona.md` ("yo", perfil personal). Si falta `marca.md`,
> di "primero corre `/li-inicio`" y no sigas. Si `/li-estratega` o el usuario
> nombró la voz, úsala. Empresa, marca o página = `voz-empresa`. Personal,
> yo, mi perfil = `voz-persona`. Si no está claro, pregunta una vez
> ofreciendo las dos. Escribe en español.

> **Arquetipos.** Lee `arquetipos.md` de la carpeta de trabajo y elige **un**
> arquetipo para la pieza. La portada usa su gancho; las láminas siguen su
> mapa narrativo (realidad, tensión, problema de fondo, consecuencia,
> insight, camino, evidencia, acción). Nómbralo al entregar.

> **Datos de la marca.** Lee de la carpeta de trabajo `marca.md`,
> `arquetipos.md`, la voz que corresponda, `ofertas.md`, `pruebas.md`,
> `entregables.md`, `kanban.md` (la fila de contenido) y `seguridad.md`
> (plantillas en `../../datos/`). Solo usa pruebas de `pruebas.md`. Si falta
> un dato, deja `[dato real: ...]` y pídeselo al usuario. El llamado sale de
> `ofertas.md` o de `entregables.md`. Si la pieza muestra el método, usa el
> `metodo` de `marca.md`, en su orden, si lo hay.

> **Investigación.** `formulas.md` (en esta carpeta) tiene lo que funciona en
> 2026 en cada red, las fórmulas de portada, las 10 estructuras, las fórmulas
> de láminas y los llamados. Léelo antes del paso 2.

## 0. ¿Carrusel o post?

Carrusel cuando la idea tiene **secuencia**: pasos, lista, antes y después,
un marco con partes, errores con arreglo, preguntas con respuesta. Si es una
sola afirmación, dilo y pásala a `/li-post`. Partir una idea en ocho láminas
es la forma más común de fracasar.

## 1. Red y voz

- **LinkedIn:** PDF de 9 a 12 láminas. Mejor desde el perfil personal del
  usuario y luego compartido por la página de empresa (si hay) con una línea
  propia (los carruseles de perfil personal rinden bastante más que los de
  página).
- **Instagram:** PNG de 7 a 10 láminas. La lámina 2 es un segundo gancho,
  porque Instagram se la muestra a quien no deslizó.
- **Ambas:** escribe una versión base de 9 o 10 láminas que sirva en las dos,
  y dos textos de acompañamiento distintos.

Tema visual según la voz: `empresa` para `voz-empresa` (nombre de la marca y
logo) y `persona` para `voz-persona` (nombre del usuario, foto o iniciales).
Los colores salen de la sección "Identidad visual" de `marca.md`; cada tema
arma con ellos un fondo oscuro, uno claro y uno de acento, y el carrusel los
intercala.

## 2. Estructura y portada

Elige en `formulas.md` una estructura (marco, errores, mito y realidad, antes
y después, caso, problema-agitación-salida, lista de prompts, opinión fuerte,
historia, pregunta y respuesta) y escribe **tres portadas** con fórmulas
distintas. El usuario elige una.

Esqueleto base:

```
1      PORTADA    titular de 8 palabras o menos (+ línea fina opcional). "Desliza →"
2      EL PUNTO   por qué importa, en una frase. En Instagram, un segundo gancho
3..N   UNA IDEA   por lámina: etiqueta ("IDEA 1 DE 3"), titular de 3 a 7
                  palabras con UNA palabra en acento, y hasta 25 palabras abajo
N+1    RESPIRO    una frase fuerza o un prompt para guardar (opcional)
N+2    RESUMEN    todo en una lista que se entiende sola (la que se guarda)
ÚLTIMA CIERRE     "¿Te sirvió?" + un solo llamado + nombre, foto o iniciales
```

## 3. Reglas del texto

- **La portada es el 80 % del resultado.** Corta, grande, específica. Nada de
  "Tips de productividad".
- **Una idea por lámina, tope 30 palabras.** Si necesita un párrafo, son dos.
- **Una sola palabra en acento por titular** (se marca con `*palabra*`).
- **Lazo abierto:** cada lámina deja algo que la siguiente responde.
- **Etiquetas cortas arriba** en mayúsculas: EL PUNTO DE PARTIDA, IDEA 2 DE 3,
  LA CONDICIÓN, GUÁRDALO, PARA PENSAR, FIN DEL RECORRIDO.
- **Un solo llamado.** Guardar, enviar, comentar una palabra o seguir.
- **Nada de cifras inventadas**, ni en la portada.
- Pasa todo el texto por `/li-human` (español) antes de mostrarlo.

## 4. Entrega del texto (antes de diseñar)

Muéstrale al usuario, en este orden:

1. Las tres portadas y la estructura elegida, con el arquetipo.
2. El carrusel lámina por lámina, numerado, que se lea en diez segundos.
3. **Texto para LinkedIn:** 2 o 3 líneas de gancho que no repitan la portada,
   cuerpo corto, pregunta, la firma (`firma_persona` o `firma_empresa`) y los
   hashtags de `marca.md`. El link va en el primer comentario. Sugiere el
   título del documento.
4. **Texto para Instagram:** primera línea con la palabra clave del tema, 3 a
   5 líneas, llamado a guardar o enviar, 3 a 5 hashtags.

Pásalo por `revisora-marca` si está disponible. Diseña solo cuando el usuario
apruebe el texto.

## 5. Diseño y exportación

El diseño sale de `carrusel.js` (en esta carpeta): limpio y oxigenado, con
los colores de la marca y estos elementos:

- **Ritmo de fondos:** las láminas se intercalan oscuro, claro y acento
  (`"ritmo": "alterno"` por defecto). Una lámina de acento marca el clímax
  (el paso más importante o la idea fuerza). Cada lámina puede forzar su
  `"fondo"`.
- **Palabra clave en Playfair cursiva de acento** (`"estilo_acento": "serif"`).
  Alternativas: `"degradado"` o `"subrayado"` (marcador de acento).
- **Número fantasma grande** detrás del titular en las láminas de pasos
  (`"paso": "01"`).
- **Etiqueta con chapa de acento** girada (ícono) o con un punto de acento.
- **Barra de progreso por segmentos** en el pie, en vez de "3 / 9".
- **Puente:** una forma (estrella, círculo o anillo) que empieza en una
  lámina y termina en la siguiente (`"puente": "circulo"`). Úsalo en la
  portada: la mitad de la forma invita a deslizar.
- **Panorama:** una misma imagen partida en dos láminas seguidas
  (`"panorama": {"src": "foto.jpg"}` en la primera de las dos; la siguiente
  muestra la otra mitad sola). Sin foto, usa el arte incorporado
  (`{"arte": "ondas"}` o `{"arte": "estrella"}`). La foto tiene que medir al
  menos 2160 px de ancho. Pon a la persona o el objeto cruzando el corte, y
  el texto arriba (tipo `imagen`) para que no tape la foto. `"velo"`
  (`abajo`, `arriba`, `izquierda`, `derecha` o `false`) oscurece un lado para
  que el texto se lea. Las dos láminas del panorama tienen que tener el mismo
  `"fondo"`.

Tipografías: la `tipografia` de `marca.md` para titulares y cuerpo (si está
vacía, Space Grotesk; "del sistema" usa la fuente del sistema), Playfair
Display cursiva (palabra clave y citas) y Special Elite (etiquetas).

Receta para un carrusel de 9 o 10 láminas: portada oscura con puente,
láminas que se alternan claro y oscuro, el paso clave en acento, un panorama
de dos láminas a la mitad (respiro visual), resumen y cierre.

1. Escribe `carrusel.json` en la carpeta de trabajo, copiando la forma de
   `ejemplo.json` (es un ejemplo ficticio) y llenando `identidad` con la
   sección "Identidad visual" de `marca.md`.
2. Corre:
   ```bash
   node "<carpeta de esta skill>/carrusel.js" carrusel.json salida/
   ```
   Deja `salida/carrusel.pdf` (LinkedIn), `salida/png/01.png...` (Instagram)
   y `salida/carrusel.html`. `"red"` en el JSON elige `linkedin`,
   `instagram` o `ambas`.
3. Si el script dice **REVISAR**, recorta el texto de esa lámina (no achiques
   la letra) y vuelve a correrlo.
4. Mira al menos la portada, una lámina interior y el cierre antes de
   entregar.

Si no hay Node o Playwright, corre con `--solo-html`, abre `carrusel.html`
en Chrome, Imprimir, Guardar como PDF, márgenes Ninguno y Gráficos de fondo
activado. Para instalar Playwright: `npm install playwright` y
`npx playwright install chromium`.

### Campos del JSON

```json
{
  "titulo": "nombre del documento",
  "tema": "empresa | persona",
  "ritmo": "alterno | oscuro | claro | acento | [\"oscuro\", \"claro\", ...]",
  "estilo_acento": "serif | degradado | subrayado",
  "marca": "empresa | persona",
  "red": "linkedin | instagram | ambas",
  "identidad": { "color_fondo": "#hex", "color_texto": "#hex", "color_acento": "#hex",
                 "color_acento2": "#hex (opcional)", "tipografia": "nombre o vacío",
                 "logo": "ruta/logo.png (opcional)", "foto": "ruta/foto.jpg (opcional)",
                 "iniciales": "AP" },
  "autor": { "nombre": "Ana Pérez", "nombre_marcado": "Ana *Pérez*",
             "handle": "[usuario real]", "foto": "ruta/foto.jpg (opcional)" },
  "slides": [ { "tipo": "...", "...": "..." } ]
}
```

- `identidad` copia tal cual los campos de la sección "Identidad visual" de
  `marca.md`. Lo que falte usa un valor neutro: fondo oscuro, texto blanco y
  un acento azul. Si no hay `color_acento2`, se usa el acento principal.
- `autor.nombre` es el `usuario` de `marca.md` en el tema `persona` y la
  `marca` en el tema `empresa` ("Ana Pérez" es un nombre de ejemplo).
- `tema` decide el color de la lámina de acento (`persona` usa
  `color_acento2` si lo hay) y, si no se indica `marca`, también la firma:
  `persona` muestra iniciales (o foto) y nombre; `empresa`, logo (o un punto
  de acento) y nombre.
- `colores` (opcional) sigue sirviendo para forzar una variable de color en
  todas las láminas.

En el texto: `*palabra*` = acento, `**texto**` = negrita, `\n` =
salto de línea, `[variable]` = resaltado dentro de un prompt.

| tipo | campos | para qué |
|---|---|---|
| `portada` | etiqueta, titulo, titulo_ligero, promesa, desliza | la lámina 1 |
| `idea` | icono, etiqueta, titulo, texto, fuente | una idea con su explicación |
| `contraste` | icono, etiqueta, titulo, antes{etiqueta,texto}, despues{etiqueta,texto}, nota | en vez de / prueba con, error y arreglo, mito y realidad |
| `lista` | icono, etiqueta, titulo, items[{icono,fuerte,texto}], nota | 2 a 4 puntos con ícono |
| `chips` | icono, etiqueta, titulo, texto, chips[] | una idea con 2 a 4 etiquetas |
| `frase` | icono, etiqueta, titulo, texto | respiro: una frase fuerza |
| `cita` | icono, etiqueta, cita, autor | cita textual (solo de `pruebas.md` o del propio usuario) |
| `dato` | icono, etiqueta, numero, titulo, texto, fuente | una cifra real con su fuente |
| `prompt` | icono, etiqueta, titulo, cabecera, prompt | prompt o plantilla para guardar |
| `resumen` | icono, etiqueta, titulo, items[] | la lámina que se guarda |
| `pregunta` | icono, etiqueta, titulo, titulo_ligero, link | pregunta final o link |
| `imagen` | etiqueta, titulo, texto | poco texto arriba, para que mande la imagen o el panorama |
| `cierre` | etiqueta, titulo, titulo_ligero, cta | la última lámina, con la firma del autor |

Campos que sirven en cualquier lámina: `fondo` (oscuro, claro, acento),
`paso` (número fantasma), `puente` (estrella, circulo, anillo, o
`{"forma", "tam", "y", "color"}`), `panorama` y `puntos` (trama de puntos).

Íconos: tendencia, diana, lupa, idea, check, terminal, pregunta, grafico,
libro, personas, escudo, ruta, alerta, reloj, guardar, estrella.

Reglas de diseño que no se tocan: una sola lámina de acento cada 4 o 5,
máximo 2 acentos (los de `marca.md`), ningún color fuera de la identidad
visual, letra mínima 28 px, contenido alineado a la izquierda, mismas
posiciones en todas las láminas. Si hay foto real del usuario (`foto` de
`marca.md`), úsala en el cierre del tema `persona`; si no, quedan las
iniciales. En el tema `empresa` va el logo, y si no hay, las iniciales.
Nunca inventes un logo ni un usuario: si falta, deja `[usuario real]`.

## Salida

Primero el texto (paso 4). Con el sí del usuario, el PDF y los PNG, y dónde
quedaron. Nada se publica: el usuario sube el carrusel a mano.

## Puntaje

Toda pieza que se entrega al usuario lleva el puntaje de `../../puntaje.md`: hook, viralidad y alcance para cada arquetipo de `arquetipos.md` (0-10), con una línea "para subir". En carruseles, el hook es la portada.
