import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { rng, gauss } from './util.js';
import { LAT_Y, LAT_W, LAT_R, LAT_N, WATER_Y, POOL, FLOOR_Y } from './sculpture.js';
import { IXU, IX_GLSL } from './interact.js';
import { CL_GLSL, CLU } from './light.js';
import { parseTrees, woodGeometry, leafMesh, fixtureMesh } from './trees.js';

// The hero's room: a futuristic botanical hall built and light-baked in Blender (tools/atrium/room.py): tall dark-metal
// panels, smoked glass bays, a lit portal, a ringed dais under a round dotted light installation, and four living trees in
// recessed planters. It is drawn with its baked light plus the live pieces that move: the installation's dots, the polished
// dais, the smoked glass, the trees' sway, light shafts from the ceiling slot, dust and mist.
// It also carries the intro: a wireframe of the room that materialises behind an emerald front (uReveal).
export const SUN_DIR = new THREE.Vector3(.34, -1, .26).normalize();   // tools/atrium/room.py SUN_DIR3
const SKY = [-8.4, -2.2, -9.6, -4.6], SKY_Y = 11.0;                    // the ceiling's slot skylight x0 x1 z0 z1, at the ceiling (room.py SK, CEIL)
const REFL = 4;                                                        // the layer the floor's mirror pass draws
// phones see only the band between the inner fins: the two near trees (out of every phone and desktop frame where they were
// baked, and their limbs spread outward) step in behind those fins, so a crown frames each edge and none crosses the sculpture
const TREE_OFF_PHONE = [null, null, [5.75, -9.8], [-3.6, -9.0]];   // crowns' inner edges (p95 / p5 of their cards) at x -2.15 and 3.6

// bytes from a path, falling back to its deflated base64 twin, then a plain base64 twin (artifact hosting serves no .glb)
const unb64 = t => { const b = atob(t.trim()); const a = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; };
async function fetchBin(path) {
  try { const r = await fetch(path); if (r.ok) return await r.arrayBuffer(); } catch (e) { /* fall through */ }
  try { const r = await fetch(path + '.z.b64.txt'); if (r.ok && typeof DecompressionStream !== 'undefined') {
    const z = unb64(await r.text()); return await new Response(new Blob([z]).stream().pipeThrough(new DecompressionStream('deflate'))).arrayBuffer(); } } catch (e) { /* fall through */ }
  return unb64(await (await fetch(path + '.b64.txt')).text()).buffer;
}

const DECODE = `vec3 decodeL(vec3 v){ vec3 c = pow(max(v, vec3(0.)), vec3(2.2)); return c / max(vec3(1.) - c, vec3(.03)); }
vec3 srgbOf(vec3 l){ return mix(l * 12.92, 1.055 * pow(max(l, vec3(0.)), vec3(1. / 2.4)) - .055, step(.0031308, l)); }
float h3(vec3 p){ p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y), mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p){ return vn(p) * .55 + vn(p * 2.1) * .28 + vn(p * 4.3) * .17; }`;

// The entrance builds the room in three passes, after the reference's lab: the wireframe draws out from the dais (the wire
// below), then a flat paint pass runs down from the canopy in long ragged drips (uFill), then the final render prints over
// it behind an edge broken into vertical strips (uReveal). Both fronts grow from the canopy's lattice.
const REVEAL = `uniform float uReveal, uFill; uniform vec3 uHolo;
  float frontD(vec3 w){ float d0 = length((w - vec3(0., ${LAT_Y.toFixed(2)}, 0.)) * vec3(1., 1.15, 1.)); return d0 + vn(w * .32) * 4.5 * smoothstep(3., 9., d0); }   // + big patches: a wall takes its coat (and its print) in pieces, not as one sheet
  float revealFront(vec3 w){ float n = vn(w * 5.3) * .22 + vn(w * 1.3) * .35 + vn(vec3(w.x * 4.2, w.y * .3, w.z * 4.2)) * .9; return uReveal * 31. - frontD(w) - n; }
  float fillFront(vec3 w){ float n = vn(vec3(w.x * 2.6, w.y * .18, w.z * 2.6)) * 2.4 + vn(vec3(w.x * 8., w.y * .45, w.z * 8.)) * .8 + vn(w * 1.1) * .6; return uFill * 31. - frontD(w) - n; }
  vec3 fillShade(vec3 w, vec3 N, float ff){
    float k = .38 + .32 * (N.y * .5 + .5) + .5 * max(dot(N, vec3(-.45, .55, .7)), 0.);
    float s = vn(vec3(w.x * 13., w.y * .4, w.z * 13.));
    vec3 q = vec3(w.x * .8 - w.z * .6, w.y * .45 + w.x * .3, w.x * .6 + w.z * .8);
    float m = smoothstep(.25, .75, vn(q * 1.6) * .6 + vn(q * 4.1 + 3.) * .4);
    vec3 c = mix(vec3(.045, .18, .22), vec3(.11, .37, .41), m) * k * (.88 + .18 * s) * (.66 + .44 * smoothstep(-3., 5., w.y));
    c += vec3(.26, .7, .7) * (1. - smoothstep(0., .5, ff)) * .9;
    return c; }`;

// the trees: rooted trunks, crowns that lean on a slow breeze, twigs that flutter (wood here, leaf cards in js/gl/trees.js)
const SWAY = `vec3 treeSway(vec3 q, float t){ float h = clamp((q.y + 1.3) / 5.4, 0., 1.); h *= h; float gust = .65 + .35 * sin(t * .19 + q.x * .07);
  vec3 d = vec3((sin(t * .61 + q.z * .33 + q.y * .21) * .06 + sin(t * 1.63 + q.y * 1.3 + q.x) * .012) * h * gust, 0., cos(t * .49 + q.x * .29 + q.y * .17) * .045 * h * gust);
  return d + vec3(sin(t * 3.7 + dot(q, vec3(7.7, 13.1, 5.3))), sin(t * 3.1 + dot(q, vec3(9.1, 7.3, 11.7))), 0.) * .007 * h; }`;

const ENV_V = `varying vec2 vUv; varying vec3 vW; varying vec3 vC; uniform float uTime;
  ${SWAY}
  #ifdef USE_VC
  attribute vec3 color;
  #endif
  void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.);
    #if defined(USE_VC) && !defined(EMIT)
    w.xyz += treeSway(w.xyz, uTime);   // the trees' wood (their leaves sway the same way in js/gl/trees.js)
    #endif
    vW = w.xyz;
    #ifdef USE_VC
    vC = color;
    #else
    vC = vec3(0.);
    #endif
    gl_Position = projectionMatrix * viewMatrix * w; }`;
