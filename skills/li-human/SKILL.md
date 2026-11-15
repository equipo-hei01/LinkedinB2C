---
name: li-human
description: Strip the machine fingerprint out of any draft - em dashes, AI slop words, invisible watermark characters - and score it against a five-check detection panel before it goes out. Use whenever text needs to sound human, when the user says humanize, "does this sound like AI", "remove the em dashes", "de-slop this", "will this get flagged", or before any LinkedIn post, comment, reply or DM is shown to the user.
---

# li-human

Two tools live in this folder and they both actually run. Use them. Do not
eyeball this.

```bash
python3 humanize.py draft.txt --report        # clean it, show what changed
python3 detect.py draft.txt                    # score it, five checks
python3 detect.py before.txt after.txt         # prove the delta
```

Both read `slop.json`, which is the lexicon: 100+ stock words and phrases with
plain-English replacements, 17 invisible character classes, 11 typographic
substitutions, and 11 structural tells. It is meant to be edited. If the user
has a word they always use that the lexicon strips, remove it from the file.

## Spanish edition

The lexicon also carries Spanish entries (families `es-*`): stock connectives
("es importante destacar que", "sin embargo", "asimismo", "en conclusión"),
inflated words ("potenciar", "robusto", "significativo"), hype ("increíble",
"game changer") and general corporate jargon (family `es-jerga`: "sinergias",
"ecosistema", "paradigma", "empoderamiento", "disruptivo", "soluciones
integrales"). Add the "palabras que nunca usa" from `marca.md` to that
family, and remove any word the user does use. Both scripts detect the language of the draft and use only the
Spanish entries for Spanish text and only the English ones for English text.

For Spanish, `detect.py` drops the contractions signal (Spanish has none to
use) and scores VOICE on first and second person instead, with a lower bar
because Spanish drops subject pronouns. Spanish structural tells are flagged
too: "No solo X, sino también Y", "No se trata de X. Se trata de Y.", "X, Y y
Z." triads, "¿Qué opinas?" bait and essay closers.

Do not flag a staged question ("¿El problema? No es la tecnología.") when it
is used once and the voice file (`voz-persona.md` or `voz-empresa.md`) lists
it as part of the user's voice. The same goes for the contrast signature ("No dice X. Dice Y.", "No fue X. Fue Y.", "No se trata de X. Se trata de Y."): the scripts allow it once per post (`allow_once` in `slop.json`) and flag it from the second time on. After the scripts, also apply the
manual rules in `marca.md` (section "Cómo suena") and, by default: max 25
words per sentence, max 1-2 connectives per paragraph, at least one short
sentence per paragraph.

Run the scripts with the full path, from any folder:
`python3 <this skill's base directory>/humanize.py draft.txt --report`.

## What gets fixed automatically

**1. Invisible characters.** Zero-width spaces and joiners, word joiners,
soft hyphens, byte-order marks, Unicode tag characters, non-breaking and
narrow spaces. A keyboard does not produce these. They survive copy-paste,
they are invisible in every editor, and they are the single most mechanical
thing in generated text. `humanize.py` deletes every one, including any
remaining Unicode format character it does not have a name for.

**2. Typography.** Em dash to comma, en dash to hyphen, curly quotes to
straight, ellipsis to three dots, bullet character to hyphen. The em dash pass
is the one that matters: it collapses ` — ` to `, ` and then cleans up the
double punctuation that leaves behind.

**3. The slop lexicon.** delve, leverage, robust, seamless, crucial, tapestry,
testament to, moreover, "in today's fast-paced world", "let that sink in" and
the rest, each swapped for a plain word, with capitalisation preserved and
URLs left untouched.

## What does NOT get fixed automatically

Structural tells get **flagged, not rewritten**, because changing the shape of
a sentence needs judgement:

- "It's not just X, it's Y" and "not only X but also Y"
- Rule-of-three triads
- Rhetorical one-word question lines: "The result?"
- Rocket, fire, bulb, sparkle and dart emoji
- Hashtag walls
- Reflex engagement bait: "Thoughts?", "Agree?", "Who else?"
- Uniform sentence length and uniform bullet length

That list is your job. Rewrite each flagged line by hand, keeping the meaning,
then re-run `detect.py`. This is the part that moves the score from REVIEW to
PASS, and it is the part a script cannot do.

## The five checks

`detect.py` scores five signals 0-100, higher is more human:

| check | what it measures | machine looks like |
| --- | --- | --- |
| BURSTINESS | sentence-length variation | every sentence the same length |
| SPECIFICITY | numbers, names, concrete markers per 100 words | abstract nouns, no figures |
| SLOP DENSITY | lexicon hits per 100 words | stock vocabulary |
| FINGERPRINT | invisible chars, em dashes, curly quotes per 1k chars | typographically perfect |
| VOICE | contractions, person, structural tells | no contractions, staged reveals |

The verdict weights the mean at 60% and the **weakest single check** at 40%,
because a detector only needs one signal to fire. PASS needs an overall of 70+
with no check below 55.

## Say this honestly

These are five local heuristics modelled on the signals public detectors key
on. They run entirely on the user's machine and nothing is uploaded. They are
**not** GPTZero, Originality, Copyleaks, Winston or Turnitin, they do not call
those APIs, and they cannot promise those verdicts. Fixing what they measure
does tend to move those numbers, because they are measuring the same
underlying things. That is the claim. Do not make a bigger one on the user's
behalf, and do not tell a user their text is undetectable.

## Order of operations

1. `humanize.py draft.txt -o clean.txt --report`
2. Read the structural flags. Rewrite those lines yourself.
3. `detect.py draft.txt clean.txt` to show the before and after.
4. If the verdict is not PASS, fix the weakest check named in the output and
   go again. Two rounds is normal. Five means the draft was written by
   formula, and the fix is a different draft, not more passes.
5. Show the user the cleaned text and the score. Never the score alone.

## Negritas Unicode

Las letras en negrita o cursiva Unicode (𝗮𝗯𝗰, 𝘢𝘣𝘤) no son artefactos de IA y
este humanizador no las borra. Igual, humaniza y puntúa el texto **antes** de
aplicar `li-post/bold.py`: el detector mide mejor el texto plano.
