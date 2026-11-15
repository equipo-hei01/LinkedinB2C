#!/usr/bin/env node
// carrusel.js · linkedin-agent-b2b
// Arma un carrusel limpio y oxigenado desde un JSON y lo exporta:
//   LinkedIn  -> carrusel.pdf (1080x1350, una página por lámina)
//   Instagram -> png/01.png, 02.png ... (1080x1350)
// Uso:
//   node carrusel.js carrusel.json [carpeta-salida] [--solo-html] [--png]
// Requiere Node y Playwright (npm install playwright && npx playwright
// install chromium). Sin Playwright,
// deja carrusel.html: ábrelo en Chrome > Imprimir > Guardar como PDF,
// márgenes "Ninguno", con "Gráficos de fondo" activado.
//
// Dos temas: "empresa" (página: nombre de la marca y logo) y "persona"
// (perfil: iniciales o foto y nombre del usuario). Los colores, el nombre, las
// iniciales, el logo y la foto vienen del JSON, en "identidad" (los campos de
// la sección "Identidad visual" de marca.md) y "autor". Sin esos datos usa
// valores neutros: fondo oscuro, texto blanco y un acento.
//
// Firma visual:
//   - fondos que se intercalan (oscuro, claro, acento) con "ritmo"
//   - palabra clave en Playfair cursiva de acento (o degradado / subrayado)
//   - número de paso grande y fantasma, etiqueta con punto de acento
//   - barra de progreso por segmentos en el pie
//   - "puente": una forma que empieza en una lámina y termina en la siguiente
//   - "panorama": una misma imagen partida en dos láminas seguidas

const fs = require('fs');
const path = require('path');

const W = 1080, H = 1350;

// ---------- colores: de la identidad del JSON a una paleta por fondo ----------
const NEUTRO = { color_fondo: '#111318', color_texto: '#FFFFFF', color_acento: '#3B82F6' };

const hex = (h, respaldo) => {
  let s = String(h || '').trim().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/i.test(s)) s = s.split('').map((x) => x + x).join('');
  if (!/^[0-9a-f]{6}$/i.test(s)) return respaldo ? hex(respaldo) : null;
  return [0, 2, 4].map((k) => parseInt(s.slice(k, k + 2), 16));
};
const aHex = (c) => '#' + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('').toUpperCase();
const mezcla = (a, b, t) => a.map((v, k) => v + (b[k] - v) * t); // t = cuánto de b
const luz = (c) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
const rgba = (c, a) => `rgba(${c.map(Math.round).join(',')},${a})`;

// identidad: { color_fondo, color_texto, color_acento, color_acento2 } (marca.md, "Identidad visual")
function paletas(identidad, temaNombre) {
  const id = identidad || {};
  let a = hex(id.color_fondo, NEUTRO.color_fondo), b = hex(id.color_texto, NEUTRO.color_texto);
  if (Math.abs(luz(a) - luz(b)) < 0.35) b = luz(a) < 0.5 ? [255, 255, 255] : [17, 19, 24]; // sin contraste: texto legible
  const oscuro = luz(a) <= luz(b) ? a : b, claro = luz(a) <= luz(b) ? b : a;
  const acento = hex(id.color_acento, NEUTRO.color_acento);
  const acento2 = hex(id.color_acento2) || acento;
  const base = (fondo, texto) => ({
    fondo: aHex(fondo), capa: aHex(mezcla(fondo, texto, 0.07)), borde: aHex(mezcla(fondo, texto, 0.16)),
    texto: aHex(texto), suave: aHex(mezcla(fondo, texto, 0.78)), gris: aHex(mezcla(fondo, texto, 0.5)),
    acento: aHex(acento), acento2: aHex(acento2), puntos: rgba(texto, 0.08),
  });
  // la lámina de acento: en "persona" usa el segundo acento si lo hay; en "empresa", el principal
  const fa = temaNombre === 'persona' ? acento2 : acento;
  const ta = luz(fa) > 0.5 ? oscuro : claro; // el texto que mejor se lee sobre el acento
  const otro = ta; // sobre el acento, la palabra clave va en el color del texto para que se lea
  return {
    oscuro: { ...base(oscuro, claro), tarjeta: aHex(acento), tarjetaTexto: aHex(luz(acento) > 0.5 ? oscuro : claro) },
    claro: { ...base(claro, oscuro), tarjeta: aHex(oscuro), tarjetaTexto: aHex(claro) },
    acento: { ...base(fa, ta), acento: aHex(otro), acento2: aHex(otro), tarjeta: aHex(ta), tarjetaTexto: aHex(fa), puntos: rgba(ta, 0.10) },
  };
}

