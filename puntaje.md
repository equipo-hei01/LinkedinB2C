# puntaje.md · Hook, viralidad y alcance por arquetipo

Toda pieza de LinkedIn (post, carrusel, video con texto) se entrega con este puntaje. Es una **estimación con criterio**, no una predicción: LinkedIn no entrega datos antes de publicar. Sirve para elegir entre versiones y para mejorar el gancho antes de que el usuario publique. Después, `analista-li` lo compara con las métricas reales (ver "Calibración").

Escala de 0 a 10 en todo. Cada criterio vale 0, 1 o 2 puntos. Suma = puntaje.

## 1. Hook (las primeras 1 o 2 líneas)

| Criterio | 2 puntos | 1 punto | 0 puntos |
| --- | --- | --- | --- |
| Específico | dato, escena, cifra o nombre concreto | algo concreto pero genérico | abstracto ("La IA está cambiando todo") |
| Tensión | contraste, miedo nombrado, confesión o pregunta que pica | algo de curiosidad | afirmación plana o que ya se sabe |
| Corto | máx. 12 palabras y cabe antes del "ver más" (~140 car. móvil) | 13 a 18 palabras | más largo o se corta mal |
| Para alguien | se nota a quién le habla (un arquetipo) | se adivina | le habla a todos |
| Se entiende solo | se entiende sin la línea 2 ni la imagen | necesita contexto | confunde o usa jerga |

Lectura: 9-10 se queda; 7-8 sirve, propone una alternativa; ≤6 reescribe antes de mostrar.

## 2. Viralidad (que se comente, se guarde y se comparta)

| Criterio | 2 puntos | 1 punto | 0 puntos |
| --- | --- | --- | --- |
| Tiempo de lectura | aire, ritmo y un giro que hace leer hasta el final; video o carrusel | texto correcto | muro de texto o demasiado corto |
| Comentable | pregunta que solo este post puede hacer y que se contesta en una frase, o la palabra clave del arquetipo (`entregables.md`) | llamado genérico, o pregunta que pide un ensayo | sin llamado o "¿Qué opinas?" |
| Guardable | marco, lista, plantilla o dato que sirve después | una idea útil | nada que guardar |
| Compartible | etiqueta a personas o marcas que probablemente compartan, o pone a alguien de héroe | menciona sin etiquetar | nadie tiene razón para compartir |
| Emoción | orgullo, alivio, identificación o miedo nombrado | algo de emoción | neutro |

Restan (−1 cada uno, mínimo 0): link en el cuerpo, más de 3 hashtags, cebo de interacción, publicar en sábado o domingo en la mañana, ninguna señal de cómo lo sabe el usuario, un caso que nombra la industria en el gancho, un gancho que ocupa 2 líneas en el celular.

## 3. Alcance por arquetipo (uno por cada uno, siempre todos)

Para cada arquetipo de `arquetipos.md` de la carpeta de trabajo (de 1 a 4, los que definió el usuario):

| Criterio | 2 puntos | 1 punto | 0 puntos |
| --- | --- | --- | --- |
| Dolor | nombra su dolor o su miedo real | lo roza | no lo toca |
| Lenguaje | usa sus palabras (las "palabras que lo activan" de `arquetipos.md`) | neutro | jerga de otro mundo |
| Reencuadre | trae su reencuadre o tesis | algo cercano | no |
| Prueba | evidencia que le sirve (testimonio de su rol, cifra con fuente) | prueba general | sin prueba |
| Próximo paso | el llamado o la oferta le calza (ver tabla "Llamado") | le sirve a medias | no es para él |

El arquetipo principal de la pieza debería sacar 7 o más. Si saca menos, el post no es para quien dice ser: dilo.
Reparto esperado en la semana: el vigente de `arquetipos.md` (punto 3) (mira el arquetipo principal de cada pieza en `log.md`).

## Cómo se entrega (en el recibo)

Ejemplo (los nombres de arquetipo son de ejemplo; usa los de `arquetipos.md`):

```
PUNTAJE (estimación, no predicción)
hook:        7/10  específico 2 · tensión 1 · corto 2 · para alguien 1 · se entiende 1
viralidad:   7/10  lectura 2 · comentable 1 · guardable 0 · compartible 2 · emoción 2
alcance:     Decisor 7 · Implementador 5 · Cuidador 4   (principal: Decisor)
para subir:  hook a 8 → "Dejé de pedir tres cotizaciones para todo."
```

- Siempre una línea "para subir" con **un** cambio concreto (la mejora que más suma), no una lista.
- Si el hook saca ≤6, muestra dos hooks alternativos con su puntaje.
- Nunca subas el puntaje para agradar. Si es bajo, dilo con el motivo.
- No inventes datos para subir la "prueba": si falta, va `[verificar: …]`.

## Calibración (viernes, analista-li)

En `log.md` cada post guarda `hook/viralidad/alcance` estimados. El viernes, `analista-li` pone al lado impresiones, reacciones, comentarios, guardados y compartidos, y escribe en `estado.md` una línea de calibración: qué criterio predijo bien y cuál no (por ejemplo, "compartible pesa más de lo estimado: los posts con etiquetas duplicaron alcance"). Con 8 o más posts, ajusta los pesos en esta guía y avisa al usuario.
