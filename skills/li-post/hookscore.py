#!/usr/bin/env python3
"""
hookscore.py (LinkedIn B2B, español) - puntúa la línea 1 de un post de
LinkedIn en cinco propiedades y ordena varios ganchos entre sí.

Qué es: cinco heurísticas locales calculadas solo desde el texto. Miden lo que
suelen compartir las primeras líneas que retienen en LinkedIn B2B en español:

  LENGTH       cabe antes del "ver más" (~140 caracteres en móvil, ~210 en
               escritorio; no hay cifra oficial) y no gasta palabras.
  SPECIFICITY  algo que se puede ver o comprobar: una cifra, un nombre, un cargo
               u órgano (gerente, directorio, junta directiva, consejo de
               administración, comité), una industria, una escena ("el
               comité del lunes"), "la mayoría de...", una cita.
  STAKES       algo en juego: negación, quién responde, error, costo, miedo,
               poder, y sobre todo el CONTRASTE ("No fue innovación. Fue
               tranquilidad", "no es X, es Y", "no X sino Y", "más láminas que
               usuarios").
  FRONTLOAD    la carga aparece pronto, medida en caracteres; las aperturas de
               relleno ("Hoy quiero compartir", "Estoy feliz de") restan.
  ADDRESS      a quién le habla: tuteo (también con verbos: "necesitas",
               "tienes"), imperativo, o un cargo del arquetipo ("si eres
               gerente", "tu comité").

Qué NO es: un predictor de alcance. Se calibró sobre un set de 15 ganchos
buenos y 10 malos: separa los dos grupos (AUC 1,00; el peor bueno 60, el mejor
malo 51), pero el set es pequeño y casi todo construido. En posts reales, el
alcance depende más del tema, el formato y el momento que de la línea 1. Úsalo para atrapar aperturas de relleno, líneas sin
nada concreto y ganchos que se cortan, no para elegir entre dos ganchos
decentes. La decisión final la da puntaje.md, con criterio.

Fuentes de la calibración: LinkedIn Engineering sobre tiempo de lectura (2020);
AuthoredUp (309.614 posts) y ContentIn (635 cuentas) sobre el largo de la
primera línea; MagicPost (1,18 M de posts) sobre preguntas y cifras;
Burnkrant y Unnava (1995) sobre la segunda persona; estudios de la negación
correctiva en español (RAMAS, Univ. de Córdoba; Lanero 2018). Todos los datos
de LinkedIn son de proveedores de herramientas, correlacionales y sin separar
por idioma.

Uso
  python -X utf8 hookscore.py ganchos.txt            # uno por línea, ordenados
  python -X utf8 hookscore.py --hook "Tu comité no quiere frenar el proyecto"
  python -X utf8 hookscore.py ganchos.txt --json
  python -X utf8 hookscore.py ganchos.txt --nicho nicho.txt
Términos del nicho (opcional): un archivo con una palabra o frase por línea
(cargos, industrias, escenas del nicho del usuario; # para comentarios). Se
suman a lo que cuenta como concreto. Si no se pasa --nicho y hay un nicho.txt
en la carpeta actual, se usa ese.
Acepta texto con negritas Unicode (𝗚𝗼𝗯𝗲𝗿𝗻𝗮𝗿): se normaliza antes de puntuar.
Código de salida: 0 si algún gancho sale STRONG, 1 si no (también con OK).
"""

import argparse
import json
import os
import re
import statistics
import sys
import unicodedata

# Windows: la consola no siempre es UTF-8. Sin esto, las tildes salen rotas o
# el script cae con UnicodeEncodeError si se corre sin `-X utf8`.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8")
    except Exception:
        pass

WORD_RE = re.compile(r"[A-Za-zÁÉÍÓÚÑÜáéíóúñü0-9$%'’-]+")
NUMBER_RE = re.compile(
    r"\$\s?\d[\d,.]*"
    r"|\b\d[\d,.]*\s?"
    r"(?:%|k\b|x\b|horas?\b|minutos?\b|d[ií]as?\b|semanas?\b|meses\b|mes\b|años?\b"
    r"|millones\b|mil\b|veces\b|hrs?\b|hours?\b|days?\b|weeks?\b|months?\b|years?\b)?",
    re.IGNORECASE)
