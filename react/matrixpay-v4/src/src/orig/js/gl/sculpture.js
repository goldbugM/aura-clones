import * as THREE from 'three';
import { rng, gauss } from './util.js';
import { CARD, CHIP } from './card.js';
import { latLonToVec } from './particles.js';
import { IXU, IX_GLSL } from './interact.js';

// The hero sculpture: one GPU-simulated pool of light particles (position + velocity in float textures) that pours out of the
// canopy lattice and holds one of MatrixPay's systems at a time. Each form is a texture of targets (xyz + packed spin/brightness);
// a morph releases particles in a stagger, lets them swirl up in curl noise, then pulls them into the next form top-down.
export const LAT_Y = 3.57;          // the installation's dot plane (page coords), set by tools/atrium/room.py (CAN_Y + .42)
export const LAT_W = 6.5;           // the dot plane's square (2 * RI)
export const LAT_R = 3.12;          // the round opening of the ring housing (RI - .13): dots only inside it
export const LAT_N = 40;            // dots across the square (the bake lights the room evenly, so the count is free)
export const WATER_Y = -2.348;      // the dais top (room.py DA_TOP + .002): the polished disc on the raised plinth, under the sculpture
export const POOL = 2.5;            // the dais radius that mirrors cleanly (to the glowing rim)
export const FLOOR_Y = -2.9;
// order of the hero cycle (the gate shows 'seed'; 'card' is also the scroll hand-off)
export const FORMS = ['seed', 'm', 'coins', 'globe', 'crystal', 'vault', 'liquid', 'card'];
export const TOPY = { seed: .6, m: 1.75, coins: 1.95, globe: 1.8, crystal: 1.9, vault: 1.85, liquid: 1.2, card: 1.25 };

const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;} vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);} vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){ const vec2 C=vec2(1./6.,1./3.); const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx); vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.-abs(x)-abs(y); vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.; vec4 s1=floor(b1)*2.+1.; vec4 sh=-step(h,vec4(0.)); vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3))); p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.); m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3))); }
// curl of a three-noise vector potential: divergence-free swirl
vec3 curl(vec3 p){ const float e=.1; vec3 dx=vec3(e,0.,0.), dy=vec3(0.,e,0.), dz=vec3(0.,0.,e);
  vec3 o1=vec3(31.4,-12.7,8.1), o2=vec3(-7.3,19.1,44.2);
  float x_dy=snoise(p+dy)-snoise(p-dy), x_dz=snoise(p+dz)-snoise(p-dz);
  float y_dx=snoise(p+o1+dx)-snoise(p+o1-dx), y_dz=snoise(p+o1+dz)-snoise(p+o1-dz);
  float z_dx=snoise(p+o2+dx)-snoise(p+o2-dx), z_dy=snoise(p+o2+dy)-snoise(p+o2-dy);
  return vec3(z_dy-y_dz, x_dz-z_dx, y_dx-x_dy) / (2.*e); }
