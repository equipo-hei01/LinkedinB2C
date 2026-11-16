#!/usr/bin/env python3
"""Negritas y cursivas Unicode para LinkedIn (LinkedIn no tiene formato propio).

Uso:
  python -X utf8 bold.py post.txt                # convierte **texto** a negrita y *texto* a cursiva
  python -X utf8 bold.py post.txt -o listo.txt
  python -X utf8 bold.py --text "Texto suelto" --style bold
  python -X utf8 bold.py post.txt --plain        # quita el formato (vuelve a letras normales)

Estilos: bold (sans negrita), italic (sans cursiva), bolditalic.
Tildes y ñ: la letra base va en negrita y la tilde se agrega como marca
combinada (á = 𝗮 + U+0301). Se ve bien en LinkedIn web, iOS y Android,
pero conviene revisar la vista previa antes de publicar.
Correr SIEMPRE después de /li-human: el detector de IA mide el texto plano.
"""
import argparse, re, sys, unicodedata

# Windows: la consola no siempre es UTF-8. Sin esto, las tildes salen rotas o
# el script cae con UnicodeEncodeError si se corre sin `-X utf8`.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8")
    except Exception:
        pass

BASES = {  # (mayúscula A, minúscula a, dígito 0 o None)
    "bold": (0x1D5D4, 0x1D5EE, 0x1D7EC),
    "italic": (0x1D608, 0x1D622, None),
    "bolditalic": (0x1D63C, 0x1D656, 0x1D7EC),
}

def style_char(c, style):
    up, low, dig = BASES[style]
    if "A" <= c <= "Z": return chr(up + ord(c) - 65)
    if "a" <= c <= "z": return chr(low + ord(c) - 97)
    if dig and "0" <= c <= "9": return chr(dig + ord(c) - 48)
    return c

def stylize(text, style="bold"):
    out = []
    for ch in unicodedata.normalize("NFD", text):
        out.append(style_char(ch, style))
    return unicodedata.normalize("NFC", "".join(out))

REV = {}
for st, (up, low, dig) in BASES.items():
    for i in range(26):
        REV[chr(up + i)] = chr(65 + i); REV[chr(low + i)] = chr(97 + i)
    if dig:
        for i in range(10): REV[chr(dig + i)] = chr(48 + i)

def plain(text):
    return unicodedata.normalize("NFC", "".join(REV.get(c, c) for c in text))

def convert(text):
    text = re.sub(r"\*\*(.+?)\*\*", lambda m: stylize(m.group(1), "bold"), text, flags=re.S)
    text = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", lambda m: stylize(m.group(1), "italic"), text)
    return text

def main():
    p = argparse.ArgumentParser()
    p.add_argument("file", nargs="?")
    p.add_argument("-o", "--out")
    p.add_argument("--text")
    p.add_argument("--style", default="bold", choices=list(BASES))
    p.add_argument("--plain", action="store_true")
    a = p.parse_args()
    src = a.text if a.text is not None else (open(a.file, encoding="utf-8").read() if a.file else sys.stdin.read())
    if a.plain: res = plain(src)
    elif a.text is not None: res = stylize(src, a.style)
    else: res = convert(src)
    if a.out: open(a.out, "w", encoding="utf-8", newline="\n").write(res); print("wrote", a.out)
    else: sys.stdout.write(res)

if __name__ == "__main__":
    main()