PROPER_RE = re.compile(r"(?<!^)(?<![.!?¿¡] )(?<![¿¡])\b[A-ZÁÉÍÓÚÑ][a-záéíóúñü]{2,}\b")
NOT_PROPER = {"Fue", "Es", "Son", "Era", "Dice", "Le", "Les", "Ninguno", "Ninguna", "Nadie",
              "Pero", "Hoy", "Ayer", "Qué", "Cuál", "Quién", "Cómo", "Por"}
HASHTAG_RE = re.compile(r"(?:^|\s)#\w+")
EMOJI_RE = re.compile(r"[\U0001F300-\U0001FAFF☀-➿]")

SPOKEN_NUMBERS = {
    "cero", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve",
    "diez", "doce", "quince", "veinte", "treinta", "cuarenta", "cincuenta",
    "cien", "mil", "millón", "millones", "docena", "mitad", "doble", "triple",
    "two", "three", "four", "five", "ten", "twenty", "hundred", "thousand", "million",
}
MONEY_WORDS = {
    # monedas de países de habla hispana (sin modismos de un solo país)
    "pesos", "dólares", "euros", "soles", "bolivianos", "guaraníes", "quetzales",
    "lempiras", "colones", "usd", "eur",
    "millonario", "ventas", "utilidad",
    "sueldo", "presupuesto", "dollars", "percent", "revenue", "profit", "salary",
}

# Lo que el lector teme perder, en B2B.
STAKES = {
    # negación y absolutos
    "no", "nunca", "nadie", "ninguno", "ninguna", "ningún", "nada", "jamás",
    # responsabilidad y exposición
    "responde", "responder", "responsable", "culpa", "expuesto", "expuesta", "exponer",
    "expone", "rinde", "explicar", "defender", "dueño", "dueña",
    "decide", "decidir", "decidió", "firma", "firmar", "aprueba", "aprobó",
    # error y falla
    "equivoca", "equivocarse", "equivocó", "equivocamos", "error", "errores", "falla",
    "falló", "fallar", "mal", "fracaso", "fracasó",
    # pérdida y costo
    "pierde", "pierdes", "perdió", "perdí", "perder", "cuesta", "costó", "costo",
    "multa", "demanda", "sesgo", "despidos", "despido", "reemplaza", "reemplazar",
    "reemplazó", "frenar", "frena", "apagar", "abandona", "abandonado",
    # emoción y miedo
    "miedo", "teme", "temen", "temor", "vergüenza", "escondidas", "silencio", "callan",
    "tranquilidad", "confianza",
    # instancias de poder
    "directorio", "riesgo", "riesgos", "credibilidad", "reputación", "capital",
    # confesión
    "verdad", "secreto", "confieso", "admito",
    # inglés, para las 2 o 3 cuentas de referencia del radar
    "never", "wrong", "mistake", "lost", "lose", "cost", "failed", "nobody", "not",
    "don't", "can't", "fired", "risk", "truth", "secret", "stop",
}
STAKES_PHRASES = [
    r"\bsale mal\b", r"\bsalió mal\b", r"\bquedar expuest[oa]\b",
    r"\bquién (?:responde|decide|firma|paga)\b", r"\bcapital político\b",
    r"\bqué pasa si\b", r"\bnadie (?:dice|pregunta|sabe)\b",
    # el órgano de gobierno se llama distinto según el país
    r"\bjunta directiva\b", r"\bconsejo (?:de administración|directivo)\b",
]