`;

const QUAD_V = 'varying vec2 vUv; void main(){ vUv = position.xy * .5 + .5; gl_Position = vec4(position.xy, 0., 1.); }';

const VEL_F = `precision highp float;
uniform sampler2D tPos, tVel, tA, tB; uniform mat4 uMatA, uMatB; uniform vec3 uAxisA, uAxisB;
uniform float uSpinA, uSpinB, uTime, uDt, uMorph, uK, uNoise, uBurst, uDrag, uRise, uHold, uBound, uScrub, uSwirl;
uniform mat4 uVP; uniform vec3 uCamP, uCamF, uCamR, uCamU; uniform float uFpx, uIK;
// the cursor's stir (js/gl/fluid.js; the lab recording's interaction): tFluid is the screen-space flow in uv/s;
// uStir = cursor (CSS px, y up), capture strength, capture radius (px); uStirV = cursor velocity (CSS px/s, y up);
// uStirK = flow gain, flow heat, capture gain, capture heat
uniform sampler2D tFluid; uniform vec4 uStir, uStirK; uniform vec2 uStirV; uniform float uStirOn, uHDec, uDiv;
varying vec2 vUv;
${NOISE}
${IX_GLSL}
float sh21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 sh32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }
vec3 spinp(vec3 p, vec3 ax, float a){ float c = cos(a), s = sin(a); return p * c + cross(ax, p) * s + ax * dot(ax, p) * (1. - c); }
vec3 tgt(vec4 F, mat4 M, vec3 ax, float sp){ float k = mod(F.w, 4.); return (M * vec4(spinp(F.xyz, ax, uTime * sp * k), 1.)).xyz; }
void main(){
  vec4 P = texture2D(tPos, vUv), V = texture2D(tVel, vUv), FA = texture2D(tA, vUv), FB = texture2D(tB, vUv);
  // each particle's seed is a hash of its texel; vel.w carries its heat (how hard the cursor's stir has caught it)
  float seed = sh21(gl_FragCoord.xy), heat = V.w;
  vec3 T; float fly, arr, soft, burst, rise, vortex;
  // a few particles at a time leave the form and drift (sparkle at the edges), then come home
  float shed = step(.955, fract(seed * 91.7)) * smoothstep(.55, 1., sin(uTime * .45 + seed * 61.));
  if (uScrub > .5) {
    // the hero's scroll: each particle's place is a function of the scroll alone, so the sequence plays backwards
    // exactly and a rest anywhere is a stable state. A staggered window (the next form's top arrives first), a curved
    // path (a turn about the sculpture's axis) and a bounded breath outwards, all zero at both forms; the spring carries
    // each point along that path, so a fast scroll or a reversal is smoothed, never restarted.
    vec3 A = tgt(FA, uMatA, uAxisA, uSpinA), B = tgt(FB, uMatB, uAxisB, uSpinB);
    float hb = clamp((B.y + 2.1) / 4.4, 0., 1.);
    float st = fract(seed * 13.17) * .2 + (1. - hb) * .24;
    float e = smoothstep(st, st + .56, uMorph);
    float arc = sin(3.14159265 * e);
    vec3 L = mix(A, B, e);
    float ang = arc * uSwirl * (.75 + .5 * fract(seed * 3.7));
    float ca = cos(ang), sa = sin(ang); L.xz = vec2(ca * L.x - sa * L.z, sa * L.x + ca * L.z);
    vec3 rad = vec3(L.x, 0., L.z); rad /= max(length(rad), .3);
    vec3 cw = curl(L * .5 + vec3(seed * 2.1, uTime * .05, 0.));
    L += (rad * .3 + cw * .2 + vec3(0., .14 + .18 * fract(seed * 5.3), 0.)) * arc * uSwirl;
    T = L; arr = e;
    float fs = shed * .8 * uHold * (1. - arc);
    fly = max(arc, fs); soft = arc >= fs ? .55 : .97; burst = arc >= fs ? .45 : uBurst; rise = 0.; vortex = 0.;
  } else {
    float h = clamp((FB.y + 2.1) / 4.4, 0., 1.);
    float d0 = fract(seed * 13.17) * .26;
    float d1 = .3 + (1. - h) * .34 + fract(seed * 7.13) * .2;
    float rel = smoothstep(d0, d0 + .1, uMorph); arr = smoothstep(d1, d1 + .16, uMorph);
    T = arr > .001 ? tgt(FB, uMatB, uAxisB, uSpinB) : tgt(FA, uMatA, uAxisA, uSpinA);
    fly = max(rel * (1. - arr), shed * .8 * uHold);
    soft = .97; burst = uBurst; rise = 1.; vortex = 1.;
  }
  float v0damp = 0.;
  // a bead the stir has heated lets go of its spring (and its drag), so the flow can carry it off in a ribbon; as the heat
  // decays (~1 s) the spring takes it home
  float hs = smoothstep(0., .6, heat), hold = 1. - .88 * hs;
  vec3 acc = (T - P.xyz) * uK * (1. - fly * soft) * hold;
  vec3 cn = curl(P.xyz * .3 + vec3(0., uTime * .07, 0.));
  acc += cn * uNoise * (.09 + fly * burst);
  acc.y += fly * uRise * (.6 + fract(seed * 3.7)) * (1. - arr * .8) * (1. - shed) * rise;
  acc += cross(vec3(0., 1., 0.), P.xyz) * fly * 1.7 * vortex;   // a vortex: mid-morph particles stream in spiral ribbons
  acc += (sh32(gl_FragCoord.xy) * 2. - 1.) * smoothstep(.25, .8, heat) * uDiv;   // stirred beads drift apart a little: a ribbon is grainy sparkle, not a packed sheet
  // keep the swirl inside the sculpture's own space (never over the copy or the HUD); a ribbon may reach a little further
  vec3 rc = (P.xyz - vec3(0., .1, 0.)) * vec3(1.3, P.y < .1 ? 1.25 : 1., 1.15); float rl = length(rc); float ex = max(rl - uBound - 1.3 * hs, 0.); acc -= rc / max(rl, 1e-3) * (ex * 30. + ex * ex * 60.) * step(.5, uBound);
  v0damp = ex > 0. ? 1. : 0.;
  // the page's one pointer response (js/gl/interact.js): the field's push, turned from CSS px into world units at this depth,
  // is held against the same spring that holds the form, so a particle sits at target + push and eases back as the push decays
  vec4 clip = uVP * vec4(P.xyz, 1.); float wpp = max(dot(P.xyz - uCamP, uCamF), .5) / uFpx;   // world units per CSS px at this depth
  { vec3 f = mpField(clip);
    vec3 dw = (uCamR * f.x + uCamU * f.y) * wpp;
    acc += dw * uK * (1. - fly * soft) * uIK * hold; }
  // the stir's flow: where it runs, a heated bead takes on its velocity (the cold form barely leans); its strong core, the
  // swipe's own path, heats the beads it crosses
  float cap = 0.; vec3 capV = vec3(0.);
  if (uStirOn > .5 && clip.w > .1) {
    vec2 suv = clip.xy / clip.w * .5 + .5;
    float edge = step(0., suv.x) * step(suv.x, 1.) * step(0., suv.y) * step(suv.y, 1.);
    vec2 fv = texture2D(tFluid, clamp(suv, 0., 1.)).xy * edge;
    float fs = length(fv), w = smoothstep(.015, .22, fs) * (.12 + .88 * smoothstep(.15, .55, heat));
    vec3 fw = (uCamR * fv.x * uIView.x + uCamU * fv.y * uIView.y) * wpp * uStirK.x;
    acc += (fw - V.xyz) * w * 6.;
    heat = max(heat, smoothstep(.35, 1.1, fs) * uStirK.y);
    // the capture: beads close to the cursor are pulled onto it and carried at its speed, so the ribbon's head sits on the cursor
    vec2 dpx = suv * uIView - uStir.xy; cap = exp(-dot(dpx, dpx) / (uStir.w * uStir.w)) * uStir.z * edge;
    vec3 dv = (uCamR * dpx.x + uCamU * dpx.y) * wpp;
    capV = (uCamR * uStirV.x + uCamU * uStirV.y) * wpp * uStirK.z - dv * 2.2 + cross(uCamF, dv) * 1.2;
    heat = max(heat, cap * uStirK.w);
  }
  vec3 v = V.xyz + acc * uDt;
  v *= exp(-uDrag * uDt * mix(1., soft > .9 ? .3 : .7, fly) * (1. + v0damp * 2.) * (1. - .65 * hs));   // outside the bound: brake hard
  if (cap > .001) v = mix(v, capV, clamp(cap * uDt * 22., 0., .7));
  heat = clamp(heat - uDt * (uHDec + fly * 1.6), 0., 1.);   // a morph takes its beads back faster
  float sp = length(v), vmax = mix(9., 20., hs); if (sp > vmax) v *= vmax / sp;
  gl_FragColor = vec4(v, heat);
}`;

const POS_F = `precision highp float;
uniform sampler2D tPos, tVel; uniform float uDt, uLatY; varying vec2 vUv;
void main(){ vec4 P = texture2D(tPos, vUv), V = texture2D(tVel, vUv);
  vec3 p = P.xyz + V.xyz * uDt; p.y = min(p.y, uLatY - .02);
  gl_FragColor = vec4(p, P.w); }`;

// ------------------------------------------------------------------ forms (CPU, seeded)
function decodeLand(land) {
  const bin = atob(land.bits); const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return (lat, lon) => { const row = Math.min(land.h - 1, Math.max(0, Math.floor((90 - lat) / 180 * land.h))); const col = Math.min(land.w - 1, Math.max(0, Math.floor((lon + 180) / 360 * land.w))); const i = row * land.w + col; return (bytes[i >> 3] >> (7 - (i & 7))) & 1; };
}
const pack = (spin, bright) => Math.floor(Math.min(.999, bright) * 8) * 4 + Math.min(3.99, Math.max(0, spin));
function inPoly(x, y, P) { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, yi] = P[i], [xj, yj] = P[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }
function polyArea(P) { let a = 0; for (let i = 0, j = P.length - 1; i < P.length; j = i++) a += (P[j][0] + P[i][0]) * (P[j][1] - P[i][1]); return Math.abs(a / 2); }
function perim(P) { const L = []; let t = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); L.push([a, b, t, l]); t += l; } return { L, t }; }
function onPerim(pp, u) { const s = u * pp.t; const e = pp.L.find(e => s >= e[2] && s <= e[2] + e[3]) || pp.L[pp.L.length - 1]; const k = (s - e[2]) / e[3]; return [e[0][0] + (e[1][0] - e[0][0]) * k, e[0][1] + (e[1][1] - e[0][1]) * k]; }
const rotE = (x, y, z, ex, ey, ez) => new THREE.Vector3(x, y, z).applyEuler(new THREE.Euler(ex, ey, ez));

export function buildForms(N, land, face) {
  const r = rng(77);
  const out = {}, meta = {};
  const mk = name => { const a = new Float32Array(N * 4); out[name] = a; return (i, x, y, z, spin = 0, bright = 0) => { a[i * 4] = x; a[i * 4 + 1] = y; a[i * 4 + 2] = z; a[i * 4 + 3] = pack(spin, bright); }; };
  const G = () => gauss(r);

  // a point at distance s from the nearest surface is kept with this probability: ~60% of a solid's points end up near its skin
  const skin = (s, k = .045, base = .2) => r() < base + (1 - base) * Math.exp(-Math.max(0, s) / k);
  const segD = (px, py, ax, ay, bx, by) => { const dx = bx - ax, dy = by - ay; const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy))); return Math.hypot(px - ax - dx * t, py - ay - dy * t); };
  const polyD = (x, y, P) => { let d = 1e9; for (let i = 0, j = P.length - 1; i < P.length; j = i++) d = Math.min(d, segD(x, y, P[j][0], P[j][1], P[i][0], P[i][1])); return d; };
  const MPOLY = [[[90, 138], [154, 110], [154, 390], [90, 390]], [[166, 110], [250, 224], [334, 110], [334, 220], [250, 334], [166, 220]], [[346, 110], [410, 138], [410, 390], [346, 390]]];
  // an M in the logo's geometry, height h, centred at (cx, cy) on the plane z (for embossing)
  const mAt = (h, cx, cy) => { const k = h / 280; let x, y, P; do { P = MPOLY[Math.floor(r() * 3)]; x = 90 + r() * 320; y = 110 + r() * 280; } while (!inPoly(x, y, P)); return [cx + (x - 250) * k, cy - (y - 250) * k]; };

  // seed: a crisp point-lattice cube on its corner (the gate's object), a soft core inside
  { const put = mk('seed'); const n = 8, s = .6;   // finer lattice, more of the points on the edges and less soft core: fewer particles stack on each dot, so the dots stay countable
    for (let i = 0; i < N; i++) {
      const u = r();
      if (u < .38) { const a = Math.floor(r() * n), b = Math.floor(r() * n), c = Math.floor(r() * n); const q = [a, b, c].map(v => (v / (n - 1) - .5) * 2 * s); const outer = [a, b, c].some(v => v === 0 || v === n - 1);
        put(i, q[0] + G() * .004, q[1] + G() * .004, q[2] + G() * .004, 1, outer ? .8 : .2); }
      else if (u < .86) { const e = Math.floor(r() * 12), t = r() * 2 - 1; const ax = e % 3, s1 = (e >> 2 & 1) ? 1 : -1, s2 = (e & 2) ? 1 : -1; const q = ax === 0 ? [t * s, s1 * s, s2 * s] : ax === 1 ? [s1 * s, t * s, s2 * s] : [s1 * s, s2 * s, t * s];
        put(i, q[0] + G() * .003, q[1] + G() * .003, q[2] + G() * .003, 1, .55); }
      else { put(i, G() * .16, G() * .16, G() * .16, 1, .05); }
    }
    meta.seed = { axis: new THREE.Vector3(0, 1, 0), spin: .5, euler: [.62, 0, .78] }; }

  // M: the MatrixPay monogram as a solid (logo path, 320 x 280 box), dense at its skin, no drawn outline
  { const put = mk('m'); const s = .0099, T = .42;   // ~30% of its width deep: a solid, not a sign
    const areas = MPOLY.map(polyArea), at = areas.reduce((a, b) => a + b);
    for (let i = 0; i < N; i++) {
      let x, y, z, P, d;
      for (;;) { let k = r() * at, j = 0; while (k > areas[j] && j < 2) { k -= areas[j]; j++; } P = MPOLY[j]; do { x = 90 + r() * 320; y = 110 + r() * 280; } while (!inPoly(x, y, P)); z = (r() * 2 - 1) * T; d = Math.min(polyD(x, y, P) * s, T - Math.abs(z)); if (skin(d, .022, .05)) break; }   // light gathers on the skin and the edges
      put(i, (x - 250) * s, -(y - 250) * s, z, 0, d < .014 ? .6 : r() < .05 ? .8 : .2);
    }
    meta.m = { axis: new THREE.Vector3(0, 1, 0), spin: 0, euler: [.04, -.4, 0], sway: .3 }; }   // ~23° yaw: the extrusion reads

  // coins: Treasury, five struck coins on an even helix (solid discs, raised rim ring, embossed M)
  { const put = mk('coins'); const nC = 5, R = .62, Th = .26;
    const C = []; for (let k = 0; k < nC; k++) { const th = k * 1.15; C.push({ c: new THREE.Vector3(Math.cos(th) * .42, -1.5 + k * .74, Math.sin(th) * .3), e: new THREE.Euler(-.62 - .3 * (.5 + .5 * Math.sin(k * 1.9)), .38 * Math.sin(k * 2.3), .14 * Math.cos(k * 1.3)) }); }   // tilted 35-55°: a spiral tower, not a string of discs
    for (let i = 0; i < N; i++) {
      const cc = C[Math.floor(r() * nC)]; const u = r(); let p, b = .25;
      if (u < .5) { let x, y, z, d; for (;;) { const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * R; x = Math.cos(a) * rr; y = Math.sin(a) * rr; z = (r() - .5) * Th; d = Math.min(R - rr, Th / 2 - Math.abs(z)); if (skin(d)) break; } p = new THREE.Vector3(x, y, z); b = d < .01 ? .5 : .2; }
      else if (u < .64) { const a = r() * Math.PI * 2, rr = R * (.92 + r() * .08); p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, r() < .55 ? Th / 2 + .006 : (r() - .5) * Th); b = .65; }   // a milled rim, 8% of the diameter
      else if (u < .76) { const a = r() * Math.PI * 2, rr = R * (.84 + G() * .006); p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, Th / 2 + .012); b = .75; }
      else if (u < .92) { const [x, y] = mAt(R * .78, 0, -.02); p = new THREE.Vector3(x, y, Th / 2 + .014); b = .95; }
      else { const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * R; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, -Th / 2 - .005); b = .12; }
      p.applyEuler(cc.e).add(cc.c);
      put(i, p.x, p.y, p.z, 1, b);
    }
    meta.coins = { axis: new THREE.Vector3(0, 1, 0), spin: .07, euler: [0, 0, 0] }; }

  // globe: Transfers, dotted land, faint ocean, three orbits
  { const put = mk('globe'); const R = 1.62; const isLand = decodeLand(land);
    const rings = [[1.98, .42, 0, .32], [2.12, -.3, 0, -.5], [1.86, 1.22, 0, .18]];
    for (let i = 0; i < N; i++) {
      const u = r();
      if (u < .52) { let lat, lon; do { lat = Math.asin(2 * r() - 1) * 180 / Math.PI; lon = r() * 360 - 180; } while (!isLand(lat, lon)); const p = latLonToVec(lat, lon, R + G() * .004); put(i, p.x, p.y, p.z, .35 / .35 * 1, r() < .12 ? .9 : .45); }
      else if (u < .62) { const lat = Math.asin(2 * r() - 1) * 180 / Math.PI, lon = r() * 360 - 180; const p = latLonToVec(lat, lon, R - .01); put(i, p.x, p.y, p.z, 1, .12); }
      else if (u < .92) { const k = Math.floor(r() * 3), [rr, ex, ey, ez] = rings[k]; const a = r() * Math.PI * 2; const p = rotE(Math.cos(a) * rr + G() * .012, G() * .012, Math.sin(a) * rr + G() * .012, ex, ey, ez); put(i, p.x, p.y, p.z, 1.8 + k * .55, r() < .2 ? .95 : .55); }
      else if (u < .96) { const lat = Math.asin(2 * r() - 1) * 180 / Math.PI, lon = r() * 360 - 180; const p = latLonToVec(lat, lon, R * (1.03 + Math.abs(G()) * .07)); put(i, p.x, p.y, p.z, .6, .15); }
      else { const v = new THREE.Vector3(G(), G(), G()).normalize().multiplyScalar(R * Math.pow(r(), .5) * .85); put(i, v.x, v.y, v.z, 1, .08); }
    }
    meta.globe = { axis: new THREE.Vector3(0, 1, 0), spin: .3, euler: [.38, 0, -.12] }; }

  // crystal: Intelligence, an icosahedral network with bright nodes and a core
  { const put = mk('crystal'); const t = (1 + Math.sqrt(5)) / 2, S = 1.86 / Math.hypot(1, t);
    const V = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(v => new THREE.Vector3(...v).multiplyScalar(S));
    const E = []; for (let a = 0; a < 12; a++) for (let b = a + 1; b < 12; b++) if (Math.abs(V[a].distanceTo(V[b]) - 2 * S) < .01) E.push([a, b]);
    const F = []; for (let a = 0; a < 12; a++) for (let b = a + 1; b < 12; b++) for (let c = b + 1; c < 12; c++) { const ab = V[a].distanceTo(V[b]), bc = V[b].distanceTo(V[c]), ca = V[c].distanceTo(V[a]); if ([ab, bc, ca].every(d => Math.abs(d - 2 * S) < .01)) F.push([a, b, c]); }
    for (let i = 0; i < N; i++) {
      const u = r(); let p, b = .3;
      if (u < .44) { const [a, c] = E[Math.floor(r() * E.length)]; p = V[a].clone().lerp(V[c], r()).add(new THREE.Vector3(G(), G(), G()).multiplyScalar(.012)); b = .7; }
      else if (u < .58) { p = V[Math.floor(r() * 12)].clone().add(new THREE.Vector3(G(), G(), G()).multiplyScalar(.055)); b = .95; }
      else if (u < .7) { const v = V[Math.floor(r() * 12)]; p = v.clone().multiplyScalar(r()).add(new THREE.Vector3(G(), G(), G()).multiplyScalar(.01)); b = .45; }
      else if (u < .84) { const [a, c, d] = F[Math.floor(r() * F.length)]; let x = r(), y = r(); if (x + y > 1) { x = 1 - x; y = 1 - y; } p = V[a].clone().multiplyScalar(1 - x - y).add(V[c].clone().multiplyScalar(x)).add(V[d].clone().multiplyScalar(y)); b = .1; }
      else { p = new THREE.Vector3(G(), G(), G()).multiplyScalar(.17); b = .5; }
      put(i, p.x, p.y, p.z, 1, b);
    }
    meta.crystal = { axis: new THREE.Vector3(.2, 1, .15).normalize(), spin: .28, euler: [.3, 0, .2] }; }

  // vault: Security, a vault door (outer ring with bolts, dial ticks, spokes, hub)
  { const put = mk('vault');
    for (let i = 0; i < N; i++) {
      const u = r(), a = r() * Math.PI * 2; let p, sp = 1, b = .4;
      if (u < .3) { const t = r() * Math.PI * 2; const rr = 1.78 + Math.cos(t) * .16; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, Math.sin(t) * .16); sp = .12; b = .55; }
      else if (u < .4) { const k = Math.floor(r() * 16), aa = k / 16 * Math.PI * 2; p = new THREE.Vector3(Math.cos(aa) * 1.5 + G() * .03, Math.sin(aa) * 1.5 + G() * .03, .14 + r() * .24); sp = .12; b = .95; }   // bolts stand proud of the door
      else if (u < .5) { const k = Math.floor(r() * 72), aa = k / 72 * Math.PI * 2, rr = 1.22 + r() * (k % 6 ? .07 : .16); p = new THREE.Vector3(Math.cos(aa) * rr, Math.sin(aa) * rr, .1); sp = -.5; b = .6; }
      else if (u < .62) { const t = r() * Math.PI * 2; const rr = 1.02 + Math.cos(t) * .06; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, -.12 + Math.sin(t) * .06); sp = 1; b = .6; }   // the wheel sits recessed
      else if (u < .76) { const k = Math.floor(r() * 6), aa = k / 6 * Math.PI * 2 + Math.PI / 12, rr = .3 + r() * .72; const w = G() * .035; p = new THREE.Vector3(Math.cos(aa) * rr - Math.sin(aa) * w, Math.sin(aa) * rr + Math.cos(aa) * w, -.12 + G() * .02); sp = 1; b = .65; }
      else if (u < .84) { const rr = Math.sqrt(r()) * .3; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, .16 + r() * .2); sp = 1; b = r() < .3 ? .95 : .5; }
      else if (u < .93) { const rr = 1.62 + G() * .01; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, -.06 - r() * .5); sp = .12; b = .3; }
      else { const rr = Math.sqrt(r()) * 1.6; p = new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, -.56); sp = .12; b = .12; }
      put(i, p.x, p.y, p.z, sp < 0 ? 0 : sp, b);   // ticks counter-rotate via the spin sign below
      if (sp < 0) out.vault[i * 4 + 3] = pack(3.5, b);   // 3.5 ~ a fast tick ring
    }
    meta.vault = { axis: new THREE.Vector3(0, 0, 1), spin: .45, euler: [.08, -.48, 0], scale: .88, sway: .3 }; }

  // card: card-local (the stage hands over the card's world matrix). Its details come from the real card's face image
  // (tools/card/bake.py), so the particle card and the solid card that replaces it line up exactly.
  { const put = mk('card'); const W = CARD.W, H = CARD.H, T = CARD.T, R = CARD.R;
    const sdf = (x, y) => { const qx = Math.abs(x) - (W / 2 - R), qy = Math.abs(y) - (H / 2 - R); return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - R; };
    let cdf = null, FW = 0, FH = 0;
    if (face && face.width) { FW = 420; FH = Math.round(420 * face.height / face.width); const c = document.createElement('canvas'); c.width = FW; c.height = FH; const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(face, 0, 0, FW, FH);
      const px = g.getImageData(0, 0, FW, FH).data; cdf = new Float32Array(FW * FH); let acc = 0;
      for (let i = 0; i < FW * FH; i++) { const l = (px[i * 4] * .3 + px[i * 4 + 1] * .59 + px[i * 4 + 2] * .11) / 255; acc += Math.pow(Math.max(l - .1, 0), 1.3); cdf[i] = acc; }
      for (let i = 0; i < cdf.length; i++) cdf[i] /= acc; }
    const pick = () => { const v = r(); let lo = 0, hi = cdf.length - 1; while (lo < hi) { const m = (lo + hi) >> 1; if (cdf[m] < v) lo = m + 1; else hi = m; } return [((lo % FW) + r()) / FW, (Math.floor(lo / FW) + r()) / FH]; };
    for (let i = 0; i < N; i++) {
      const u = r(); let x, y, z = T / 2 + .004, b = .22;
      if (cdf && u < .46) { let fu, fv; do { [fu, fv] = pick(); } while (fv > .765 && fv < .845); x = (fu - .5) * W; y = (.5 - fv) * H; b = .8; }   // skip the micro labels (CARDHOLDER, VALID THRU): too small to read in dots
      else if (u < .53) { const a = r() * Math.PI * 2, c = Math.cos(-.1), s = Math.sin(-.1); const ex = Math.cos(a) * .98 + G() * .006, ey = Math.sin(a) * .3 + G() * .006; x = .5 + ex * c - ey * s; y = .1 + ex * s + ey * c; z += .02; b = .9; }   // the face's light ring (the live glow layer)
      else if (u < .82) { let d; for (;;) { x = (r() - .5) * W; y = (r() - .5) * H; if (sdf(x, y) > 0) continue; z = (r() - .5) * T; d = Math.min(-sdf(x, y), T / 2 - Math.abs(z)); if (skin(d)) break; } b = -sdf(x, y) < .012 ? .5 : .14; }
      else if (u < .94) { for (;;) { x = (r() - .5) * W; y = (r() - .5) * H; const d = sdf(x, y); if (d < 0 && d > -.008) break; } z = (r() - .5) * T; b = .5; }
      else { do { x = (r() - .5) * W; y = (r() - .5) * H; } while (sdf(x, y) > 0); z = -T / 2 - .004; b = .1; }
      put(i, x, y, z, 0, b);
    }
    meta.card = { axis: new THREE.Vector3(0, 1, 0), spin: 0, euler: null }; }

  // liquid: Liquidity, a torus of three coils that stream round its tube as it turns (money in motion), a dense droplet at its
  // centre with a thin fountain through it, and the Liquidity chapter's four thin orbit bands, each turning at its own rate
  { const put = mk('liquid'); const R0 = 1.16, r0 = .33, nW = 10, Y = .18;
    const torus = (ph, th, rr = r0) => new THREE.Vector3((R0 + rr * Math.cos(th)) * Math.cos(ph), rr * Math.sin(th), (R0 + rr * Math.cos(th)) * Math.sin(ph));
    const BANDS = [[1.56, .5], [1.62, 2.], [1.68, .8], [1.74, 3.]];   // inside the sculpture's bound (x < 1.77)
    for (let i = 0; i < N; i++) {
      const u = r(); let p, sp = 1, b = .3;
      if (u < .42) { const coil = Math.floor(r() * 3), ph = r() * Math.PI * 2; p = torus(ph, ph * nW + coil * Math.PI * 2 / 3).add(new THREE.Vector3(G(), G(), G()).multiplyScalar(.009)); b = .75; }
      else if (u < .6) { let ph, th, d; for (;;) { ph = r() * Math.PI * 2; th = r() * Math.PI * 2; const rr = r0 * Math.sqrt(r()); d = r0 - rr; if (skin(d, .03, .08)) { p = torus(ph, th, rr); break; } } b = d < .02 ? .4 : .15; }
      else if (u < .8) { const [rr, k] = BANDS[Math.floor(r() * 4)]; let a; do { a = r() * Math.PI * 2; } while (Math.sin(a * 3 + rr * 7) < -.55);   // dashed: the turn reads
        p = new THREE.Vector3(Math.cos(a) * (rr + G() * .005), G() * .006, Math.sin(a) * (rr + G() * .005)); sp = k; b = .62; }
      else if (u < .92) { let q, d; for (;;) { q = new THREE.Vector3(G(), G(), G()).normalize().multiplyScalar(.4 * Math.cbrt(r())); d = .4 - q.length(); if (skin(d, .03, .1)) break; } p = q; sp = 0; b = d < .02 ? .7 : .3; }
      else { const y = (r() * 2 - 1) * 1.15; p = new THREE.Vector3(G() * .03, y, G() * .03); sp = 0; b = .35 * (1 - Math.abs(y) / 1.3); }
      put(i, p.x, p.y + Y, p.z, sp, b);
    }
    meta.liquid = { axis: new THREE.Vector3(0, 1, 0), spin: .4, euler: [.42, 0, .12], sway: .2 }; }

  // lattice: every particle tucked into one of the lattice's holes (start of the gate and the pour)
  { const put = mk('lattice');
    for (let i = 0; i < N; i++) { let x, z; do { const ix = Math.floor(r() * LAT_N), iz = Math.floor(r() * LAT_N); x = ((ix + .5) / LAT_N - .5) * LAT_W; z = ((iz + .5) / LAT_N - .5) * LAT_W; } while (Math.hypot(x, z) > LAT_R - .12); put(i, x, LAT_Y - .03 - r() * .05, z, 0, .3); }
    meta.lattice = { axis: new THREE.Vector3(0, 1, 0), spin: 0, euler: [0, 0, 0] }; }
  // a leader-line anchor per form: a real target point on its upper right (forms that spin: near the top of the axis)
  for (const k of ['m', 'coins', 'globe', 'crystal', 'vault', 'liquid', 'card']) {
    const a = out[k], md = meta[k]; const e = md.euler ? new THREE.Euler(...md.euler) : new THREE.Euler(-.1, -.42, -.06); let best = -1e9, bi = 0; const v = new THREE.Vector3();
    for (let i = 0; i < N; i += 7) { if (Math.floor(a[i * 4 + 3] / 4) / 8 < .45) continue; v.set(a[i * 4], a[i * 4 + 1], a[i * 4 + 2]).applyEuler(e);
      const sc = md.spin ? v.y - .55 * Math.hypot(v.x, v.z) + .25 * v.x : v.x * .6 + v.y + v.z * .2; if (sc > best) { best = sc; bi = i; } }
    md.anchor = bi;
  }
  return { forms: out, meta };
}

// ------------------------------------------------------------------ the simulation + its draw
export class Sculpture {
  constructor(renderer, land, opts) {
    this.r = renderer; this.opts = opts;
    const SW = opts.mobile ? 256 : 512, SH = opts.mobile ? 128 : 384; this.SW = SW; this.SH = SH; const N = this.N = SW * SH;   // 197k points on desktop (1.5x: the beads need the density; phones keep 33k)
    const { forms, meta } = buildForms(N, land, opts.cardFace); this.meta = meta; this.forms = forms;
    const ftype = renderer.extensions.has('EXT_color_buffer_float') ? THREE.FloatType : THREE.HalfFloatType;
    const tex = a => { const t = new THREE.DataTexture(a, SW, SH, THREE.RGBAFormat, THREE.FloatType); t.needsUpdate = true; t.magFilter = t.minFilter = THREE.NearestFilter; return t; };
    this.formTex = {}; for (const k in forms) this.formTex[k] = tex(forms[k]);
    const rt = () => new THREE.WebGLRenderTarget(SW, SH, { type: ftype, format: THREE.RGBAFormat, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: false, stencilBuffer: false });
    this.pos = [rt(), rt()]; this.vel = [rt(), rt()]; this.ping = 0;
    // initial state: in the lattice, at rest and cold (vel.w is the stir's heat; the seed is a hash of the texel). The draws
    // are kept so the render's seeds below come out of the same sequence as before
    const r = rng(9); const v0 = new Float32Array(N * 4); for (let i = 0; i < N; i++) r();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); this.quadScene = new THREE.Scene();
    const quad = new THREE.Mesh(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)));
    quad.frustumCulled = false; this.quadScene.add(quad); this.quad = quad;
    this.copyMat = new THREE.ShaderMaterial({ uniforms: { t: { value: null } }, vertexShader: QUAD_V, fragmentShader: 'uniform sampler2D t; varying vec2 vUv; void main(){ gl_FragColor = texture2D(t, vUv); }' });
    this.blit(tex(forms.lattice), this.pos[0]); this.blit(tex(forms.lattice), this.pos[1]);
    const vt = tex(v0); this.blit(vt, this.vel[0]); this.blit(vt, this.vel[1]);
    this.velMat = new THREE.ShaderMaterial({ vertexShader: QUAD_V, fragmentShader: VEL_F, uniforms: {
      tPos: { value: null }, tVel: { value: null }, tA: { value: this.formTex.lattice }, tB: { value: this.formTex.lattice },
      uMatA: { value: new THREE.Matrix4() }, uMatB: { value: new THREE.Matrix4() }, uAxisA: { value: new THREE.Vector3(0, 1, 0) }, uAxisB: { value: new THREE.Vector3(0, 1, 0) },
      uSpinA: { value: 0 }, uSpinB: { value: 0 }, uTime: { value: 0 }, uDt: { value: .016 }, uMorph: { value: 1 }, uK: { value: 46 }, uNoise: { value: 1.6 }, uBurst: { value: 2.6 },
      uDrag: { value: 9 }, uRise: { value: 2.2 }, uScrub: { value: 0 }, uSwirl: { value: opts.reduced ? 0 : 1 }, uHold: { value: 1 }, uBound: { value: 2.75 }, uVP: { value: new THREE.Matrix4() }, uCamP: { value: new THREE.Vector3() }, uCamF: { value: new THREE.Vector3(0, 0, -1) },
      uCamR: { value: new THREE.Vector3(1, 0, 0) }, uCamU: { value: new THREE.Vector3(0, 1, 0) }, uFpx: { value: 800 }, uIK: { value: 1 },
      tFluid: { value: null }, uStir: { value: new THREE.Vector4(-1e4, -1e4, 0, 70) }, uStirV: { value: new THREE.Vector2() }, uStirK: { value: new THREE.Vector4(.45, .65, .8, .15) },
      uStirOn: { value: 0 }, uHDec: { value: 1 }, uDiv: { value: 2.2 }, ...IXU } });
    this.posMat = new THREE.ShaderMaterial({ vertexShader: QUAD_V, fragmentShader: POS_F, uniforms: { tPos: { value: null }, tVel: { value: null }, uDt: { value: .016 }, uLatY: { value: LAT_Y } } });

    // draw: the sculpture, its reflection (pool + floor), and the streams from the lattice
    const ref = new Float32Array(N * 2), sd = new Float32Array(N);
    for (let i = 0; i < N; i++) { ref[i * 2] = (i % SW + .5) / SW; ref[i * 2 + 1] = (Math.floor(i / SW) + .5) / SH; sd[i] = r(); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3)); g.setAttribute('ref', new THREE.BufferAttribute(ref, 2)); g.setAttribute('seed', new THREE.BufferAttribute(sd, 1));
    this.u = { tPos: { value: null }, tVel: { value: null }, tForm: { value: this.formTex.lattice }, tFormA: { value: this.formTex.lattice }, uFormMix: { value: 1 }, uPx: { value: 1000 }, uSize: { value: .013 }, uAlpha: { value: 0 }, uMirror: { value: 0 }, uWaterY: { value: WATER_Y },
      uPool: { value: POOL }, uTime: { value: 0 }, uTint: { value: new THREE.Color(.78, 1., .92) }, uGlow: { value: 1 }, uDim: { value: 1 }, uDpr: { value: 1 }, uRefl: { value: 1 }, uFormK: { value: 1 }, uFormS: { value: 1 }, uGain: { value: opts.mobile ? 1.45 : .95 }, uBead: { value: 1.2 }, uHeatK: { value: 1.1 } };   // (phones keep a third fewer points: the same light from fewer)
    const mat = (mirror) => new THREE.ShaderMaterial({ uniforms: { ...this.u, ...IXU, uMirror: { value: mirror } }, transparent: true, depthWrite: false, depthTest: !mirror, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec2 ref; attribute float seed; uniform sampler2D tPos, tVel, tForm, tFormA; uniform float uPx, uSize, uAlpha, uMirror, uWaterY, uPool, uTime, uGlow, uRefl, uFormK, uFormS, uFormMix, uGain, uBead, uHeatK;
        varying float vA; varying float vB; varying float vS; varying vec3 vC; varying float vBk; uniform float uDpr;
        ${IX_GLSL}
        void main(){ vec4 P = texture2D(tPos, ref); vec4 V = texture2D(tVel, ref); vec3 p = P.xyz;
          float br = mix(floor(texture2D(tFormA, ref).w / 4.) / 8., floor(texture2D(tForm, ref).w / 4.) / 8., uFormMix);   // each point's brightness, handed over as it arrives
          float spd = length(V.xyz);
          float refl = 1.;
          if (uMirror > .5) { vec3 p0 = p; p.y = 2. * uWaterY - p0.y;
            vec3 c = cameraPosition; float t = (uWaterY - c.y) / (p.y - c.y); vec3 hit = c + (p - c) * t;
            float inPool = step(length(hit.xz), uPool - .02);
            if (inPool < .5) { p.y = 2. * ${FLOOR_Y.toFixed(3)} - p0.y; t = (${FLOOR_Y.toFixed(3)} - c.y) / (p.y - c.y); hit = c + (p - c) * t; }
            refl = mix(.2 * exp(-length(hit.xz) * .16) * step(3.27, length(hit.xz)), .4, inPool) * uRefl; }
          vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
          float tw = .6 + .4 * sin(uTime * (1.6 + seed * 1.6) + seed * 40.);   // a 2-4 s twinkle
          float r1 = fract(seed * 97.31), r2 = fract(seed * 13.7), r3 = fract(seed * 7.77);
          // 56% fine dust, 4% sparkle, 28% beads, 8% large beads, 4% soft bokeh: the beads carry the form's mass, the dust its glow
          float cls = r1 < .56 ? 0. : (r1 < .6 ? 3. : (r1 < .88 ? 1. : (r1 < .96 ? 4. : 2.)));
          float bead = cls > .5 && cls < 1.5 || cls > 3.5 ? 1. : 0.;
          float szPx = (cls < .5 ? 1.4 + r2 : (cls > 3.5 ? 4.1 + r2 * 1.9 : (cls > 2.5 ? 1.3 : (cls < 1.5 ? 2.3 + r2 * 1.5 : 3.4 + r2 * 1.1)))) * uFormS;
          float bm = cls > 2.5 && cls < 3.5 ? 2.6 * (.5 + .5 * sin(uTime * 5. + seed * 90.)) : mix(.3, 2.2, pow(r3, 2.2));   // brightness; sparkles flicker hot
          float dm = szPx * uDpr * (12.5 / max(-mv.z, .1)) * (1. + br * .3) * (uMirror > .5 ? 2.6 : 1.);
          float df = clamp(dm, 1.2, 16.); gl_PointSize = df;
          vec4 cv = modelViewMatrix * vec4(0., .1, 0., 1.); float dz = (-mv.z) - (-cv.z);
          float depth = mix(1., .45, smoothstep(-1.4, 1.6, dz));
          vA = uAlpha * uFormK * refl * (.1 + br * .36) * bm * tw * depth * 1.15 * min(1., dm * dm / (df * df) * 1.6) * (1. - min(spd, 4.) * .08) * (cls > 1.5 && cls < 2.5 ? .55 : 1.) * (uMirror > .5 ? 1.05 : 1.);
          vA *= uGain * mix(1., uBead, bead * (uMirror > .5 ? 0. : 1.));
          float rr = length(p - vec3(0., .1, 0.)) / 1.9;
          vC = mix(vec3(.3, 1., .7), vec3(.95, 1., .98), smoothstep(.1, .75, rr));                                         // emerald-mint cores, white rims
          // lit from the canopy overhead (and a touch of the top-left shaft): the tops of a form bright, its underside and back
          // falling to about a third, so it reads as a solid lit from above
          float key = dot(normalize(p - vec3(0., .1, 0.) + 1e-4), normalize(vec3(-.35, 1., .45)));
          float lit = smoothstep(-.75, .85, key);
          vA *= mix(.42, 1.55, lit) * (1. + (1. - smoothstep(.0, .3, rr)) * .9 * step(fract(seed * 31.7), .3));   // a hot core
          vC = mix(vC, vec3(0., .85, .59), .3 * (1. - smoothstep(.3, 1.2, bm)) + (fract(seed * 53.1) < .12 ? .45 : 0.) + (1. - depth) * .5);   // emerald in the falloff and on the far side
          vC = mix(vC, vec3(.95, 1., .98), lit * lit * .4);            // the lit tops go white-hot
          vC = mix(vC, vec3(0., .78, .55), (1. - lit) * .35);          // the shaded side deepens to emerald
          vC = mix(vC, vec3(1.), cls > 2.5 && cls < 3.5 ? .8 : 0.);
          vBk = cls > 1.5 && cls < 2.5 ? 1. : (bead > .5 && uMirror < .5 ? 2. : 0.);
          { vec3 f = mpField(gl_Position); float lt = mpLit(gl_Position); vA *= 1. + f.z * .35 + lt * .2; vC = mix(vC, vec3(.92, 1., .97), f.z * .15 + lt * .1); }   // the field's heat only a little: the beads glow with their own (V.w)
          // the stir's heat: a ribbon's beads run mint-white, and its fresh head (at the cursor) burns brightest
          { float ht = V.w; vA *= 1. + smoothstep(.3, 1., ht) * uHeatK; vC = mix(vC, vec3(.9, 1., .96), smoothstep(.12, .8, ht) * .65); }
          vB = br; vS = df; }`,
      fragmentShader: `uniform vec3 uTint; uniform float uGlow; varying float vA; varying float vB; varying float vS; varying vec3 vC; varying float vBk;
        void main(){ vec2 c = gl_PointCoord - .5; float d = length(c) * 2.; float core = mix(exp(-d * d * 5.5), smoothstep(1., .6, d) * .8 + exp(-d * d * 4.) * .3, min(vBk, 1.));
          if (vBk > 1.5) { // a bead: a small sphere lit from the canopy (a crisp disc, ~1 px rim, shaded top to bottom, a glint up top)
            float aa = 1.8 / max(vS, 1.); float disc = 1. - smoothstep(1. - aa, 1., d); vec2 q = c * 2.;
            vec3 n = vec3(q.x, -q.y, sqrt(max(0., 1. - dot(q, q)))); vec3 L = vec3(-.32, .78, .54);
            core = disc * (.22 + .8 * max(dot(n, L), 0.) + pow(max(dot(n, normalize(L + vec3(0., 0., 1.))), 0.), 14.) * .9) * .5; }
          vec3 col = vC * uGlow;
          gl_FragColor = vec4(col * core * vA, 1.); }` });
    this.points = new THREE.Points(g, mat(0)); this.points.frustumCulled = false; this.points.renderOrder = 6;
    // the reflection draws every third particle (its points are big and soft: fill rate, not count, is the cost)
    const gm = new THREE.BufferGeometry(); const M3 = Math.floor(N / 3), refM = new Float32Array(M3 * 2), sdM = new Float32Array(M3);
    for (let i = 0; i < M3; i++) { refM[i * 2] = ref[i * 6]; refM[i * 2 + 1] = ref[i * 6 + 1]; sdM[i] = sd[i * 3]; }
    gm.setAttribute('position', new THREE.BufferAttribute(new Float32Array(M3 * 3), 3)); gm.setAttribute('ref', new THREE.BufferAttribute(refM, 2)); gm.setAttribute('seed', new THREE.BufferAttribute(sdM, 1));
    this.mirror = new THREE.Points(gm, mat(1)); this.mirror.frustumCulled = false; this.mirror.renderOrder = 5;
    // streams: columns of light falling from lattice holes (analytic, no simulation)
    const SN = opts.mobile ? 2600 : 7800, cols = opts.mobile ? 28 : 46; const sa = new Float32Array(SN * 4);
    const rr = rng(31); const C = [];
    for (let k = 0; k < cols; k++) { let ix, iz; do { const a = rr() * Math.PI * 2, rad = Math.min(Math.abs(gauss(rr)) * 1.05, LAT_R - .3); ix = Math.round((Math.cos(a) * rad / LAT_W + .5) * LAT_N - .5); iz = Math.round((Math.sin(a) * rad / LAT_W + .5) * LAT_N - .5); } while (C.some(c => c[0] === ix && c[1] === iz)); C.push([ix, iz, rr()]); }
    this.streamCols = C;
    for (let i = 0; i < SN; i++) { const c = C[i % cols]; sa[i * 4] = ((c[0] + .5) / LAT_N - .5) * LAT_W; sa[i * 4 + 1] = ((c[1] + .5) / LAT_N - .5) * LAT_W; sa[i * 4 + 2] = rr(); sa[i * 4 + 3] = c[2]; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SN * 3), 3)); sg.setAttribute('aS', new THREE.BufferAttribute(sa, 4));
    this.su = { uTime: { value: 0 }, uPour: { value: 0 }, uTop: { value: 1.8 }, uLatY: { value: LAT_Y }, uPx: { value: 1000 }, uAlpha: { value: 0 }, uTint: this.u.uTint, uMirror: { value: 0 }, uWaterY: { value: WATER_Y }, uPool: { value: POOL } };
    const smat = mirror => new THREE.ShaderMaterial({ uniforms: { ...this.su, ...IXU, uMirror: { value: mirror } }, transparent: true, depthWrite: false, depthTest: !mirror, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec4 aS; uniform float uTime, uPour, uTop, uLatY, uPx, uAlpha, uMirror, uWaterY, uPool; varying float vA;
        ${IX_GLSL}
        void main(){ float col = aS.w; float sp = .32 + col * .5 + uPour * .5;
          float f = fract(aS.z + uTime * sp * (.9 + fract(aS.z * 17.) * .2));
          float act = smoothstep(.15, .6, fract(col * 7.3 + uTime * .05)) * (.35 + .65 * uPour) + uPour * .5;
          float end = mix(uTop, uTop - .9, fract(col * 13.1));
          vec3 p = vec3(aS.x, mix(uLatY - .03, end, f * f * (1.4 - f * .4)), aS.y);
          p.xz += vec2(sin(f * 7. + col * 20.), cos(f * 5. + col * 9.)) * .025 * f;
          float refl = 1.;
          if (uMirror > .5) { p.y = 2. * uWaterY - p.y; vec3 c = cameraPosition; float t = (uWaterY - c.y) / (p.y - c.y); vec3 hit = c + (p - c) * t; refl = .3 * step(length(hit.xz), uPool); }
          vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
          float lift = 0.; if (uMirror < .5) gl_Position = mpInteract(gl_Position, 1., lift);
          float dm = .014 * uPx / max(-mv.z, .1); gl_PointSize = max(dm, 1.5);
          vA = (1. + lift * 1.3) * uAlpha * refl * min(1., act) * smoothstep(0., .08, f) * (1. - smoothstep(.75, 1., f)) * (.55 + .45 * sin(aS.z * 80. + uTime * 3.)); }`,
      fragmentShader: `uniform vec3 uTint; varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c) * 2.; gl_FragColor = vec4(mix(uTint, vec3(1.), .5) * exp(-d * d * 5.) * vA, 1.); }` });
    this.streams = new THREE.Points(sg, smat(0)); this.streams.frustumCulled = false; this.streams.renderOrder = 6;
    this.streamsMirror = new THREE.Points(sg, smat(1)); this.streamsMirror.frustumCulled = false; this.streamsMirror.renderOrder = 5;
    // a soft light the sculpture throws into the haze around it (billboard; the bloom alone reads as a hard-edged object)
    // (kept faint and tight: a broad one read as a lit grey panel behind every form, brighter than the form itself)
    this.haloU = { uA: { value: .025 }, uDim: this.u.uDim, uTint: this.u.uTint, uAlpha: this.u.uAlpha };
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: this.haloU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; vec4 c = modelViewMatrix * vec4(0., 0., 0., 1.); gl_Position = projectionMatrix * (c + vec4(position.xy * vec2(3.6, 3.3), 0., 0.)); }',
      fragmentShader: 'uniform float uA, uAlpha; uniform vec3 uTint; varying vec2 vP; void main(){ float r = length(vP); float a = exp(-r * r * 3.) * .5 * uA * uAlpha; gl_FragColor = vec4(mix(uTint, vec3(1.), .4) * a, 1.); }' }));
    this.halo.frustumCulled = false; this.halo.renderOrder = 3; this.halo.position.set(0, .05, -.3);
    // fine connecting lines over the point cloud (a few nearest neighbours per node, per form, read live from the simulation:
    // they stretch and fade when a morph pulls their two points apart, and join again as the next form settles)
    { const LF = this.lineForms = ['seed', 'm', 'coins', 'globe', 'crystal', 'vault', 'liquid']; const NM = opts.mobile ? 650 : 1400; const lr = rng(57);
      const la = [], lo = [], lf = [], ll = [], uvOf = i => [(i % SW + .5) / SW, (Math.floor(i / SW) + .5) / SH];
      LF.forEach((name, fi) => { const F = forms[name], sc = meta[name].scale || 1; const idx = [];
        for (let guard = 0; idx.length < NM && guard < NM * 30; guard++) { const i = Math.floor(lr() * N); const br = Math.floor(F[i * 4 + 3] / 4) / 8; if (lr() < .15 + br) idx.push(i); }   // nodes favour the bright skin
        const P = idx.map(i => [F[i * 4], F[i * 4 + 1], F[i * 4 + 2], F[i * 4 + 3] % 4]); const seen = new Set();
        for (let a = 0; a < P.length; a++) { let b1 = -1, d1 = 1e9, b2 = -1, d2 = 1e9; const A = P[a];
          for (let b = 0; b < P.length; b++) { const Q = P[b]; if (b === a || Math.abs(A[3] - Q[3]) > 1e-3) continue;   // same spin ring only: never a chord between two rings turning apart
            const dx = A[0] - Q[0], dy = A[1] - Q[1], dz = A[2] - Q[2], d = dx * dx + dy * dy + dz * dz; if (d < d1) { b2 = b1; d2 = d1; b1 = b; d1 = d; } else if (d < d2) { b2 = b; d2 = d; } }
          for (const [b, d] of [[b1, d1], [b2, d2]]) { if (b < 0 || d > .075) continue; const key = Math.min(a, b) * 65536 + Math.max(a, b); if (seen.has(key)) continue; seen.add(key);
            const L0 = Math.sqrt(d) * sc, ua = uvOf(idx[a]), ub = uvOf(idx[b]);
            la.push(...ua, ...ub); lo.push(...ub, ...ua); lf.push(fi, fi); ll.push(L0, L0); } } });
      const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lf.length * 3), 3));
      lg.setAttribute('aRef', new THREE.Float32BufferAttribute(la, 2)); lg.setAttribute('aOther', new THREE.Float32BufferAttribute(lo, 2)); lg.setAttribute('aForm', new THREE.Float32BufferAttribute(lf, 1)); lg.setAttribute('aL0', new THREE.Float32BufferAttribute(ll, 1));
      this.lineU = { tPos: this.u.tPos, uAlpha: this.u.uAlpha, uTime: this.u.uTime, uW: { value: new Array(8).fill(0) } };
      this.lines = new THREE.LineSegments(lg, new THREE.ShaderMaterial({ uniforms: this.lineU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec2 aRef, aOther; attribute float aForm, aL0; uniform sampler2D tPos; uniform float uAlpha, uTime, uW[8]; varying float vA;
          void main(){ vec3 p = texture2D(tPos, aRef).xyz, q = texture2D(tPos, aOther).xyz; float L = length(p - q);
            float w = uW[int(aForm + .5)] * (1. - smoothstep(aL0 * 1.3, aL0 * 2.3 + .02, L));
            vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
            vec4 cv = modelViewMatrix * vec4(0., .1, 0., 1.); float far = smoothstep(-1.2, 1.4, cv.z - mv.z);   // the far side of a form dims, as its points do
            vA = w * uAlpha * (.65 + .35 * sin(uTime * .8 + aForm * 3. + aL0 * 60.)) * mix(1., .4, far); }`,
        fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(vec3(.72, 1., .9) * vA * .085, 1.); }` }));   // faint: the beads carry the form, not a fibre web
      this.lines.frustumCulled = false; this.lines.renderOrder = 6; }
    // vertical light trails: slow filaments from the installation to the dais, each with a gliding bright head
    { const TN = opts.mobile ? 34 : 70, TS = 28, tr = rng(83); const tp = new Float32Array(TN * TS * 6), ta = new Float32Array(TN * TS * 8); let v = 0;
      for (let k = 0; k < TN; k++) { const a = tr() * Math.PI * 2, rad = .3 + Math.sqrt(tr()) * 2.55, x = Math.cos(a) * rad, z = Math.sin(a) * rad;
        const sp = .45 + tr() * .8, ph = tr(), len = .5 + tr() * 1.4, br = .35 + tr() * .65;
        for (let q = 0; q < TS; q++) for (const e of [q, q + 1]) { tp[v * 3] = x; tp[v * 3 + 1] = e / TS; tp[v * 3 + 2] = z; ta.set([sp, ph, len, br], v * 4); v++; } }
      const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.BufferAttribute(tp, 3)); tg.setAttribute('aT', new THREE.BufferAttribute(ta, 4));
      this.trailU = { uTime: this.u.uTime, uAlpha: this.su.uAlpha, uTop: { value: LAT_Y - .05 }, uBot: { value: WATER_Y + .01 } };
      this.trails = new THREE.LineSegments(tg, new THREE.ShaderMaterial({ uniforms: { ...this.trailU, ...IXU }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: `attribute vec4 aT; uniform float uTime, uAlpha, uTop, uBot; varying float vA;
          ${IX_GLSL}
          void main(){ float f = position.y, H = uTop - uBot; float head = fract(uTime * aT.x * .1 + aT.y) * 1.25 - .1;
            float d = (head - f) * H; float a = d >= 0. ? exp(-d / aT.z) : exp(d / .04);   // a long tail above the head, a crisp front below it
            a = a * .85 + .06;                                                                // the filament itself stays faintly lit
            a *= smoothstep(0., .05, f) * (1. - smoothstep(.93, 1., f));
            vec4 mv = modelViewMatrix * vec4(position.x, mix(uTop, uBot, f), position.z, 1.); gl_Position = projectionMatrix * mv;
            float lift; gl_Position = mpInteract(gl_Position, .7, lift);
            vA = a * aT.w * uAlpha * (1. + lift); }`,
        fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(vec3(.7, .95, 1.) * vA * .2, 1.); }` }));
      this.trails.frustumCulled = false; this.trails.renderOrder = 6; }
    this.group = new THREE.Group(); this.group.add(this.halo, this.mirror, this.streamsMirror, this.points, this.streams, this.lines, this.trails);

    // cycle state
    this.cur = 'lattice'; this.next = 'lattice'; this.morph = 1; this.morphDur = 2.6; this.hold = 0; this.cycle = false; this.idx = 0;
    this.mode = 'time'; this.active = null;   // 'time': go() plays a morph over morphDur; 'scrub': scrub() sets it from the scroll
    this.listeners = [];
    this.cardMatrix = new THREE.Matrix4();
  }
  blit(src, dst) { this.copyMat.uniforms.t.value = src; this.quad.material = this.copyMat; const r = this.r, prev = r.getRenderTarget(); r.setRenderTarget(dst); r.render(this.quadScene, this.cam); r.setRenderTarget(prev); }
  matFor(name, t) {
    const m = new THREE.Matrix4(), md = this.meta[name];
    if (name === 'card') return m.copy(this.cardMatrix);
    if (md.euler) m.makeRotationFromEuler(new THREE.Euler(md.euler[0], md.euler[1] + Math.sin(t * .16) * (md.sway ?? .12), md.euler[2]));   // a slow turn: the forms read as solids, never face-on
    if (md.scale) m.scale(new THREE.Vector3(md.scale, md.scale, md.scale));
    return m;
  }
  // world position of a form's anchor point at time t (the same spin + matrix the simulation applies)
  anchorAt(name, t, out = new THREE.Vector3()) {
    const md = this.meta[name], a = this.forms[name], i = md.anchor || 0; const w = a[i * 4 + 3], k = w % 4;
    out.set(a[i * 4], a[i * 4 + 1], a[i * 4 + 2]);
    out.multiplyScalar(.9);   // a little inside the silhouette: the leader lands on the form, not on a corner tangent
    if (md.spin) out.applyAxisAngle(md.axis, t * md.spin * k);
    return out.applyMatrix4(this.matFor(name, t));
  }
  // start a morph to `name` (dur s); the cycle then holds it for `hold` s
  go(name, dur = 2.6) {
    if (this.mode === 'scrub') { this.mode = 'time'; if (this.morph >= 1) this.cur = this.next; }
    if (name === this.next && this.morph < 1) return;
    this.cur = this.morph >= .62 ? this.next : this.cur;   // mid-morph: whoever has mostly arrived is the new start
    this.next = name; this.morph = 0; this.morphDur = dur; this.hold = 0;
    this.listeners.forEach(f => f(name));
  }
  onForm(f) { this.listeners.push(f); }
  // the hero's scroll: `pos` runs 0..forms.length-1 (an integer holds that form, a fraction is part way to the next)
  scrub(forms, pos) {
    const n = forms.length - 1; pos = Math.min(n, Math.max(0, pos));
    let i = Math.floor(pos), p = pos - i;
    if (p > .9985) { i++; p = 0; } else if (p < .0015) p = 0;
    if (i >= n) { i = n; p = 0; }
    const a = forms[i], b = p > 0 ? forms[i + 1] : a;
    if (this.mode !== 'scrub') { this.mode = 'scrub'; }
    if (a !== this.cur || b !== this.next) this.hold = 0;
    this.cur = a; this.next = b; this.morph = p > 0 ? p : 1;
    const act = forms[Math.min(n, Math.round(pos))];
    if (act !== this.active) { this.active = act; this.listeners.forEach(f => f(act)); }
  }
  // the camera the pointer field was drawn for (fpxCss: CSS px per world unit at unit depth)
  setView(camera, fpxCss) { const u = this.velMat.uniforms; camera.updateMatrixWorld(); u.uVP.value.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    u.uCamP.value.setFromMatrixPosition(camera.matrixWorld); camera.getWorldDirection(u.uCamF.value);
    u.uCamR.value.setFromMatrixColumn(camera.matrixWorld, 0).normalize(); u.uCamU.value.setFromMatrixColumn(camera.matrixWorld, 1).normalize(); u.uFpx.value = fpxCss; }
  // the cursor's stir, fed by the stage each frame in the hero: the flow (js/gl/fluid.js), and the capture at the cursor
  // (CSS px, y up; strength 0..1, radius px; velocity px/s; the heat it gives the beads it catches)
  stir(tex, on, x = -1e4, y = -1e4, cap = 0, rad = 70, vx = 0, vy = 0, capHeat = 0) {
    const u = this.velMat.uniforms; u.tFluid.value = tex; u.uStirOn.value = on && tex ? 1 : 0;
    u.uStir.value.set(x, y, cap, rad); u.uStirV.value.set(vx, vy); u.uStirK.value.w = capHeat; }
  step(t, dt) {
    if (this.paused) return;   // capture: hold the frame exactly where the morph was stopped
    dt = Math.min(dt, 1 / 30);
    if (this.mode === 'scrub') { if (this.morph >= 1) this.hold += dt; }
    else if (this.morph < 1) this.morph = Math.min(1, this.morph + dt / this.morphDur);
    else this.hold += dt;
    const u = this.velMat.uniforms;
    u.tA.value = this.formTex[this.cur]; u.tB.value = this.formTex[this.next];
    u.uMatA.value.copy(this.matFor(this.cur, t)); u.uMatB.value.copy(this.matFor(this.next, t));
    u.uAxisA.value.copy(this.meta[this.cur].axis); u.uAxisB.value.copy(this.meta[this.next].axis);
    u.uSpinA.value = this.meta[this.cur].spin; u.uSpinB.value = this.meta[this.next].spin;
    u.uTime.value = t; u.uMorph.value = this.morph; u.uBound.value = this.cur === 'lattice' || this.next === 'lattice' || this.next === 'seed' ? 0 : 2.3; u.uHold.value = this.next === 'card' || this.next === 'lattice' ? 0 : 1; u.uScrub.value = this.mode === 'scrub' ? 1 : 0;
    // two half steps per frame keep the springs stable at 30 fps
    // one step at 60 fps is stable (dt·√k ≈ .11); two when frames run long
    const sub = dt > 1 / 45 ? 2 : 1, h = dt / sub;
    u.uDt.value = h; this.posMat.uniforms.uDt.value = h;
    for (let s = 0; s < sub; s++) {
      const a = this.ping, b = 1 - a;
      u.tPos.value = this.pos[a].texture; u.tVel.value = this.vel[a].texture; this.quad.material = this.velMat; this.r.setRenderTarget(this.vel[b]); this.r.render(this.quadScene, this.cam);
      this.posMat.uniforms.tPos.value = this.pos[a].texture; this.posMat.uniforms.tVel.value = this.vel[b].texture; this.quad.material = this.posMat; this.r.setRenderTarget(this.pos[b]); this.r.render(this.quadScene, this.cam);
      this.ping = b;
    }
    this.r.setRenderTarget(null);
    this.u.tPos.value = this.pos[this.ping].texture; this.u.tVel.value = this.vel[this.ping].texture; this.u.tForm.value = this.formTex[this.next]; this.u.tFormA.value = this.formTex[this.cur];
    // how far the points have arrived (brightness, density and the streams' top follow it, so a scrub never pops)
    const arrive = this.morph >= 1 ? 1 : smooth(.32, .95, this.morph); this.u.uFormMix.value = arrive;
    for (const m of [this.points.material, this.mirror.material]) { m.uniforms.tPos.value = this.u.tPos.value; m.uniforms.tVel.value = this.u.tVel.value; m.uniforms.tForm.value = this.u.tForm.value; m.uniforms.tFormA.value = this.u.tFormA.value; m.uniforms.uFormMix.value = arrive; }
    const fly = this.morph < 1 ? Math.sin(Math.PI * this.morph) : 0;
    this.su.uPour.value += ((this.next === 'lattice' ? 0 : fly) - this.su.uPour.value) * .08;
    { const tA = TOPY[this.cur] ?? TOPY[this.next] ?? this.su.uTop.value, tB = TOPY[this.next] ?? tA; this.su.uTop.value += (lerpN(tA, tB, arrive) - this.su.uTop.value) * .05; }
    this.su.uTime.value = t; this.u.uTime.value = t;
    { // the lines belong to the form being held: they fade as its points leave and join again as the next form settles
      const lw = this.lineU.uW.value, e = this.morph;
      for (let k = 0; k < this.lineForms.length; k++) { const n = this.lineForms[k]; let w = 0;
        if (n === this.next) w = e >= 1 ? 1 : Math.max(0, (e - .6) / .4) ** 2;
        if (n === this.cur && e < 1) w = Math.max(w, 1 - Math.min(1, e / .2));
        lw[k] += (w - lw[k]) * Math.min(1, dt * 4); } }
    const FK = { card: .5, coins: .64, liquid: .48, globe: .82, vault: .85, crystal: .9, seed: .42, lattice: 1 }, fkA = FK[this.cur] ?? 1, fkB = FK[this.next] ?? 1;   // the densest, brightest forms held back so they keep detail
    const fk = lerpN(fkA, fkB, arrive); this.u.uFormK.value += (fk - this.u.uFormK.value) * .05;
    const fs = lerpN(this.cur === 'card' ? .62 : 1, this.next === 'card' ? .62 : 1, arrive); this.u.uFormS.value += (fs - this.u.uFormS.value) * .05;   // dense small forms would blow out to white
  }
}
function smooth(a, b, x) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
function lerpN(a, b, t) { return a + (b - a) * t; }
