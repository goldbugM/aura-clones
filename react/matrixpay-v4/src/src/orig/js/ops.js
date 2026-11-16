// Operating layer: the four isometric systems (assets/illustrations/*.lottie, each carrying its Ambient/Focused hover
// machine) in a section right after the hero (carried over the held scene). Each plate preloads ahead of the viewport, wipes in and starts its
// state machine as it scrolls into view (staggered), and focuses while its block is hovered. One signal spine, scrubbed
// by scroll, runs down the middle column rule (the left gutter below 1100 px): its packet passes through the wide
// plates, lights a tap into each plate it serves, and ends above the closing call to action.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = 'http://www.w3.org/2000/svg';
const START = 120;            // the Ambient marker's first frame: loop time 0, the first beat of every sequence
const STILL = START + 75;     // the pose shown with reduced motion (2.5 s into the loop)

export class Ops {
  constructor({ reduced, touch, mobile, lenis, icons }) {
    Object.assign(this, { reduced, touch, mobile, lenis, icons });
    this.el = $('#c-ops');
    if (!this.el) return;
    this.flow = $('#opsFlow'); this.svg = $('#opsPath');
    this.track = $('.ops__track', this.svg); this.glow = $('.ops__glow', this.svg); this.lit = $('.ops__lit', this.svg);
    this.packet = $('.ops__packet', this.svg); this.portsG = $('.ops__ports', this.svg); this.tapsG = $('.ops__taps', this.svg);
    this.items = $$('.sys', this.el).map((el, i) => ({ el, i, key: el.dataset.key, cv: $('.sys__cv', el), ping: $('.sys__ping', el),
      live: $('[data-live]', el), dl: null, ready: false, started: false, inView: false, hover: 0, leaveT: 0,
      stages: $$('.sys__stages li', el).map(li => ({ li, a: +li.dataset.from, b: +li.dataset.to, on: false })), paused: 0, pauseAt: 0 }));
    this.counts = $$('.ops__tally dd', this.el);
    this.py = 0; this.ports = []; this.lastStart = 0; this.inText = $('.ops__in', this.svg);
    this.fixed = false; this.top = 0; this.active = true;
    this._reveal(); this._preload(); this._hover(); this._live();
    this.layout();
    if (window.ResizeObserver) new ResizeObserver(() => this.layout()).observe(this.flow);
  }

  // ------------------------------------------------------------ reveal + start
  _reveal() {
    const groups = [$('.ops__head', this.el), ...this.items.map(it => it.el), $('.ops__coda', this.el)];
    groups.forEach(g => $$('.rv', g).forEach((r, k) => r.style.setProperty('--i', k)));
    this.items.forEach(it => $$('.rv', it.el).forEach(r => r.style.setProperty('--d', '420ms')));
    const io = new IntersectionObserver(es => es.forEach(e => {
      const g = e.target, it = this.items.find(x => x.el === g);
      if (it && it.inView !== e.isIntersecting) {
        const now = performance.now();
        if (!e.isIntersecting) it.pauseAt = now; else if (it.pauseAt) { it.paused += now - it.pauseAt; it.pauseAt = 0; }
        it.inView = e.isIntersecting;
      }
      if (e.intersectionRatio < .16 || g.classList.contains('is-in')) { if (it && e.isIntersecting) this._start(it); return; }
      g.classList.add('is-in');
      if (g.classList.contains('ops__head') && this.icons) { const ic = $('.lottie', g); if (ic) setTimeout(() => this.icons.play(ic), 320); }
      if (it) this._start(it);
    }), { threshold: [0, .16], rootMargin: '0px 0px -4% 0px' });
    groups.forEach(g => io.observe(g));
  }

  _start(it) {
    if (it.started || !it.ready || this.reduced || !it.el.classList.contains('is-in')) return;
    it.started = true;
    // staggered: never two machines starting within 380 ms of each other, and never before the wipe is under way
    const now = performance.now(), at = Math.max(now + 460, this.lastStart + 380);
    this.lastStart = at;
    setTimeout(async () => {
      try {
        await it.dl.stateMachineLoad(`${it.key}_states`);
        await it.dl.stateMachineStart();
        it.running = true; it.t0 = performance.now(); it.paused = 0; it.pauseAt = 0;
        if (it.hover) this._post(it, true);
      } catch (e) { (window.__errs || []).push(`ops start ${it.key} ${e}`); }
    }, at - now);
  }