# Lo concreto en LinkedIn en español no es solo una cifra.
NICHE_CONCRETE = {
    # cargos y órganos
    "gerente", "gerentes", "gerenta", "gerentas", "ceo", "cfo", "cio", "coo", "chro",
    "directorio", "directora", "director", "directores", "comité", "sponsor", "gerencia",
    "gerencias", "jefaturas", "rrhh", "personas", "junta", "juntas", "socios",
    "accionistas",
    # industrias
    "banca", "banco", "retail", "minera", "minería", "aerolínea", "salud", "clínica",
    "fintech", "aseguradora", "logística", "manufactura", "construcción",
    # países
    "argentina", "bolivia", "chile", "colombia", "cuba", "ecuador", "españa",
    "guatemala", "honduras", "méxico", "nicaragua", "panamá", "paraguay", "perú",
    "uruguay", "venezuela", "latam", "latinoamérica", "centroamérica",
    # escenas
    "lunes", "martes", "miércoles", "jueves", "viernes", "mañana", "ayer", "cierre",
    "piloto", "pilotos", "ppt", "láminas", "correo", "cliente", "clientes", "presupuesto",
    "trimestre", "palabra", "frase", "producción", "usuarios", "contrato",
}
SPEC_PHRASES = [
    r"\bla mayoría\b", r"\bcasi todos\b", r"\buno de cada\b", r"\bde cada \w+\b",
    r"\bla mitad\b", r"\brr\.\s?hh\.?", r"[\"“«][^\"”»]{3,}[\"”»]",
    r"\bconsejo (?:de administración|directivo)\b",
    r"\b(?:costa rica|el salvador|puerto rico|república dominicana)\b",
]

# Aperturas que gastan la línea sin decir nada. Se comparan palabras completas.
WEAK_OPENERS = [
    "hoy quiero", "hoy les", "quiero compartir", "quiero hablar", "quiero contarles",
    "les comparto", "les cuento", "te comparto", "les dejo", "hola", "buenos días",
    "buenas tardes", "queridos", "estoy feliz", "estoy muy feliz", "estoy orgulloso",
    "estoy orgullosa", "me complace", "feliz de", "con mucho orgullo", "tuve el honor",
    "tuve el placer", "ayer tuve", "una vez más", "en la era", "en el mundo actual",
    "hoy en día", "vivimos en", "en un mundo", "la inteligencia artificial está",
    "la ia está", "es importante", "cabe destacar", "como todos sabemos", "sabías que",
    "en este post", "reflexión", "bueno", "entonces", "básicamente", "hay que",
    "esto es", "es que", "una de las",
    "so", "ok", "okay", "hey", "hi", "hello", "guys", "welcome", "today", "basically",
    "honestly", "just", "let's", "i want", "i wanted", "in this", "this is", "there are",
]

CONTRAST = [
    # eco: "no fue X. Fue Y", "no es X, es Y", "no le teme a X. Le teme a Y"
    re.compile(r"(?i)\bno\s+(?:(?:le|les|te|se|lo|la|me|nos)\s+)?(\w+)\b[^.;:!?]{1,70}?[.;:,—–]\s*"
               r"(?:(?:le|les|te|se|lo|la|me|nos)\s+)?\1\b"),
    # "no X sino Y"
    re.compile(r"(?i)\bno\b[^.;:!?]{1,70}?\bsino\b"),
    # "el problema no son X. Es Y"
    re.compile(r"(?i)\bno\s+(?:es|son|fue|era)\b[^.;!?]{1,70}?[.;,]\s*(?:es|son|fue|era)\b"),
    # "las cataratas no se gobiernan. La IA, sí"
    re.compile(r"(?i)\bno\b[^.;!?]{1,60}[.;]\s*[^.;!?]{1,30},\s*s[ií]\b"),
    # "menos X, más Y"
    re.compile(r"(?i)\bmenos\s+\w+[^.;!?]{0,40}[,.]\s*más\s+\w+"),
    # "Todo comité tiene un piloto. Ninguno tiene dueño"
    re.compile(r"(?i)\b(?:todos?|todas?)\b[^.;!?]{1,60}[.;,]\s*(?:ningun[oa]?|nadie)\b"),
    # "más láminas que usuarios"
    re.compile(r"(?i)\bmás\s+\w+\s+que\s+\w+"),
]
QUESTION_RE = re.compile(r"¿[^?]+\?|\?\s*$")
QWORDS_RE = re.compile(r"(?i)¿\s*(?:qui[eé]n|qu[eé] pasa si|c[oó]mo|cu[aá]nt[oa]s?|cu[aá]l|por qu[eé]|qu[eé])\b")
ADDRESS_2P = re.compile(
    r"(?i)\b(tú|tu|tus|te|ti|contigo|usted|ustedes|vos|you|your|necesitas|tienes|sabes"
    r"|eres|estás|puedes|quieres|haces|crees|usas|lideras|decides|opinas|piensas|has"
    r"|conoces|imaginas)\b")