const ENV_F = `uniform sampler2D map; uniform float uDim, uExp, uFogD, uTime, uLift, uEmit, uRing, uLip, uSheen, uBack; uniform vec3 uFogC, uCool; uniform vec4 uAlb, uShin; varying vec2 vUv; varying vec3 vW; varying vec3 vC;
  #ifdef FLOOR
  uniform sampler2D tRefl; uniform mat4 uReflM; uniform float uReflK;
  #endif
  #if defined(USE_VC) && !defined(EMIT)
  uniform vec3 uPl[4]; uniform float uGraze;
  #endif
  ${DECODE}
  ${REVEAL}
  ${CL_GLSL}
  void main(){
    float ff = 99., fr = 99.;
    if (uReveal < .999) { ff = fillFront(vW); if (ff < 0.) discard; fr = revealFront(vW) - fbm(vW * 2.3) * .3; }   // once the room is printed, none of the fronts' noise runs
    if (fr < 0.) {
      #ifdef EMIT
      discard;
      #else
      vec3 Nf0 = normalize(cross(dFdx(vW), dFdy(vW))); Nf0 *= sign(dot(Nf0, cameraPosition - vW) + 1e-4);
      vec3 cf = fillShade(vW, Nf0, ff); float df = length(vW - cameraPosition); cf = mix(cf, uFogC, 1. - exp(-df * uFogD * .7));
      gl_FragColor = vec4(cf * uDim, 1.); return;
      #endif
    }
    #ifdef USE_VC
    vec3 c = decodeL(srgbOf(vC));
    #ifndef EMIT
    c *= 2.3;   // the trees' wood (their leaves are js/gl/trees.js): the planters' uplights should read on it
    { // bark: dark vertical fissures
      float fis = fbm(vec3(vW.x * 16., vW.y * 2.2, vW.z * 16.)); c *= (.35 + .95 * smoothstep(.25, .75, fis)) * .55; }
    { // the planter's uplights graze each trunk (warm, 2700 K): strongest at its foot, gone by the crown
      vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW))); vec3 Vv = normalize(cameraPosition - vW); Nf *= sign(dot(Nf, Vv) + 1e-4);
      for (int i = 0; i < 4; i++) { vec3 L = uPl[i] + vec3(0., .05, .75) - vW; float d2 = dot(L, L);
        if (d2 < 40.) { L *= inversesqrt(d2); float up = exp(-max(vW.y - uPl[i].y, 0.) * .5);
          c += vec3(1., .6, .3) * uGraze * max(dot(Nf, L), 0.) * up / (1. + d2 * .5); } } }
    #endif
    #ifdef EMIT
    c *= uEmit;
    { // light strips, held down so the sculpture stays the brightest thing: the dais rings and the installation's lip dimmest
      float rr = length(vW.xz);
      float plat = step(vW.y, -2.3) * step(rr, 4.8), lip = step(2.9, vW.y) * step(vW.y, 3.45) * step(rr, 3.4), warm = step(c.g * 1.25, c.r);
      float corr = step(vW.z, -13.5);   // the corridor's bands sit right behind the sculpture: barely there
      float k = mix(.42, uRing * (.85 + .15 * sin(uTime * .7 - rr * 2.6)), plat); k = mix(k, uLip, lip); k = mix(k, .55, warm); k = mix(k, .08, corr);
      k *= 1. - step(4.4, rr) * step(vW.y, -2.8) * smoothstep(3.1, 4.2, abs(vW.x));   // the outer floor ring fades out at its sides (they ran through the scroll cue and the stats)
      k *= 1. - warm * step(6., rr) * step(-2.6, vW.y) * step(vW.y, -2.3);      // no rim strips on the planters: they read as two amber lines floating in the dark
      k *= 1. - warm * step(vW.y, -2.85);   // nor the washers' floor slots (a thin tan line on the floor); their light stays on the fins
      c *= k; }
    #endif
    #else
    vec3 c = decodeL(texture2D(map, vUv).rgb);
    #endif
    c *= uExp;
    #if !defined(EMIT) && !defined(FLOOR) && !defined(USE_VC)
    { // behind the sculpture the back of the room steps down into shadow, so every form reads against near-black
      float bk = exp(-vW.x * vW.x / 26.) * smoothstep(-4.2, -6.2, vW.z) * smoothstep(-2.7, -1.9, vW.y) * (1. - smoothstep(4.6, 7., vW.y));
      c *= 1. - uBack * bk; }
    #endif
    #ifndef EMIT
    { // the bake's emerald sculpture light drowns the room in green: keep it near the sculpture, cool blue-grey elsewhere
      float l = dot(c, vec3(.3, .59, .11)); float near = exp(-dot(vW - vec3(0., .1, 0.), vW - vec3(0., .1, 0.)) * .045);
      #ifdef USE_VC
      float gk = .22;   // the trees keep their green
      #else
      float gk = .62;
      #endif
      float warm = smoothstep(.04, .3, (c.r - c.g) / max(l, 1e-4));   // the washers' and planters' amber stays amber
      c = mix(c, l * vec3(.8, .94, 1.12), gk * (1. - near * .7) * (1. - warm)); }
    { // the cursor's lamp (js/gl/light.js): satin metal walls, wet stone, leaves that let it through
      vec3 alb = uAlb.rgb;
      #ifdef USE_VC
      { vec3 hc = decodeL(srgbOf(vC)); alb = hc / max(dot(hc, vec3(.3, .59, .11)), 1e-4) * uAlb.r; }
      #endif
      #ifdef FLOOR
      alb *= .7 + .6 * fbm(vec3(vW.xz * 2.6, 3.));
      #endif
      c += mpRoomLight(vW, alb, uAlb.a, uShin.x, uShin.y); }
    #if !defined(USE_VC) && !defined(FLOOR)
    { // the satin metal catches the sculpture's emerald light: a soft sheen down the faces that look at it (the bake is diffuse only)
      vec3 N = normalize(cross(dFdx(vW), dFdy(vW))); vec3 V = normalize(cameraPosition - vW); N *= sign(dot(N, V) + 1e-4);
      vec3 L = vec3(0., .4, 0.) - vW; float dl = length(L); L /= dl; vec3 Hh = normalize(L + V);
      float sp = pow(max(dot(N, Hh), 0.), 18.) * max(dot(N, L), 0.) * (.04 + .96 * pow(1. - max(dot(V, Hh), 0.), 5.));
      c += vec3(.35, 1., .78) * sp * uSheen * 12. / (4. + dl * dl) * step(vW.y, 9.); }
    #endif
    #endif
    #ifdef FLOOR
    { vec3 V = normalize(vW - cameraPosition); vec3 R = reflect(V, vec3(0., 1., 0.)); float t = (${LAT_Y.toFixed(2)} - vW.y) / max(R.y, .02); vec2 h = vW.xz + R.xz * t;
      float inL = smoothstep(.2, -.5, length(h) - ${LAT_R.toFixed(2)}); float fres = .04 + .96 * pow(1. - max(-V.y, 0.), 5.);
      c += vec3(.5, 1., .78) * inL * fres * .1 * exp(-length(vW.xz) * .08);
      { vec2 gq = (h / ${LAT_W.toFixed(3)} + .5) * ${LAT_N}.; vec2 gid = floor(gq), gc = fract(gq) - .5; float on3 = step(fract(sin(dot(gid + 3.1, vec2(127.1, 311.7))) * 43758.5453), .36);
        c += vec3(.62, 1., .84) * exp(-dot(gc, gc) * 16.) * on3 * inL * (.06 + fres * .5) * .55; }   // the lit holes, mirrored in wet stone
      c += vec3(.55, 1., .82) * .055 * exp(-dot(vW.xz, vW.xz) / (2. * 3.1 * 3.1)); }   // the sculpture's light pooled on the stone
    { // the room mirrored in the satin stone (Atrium.renderReflection): blurred by its roughness, smeared down the view like
      // polished stone, strongest at grazing angles (about a fifth there)
      vec3 V = normalize(vW - cameraPosition); float fres = .04 + .96 * pow(1. - max(-V.y, 0.), 5.);
      vec4 rp = uReflM * vec4(vW, 1.); vec2 ru = rp.xy / max(rp.w, 1e-4); vec2 b = vec2(.0035, .011);
      vec3 rc = texture2D(tRefl, ru).rgb * .22
        + (texture2D(tRefl, ru + vec2(b.x, 0.)).rgb + texture2D(tRefl, ru - vec2(b.x, 0.)).rgb) * .12
        + (texture2D(tRefl, ru + vec2(0., b.y)).rgb + texture2D(tRefl, ru - vec2(0., b.y)).rgb) * .13
        + (texture2D(tRefl, ru + b * vec2(.7, 2.)).rgb + texture2D(tRefl, ru - b * vec2(.7, 2.)).rgb + texture2D(tRefl, ru + b * vec2(-.7, 2.)).rgb + texture2D(tRefl, ru - b * vec2(-.7, 2.)).rgb) * .07;
      float edge = smoothstep(0., .04, ru.x) * smoothstep(1., .96, ru.x) * smoothstep(0., .04, ru.y) * smoothstep(1., .96, ru.y);
      c += rc * uReflK * (.12 + .6 * fres) * edge * (.75 + .5 * fbm(vec3(vW.xz * 1.7, 9.))); }
    #endif
    // a cool lift in the deep shadow (the reference room is blue-black, never dead black)
    c += uCool * uLift * (1. - smoothstep(0., .08, dot(c, vec3(.3, .59, .11))));
    float d = length(vW - cameraPosition);
    float hz = exp(-max(vW.y + 2.9, 0.) * .085);
    float f = 1. - exp(-d * uFogD * (.55 + hz * .9));
    c = mix(c, uFogC, f);
    c *= uDim;
    // the front: a ragged dissolve edge with a thin emissive band (white core, emerald falloff); the room fades in behind it
    // (a soft emerald sweep, 30 cm wide: a thin white-hot band broke up on the side panels into lightning-like squiggles)
    float bandK = 1.;
    #if defined(USE_VC) && !defined(EMIT)
    bandK = 0.;   // the trees' wood fades in without the glow: a limb lying along the front lit up as a long cyan stroke (even at 15%)
    #endif
    if (uReveal < .999) { float band = (1. - smoothstep(0., .3, fr)) * smoothstep(5., 11., length(vW - cameraPosition)); c *= smoothstep(0., 1.4, fr) * .6 + .4;
      c += vec3(.32, .62, .66) * band * band * .35 * bandK; }
    gl_FragColor = vec4(c, 1.); }`;

