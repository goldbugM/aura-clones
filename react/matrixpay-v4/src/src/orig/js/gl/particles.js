import * as THREE from 'three';
import { rng, gauss } from './util.js';
import { CARD, CHIP } from './card.js';
import { WORLD } from './world.js';
import { PT_VERT, PT_FRAG, PT_SPRITE } from './pointstyle.js';
import { IXU, IX_GLSL } from './interact.js';

export function latLonToVec(lat, lon, r) {
  const p = lat * Math.PI / 180, l = lon * Math.PI / 180;
  return new THREE.Vector3(r * Math.cos(p) * Math.sin(l), r * Math.sin(p), r * Math.cos(p) * Math.cos(l));
}

function decodeLand(land) {
  const bin = atob(land.bits); const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return (lat, lon) => {
    const row = Math.min(land.h - 1, Math.max(0, Math.floor((90 - lat) / 180 * land.h)));
    const col = Math.min(land.w - 1, Math.max(0, Math.floor((lon + 180) / 360 * land.w)));
    const i = row * land.w + col; return (bytes[i >> 3] >> (7 - (i & 7))) & 1;
  };
}

// Builds all formations (fixed seed) and returns attribute arrays + tunnel hub graph.
export function buildFormations(N, land) {
  const r = rng(2026);
  // The network graph (hubs + edges) keeps the exact layout it had before the pool got finer and denser: replay the
  // original pool size's random draws (9,500 desktop / 5,200 phone) on a second generator, then draw the hubs from it.
  const rh = rng(2026), NH = N > 20000 ? 9500 : 5200;
  for (let i = 0; i < NH * 4; i++) rh();
  for (let i = 0; i < NH; i++) { let x, y; for (;;) { x = (rh() - .5) * (CARD.W - .04); y = (rh() - .5) * (CARD.H - .04); const cx = Math.max(Math.abs(x) - (CARD.W / 2 - CARD.R), 0), cy = Math.max(Math.abs(y) - (CARD.H / 2 - CARD.R), 0); if (cx * cx + cy * cy < CARD.R * CARD.R) break; } if (rh() < .04) { rh(); rh(); } }
  const F = []; for (let k = 0; k < 7; k++) F.push(new Float32Array(N * 4));
  const RND = new Float32Array(N * 4);
  for (let i = 0; i < N * 4; i++) RND[i] = r();
  const set = (k, i, x, y, z, w) => { const a = F[k]; a[i * 4] = x; a[i * 4 + 1] = y; a[i * 4 + 2] = z; a[i * 4 + 3] = w; };

  // F0 — card face (card-local), w = distance to chip (release order)
  for (let i = 0; i < N; i++) {
    let x, y;
    for (;;) { x = (r() - .5) * (CARD.W - .04); y = (r() - .5) * (CARD.H - .04); const cx = Math.max(Math.abs(x) - (CARD.W / 2 - CARD.R), 0), cy = Math.max(Math.abs(y) - (CARD.H / 2 - CARD.R), 0); if (cx * cx + cy * cy < CARD.R * CARD.R) break; }
    // bias some points onto the chip so it "erupts" first
    if (r() < .04) { x = CHIP.x + (r() - .5) * CHIP.w; y = CHIP.y + (r() - .5) * CHIP.h; }
    set(0, i, x, y, CARD.T / 2 + .004, Math.hypot(x - CHIP.x, y - CHIP.y));
  }

  // F1 — network tunnel (world)
  const T = WORLD.tunnel; const hubs = [];
  for (let h = 0; h < 120; h++) {
    const z = T.z0 + (T.z1 - T.z0) * Math.pow(rh(), .9); const rad = T.r0 + (T.r1 - T.r0) * Math.sqrt(rh()); const a = rh() * Math.PI * 2;
    hubs.push(new THREE.Vector3(Math.cos(a) * rad, Math.sin(a) * rad * .8, z));
  }
  // a few hubs right behind the chip so the first frames of the dive are dense
  for (let h = 0; h < 10; h++) hubs.push(new THREE.Vector3(CHIP.x * .4 + gauss(rh) * .5, CHIP.y + gauss(rh) * .4, -1.2 - rh() * 3));
  const edges = [];
  hubs.forEach((p, i) => {
    const d = hubs.map((q, j) => [p.distanceToSquared(q), j]).filter(e => e[1] !== i).sort((a, b) => a[0] - b[0]);
    for (let k = 0; k < 3; k++) { const j = d[k][1]; if (i < j || !edges.some(e => e[0] === j && e[1] === i)) edges.push([i, j]); }
  });
  for (let i = 0; i < N; i++) {
    const u = r();
    if (u < .26) { const p = hubs[(r() * hubs.length) | 0]; set(1, i, p.x + gauss(r) * .04, p.y + gauss(r) * .04, p.z + gauss(r) * .04, 1.3); }
    else if (u < .8) { const e = edges[(r() * edges.length) | 0]; const a = hubs[e[0]], b = hubs[e[1]]; const t = r(); set(1, i, a.x + (b.x - a.x) * t + gauss(r) * .012, a.y + (b.y - a.y) * t + gauss(r) * .012, a.z + (b.z - a.z) * t + gauss(r) * .012, .62); }
    else { const z = T.z0 + 4 - r() * 40; const rad = 1.2 + r() * 7; const a = r() * 6.283; set(1, i, Math.cos(a) * rad, Math.sin(a) * rad * .7, z, .3); }
  }

  // F2 — dashboard sculpture (world, centered WORLD.dash)
  const D = WORLD.dash; const cols = 34;
  const series = (x, s) => { const t = (x + 1) / 2; return .25 + .55 * t + .12 * Math.sin(t * 9 + s) + .06 * Math.sin(t * 23 + s * 2); };
  for (let i = 0; i < N; i++) {
    const u = r();
    if (u < .5) { // bar field: 3 rows of columns
      const c = (r() * cols) | 0, row = (r() * 3) | 0; const xn = c / (cols - 1) * 2 - 1;
      const hgt = series(xn, row * 1.7) * (row === 1 ? 4.0 : 3.1);
      const x = xn * 5.4, z = (row - 1) * .9; const y = -3.0 + Math.floor(r() * hgt / .085) * .085;   // quantised dot-matrix columns
      set(2, i, D.x + x + (r() - .5) * .015, D.y + y, D.z + z + (r() - .5) * .015, row === 1 ? .85 : .5);
    } else if (u < .68) { // performance curve
      const xn = r() * 2 - 1; const y = -3 + series(xn, 4.1) * 4.4 + 1.0;
      set(2, i, D.x + xn * 5.6, D.y + y + gauss(r) * .02, D.z + 1.1 + gauss(r) * .02, 1.6);
    } else if (u < .8) { // area fill under curve
      const xn = r() * 2 - 1; const top = -3 + series(xn, 4.1) * 4.4 + 1.0; const y = -3 + r() * (top + 3);
      set(2, i, D.x + xn * 5.6, D.y + y, D.z + 1.1, .16);
    } else if (u < .93) { // floor dot grid
      const gx = ((r() * 30) | 0) / 29 * 2 - 1, gz = ((r() * 10) | 0) / 9;
      set(2, i, D.x + gx * 6.0, D.y - 3.05, D.z + 2.2 - gz * 7, .32);
    } else { set(2, i, D.x + (r() - .5) * 22, D.y + (r() - .5) * 12, D.z - 3 - r() * 8, .22); }
  }

  // F3 — globe land dots (globe-local; uGlobe places/rotates them)
  const isLand = decodeLand(land); const R = WORLD.globeR;
  const landPts = []; const M = Math.max(26000, Math.round(N * 3.6)); const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < M; i++) {
    const y = 1 - (i + .5) / M * 2; const rad = Math.sqrt(1 - y * y); const th = ga * i;
    const lat = Math.asin(y) * 180 / Math.PI; let lon = (Math.atan2(Math.cos(th) * rad, Math.sin(th) * rad) * 180 / Math.PI);
    if (isLand(lat, lon)) landPts.push([lat, lon]);
  }
  for (let i = 0; i < N; i++) {
    if (i < N * .82) { const [lat, lon] = landPts[Math.floor(i / (N * .82) * landPts.length)]; const v = latLonToVec(lat, lon, R * 1.003); set(3, i, v.x, v.y, v.z, 1.75); }   // the continents carry the globe: brighter than the other forms' points
    else { // thin atmospheric shell
      const v = new THREE.Vector3(gauss(r), gauss(r), gauss(r)).normalize().multiplyScalar(R * (1.04 + r() * .32)); set(3, i, v.x, v.y, v.z, .18);
    }
  }

  // F4 — data landscape (world, centered WORLD.intel): columns on a grid
  const I = WORLD.intel; const GX = 30, GZ = 20, sp = .62;
  const field = (x, z) => .5 + .5 * Math.sin(x * .55 + 1.3) * Math.cos(z * .42) + .35 * Math.exp(-((x - 3) ** 2 + (z + 2) ** 2) / 6) + .28 * Math.exp(-((x + 5) ** 2 + (z - 3) ** 2) / 5);
  for (let i = 0; i < N; i++) {
    if (r() < .84) {
      const gx = (r() * GX) | 0, gz = (r() * GZ) | 0; const x = (gx - GX / 2) * sp, z = (gz - GZ / 2) * sp;
      const hgt = Math.max(.08, field(x, z)) * 2.6; const y = r() * hgt;
      const top = r() < .42; const yy = top ? hgt - r() * .06 : y;
      set(4, i, I.x + x, I.y + yy, I.z + z, top ? .78 : .16);
    } else { const x = (r() - .5) * GX * sp * 1.4, z = (r() - .5) * GZ * sp * 1.4; set(4, i, I.x + x, I.y - .02, I.z + z, .2); }
  }

  // F5 — vault cage (world): armillary rings of points + inner swirl
  const V = WORLD.vault;
  for (let i = 0; i < N; i++) {
    const u = r();
    if (u < .45) { // latitude rings
      const ring = (r() * 9) | 0; const lat = -64 + ring * 16; const lon = r() * 360 - 180; const v = latLonToVec(lat, lon, 4.4); set(5, i, V.x + v.x, V.y + v.y, V.z + v.z, .42);
    } else if (u < .8) { // meridians
      const mer = (r() * 12) | 0; const lon = mer * 30; const lat = r() * 180 - 90; const v = latLonToVec(lat, lon, 4.4); set(5, i, V.x + v.x, V.y + v.y, V.z + v.z, .34);
    } else { const v = new THREE.Vector3(gauss(r), gauss(r), gauss(r)).normalize().multiplyScalar(5 + r() * 4); set(5, i, V.x + v.x, V.y + v.y, V.z + v.z, .26); }
  }

  // F6 — liquidity field (world): a thin rotating band around the coin ring + dust
  const L = WORLD.liq;
  for (let i = 0; i < N; i++) {
    if (r() < .74) { const a = r() * 6.283; const arm = Math.floor(r() * 3), band = Math.floor(r() * 4); const rad = 3.55 + (band - 1.5) * .12 + gauss(r) * .022 + Math.sin(a * 3 + arm) * .07; set(6, i, L.x + Math.cos(a) * rad, L.y + Math.sin(a) * rad, L.z - .6 + (band - 1.5) * .05 + gauss(r) * .025, band === 1 || band === 2 ? .55 : .36); }
    else { set(6, i, L.x + (r() - .5) * 20, L.y + (r() - .5) * 12, L.z - 2 - r() * 10, .2); }
  }
  return { F, RND, hubs, edges };
}

