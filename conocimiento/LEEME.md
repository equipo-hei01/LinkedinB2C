# conocimiento/ · lo que el plugin ya sabe antes de conocerte

Esta carpeta es la base con que se construyó el plugin: el método, los patrones de cliente y las fuentes. Existe para que quien instala el plugin **no tenga que enseñárselo**: `/li-inicio` la usa para deducir casi todo y preguntar solo 4 cosas.

| Archivo | Qué tiene | Quién lo usa |
| --- | --- | --- |
| `inferencia.md` | De dónde sale cada dato de la marca sin preguntarlo, su valor por defecto y con qué se corrige solo | `/li-inicio` |
| `arquetipos-biblioteca.md` | 8 arquetipos B2B ya escritos (dolor, lo que piensa y no dice, palabras, objeciones, qué ya probó, ganchos, llamado y entregable típicos) y la regla para elegirlos | `/li-inicio`, `/li-estratega` cuando se agrega un arquetipo |
| `venta-base.md` | El método de venta del sistema en una página, las objeciones y cómo aprende solo | `/li-inicio`, el usuario |
| `fuentes.md` | El catálogo de videos, posts, cursos y materiales de donde salen las reglas, con qué se tomó de cada uno y dónde se aplicó | `/li-mejora`, el usuario |

Reglas:
- Estos archivos son **genéricos**: no llevan datos de ningún usuario ni de sus clientes. Lo personal vive en la carpeta de trabajo (`datos/LEEME.md`).
- Lo que se deduce de aquí entra en la carpeta de trabajo marcado `(supuesto)` y se reemplaza con lo real a medida que el sistema aprende.
- Una fuente nueva solo cambia el plugin si pasa el filtro de alineación de `/li-mejora`. Se agrega a `fuentes.md` con lo que se tomó y lo que se descartó.
