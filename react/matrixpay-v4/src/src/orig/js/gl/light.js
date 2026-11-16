import * as THREE from 'three';
import { IXU } from './interact.js';

// The cursor's light and the page's surface.
//
// - Between the 3D sets, behind every chapter and under the Systems layer and the footer, the page shows the hall's own
//   linework (arch.js: the intro's wireframe, seen by a scroll-driven camera), barely there at rest and lit along the
//   lines near the pointer. mpWall composites it, in the background pass and in the final pass where a DOM layer used
//   to paint the page colour.
// - The lamp follows the pointer: it lifts the field's structure near it, hangs over the hall's floor, walls and trees in
//   the hero (mpRoomLight in the room's shaders), and is a real point light in front of the subject in the 3D chapters.
// - Particles crossing it brighten, like dust in a beam (IXU.uILit, read by every particle layer through mpInteract).
// One position, radius and colour drive all of it, so the light reads as one lamp from the hero to the footer.
export const LIGHT_COL = new THREE.Color(1, .76, .55);   // linear: a warm lamp (about 3200 K) against the cool mint world
export const LTU = {
  uLPos: { value: new THREE.Vector2(-1e4, -1e4) },   // centre, CSS px from the top-left
  uLOn: { value: 0 },                                 // presence × the chapter's gain
  uLR: { value: 280 },                                // pool radius (CSS px): about 11% of the centre's light at R
  uLCol: { value: LIGHT_COL },
  uWallY: { value: 0 },                               // how far the surface has scrolled (CSS px)
  uWallG: { value: new THREE.Vector4(100, 200, 264, 0) },   // the grid: gutter, column width, row height (CSS px)
  // the spatial backdrop (mpWall): its clock, gain, the pointer's lean (-1..1, eased), the viewport (CSS px), and the
  // rects of the copy on screen that it keeps its detail out from under
  uSpT: { value: 0 }, uSpA: { value: 1 }, uSpP: { value: new THREE.Vector2() }, uSpV: { value: new THREE.Vector2(1440, 900) },
  uSpN: { value: 0 }, uSpX: { value: Array.from({ length: 10 }, () => new THREE.Vector4()) },
  uArch: { value: (() => { const t = new THREE.DataTexture(new Uint8Array(4), 1, 1); t.needsUpdate = true; return t; })() },   // the linework (arch.js), black until it exists
};

export const LT_GLSL = /* glsl */`
uniform vec2 uLPos; uniform float uLOn, uLR, uWallY; uniform vec3 uLCol; uniform vec4 uWallG;
uniform float uSpT, uSpA, uSpN; uniform vec2 uSpP, uSpV; uniform vec4 uSpX[10]; uniform sampler2D uArch;
// how much of the copy sits here: the rects main.js passes (headings, panels, charts, buttons), softened outwards
float lquiet(vec2 css){ float q = 0.;
  for (int i = 0; i < 10; i++) { if (float(i) >= uSpN) break; vec4 r = uSpX[i]; vec2 c = (r.xy + r.zw) * .5, h = (r.zw - r.xy) * .5;
    vec2 d = abs(css - c) - h; float sd = length(max(d, 0.)) + min(max(d.x, d.y), 0.); q = max(q, 1. - smoothstep(-16., 90., sd)); }
  return q; }
// The page's surface (behind every chapter, and under the Systems layer and the footer): the hall's linework (arch.js),
// barely there at rest and lit near the pointer, with a slight halo along the lines so a lit segment glows; quieter under
// the copy. Linear radiance, added to the page colour.
vec3 mpWall(vec2 css){
  float A = uSpA; if (A < .002) return vec3(0.);
  vec2 V = uSpV, uv = vec2(css.x / V.x, 1. - css.y / V.y), e = 1.5 / V;
  vec3 c = texture2D(uArch, uv).rgb;
  vec3 h = texture2D(uArch, uv + vec2(e.x, 0.)).rgb + texture2D(uArch, uv - vec2(e.x, 0.)).rgb + texture2D(uArch, uv + vec2(0., e.y)).rgb + texture2D(uArch, uv - vec2(0., e.y)).rgb;
  c += h * .14;
  c *= 1. - .82 * lquiet(css);
  return c * A; }
`;

// the same lamp in a 3D room: a point light (world xyz, w = E0·h², so the surface under it gets E0), the room's materials
// pass their albedo, gloss and how much light their leaves let through
export const CL_GLSL = /* glsl */`
uniform vec4 uCL; uniform vec3 uCLc;
vec3 mpRoomLight(vec3 w, vec3 alb, float ks, float shin, float wrap){
  if (uCL.w < 1e-5) return vec3(0.);
  vec3 N = normalize(cross(dFdx(w), dFdy(w))); vec3 V = normalize(cameraPosition - w); if (dot(N, V) < 0.) N = -N;
  vec3 Lv = uCL.xyz - w; float d2 = dot(Lv, Lv); vec3 L = Lv * inversesqrt(d2);
  float nl = dot(N, L), ndl = max(nl, 0.) * (1. - wrap) + abs(nl) * wrap;
  vec3 Hh = normalize(L + V); float sp = ks * pow(max(dot(N, Hh), 0.), shin) * max(nl, 0.);
  return uCLc * (alb * ndl + sp) * uCL.w / (d2 + .04); }
`;
export const CLU = { uCL: { value: new THREE.Vector4(0, 0, 0, 0) }, uCLc: { value: LIGHT_COL.clone() } };

export class CursorLight {
  constructor(opts) {
    this.opts = opts; this.x = -1e4; this.y = -1e4; this.tx = this.x; this.ty = this.y; this.inside = false; this.fresh = true;
    this.kind = 'mouse'; this.on = 0; this.linger = 0; this.wallGain = 1; this.w = 1; this.h = 1; this.R = 280;
    this.forced = null;   // capture: ?light=x,y pins the lamp
  }
  resize(w, h) {
    this.w = w; this.h = h;
    // the pool reads the same share of the screen on a phone and a wide monitor
    this.R = Math.max(150, Math.min(330, Math.hypot(w, h) * .17)); LTU.uLR.value = this.R;
  }
  move(x, y, kind = 'mouse') {
    this.tx = x; this.ty = y; this.kind = kind;
    if (!this.inside && this.fresh || this.on < .02) { this.x = x; this.y = y; }   // appear where the pointer is, never slide in from the last spot
    this.inside = true; this.fresh = false; this.linger = 0;
  }
  leave(kind) { if (this.inside && (kind || this.kind) === 'touch') this.linger = .45; this.inside = false; }
  step(dt) {
    dt = Math.min(Math.max(dt, 0), .05);
    if (this.forced) { this.x = this.tx = this.forced[0]; this.y = this.ty = this.forced[1]; this.inside = true; this.on = 1; }
    // a slight trail (the cursor ring's own lag), none with reduced motion
    const k = this.opts.reduced ? 1 : 1 - Math.exp(-dt * 14);
    this.x += (this.tx - this.x) * k; this.y += (this.ty - this.y) * k;
    if (this.linger > 0) this.linger -= dt;
    const want = (this.inside || this.linger > 0) ? (this.kind === 'touch' ? .78 : 1) : 0;
    if (!this.forced) this.on += (want - this.on) * Math.min(1, dt * (want > this.on ? 7 : 2.6));
    // the page's surface takes the lamp only where nothing opaque is drawn over it (the hero's hall covers it)
    LTU.uLPos.value.set(this.x, this.y); LTU.uLOn.value = this.on * this.wallGain;
    IXU.uILit.value.set(this.x, this.h - this.y, this.R, this.on);
  }
}
