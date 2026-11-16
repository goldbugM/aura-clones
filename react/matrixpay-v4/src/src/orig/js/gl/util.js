// Small math + track helpers shared by the stage and the DOM director.
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const range = (a, b, x) => clamp((x - a) / (b - a));
export const easeOut = t => 1 - Math.pow(1 - t, 3);
export const easeInOut = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const expoOut = t => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

// deterministic PRNG so formations are identical every load (captures compare cleanly)
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function gauss(r) { let u = 0, v = 0; while (u === 0) u = r(); while (v === 0) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

// Keyed track: keys [{g, ...values}] sorted by g. Values may be numbers or arrays.
// Interpolation: Catmull-Rom (centripetal-ish via uniform param) with eased segments, or smooth step.
export class Track {
  constructor(keys, mode = 'cr') { this.keys = keys.slice().sort((a, b) => a.g - b.g); this.mode = mode; }
  at(g, name) {
    const k = this.keys; const n = k.length;
    if (g <= k[0].g) return k[0][name];
    if (g >= k[n - 1].g) return k[n - 1][name];
    let i = 0; while (i < n - 2 && g > k[i + 1].g) i++;
    const a = k[i], b = k[i + 1];
    let t = (g - a.g) / (b.g - a.g);
    const ease = b.ease || this.mode;
    if (ease === 'step') return a[name];
    const va = a[name], vb = b[name];
    if (ease === 'cr') {
      const p0 = (k[i - 1] || a)[name], p3 = (k[i + 2] || b)[name];
      const te = t; // uniform CR in g
      if (Array.isArray(va)) return va.map((_, j) => cr(p0[j], va[j], vb[j], p3[j], te));
      return cr(p0, va, vb, p3, te);
    }
    t = ease === 'lin' ? t : t * t * (3 - 2 * t);
    if (Array.isArray(va)) return va.map((x, j) => x + (vb[j] - x) * t);
    return va + (vb - va) * t;
  }
}
function cr(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

// critically damped spring toward a target (per-axis)
export class Spring {
  constructor(v = 0, k = 90, d = 2 * Math.sqrt(90)) { this.v = v; this.vel = 0; this.k = k; this.d = d; this.t = v; }
  step(dt) { const a = this.k * (this.t - this.v) - this.d * this.vel; this.vel += a * dt; this.v += this.vel * dt; return this.v; }
}

export function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d', { willReadFrequently: true })]; }

// Height canvas (grey) -> tangent-space normal map canvas (Sobel)
export function heightToNormal(srcCtx, w, h, strength = 2.0) {
  const src = srcCtx.getImageData(0, 0, w, h).data;
  const [c, ctx] = makeCanvas(w, h); const out = ctx.createImageData(w, h); const o = out.data;
  const H = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) H[i] = src[i * 4] / 255;
  for (let y = 0; y < h; y++) {
    const y0 = y > 0 ? y - 1 : y, y1 = y < h - 1 ? y + 1 : y;
    for (let x = 0; x < w; x++) {
      const x0 = x > 0 ? x - 1 : x, x1 = x < w - 1 ? x + 1 : x;
      const tl = H[y0 * w + x0], t = H[y0 * w + x], tr = H[y0 * w + x1];
      const l = H[y * w + x0], r = H[y * w + x1];
      const bl = H[y1 * w + x0], b = H[y1 * w + x], br = H[y1 * w + x1];
      const dx = (tr + 2 * r + br) - (tl + 2 * l + bl);
      const dy = (bl + 2 * b + br) - (tl + 2 * t + tr);
      let nx = -dx * strength, ny = dy * strength, nz = 1; const L = Math.hypot(nx, ny, nz);
      nx /= L; ny /= L; nz /= L;
      const i = (y * w + x) * 4; o[i] = (nx * .5 + .5) * 255; o[i + 1] = (ny * .5 + .5) * 255; o[i + 2] = (nz * .5 + .5) * 255; o[i + 3] = 255;
    }
  }
  ctx.putImageData(out, 0, 0); return c;
}