// tema: "empresa" o "persona". Cualquier otro valor (JSON antiguos) se trata como "empresa".
const temaDe = (d) => (d.tema === 'persona' ? 'persona' : 'empresa');
const marcaDe = (d) => (d.marca === 'persona' || d.marca === 'empresa' ? d.marca : temaDe(d));
const inicialesDe = (d) => String(d.identidad?.iniciales || (d.autor?.nombre || '').split(/\s+/).filter(Boolean).map((p) => p[0]).join('').slice(0, 2) || '·').toUpperCase();

// ---------- íconos de línea (24x24) ----------
const ICONOS = {
  tendencia: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  diana: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  lupa: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  idea: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
  pregunta: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>',
  grafico: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  libro: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2z"/><path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>',
  personas: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 5.5 5.8"/>',
  escudo: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/>',
  ruta: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7"/>',
  alerta: '<path d="M12 3l10 18H2z"/><path d="M12 10v5"/><circle cx="12" cy="18" r=".6" fill="currentColor"/>',
  reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  guardar: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  estrella: '<path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" fill="currentColor" stroke="none"/>',
};
const icono = (n, s = 40) => {
  const p = ICONOS[n] || ICONOS.idea;
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
};

// ---------- texto ----------
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// *palabra* -> acento ; **texto** -> negrita ; [variable] -> resaltado (solo en prompt)
const fmt = (s, { variables = false } = {}) => {
  let t = esc(s);
  t = t.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  t = t.replace(/\*(.+?)\*/g, '<span class="ac">$1</span>');
  if (variables) t = t.replace(/\[(.+?)\]/g, '<span class="var">$1</span>');
  return t.replace(/\n/g, '<br>');
};

// marca del pie y de la portada: "persona" = iniciales + nombre; "empresa" = logo (o punto) + nombre
const nombreDe = (d) => fmt(d.autor?.nombre_marcado || d.autor?.nombre || (marcaDe(d) === 'persona' ? 'Tu nombre' : 'Tu marca'));
const marca = (d) => marcaDe(d) === 'persona'
  ? `<div class="marca"><span class="ini">${esc(inicialesDe(d))}</span><span>${nombreDe(d)}</span></div>`
  : `<div class="marca">${d.identidad?.logo ? `<img class="logo" src="${esc(d.identidad.logo)}">` : '<span class="punto"></span>'}<span>${nombreDe(d)}</span></div>`;

// círculo del cierre: foto; si no, logo (empresa) o iniciales
const retrato = (d) => {
  const foto = d.autor?.foto || (marcaDe(d) === 'persona' ? d.identidad?.foto : null);
  if (foto) return `<img class="foto" src="${esc(foto)}">`;
  if (marcaDe(d) === 'empresa' && d.identidad?.logo) return `<div class="foto ini-g logo-g"><img src="${esc(d.identidad.logo)}"></div>`;
  return `<div class="foto ini-g">${esc(inicialesDe(d))}</div>`;
};

// etiqueta: punto o ícono + texto espaciado
const cabecera = (s) => s.etiqueta ? `
  <div class="cab">${s.icono ? `<span class="chapa">${icono(s.icono, 34)}</span>` : '<span class="punto"></span>'}<span class="kick">${esc(s.etiqueta)}</span></div>` : '';

// número fantasma: "paso": "01" o true (usa el número de lámina)
const fantasma = (s, i) => {
  if (!s.paso) return '';
  const n = s.paso === true ? String(i + 1).padStart(2, '0') : esc(s.paso);
  return `<div class="fantasma">${n}</div>`;
};