AUDIENCE_RE = re.compile(
    r"(?i)\b(si eres|si lideras|si diriges|si estás|gerentes?|gerentas?|ceos?|directorio"
    r"|junta directiva|consejo de administración|consejo directivo"
    r"|directores|líderes|equipos ejecutivos|rr\.?\s?hh|sponsors?)\b")
IMPERATIVES = {"fíjate", "piensa", "imagina", "pregúntate", "revisa", "deja", "haz", "evita",
               "prueba", "olvida", "copia", "guarda", "usa", "escribe", "nunca"}
FIRST_P = re.compile(r"(?i)\b(yo|mi|mis|me|nosotros|nuestro|nuestra|nos|he|hemos|conozco"
                     r"|veo|creo|aprendí|vi)\b")
FIRST_P_VERB = re.compile(r"\b(?!comité|café|bebé|aquí|allí|así)[a-záéíóúñ]{3,}(?:é|í)\b")

DEALBREAKERS = [
    (re.compile(r"(?i)^\s*(?:stop scrolling|deja de (?:hacer )?scroll|no hagas scroll)"),
     "Abre pidiendo atención (\"deja de hacer scroll\"): pedirla prueba que no se ganó."),
    (re.compile(r"(?i)\b(?:en este (?:video|reel|post)|hoy te voy a (?:mostrar|enseñar)|te voy a mostrar)\b"),
     "Preámbulo. Bórralo y abre con lo que vale."),
    (re.compile(r"(?i)^\s*(?:hola |bienvenid[oa]s? |hey |hi )"),
     "Saludo. Nadie entra al feed a que lo saluden."),
    (HASHTAG_RE, "Hashtag en el gancho. Van al final del post, si van."),
    (EMOJI_RE, "Emoji en el gancho. En la línea 1 resta claridad."),
]

CHECKS = ["LENGTH", "SPECIFICITY", "STAKES", "FRONTLOAD", "ADDRESS"]
WEIGHTS = {"LENGTH": .15, "SPECIFICITY": .20, "STAKES": .30, "FRONTLOAD": .20, "ADDRESS": .15}
STRONG_AT, OK_AT, MIN_FOR_STRONG = 70, 55, 45


def load_niche(path=None):
    """Suma a lo concreto los términos del nicho del usuario (uno por línea)."""
    if path is None:
        path = "nicho.txt" if os.path.isfile("nicho.txt") else None
    if not path:
        return 0
    n = 0
    with open(path, encoding="utf-8-sig") as f:
        for line in f:
            term = line.split("#", 1)[0].strip().lower()
            if not term:
                continue
            n += 1
            if " " in term:
                SPEC_PHRASES.append(r"\b" + re.escape(term) + r"\b")
            else:
                NICHE_CONCRETE.add(term)
    return n


def clamp(n):
    return max(0.0, min(100.0, n))


def normalize(text):
    # Las negritas Unicode de LinkedIn son otras letras para el script; NFKC
    # las vuelve texto normal y une las tildes combinadas que deja bold.py.
    return unicodedata.normalize("NFKC", text).strip()


def words(text):
    return WORD_RE.findall(re.sub(r"(?<=\d),(?=\d)", "", text))


def low_tokens(text):
    return [w.lower().strip("'’") for w in words(text)]


def contrast_hit(text):
    return any(p.search(text) for p in CONTRAST)


def check_length(text):
    n, chars = len(words(text)), len(text)
    if 4 <= n <= 14:
        score = 100.0
    elif n < 4:
        score = 100 - (4 - n) * 20
    else:
        score = 100 - (n - 14) * 8
    if chars > 140:
        score -= 20
    if chars > 210:
        score -= 20
    end = ""
    if text.endswith("."):
        score -= 10
        end = ", termina en punto"
    return clamp(score), f"{n} palabras, {chars} caracteres{end} (4-14 palabras, <=140 en móvil)"


