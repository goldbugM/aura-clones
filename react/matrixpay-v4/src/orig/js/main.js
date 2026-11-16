import { CH, TOTAL } from './gl/world.js';
import { clamp, sstep, range, lerp, Spring } from './gl/util.js';
import { splitText, buildTreasury, buildHubs, showHub, buildIntel, buildFx, showCcy, charsInOut, updateTreasury, updateIntel, updateVault, updateLiquidity, updateFuture } from './ui.js';
import { Icons } from './icons.js';
import { CCY } from './gl/coins.js';
import { Ops } from './ops.js';
import { mountLogo } from './brand.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const qs = new URLSearchParams(location.search);
const html = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || qs.has('rm');
const touch = matchMedia('(pointer: coarse)').matches;
const opts = {
  still: qs.has('still'), reduced, touch,
  mobile: matchMedia('(max-width: 760px)').matches || touch,
  dpr: qs.get('dpr') ? +qs.get('dpr') : null,
};
const captureG = qs.has('g') ? +qs.get('g') : null;
window.__errs = window.__errs || [];
if (touch) html.classList.add('touch');

const MP = window.__mp = { ready: false, frames: 0, fps: 60, g: 0 };

// ---------------------------------------------------------------- loader
const loader = { pct: 0, target: 0, el: $('#loaderPct'), bar: $('#loaderBar') };
function setLoad(p) { loader.target = Math.max(loader.target, p); }
(function tick() { loader.pct += (loader.target - loader.pct) * .12; const v = Math.round(loader.pct * 100); loader.el.textContent = String(v).padStart(3, '0'); loader.bar.style.transform = `scaleX(${loader.pct})`; if (!MP.ready || loader.pct < .995) requestAnimationFrame(tick); })();

function webglOK() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2')); } catch (e) { return false; } }