// ---------- tipos de lámina ----------
const TIPOS = {
  portada: (s) => `
    <div class="top">__MARCA__</div>
    <div class="centro portada">
      ${s.etiqueta ? `<div class="kick fuerte"><span class="punto"></span>${esc(s.etiqueta)}</div>` : ''}
      <h1 class="h-xl">${fmt(s.titulo)}${s.titulo_ligero ? `<span class="ligero"><br>${fmt(s.titulo_ligero)}</span>` : ''}</h1>
      ${s.promesa ? `<p class="txt">${fmt(s.promesa)}</p>` : ''}
    </div>
    <div class="desliza"><span>${esc(s.desliza || 'Desliza')}</span><span class="flecha">→</span></div>`,

  idea: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-l">${fmt(s.titulo)}</h2>
      ${s.texto ? `<p class="txt">${fmt(s.texto)}</p>` : ''}
      ${s.fuente ? `<div class="fuente">${esc(s.fuente)}</div>` : ''}
    </div>`,

  contraste: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-m">${fmt(s.titulo)}</h2>
      <div class="par">
        <div class="card antes"><div class="mini">✕ ${esc(s.antes?.etiqueta || 'En vez de')}</div><p>${fmt(s.antes?.texto)}</p></div>
        <div class="card despues"><div class="mini">✓ ${esc(s.despues?.etiqueta || 'Prueba con')}</div><p>${fmt(s.despues?.texto)}</p></div>
      </div>
      ${s.nota ? `<p class="txt nota">${fmt(s.nota)}</p>` : ''}
    </div>`,

  lista: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-l">${fmt(s.titulo)}</h2>
      <ul class="lista">${(s.items || []).map((it) => `
        <li><span class="ico">${icono(it.icono || 'check', 36)}</span><span><b>${esc(it.fuerte || '')}</b>${it.fuerte && it.texto ? ' ' : ''}${fmt(it.texto || '')}</span></li>`).join('')}
      </ul>
      ${s.nota ? `<p class="txt nota">${fmt(s.nota)}</p>` : ''}
    </div>`,

  chips: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-l">${fmt(s.titulo)}</h2>
      ${s.texto ? `<p class="txt">${fmt(s.texto)}</p>` : ''}
      <div class="chips">${(s.chips || []).map((c) => `<span>${esc(c)}</span>`).join('')}</div>
    </div>`,

  frase: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-xl">${fmt(s.titulo)}</h2>
      ${s.texto ? `<p class="txt">${fmt(s.texto)}</p>` : ''}
    </div>`,

  cita: (s) => `${cabecera(s)}
    <div class="centro">
      <div class="comillas">“</div>
      <blockquote>${fmt(s.cita)}</blockquote>
      ${s.autor ? `<div class="fuente">${esc(s.autor)}</div>` : ''}
    </div>`,

  dato: (s) => `${cabecera(s)}
    <div class="centro">
      <div class="numero">${esc(s.numero)}</div>
      <h2 class="h-m">${fmt(s.titulo)}</h2>
      ${s.texto ? `<p class="txt">${fmt(s.texto)}</p>` : ''}
      ${s.fuente ? `<div class="fuente">${esc(s.fuente)}</div>` : ''}
    </div>`,

  prompt: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-l">${fmt(s.titulo)}</h2>
      <div class="term"><div class="barra"><i class="r"></i><i></i><i></i><span class="mini">${esc(s.cabecera || 'Prueba esto')}</span></div>
        <p><span class="prompt-g">›</span> ${fmt(s.prompt, { variables: true })}</p></div>
    </div>`,

  resumen: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-m">${fmt(s.titulo)}</h2>
      <ol class="resumen">${(s.items || []).map((it, i) => `
        <li><span class="n">${String(i + 1).padStart(2, '0')}</span><span>${fmt(it)}</span></li>`).join('')}
      </ol>
    </div>`,

  pregunta: (s) => `${cabecera(s)}
    <div class="centro">
      <h2 class="h-xl">${fmt(s.titulo)}${s.titulo_ligero ? `<span class="ligero"><br>${fmt(s.titulo_ligero)}</span>` : ''}</h2>
      ${s.link ? `<div class="link">${fmt(s.link)}</div>` : ''}
    </div>`,

  // lámina casi sin texto, para que mande la imagen o el panorama
  imagen: (s) => `${cabecera(s)}
    <div class="centro arriba">
      ${s.titulo ? `<h2 class="h-l">${fmt(s.titulo)}</h2>` : ''}
      ${s.texto ? `<p class="txt">${fmt(s.texto)}</p>` : ''}
    </div>`,

  cierre: (s, d) => `
    <div class="cierre-top">
      ${s.etiqueta ? `<div class="kick fuerte"><span class="punto"></span>${esc(s.etiqueta)}</div>` : ''}
      <h2 class="h-l">${fmt(s.titulo)}${s.titulo_ligero ? `<span class="ligero"><br>${fmt(s.titulo_ligero)}</span>` : ''}</h2>
      ${s.cta ? `<div class="cta">${fmt(s.cta)}</div>` : ''}
    </div>
    <div class="firma">
      ${retrato(d)}
      <div><div class="nombre">${nombreDe(d)}</div>
      ${d.autor?.handle ? `<div class="handle">${esc(d.autor.handle)}</div>` : ''}</div>
    </div>`,
};

// ---------- arte incorporado para panoramas (2160x1350, se parte en dos) ----------
const ARTE = {
  estrella: (c) => `<svg width="${2 * W}" height="${H}" viewBox="0 0 ${2 * W} ${H}" fill="none">
    <circle cx="${W}" cy="${H * 0.74}" r="420" stroke="${c.acento}" stroke-width="3" opacity=".55"/>
    <circle cx="${W}" cy="${H * 0.74}" r="600" stroke="${c.acento}" stroke-width="2" opacity=".25"/>
    <ellipse cx="${W}" cy="${H * 0.74}" rx="1000" ry="190" stroke="${c.texto}" stroke-width="2" opacity=".22" transform="rotate(-12 ${W} ${H * 0.74})"/>
    <g transform="translate(${W - 230} ${H * 0.74 - 230}) scale(19.2)"><path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" fill="${c.acento}"/></g>
    <circle cx="${W + 560}" cy="${H * 0.42}" r="14" fill="${c.acento}"/><circle cx="${W - 640}" cy="${H * 0.82}" r="9" fill="${c.texto}" opacity=".5"/>
  </svg>`,
  ondas: (c) => `<svg width="${2 * W}" height="${H}" viewBox="0 0 ${2 * W} ${H}" fill="none">
    ${Array.from({ length: 9 }, (_, k) => `<path d="M-50 ${760 + k * 46} C ${W * 0.5} ${520 + k * 40}, ${W * 1.5} ${1080 + k * 20}, ${2 * W + 50} ${640 + k * 52}" stroke="${k % 3 === 0 ? c.acento : c.texto}" stroke-width="${k % 3 === 0 ? 5 : 2}" opacity="${k % 3 === 0 ? 0.9 : 0.18}"/>`).join('')}
  </svg>`,
};

// ---------- formas puente (empiezan en una lámina, terminan en la siguiente) ----------
const PUENTE = {
  estrella: (c, tam) => `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24"><path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" fill="${c}"/></svg>`,
  circulo: (c, tam) => `<svg width="${tam}" height="${tam}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${c}"/></svg>`,
  anillo: (c, tam) => `<svg width="${tam}" height="${tam}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="none" stroke="${c}" stroke-width="3"/><circle cx="50" cy="50" r="30" fill="none" stroke="${c}" stroke-width="1.5" opacity=".6"/></svg>`,
};