def check_specificity(text):
    nums = [n.strip() for n in NUMBER_RE.findall(text) if n.strip()]
    propers = set(PROPER_RE.findall(text)) - NOT_PROPER
    low = low_tokens(text)
    spoken = [w for w in low if w in SPOKEN_NUMBERS or w in MONEY_WORDS]
    niche = sorted({w for w in low if w in NICHE_CONCRETE})
    phrases = [p for p in SPEC_PHRASES if re.search(p, text, re.I)]
    hard = len(nums) + len(propers) + len(spoken)
    soft = len(niche) + len(phrases)
    found = ", ".join(nums[:2] + sorted(propers)[:2] + spoken[:1] + niche[:3])
    detail = f"{hard} duro(s), {soft} del nicho" + (f": {found}" if found else " - nada que se pueda ver o comprobar")
    return clamp(25 + hard * 30 + soft * 20), detail


def stakes_markers(text):
    low = low_tokens(text)
    marks = sorted({w for w in low if w in STAKES})
    marks += [p.strip("\\b") for p in STAKES_PHRASES if re.search(p, text, re.I)]
    if contrast_hit(text):
        marks += ["contraste", "contraste"]
    if QUESTION_RE.search(text) and QWORDS_RE.search(text) and marks:
        marks.append("pregunta con costo")
    if re.match(r"(?i)\s*si\b", text) and ADDRESS_2P.search(text):
        marks.append("escenario")
    return marks


def check_stakes(text):
    marks = stakes_markers(text)
    score = {0: 20.0, 1: 65.0, 2: 85.0}.get(len(marks), 100.0)
    shown = sorted(set(marks))
    return score, f"{len(marks)} marca(s) de tensión" + (f": {', '.join(shown[:5])}" if shown else " - nada en juego")


def first_payload_char(text):
    low = text.lower()
    pos = [m.start() for p in CONTRAST for m in [p.search(text)] if m]
    for w in STAKES | NICHE_CONCRETE:
        m = re.search(r"\b" + re.escape(w) + r"\b", low)
        if m:
            pos.append(m.start())
    m = NUMBER_RE.search(text)
    if m and m.group().strip():
        pos.append(m.start())
    for p in SPEC_PHRASES + STAKES_PHRASES:
        m = re.search(p, text, re.I)
        if m:
            pos.append(m.start())
    if re.match(r"(?i)\s*(¿|si\b)", text):
        pos.append(0)
    return min(pos) if pos else None


def check_frontload(text):
    lowtext = " ".join(low_tokens(text))
    penalty, hit = 0, None
    for weak in WEAK_OPENERS:
        if lowtext == weak or lowtext.startswith(weak + " "):
            penalty, hit = 35, weak
            break
    pc = first_payload_char(text)
    if pc is None:
        base, where = 30.0, "sin carga en la línea"
    elif pc <= 40:
        base, where = 100.0, f"carga en el carácter {pc}"
    elif pc <= 90:
        base, where = 80.0, f"carga en el carácter {pc}"
    elif pc <= 140:
        base, where = 60.0, f"carga en el carácter {pc}, tarde"
    else:
        base, where = 30.0, f"carga en el carácter {pc}, después del corte"
    if contrast_hit(text) and len(text) <= 140:
        base = max(base, 90.0)
        where += "; el contraste sostiene la línea"
    return clamp(base - penalty), where + (f"; apertura de relleno \"{hit}\"" if hit else "")


def check_address(text):
    low = low_tokens(text)
    if ADDRESS_2P.search(text):
        return 100.0, "tutea al lector"
    if low and low[0] in IMPERATIVES:
        return 90.0, f"imperativo (\"{low[0]}\")"
    if AUDIENCE_RE.search(text):
        return 85.0, "nombra al lector por su cargo (gerente, si eres...)"
    if FIRST_P.search(text) or FIRST_P_VERB.search(text.lower()):
        return 70.0, "primera persona, sin nombrar al lector"
    return 45.0, "tercera persona, no le habla a nadie"