export class Atrium {
  constructor(opts) {
    this.opts = opts; this.group = new THREE.Group(); this.ready = false;
    this.u = { uDim: { value: 1 }, uExp: { value: 1.75 }, uSheen: { value: .9 }, uBack: { value: .6 }, uFogD: { value: .011 }, uFogC: { value: new THREE.Color(.0035, .007, .0085) }, uCool: { value: new THREE.Color(.004, .009, .014) }, uLift: { value: .26 }, uEmit: { value: .09 },
      uRing: { value: .5 }, uLip: { value: .45 },
      uReveal: { value: 1 }, uFill: { value: 1 }, uHolo: { value: new THREE.Color(.3, 1., .82) }, uTime: { value: 0 } };
    this.wireU = { uWire: { value: 0 }, uDraw: { value: 1 }, uTime: { value: 0 }, uReveal: this.u.uReveal, uColor: { value: new THREE.Color(.7, 1., .9) } };
    // the leaves' four lights (js/gl/trees.js): ambient, sun, uplights, canopy rim; and the uplights' graze on the trunks
    this.leafU = { value: new THREE.Vector4(.2, 6.5, 6, 1.2) }; this.leafU2 = { value: new THREE.Vector4(.08, 2.4, .4, 1) }; this.leafU3 = { value: new THREE.Vector4(.55, .72, 28, 1.8) }; this.graze = { value: .1 };   // trees.js: leafU [ambient, sun, uplight, mint rim], leafU2 [bake, AO exponent, translucency, gain], leafU3 [albedo gain, saturation, canopy top light, its depth falloff]
  }