// ---------- estilos ----------
// tipografia: nombre de la fuente de la marca (se intenta cargar de Google Fonts y, si no, se usa la instalada).
// Vacío = Space Grotesk; "del sistema" = la fuente del sistema.
const fuenteDe = (d) => {
  const t = String(d.identidad?.tipografia || '').replace(/["'<>;{}\\]/g, '').trim();
  if (!t) return { pila: `'Space Grotesk', Arial, sans-serif`, extra: '' };
  if (/^(del )?sistema$/i.test(t)) return { pila: `system-ui, -apple-system, 'Segoe UI', Arial, sans-serif`, extra: '' };
  return { pila: `'${t}', 'Space Grotesk', Arial, sans-serif`,
    extra: `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g, '+')}:wght@300;400;500;700&display=swap');\n` };
};

const css = (estiloAcento, fuente) => `
${fuente.extra}@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Special+Elite&family=Playfair+Display:ital,wght@1,500;1,700&display=swap');
@page { size: ${W}px ${H}px; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: #000; }
body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.slide { width:${W}px; height:${H}px; position:relative; overflow:hidden; background:var(--fondo);
  color:var(--texto); font-family:${fuente.pila}; padding:96px 88px 0; page-break-after:always; break-after:page; }
.puntos { position:absolute; inset:0; background-image: radial-gradient(var(--puntos) 1.6px, transparent 1.6px); background-size: 28px 28px; z-index:0; }
.pano { position:absolute; top:0; width:${2 * W}px; height:${H}px; z-index:0; }
.pano img { width:100%; height:100%; object-fit:cover; display:block; }
.velo { position:absolute; inset:0; z-index:1; }
.puente { position:absolute; z-index:1; pointer-events:none; }
.fantasma { position:absolute; right:60px; top:40px; font-size:460px; font-weight:700; line-height:1; letter-spacing:-.06em;
  color:transparent; -webkit-text-stroke:2px var(--borde); z-index:1; }
.kick { font-family:'Special Elite', 'Courier New', monospace; font-size:29px; letter-spacing:.2em; color:var(--gris); text-transform:uppercase; display:flex; align-items:center; gap:18px; }
.kick.fuerte { color:var(--texto); }
.punto { width:16px; height:16px; border-radius:50%; background:var(--acento); display:inline-block; flex:0 0 auto; }
.cab { display:flex; align-items:center; gap:22px; position:relative; z-index:2; }
.chapa { width:76px; height:76px; border-radius:22px; background:var(--acento); color:var(--fondo); display:flex; align-items:center; justify-content:center; transform:rotate(-6deg); }
.centro { position:absolute; left:88px; right:88px; top:220px; bottom:190px; display:flex; flex-direction:column; justify-content:center; gap:40px; z-index:2; }
.centro.portada { top:200px; bottom:250px; gap:44px; }
.centro.arriba { justify-content:flex-start; top:240px; }
h1, h2 { font-weight:700; letter-spacing:-.035em; line-height:1.03; }
.h-xl { font-size:112px; } .h-l { font-size:96px; } .h-m { font-size:78px; }
.ligero { font-weight:300; letter-spacing:-.02em; }
${estiloAcento === 'degradado'
    ? `.ac { background: linear-gradient(90deg, var(--acento), var(--acento2)); -webkit-background-clip:text; background-clip:text; color:transparent; }`
    : estiloAcento === 'subrayado'
      ? `.ac { background: linear-gradient(transparent 62%, var(--acento) 62%, var(--acento) 92%, transparent 92%); padding:0 .06em; }`
      : `.ac { font-family:'Playfair Display', Georgia, serif; font-style:italic; font-weight:700; letter-spacing:-.01em; color:var(--acento); }`}
.ligero .ac { font-weight:500; }
.txt { font-size:42px; line-height:1.38; color:var(--suave); font-weight:400; max-width:900px; }
.txt b { color:var(--texto); }
.nota { font-size:40px; }
.fuente { font-family:'Special Elite', monospace; font-size:26px; letter-spacing:.18em; color:var(--gris); text-transform:uppercase; }
.top { position:relative; z-index:2; }
.marca { display:flex; align-items:center; gap:12px; font-weight:700; font-size:40px; letter-spacing:-.02em; color:var(--texto); }
.marca .c, .marca .ac { color:var(--acento); font-family:inherit; font-style:normal; font-weight:inherit; background:none; -webkit-text-fill-color:var(--acento); padding:0; } .marca svg { color:var(--acento); }
.marca .logo { height:50px; width:auto; max-width:220px; object-fit:contain; display:block; }
.pie .marca .logo { height:40px; }
.logo-g { background:var(--capa); overflow:hidden; } .logo-g img { width:64%; height:64%; object-fit:contain; }
.marca .ini { width:50px; height:50px; border-radius:14px; background:var(--acento); color:var(--fondo); display:flex; align-items:center; justify-content:center; font-size:23px; }
.pie { position:absolute; left:88px; right:88px; bottom:72px; display:flex; justify-content:space-between; align-items:center; z-index:3; }
.pie .marca { font-size:31px; } .pie .marca .ini { width:40px; height:40px; font-size:18px; border-radius:11px; }
.progreso { display:flex; gap:8px; align-items:center; }
.progreso i { width:22px; height:6px; border-radius:3px; background:var(--borde); display:block; }
.progreso i.hecho { background:var(--gris); opacity:.6; } .progreso i.ahora { width:56px; background:var(--acento); opacity:1; }
.desliza { position:absolute; left:88px; bottom:92px; z-index:3; display:flex; align-items:center; gap:18px;
  font-family:'Special Elite', monospace; font-size:30px; letter-spacing:.2em; text-transform:uppercase; color:var(--texto); }
.desliza .flecha { width:64px; height:64px; border-radius:50%; background:var(--acento); color:var(--fondo); display:flex; align-items:center; justify-content:center; font-family:'Space Grotesk', Arial, sans-serif; font-size:34px; letter-spacing:0; }
.par { display:flex; flex-direction:column; gap:18px; }
.card { border-radius:30px; padding:38px 44px; }
.card p { font-size:42px; line-height:1.32; margin-top:16px; }
.mini { font-family:'Special Elite', monospace; font-size:26px; letter-spacing:.18em; text-transform:uppercase; }
.antes { background:var(--capa); } .antes .mini { color:var(--gris); } .antes p { color:var(--suave); font-weight:300; text-decoration: line-through; text-decoration-color: var(--gris); text-decoration-thickness:2px; }
.despues { background:var(--tarjeta); color:var(--tarjetaTexto); } .despues p { font-weight:700; }
.lista { list-style:none; display:flex; flex-direction:column; gap:32px; }
.lista li { display:flex; gap:26px; font-size:42px; line-height:1.3; color:var(--suave); }
.lista li b { color:var(--texto); } .lista .ico { color:var(--acento); flex:0 0 auto; margin-top:4px; }
.chips { display:flex; flex-wrap:wrap; gap:18px; }
.chips span { background:var(--capa); border-radius:999px; padding:20px 34px; font-family:'Special Elite', monospace; font-size:29px; letter-spacing:.12em; text-transform:uppercase; color:var(--texto); }
.chips span:first-child { background:var(--acento); color:var(--fondo); }
.comillas { font-family:'Playfair Display', serif; font-size:220px; line-height:.6; color:var(--acento); height:96px; }
blockquote { font-family:'Playfair Display', serif; font-style:italic; font-size:68px; line-height:1.2; font-weight:500; }
blockquote .ac { font-weight:700; }
.numero { font-size:250px; font-weight:700; letter-spacing:-.05em; line-height:.9; color:var(--acento); }
.term { background:var(--capa); border-radius:30px; overflow:hidden; }
.term .barra { display:flex; align-items:center; gap:14px; padding:26px 34px; border-bottom:2px solid var(--borde); color:var(--gris); }
.term .barra i { width:20px; height:20px; border-radius:50%; background:var(--borde); display:inline-block; } .term .barra i.r { background:var(--acento); }
.term .barra .mini { margin-left:14px; }
.term p { font-family:'Courier New', monospace; font-size:36px; line-height:1.55; padding:36px 34px 44px; color:var(--texto); }
.prompt-g { color:var(--acento); font-weight:700; }
.var { background:var(--acento); color:var(--fondo); border-radius:10px; padding:2px 12px; font-weight:700; }
.resumen { list-style:none; display:flex; flex-direction:column; }
.resumen li { display:flex; gap:30px; align-items:baseline; font-size:44px; line-height:1.28; padding:30px 0; border-bottom:2px solid var(--borde); }
.resumen li:last-child { border-bottom:0; }
.resumen .n { font-family:'Playfair Display', serif; font-style:italic; font-weight:700; font-size:48px; color:var(--acento); flex:0 0 74px; }
.link { font-size:44px; font-weight:700; align-self:flex-start; border-bottom:5px solid var(--acento); padding-bottom:8px; }
.cierre-top { position:relative; z-index:2; display:flex; flex-direction:column; gap:34px; min-height:612px; }
.cta { font-size:42px; line-height:1.35; color:var(--suave); max-width:860px; }
.firma { position:relative; margin-top:72px; display:flex; align-items:center; gap:40px; z-index:2; }
.foto { width:220px; height:220px; border-radius:50%; object-fit:cover; background:var(--acento); }
.ini-g { display:flex; align-items:center; justify-content:center; font-size:84px; font-weight:700; color:var(--fondo); }
.nombre { font-size:64px; font-weight:700; letter-spacing:-.03em; }
.nombre .ac { font-family:inherit; font-style:normal; background:none; color:var(--acento); -webkit-text-fill-color:var(--acento); }
.handle { font-family:'Special Elite', monospace; font-size:30px; color:var(--gris); margin-top:10px; letter-spacing:.06em; }
`;

const vars = (c) => Object.entries(c).map(([k, v]) => `--${k}:${v}`).join(';');

function fondoDe(d, s, i) {
  if (s.fondo) return s.fondo;
  const r = d.ritmo || 'alterno';
  if (Array.isArray(r)) return r[i % r.length];
  if (r === 'alterno') return i % 2 === 0 ? 'oscuro' : 'claro';
  return r; // oscuro | claro | acento
}

function construir(d) {
  // compatibilidad: tema "claro" = empresa con ritmo claro
  if (d.tema === 'claro') { d.tema = 'empresa'; d.ritmo = d.ritmo || 'claro'; }
  const tema = paletas(d.identidad, temaDe(d));
  const total = d.slides.length;
  const fondos = d.slides.map((s, i) => fondoDe(d, s, i));

  // panoramas: la lámina con "panorama" muestra la mitad izquierda; la siguiente, la derecha
  const pano = new Array(total).fill(null);
  d.slides.forEach((s, i) => {
    if (s.panorama) { pano[i] = { ...s.panorama, lado: 0, i }; if (i + 1 < total) pano[i + 1] = { ...s.panorama, lado: 1, i }; }
  });
  // puentes: forma centrada en el borde derecho de la lámina i y el izquierdo de la i+1
  const puentes = new Array(total).fill(null).map(() => []);
  d.slides.forEach((s, i) => {
    if (!s.puente || i + 1 >= total) return;
    const p = typeof s.puente === 'string' ? { forma: s.puente } : s.puente;
    puentes[i].push({ ...p, lado: 0 }); puentes[i + 1].push({ ...p, lado: 1 });
  });

  const secciones = d.slides.map((s, i) => {
    const fn = TIPOS[s.tipo];
    if (!fn) throw new Error(`Lámina ${i + 1}: tipo "${s.tipo}" no existe. Tipos: ${Object.keys(TIPOS).join(', ')}`);
    const f = fondos[i];
    const c = { ...(tema[f] || tema.oscuro), ...(d.colores || {}) };
    let capas = '';
    if (s.puntos ?? (s.tipo === 'portada' || s.tipo === 'cierre')) capas += '<div class="puntos"></div>';
    const pz = pano[i];
    if (pz) {
      const left = pz.lado === 0 ? 0 : -W;
      const ps = d.slides[pz.i].panorama;
      const ct = { ...(tema[fondos[pz.i]] || tema.oscuro) };
      const contenido = ps.src ? `<img src="${esc(ps.src)}" style="object-position:${esc(ps.posicion || 'center')}">` : (ARTE[ps.arte || 'estrella'] || ARTE.estrella)(ct);
      capas += `<div class="pano" style="left:${left}px">${contenido}</div>`;
      if (ps.src && ps.velo !== false) {
        const v = ps.velo || 'abajo';
        const dir = { abajo: 'to top', arriba: 'to bottom', izquierda: 'to right', derecha: 'to left' }[v] || 'to top';
        capas += `<div class="velo" style="background:linear-gradient(${dir}, ${c.fondo} 0%, ${c.fondo}cc 30%, transparent 70%)"></div>`;
      }
    }
    for (const p of puentes[i]) {
      const tam = p.tam || 460;
      const top = p.y ?? (H * 0.79 - tam / 2);
      const left = p.lado === 0 ? W - tam / 2 : -tam / 2;
      const color = p.color || (f === 'acento' ? c.texto : c.acento);
      capas += `<div class="puente" style="left:${left}px; top:${top}px">${(PUENTE[p.forma] || PUENTE.estrella)(color, tam)}</div>`;
    }
    capas += fantasma(s, i);
    const html = fn(s, d).replace('__MARCA__', marca(d));
    const sinPie = s.tipo === 'portada' || s.tipo === 'cierre';
    const barras = Array.from({ length: total }, (_, k) => `<i class="${k < i ? 'hecho' : k === i ? 'ahora' : ''}"></i>`).join('');
    const tapaMarca = puentes[i].some((p) => p.lado === 1 && (p.y == null || p.y > H * 0.5));
    const pie = sinPie ? '' : `<div class="pie">${tapaMarca ? '<span></span>' : marca(d)}<div class="progreso" title="${i + 1} / ${total}">${barras}</div></div>`;
    return `<section class="slide f-${f}" data-n="${i + 1}" style="${vars(c)}">${capas}${html}${pie}</section>`;
  });
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(d.titulo || 'Carrusel')}</title><style>${css(d.estilo_acento || 'serif', fuenteDe(d))}</style></head><body>${secciones.join('\n')}</body></html>`;
}

async function main() {
  const args = process.argv.slice(2);
  const soloHtml = args.includes('--solo-html');
  const pos = args.filter((a) => !a.startsWith('--'));
  if (!pos[0]) { console.error('Uso: node carrusel.js carrusel.json [carpeta-salida] [--solo-html] [--png]'); process.exit(1); }
  const entrada = path.resolve(pos[0]);
  const d = JSON.parse(fs.readFileSync(entrada, 'utf8'));
  const salida = path.resolve(pos[1] || path.dirname(entrada));
  fs.mkdirSync(salida, { recursive: true });
  // rutas de imágenes relativas al JSON
  const absol = (r) => (!r || /^(https?:|data:|file:)/.test(r)) ? r : 'file://' + path.resolve(path.dirname(entrada), r).replace(/\\/g, '/');
  if (d.autor?.foto) d.autor.foto = absol(d.autor.foto);
  // logo y foto de la identidad: si la ruta no existe (campo sin llenar), se ignora y quedan el punto o las iniciales
  for (const k of ['logo', 'foto']) {
    const r = d.identidad?.[k];
    if (!r) continue;
    if (/^(https?:|data:|file:)/.test(r)) continue;
    const abs = path.resolve(path.dirname(entrada), r);
    if (fs.existsSync(abs)) d.identidad[k] = 'file://' + abs.replace(/\\/g, '/');
    else { console.log(`Aviso: no se encontró ${k} en "${r}"; se omite.`); delete d.identidad[k]; }
  }
  d.slides.forEach((s) => { if (s.panorama?.src) s.panorama.src = absol(s.panorama.src); });

  const html = construir(d);
  const htmlPath = path.join(salida, 'carrusel.html');
  fs.writeFileSync(htmlPath, html);
  console.log('HTML:', htmlPath);
  if (soloHtml) return;

  let chromium;
  try { ({ chromium } = require('playwright')); } catch {
    console.log('Playwright no está instalado. Abre carrusel.html en Chrome > Imprimir > Guardar como PDF (márgenes: ninguno, gráficos de fondo: sí). Para instalarlo: npm install playwright && npx playwright install chromium.');
    return;
  }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  // revisión: nada se sale de la lámina ni choca con el pie
  const problemas = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('.slide').forEach((sl) => {
      const n = sl.dataset.n, r = sl.getBoundingClientRect();
      const pie = sl.querySelector('.pie');
      const limite = pie ? pie.getBoundingClientRect().top - 24 : r.bottom - 40;
      sl.querySelectorAll('.centro, .cierre-top').forEach((c) => {
        const kids = [...c.children];
        if (!kids.length) return;
        const top = Math.min(...kids.map((k) => k.getBoundingClientRect().top));
        const bot = Math.max(...kids.map((k) => k.getBoundingClientRect().bottom));
        const cab = sl.querySelector('.cab');
        if (cab && top < cab.getBoundingClientRect().bottom + 20) out.push(`Lámina ${n}: el contenido choca con la etiqueta de arriba (sobra texto).`);
        if (bot > limite) out.push(`Lámina ${n}: el contenido choca con el pie o se sale (sobra texto).`);
      });
      const firma = sl.querySelector('.firma');
      if (firma && firma.getBoundingClientRect().bottom > r.bottom - 40) out.push(`Lámina ${n}: la firma del cierre se sale de la lámina (sobra texto en el título o el llamado).`);
      sl.querySelectorAll('.pano img').forEach((im) => {
        if (im.naturalWidth && im.naturalWidth < 2000) out.push(`Lámina ${n}: la imagen del panorama es chica (${im.naturalWidth}px de ancho); usa una de 2160px o más para que no se vea borrosa.`);
        if (!im.naturalWidth) out.push(`Lámina ${n}: no se pudo cargar la imagen del panorama.`);
      });
      sl.querySelectorAll('h1, h2, p, li, blockquote').forEach((e) => {
        if (e.scrollWidth > e.clientWidth + 2) out.push(`Lámina ${n}: una palabra no cabe a lo ancho ("${e.textContent.slice(0, 30)}...").`);
      });
    });
    return [...new Set(out)];
  });

  const red = d.red || 'ambas';
  if (red === 'linkedin' || red === 'ambas') {
    const pdf = path.join(salida, 'carrusel.pdf');
    await page.pdf({ path: pdf, width: `${W}px`, height: `${H}px`, printBackground: true, preferCSSPageSize: true });
    console.log('PDF LinkedIn:', pdf);
  }
  if (red === 'instagram' || red === 'ambas' || args.includes('--png')) {
    const dir = path.join(salida, 'png');
    fs.mkdirSync(dir, { recursive: true });
    const slides = await page.$$('.slide');
    for (let i = 0; i < slides.length; i++) {
      await slides[i].screenshot({ path: path.join(dir, `${String(i + 1).padStart(2, '0')}.png`) });
    }
    console.log(`PNG Instagram: ${slides.length} láminas en ${dir}`);
  }
  await browser.close();
  if (problemas.length) { console.log('\nREVISAR:'); problemas.forEach((p) => console.log(' -', p)); process.exitCode = 2; }
  else console.log('\nRevisión: todo cabe, ningún texto choca con el pie ni con la etiqueta.');
}

main().catch((e) => { console.error(e.message); process.exit(1); });