def run(text):
    text = normalize(text)
    results = {
        "LENGTH": check_length(text),
        "SPECIFICITY": check_specificity(text),
        "STAKES": check_stakes(text),
        "FRONTLOAD": check_frontload(text),
        "ADDRESS": check_address(text),
    }
    flags = [msg for pattern, msg in DEALBREAKERS if pattern.search(text)]
    scores = {k: v[0] for k, v in results.items()}
    weighted = sum(scores[k] * WEIGHTS[k] for k in CHECKS)
    # En LinkedIn la línea 1 se lee entera antes del "ver más": la propiedad
    # más baja pesa menos que en un video corto.
    overall = clamp(weighted * 0.75 + min(scores.values()) * 0.25 - len(flags) * 15)
    verdict = "STRONG" if (overall >= STRONG_AT and min(scores.values()) >= MIN_FOR_STRONG
                           and not flags) else ("OK" if overall >= OK_AT else "WEAK")
    return results, overall, verdict, flags


def bar(score, width=24):
    filled = round(score / 100 * width)
    return "#" * filled + "." * (width - filled)


def render_one(text, results, overall, verdict, flags, out=sys.stdout):
    print("\nHOOK SCORE", file=out)
    print("=" * 62, file=out)
    print(f"  \"{text.strip()}\"\n", file=out)
    for name in CHECKS:
        score, detail = results[name]
        print(f"  {name:<13} {bar(score)} {score:5.1f}", file=out)
        print(f"  {'':<13} {detail}", file=out)
    print("-" * 62, file=out)
    print(f"  {'HOOK SCORE':<13} {bar(overall)} {overall:5.1f}   {verdict}", file=out)
    for f in flags:
        print(f"\n  DEALBREAKER  {f}", file=out)
    if verdict != "STRONG":
        weakest = min(CHECKS, key=lambda c: results[c][0])
        print(f"\n  Lo más débil: {weakest}. Es una señal, no un veredicto: decide con puntaje.md.", file=out)
    print("", file=out)


def render_table(rows, out=sys.stdout):
    print("\nHOOK RANKING\n" + "=" * 78, file=out)
    for i, r in enumerate(rows, 1):
        mark = "->" if i == 1 else "  "
        hook = r["hook"] if len(r["hook"]) <= 62 else r["hook"][:59] + "..."
        print(f"{mark} {r['score']:5.1f} {r['verdict']:<7} {hook}", file=out)
        print(f"        lo más débil: {r['weakest']} ({r['checks'][r['weakest']]['score']:.0f})", file=out)
        for f in r["flags"]:
            print(f"        dealbreaker: {f}", file=out)
    print("\nEl puntaje filtra ganchos flojos; entre dos decentes, elige con puntaje.md.\n", file=out)


def main():
    ap = argparse.ArgumentParser(description="Puntúa la línea 1 de un post de LinkedIn en español (cinco propiedades).")
    ap.add_argument("input", nargs="?", default="-", help="archivo con un gancho por línea, o -")
    ap.add_argument("--hook", help="puntúa un solo gancho")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--nicho", help="archivo con términos del nicho, uno por línea (por defecto, nicho.txt de la carpeta actual si existe)")
    args = ap.parse_args()
    load_niche(args.nicho)

    if args.hook:
        lines = [args.hook]
    else:
        raw = sys.stdin.read() if args.input == "-" else open(args.input, encoding="utf-8").read()
        lines = [l.strip() for l in raw.splitlines() if l.strip()]
    if not lines:
        print("nada que puntuar", file=sys.stderr)
        sys.exit(2)

    payload = []
    for line in lines:
        results, overall, verdict, flags = run(line)
        payload.append({
            "hook": line,
            "checks": {k: {"score": round(v[0], 1), "detail": v[1]} for k, v in results.items()},
            "weakest": min(CHECKS, key=lambda c: results[c][0]),
            "flags": flags,
            "score": round(overall, 1),
            "verdict": verdict,
        })

    if args.json:
        print(json.dumps(payload if len(payload) > 1 else payload[0], indent=2, ensure_ascii=False))
    elif len(payload) == 1:
        results, overall, verdict, flags = run(lines[0])
        render_one(normalize(lines[0]), results, overall, verdict, flags)
    else:
        render_table(sorted(payload, key=lambda r: -r["score"]))

    sys.exit(0 if any(p["verdict"] == "STRONG" for p in payload) else 1)


if __name__ == "__main__":
    main()
