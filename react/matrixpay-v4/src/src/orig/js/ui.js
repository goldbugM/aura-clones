let T_pts;
// DOM builders + scroll-scrubbed chapter states. Everything is a pure function of g (scroll units)
// plus a little time-based ambience, so captures at ?g= are deterministic.
import { clamp, sstep, range, lerp } from './gl/util.js';
import { HUBS } from './gl/globe.js';
import { CCY } from './gl/coins.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ease = t => 1 - Math.pow(1 - clamp(t), 3);
const fmt = (n, d = 0) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

// ---------- text splitting ----------
export function splitText() {
  $$('[data-split]').forEach(el => {
    if (el.dataset.done) return; el.dataset.done = 1;
    const mode = el.dataset.split; const txt = el.textContent; el.textContent = '';
    el.setAttribute('aria-label', txt.trim());
    if (mode === 'words') {
      txt.split(/(\s+)/).forEach(w => { if (/^\s+$/.test(w)) el.append(' '); else if (w) { const s = document.createElement('span'); s.className = 'wd'; s.setAttribute('aria-hidden', 'true'); s.textContent = w; el.append(s); } });
    } else {
      txt.split(/(\s+)/).forEach(w => {
        if (/^\s+$/.test(w)) { el.append(' '); return; }
        const word = document.createElement('span'); word.style.display = 'inline-block'; word.style.whiteSpace = 'nowrap'; word.setAttribute('aria-hidden', 'true');
        [...w].forEach(ch => { const s = document.createElement('span'); s.className = 'chr'; s.textContent = ch; word.append(s); });
        el.append(word);
      });
    }
  });
}