// ---------------------------------------------------------------- boot
async function boot() {
  splitText();
  mountLogo({ reduced }).then(l => { MP.logo = l; }).catch(e => window.__errs.push('logo ' + (e && e.stack || e)));
  setLoad(.08);
  const img = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
  const [glyphs, land, cardFace, cardChip] = await Promise.all([fetch('assets/data/glyphs.json').then(r => r.json()), fetch('assets/data/land.json').then(r => r.json()),
    img(window.__VFS['assets/brand/card-face.webp']), img(window.__VFS['assets/brand/card-chip.webp'])]);   // the hero card's face and chip, baked from the supplied card (tools/card)
  setLoad(.22);
  await Promise.race([Promise.all([document.fonts.load('600 80px Archivo'), document.fonts.load('500 40px "Geist Mono"'), document.fonts.load('600 40px Geist'), document.fonts.load('italic 40px "Instrument Serif"')]), new Promise(r => setTimeout(r, 2500))]);
  setLoad(.38);
  const icons = new Icons(reduced);
  icons.load().then(() => setLoad(.5));
  const T = buildTreasury();
  const intelState = {}; buildIntel(intelState);
  let selCcy = 1, selCcyManual = -1, selBand = -1;
  const live = CCY.map(c => c.rate);
  buildFx(i => { selCcyManual = i; selBand = band(); selCcy = i; showCcy(i, live[i]); if (stage) stage.coins.sel = i; });
  showCcy(1);
  const hubBtns = buildHubs(id => showHub(id));
  $('#hubcard .hubcard__x').addEventListener('click', () => { $('#hubcard').hidden = true; $$('.hub').forEach(b => b.classList.remove('is-sel')); });

  let stage = null;
  const gl = webglOK() && !qs.has('nogl');
  if (gl) {
    try {
      const { Stage } = await import('./gl/stage.js');
      setLoad(.6);
      stage = new Stage($('#gl'), { glyphs, land, cardFace, cardChip }, opts);
      // the card's moving light, in its own worker; the face is complete without it (still layers only) until it arrives
      import('./gl/cardglow.js').then(({ CardGlow }) => new CardGlow({ reduced, width: opts.mobile ? 448 : 640 }).start())
        .then(cg => { stage.cardGlow = cg; stage.card.setGlow(cg.canvas); }).catch(e => window.__errs.push('card glow ' + (e && e.stack || e)));
      setLoad(.7);
      // the hero's room (baked in Blender, tools/atrium): the gate shows its wireframe, so wait for it
      await stage.atrium.load().catch(e => window.__errs.push('atrium ' + (e && e.stack || e)));
      setLoad(.86);
      if (qs.has('light')) stage.light.forced = qs.get('light').split(',').map(Number);   // capture: the cursor's lamp pinned at x,y (CSS px)
      stage.update(captureG ?? 0, 0, .016); stage.render(); // compile
      setLoad(.95);
    } catch (e) { console.error(e); stage = null; }
  }
  if (!stage) html.classList.add('static'); else html.classList.add('gl');
  if (!stage) {
    // static fallback: render every chapter in its finished state once (no scroll scrubbing)
    updateTreasury(5.9, T, false); updateIntel(12.7, intelState, false); updateVault(16.9); updateLiquidity(20.0, false); updateFuture(25);
    $$('.route__s').forEach(s => s.classList.add('is-on')); $('#route').style.opacity = 1; $('#c-transfer .globe-meta').style.opacity = 1;
    $$('#c-transfer .chr, #c-hero .chr').forEach(c => c.style.transform = 'none');
    $$('#c-transfer .sec-head__idx').forEach(e => e.style.opacity = 1);
    $$('.depth, .hubs, #globeHint, #depthCap').forEach(e => e.style.display = 'none');
  }
  MP.stage = stage;

  // ---------------------------------------------------------------- scroll
  const sizer = $('#sizer');
  let unit = 1, vh = innerHeight;
  // the operating layer sits between the hero and Treasury: the scroll holds the scene at G_OPS (the hero's last line has
  // gone, Treasury's title has not begun) while the section (a fixed overlay) is carried up through the viewport, then the
  // journey resumes. F = the held span in px.
  const G_OPS = 3.8;
  let F = 0, ops = null; const footEl = $('#foot');
  // the hero is pinned the same way: for its first FH px the scene holds at g 0 while the scroll carries the sculpture
  // through its seven forms (a hold H0 on the first, then per form a change HM and a hold HH, in viewport units); then
  // the journey releases into the card hand-off as before
  const HN = 7, H0 = .42, HM = .62, HH = .4, HSPAN = H0 + (HN - 1) * (HM + HH);
  let FH = 0;
  const gRest = y => y <= G_OPS * unit ? y / unit : (y <= G_OPS * unit + F ? G_OPS : G_OPS + (y - G_OPS * unit - F) / unit);
  const gOf = y => y <= FH ? 0 : gRest(y - FH);
  const yOf = g => g <= 0 ? 0 : FH + (g <= G_OPS ? g * unit : g * unit + F);
  // the form position (0..6) at scroll y, and back: an integer holds a form, a fraction is part way through a change
  const heroPosOf = y => { const u = Math.max(0, y) / unit - H0; if (u <= 0) return 0; const k = Math.min(HN - 2, Math.floor(u / (HM + HH))); return Math.min(HN - 1, k + Math.min(1, (u - k * (HM + HH)) / HM)); };
  const heroYOf = pos => { pos = clamp(pos, 0, HN - 1); if (pos <= 0) return 0; const k = Math.ceil(pos) - 1, f = pos - k;
    return (H0 + k * (HM + HH) + (f >= 1 ? HM + HH * .5 : f * HM)) * unit; };   // a whole form lands mid-hold
  const layout = () => {
    vh = innerHeight; unit = vh * (opts.mobile ? .82 : 1);
    F = stage && ops ? ops.height() + vh : 0;
    FH = stage ? Math.round(HSPAN * unit) : 0;
    sizer.style.height = stage ? (FH + TOTAL * unit + vh + F) + 'px' : '0px';
    if (stage) { stage.resize(); stage._layoutKey = (stage._layoutKey || 0) + 1; }
  };
  // a relayout (resize, the Systems layer's height) keeps the reader where they were, in the pinned hero too
  const curY = () => lenis ? lenis.scroll : scrollY;
  const keepPlace = fn => { const y = curY(), inHero = stage && y <= FH, hp = heroPosOf(y), g = captureG ?? MP.g; fn(); if (inHero) MP.goY(heroYOf(hp)); else scrollToG(g, true); };
  layout();
  let lenis = null;
  if (stage && !reduced && window.Lenis) {
    lenis = new window.Lenis({ lerp: .085, smoothWheel: true, wheelMultiplier: .9, touchMultiplier: 1.1 });
  }
  history.scrollRestoration = 'manual';
  // (Lenis caches the page height: refresh it, the held span can have just grown the page)
  const scrollToG = (g, immediate) => { const y = yOf(g); if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate: !!immediate, duration: 1.6 }); } else window.scrollTo(0, y); };
  MP.goG = g => { scrollToG(g, true); };
  MP.goY = y => { if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate: true }); } else window.scrollTo(0, y); };
  // the operating layer (a normal-flow section without WebGL, after the hero)
  ops = new Ops({ reduced, touch, mobile: opts.mobile, lenis, icons });
  MP.ops = ops;
  layout();
  // the held span follows the section's height (fonts, viewport); and a scroll target for anything inside it
  if (stage && window.ResizeObserver) { let lastH = ops.height(); new ResizeObserver(() => { const h = ops.height(); if (Math.abs(h - lastH) > 1) { lastH = h; keepPlace(layout); } }).observe(ops.el); }
  MP.opsScrollFor = (sel, align = 'center') => {
    const el = typeof sel === 'string' ? document.querySelector(sel) : sel, r = el.getBoundingClientRect(), o = r.top - ops.el.getBoundingClientRect().top;
    if (!stage) return Math.max(0, scrollY + r.top - (align === 'center' ? (innerHeight - r.height) / 2 : 0));
    const screenTop = (align === 'center' ? (innerHeight - r.height) / 2 : 0) - o;
    return FH + G_OPS * unit + vh - screenTop;
  };
  if (captureG !== null) scrollToG(captureG, true);
  if (captureG !== null) scrollToG(captureG, true); else window.scrollTo(0, 0);
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { keepPlace(layout); ops.layout(); }, 120); });

  // ---------------------------------------------------------------- nav / menu / wipe
  const GOTO = { hero: 0, ops: null, treasury: 5.75, transfer: 8.1, intel: 11.95, vault: 15.6, liquidity: 19.55, future: 24.9 };
  // the operating layer has no g of its own (the scene holds while it passes): land with its top at the viewport's top
  const goChapter = name => name === 'ops' ? MP.goY(MP.opsScrollFor('#c-ops', 'top')) : scrollToG(GOTO[name], true);
  let wiping = false;
  function goto(name) {
    if (!(name in GOTO)) return;
    closeMenu();
    if (!stage) { const el = $(name === 'hero' ? '#c-hero' : name === 'ops' ? '#c-ops' : `[data-ch="${name}"]`); el && el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); return; }
    if (reduced || wiping) { goChapter(name); return; }
    wiping = true;
    const cols = $$('#wipe i');
    gsap.timeline({ onComplete: () => { wiping = false; } })
      .set(cols, { transformOrigin: '50% 100%' })
      .to(cols, { scaleY: 1, duration: .55, ease: 'expo.inOut', stagger: .05 })
      .add(() => goChapter(name))
      .set(cols, { transformOrigin: '50% 0%' }, '+=.08')
      .to(cols, { scaleY: 0, duration: .65, ease: 'expo.inOut', stagger: .05 });
  }
  $$('[data-goto]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); goto(a.dataset.goto); }));
  const menuBtn = $('#menuBtn'), menu = $('#menu');
  function openMenu() { const cur = html.classList.contains('in-ops') ? 'ops' : { treasury: 'treasury', transfer: 'transfer', intel: 'intel', vault: 'vault', liquidity: 'liquidity' }[MP.ch]; $$('.menu__list a', menu).forEach(a => a.classList.toggle('is-current', a.dataset.goto === cur)); $('.nav__menu-t').textContent = 'Close'; html.classList.add('menu-open'); menu.removeAttribute('inert'); menu.setAttribute('aria-hidden', 'false'); menuBtn.setAttribute('aria-expanded', 'true'); lenis && lenis.stop(); $$('.menu__ic', menu).forEach((h, i) => setTimeout(() => icons.play(h), 260 + i * 70)); }
  function closeMenu() { if (!html.classList.contains('menu-open')) return; $('.nav__menu-t').textContent = 'Menu'; html.classList.remove('menu-open'); menu.setAttribute('inert', ''); menu.setAttribute('aria-hidden', 'true'); menuBtn.setAttribute('aria-expanded', 'false'); lenis && lenis.start(); }
  menuBtn.addEventListener('click', () => html.classList.contains('menu-open') ? closeMenu() : openMenu());
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // ---------------------------------------------------------------- access dialog
  const dlg = $('#access');
  $$('[data-open-access]').forEach(b => b.addEventListener('click', () => { closeMenu(); $('#accessDone').hidden = true; $('#accessSubmit').hidden = false; dlg.showModal(); lenis && lenis.stop(); }));
  dlg.addEventListener('close', () => lenis && lenis.start());
  $('#accessForm').addEventListener('submit', e => { if (e.submitter && e.submitter.value === 'cancel') return; e.preventDefault(); const f = e.target; if (!f.reportValidity()) return; $('#accessDone').hidden = false; $('#accessSubmit').hidden = true; });

  // ---------------------------------------------------------------- pointer: cursor, magnetic, picking, drag
  const cur = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2, moved: false };
  const cursor = $('#cursor'), clabel = $('#cursorLabel');
  let drag = null;
  addEventListener('pointermove', e => {
    cur.x = e.clientX; cur.y = e.clientY; if (!cur.moved && e.pointerType === 'mouse') html.classList.add('cursor-on'); cur.moved = true;
    // a finger is followed by the touch listeners below (they keep reporting while the page scrolls)
    if (stage && e.pointerType !== 'touch') stage.setPointer(e.clientX, e.clientY, true, e.pointerType);
    if (drag) { const dx = e.clientX - drag.x; drag.x = e.clientX; stage.globe.drag += dx * .006; }
  }, { passive: true });
  addEventListener('pointerleave', () => stage && stage.setPointer(cur.x, cur.y, false));
  document.documentElement.addEventListener('mouseleave', () => stage && stage.setPointer(cur.x, cur.y, false));
  // touch: passive listeners, so a drag through the particles is still a normal page scroll
  const tp = e => { const t = e.touches[0]; if (t && stage) stage.setPointer(t.clientX, t.clientY, true, 'touch'); };
  addEventListener('touchstart', tp, { passive: true }); addEventListener('touchmove', tp, { passive: true });
  const tl = e => { if (stage && !e.touches.length) stage.setPointer(cur.x, cur.y, false, 'touch'); };
  addEventListener('touchend', tl, { passive: true }); addEventListener('touchcancel', tl, { passive: true });
  addEventListener('pointerdown', e => {
    cursor.classList.add('is-down');
    if (!stage) return;
    const onCanvas = e.target === $('#gl') || e.target === document.body || e.target.closest('.ch') && !e.target.closest('button, a, .intel, .tre, .route, .fx, .ccy, .hubcard');
    if (onCanvas && MP.ch === 'transfer') { drag = { x: e.clientX }; }
  });
  addEventListener('pointerup', () => {
    cursor.classList.remove('is-down');
    if (stage && MP.ch === 'liquidity' && hoverCoin >= 0) { selCcyManual = hoverCoin; selBand = band(); selCcy = hoverCoin; showCcy(hoverCoin, live[hoverCoin]); stage.coins.sel = hoverCoin; }
    drag = null;
  });
  let hoverLabel = '', overUi = false;
  document.addEventListener('mouseover', e => { overUi = !!(e.target.closest && e.target.closest('button, a, input, .hud__label, .nav, .menu, dialog')); });
  document.addEventListener('mouseover', e => { cursor.classList.toggle('is-btn', !!(e.target.closest && e.target.closest('.btn--key, .btn--text, .nav__menu, .access__x'))); const t = e.target.closest && e.target.closest('[data-cursor]'); hoverLabel = t ? t.dataset.cursor : ''; const h = e.target.closest && e.target.closest('button, a, .cell, .bar, .route__s'); if (h) { const ic = h.querySelector('.lottie') || (h.closest('.sec-head__idx') && h.querySelector('.lottie')); if (ic && !h._hov) { h._hov = 1; icons.play(ic); setTimeout(() => h._hov = 0, 900); } } });
  // panels: cursor light + gentle perspective tilt
  $$('.mod, .tre__hero, .route__s, .ccy, .hubcard, .intel__chart').forEach(el => {
    el.classList.add('tilt');
    el.addEventListener('pointermove', e => { if (reduced || touch) return; const r = el.getBoundingClientRect(); const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', (fx * 100).toFixed(1) + '%'); el.style.setProperty('--my', (fy * 100).toFixed(1) + '%');
      el.style.setProperty('--rx', ((.5 - fy) * 3).toFixed(2) + 'deg'); el.style.setProperty('--ry', ((fx - .5) * 4).toFixed(2) + 'deg'); });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });
  // buttons: each key gets its bezel, cap, rolling label and round chip; the nav key a LED
  const ARROW = '<svg viewBox="0 0 16 16"><path d="M2.5 8h10.6M9.2 3.9 13.3 8l-4.1 4.1"/></svg>';
  const lit = (d, k) => d.map(p => `<path class="lit" pathLength="1" style="--k:${k}" d="${p}"/><path class="glint" pathLength="1" style="--k:${k}" d="${p}"/>`).join('');
  // the chip: three concentric circles on the key's round end (the chip r 20, the ring r 14.25, the pad r 8.5, each
  // about 5.75 units inside the last); on hover the light runs round the ring from the back, both ways, and meets at
  // the arrow's tip
  const RING_T = 'M5.75 20A14.25 14.25 0 0 1 34.25 20', RING_B = 'M5.75 20A14.25 14.25 0 0 0 34.25 20';
  const CHIP = `<svg class="btn__trace" viewBox="0 0 40 40"><path class="dim" d="${RING_T}${RING_B}"/>`
    + lit([RING_T, RING_B], 0)
    + '<circle class="pad" cx="20" cy="20" r="8.5"/></svg>';
  const chars = s => [...s].map((c, i) => { const k = c === ' ' ? '\u00a0' : c; return `<span class="btn__ch" style="--i:${i}" data-c="${k}">${k}</span>`; }).join('');
  $$('.btn--primary, .btn--huge, .btn--ghost').forEach(b => {
    const label = b.textContent.replace(/[→\s]+$/, '').trim(), dark = b.classList.contains('btn--ghost');
    b.setAttribute('aria-label', label); b.classList.add('btn--key'); if (dark) b.classList.add('btn--dark');
    b.innerHTML = '<span class="btn__bezel" aria-hidden="true"></span>'
      + `<span class="btn__cap" aria-hidden="true">${dark ? '<i class="btn__flood"></i>' : ''}</span>`
      + (dark ? '<i class="btn__led" aria-hidden="true"></i>' : '')
      + `<span class="btn__label" aria-hidden="true">${chars(label)}</span>`
      + (dark ? '' : `<span class="btn__chip" aria-hidden="true">${CHIP}<span class="btn__arrow">${ARROW}</span></span>`);
    b.addEventListener('pointerdown', e => {
      const cap = b.querySelector('.btn__cap'), r = cap.getBoundingClientRect(), i = document.createElement('i');
      i.className = 'btn__ripple'; i.style.left = (e.clientX - r.left) + 'px'; i.style.top = (e.clientY - r.top) + 'px';
      cap.append(i); setTimeout(() => i.remove(), 900);
    });
  });
  $$('.btn--text').forEach(b => b.insertAdjacentHTML('beforeend', '<svg class="btn__tip" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h10.6M9.2 3.9 13.3 8l-4.1 4.1"/></svg><i class="btn__track" aria-hidden="true"><i class="btn__run"><i></i></i></i>'));
  // magnetic buttons
  $$('.magnetic').forEach(b => {
    b.addEventListener('pointermove', e => { if (reduced || touch) return; const r = b.getBoundingClientRect(); const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2); b.style.transform = `translate3d(${Math.max(-6, Math.min(6, dx * .22)).toFixed(2)}px,${Math.max(-4, Math.min(4, dy * .32)).toFixed(2)}px,0)`; b.style.setProperty('--mx', (e.clientX - r.left) + 'px'); b.style.setProperty('--my', (e.clientY - r.top) + 'px'); b.style.transition = 'transform .15s linear'; });
    b.addEventListener('pointerleave', () => { b.style.transition = 'transform .7s cubic-bezier(.22,1,.36,1)'; b.style.transform = ''; });
  });
  // magnetic typography (hero title + finale title)
  const magChars = () => $$('#heroTitle .chr, #fuTitle .chr');
  let magCache = null;
  function magnet() {
    if (reduced || touch || !cur.moved) return;
    if (!magCache) magCache = magChars().map(c => ({ c, r: null, x: 0, y: 0 }));
    const act = MP.ch === 'hero' && MP.g < .3 || MP.ch === 'future' && MP.g > 22.8;
    magCache.forEach(m => {
      if (!act) { if (m.x || m.y) { m.x = m.y = 0; m.c.style.translate = ''; } return; }
      if (!m.r || MP.frames % 30 === 0) { const r = m.c.getBoundingClientRect(); m.r = [r.left + r.width / 2 - m.x, r.top + r.height / 2 - m.y]; }
      const dx = m.r[0] - cur.x, dy = m.r[1] - cur.y; const d = Math.hypot(dx, dy); const f = Math.pow(Math.max(0, 1 - d / 150), 2);
      const tx = d ? dx / d * f * 16 : 0, ty = d ? dy / d * f * 12 : 0; m.x += (tx - m.x) * .18; m.y += (ty - m.y) * .18;
      m.c.style.translate = `${m.x.toFixed(2)}px ${m.y.toFixed(2)}px`;
    });
  }

  // ---------------------------------------------------------------- toast
  let toasted = false;
  function toast() { if (toasted) return; toasted = true; const t = $('#toast'); t.classList.add('is-on'); icons.play($('.toast__ic')); setTimeout(() => t.classList.remove('is-on'), 4600); }
  $('#topup').addEventListener('click', e => { icons.play(e.currentTarget.querySelector('.lottie')); });
  $$('.seg button').forEach(b => b.addEventListener('click', () => scrollToG([12.15, 12.65, 13.05][+b.dataset.wk] - .05)));
  // route steps are scrubbable: click jumps the camera/pulse to that moment of the transfer
  $$('.route__s').forEach((st, i) => { st.setAttribute('tabindex', '0'); st.setAttribute('role', 'button'); const go = () => scrollToG([8.15, 8.75, 9.4, 10.0][i]); st.addEventListener('click', go); st.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });

  // ---------------------------------------------------------------- chapters
  const chEls = Object.fromEntries($$('.ch').map(el => [el.dataset.ch, el]));
  const ranges = { hero: [-1, 3.9], treasury: [3.85, 7.15], transfer: [7.15, 11.05], intel: [10.95, 14.4], vault: [14.4, 18.15], liquidity: [18.15, 21.6], future: [21.85, 99] };
  const active = {};
  const band = () => { const g = MP.g; return g < 20.2 ? 0 : g < 20.9 ? 1 : 2; };
  const heroLines = $$('#heroTitle > .line');
  const depthT = $$('#c-hero .depth__t'), depthTags = $$('.depth__tag');
  const pickHub = z => stage.particles.hubs.slice(0, 120).filter(h => Math.hypot(h.x, h.y) > 1.5).reduce((b, h) => (Math.abs(h.z - z) < Math.abs(b.z - z) ? h : b));
  const tagHubs = stage ? [-6, -11, -16.5, -22].map(pickHub) : [];
  let velS = 0, lastY = 0, lastT = performance.now();
  const route = $$('.route__s');
  const marquee = $('#vmarquee'), mtrack = $('.vmarquee__track');
  const nav = $('#nav'), navP = $('#navProgress'), navLinks = $$('.nav__links a');
  // the header's three zones never meet: the links (centred on the page) need clear space to the logo and to the actions,
  // or it switches to the compact menu first; on a phone the compact "Open account" folds into the menu if it cannot fit
  const navLogo = $('.nav__logo', nav), navLinksEl = $('.nav__links', nav), navRight = $('.nav__right', nav), navCta = $('.nav__cta', nav), navMenu = $('#menuBtn');
  function navFit() {
    const W = innerWidth, gap = 40;
    if (W > 1100) {
      const lr = navLogo.getBoundingClientRect(), rr = navRight.getBoundingClientRect(), lw = navLinksEl.scrollWidth, cx = W / 2;
      html.classList.toggle('nav-tight', !(cx - lw / 2 >= lr.right + gap && cx + lw / 2 <= rr.left - gap));
    } else html.classList.toggle('nav-tight', false);
    if (W <= 760) {
      const pad = parseFloat(getComputedStyle(nav).paddingLeft) * 2, need = navLogo.getBoundingClientRect().width + navMenu.offsetWidth + 8 + 20;
      const cw = navCta.offsetWidth || navCta._w || 140; navCta._w = cw;   // (folded it measures 0: use its last width)
      html.classList.toggle('nav-fold', need + cw > W - pad);
    } else html.classList.toggle('nav-fold', false);
  }
  navFit(); addEventListener('resize', navFit); document.fonts && document.fonts.ready.then(navFit); setTimeout(navFit, 1500);
  const foot = $('#foot');

  function chapters(g, t, dt) {
    let chName = 'hero';
    for (const [k, [a, b]] of Object.entries(ranges)) {
      const on = g >= a && g < b; const el = chEls[k];
      if (on !== active[k]) { active[k] = on; el.classList.toggle('is-on', on); on ? el.removeAttribute('inert') : el.setAttribute('inert', ''); if (on) $$('.sec-head .lottie, .globe-meta .lottie, .mod-ic', el).forEach((h, i) => setTimeout(() => icons.play(h), 350 + i * 160)); }
      if (on) chName = k;
    }
    MP.ch = chName;
    // hero
    if (active.hero) {
      const out = range(.3, 1.25, g);
      heroLines.forEach((l, i) => { l.style.transform = `translate3d(0,${(-out * (210 - i * 55)).toFixed(1)}px,0)`; l.style.opacity = 1 - sstep(.08, .36, g); });   // one block, gone before the card crosses it
      // scroll exit uses translate/filter so it never fights the GSAP intro (transform/opacity)
      ['.hero__sub', '.hero__cta'].forEach((s, i) => { const el = $(s); el.style.filter = `opacity(${(1 - sstep(.05 + i * .04, .34 + i * .04, g)).toFixed(3)})`; el.style.translate = `0 ${(-out * (90 + i * 30)).toFixed(1)}px`; });
      const st = $('.hero__stats'); st.style.filter = `opacity(${(1 - sstep(.03, .25, g)).toFixed(3)})`; st.style.translate = `0 ${(out * 60).toFixed(1)}px`;
      const win = [[1.15, 1.95], [2.3, 3.05], [2.9, 3.6]];
      depthT.forEach((el, i) => { const p = range(win[i][0], win[i][1], g); const fin = sstep(0, .25, p), fout = 1 - sstep(.72, 1, p); el.style.opacity = (fin * fout).toFixed(3); const s = .86 + fin * .14 + sstep(.72, 1, p) * .06; el.style.transform = `translate3d(0,${((1 - fin) * 26 - sstep(.72, 1, p) * 80).toFixed(1)}px,0) scale(${s.toFixed(3)})`; el.style.filter = p < .25 ? `blur(${((1 - fin) * 4).toFixed(2)}px)` : 'none'; });
      if (stage) {
        // label pills never overprint captions, the nav band or the viewport edge
        const caps = depthT.filter(el => +el.style.opacity > .05).map(el => { const r = el.getBoundingClientRect(); return [r.left - 30, r.top - 24, r.right + 30, r.bottom + 24]; });
        depthTags.forEach((el, i) => { const hb = tagHubs[i]; if (!hb) return; const s = stage.anchor(hb); let vis = (s.z < 1 && s.z > 0) ? sstep(2.4, 2.6, g) * (1 - sstep(3.25, 3.5, g)) : 0;
          const w = el.offsetWidth || 150, h = el.offsetHeight || 26; const x0 = s.x - w / 2, y0 = s.y - h * 1.4, x1 = x0 + w, y1 = y0 + h;
          const gut = Math.min(124, Math.max(20, innerWidth * .076)); if (y0 < 118 || x0 < gut || x1 > innerWidth - gut || y1 > innerHeight - 40 || caps.some(r => x1 > r[0] && x0 < r[2] && y1 > r[1] && y0 < r[3])) vis = 0;
          el._v = (el._v ?? 0) + (vis - (el._v ?? 0)) * .25; el.style.opacity = el._v.toFixed(3); el.style.transform = `translate3d(${s.x.toFixed(1)}px,${s.y.toFixed(1)}px,0) translate(-50%,-140%)`; });
      }
    }
    if (active.treasury) updateTreasury(g, T, opts.mobile);
    if (active.transfer) {
      charsInOut($('#trTitle .line:first-child'), range(7.3, 7.85, g), range(10.3, 10.7, g));
      charsInOut($('#trTitle .line:last-child'), range(7.45, 7.95, g), range(10.35, 10.75, g));
      $('#c-transfer .sec-head__idx').style.opacity = sstep(7.3, 7.6, g) * (1 - sstep(10.3, 10.6, g));
      const k = g < 7.9 ? -1 : g < 8.5 ? 0 : g < 9.1 ? 1 : g < 9.75 ? 2 : 3;
      route.forEach((s, i) => { s.classList.toggle('is-on', i <= k); s.classList.toggle('is-cur', i === k); s.classList.toggle('is-prev', i === k - 1); });
      $('#route').style.opacity = sstep(7.75, 7.95, g) * (1 - sstep(10.3, 10.55, g));
      $('#c-transfer .globe-meta').style.opacity = sstep(7.9, 8.2, g) * (1 - sstep(10.25, 10.5, g));
      $('#globeHint').style.opacity = sstep(8.0, 8.3, g) * (1 - sstep(10.2, 10.4, g));
      const fx = $('#fxRate'); fx.textContent = (1.3194 + Math.sin(t * 1.7) * .0003 * (reduced ? 0 : 1)).toFixed(4);
      if (g > 9.8 && captureG === null) toast();
      if (stage) {
        const hv = sstep(7.85, 8.1, g) * (1 - sstep(10.2, 10.45, g));
        const S = stage.hubScreen();
        if (!chEls.transfer._ex || MP.frames % 60 === 0) chEls.transfer._ex = ['#trTitle', '#c-transfer .sec-head__idx', '#route', '#c-transfer .globe-meta', '#hubcard'].map(q => { const e = $(q); if (!e || e.hidden) return null; const r = e.getBoundingClientRect(); return [r.left - 24, r.top - 18, r.right + 24, r.bottom + 18]; }).filter(Boolean);
        const EX = chEls.transfer._ex;
        { const tr = $('#trTitle').getBoundingClientRect(), d = stage.dpr, H = innerHeight; stage.globe.setExclusion((tr.left - 30) * d, (H - tr.bottom - 26) * d, (tr.right + 30) * d, (H - tr.top + 10) * d); }
        S.forEach(s => { const b = hubBtns[s.id]; if (!b) return; const op = hv * sstep(-.04, .18, s.front); const dp = devicePixelRatio || 1; b.style.transform = `translate3d(${Math.round(s.x * dp) / dp}px,${Math.round(s.y * dp) / dp}px,0)`;   // on the device-pixel grid, so the marker dot stays crisp b.style.opacity = op.toFixed(3); b.classList.toggle('is-back', op < .05); b.classList.toggle('flip', s.x > innerWidth - 150);
          const lx0 = s.x - 16, lx1 = s.x + 140, ly0 = s.y - 14, ly1 = s.y + 14; b.classList.toggle('is-muted', EX.some(r => lx1 > r[0] && lx0 < r[2] && ly1 > r[1] && ly0 < r[3])); });
        if (hubBtns.sgp) hubBtns.sgp.classList.toggle('is-dest', g >= 9.6);   // destination chip fills when the pulse lands
        const hc = $('#hubcard'); if (!hc.hidden) hc.style.opacity = hv;
      }
    } else if (!$('#hubcard').hidden && !active.transfer) { $('#hubcard').hidden = true; }
    if (active.intel) updateIntel(g, intelState, opts.mobile);
    if (active.vault) updateVault(g);
    if (active.liquidity) {
      updateLiquidity(g, opts.mobile);
      const b = band();
      if (selCcyManual >= 0 && b !== selBand) selCcyManual = -1;
      const auto = [1, 3, 5][b];
      const want = selCcyManual >= 0 ? selCcyManual : auto;
      if (want !== selCcy) { selCcy = want; showCcy(want, live[want]); }
      if (stage) stage.coins.sel = selCcy;
      // live-ish rate ticker
      if (MP.frames % 20 === 0) $$('.fx__v').forEach((v, i) => { const base = +v.dataset.rate; const n = base * (1 + Math.sin(t * .7 + i * 1.3) * .0009 * (reduced ? 0 : 1)); live[i + 1] = n; v.textContent = n.toFixed(base > 20 ? 2 : 4); if (i + 1 === selCcy) { const cr = $('#ccyRate'); if (cr) cr.textContent = v.textContent; } const d = v.nextElementSibling; const pct = Math.sin(t * .7 + i * 1.3) * .09 + (i % 3 - 1) * .07; const pr = Math.round(pct * 100) / 100; d.textContent = pr === 0 ? '0.00%' : (pr > 0 ? '+' : '−') + Math.abs(pr).toFixed(2) + '%'; d.style.color = pr === 0 ? 'var(--mut)' : pr > 0 ? 'var(--g)' : 'var(--mut)'; });
    }
    if (active.future) updateFuture(g, foot.getBoundingClientRect().top);
    // typography mask (vault -> liquidity)
    if (stage) {
      const tm = $('#tmask'); const on = g > 18.08 && g < 19.12; tm.style.visibility = on ? 'visible' : 'hidden';
      if (on) {
        const txt = $('#tmaskText'); const appear = sstep(18.2, 18.4, g); const grow = Math.pow(sstep(18.62, 19.08, g), 2.4);
        const s = (.001 + appear * .999) * (1 + grow * 60);
        // zoom toward a point inside the stem of the "N"
        if (!txt._zp || txt._zw !== innerWidth) { txt.removeAttribute('transform'); const e = txt.getExtentOfChar(1); txt._zp = [e.x + e.width * .13, e.y + e.height * .55]; txt._zw = innerWidth; }
        const [zx, zy] = txt._zp;
        txt.setAttribute('transform', `translate(${zx} ${zy}) scale(${s.toFixed(4)}) translate(${-zx} ${-zy})`);
        const st = $('#tmaskStroke'); st.setAttribute('transform', txt.getAttribute('transform')); st.style.opacity = (1 - sstep(18.5, 18.75, g)).toFixed(3);
        tm.style.opacity = 1 - sstep(18.98, 19.1, g);
      }
    }
    // nav
    navP.style.transform = `scaleX(${clamp(curY() / Math.max(1, FH + TOTAL * unit + F)).toFixed(4)})`;
    const map = { ops: 0, treasury: 1, transfer: 2, intel: 3, vault: 4, liquidity: 5 };
    const navCh = html.classList.contains('in-ops') ? 'ops' : chName;   // the operating layer is under the nav
    navLinks.forEach((a, i) => a.classList.toggle('is-active', map[navCh] === i));
    // grid transforms per chapter

    // velocity
    const now = performance.now(); const y = lenis ? lenis.scroll : scrollY; const v = (y - lastY) / Math.max(1, now - lastT) * 16.7; lastY = y; lastT = now;
    velS += (v - velS) * .12; const vc = reduced ? 0 : clamp(velS, -40, 40);
    html.style.setProperty('--vel', vc.toFixed(2)); html.style.setProperty('--vabs', Math.abs(vc).toFixed(2));
    // velocity marquee in chapter seams
    const seam = [4, 7.2, 11, 14.4, 18.4, 22].reduce((m, s) => Math.max(m, 1 - Math.min(1, Math.abs(g - s) / .32)), 0);
    const mo = reduced || ops.active ? 0 : seam * clamp(Math.abs(velS) / 18) * .9;
    marquee.style.opacity = mo.toFixed(3);
    if (mo > .01) mtrack.style.transform = `translate3d(${(-(g * 900) % (mtrack.scrollWidth / 2)).toFixed(1)}px,0,0)`;
    // footer hand-off: hide nav progress when footer is in view
    nav.style.opacity = foot.getBoundingClientRect().top < vh * .5 ? 0 : 1;
    html.classList.toggle('nav-compact', g > .45);
  }

  // ---------------------------------------------------------------- intro
  let introReady = false;
  function introPrep() {
    const L1 = $('.w-financial'), L3 = $('.w-limits'), chars = $$('.w-intel .chr');
    const rest = $$('#c-hero [data-reveal]');
    if (stage) stage.bgDraw = 0;
    gsap.set(L1, { yPercent: 115 }); gsap.set(chars, { yPercent: 110, rotateX: -85, opacity: 0, transformPerspective: 600, transformOrigin: '50% 100%' });
    gsap.set(L3, { yPercent: 110, scaleX: 1.85, '--wd': 125 }); gsap.set(rest, { y: 26, opacity: 0 });
    introReady = true;
  }
  function intro() {
    const L1 = $('.w-financial'), L3 = $('.w-limits'), chars = $$('.w-intel .chr');
    const rest = $$('#c-hero [data-reveal]');
    if (reduced || captureG !== null) { if (stage) { stage.intro = 1; stage.bgDraw = 1; } $$('.hl').forEach(l => l.style.strokeDashoffset = 0); return; }
    if (!introReady) introPrep();
    const tl = gsap.timeline({ delay: .25 });
    tl.to('.hl', { strokeDashoffset: 0, duration: 2.2, ease: 'expo.inOut', stagger: .18 }, 0)
      .to(stage ? stage : {}, { bgDraw: 1, duration: 2.4, ease: 'expo.inOut' }, 0)
      .to(L1, { yPercent: 0, duration: 1.15, ease: 'expo.out' }, .15)
      .to(chars, { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.0, ease: 'expo.out', stagger: .034 }, .38)
      .to(L3, { yPercent: 0, duration: .9, ease: 'expo.out' }, .72)
      .to(L3, { scaleX: 1, '--wd': 100, duration: 1.5, ease: 'elastic.out(1,.62)' }, .82)
      
      .to(rest, { y: 0, opacity: 1, duration: .9, ease: 'expo.out', stagger: .08 }, 1.05);
  }

  // ---------------------------------------------------------------- hero: HUD, gate, start
  // the system the sculpture holds; every "View" goes somewhere on this page
  const SYS = {
    m: { n: '01', tag: 'System 01', kind: 'Core', data: '6 systems · one ledger · 37 ms', title: 'MATRIX OS', sr: 'Matrix OS, the operating layer', go: 'ops', cta: 'View system', a: [1.45, 1.25, .2] },
    coins: { n: '02', tag: 'System 02', kind: 'Treasury', data: '$412.9M managed · +9.73% YTD', title: 'TREASURY', sr: 'Treasury', go: 'treasury', cta: 'View treasury', a: [.55, 1.62, .9] },
    globe: { n: '03', tag: 'System 03', kind: 'Routing', data: '40+ venues · settles in 0.09 s', title: 'TRANSFERS', sr: 'Transfers', go: 'transfer', cta: 'View transfers', a: [1.12, 1.15, .45] },
    crystal: { n: '04', tag: 'System 04', kind: 'Analytics', data: '2.1M signals scored a day', title: 'INSIGHT', sr: 'Insight, spend intelligence', go: 'intel', cta: 'View insight', a: [.85, 1.45, .55] },
    vault: { n: '05', tag: 'System 05', kind: 'Security', data: 'SOC 2 · ISO 27001 · PCI-DSS', title: 'SENTINEL', sr: 'Sentinel, the vault', go: 'vault', cta: 'View security', a: [1.25, 1.3, .3] },
    liquid: { n: '06', tag: 'System 06', kind: 'Liquidity', data: '6 pools · 40+ venues · every market', title: 'LIQUIDITY', sr: 'Liquidity, every market', go: 'liquidity', cta: 'View liquidity', a: [1.2, 1.1, .3] },
    card: { n: '07', tag: 'System 07', kind: 'Issuing', data: 'Metal · contactless · 3-D Secure', title: 'METAL CARD', sr: 'The MatrixPay metal card', go: 'access', cta: 'Get the card', a: [1.55, .95, .1] },
  };
  const GLY = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&$@';
  const SYS_N = Object.keys(SYS).length;
  const hud = {
    el: $('#hud'), title: $('#hudTitle'), line: $('#hudLine'), dot: $('#hudDot'), ring: $('#hudRing'), label: $('#hudLabel'),
    on: false, cur: null, ax: null, ay: 0, tScr: 0, scr: null, born: 0, lastSet: -1e9,
    show() { this.on = true; this.el.classList.add('is-on'); this.set(stage.sculpt.active || 'm', true); },
    set(name, instant) {
      const d = SYS[name]; if (!d || name === this.cur) return; this.cur = name;
      $('#hudTag').textContent = d.tag; $('#hudKind').textContent = d.kind; $('#hudGoT').textContent = d.cta; $('#hudSr').textContent = d.sr; $('#hudN').textContent = d.n; $('#hudPn').textContent = d.n; $('#hudData').textContent = d.data;
      const i = +d.n - 1; $('#hudPrev').setAttribute('aria-disabled', String(i <= 0)); $('#hudNext').setAttribute('aria-disabled', String(i >= SYS_N - 1));
      const now = performance.now(), quick = now - this.lastSet < 380; this.lastSet = now;   // a fast scroll through several forms: no scramble, just the names
      if (instant || reduced || quick) { this.title.textContent = d.title; this.scr = null; this.el.classList.remove('is-draw'); }
      else { this.scr = { to: d.title, t: 0 }; this.el.classList.remove('is-draw'); void this.el.offsetWidth; this.el.classList.add('is-draw'); }
    },
    frame(g, t, dt) {
      const H = stage.hero;
      const vis = this.on ? (1 - sstep(.015, .07, g)) : 0;
      this.el.style.setProperty('--hudA', vis.toFixed(3)); this.el.style.visibility = vis > .01 ? 'visible' : 'hidden';
      // the cursor on the sculpture lights View (the recording's CTA plate), in quickly and out a little faster (CSS)
      const lit = vis > .5 && stage.sculptHover; if (lit !== this.lit) { this.lit = lit; $('#hudGo').classList.toggle('is-lit', lit); }
      if (vis < .01) return;
      // the callout rides the view's pan at 0.82 of it (the recording's HUD), and lifts ~10 px while the cursor rests on it
      this.lift = (this.lift || 0) + ((this.label.matches(':hover') ? -10 : 0) - (this.lift || 0)) * Math.min(1, dt * 6);
      const tx = (stage.heroPan.x * .82).toFixed(1) + 'px', ty = (stage.heroPan.y * .82 + this.lift).toFixed(1) + 'px';
      if (tx !== this.tx || ty !== this.ty) { this.tx = tx; this.ty = ty; this.label.style.translate = `${tx} ${ty}`; }
      // title scramble: blocks, then glyphs, settling left to right
      if (this.scr) { const s = this.scr; s.t += dt; const L = s.to.length; let out = '';
        for (let i = 0; i < L; i++) { const k = (s.t - .1 - i * .045) / .32; out += s.to[i] === ' ' ? ' ' : k >= 1 ? s.to[i] : k < 0 ? '█' : GLY[(Math.random() * GLY.length) | 0]; }
        this.title.textContent = out; if (s.t > .5 + L * .045) { this.title.textContent = s.to; this.scr = null; } }
      // leader: a point on the sculpture's upper right -> elbow -> the label
      const d = SYS[this.cur] || SYS.m; const S = stage.sculpt;
      const w = S.anchorAt(this.cur, S.u.uTime.value);   // a real point of the form (rides its spin)
      const p = stage.anchor(w);
      if (this.ax === null) { this.ax = p.x; this.ay = p.y; } this.ax += (p.x - this.ax) * .12; this.ay += (p.y - this.ay) * .12;
      const lr = this.label.getBoundingClientRect(), tr = this.title.getBoundingClientRect();
      const ly = tr.top + tr.height * .55, lx = lr.left - 14;
      const ex = Math.min(lx - 18, Math.max(this.ax + 24, lx - Math.max(60, (ly < this.ay ? this.ay - ly : 60) * .9))), ey = ly;   // never doubles back across the title
      this.line.setAttribute('points', `${this.ax.toFixed(1)},${this.ay.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${lx.toFixed(1)},${ey.toFixed(1)}`);
      this.dot.setAttribute('cx', this.ax.toFixed(1)); this.dot.setAttribute('cy', this.ay.toFixed(1)); this.ring.setAttribute('cx', this.ax.toFixed(1)); this.ring.setAttribute('cy', this.ay.toFixed(1));
      // the rail: its marker slides with the scroll through the seven forms
      this.el.style.setProperty('--hn', clamp(H.pos, 0, SYS_N - 1).toFixed(3)); this.el.style.setProperty('--hp', '1');
    },
  };
  let THREE_V = null;
  // previous / next: they scroll to the neighbouring form's hold, so the controls, the scroll and the sculpture are one
  // state (a second press while the first is still travelling counts from where that one is going)
  let heroGoal = null, heroGoalT = 0;
  function heroGo(d) {
    if (!stage) return;
    const y = curY(), pos = heroPosOf(y);
    if (heroGoal !== null && (performance.now() - heroGoalT > 1600 || Math.abs(pos - heroGoal) < .01)) heroGoal = null;
    const base = heroGoal !== null ? heroGoal : (d > 0 ? Math.floor(pos + 1e-3) : Math.ceil(pos - 1e-3));
    const i = clamp(base + d, 0, SYS_N - 1); if (i === base && heroGoal === null && Math.abs(pos - i) < .01) return;
    heroGoal = i; heroGoalT = performance.now();
    const ty = heroYOf(i);
    if (lenis) { if (stage.hero.entered) lenis.start(); lenis.resize(); lenis.scrollTo(ty, { duration: 1.15, easing: t => 1 - Math.pow(1 - t, 3) }); }   // (a click on the HUD works the moment it shows, before the entrance hands the scroll over) else window.scrollTo({ top: ty, behavior: reduced ? 'auto' : 'smooth' });
  }
  if (stage) { THREE_V = stage.camera.position.constructor;
    stage.sculpt.onForm(name => { if (hud.on && SYS[name]) hud.set(name); });
    $('#hudPrev').addEventListener('click', () => { if ($('#hudPrev').getAttribute('aria-disabled') !== 'true') heroGo(-1); });
    $('#hudNext').addEventListener('click', () => { if ($('#hudNext').getAttribute('aria-disabled') !== 'true') heroGo(1); });
    $('#hudGo').addEventListener('click', () => { const d = SYS[hud.cur]; if (!d) return; if (d.go === 'access') { $('[data-open-access]').click(); return; } goto(d.go); });
    // the sculpture is the system's link, as in the lab recording: a click on it (not a stir: a press that barely moves)
    // does what View does. The press must start on the scene, not on the copy, the HUD or the nav.
    let formPress = null;
    addEventListener('pointerdown', e => { formPress = stage.sculptHover && e.button === 0 && e.pointerType === 'mouse' && !(e.target.closest && e.target.closest('button, a, input, .hud__label, .nav, .menu, dialog')) ? { x: e.clientX, y: e.clientY, t: performance.now() } : null; });
    addEventListener('pointerup', e => { const f = formPress; formPress = null; if (f && stage.sculptHover && Math.hypot(e.clientX - f.x, e.clientY - f.y) < 8 && performance.now() - f.t < 600) $('#hudGo').click(); });
    addEventListener('keydown', e => { if (!hud.on || MP.g > .05 || html.classList.contains('menu-open') || e.target.closest && e.target.closest('input, textarea, dialog')) return; if (e.key === 'ArrowRight') { e.preventDefault(); heroGo(1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); heroGo(-1); } });
  }

  const gate = {
    el: $('#gate'), fill: $('#gateFill'), p: 0, held: false, open: false, t0: 0, idle: 0,
    frame(dt) {
      if (!this.open) return;
      this.idle += dt;
      this.p = this.fixed != null ? this.fixed : Math.max(0, Math.min(1, this.p + (this.held ? dt / .95 : -dt * 1.8)));
      this.fill.style.strokeDashoffset = (1 - this.p).toFixed(4);
      const H = stage.hero; H.sAlpha = .85 + this.p * .2; stage.sculpt.meta.seed.spin = .5 + this.p * 1.2; H.cam = this.p * .12;
      // holding draws the dais and the canopy in outline, gathers the horizon haze and brings the light shafts in (the reference's lab)
      const e = this.p * this.p * (3 - 2 * this.p); H.draw = e * .38; H.hold = e; H.rays = e * e * .22;
      const c = stage.anchor(new THREE_V(0, 0, 0)); this.el.style.setProperty('--gx', c.x.toFixed(1) + 'px'); this.el.style.setProperty('--gy', c.y.toFixed(1) + 'px');
      if (this.p >= 1 && this.fixed == null) enter();
      else if (this.idle > 11 && !this.held && this.fixed == null) enter();   // nobody holding: let them in anyway
    },
    show() {
      this.open = true; this.el.hidden = false; html.classList.add('gated'); lenis && lenis.stop();
      if (touch) $('.gate__s').textContent = 'or swipe up';
      const down = e => { if (!this.open || e.button > 0 || e.target.closest('.nav, .menu, dialog')) return; this.held = true; this.idle = 0; };
      const up = () => { this.held = false; };
      addEventListener('pointerdown', down); addEventListener('pointerup', up); addEventListener('pointercancel', up);
      addEventListener('keydown', e => { if (!this.open) return; if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.held = true; this.idle = 0; } });
      addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') this.held = false; });
      const skip = () => { if (this.open) enter(true); };
      addEventListener('wheel', skip, { passive: true }); addEventListener('touchmove', skip, { passive: true });
      $('#gateBtn').addEventListener('click', e => { if (e.detail === 0) enter(); });   // keyboard activation of the button
    },
    close() { this.open = false; this.held = false; html.classList.remove('gated'); this.el.classList.add('is-out'); setTimeout(() => { this.el.hidden = true; }, 1000); },
  };

  MP.enter = () => enter(); MP.heroStep = d => heroGo(d); MP.heroY = heroYOf; MP.heroPosOf = heroPosOf;
  function presettle(t0) { const S = stage.sculpt; for (let i = 0; i < 280; i++) S.step(t0 - 4.5 + i * .016, .016); }
  // the entrance, after the reference's lab: the wireframe shoots out from the dais and the canopy, a flat paint pass runs
  // down from the canopy in drips, the final render prints over it, the canopy's holes light, then the M pours from them
  function enter(fast) {
    const H = stage.hero, S = stage.sculpt; if (H.entered) return null;
    H.entered = true; gate.close(); S.meta.seed.spin = .5;
    if (fast) lenis && lenis.start();   // skipped by scrolling: the room assembles while the page already moves
    return gsap.timeline()
      .add(() => S.go('lattice', 1.15), 0)
      .to(H, { sAlpha: .3, duration: .6 }, 0)
      .to(H, { sAlpha: .025, duration: .6 }, 1.0)   // parked in the lattice the particles stay dim, so the canopy is wire and paint until its holes light
      .to(H, { bk: 1, duration: 1.2 }, 3.0)
      .to(H, { hold: 1, duration: .4 }, 0)
      .to(H, { rays: .5, duration: 1.2, ease: 'power2.out' }, 0)
      .to(H, { draw: 1, duration: 1.5, ease: 'power1.inOut' }, 0)
      .to(H, { sAlpha: 1, duration: 1.0 }, 3.4)
      .to(H, { cam: 1, duration: 4.8, ease: 'power2.inOut' }, 0)
      .to(H, { fill: 1, duration: 2.2, ease: 'power1.in' }, 1.0)
      .to(H, { reveal: 1, duration: 2.5, ease: 'power1.inOut' }, 1.6)
      .to(H, { rays: 0, duration: 1.5 }, 3.0)
      .to(H, { wire: 0, duration: 1.0, ease: 'power1.in' }, 3.3)
      .to(H, { lat: 1, duration: 1.4, ease: 'power1.inOut' }, 3.5)
      .add(() => { H.idx = 0; S.go('m', 3.0); }, 3.9)
      .add(() => { html.classList.add('entered'); intro(); }, 4.4)
      .add(() => hud.show(), 5.4)
      .add(() => { lenis && lenis.start(); }, 6.0).timeScale(fast ? 2.4 : 1);   // from here the scroll moves the forms
  }
  function heroStart() {
    if (!stage) { intro(); return; }
    const H = stage.hero, S = stage.sculpt, t0 = performance.now() / 1000;
    const fq = qs.get('form'); const fi = Math.max(0, stage.heroForms.indexOf(fq || 'm'));
    if (qs.has('reveal')) {   // capture: the materialisation frozen at a given point
      const v = +qs.get('reveal'); H.reveal = v; H.fill = Math.min(1, v * 1.6 + .15); H.hold = 1; H.rays = .9 * (1 - sstep(.6, 1, v)); H.wire = 1 - sstep(.55, 1, v); H.draw = 1; H.lat = sstep(.75, 1, v); H.cam = v; H.entered = true; H.cycle = false;
      H.idx = fi; S.go(v < .6 ? 'lattice' : stage.heroForms[fi], 2.6); presettle(t0); introPrep();
      if (v > .8) { html.classList.add('entered'); } else html.classList.add('revealing'); return;   // early in the reveal the particles are still in the lattice
    }
    // capture: a hero scroll position (?hs=2.4 is 40% of the way from the third form to the fourth; ?morphAt=globe:.35 the
    // same as ?hs=1.35; ?form=globe holds it): the page scrolls there and the sculpture is settled on it
    let hsq = qs.has('hs') ? +qs.get('hs') : null;
    if (qs.has('morphAt')) { const [f, pv] = qs.get('morphAt').split(':'); hsq = Math.max(0, stage.heroForms.indexOf(f) - 1 + +pv); }
    if (hsq === null && fq) hsq = fi;
    if (reduced || hsq !== null || (captureG !== null && !qs.has('gate'))) {
      H.entered = true; H.reveal = 1; H.fill = 1; H.hold = 0; H.rays = 0; H.wire = 0; H.draw = 1; H.lat = 1; H.cam = 1; H.cycle = false; H.scrub = true;
      const pos = captureG > 0 ? stage.heroForms.length - 1 : (hsq ?? heroPosOf(curY()));
      if (hsq !== null && !(captureG > 0)) MP.goY(heroYOf(hsq));
      H.pos = hsv = pos; S.scrub(stage.heroForms, pos); presettle(t0);   // a scroll capture starts from the settled card, as a reader who scrolled would see it
      html.classList.add('entered'); intro(); hud.show(); return;
    }
    // the gate
    H.entered = false; H.reveal = 0; H.fill = 0; H.hold = 0; H.rays = 0; H.wire = 1; H.draw = 0; H.lat = 0; H.cam = 0; H.cycle = false;
    H.bk = .4;   // the gate's bloom, as a share of the room's: the cube stays a countable point lattice, not a glow (back to 1 as the print lands)
    S.go('seed', 2.4); introPrep();
    if (qs.has('enterAt')) {   // capture: the entrance frozen T seconds in (the sculpture simulated through it, the timeline seeked)
      const T = Math.max(0, +qs.get('enterAt')), st = t0 - T; for (let i = 0; i < 280; i++) S.step(st - 4.5 + i * .016, .016);
      const tl = enter(); tl.pause(); const n = Math.round(T / .016); for (let i = 0; i <= n; i++) { tl.seek(Math.min(T, i * .016), false); S.step(st + i * .016, .016); }
      return;
    }
    if (qs.has('hold')) gate.fixed = clamp(+qs.get('hold'), 0, 1);
    if (captureG !== null) presettle(t0);
    gate.show();
  }

  // ---------------------------------------------------------------- the backdrop's quiet zones
  // the spatial backdrop dims its detail under whatever copy is on screen now: headings, panels, charts, buttons, the nav
  const QUIET = ['.nav__logo', '.nav__links', '.nav__right', '.ch.is-on .sec-head', '.ch.is-on .tre__hero', '.ch.is-on .tre__mods', '.ch.is-on .route', '.ch.is-on .globe-meta',
    '#hubcard:not([hidden])', '.ch.is-on .intel', '.ch.is-on .specs', '.ch.is-on .vault-state', '.ch.is-on .certs', '.ch.is-on .fx-wrap', '.ch.is-on .ccy',
    '.ch.is-on .future__title', '.ch.is-on .future__cta', '.ops__head', '#c-ops .sys', '.foot__top', '.foot__cols', '.foot__bot'].join(',');
  let quietCh = null;
  function quiet() {
    if (!stage || (MP.frames % 8 && quietCh === MP.ch)) return; quietCh = MP.ch;
    const W = innerWidth, Hh = innerHeight, rs = [];
    for (const el of document.querySelectorAll(QUIET)) {
      const r = el.getBoundingClientRect(); if (r.width < 4 || r.height < 4 || r.bottom < 0 || r.top > Hh || r.right < 0 || r.left > W) continue;
      if (+getComputedStyle(el).opacity < .05) continue;
      rs.push([r.left, r.top, r.right, r.bottom, r.width * r.height]);
    }
    rs.sort((a, b) => b[4] - a[4]); stage.setQuiet(rs);
  }

  // ---------------------------------------------------------------- loop
  let lastNow = performance.now(), fpsAcc = 0, fpsN = 0, slow = 0, hsv = 0;
  function frame(now) {
    const dt = Math.min(.05, (now - lastNow) / 1000); lastNow = now;
    if (lenis) lenis.raf(now);
    const y = lenis ? lenis.scroll : scrollY;
    const g = stage ? gOf(y) : 0; MP.g = g;
    if (stage) {
      // the hero's form position follows the scroll, eased a little; a long jump plays only its last change
      const ht = heroPosOf(y);
      if (Math.abs(ht - hsv) > 1.35) hsv = ht - Math.sign(ht - hsv);
      hsv += (ht - hsv) * (reduced ? 1 : 1 - Math.exp(-dt * 10)); if (Math.abs(ht - hsv) < 1e-4) hsv = ht;
      stage.hero.pos = hsv; MP.hs = hsv;
      // the page's surface (js/gl/light.js) scrolls at half speed behind the 3D chapters and with the page where a DOM layer
      // is carried over it (the Systems layer, the footer); there it shows through instead of those layers' page colour
      const yr = Math.max(0, y - FH), s0 = G_OPS * unit, s1 = s0 + F, s2 = TOTAL * unit + F;
      stage.setWall(yr <= s0 ? yr * .5 : yr <= s1 ? s0 * .5 + (yr - s0) : yr <= s2 ? s0 * .5 + F + (yr - s1) * .5 : s0 * .5 + F + (s2 - s1) * .5 + (yr - s2));
      const ot = FH + s0 + vh - y, oh = ops.height(), fade = Math.max(70, Math.min(110, vh * .11));
      stage.setCover(ot, ot + oh, ot < vh + fade && ot + oh > -fade ? fade : 0, footEl.getBoundingClientRect().top);
      ops.place(ot);
    }
    const t = now / 1000;
    // once the operating layer covers the viewport the 3D scene is hidden: skip it and leave the frame to the Lotties
    const covered = ops.covered();
    if (stage) {
      if (!covered) {
        stage.update(g, t, dt);
        if (MP.ch === 'liquidity') { const hc = stage.pickCoin(); if (hc !== hoverCoin) { hoverCoin = hc; stage.coins.hover = hc; } } else hoverCoin = -1;
        stage.render();
      } else stage.renderBackdrop(dt);   // only the page's surface, under the cursor's lamp
      chapters(g, t, dt); quiet();
    }
    ops.update(dt);
    if (stage) { hud.frame(g, t, dt); gate.frame(dt); }
    magnet();
    // cursor
    if (!touch) {
      cur.rx += (cur.x - cur.rx) * .2; cur.ry += (cur.y - cur.ry) * .2;
      $('.cursor__ring').style.transform = `translate3d(${cur.rx}px,${cur.ry}px,0)`;
      const lab = hoverLabel || (hoverCoin >= 0 ? 'Select' : (MP.ch === 'transfer' && drag ? 'Drag' : (stage && stage.sculptHover && stage.stirRest && hud.lit && !overUi ? 'View' : '')));
      cursor.classList.toggle('is-chart', !!(document.querySelector('.perf.is-hover')));
      cursor.classList.toggle('is-hover', !!lab); if (clabel.textContent !== lab && lab) clabel.textContent = lab;
    }
    // perf: adaptive resolution
    MP.frames++; fpsAcc += dt; fpsN++;
    if (fpsAcc > 1.5) { MP.fps = fpsN / fpsAcc; if (stage && captureG === null && !opts.dpr && document.visibilityState === 'visible') { if (MP.fps < 42) { slow++; if (slow >= 2 && stage.dpr > 1) { stage.dpr = Math.max(1, stage.dpr - .25); stage.renderer.setPixelRatio(stage.dpr); stage.resize(); slow = 0; } else if (slow >= 3 && stage.bloom.enabled) { stage.bloom.enabled = false; } } else slow = 0; } fpsAcc = 0; fpsN = 0; }
    requestAnimationFrame(frame);
  }
  let hoverCoin = -1;

  setLoad(1);
  await new Promise(r => setTimeout(r, captureG !== null ? 0 : 650));
  $('#loader').classList.add('is-done'); html.classList.remove('is-loading');
  MP.ready = true;
  heroStart();
  requestAnimationFrame(frame);
}

boot().catch(e => { console.error(e); window.__errs.push(String(e && e.stack || e)); html.classList.add('static'); $('#loader').classList.add('is-done'); html.classList.remove('is-loading'); });