  async load(base = 'assets/atrium/') {
    const sfx = this.opts.mobile ? '-2k' : '';
    const tl = new THREE.TextureLoader();
    const vfs = k => (window.__VFS && window.__VFS[k]) || k;   // the single-file bundle (tools/fil_bundle.py) serves assets from memory
    const tex = n => new Promise(res => tl.load(vfs(base + n + sfx + '.webp'), t => { t.flipY = false; t.colorSpace = THREE.NoColorSpace; t.anisotropy = 8; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; res(t); }, undefined, () => res(null)));
    const [buf, floor, walls, canopy, tbuf] = await Promise.all([fetchBin(base + 'atrium.glb'), tex('floor'), tex('walls'), tex('canopy'), fetchBin(base + 'trees.bin').catch(() => null)]);
    const trees = tbuf ? parseTrees(tbuf, this.opts.mobile ? TREE_OFF_PHONE : []) : null, skel = trees ? trees.skel : [];
    const gltf = await new Promise((res, rej) => new GLTFLoader().parse(buf, '', res, rej));
    const maps = { floor, walls, canopy };
    const meshes = {}; gltf.scene.traverse(o => { if (o.isMesh) meshes[o.name] = o; });
    // albedo + gloss for the cursor's lamp (the bake holds light, not albedo): rgb albedo, a = specular, shin.x = shininess, shin.y = wrap
    const LIT = { floor: [.08, .075, .07, .5, 70, 0], walls: [.048, .052, .056, .32, 26, 0], canopy: [.045, .047, .05, .2, 16, 0], foliage: [.085, 0, 0, .06, 10, .55] };
    const envMat = (map, vc, em, lit = LIT.walls) => new THREE.ShaderMaterial({ uniforms: { ...this.u, ...CLU, map: { value: map }, uAlb: { value: new THREE.Vector4(lit[0], lit[1], lit[2], lit[3]) }, uShin: { value: new THREE.Vector4(lit[4], lit[5], 0, 0) } }, vertexShader: ENV_V, fragmentShader: ENV_F, defines: vc ? (em ? { USE_VC: '', EMIT: '' } : { USE_VC: '' }) : {}, side: vc ? THREE.DoubleSide : THREE.FrontSide, extensions: { derivatives: true } });
    const add = (name, mat) => { const m = meshes[name]; if (!m) return null; m.material = mat; m.matrixAutoUpdate = false; m.updateMatrixWorld(true); const n = new THREE.Mesh(m.geometry, mat); n.applyMatrix4(m.matrixWorld); n.matrixAutoUpdate = false; n.updateMatrix(); n.frustumCulled = false; this.group.add(n); return n; };
    this.initRefl();
    for (const k of ['floor', 'walls', 'canopy']) { const m = envMat(maps[k], false, false, LIT[k]); if (k === 'floor') { m.defines.FLOOR = ''; Object.assign(m.uniforms, this.reflU); } const n = add(k, m); if (n && k !== 'floor') n.layers.enable(REFL); }
    if (trees) { // the trees (js/gl/trees.js): the baked wood through the room's shader, the leaves as lit cluster cards
      this.treeBases = trees.bases;
      const wm = envMat(null, true, false, LIT.foliage); Object.assign(wm.uniforms, { uPl: { value: trees.bases }, uGraze: this.graze });
      const wood = new THREE.Mesh(woodGeometry(trees), wm); wood.frustumCulled = false; wood.matrixAutoUpdate = false; this.group.add(wood); wood.layers.enable(REFL);
      this.leaves = leafMesh(trees, { u: this.u, CLU, DECODE, REVEAL, CL_GLSL, SWAY, SUN_DIR, SKY, SKY_Y, leafU: this.leafU, leafU2: this.leafU2, leafU3: this.leafU3 }); this.group.add(this.leaves); this.leaves.layers.enable(REFL);
      const moved = trees.bases.map((b, k) => !!(this.opts.mobile && TREE_OFF_PHONE[k])); this.fixtures = fixtureMesh(trees, this.u, moved); this.group.add(this.fixtures);
    }
    { const em = envMat(null, true, true); em.polygonOffset = true; em.polygonOffsetFactor = -2; em.polygonOffsetUnits = -8; add('emit', em).layers.enable(REFL); }   // strips sit 5 mm off their panels: pull them forward so they never z-fight
    this.edgesFrom([meshes.floor, meshes.walls, meshes.canopy], skel);
    this.buildLattice(meshes.lattice); this.buildWater(meshes.water); this.buildGlass(meshes.glass); this.buildShafts(); this.buildDust(); this.buildMist(); this.buildVoid();
    if (this.lattice) this.lattice.layers.enable(REFL); if (this.glass) this.glass.layers.enable(REFL);
    this.ready = true; return this;
  }