// ---------- treasury ----------
const POOLS = [['USD', .38, '#00D996'], ['EUR', .21, '#4CF0B3'], ['SGD', .14, '#9AFFD3'], ['GBP', .11, '#2BAF84'], ['BRL', .09, '#1F7A5E'], ['USDC', .07, '#C9F5E3']];
const PERF = [268, 281, 276, 294, 309, 301, 327, 342, 338, 366, 389, 412.9];
const MONTHS = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
export function buildTreasury() {
  // odometer: $412,906.37
  const odo = $('#odo'); const txt = '412,906'; odo.innerHTML = '';
  const cur = document.createElement('span'); cur.className = 'odo__cur'; cur.textContent = '$'; odo.append(cur);
  const digits = [];
  [...txt].forEach(ch => {
    if (/\d/.test(ch)) { const d = document.createElement('span'); d.className = 'odo__d'; const s = document.createElement('span'); s.className = 'odo__s'; for (let k = 0; k < 30; k++) { const n = document.createElement('span'); n.textContent = k % 10; s.append(n); } d.append(s); odo.append(d); digits.push({ s, v: +ch }); }
    else { const c = document.createElement('span'); c.className = 'odo__c'; c.textContent = ch; odo.append(c); }
  });
  const small = document.createElement('span'); small.className = 'odo__small'; small.textContent = '.37'; odo.append(small);
  // donut
  const svg = $('#donut'); const C = 2 * Math.PI * 48; let acc = 0;
  svg.innerHTML = `<circle cx="60" cy="60" r="48" stroke="rgba(244,248,246,.06)" stroke-width="9" fill="none"/>` + POOLS.map(([k, v, col], i) => { const s = `<circle data-i="${i}" cx="60" cy="60" r="48" stroke="${col}" stroke-dasharray="0 ${C}" stroke-dashoffset="${-acc * C}" />`; acc += v; return s; }).join('');
  $('#legend').innerHTML = POOLS.map(([k, v, col], i) => `<li data-i="${i}"><i style="background:${col}"></i>${k}<b>${Math.round(v * 100)}%</b></li>`).join('');
  const focusPool = i => { $$('#donut circle[data-i]').forEach(c => { c.style.opacity = i < 0 || +c.dataset.i === i ? 1 : .25; c.style.strokeWidth = +c.dataset.i === i ? 12 : 9; }); $$('#legend li').forEach(l => l.classList.toggle('is-on', +l.dataset.i === i)); $('#donutV').textContent = i < 0 ? '6' : Math.round(POOLS[i][1] * 100) + '%'; $('#donutK').textContent = i < 0 ? 'pools' : POOLS[i][0]; };
  $$('#donut circle[data-i]').forEach(c => { c.style.pointerEvents = 'stroke'; c.style.cursor = 'pointer'; c.addEventListener('mouseenter', () => focusPool(+c.dataset.i)); c.addEventListener('mouseleave', () => focusPool(-1)); });
  $$('#legend li').forEach(li => {
    const i0 = +li.dataset.i; li.tabIndex = 0; li.setAttribute('aria-label', `${POOLS[i0][0]} ${Math.round(POOLS[i0][1] * 100)}% of liquidity`);
    li.addEventListener('focus', () => focusPool(i0)); li.addEventListener('blur', () => focusPool(-1));
    li.addEventListener('mouseenter', () => { const i = +li.dataset.i; $$('#donut circle[data-i]').forEach(c => c.style.opacity = +c.dataset.i === i ? 1 : .25); $('#donutV').textContent = Math.round(POOLS[i][1] * 100) + '%'; $('#donutK').textContent = POOLS[i][0]; });
    li.addEventListener('mouseleave', () => { $$('#donut circle[data-i]').forEach(c => c.style.opacity = 1); $('#donutV').textContent = '6'; $('#donutK').textContent = 'pools'; });
  });
  // flow bars (14 days, mirrored)
  const fb = $('#flowbars'); const ins = [5.2, 6.1, 7.4, 5.8, 6.6, 8.2, 7.1, 6.4, 7.9, 8.8, 6.9, 7.6, 9.4, 8.1], outs = [4.1, 3.6, 5.2, 4.4, 3.9, 4.8, 4.2, 5.6, 3.8, 4.5, 4.9, 3.7, 4.6, 4.3];
  fb.innerHTML = `<line x1="0" y1="45" x2="280" y2="45" stroke="rgba(244,248,246,.12)" stroke-width="1" vector-effect="non-scaling-stroke"/>` + ins.map((v, i) => `<rect data-k="in" x="${i * 20 + 4}" width="11" rx="2" fill="#00D996" data-v="${v}"/><rect data-k="out" x="${i * 20 + 4}" width="11" rx="2" fill="rgba(137,154,147,.42)" data-v="${outs[i]}"/>`).join('');
  const fbTip = document.createElement('div'); fbTip.className = 'fb-tip mono'; $('.mod--flow').append(fbTip);
  fbTip.setAttribute('aria-live', 'polite');
  const fbDay = k => { fb._k = k; fbTip.textContent = `Day ${k + 1} · in $${(ins[k] * 1.2).toFixed(1)}k · out $${(outs[k] * 1.1).toFixed(1)}k`; fbTip.style.opacity = 1; $$('#flowbars rect').forEach((rc, j) => rc.style.opacity = Math.floor(j / 2) === k ? 1 : .35); };
  const fbOff = () => { fbTip.style.opacity = 0; $$('#flowbars rect').forEach(rc => rc.style.opacity = 1); };
  fb.addEventListener('mousemove', e => { const r = fb.getBoundingClientRect(); fbDay(Math.max(0, Math.min(13, Math.floor((e.clientX - r.left) / r.width * 14)))); });
  fb.addEventListener('mouseleave', () => { if (document.activeElement !== fb) fbOff(); });
  fb.setAttribute('tabindex', '0'); fb.setAttribute('role', 'img'); fb.removeAttribute('aria-hidden'); fb.setAttribute('aria-label', 'Daily flows over 14 days; use the arrow keys to read each day');
  fb.addEventListener('focus', () => fbDay(fb._k ?? 13)); fb.addEventListener('blur', fbOff);
  fb.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); fbDay(Math.max(0, Math.min(13, (fb._k ?? 13) + (e.key === 'ArrowRight' ? 1 : -1)))); } });
  // performance chart
  const W = 600, H = 200, max = 430, min = 250;
  const pts = PERF.map((v, i) => [i / (PERF.length - 1) * W, H - (v - min) / (max - min) * (H - 18) - 6]); T_pts = pts;
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; const cx = (x0 + x1) / 2; d += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`; }
  const grid = [0, 1, 2, 3].map(k => `<line x1="0" x2="${W}" y1="${20 + k * 52}" y2="${20 + k * 52}" stroke="rgba(244,248,246,.06)" stroke-dasharray="3 6" vector-effect="non-scaling-stroke"/>`).join('');
  $('#perfSvg').innerHTML = `<defs><linearGradient id="pg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#00D996" stop-opacity=".32"/><stop offset="1" stop-color="#00D996" stop-opacity="0"/></linearGradient><clipPath id="pclip"><rect id="pclipR" x="-4" y="-20" width="0" height="260"/></clipPath></defs>${grid}<g clip-path="url(#pclip)"><path d="${d} L${W},${H} L0,${H} Z" fill="url(#pg)"/></g><path id="perfLine" d="${d}" fill="none" stroke="#9AFFD3" stroke-width="2" vector-effect="non-scaling-stroke" clip-path="url(#pclip)"/><circle id="perfDot" r="4.5" fill="#9AFFD3" cx="${pts[11][0]}" cy="${pts[11][1]}"/>`;
  const line = $('#perfLine'); const L = 1;
  const perf = $('#perf'), tip = $('#perfTip');
  const perfAt = i => {
    perf._i = i; tip.style.left = (i / 11 * 100) + '%'; tip.classList.toggle('flip', i > 6); tip.style.setProperty('--ty', (pts[i][1] / H * 100) + '%'); const dl = i ? (PERF[i] / PERF[i - 1] - 1) * 100 : 0; tip.dataset.v = `${MONTHS[i]} · $${PERF[i].toFixed(1)}k · ${i ? (dl >= 0 ? '+' : '−') + Math.abs(dl).toFixed(1) + '% MoM' : 'start'}`;
    $('#perfV').textContent = `${MONTHS[i]} · $${PERF[i].toFixed(1)}k`; perf.classList.add('is-hover');
  };
  const perfOff = () => { $('#perfV').textContent = 'Nov · $412.9k'; perf.classList.remove('is-hover'); };
  perf.addEventListener('mousemove', e => { const r = perf.getBoundingClientRect(); perfAt(Math.round(clamp((e.clientX - r.left) / r.width) * 11)); });
  perf.addEventListener('mouseleave', () => { if (document.activeElement !== perf) perfOff(); });
  perf.tabIndex = 0; perf.setAttribute('aria-label', 'Performance over 12 months; use the arrow keys to read each month'); $('#perfV').setAttribute('aria-live', 'polite');
  perf.addEventListener('focus', () => perfAt(perf._i ?? 11)); perf.addEventListener('blur', perfOff);
  perf.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); perfAt(Math.max(0, Math.min(11, (perf._i ?? 11) + (e.key === 'ArrowRight' ? 1 : -1)))); } });
  return { digits, L, line };
}

// ---------- transfer ----------
export function buildHubs(onSelect) {
  const host = $('#hubs');
  host.innerHTML = HUBS.filter(h => ['nyc', 'lon', 'sgp', 'tyo', 'sao', 'dxb'].includes(h.id)).map(h => `<button class="hub" data-id="${h.id}" data-cursor="View" aria-label="${h.name} — ${h.role}"><span class="hub__l">${h.name}</span></button>`).join('');
  $$('.hub', host).forEach(b => b.addEventListener('click', () => onSelect(b.dataset.id)));
  return Object.fromEntries($$('.hub', host).map(b => [b.dataset.id, b]));
}
export function showHub(id) {
  const h = HUBS.find(x => x.id === id); if (!h) return;
  const card = $('#hubcard'); card.hidden = false;
  $('#hubK').textContent = h.role; $('#hubName').textContent = h.name;
  $('#hubDl').innerHTML = `<dt>24h volume</dt><dd>${h.vol}</dd><dt>Rails</dt><dd>${h.rails}</dd><dt>Latency</dt><dd>${h.lat_ms}</dd><dt>Status</dt><dd style="color:var(--g)">Operational</dd>`;
  $$('.hub').forEach(b => b.classList.toggle('is-sel', b.dataset.id === id));
}

// ---------- intelligence ----------
export const CATS = ['Ops', 'Vendors', 'Infra', 'Payroll', 'Travel', 'Tax', 'Other'];
const W31 = [5.8, 9.1, 7.4, 18.4, 3.3, 2.9, 1.6];
const WEEKS = [[6.2, 9.8, 7.1, 18.4, 3.9, 2.6, 1.9], [7.4, 11.6, 6.6, 18.4, 5.2, 2.2, 2.4], [6.8, 13.7, 7.9, 18.4, 4.1, 3.4, 2.1]];
const ANOM = {
  Ops: ['Ops steady · −3% vs trend', 'No action needed'], Vendors: ['Vendors +18% above trend', 'Flagged · 3 invoices · review suggested'], Infra: ['Infra +9% · GPU reservations', 'Forecast within budget'],
  Payroll: ['Payroll locked · 41 entities', 'Next run in 4 days'], Travel: ['Travel −21% vs last cycle', 'Policy savings $1.1k'], Tax: ['Tax provision +$0.8k', 'Q4 estimate updated'], Other: ['Other spend nominal', '12 merchants · auto-categorised']
};
export function buildIntel(state) {
  $('#bars').innerHTML = CATS.map((c, i) => `<div class="bar" data-i="${i}" tabindex="0" role="button" aria-label="${c}" data-cursor="Inspect"><span class="bar__v"></span><div class="bar__g"></div><div class="bar__f"></div><span class="bar__l" data-s="${['Ops', 'Vend', 'Infra', 'Pay', 'Trav', 'Tax', 'Oth'][i]}">${c}</span></div>`).join('');
  const T = [['Burn rate', [52, 55, 54, 58, 57, 61, 60, 63, 61], '$61.3k/wk'], ['Vendor spend', [8, 9, 9, 10, 11, 10, 12, 13, 13.7], '+18%'], ['Card spend', [14, 13, 13, 12, 12, 11, 11, 10, 10.2], '−21%']];
  $('#trends').innerHTML = T.map(([k, v, val], i) => { const mx = Math.max(...v), mn = Math.min(...v); const d = v.map((y, j) => `${j ? 'L' : 'M'}${(j / (v.length - 1) * 110).toFixed(1)},${(22 - (y - mn) / (mx - mn) * 20).toFixed(1)}`).join(' '); return `<li><span>${k}</span><svg viewBox="0 0 110 24" preserveAspectRatio="none"><path class="tr" d="${d}" fill="none" stroke="${i === 2 ? '#899A93' : '#00D996'}" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg><b style="color:${i === 1 ? 'var(--mint)' : i === 2 ? 'var(--mut)' : 'var(--w)'}">${val}</b></li>`; }).join('');
  $$('#trends .tr').forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p._L = L; });
  const pick = i => { state.cat = i; $('#anoT').textContent = ANOM[CATS[i]][0]; $('#anoS').textContent = ANOM[CATS[i]][1]; state.onCat && state.onCat(i); };
  $$('#bars .bar').forEach(b => { b.addEventListener('click', () => pick(+b.dataset.i)); b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(+b.dataset.i); } }); });
  pick(1);
}

// ---------- liquidity ----------
export function buildFx(onPick) {
  $('#fx').innerHTML = CCY.slice(1).map((c, i) => `<button class="fx__r" role="listitem" data-i="${i + 1}" data-cursor="Select"><span class="fx__c">${c.code}</span><span class="fx__n">${c.name}</span><span class="fx__v" data-rate="${c.rate}">${c.rate.toFixed(c.rate > 20 ? 2 : 4)}</span><span class="fx__d"></span></button>`).join('');
  $$('.fx__r').forEach(b => b.addEventListener('click', () => onPick(+b.dataset.i)));
}
export function showCcy(i, rate) {
  const c = CCY[i]; rate = rate ?? c.rate;
  $('#ccyCode').textContent = c.code; $('#ccyName').textContent = c.name;
  $('#ccyDl').innerHTML = `<dt>Rate vs USD</dt><dd id="ccyRate">${rate.toFixed(c.rate > 20 ? 2 : 4)}</dd><dt>Rail</dt><dd>${c.rail}</dd><dt>Settlement</dt><dd>${c.settle}</dd><dt>24h volume</dt><dd>${c.vol}</dd><dt>Balance</dt><dd>${c.bal}</dd>`;
  $$('.fx__r').forEach(b => b.setAttribute('aria-current', +b.dataset.i === i));
}

// ---------- per-frame chapter update ----------
const setT = (el, s) => { if (el && el._t !== s) { el.style.transform = s; el._t = s; } };
const setO = (el, o) => { if (el && el._o !== o) { el.style.opacity = o; el._o = o; } };
const clip = (el, a, b) => { const s = `inset(${(a * 100).toFixed(2)}% 0% ${(b * 100).toFixed(2)}% 0%)`; if (el._c !== s) { el.style.clipPath = s; el._c = s; } };

// chars rise through masks; p in [0..1] in, q in [0..1] out
// A heading's letters rise in once the scroll passes its cue (p, its entry progress) and leave upward after its exit cue
// (q), playing over time from there: a reader who stops part way never leaves a word half risen or cut by its mask.
// Scrolling back plays them back the way they came; the cues have a little hysteresis so a rest on one never flickers.
const RV_REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('rm');
const rvInstant = () => RV_REDUCED || document.documentElement.classList.contains('static');   // the static page shows everything finished
// st holds a reveal's clock: it runs up to `total` s once p (the entry cue's progress) passes .3 and back down once q (the
// exit's) passes .5, with a little hysteresis; side says whether its hidden state is below (1) or above (-1)
function cueStep(st, p, q, total) {
  const now = performance.now(), dt = Math.min(.1, Math.max(0, (now - st.t) / 1000)); st.t = now;
  if (st.show ? p < .12 : p > .3) st.show = !st.show;
  if (st.out ? q < .3 : q > .5) st.out = !st.out;
  const want = !st.show ? 1 : (st.out ? -1 : 0);
  if (want === 0) st.k = Math.min(total, st.k + dt);
  else if (st.side !== want && st.k > 0) st.k = Math.min(total, st.k + dt);   // finish arriving before leaving the other way
  else { st.side = want; st.k = Math.max(0, st.k - dt * 1.25); }
  if (st.k >= total && want !== 0) st.side = want;
  if (rvInstant()) { st.k = want === 0 ? total : 0; st.side = want || st.side; }
  return st.k;
}
const newCue = () => ({ k: 0, side: 1, show: false, out: false, t: performance.now() });
export function charsInOut(root, p, q, stag = .035, dir = 1) {
  const ch = root._chr || (root._chr = $$('.chr, .wd', root)); const n = ch.length;
  const st = root._rv || (root._rv = newCue());
  const D = .55, S = Math.min(.045, stag * .9), total = D + S * (n - 1);
  cueStep(st, p, q, total);
  const off = st.side > 0 ? 135 * dir : -140;
  ch.forEach((c, i) => { const a = ease(clamp((st.k - i * S) / D)); setT(c, `translate3d(0,${((1 - a) * off).toFixed(2)}%,0)`); });
}

export function updateTreasury(g, T, mobile) {
  charsInOut($('#treTitle .line:first-child'), range(3.9, 4.35, g), range(6.55, 6.95, g));
  charsInOut($('#treTitle .line:last-child'), range(4.0, 4.45, g), range(6.6, 7.0, g));
  setO($('#c-treasury .sec-head__idx'), sstep(3.9, 4.2, g) * (1 - sstep(6.6, 6.9, g)));
  const tre = $('#tre');
  const hero = tre._hero || (tre._hero = $('.tre__hero', tre)); const mods = tre._mods || (tre._mods = $$('.mod', tre));
  const box = tre._box || (tre._box = $('.tre__mods', tre));
  // the dashboard plays in over ~1.3 s once the scroll reaches it (and back out after), so a rest part way through never
  // leaves a chart half drawn: summary, then liquidity, flows and the performance line
  const k = cueStep(T.rv || (T.rv = newCue()), range(4.0, 4.3, g), range(6.45, 6.85, g), 1.3);
  const at = (a, d) => ease(clamp((k - a) / d));
  clip(hero, 1 - at(0, .5), 0);
  setO(box, at(.05, .35));
  mods.forEach((c, i) => clip(c, 1 - at(.1 + i * .09, .45), 0));
  // phones: the stacked summary, liquidity, flows and performance scroll up under the heading as the chapter passes
  if (mobile) {
    const head = tre._head || (tre._head = $('#c-treasury .sec-head'));
    if (!tre._ovN || --tre._ovN <= 0) { tre._ovN = 30; tre._ov = Math.max(0, tre.offsetTop + tre.offsetHeight + 22 - innerHeight); }
    const y = (-tre._ov * ease(range(4.55, 6.1, g))).toFixed(1); setT(tre, `translate3d(0,${y}px,0)`); setT(head, `translate3d(0,${y}px,0)`);
  }
  // odometer
  const op = at(.12, .7);
  T.digits.forEach((d, i) => { const p = ease(clamp(op * 1.35 - i * .06)); const v = (20 + d.v) * p; setT(d.s, `translate3d(0,${(-v).toFixed(3)}em,0)`); });
  // hold beat: the AI rebalance executes and the captured yield ticks the total up ($412,906 -> $413,218)
  const beat = sstep(5.35, 5.9, g) > .5;
  if (T.beat !== beat) { T.beat = beat; const tgt = beat ? '413,218' : '412,906'; let j = 0; [...tgt].forEach(ch => { if (/\d/.test(ch)) { T.digits[j].v = +ch; j++; } }); $('#odo').setAttribute('aria-label', '$' + tgt + '.37');
    $('#yieldChip').classList.toggle('is-on', beat); $('#treSync').textContent = beat ? 'Synced just now' : 'Synced 8s ago'; }
  $('#odo').classList.toggle('odo--live', op >= 1);
  if (op >= 1) T.digits.forEach(d => setT(d.s, `translate3d(0,${(-(T.beat ? (d.v + 10) : (20 + d.v))).toFixed(3)}em,0)`));
  // donut segments
  let acc = 0; const C = 2 * Math.PI * 48; const dp = at(.25, .7);
  $$('#donut circle[data-i]').forEach((c, i) => { const len = Math.max(0, POOLS[i][1] * C * dp - 2.5); c.setAttribute('stroke-dasharray', `${len} ${C}`); c.setAttribute('stroke-dashoffset', -acc * C * dp); acc += POOLS[i][1]; });
  // flow bars
  const fp = at(.32, .65);
  $$('#flowbars rect').forEach((r, i) => { const j = Math.floor(i / 2); const v = +r.dataset.v * ease(clamp(fp * 1.5 - j * .035)) * 4.4; if (r.dataset.k === 'in') { r.setAttribute('y', 45 - v); r.setAttribute('height', v); } else { r.setAttribute('y', 46); r.setAttribute('height', v); } });
  // performance line
  const pp = at(.42, .85);
  const cr = $('#pclipR'); if (cr) cr.setAttribute('width', 610 * pp);
  setO($('#perfDot'), sstep(.92, 1, pp));
  // count-ups
  const cp = at(.3, .6);
  $$('#c-treasury [data-count]').forEach(el => { const tgt = +el.dataset.count; const dec = +(el.dataset.dec || 0); el.textContent = (el.dataset.prefix || '') + fmt(tgt * cp, dec); });
}

export function updateIntel(g, st, mobile) {
  charsInOut($('#inTitle .line:first-child'), range(11.0, 11.5, g), range(12.95, 13.3, g));
  const nw = $('#numbersWord');
  charsInOut($('#inThe'), range(11.15, 11.6, g), range(12.95, 13.3, g));
  charsInOut(nw, range(11.2, 11.7, g), 0);
  setO(nw, 1 - sstep(13.22, 13.3, g));
  const dc = $('#depthCap'); const dp = range(13.35, 14.15, g); const dv = Math.sin(Math.PI * dp); setO(dc, +(dp < .5 ? Math.pow(dv, .7) : Math.pow(dv, 1.8)).toFixed(3)); setT(dc, `translate3d(0,${((.5 - dp) * 30 - Math.max(0, dp - .5) * 90).toFixed(1)}px,0)`); dc.style.filter = dp < .5 ? `blur(${((1 - dv) * 6).toFixed(2)}px)` : 'none';
  setO($('#c-intel .sec-head__idx'), sstep(11, 11.3, g) * (1 - sstep(12.95, 13.2, g)));
  const intel = $('#intel');
  clip(intel, 1 - sstep(11.35, 11.85, g), sstep(12.85, 13.2, g));
  // scroll-controlled data transitions across three weeks
  const f = sstep(11.9, 12.1, g) + sstep(12.5, 12.7, g);
  const i0 = Math.min(1, Math.floor(f)), t = f - i0;
  const vals = WEEKS[i0].map((v, k) => lerp(v, WEEKS[i0 + 1][k], t));
  const grow = ease(range(11.5, 12.0, g));
  const bars = intel._bars || (intel._bars = $$('.bar', intel));
  // ghost bars: the previous week, filled and offset behind each bar
  const PREV = [W31, WEEKS[0], WEEKS[1]], gp = sstep(11.75, 12.05, g);
  bars.forEach((b, k) => { b.style.setProperty('--p', (lerp(PREV[i0][k], PREV[i0 + 1][k], t) / 20 * grow).toFixed(4)); b.style.setProperty('--ga', gp.toFixed(3)); });
  bars.forEach((b, k) => { b.style.setProperty('--h', (vals[k] / 20 * grow).toFixed(4)); b.querySelector('.bar__v').textContent = '$' + fmt(vals[k] * 1000); b.classList.toggle('is-dim', st.cat !== undefined && st.cat !== k); b.classList.toggle('is-sel', st.cat === k); });
  const total = vals.reduce((a, b) => a + b, 0) * 1000 * (61307 / 52000);
  $$('#trends .tr').forEach((p, k) => { p.style.strokeDashoffset = p._L * (1 - ease(range(11.55 + k * .08, 12.0 + k * .08, g))); });
  $('#outNum').textContent = '$' + fmt(total * grow);
  const wk = Math.round(f);
  if (st.wk !== wk) { st.wk = wk; $('#wkLabel').textContent = 'Week ' + (32 + wk); $$('.seg button').forEach(b => b.setAttribute('aria-selected', +b.dataset.wk === wk)); $('#outDelta').textContent = ['+3.1% vs last week', '+8.6% vs last week', '−2.4% vs last week'][wk]; $('#lgCur').textContent = 'W' + (32 + wk); $('#lgPrev').textContent = 'W' + (31 + wk); }
}

export function updateVault(g) {
  charsInOut($('#vaTitle .line:first-child'), range(14.55, 15.05, g), range(17.4, 17.8, g));
  charsInOut($('#vaTitle .line:last-child'), range(14.75, 15.2, g), range(17.45, 17.85, g));
  setO($('#c-vault .sec-head__idx'), sstep(14.55, 14.85, g) * (1 - sstep(17.4, 17.7, g)));
  $$('#specs li').forEach((li, i) => { const a = sstep(15.1 + i * .22, 15.5 + i * .22, g), b = sstep(17.3, 17.6, g); clip(li, 0, 0); setO(li, a * (1 - b)); setT(li, `translate3d(${((1 - a) * 30 - b * 30).toFixed(1)}px,0,0)`); });
  const st = g < 15.4 ? 'Core sealed' : g < 16.4 ? 'Unsealing · shards verified 3/5' : g < 17.5 ? 'Vault open · core online' : 'Encrypting connections';
  const el = $('#vaultStateT'); if (el.textContent !== st) el.textContent = st;
  setO($('#vaultState'), sstep(14.8, 15.1, g) * (1 - sstep(17.8, 18.05, g)));
  setO($('#c-vault .certs'), sstep(15.6, 16.0, g) * (1 - sstep(17.3, 17.6, g)));
}

export function updateLiquidity(g, mobile) {
  charsInOut($('#liTitle .line:first-child'), range(18.95, 19.45, g), range(21.05, 21.4, g));
  charsInOut($('#liTitle .line:last-child'), range(19.1, 19.55, g), range(21.1, 21.45, g));
  setO($('#c-liquidity .sec-head__idx'), sstep(18.95, 19.25, g) * (1 - sstep(21.05, 21.3, g)));
  $$('.fx__r').forEach((r, i) => { const a = sstep(19.2 + i * .06, 19.5 + i * .06, g), b = sstep(21.0, 21.3, g); setO(r, a * (1 - b)); setT(r, `translate3d(0,${((1 - a) * 14).toFixed(1)}px,0)`); });
  const ccy = $('#ccy'); setO(ccy, sstep(19.4, 19.7, g) * (1 - sstep(21.0, 21.3, g)));
  setO($('.fx__h'), sstep(19.15, 19.45, g) * (1 - sstep(21.0, 21.3, g)));
}

// how far the rising footer has covered a piece of the fixed chapter: 0 while its top edge is below the piece, 1 once that edge is 56px above the piece's bottom,
// so a piece the footer will stop over is fully gone at the page end, and one it stops short of keeps its place (offsetTop ignores the transforms set here)
const footCover = (el, footTop) => { const B = el.offsetTop + el.offsetHeight; return sstep(B + 32, B - 56, footTop); };

export function updateFuture(g, footTop = Infinity) {
  $$('#fuTitle .line').forEach((l, i) => charsInOut(l, range(22.15 + i * .12, 22.7 + i * .12, g), 0));
  const em = $('#fuTitle .serif'); setO(em, sstep(22.5, 22.8, g)); setT(em, `translate3d(0,${((1 - sstep(22.5, 22.85, g)) * 40).toFixed(1)}px,0)`);
  // the footer carries the chapter off: each piece fades and drifts up as the footer's top edge reaches it, so nothing sits on the footer's links
  const ti = $('#fuTitle'), kt = footCover(ti, footTop); setO(ti, 1 - kt); setT(ti, `translate3d(0,${(-kt * 28).toFixed(1)}px,0)`);
  const cta = $('#c-future .future__cta'), kc = footCover(cta, footTop);
  setO(cta, sstep(24.2, 24.7, g) * (1 - kc)); setT(cta, `translate3d(-50%,${((1 - sstep(24.2, 24.75, g)) * 30 - kc * 28).toFixed(1)}px,0)`);
}