  // ------------------------------------------------------------ lazy loading
  _lib() {
    // rasterising a 1448 x 1086 vector scene is CPU work: render in workers (two, so neighbouring plates draw in
    // parallel) and keep the main thread for scrolling; the plain player is the fallback without OffscreenCanvas
    if (!this.libP) this.libP = import('../vendor/dotlottie-web/index.js').then(m => {
      const wasm = window.__VFS['vendor/dotlottie-web/dotlottie-player.wasm'];
      const worker = !!(window.Worker && window.OffscreenCanvas && HTMLCanvasElement.prototype.transferControlToOffscreen) && !new URLSearchParams(location.search).has('noworker');
      m.DotLottie.setWasmUrl(wasm); if (worker) m.DotLottieWorker.setWasmUrl(wasm);
      return { Player: worker ? m.DotLottieWorker : m.DotLottie, worker };
    });
    return this.libP;
  }

  _preload() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const it = this.items.find(x => x.el === e.target); io.unobserve(e.target); this._load(it);
    }), { rootMargin: '140% 0px' });
    this.items.forEach(it => io.observe(it.el));
  }

  _fail(it, why) {
    if (it.ready || it.failed) return;
    it.failed = true; it.el.classList.add('is-fallback');
    (window.__errs || []).push(`ops ${it.key} ${why}`);
  }

  // the original .lottie; where a host won't serve .lottie files, the same bytes base64-encoded in a .txt beside it
  async _bytes(key) {
    const r = await fetch(`assets/illustrations/${key}.lottie`).catch(() => null);
    if (r && r.ok) return r.arrayBuffer();
    const t = await fetch(`assets/illustrations/${key}.lottie.b64.txt`).then(x => { if (!x.ok) throw new Error(`HTTP ${x.status}`); return x.text(); });
    const bin = atob(t.replace(/\s+/g, '')), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u.buffer;
  }

  async _load(it) {
    if (it.loading) return; it.loading = true;
    // if the player never comes up (no WebAssembly, a blocked fetch) show the still instead of an empty frame
    setTimeout(() => { if (!it.ready) this._fail(it, 'load timeout'); }, 12000);
    try {
      const [{ Player, worker }, buf] = await Promise.all([this._lib(),
        this._bytes(it.key)]);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      it.dpr = dpr; it.worker = worker;
      it.dl = new Player({ canvas: it.cv, data: buf, autoplay: false, loop: false, ...(worker ? { workerId: `ops-${it.i % 2}` } : {}),
        renderConfig: { autoResize: true, devicePixelRatio: dpr, freezeOnOffscreen: true } });
      it.dl.addEventListener('load', async () => {
        await it.dl.setFrame(this.reduced ? STILL : START);
        it.ready = true; it.el.classList.add('is-loaded');
        if (it.inView) this._start(it);
      });
      it.dl.addEventListener('loadError', e => this._fail(it, `loadError ${e && e.error}`));
      it.dl.addEventListener('stateMachineStateEntered', e => { it.el.dataset.sm = /^Focused/.test(e.state || '') ? 'focused' : 'ambient'; });
    } catch (e) { this._fail(it, `load ${e}`); }
  }

  // ------------------------------------------------------------ hover: block-level, posted to the machine
  _hover() {
    if (this.touch) return;
    this.items.forEach(it => {
      const enter = e => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        clearTimeout(it.leaveT);
        if (!it.hover++) { it.el.classList.add('is-focus'); this._post(it, true); }
      };
      const leave = e => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        it.hover = Math.max(0, it.hover - 1);
        // crossing the gap between plate and copy must not drop out of Focused
        if (!it.hover) it.leaveT = setTimeout(() => { if (!it.hover) { it.el.classList.remove('is-focus'); this._post(it, false); } }, 140);
      };
      [$('.sys__plate', it.el), $('.sys__copy', it.el)].forEach(t => { t.addEventListener('pointerenter', enter); t.addEventListener('pointerleave', leave); });
    });
  }

  _post(it, on) {
    if (!it.dl || !it.running) return;
    // the machine's hit area is the whole illustration; its PointerEnter/Exit interactions read the clock so the blend
    // lands on the loop's own phase. Enter from the middle, exit from outside (where a real pointer is when it
    // leaves); a worker's canvas has been transferred, so its backing size comes from the layout box.
    const r = it.cv.getBoundingClientRect(), x = r.width * it.dpr / 2, y = r.height * it.dpr / 2;
    const p = on ? it.dl.stateMachinePostPointerEnterEvent(x, y) : it.dl.stateMachinePostPointerExitEvent(-8, -8);
    if (p && p.catch) p.catch(() => {});
  }

  // ------------------------------------------------------------ live readouts (illustrative), only while on screen
  _live() {
    if (this.reduced) return;
    let orders = 1204, matched = 3418, ago = 2;
    const fmt = n => n.toLocaleString('en-US');
    setInterval(() => {
      if (document.hidden) return;
      orders = Math.round(Math.min(1320, Math.max(1080, orders + (Math.random() - .5) * 70)));
      matched += 1 + Math.floor(Math.random() * 3);
      ago = ago >= 7 ? 0 : ago + 1;
      this.items.forEach(it => {
        if (!it.inView || !it.live) return;
        const k = it.live.dataset.live;
        it.live.textContent = k === 'orders' ? fmt(orders) : k === 'matched' ? fmt(matched) : k === 'ago' ? ago : it.live.textContent;
      });
    }, 1400);
  }

  // ------------------------------------------------------------ the signal spine
  layout() {
    if (!this.el) return;
    const fr = this.flow.getBoundingClientRect();
    const box = el => { const r = el.getBoundingClientRect(); return { l: r.left - fr.left, r: r.right - fr.left, t: r.top - fr.top, b: r.bottom - fr.top, w: r.width, h: r.height }; };
    const desk = innerWidth > 1100;
    const margin = fr.left - this.el.getBoundingClientRect().left;
    const sx = desk ? fr.width / 2 : -margin / 2;           // the middle column rule, or midway across the left margin
    const tally = box($('.ops__tally', this.el));
    const y0 = 10, y1 = tally.t - 24;
    if (this.inText) { this.inText.setAttribute('x', (sx + 12).toFixed(1)); this.inText.setAttribute('y', (y0 + 3.5).toFixed(1)); this.inText.style.display = desk ? '' : 'none'; }
    this.sx = sx; this.y0 = y0; this.y1 = y1;
    const d = `M${sx.toFixed(1)} ${y0} V${y1.toFixed(1)}`;
    [this.track, this.glow, this.lit].forEach(p => p.setAttribute('d', d));
    const total = y1 - y0; this.total = total;
    this.lit.style.strokeDasharray = this.glow.style.strokeDasharray = `${total} ${total}`;
    // ports and taps
    this.portsG.textContent = ''; this.tapsG.textContent = '';
    const ports = [{ x: sx, y: y0, r: 4.5 }];
    this.items.forEach(it => {
      const f = box($('.sys__frame', it.el)), bar = box($('.sys__bar', it.el));
      const through = desk && it.el.classList.contains('sys--wide');      // the spine runs behind a wide plate
      if (through) {
        ports.push({ x: sx, y: f.t, r: 3.6, i: it.i, ping: true });
        ports.push({ x: sx, y: f.b, r: 3.6 });
      } else {
        const ty = f.t + f.h * .3, ex = desk ? (f.l > sx ? f.l : f.r) : f.l;
        const tap = (cls, len) => { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', `M${sx.toFixed(1)} ${ty.toFixed(1)} H${ex.toFixed(1)}`); p.setAttribute('class', cls); if (len) p.style.setProperty('--len', len); this.tapsG.append(p); return p; };
        tap('ops__tap'); const lit = tap('ops__tap--lit', Math.abs(ex - sx).toFixed(1));
        ports.push({ x: sx, y: ty, r: 3.6, i: it.i, ping: true, tap: lit });
        const n = document.createElementNS(NS, 'path'); n.setAttribute('d', `M${ex.toFixed(1)} ${(ty - 12).toFixed(1)} V${(ty + 12).toFixed(1)}`); n.setAttribute('class', 'ops__notch'); this.tapsG.append(n);
        ports.push({ x: ex, y: ty, r: 3.6, follows: true, notch: n });
      }
    });
    ports.push({ x: sx, y: y1, r: 4.5, end: true });
    this.ports = ports.map(p => {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', p.x.toFixed(1)); c.setAttribute('cy', p.y.toFixed(1)); c.setAttribute('r', p.r);
      c.setAttribute('class', 'ops__port'); this.portsG.append(c);
      return { ...p, el: c, hot: false };
    });
    // a tap's plate-side port lights with its junction
    this.ports.forEach((p, k) => { if (p.follows) p.lead = this.ports[k - 1]; });
    if (this.reduced) { this.py = y1; this._draw(); }
  }

  _draw() {
    const L = Math.max(0, Math.min(this.total, this.py - this.y0));
    const off = (this.total - L).toFixed(1);
    this.lit.style.strokeDashoffset = off; this.glow.style.strokeDashoffset = off;
    this.packet.setAttribute('transform', `translate(${this.sx.toFixed(1)} ${(this.y0 + L).toFixed(1)})`);
    this.packet.style.opacity = L > 3 && L < this.total - 3 && !this.reduced ? 1 : 0;
    for (const p of this.ports) {
      const hot = p.follows ? p.lead.hot : this.py >= p.y - 2;
      if (hot === p.hot) continue;
      p.hot = hot; p.el.classList.toggle('is-hot', hot);
      if (p.tap) p.tap.classList.toggle('is-hot', hot);
      if (p.notch) p.notch.classList.toggle('is-hot', hot);
      if (hot && p.ping && !this.reduced) { const pg = this.items[p.i].ping; pg.classList.remove('is-on'); void pg.offsetWidth; pg.classList.add('is-on'); }
      if (p.end && hot && !this.reduced) this._count();
    }
  }

  _count() {
    const t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / 800), e = 1 - Math.pow(1 - k, 3);
      this.counts.forEach(dd => { const a = +dd.dataset.from, b = +dd.dataset.count; dd.textContent = Math.round(a + (b - a) * e); });
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  _stages(now) {
    for (const it of this.items) {
      if (!it.stages.length || !it.running || !it.inView) continue;
      const ph = (((now - it.t0 - it.paused) / 1000) % 8 + 8) % 8;
      for (const s of it.stages) { const on = ph >= s.a && ph < s.b; if (on !== s.on) { s.on = on; s.li.classList.toggle('is-on', on); } }
    }
  }

  // ------------------------------------------------------------ per frame (from main.js)
  height() { return this.el ? this.el.offsetHeight : 0; }

  // in the 3D journey the section is a fixed overlay the scroll carries through: its top sits at `top` px on screen
  place(top) {
    if (!this.el) return;
    this.fixed = true; this.top = top;
    const h = this.el.offsetHeight + 120, on = top < innerHeight && top + h > 0;
    if (on !== this.active || !this.placed) { this.active = on; this.placed = true; this.el.style.visibility = on ? 'visible' : 'hidden'; }
    if (on) this.el.style.transform = `translate3d(0,${top.toFixed(1)}px,0)`;
  }

  covered() {
    const r = this.el ? this.el.getBoundingClientRect() : null;
    const c = !!r && this.active && r.top <= 0 && r.bottom >= innerHeight;
    const under = !!r && this.active && r.top <= 80 && r.bottom > 80;      // section content under the nav
    if (under !== this._under) { this._under = under; document.documentElement.classList.toggle('in-ops', under); }
    return c;
  }

  update(dt) {
    if (!this.el || !this.total || this.reduced) return;
    const er = this.el.getBoundingClientRect();
    if (er.top > innerHeight || er.bottom < 0) return;
    this._stages(performance.now());
    const fr = this.flow.getBoundingClientRect();
    const target = Math.max(this.y0, Math.min(this.y1, innerHeight * .56 - fr.top));
    this.py += (target - this.py) * (1 - Math.exp(-dt * 6.5));
    if (Math.abs(target - this.py) < .4) this.py = target;
    this._draw();
  }
}