  // the floor's mirror: the room (not the floor, the dais or the sculpture, which mirrors itself) seen from under the floor
  // plane at reduced resolution (about 700 px tall); the floor samples it through uReflM
  initRefl() {
    this.reflRT = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, depthBuffer: true });
    this.reflCam = new THREE.PerspectiveCamera(); this.reflCam.layers.set(REFL);
    this.reflU = { tRefl: { value: this.reflRT.texture }, uReflM: { value: new THREE.Matrix4() }, uReflK: { value: 0 } };
    this._rv = new THREE.Vector3(); this._ru = new THREE.Vector3();
  }
  renderReflection(renderer, scene, cam, w, h, dpr) {
    if (!this.reflRT) return;
    if (!this.ready || !this.group.visible || this.u.uDim.value < .01 || this.u.uReveal.value < .02) { this.reflU.uReflK.value = 0; return; }
    const k = Math.min(.5, 700 / Math.max(h * dpr, 1)), W = Math.max(2, Math.round(w * dpr * k)), H = Math.max(2, Math.round(h * dpr * k));   // ~700 px tall: it is blurred anyway
    if (this.reflRT.width !== W || this.reflRT.height !== H) this.reflRT.setSize(W, H);
    const F = FLOOR_Y, vc = this.reflCam; cam.updateMatrixWorld();
    const p = cam.position, d = cam.getWorldDirection(this._rv), up = this._ru.set(0, 1, 0).applyQuaternion(cam.quaternion);
    vc.position.set(p.x, 2 * F - p.y, p.z); vc.up.set(up.x, -up.y, up.z); vc.lookAt(p.x + d.x, 2 * F - p.y - d.y, p.z + d.z); vc.updateMatrixWorld();
    // the same lens, mirrored left-right (the mirrored camera is the real one rolled half a turn)
    vc.projectionMatrix.copy(cam.projectionMatrix); vc.projectionMatrix.elements[8] *= -1; vc.projectionMatrixInverse.copy(vc.projectionMatrix).invert();
    this.reflU.uReflM.value.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1).multiply(vc.projectionMatrix).multiply(vc.matrixWorldInverse);
    const prev = renderer.getRenderTarget(); renderer.setRenderTarget(this.reflRT); renderer.render(scene, vc); renderer.setRenderTarget(prev);
    this.reflU.uReflK.value = 1;
  }

  // the intro's wireframe: crease edges of the room + the tree's skeleton, drawn outward from the pool
  edgesFrom(list, skel) {
    const pos = [];
    for (const m of list) { if (!m) continue; m.updateMatrixWorld(true); const e = new THREE.EdgesGeometry(m.geometry, 32); const a = e.attributes.position; const v = new THREE.Vector3();
      const w = new THREE.Vector3();
      for (let i = 0; i < a.count; i += 2) { v.fromBufferAttribute(a, i).applyMatrix4(m.matrixWorld); w.fromBufferAttribute(a, i + 1).applyMatrix4(m.matrixWorld); if (v.distanceTo(w) < .3) continue;   // bevels and tree facets read as pipe cleaners
        pos.push(v.x, v.y, v.z, w.x, w.y, w.z); } }
    for (let x = -12; x <= 12; x += 1.5) pos.push(x, -2.895, -11.4, x, -2.895, 11);   // the floor's tile grid
    for (let z = -11.25; z <= 11; z += 1.5) pos.push(-13.4, -2.895, z, 13.4, -2.895, z);
    for (const s of skel) pos.push(...s);
    // the canopy's housing and opening in outline (its ring segments are shorter than the bevel cut above, so the hold drew no
    // canopy), the dais's rim, and four guides from the dais up to the canopy, as in the reference's lab
    const ring = (r, y, n = 72) => { for (let i = 0; i < n; i++) { const a0 = i / n * Math.PI * 2, a1 = (i + 1) / n * Math.PI * 2; pos.push(Math.cos(a0) * r, y, Math.sin(a0) * r, Math.cos(a1) * r, y, Math.sin(a1) * r); } };
    ring(3.47, 3.15); ring(3.47, 3.74); ring(LAT_R, LAT_Y); ring(2.6, -2.35);
    for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * Math.PI / 2; pos.push(Math.cos(a) * 2.6, -2.35, Math.sin(a) * 2.6, Math.cos(a) * 3.3, 3.15, Math.sin(a) * 3.3); }
    // construction lines: column/balcony guides that shoot past the room's edges
    const r = rng(5);
    for (let k = 0; k < 9; k++) { const x = (r() - .5) * 24, z = -11.2 + r() * 14; pos.push(x, -2.9, z, x, -2.9 + 6 + r() * 12, z); }
    for (let k = 0; k < 4; k++) { const y = -2.9 + r() * 10, z = -11 + r() * 6; pos.push(-14, y, z, 14, y, z); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const d = new Float32Array(pos.length / 3); for (let i = 0; i < d.length; i++) { const x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2]; d[i] = Math.hypot(x, (y + 2.9) * .6, z + 1) / 18; }
    g.setAttribute('aD', new THREE.BufferAttribute(d, 1));
    this.wire = new THREE.LineSegments(g, new THREE.ShaderMaterial({ uniforms: this.wireU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'attribute float aD; varying float vD; varying vec3 vW; void main(){ vD = aD; vW = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
      fragmentShader: `uniform float uWire, uDraw, uTime, uReveal; uniform vec3 uColor; varying float vD; varying vec3 vW;
        void main(){ if (vD > uDraw) discard; float head = smoothstep(uDraw - .05, uDraw, vD); float fl = .82 + .18 * sin(uTime * 3. + vW.y * 2.);
          float fr = uReveal * 31. - length((vW - vec3(0., ${LAT_Y.toFixed(2)}, 0.)) * vec3(1., 1.15, 1.));
          float a = uWire * (.32 + head * 1.6) * fl * (1. - smoothstep(.2, 2.5, fr)) * exp(-length(vW - cameraPosition) * .03);
          gl_FragColor = vec4(uColor * a, 1.); }` }));
    this.wire.frustumCulled = false; this.wire.renderOrder = 7; this.group.add(this.wire);
  }

  buildLattice(m) {
    if (!m) return;
    const g = m.geometry; this.latU = { uTime: this.u.uTime, uDim: this.u.uDim, uOn: { value: 1 }, uPour: { value: 0 }, uCols: { value: null }, uReveal: this.u.uReveal, uFill: this.u.uFill, uHolo: this.u.uHolo, uWire: this.wireU.uWire };
    const mat = new THREE.ShaderMaterial({ uniforms: { ...this.latU, ...IXU }, side: THREE.DoubleSide,
      vertexShader: `varying vec2 vUv; varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vUv = vec2(w.x / ${LAT_W.toFixed(3)} + .5, w.z / ${LAT_W.toFixed(3)} + .5); gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float uTime, uDim, uOn, uPour, uWire; uniform sampler2D uCols; varying vec2 vUv; varying vec3 vW;
        ${IX_GLSL}
        ${DECODE}
        ${REVEAL}
        float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){ float rW = length(vW.xz); if (rW > ${(LAT_R + .4).toFixed(2)}) discard;
          if (uReveal < .999) { float ff = fillFront(vW); if (ff < 0.) discard;
            if (revealFront(vW) < 0.) { gl_FragColor = vec4(fillShade(vW, vec3(0., -1., 0.), ff) * uDim, 1.); return; } }
          if (rW > ${LAT_R.toFixed(2)}) { gl_FragColor = vec4(vec3(.004, .005, .006) * uDim * uReveal, 1.); return; }   // the housing's lid
          vec2 g = vUv * ${LAT_N}.; vec2 id = floor(g); vec2 c = fract(g) - .5; float d = length(c);
          vec2 fw2 = vec2(length(vec2(dFdx(g.x), dFdy(g.x))), length(vec2(dFdx(g.y), dFdy(g.y))));   // cells per pixel along each axis
          vec2 cp = c / max(fw2, vec2(1e-4)); float rpx = clamp(.2 / max(fw2.x, fw2.y), .9, 3.2);      // each hole is round on screen, a few px wide
          float dotm = 1. - smoothstep(rpx - .8, rpx + .5, length(cp));
          float on3 = step(hh(id + 3.1), .36);                                                        // about a third of the holes are lit
          dotm *= mix(.1, 1., on3);
          float glow = exp(-d * d * 14.) * .1 * on3;
          float h = hh(id);
          float tw = .55 + .45 * sin(uTime * (.6 + h * 1.8) + h * 40.);
          float rr = length(id / ${LAT_N}. - .5) * 2.;
          float on = smoothstep(rr * .68, rr * .68 + .14, uOn);
          float col = texture2D(uCols, (id + .5) / ${LAT_N}.).r;
          float wave = .5 + .5 * sin(rr * 9. - uTime * 2.4);
          float b = (.5 + tw * .7 + col * (1.6 + uPour * 3.) + uPour * wave * .8) * on * 1.2;   // bright, distinct holes: the canopy reads as the room's light (the reference's lattice)
          b *= smoothstep(${LAT_R.toFixed(2)}, ${(LAT_R - .18).toFixed(2)}, rW);
          { // the pointer's ripple: fixed dots only brighten, in rings running out from the pointer (js/gl/interact.js)
            vec2 suv = gl_FragCoord.xy / uIRes; vec3 fx = mpFieldUv(suv); float dp = length(suv * uIView - uIPtr.xy);
            b *= 1. + (fx.z * (.55 + .45 * sin(dp * .07 - uTime * 6.)) + min(length(fx.xy) * .004, .2)) * .9; }
          vec3 base = vec3(.012, .014, .016);
          vec3 lit = vec3(.66, 1., .84) * (dotm * 1.55 + glow * .6) * b;
          vec3 c3 = base * uReveal + lit;
          gl_FragColor = vec4(c3 * uDim, 1.); }` });
    // stream columns map (set by the sculpture)
    const n = new THREE.Mesh(g, mat); m.updateMatrixWorld(true); n.applyMatrix4(m.matrixWorld); n.frustumCulled = false; this.lattice = n; this.group.add(n);
  }
  setStreamCols(cols) {
    const a = new Uint8Array(LAT_N * LAT_N * 4); for (const [ix, iz, w] of cols) { if (ix < 0 || iz < 0 || ix >= LAT_N || iz >= LAT_N) continue; const i = (iz * LAT_N + ix) * 4; a[i] = 255; a[i + 3] = 255; }
    const t = new THREE.DataTexture(a, LAT_N, LAT_N); t.needsUpdate = true; t.magFilter = t.minFilter = THREE.NearestFilter;
    // lattice UV: u along +x, v along −z or +z depending on the export; the test below picks the right flip
    t.flipY = false; if (this.latU) this.latU.uCols.value = t;
  }

  buildWater(m) {
    if (!m) return;
    this.waterU = { uTime: this.u.uTime, uDim: this.u.uDim, uReveal: this.u.uReveal, uFill: this.u.uFill, uHolo: this.u.uHolo, uRing: this.u.uRing, ...CLU };
    const mat = new THREE.ShaderMaterial({ uniforms: this.waterU, extensions: { derivatives: true },
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float uTime, uDim, uRing; varying vec3 vW;
        ${DECODE}
        ${REVEAL}
        ${CL_GLSL}
        float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){ if (uReveal < .999) { float ff = fillFront(vW); if (ff < 0.) discard;
            if (revealFront(vW) < 0.) { gl_FragColor = vec4(fillShade(vW, vec3(0., 1., 0.), ff) * uDim, 1.); return; } }
          vec3 V = normalize(vW - cameraPosition); float r = length(vW.xz);
          // machined rings every 9 cm: a hairline of sheen, anti-aliased by its screen width
          float rq = r / .09, fw = max(fwidth(rq), 1e-3); float ring = 1. - smoothstep(0., fw * 1.2, abs(fract(rq) - .5) - .5 + fw);
          vec3 N = normalize(vec3((vn(vec3(vW.xz * 6., 1.)) - .5) * .012, 1., (vn(vec3(vW.xz * 6., 7.)) - .5) * .012));
          vec3 R = reflect(V, N); float fres = .04 + .96 * pow(clamp(1. - max(-V.y, 0.), 0., 1.), 5.);
          vec3 c = vec3(.0022, .0028, .0036) + vec3(.012, .02, .026) * fres;
          // the dotted installation above, mirrored in the polish (lit holes only, softened)
          if (R.y > 0.) { float t = (${LAT_Y.toFixed(3)} - vW.y) / R.y; vec2 hit = vW.xz + R.xz * t;
            if (length(hit) < ${(LAT_R - .05).toFixed(3)}) { vec2 g = (hit / ${LAT_W.toFixed(3)} + .5) * ${LAT_N}.; vec2 id = floor(g), cc = fract(g) - .5; float dd = length(cc);
              float on3 = mix(.12, 1., step(hh(id + 3.1), .36)); float tw = .6 + .4 * sin(uTime * (.6 + hh(id) * 1.8) + hh(id) * 40.);
              c += vec3(.72, 1., .9) * exp(-dd * dd * 22.) * on3 * tw * (.22 + fres * 1.1) * .9; } }
          c += vec3(.5, 1., .84) * .05 * exp(-r * r / 2.6);                         // the sculpture's light pooled under it
          c += vec3(.45, .8, 1.) * ring * .006 * uRing * (.6 + .4 * sin(r * 1.7 - uTime * .4));   // the machining, barely there
          c += mpRoomLight(vW, vec3(.018, .02, .023) * (1. + ring * 1.5), 1.1, 160., 0.);       // the cursor's lamp: a crisp glint in the polish
          gl_FragColor = vec4(c * uDim, 1.); }` });
    const n = new THREE.Mesh(m.geometry, mat); m.updateMatrixWorld(true); n.applyMatrix4(m.matrixWorld); n.frustumCulled = false; n.renderOrder = 1; this.water = n; this.group.add(n);
  }

  // smoked glass bays in the back wall: near-black glass, a dim gallery behind it (soft vertical light bars, out of focus),
  // and a faint reflection of the room on top
  buildGlass(m) {
    this.glassK = { value: 1 }; if (!m) return;
    const mat = new THREE.ShaderMaterial({ uniforms: { uTime: this.u.uTime, uDim: this.u.uDim, uReveal: this.u.uReveal, uFill: this.u.uFill, uHolo: this.u.uHolo, uGlassK: this.glassK, ...CLU }, extensions: { derivatives: true },
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float uTime, uDim, uGlassK; varying vec3 vW;
        ${DECODE}
        ${REVEAL}
        ${CL_GLSL}
        float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){ if (uReveal < .999) { float ff = fillFront(vW); if (ff < 0.) discard;
            if (revealFront(vW) < 0.) { vec3 Ng = normalize(cross(dFdx(vW), dFdy(vW))); Ng *= sign(dot(Ng, cameraPosition - vW) + 1e-4); gl_FragColor = vec4(fillShade(vW, Ng, ff) * uDim, 1.); return; } }
          vec3 V = normalize(vW - cameraPosition); float x = vW.x, y = vW.y;
          // behind: a gallery 2 m back, seen through smoke (parallax with the view)
          vec2 q = vec2(x, y) + V.xy / max(-V.z, .2) * 2.;
          float bars = pow(.5 + .5 * cos(q.x * 6.283 / .9), 10.) * smoothstep(-2.6, -1.4, q.y) * (1. - smoothstep(2.2, 4.2, q.y));
          vec3 o = vec3(.004, .006, .009) + vec3(.22, .5, .8) * bars * .016;
          o += vec3(.03, .05, .07) * .25 * smoothstep(-2.6, 4., q.y) * (.75 + .5 * fbm(vec3(q * .6, uTime * .02)));
          vec2 cell = floor(q / .5); vec2 f = fract(q / .5) - .5; float hs = hh(cell);
          if (hs < .05) { float d = length(f); o += vec3(.6, .85, 1.) * exp(-d * d * 40.) * .05; }   // a few far indicator lights, blurred
          // on top: the room, faintly (fresnel), with the sculpture's mint glow centred on the room's axis
          float fres = .05 + .95 * pow(clamp(1. - abs(V.z), 0., 1.), 4.);
          vec3 rf = vec3(.008, .012, .016) * smoothstep(-2.5, 3., y) + vec3(.4, .9, .75) * .02 * exp(-(x * x) * .05 - (y - .2) * (y - .2) * .12);
          vec3 c = o * uGlassK + rf * (.35 + fres);
          c += mpRoomLight(vW, vec3(.012, .013, .015), .07, 24., 0.);   // the cursor's lamp on the smoked glass: a soft sheen (a sharp glint blooms into an orb)
          gl_FragColor = vec4(c * uDim, 1.); }` });
    const n = new THREE.Mesh(m.geometry, mat); m.updateMatrixWorld(true); n.applyMatrix4(m.matrixWorld); n.frustumCulled = false; this.glass = n; this.group.add(n);
  }

  // light shafts from the skylight: crossed soft quads along the sun, missing the canopy (the bake lights the floor where they land)
  buildShafts() {
    const r = rng(12); const shafts = [];
    // a shaft must miss the installation's ring (r 3.5 at y 3.4) so it never cuts across the sculpture
    const drop = SKY_Y - 3.4, pick = () => { for (;;) { const x = SKY[0] + r() * (SKY[1] - SKY[0]), z = SKY[2] + r() * (SKY[3] - SKY[2]); const ax = x + SUN_DIR.x / -SUN_DIR.y * drop, az = z + SUN_DIR.z / -SUN_DIR.y * drop; if (Math.hypot(ax, az) > 3.9) return [x, z]; } };
    const pos = [], uv = [], ax = [];
    const up = new THREE.Vector3(0, 1, 0);
    for (let k = 0; k < 7; k++) {
      const [x, z] = pick(); const top = new THREE.Vector3(x, SKY_Y, z); const L = (SKY_Y + 2.9) / -SUN_DIR.y;
      const w = .4 + r() * 1.0, inten = .45 + r() * .6;
      const side1 = new THREE.Vector3().crossVectors(SUN_DIR, up).normalize(), side2 = new THREE.Vector3().crossVectors(SUN_DIR, side1).normalize();
      for (const s of [side1, side2]) {
        const a = top.clone().addScaledVector(s, -w), b = top.clone().addScaledVector(s, w), c = a.clone().addScaledVector(SUN_DIR, L), d = b.clone().addScaledVector(SUN_DIR, L);
        for (const [p, u] of [[a, [0, 0]], [b, [1, 0]], [c, [0, 1]], [b, [1, 0]], [d, [1, 1]], [c, [0, 1]]]) { pos.push(p.x, p.y, p.z); uv.push(u[0], u[1]); ax.push(inten, k); }
      }
      shafts.push({ top, w });
    }
    this.shaftList = shafts;
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('aI', new THREE.Float32BufferAttribute(ax, 2));
    this.shaftU = { uTime: this.u.uTime, uDim: this.u.uDim, uStr: { value: .042 }, uReveal: this.u.uReveal, uRays: { value: .28 } };
    this.shafts = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: this.shaftU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      vertexShader: 'attribute vec2 aI; varying vec2 vUv; varying vec2 vI; varying vec3 vW; void main(){ vUv = uv; vI = aI; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float uTime, uDim, uStr, uReveal, uRays; varying vec2 vUv; varying vec2 vI; varying vec3 vW;
        ${DECODE}
        void main(){ float x = clamp(abs(vUv.x - .5) * 2. + (vn(vec3(vUv.y * 9., vI.y * 3., uTime * .04)) - .5) * .4, 0., 1.); float edge = pow(max(1. - x, 0.), 1.8);   // MSAA shades past the quad: keep pow() off negatives (NaN floods the bloom)
          float along = clamp(vUv.y, 0., 1.); float fade = smoothstep(0., .25, along) * (1. - smoothstep(.86, 1., along));
          float n = fbm(vec3(vUv.x * 3. + vI.y * 7., along * 6. - uTime * .05, uTime * .03)) ;
          float a = edge * fade * (.45 + n * .9) * vI.x * uStr * max(smoothstep(.6, 1., uReveal), uRays);
          // fade where the shaft passes close in front of the camera
          a *= smoothstep(2., 6., length(vW - cameraPosition));
          gl_FragColor = vec4(vec3(.62, .82, 1.) * a * uDim, 1.); }` }));
    this.shafts.frustumCulled = false; this.shafts.renderOrder = 8; this.group.add(this.shafts);
  }

  buildDust() {
    const n = this.opts.mobile ? 900 : 2600; const r = rng(44); const a = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { a[i * 4] = (r() - .5) * 22; a[i * 4 + 1] = -2.9 + r() * 12; a[i * 4 + 2] = -11 + r() * 18; a[i * 4 + 3] = r(); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); g.setAttribute('aP', new THREE.BufferAttribute(a, 4));
    const sh = this.shaftList.slice(0, 7); const tops = sh.map(s => s.top); while (tops.length < 7) tops.push(new THREE.Vector3(999, 0, 0));
    this.dustU = { uTime: this.u.uTime, uDim: this.u.uDim, uPx: { value: 1000 }, uTops: { value: tops }, uDir: { value: SUN_DIR }, uW: { value: sh.map(s => s.w) }, uReveal: this.u.uReveal };
    this.dust = new THREE.Points(g, new THREE.ShaderMaterial({ uniforms: { ...this.dustU, ...IXU }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec4 aP; uniform float uTime, uPx; uniform vec3 uTops[7]; uniform vec3 uDir; uniform float uW[7]; varying float vA;
        ${IX_GLSL}
        void main(){ vec3 p = aP.xyz; float s = aP.w;
          p += vec3(sin(uTime * .07 + s * 40.) * .6, sin(uTime * .05 + s * 17.) * .4 + fract(uTime * .006 + s) * 1.2, cos(uTime * .06 + s * 23.) * .6);
          float lit = 0.; for (int k = 0; k < 7; k++) { vec3 d = p - uTops[k]; vec3 q = d - uDir * dot(d, uDir); lit = max(lit, exp(-dot(q, q) / (uW[k] * uW[k] * .5))); }
          vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
          float lift; gl_Position = mpInteract(gl_Position, .8, lift);
          float dm = .02 * uPx / max(-mv.z, .1); gl_PointSize = max(dm, 1.4);
          vA = (1. + lift) * (.08 + lit * .9) * min(1., dm / 1.4) * (.5 + .5 * sin(uTime * (1. + s * 3.) + s * 50.)); }`,
      fragmentShader: `uniform float uDim, uReveal; varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c) * 2.; gl_FragColor = vec4(vec3(.75, .9, 1.) * exp(-d * d * 4.) * vA * uDim * uReveal, 1.); }` }));
    this.dust.frustumCulled = false; this.dust.renderOrder = 9; this.group.add(this.dust);
  }

  // low mist over the pool, lit from above by the sculpture
  buildMist() {
    const g = new THREE.PlaneGeometry(18, 16, 1, 1); g.rotateX(-Math.PI / 2);
    this.mistU = { uTime: this.u.uTime, uDim: this.u.uDim, uGlow: { value: 1 }, uReveal: this.u.uReveal };
    const mk = (y, k) => { const m = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: { ...this.mistU, uK: { value: k } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float uTime, uDim, uGlow, uK, uReveal; varying vec3 vW; ${DECODE}
        void main(){ float r = length(vW.xz); float n = fbm(vec3(vW.xz * .45 + vec2(uTime * .03 * uK, uTime * .02), uK * 3. + uTime * .04));
          float a = smoothstep(.35, .85, n) * exp(-r * r * .045) * smoothstep(7.5, 4., r) * .05 * uGlow * uReveal;
          gl_FragColor = vec4(vec3(.68, .95, .86) * a * uDim, 1.); }` }));
      m.position.y = y; m.renderOrder = 4; m.frustumCulled = false; this.group.add(m); return m; };
    this.mist = [mk(WATER_Y + .04, 1), mk(WATER_Y + .14, -1.3), mk(WATER_Y + .27, .7)];
  }

  // the gate's void, after the reference's lab: before the room exists there is only a dotted floor running into the dark, a
  // haze band on the horizon (it gathers while you hold) and slow clouds overhead. All of it goes as the paint pass lands.
  buildVoid() {
    this.voidU = { uTime: this.u.uTime, uDim: this.u.uDim, uFill: this.u.uFill, uReveal: this.u.uReveal, uHold: { value: 0 }, uPx: { value: 1000 } };
    const cg = new THREE.CylinderGeometry(26, 26, 34, 64, 1, true); cg.translate(0, 14, 0);
    const sky = new THREE.Mesh(cg, new THREE.ShaderMaterial({ uniforms: this.voidU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide,
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform float uTime, uDim, uFill, uHold; varying vec3 vW;
        ${DECODE}
        void main(){ float y = vW.y; float az = atan(vW.z, vW.x);
          float band = exp(-pow((y + .9) / 1.7, 2.)) * (.12 + .88 * uHold);
          float cl = fbm(vec3(az * 3.2 + uTime * .006, y * .16, uTime * .01)); cl = smoothstep(.42, .82, cl) * smoothstep(4., 16., y) * (1. - smoothstep(22., 30., y));
          vec3 c = vec3(.011, .022, .028) * band + vec3(.02, .032, .042) * cl * (.6 + .4 * uHold) + vec3(.002, .0035, .005) * smoothstep(-3., 12., y);
          gl_FragColor = vec4(c * (1. - smoothstep(.15, .7, uFill)) * uDim, 1.); }` }));
    sky.frustumCulled = false; sky.renderOrder = -2; this.group.add(sky); this.voidSky = sky;
    const pts = []; for (let x = -22; x <= 22; x += .3) for (let z = -22; z <= 22; z += .3) { if (x * x + z * z < 484) pts.push(x, -2.893, z); }   // out past the camera, so a phone's lower screen has floor too
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const dots = new THREE.Points(dg, new THREE.ShaderMaterial({ uniforms: this.voidU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `uniform float uPx; varying vec3 vW; varying float vS; void main(){ vW = position; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv;
        float s = uPx * .03 / max(-mv.z, .1); gl_PointSize = clamp(s, 1.2, 3.4); vS = clamp(s / 1.2, .25, 1.); }`,
      fragmentShader: `uniform float uDim, uHold, uTime; varying vec3 vW; varying float vS;
        ${DECODE}
        ${REVEAL}
        void main(){ vec2 q = gl_PointCoord - .5; float d = dot(q, q) * 4.; if (d > 1.) discard;
          float r = length(vW.xz); float a = (.22 + .78 * exp(-r * r / 30.)) * smoothstep(22., 12., r) * (.55 + .45 * uHold);
          a *= .6 + .4 * vn(vec3(vW.xz * .35, uTime * .05));
          a *= 1. - smoothstep(0., 1.5, fillFront(vW));
          gl_FragColor = vec4(vec3(.55, .82, .78) * a * vS * (1. - d * .6) * .5 * uDim, 1.); }` }));
    dots.frustumCulled = false; dots.renderOrder = 6; this.group.add(dots); this.voidDots = dots;
  }

  update(t, dim, px) {
    this.u.uTime.value = t; this.u.uDim.value = dim; this.wireU.uTime.value = t;
    if (this.dustU) this.dustU.uPx.value = px;
    if (this.fixtures) this.fixtures.material.uniforms.uPx.value = px;
    if (this.voidU) { this.voidU.uPx.value = px; this.voidSky.visible = this.voidDots.visible = this.u.uFill.value < .75; }   // the void is gone once the paint has landed: don't shade it behind the room
    this.group.visible = dim > .002 || this.wireU.uWire.value > .002;
  }
}