const VERT = /* glsl */`
attribute vec4 aF0; attribute vec4 aF1; attribute vec4 aF2; attribute vec4 aF3; attribute vec4 aF4; attribute vec4 aF5; attribute vec4 aF6; attribute vec4 aRnd;
uniform float uS, uDisA, uDisB, uTime, uSize, uPx, uFade, uShell, uSwirl, uCurve, uTop, uCap, uDpr, uDens, uFlow;
uniform mat4 uCard, uGlobe;
varying float vA; varying vec3 vCol; varying float vGold; varying float vPx;
${PT_VERT}
${IX_GLSL}
vec3 hash3(float n){ return fract(sin(vec3(n, n+1.31, n+2.17))*vec3(43758.5453, 22578.145, 19642.349)) * 2. - 1.; }
float ease(float t){ return t*t*(3.-2.*t); }
float stag(float t, float d){ return ease(clamp((t - d*.42)/.58, 0., 1.)); }
void main(){
  vec3 card = (uCard * vec4(aF0.xyz, 1.)).xyz;
  float d = aF0.w;
  vec3 sw = hash3(aRnd.x*97.3);
  // 0 -> 1 : released by the hero dissolve front (card-local distance to chip)
  float t = ease(clamp((uDisA - d) / 1.3, 0., 1.));
  vec3 P = mix(card, aF1.xyz, t) + sw * sin(3.14159*t) * .55;
  float a = aF1.w * t;
  float k;
  // network -> dashboard assembles as a left-to-right sweep (reads as the dashboard being built)
  float dx2 = clamp((aF2.x - (${WORLD.dash.x.toFixed(1)}) + 7.4) / 14.8, 0., 1.) * .85 + aRnd.y * .15;
  k = ease(clamp((clamp(uS-1., 0., 1.) - dx2*.62) / .38, 0., 1.)); P = mix(P, aF2.xyz, k) + sw*sin(3.14159*k)*uSwirl*.6; a = mix(a, aF2.w, k);
  vec3 g = (uGlobe * vec4(aF3.xyz, 1.)).xyz;
  k = stag(clamp(uS-2., 0., 1.), aRnd.y); P = mix(P, g, k) + sw*sin(3.14159*k)*uSwirl*1.4; a = mix(a, aF3.w, k);
  // land dots crowding the horizon read as a bright crescent: fade them by how much they face the camera
  { vec3 gc = (uGlobe * vec4(0., 0., 0., 1.)).xyz; float fc = dot(normalize(g - gc), normalize(cameraPosition - g));
    a *= mix(1., smoothstep(.02, .3, fc), k * k * k * (1. - clamp(uS - 3., 0., 1.))); }   // only once seated: mid-flight the far half still builds the sphere
  float dx4 = clamp((aF4.x - (${WORLD.intel.x.toFixed(1)}) + 9.5) / 19., 0., 1.) * .8 + aRnd.z * .2;
  k = ease(clamp((clamp(uS-3., 0., 1.) - dx4*.6) / .4, 0., 1.)); P = mix(P, aF4.xyz, k) + sw*sin(3.14159*k)*uSwirl; a = mix(a, aF4.w, k);
  vec3 v5 = aF5.xyz; v5 = mix(v5, (v5 - vec3(0.,0.,${WORLD.vault.z.toFixed(1)}))*uShell + vec3(0.,0.,${WORLD.vault.z.toFixed(1)}), 1.);
  k = stag(clamp(uS-4., 0., 1.), aRnd.y); P = mix(P, v5, k) + sw*sin(3.14159*k)*uSwirl*1.8; a = mix(a, aF5.w, k);
  k = stag(clamp(uS-5., 0., 1.), aRnd.z); P = mix(P, aF6.xyz, k) + sw*sin(3.14159*k)*uSwirl*1.6; a = mix(a, aF6.w, k);
  // liquidity field -> card: the card assembles as a left-to-right sweep (reads as the card, not a ball)
  float d7 = clamp((aF0.x + ${(CARD.W / 2).toFixed(3)}) / ${CARD.W.toFixed(3)}, 0., 1.) * .8 + aRnd.w * .2;
  k = ease(clamp((clamp(uS-6., 0., 1.) - d7*.55) / .45, 0., 1.)); P = mix(P, card, k) + sw*sin(3.14159*k)*uSwirl*.45; a = mix(a * .6, .3, k) * (1. - uFade);
  // 7 -> 8 : the final card dissolves from the chip; released points drift up as emerald light
  float r8 = clamp((uDisB - d) / 2.2, 0., 1.);
  // released points stream up-and-right along the dissolve direction as soft emerald light
  vec3 dirW = (uCard * vec4(.75 + sw.x * .55, .1 + sw.y * .34, 0., 0.)).xyz;   // a tapered plume: mostly rightward, little lift
  vec3 drift = (dirW * (1.2 + abs(sw.z) * 1.4) + vec3(0., 0., .7 + sw.z * .4)) * (1. - pow(1. - r8, 2.)) * 1.6;
  drift += vec3(sin(uTime*.6 + aRnd.x*30.), cos(uTime*.5 + aRnd.y*25.), 0.) * .25 * r8;
  P += drift;
  a = max(a, step(.001, uDisB - d) * (1. - r8*.55) * step(5.5, uS));
  a *= mix(1., uCurve, step(1.2, aF2.w) * (1. - clamp(abs(uS - 2.), 0., 1.)));
  // the shared slow flow (js/gl/pointstyle.js)
  P += mpFlow(P * .6, uTime, aRnd.x) * uFlow;
  vec4 mv = modelViewMatrix * vec4(P, 1.);
  gl_Position = projectionMatrix * mv;
  // the page's one pointer response (js/gl/interact.js)
  float lift; gl_Position = mpInteract(gl_Position, 1., lift);
  float navFade = (1. - smoothstep(.62, .8, gl_Position.y / gl_Position.w)) * (1. - uTop * smoothstep(.05, .35, gl_Position.y / gl_Position.w));
  float near = smoothstep(.22, 1.1, -mv.z);   // the dive flies through the network: points stay until they are right at the lens
  // the hero's point: a fine core sized in CSS px (classes from pointstyle.js), a gentle depth cue, a halo around it
  float dm = mpSizeCss(aRnd.y, aRnd.w) * uDpr * mpDepth(-mv.z) * mix(1., uSize / 2., .3) * uCap * (.9 + a * .2), df = max(dm, 1.5);   // the chapters' size cues stay gentle: a fine point never shrinks into a dimmed pixel
  gl_PointSize = df * ${PT_SPRITE.toFixed(4)}; vPx = gl_PointSize;
  vA = a * near * navFade * (.78 + .22 * sin(uTime * (1.6 + aRnd.x * 1.6) + aRnd.x * 60.)) * min(1., (dm * dm) / (df * df)) * mpHot(aRnd.y) * uDens * (1. + lift * 1.2);
  vCol = mpColor(aRnd.z);
  vec2 cq = abs(aF0.xy - vec2(${CHIP.x.toFixed(3)}, ${CHIP.y.toFixed(3)})); vGold = step(cq.x, ${(CHIP.w / 2).toFixed(3)}) * step(cq.y, ${(CHIP.h / 2).toFixed(3)}) * clamp(uS - 6., 0., 1.);
}`;
const FRAG = /* glsl */`
uniform float uAlpha;
varying float vA; varying vec3 vCol; varying float vGold; varying float vPx;
${PT_FRAG}
void main(){
  float a = mpSprite(gl_PointCoord, vPx) * vA * uAlpha;
  if (a < .003) discard;
  vec3 c = mix(vCol, vec3(1., .82, .52), vGold);   // the final card's chip still assembles warm
  gl_FragColor = vec4(c * a, a);
}`;

export class Particles {
  constructor(N, land) {
    const { F, RND, hubs, edges } = buildFormations(N, land);
    this.hubs = hubs; this.edges = edges;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    F.forEach((a, k) => g.setAttribute('aF' + k, new THREE.BufferAttribute(a, 4)));
    g.setAttribute('aRnd', new THREE.BufferAttribute(RND, 4));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, -120), 1e4);
    this.u = {
      uS: { value: 0 }, uDisA: { value: -1 }, uDisB: { value: -1 }, uTime: { value: 0 }, uSize: { value: 2.2 }, uPx: { value: 900 },
      uFade: { value: 0 }, uShell: { value: 1 }, uSwirl: { value: .8 }, uAlpha: { value: 1 }, uCurve: { value: 1 }, uTop: { value: 0 }, uCap: { value: 1 }, uDpr: { value: 1 }, uDens: { value: 1.25 }, uFlow: { value: .035 },
      uCard: { value: new THREE.Matrix4() }, uGlobe: { value: new THREE.Matrix4() }
    };
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({ uniforms: { ...this.u, ...IXU }, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.points.frustumCulled = false;
  }
}
