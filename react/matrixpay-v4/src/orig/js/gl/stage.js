import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Pass } from 'three/addons/postprocessing/Pass.js';
import { buildEnv } from './env.js';
import { Card, CARD, CHIP, dissolve, rim } from './card.js';
import { Particles } from './particles.js';
import { FlowLines } from './lines.js';
import { Globe } from './globe.js';
import { Type3D } from './type3d.js';
import { Vault } from './vault.js';
import { Coins } from './coins.js';
import { WORLD } from './world.js';
import { BackGrid } from './bg.js';
import { Track, clamp, sstep, range, lerp, Spring } from './util.js';
import { Atrium } from './atrium.js';
import { Field } from './field.js';
import { Sculpture, FORMS } from './sculpture.js';
import { Interact } from './interact.js';
import { CursorLight, LTU, LT_GLSL, CLU, LIGHT_COL } from './light.js';
import { Arch } from './arch.js';
import { WATER_Y, FLOOR_Y } from './sculpture.js';

// Dots (particles, hub markers, NUMBERS dust) live on layer 2 and are drawn after the bloom, into the same buffer and
// against the scene's depth, so they keep their tone mapping but pick up no glow and stay crisp.
const DOTS = 2;
class DotsPass extends Pass {
  constructor(scene, camera) { super(); this.scene = scene; this.camera = camera; this.needsSwap = false; }
  render(renderer, writeBuffer, readBuffer) {
    const mask = this.camera.layers.mask, bg = this.scene.background, ac = renderer.autoClear;
    this.camera.layers.set(DOTS); this.scene.background = null; renderer.autoClear = false;
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer); renderer.render(this.scene, this.camera);
    this.camera.layers.mask = mask; this.scene.background = bg; renderer.autoClear = ac;
  }
}

// The last pass. Where a DOM layer used to paint the page colour over the scene (the Systems layer and its fades, the
// footer), the page's surface shows instead, so the cursor's lamp lights it there too: the scene gives way to the bare
// surface by the same ramps those layers used (uCov), drawn with the scene's own tone curve so the two never part.
const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: .9 }, uCA: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uFlash: { value: 0 },
    uDpr: { value: 1 }, uCov: { value: new THREE.Vector4(0, 0, 0, 1e6) }, uCovAll: { value: 0 }, uClear: { value: new THREE.Color() }, uExpo: { value: 1.05 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uVig, uCA, uFlash, uDpr, uCovAll, uExpo; uniform vec2 uRes; uniform vec4 uCov; uniform vec3 uClear; varying vec2 vUv;
  ${LT_GLSL}
  // three's ACES fit and sRGB encode (OutputPass), for the surface drawn here
  vec3 toDisplay(vec3 c){
    const mat3 AI = mat3(vec3(.59719, .07600, .02840), vec3(.35458, .90834, .13383), vec3(.04823, .01566, .83777));
    const mat3 AO = mat3(vec3(1.60475, -.10208, -.00327), vec3(-.53108, 1.10813, -.07276), vec3(-.07367, -.00605, 1.07602));
    c = AI * (c * uExpo / .6); c = (c * (c + .0245786) - .000090537) / (c * (.983729 * c + .4329510) + .238081); c = clamp(AO * c, 0., 1.);
    return mix(pow(c, vec3(.41666)) * 1.055 - .055, c * 12.92, vec3(lessThanEqual(c, vec3(.0031308)))); }
  // how much of the page colour a DOM layer laid over this row: the Systems layer (solid, linear fades above and below)
  // and the footer (clear → 72% at 140 px → solid at 320 px)
  float coverAt(float y){
    float c = uCov.z > 0. ? clamp(1. - max(max(uCov.x - y, y - uCov.y), 0.) / uCov.z, 0., 1.) : 0.;
    float f = y - uCov.w; c = max(c, f < 0. ? 0. : (f < 140. ? .72 * f / 140. : min(1., .72 + .28 * (f - 140.) / 180.)));
    return max(c, uCovAll); }
  void main(){ vec2 d = vUv - .5; float r2 = dot(d,d);
    vec2 css = vec2(vUv.x, 1. - vUv.y) * uRes / uDpr;
    float cov = coverAt(css.y);
    vec3 c = vec3(0.);
    if (cov < .999) { vec2 o = d * uCA * (1. + r2*4.); c = vec3(texture2D(tDiffuse, vUv + o).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - o).b); }
    if (cov > .001) c = mix(c, toDisplay(uClear + mpWall(css)), cov);
    float v = 1. - uVig * smoothstep(.12, .75, r2*1.6);
    c *= mix(1., v, .55);
    c = mix(c, vec3(.75,1.,.9), uFlash);
    c += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - .5) / 255.;   // dither: the lamp's soft falloff never bands
    gl_FragColor = vec4(c, 1.); }`
};

export class Stage {
  constructor(canvas, data, opts) {
    this.opts = opts; this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false });
    r.setClearColor(0x050807, 1);
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);   // Retina-sharp dots on desktop and phone (the adaptive loop steps down if fps drops)
    if (opts.dpr) this.dpr = opts.dpr;
    r.setPixelRatio(this.dpr);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050807);
    this.scene.fog = new THREE.Fog(0x050807, 30, 70);
    this.camera = new THREE.PerspectiveCamera(30, 1, .05, 400);
    this.scene.environment = buildEnv(r);
    this.coolEnv = buildEnv(r, false);   // the vault is titanium + emerald only: no warm chip bounce in its reflections
    this.goldEnv = buildEnv(r, true, false);   // the chip's gold mirrors no emerald strips, so it never goes olive in the push-in
    this.lensX = 0; this.lensY = 0;

    // the page's one pointer response: a screen-space field every particle layer reads (js/gl/interact.js)
    this.ix = new Interact(r, opts);
    // the cursor's lamp (js/gl/light.js): the page's surface, the hall, a point light for the 3D sets, and the particles' lift
    this.light = new CursorLight(opts);
    this.lamp = new THREE.PointLight(0xffffff, 0, 0, 2); this.lamp.color.copy(LIGHT_COL); this.lamp.layers.enable(1);
    this._lray = new THREE.Raycaster(); this._lv = new THREE.Vector3(); this._lf = new THREE.Vector3(); this._lp = new THREE.Vector3(); this._ln = new THREE.Vector2();
    // objects
    this.card = new Card(r, data);
    this.scene.add(this.card.root, this.card.floor);
    this.particles = new Particles(opts.mobile ? 13000 : 34000, data.land);   // finer points need more of them to hold each form
    this.scene.add(this.particles.points);
    const T = this.particles;
    this.tunnel = new FlowLines(T.edges.map(([a, b], i) => ({ points: [T.hubs[a], T.hubs[a].clone().lerp(T.hubs[b], .5), T.hubs[b]], phase: (i * .618) % 1, speed: .2 + (i % 7) * .06 })), { base: .16, pulse: 1.4, far: 26 });
    this.scene.add(this.tunnel.mesh);
    // dashboard hairline frame (axes + gridlines) around the particle sculpture
    const D = WORLD.dash; const gl = [];
    for (let k = 0; k <= 4; k++) { const y = D.y - 3 + k * 1.45; gl.push({ points: [new THREE.Vector3(D.x - 7.2, y, D.z + 1.1), new THREE.Vector3(D.x + 7.2, y, D.z + 1.1)], speed: .08 + k * .02, phase: k * .2 }); }
    this.dashLines = new FlowLines(gl, { base: .07, pulse: .6, far: 40 });
    this.scene.add(this.dashLines.mesh);
    this.bg = new BackGrid(); this.scene.add(this.bg.mesh); this.bgDraw = 1; this._glowP = new THREE.Vector3();
    this.globe = new Globe(); this.scene.add(this.globe.group);
    this.type = new Type3D(data.glyphs); this.scene.add(this.type.group);
    // the particle world between sections: the camera travels through it from the hero to the footer
    this.field = new Field(opts); this.scene.add(this.field.points);
    for (const o of [this.particles.points, this.globe.hubPts, this.type.dust, this.field.points]) o.layers.set(DOTS);   // drawn by DotsPass, after the bloom
    this.type.mats[1].envMap = buildEnv(r, false, false);   // NUMBERS walls: steel, not a mirror of the emerald strips (the emissive keeps a hint of green)
    this.vault = new Vault(); this.scene.add(this.vault.group);
    this.vault.group.traverse(o => { const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach(m => { if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) { m.envMap = this.coolEnv; m.needsUpdate = true; } }); });
    this.coins = new Coins(r); this.scene.add(this.coins.group);
    // hero: the baked atrium and the particle sculpture under its canopy (loaded by main before the gate opens)
    this.atrium = new Atrium(opts); this.scene.add(this.atrium.group);
    this.sculpt = new Sculpture(r, data.land, { ...opts, cardFace: data.cardFace }); this.scene.add(this.sculpt.group);
    this.atrium.setStreamCols(this.sculpt.streamCols);
    this.hero = { reveal: 1, fill: 1, hold: 0, rays: 0, wire: 0, draw: 1, lat: 1, cam: 1, bk: 1, entered: true, cycle: false, sAlpha: 1, idx: 0, scrub: false, pos: 0 };   // pos: the hero's scroll through the forms (main.js)
    this.heroForms = ['m', 'coins', 'globe', 'crystal', 'vault', 'liquid', 'card'];
    this.heroBloom = [.72, .86, .1];   // the room's bloom [strength, threshold, radius]: only the sculpture's hot cores clear it (Nov 8: lower, so vertices stay points, not flares)
    this._camOff = new THREE.Vector3(); this._ptr = { x: new Spring(0, 30), y: new Spring(0, 30) };
    // the hero's cursor interaction, after the lab recording (Desktop "Screen Recording 2026-11-06 at 4.13.44 AM"):
    // the view pans with the smoothed cursor, and the cursor stirs the sculpture through a small fluid (js/gl/fluid.js)
    this._pan = { x: 0, y: 0 }; this.heroPan = { x: 0, y: 0 }; this.sculptHover = false;
    this.fluid = this.ix.fluid;   // the page's one fluid (interact.js steps it)
    this._stir = { px: 0, py: 0, init: false }; this._fp = new THREE.Vector2(); this._ff = new THREE.Vector2(); this._hv3 = new THREE.Vector3();
    // r170 ignores material.envMapIntensity for scene.environment — give every PBR material the env explicitly
    const env = this.scene.environment;
    this.scene.traverse(o => { const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach(m => { if ((m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) && !m.envMap) { m.envMap = env; m.needsUpdate = true; } }); });
    for (const m of [this.card.matChip, this.card.matChipSide]) { m.envMap = this.goldEnv; m.needsUpdate = true; }
    this.scene.add(this.lamp);   // before the first compile: a light added later recompiles every lit material
    this.key = new THREE.DirectionalLight(0xffffff, 1.2); this.key.position.set(-4, 6, 8); this.scene.add(this.key);
    this.rim = new THREE.DirectionalLight(0x00d996, 4.5); this.rim.position.set(9, 2.5, -5); this.scene.add(this.rim);
    this.key.layers.enable(1); this.rim.layers.enable(1); this.vault.light.layers.enable(1);
    // studio rect lights for the card: a soft white sweep (upper-left) and a tall emerald strip (right-rear rim)
    RectAreaLightUniformsLib.init();
    this.sweep = new THREE.RectAreaLight(0xffffff, 0, 5.5, 3.2); this.sweep.layers.enable(1); this.scene.add(this.sweep);
    this.strip = new THREE.RectAreaLight(0x22ffb4, 0, .6, 4.2); this.strip.layers.enable(1); this.scene.add(this.strip);

    // post
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: opts.mobile ? 2 : 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), .6, .5, .88);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new DotsPass(this.scene, this.camera));
    this.composer.addPass(new OutputPass());
    this.final = new ShaderPass(FinalShader); this.composer.addPass(this.final);
    Object.assign(this.final.uniforms, LTU);   // shared, not the copies ShaderPass made (they must exist before it compiles)
    this.final.uniforms.uClear.value.copy(this.scene.background); this.final.uniforms.uExpo.value = r.toneMappingExposure;

    this.ray = new THREE.Raycaster(); this.ndc = new THREE.Vector2(9, 9);
    this.tilt = { x: new Spring(0, 40), y: new Spring(0, 40) };
    this.pointer = { x: 0, y: 0, inside: false };
    this.intro = 1; // the card no longer spins in: it forms out of the hero sculpture
    this.buildTracks();
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.w = w; this.h = h; this.aspect = w / h; this.portrait = this.aspect < .9;
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.dpr); this.composer.setSize(w, h);
    this.bloom.resolution.set(w * this.dpr * .75, h * this.dpr * .75);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.particles.u.uPx.value = h * this.dpr; this.type.dust.material.uniforms.uPx.value = h * this.dpr; this.particles.u.uDpr.value = this.dpr; this.type.dust.material.uniforms.uDpr.value = this.dpr; this.field.u.uDpr.value = this.dpr;
    const fpx = h * this.dpr / (2 * Math.tan(THREE.MathUtils.degToRad(16)));   // device px per unit at 1 unit depth (hero fov)
    this.sculpt.u.uPx.value = fpx; this.sculpt.su.uPx.value = fpx; this._fpx = fpx; this.sculpt.u.uDpr.value = this.dpr;
    this.bg.resize(w, h, this.dpr);
    this.ix.resize(w, h, this.dpr);
    this.light.resize(w, h); LTU.uSpV.value.set(w, h); if (this.arch) this.arch.resize(w, h, this.dpr);
    { // the cladding's panels: one per grid column (three on a phone, where the columns are narrow), rows 1.32 times as tall
      const gut = this.bg.u.uGut.value, cw = (w - 2 * gut) / 6 * (w < 760 ? 3 : 1); LTU.uWallG.value.set(gut, cw, Math.round(cw * 1.32), 0); }
    this.final.uniforms.uRes.value.set(w * this.dpr, h * this.dpr); this.final.uniforms.uDpr.value = this.dpr;
    this.globe.hubPts.material.uniforms.uPx.value = h * this.dpr;
    this.buildTracks();
  }

  // --- director keyframes -----------------------------------------------------------
  buildTracks() {
    const P = this.portrait; const A = this.aspect || 1.6;
    // pull subject shots back on narrow screens so wide sets still fit
    const fit = (pos, look, k = 1) => { if (A >= 1.6) return pos; const f = 1 + (1.6 / A - 1) * (P ? .55 : .7) * k; return look.map((l, i) => l + (pos[i] - l) * f); };
    const K = (g, pos, look, fov = 30, lx = 0, ly = 0, k = 1) => ({ g, pos: fit(pos, look, k), look, fov, lx, ly });
    // phones: the pull-back runs down the look line and left the eye 0.4 m off the floor, under the plinth's top and past the
    // floor's front edge; the hero keeps it at -0.9 instead (the gate keeps the old eye, see update())
    const KH = (...a) => { const k = K(...a); if (P) { this.gateDY = k.pos[1] - -.9; k.pos[1] = -.9; } return k; };
    this.gateDY = 0;
    const cx = CHIP.x, cy = CHIP.y;
    const heroLX = P ? 0 : .45, heroLY = P ? (A > .62 ? -.4 : -.44) : .085;   // portrait tablets: lift the card clear of the stats rule
    this.camTrack = new Track([
      // the atrium: low, a little off-axis, looking up at the sculpture under the canopy (tools/atrium/scene.py CAM_*)
      // (desktop lifts the image a tenth so the plinth sits whole above the stats and the lamp's rim clears the HUD; the gate keeps
      // the old frame, see update())
      KH(0, [-.5, -1.25, 12.2], [.1, .62, 0], 32, P ? 0 : .11, P ? .20 : .10, .5),
      KH(.1, [-.5, -1.25, 12.2], [.1, .62, 0], 32, P ? 0 : .11, P ? .20 : .10, .5),
      K(.58, [-.1, -.45, 9.6], [0, .08, 0], 31, P ? 0 : .08, P ? .14 : 0, .6),
      K(1.0, [.25, .12, 6.4], [0, 0, 0], 30, P ? 0 : .16, P ? -.1 : 0, .7),
      K(1.45, [cx * .65, cy * .6 + .04, 3.0], [cx * .85, cy * .85, 0], 30, 0, 0, .3),
      K(1.8, [cx, cy, 1.05], [cx, cy, -2], 32, 0, 0, 0),
      K(2.12, [cx, cy, .55], [cx * .95, cy * .95, -4], 34),
      K(2.42, [cx * .8, cy * .8, -.9], [cx * .2, cy * .2, -7], 38),
      K(2.75, [.15, -.05, -6.5], [0, 0, -13], 38),
      K(3.0, [-.35, .25, -13.5], [.2, 0, -21], 36),
      K(3.38, [.2, .4, -23.5], [0, 1.0, -42], 34),
      K(3.72, [1.0, 1.4, -31.5], [.3, 1.4, -42], 32),
      K(4.2, [0, 1.9, -27.2], [0, 2.4, -42], 30, 0, 0, 1),
      K(5.6, [-1.1, 2.2, -27.7], [0, 2.3, -42], 30, 0, 0, 1),
      K(6.5, [.9, 1.6, -28.2], [0, 2.1, -42], 30, 0, 0, 1),
      K(7.3, [0, .3, -47.5], [0, 0, -70], 30, 0, 0, 1),
      K(7.95, [0, .6, -47.2], [0, -.2, -70], 30, P ? 0 : -.02, P ? -.06 : -.27, .45),
      K(9.0, [-2.3, 1.2, -47.6], [0, -.2, -70], 30, P ? 0 : -.02, P ? -.06 : -.27, .45),
      K(10.2, [1.9, .3, -47.4], [0, -.2, -70], 30, P ? 0 : -.02, P ? -.06 : -.27, .45),
      K(10.95, [0, 4.6, -92], [0, -1.6, -104], 32, 0, 0, .8),
      K(11.7, [-2.1, 4.3, -93], [.6, .4, -104], 32, 0, 0, .8),
      K(12.9, [2.4, 3.7, -94], [.4, .3, -104], 32, 0, 0, .8),
      K(13.22, [0, .55, -106], [0, .45, -118], 30),
      K(13.32, [0, .55, -106], [0, .45, -118], 30),
      K(13.8, [0, .5, -112.2], [0, .33, -124.5], 33),   // hold the NUMBERS fly-through framing
      K(14.1, [0, .45, -126.5], [0, .2, -145], 34),
      K(14.55, [0, .5, -137.5], [0, 0, -158], 32),
      K(15.05, [0, .6, -137.2], [0, 0, -158], 30, P ? 0 : .5, P ? .0 : -.03, 1),
      K(16.5, [-3.4, 1.3, -139.2], [0, 0, -158], 30, P ? 0 : .5, P ? .0 : -.03, 1),
      K(17.55, [0, .05, -153.4], [0, 0, -158], 32),
      K(18.1, [0, 0, -156.75], [0, 0, -160], 40),
      K(18.18, [0, .3, -192.2], [0, 0, -204], 30, 0, 0, 1),
      K(19.05, [0, .3, -184], [0, .2, -204], 30, 0, P ? .02 : -.05, P ? 1 : 2.1),
      K(19.9, [2.0, 1.8, -180.5], [0, 0, -204], 30, P ? 0 : .05, P ? .02 : -.14, P ? 1 : 2.1),
      K(20.85, [-2.4, -.5, -183.5], [0, .2, -204], 30, P ? 0 : .05, P ? .02 : -.1, P ? 1 : 2.1),
      K(21.35, [0, .2, -187], [0, 0, -204], 30, 0, 0, 1),
      K(21.95, [0, .3, -232.5], [0, .15, -244], 30, 0, 0, .7),
      K(22.6, [0, .25, -232.6], [0, .05, -244], 28, 0, P ? -.05 : -.3, .7),
      K(24.0, [0, .45, -232.4], [0, .66, -244], 28, 0, P ? -.05 : -.22, .7),
      K(25.5, [0, .6, -232.2], [0, .8, -244], 28, 0, -.1, .7),
    ]);
    // card pose
    this.cardTrack = new Track([
      { g: 0, p: [0, 0, 0], r: [-.1, -.46, 0] },
      { g: .5, p: [0, 0, 0], r: [-.1, -.46, 0] },
      { g: 1.0, p: [0, .02, 0], r: [-.08, .62, .03] },
      { g: 1.45, p: [0, 0, 0], r: [0, 0, 0] },
      { g: 20.9, p: [0, 0, 0], r: [0, 0, 0], ease: 'step' },
      { g: 20.95, p: [0, WORLD.final.y, WORLD.final.z], r: [0, -.9, 0], ease: 'step' },
      { g: 21.75, p: [0, WORLD.final.y, WORLD.final.z], r: [0, -.9, 0] },
      { g: 22.6, p: [0, WORLD.final.y, WORLD.final.z], r: [-.16, -.5, -.06] },
      { g: 24.0, p: [0, WORLD.final.y + .2, WORLD.final.z], r: [-.04, -.18, .02] },
      { g: 25.5, p: [0, WORLD.final.y + .35, WORLD.final.z], r: [.08, .2, .05] },
    ], 'smooth');
  }

  setPointer(x, y, inside, kind = 'mouse') { this.pointer.x = x; this.pointer.y = y; this.pointer.inside = inside; this.pointer.kind = kind; this.ndc.set(x / this.w * 2 - 1, -(y / this.h) * 2 + 1);
    if (inside) { this.ix.move(x, y, kind); this.light.move(x, y, kind); } else { this.ix.leave(); this.light.leave(kind); } }
  // the page's surface: how far it has scrolled (CSS px), and where DOM layers cover the scene (see FinalShader)
  setWall(y) { LTU.uWallY.value = y; }
  // the backdrop keeps its detail out from under these (CSS px rects [l, t, r, b], at most ten)
  setQuiet(rects) { const X = LTU.uSpX.value, n = Math.min(10, rects.length); for (let i = 0; i < n; i++) X[i].set(rects[i][0], rects[i][1], rects[i][2], rects[i][3]); LTU.uSpN.value = n; }
  // the backdrop's clock and the pointer's lean (eased; none with reduced motion, on touch, or in a still capture)
  // the hall's linework (arch.js), once the hall has loaded: drawn into its target whenever the backdrop shows
  drawArch(force) {
    if (!this.arch && this.atrium.wire) { this.arch = new Arch(this.renderer, this.atrium.wire, this.opts); this.arch.resize(this.w, this.h, this.dpr); LTU.uArch.value = this.arch.rt.texture; }
    if (!this.arch || (!force && LTU.uSpA.value < .002)) return;
    this.arch.update(LTU.uWallY.value, this.light, this.heroPan); this.arch.render();
  }
  stepSpace(dt, g) {
    const o = this.opts; LTU.uSpT.value += o.reduced || o.still ? 0 : dt;
    const sp = LTU.uSpP.value, on = this.pointer.inside && !o.reduced && !o.touch, k = 1 - Math.exp(-dt * 2.4);
    sp.x += ((on ? this.ndc.x : 0) - sp.x) * k; sp.y += ((on ? -this.ndc.y : 0) - sp.y) * k;
    if (g !== undefined) LTU.uSpA.value = g < .6 ? 0 : sstep(.6, 1.3, g);   // the hero's hall is the backdrop until the dive leaves it
  }
  setCover(top, bottom, fade, foot) { this.final.uniforms.uCov.value.set(top, bottom, fade, foot); }

  // where the lamp hangs: just off the surface under the pointer, as high as the pool's radius needs at that depth
  placeLamp(g, look, room) {
    const L = this.light, c = this.camera, a = L.on;
    if (a < .002) { CLU.uCL.value.w = 0; this.lamp.intensity = 0; return; }
    c.updateMatrixWorld();
    this._ln.set(L.x / this.w * 2 - 1, -(L.y / this.h) * 2 + 1); this._lray.setFromCamera(this._ln, c);
    const o = this._lray.ray.origin, dir = this._lray.ray.direction, f = c.getWorldDirection(this._lf);
    const ppu = z => (this.h / 2) / Math.tan(THREE.MathUtils.degToRad(c.fov / 2)) / Math.max(z, .1);   // CSS px per unit at depth z
    const E0 = 2.3;
    // the 3D sets: a point light in front of the subject (the plane through the look target, facing the camera)
    { const q = this._lv.set(look[0], look[1], look[2]).sub(o); const z = q.dot(f), t = z / Math.max(dir.dot(f), .05);
      const hov = Math.min(4, Math.max(.12, .55 * L.R / ppu(z)));
      this.lamp.position.copy(o).addScaledVector(dir, t).addScaledVector(f, -hov);
      this.lamp.intensity = Math.PI * E0 * hov * hov * a * (g < 2.4 || g > 21.7 ? .3 : .42); }   // (the card's lacquer least: a sharp glint there blooms) the sets' metal and glass catch it as a glint, never a hotspot
    // the hall: the nearest of its floor, dais, walls and ceiling under the pointer; the lamp hangs off it along its normal
    if (room > .002) {
      let best = 1e9, nx = 0, ny = 1, nz = 0; const hit = (t, x, y, z) => { if (t > .1 && t < best) { best = t; nx = x; ny = y; nz = z; } };
      if (dir.y < 0) { const t = (WATER_Y - o.y) / dir.y, px = o.x + dir.x * t, pz = o.z + dir.z * t; if (px * px + pz * pz < 2.6 * 2.6) hit(t, 0, 1, 0); else hit((FLOOR_Y - o.y) / dir.y, 0, 1, 0); }
      if (dir.y > 0) hit((11 - o.y) / dir.y, 0, -1, 0);
      if (dir.z < 0) hit((-11.6 - o.z) / dir.z, 0, 0, 1);
      if (dir.x > 0) hit((13.4 - o.x) / dir.x, -1, 0, 0); else if (dir.x < 0) hit((-13.4 - o.x) / dir.x, 1, 0, 0);
      if (best < 1e8) {
        const p = this._lp.copy(o).addScaledVector(dir, best), z = Math.max(p.clone().sub(o).dot(f), .5);
        const hov = Math.min(3.6, Math.max(.3, .55 * L.R / ppu(z)));
        CLU.uCL.value.set(p.x + nx * hov, p.y + ny * hov, p.z + nz * hov, E0 * hov * hov * a * room);
      } else CLU.uCL.value.w = 0;
    } else CLU.uCL.value.w = 0;
  }
  // the Systems layer covers the viewport: the scene is skipped, only the lit surface is drawn (one full-screen pass)
  renderBackdrop(dt) {
    this.light.wallGain = 1; this.light.step(dt); this.stepSpace(dt, this.g ?? 4); this.drawArch(true);
    const f = this.final; f.uniforms.uCovAll.value = 1; f.uniforms.uFlash.value = 0;
    f.render(this.renderer, null, this.composer.readBuffer); f.uniforms.uCovAll.value = 0;
  }

  applyLens() {
    const c = this.camera; c.updateProjectionMatrix();
    c.projectionMatrix.elements[8] = -this.lensX; c.projectionMatrix.elements[9] = -this.lensY;
    c.projectionMatrixInverse.copy(c.projectionMatrix).invert();
  }

  // full scene state for scroll position g (units) at time t (s)
  update(g, t, dt) {
    this.ix.step(dt); this.stepSpace(dt, g);
    // the lamp: the hall covers the page's surface until it has faded out (updateHero's dim)
    const roomDim = 1 - .5 * sstep(.3, .7, g) - .5 * sstep(1.0, 1.5, g);
    this.light.wallGain = roomDim > .002 ? 0 : 1; this.light.step(dt); this.drawArch(false);
    const c = this.camera; const tk = this.camTrack;
    const pos = tk.at(g, 'pos').slice(), look = tk.at(g, 'look').slice();   // copies: the hero offsets below must not edit the keys
    c.position.set(pos[0], pos[1], pos[2]);
    // gentle handheld drift (off during capture)
    const still = this.opts.still;
    const drift = still ? 0 : 1;
    c.position.x += Math.sin(t * .23) * .05 * drift; c.position.y += Math.cos(t * .19) * .04 * drift;
    { // the view pans with the cursor (the whole site), and the gate's dolly (the camera waits further back until you enter)
      // The pan is the lab recording's: the whole frame follows the smoothed cursor at 0.105 px per cursor px on both axes
      // (one lerp at 1.5/s), as a lens shift so verticals stay vertical, and it holds where it is when the cursor leaves.
      // It replaces the hero's camera lean (Nov 9); the backdrop's linework takes the same shift (arch.js). None in the
      // gate, on touch, or with reduced motion. (heroPan keeps its name: the HUD reads it.)
      const H = this.hero, pz = this._pan;
      if (this.pointer.inside && H.entered && !this.opts.reduced && !this.opts.touch) {
        const k = Math.min(1, dt * 1.5); pz.x += (this.pointer.x - this.w / 2 - pz.x) * k; pz.y += (this.pointer.y - this.h / 2 - pz.y) * k; }
      const pk = .105 * easeInOutCubic(H.cam); this.heroPan.x = pz.x * pk; this.heroPan.y = pz.y * pk;
      const back = 1 - easeInOutCubic(H.cam);
      c.position.y += back * (1.1 + this.gateDY); c.position.z += back * 6.5;
      look[1] += back * .35;
    }
    c.lookAt(look[0], look[1], look[2]);
    c.fov = tk.at(g, 'fov'); this.lensX = tk.at(g, 'lx'); this.lensY = tk.at(g, 'ly');
    if (g < .6 && this.portrait) this.lensY += (.1224 - this.lensY) * (1 - easeInOutCubic(this.hero.cam));   // phones: the gate's cube stays centred until you enter
    else if (g < .6) this.lensY -= .19 * (1 - easeInOutCubic(this.hero.cam));                // desktop: the gate keeps its frame, entering lifts the image
    this.lensX += this.heroPan.x * 2 / this.w; this.lensY -= this.heroPan.y * 2 / this.h;   // the pan: content follows the cursor
    this.applyLens();
    this.placeLamp(g, look, roomDim > .002 ? roomDim : 0);

    // --- card
    const cp = this.cardTrack.at(g, 'p'), cr = this.cardTrack.at(g, 'r');
    const heroW = 1 - range(.2, 1.0, g);
    const ix = this.intro;
    const introSpin = (1 - easeOutQuint(ix)) * -2.9;
    const tx = this.tilt.x, ty = this.tilt.y;
    const allowTilt = (g < 1.1 || (g > 22.2 && g < 25.6)) && this.pointer.inside && !this.opts.reduced;
    tx.t = allowTilt ? Math.max(-.08, Math.min(.08, (this.ndc.y - this.lensY) * .12)) : 0; ty.t = allowTilt ? Math.max(-.12, Math.min(.12, (this.ndc.x - this.lensX) * .16)) : 0;
    tx.step(dt); ty.step(dt);
    const idle = still ? 0 : 1;
    this.card.root.position.set(cp[0], cp[1] + Math.sin(t * .9) * .045 * idle * (heroW + range(22, 22.6, g)) + (1 - easeOutQuint(ix)) * .35, cp[2]);
    this.card.root.rotation.set(cr[0] - tx.v + Math.sin(t * .5) * .02 * idle, cr[1] + ty.v + introSpin + Math.sin(t * .37) * .035 * idle * heroW, cr[2]);
    // dissolve (hero burst from the chip, re-assembly, final dissolve)
    let dis = -1;
    if (g < 1.2) dis = lerp(3.8, -.15, sstep(.4, .6, g));   // hero: the card prints in diagonally under a thin emerald line as the particles converge
    else if (g < 12) dis = lerp(-.2, 4.6, sstep(2.06, 2.72, g)) - (g < 2.06 ? 1 : 0);
    else if (g < 22.6) dis = lerp(4.6, -1, sstep(21.75, 22.45, g));
    else dis = lerp(-.2, 4.8, sstep(22.75, 24.05, g)) - (g < 22.75 ? 1 : 0);
    dissolve.uDis.value = dis; dissolve.uTime.value = t; dissolve.uScan.value = g < 1.2 ? 1 : 0; dissolve.uDisW.value = g < 1.2 ? .06 : .46; dissolve.uGlow.value = g > 21 && g < 22.6 ? .45 : 1;
    const cardVis = g < 2.8 || (g > 21.72);
    this.card.root.visible = cardVis && dis < 4.5;
    if (this.cardGlow) { this.cardGlow.setActive(this.card.root.visible); if (this.card.root.visible) this.card.tickGlow(t); }
    const floorOn = 0 + (g > 21.7 ? sstep(21.9, 22.3, g) * (1 - sstep(23.6, 24.2, g)) * .55 : 0);
    const statsPx = g < 1.2 ? Math.max(88, Math.min(124, this.h * .12)) * this.dpr * (this.portrait ? 1.25 : 1) : 0;
    this.card.setFloor(floorOn, g > 12 ? WORLD.final.y - 1.18 : -1.235, statsPx); this.card.floor.material.uniforms.uEdge.value = g < 2 ? 1 : 0; this.card.floor.material.uniforms.uStr.value = g > 12 ? 2.35 : 2.8;
    this.card.updateReflection();
    // emerald rim light direction (world: right / slightly behind) in view space for the edge material
    rim.uRimDir.value.set(.86, .22, -.46).normalize().transformDirection(c.matrixWorldInverse);
    rim.uRim.value = g < 3 || g > 21.7 ? 5.0 : 3.2;   // the finale card gets the hero's continuous emerald rim
    this.key.intensity = g < 2.4 || g > 21.7 ? .72 : .4;
    this.rim.position.set(this.card.root.position.x + 9, this.card.root.position.y + 2.5, this.card.root.position.z - 5);
    this.rim.intensity = 4.5 * (1 - (sstep(.3, .75, g) - sstep(2.1, 2.4, g)) * .97) * (1 - (sstep(12.6, 13.2, g) - sstep(14.4, 15, g)) * .85);   // NUMBERS: walls lit steel, not saturated emerald
    { // rect lights ride with the card (hero + finale only)
      const cpz = this.card.root.position, on = (g < 2.2 ? 1 : 0) + (g > 21.7 ? 1 : 0);
      this.sweep.position.set(cpz.x - 3.2, cpz.y + 3.4, cpz.z + 5.6); this.sweep.lookAt(cpz.x - .6, cpz.y + .4, cpz.z);
      this.sweep.intensity = on * (g > 21.7 ? 1.1 : .85) * (g < .9 ? .3 : 1);   // no glare wedge while the card prints in
      this.strip.position.set(cpz.x + 2.9, cpz.y + .5, cpz.z - 1.1); this.strip.lookAt(cpz.x + .6, cpz.y, cpz.z + 1.5);
      this.strip.intensity = on * (g > 21.7 ? 4 : 9) * (1 - (sstep(.3, .75, g) - sstep(2.1, 2.4, g)) * .97);
    }
    if (g > 21.5) { // finale: a slow studio sweep makes the embossing glint as the card turns
      const sw = (g - 22.3) * 1.6; const cpz = this.card.root.position;
      this.key.position.set(cpz.x + Math.sin(sw) * 9, cpz.y + 5, cpz.z + 7 + Math.cos(sw) * 2); this.key.target.position.copy(cpz); this.key.target.updateMatrixWorld();
      this.key.intensity = .9; this.card.matFront.envMapIntensity = .5;
    } else { this.key.position.set(-4, 6, 8); this.key.target.position.set(0, 0, 0); this.key.target.updateMatrixWorld(); this.card.matFront.envMapIntensity = .3 + (sstep(.35, .8, g) - sstep(1.5, 1.9, g)) * .5; }
    this.card.matFront.normalScale.setScalar(1 - (sstep(.7, 1.4, g) - sstep(2.3, 2.6, g)) * .62);
    this.card.halo.visible = g < 1.6 || g > 21.9; this.card.halo.material.opacity = .0;

    // --- background grid (behind every object); spacing transforms per chapter
    const B = this.bg.u;
    B.uGx.value = (sstep(3.8, 4.4, g) - sstep(6.9, 7.4, g)) * -14 + (sstep(10.9, 11.5, g) - sstep(13.2, 13.6, g)) * 10 + (sstep(18.9, 19.4, g) - sstep(21.2, 21.6, g)) * -8;
    B.uA.value = clamp(1 - sstep(1.3, 1.7, g) * (1 - sstep(3.8, 4.3, g)) - (sstep(7.2, 7.6, g) - sstep(10.6, 11, g)) * .6 - (sstep(13.1, 13.4, g) - sstep(18.3, 18.8, g)) * .85 - sstep(21.6, 22, g) * .9);
    B.uH.value = (1 - sstep(.3, .9, g)) + (sstep(3.9, 4.3, g) - sstep(6.8, 7.1, g)) * .6;
    B.uDraw.value = this.bgDraw; B.uHeroA.value = 0; if (g < 2) B.uA.value *= sstep(.78, 1.05, g);   // the atrium is the hero's background
    { const gw = (1 - sstep(.5, 1.2, g)) + sstep(22.1, 22.6, g) * (1 - sstep(23.4, 24, g));
      if (gw > .001) { const mw = this.card.root.matrixWorld;
        const pa = this.anchor(this._glowP.set(-CARD.W / 2 + .05, CARD.H / 2, -.06).applyMatrix4(mw)), pb = this.anchor(this._glowP.set(CARD.W / 2 - .38, CARD.H / 2, -.06).applyMatrix4(mw));
        B.uGlowS.value.set(pa.x, pa.y, pb.x, pb.y); B.uGlowP.value.set(Math.min(this.w, this.h * 1.4) * .06, .04 * gw); } else B.uGlowP.value.y = 0; }

    // --- particles
    const u = this.particles.u;
    this.card.root.updateMatrixWorld(); u.uCard.value.copy(this.card.root.matrixWorld);
    u.uDisA.value = g < 12 ? (g < 2.06 ? -1 : -.2 + 4.8 * sstep(2.06, 2.72, g) + sstep(2.65, 3.1, g) * 4) : 9;
    u.uDisB.value = g > 22 ? lerp(-1, 5.2, sstep(22.75, 24.05, g)) : -1;
    let S = 1;
    S += sstep(3.1, 3.85, g); S += sstep(6.5, 7.4, g); S += sstep(10.25, 11.05, g); S += sstep(13.7, 14.85, g); S += sstep(17.75, 18.45, g); S += sstep(21.15, 22.05, g);
    u.uS.value = S;
    u.uFade.value = sstep(21.85, 22.4, g);
    u.uShell.value = 1 + sstep(17.4, 18.2, g) * 1.4;
    u.uSwirl.value = .8 - (sstep(2.95, 3.1, g) - sstep(3.95, 4.1, g)) * .5;
    u.uTime.value = t;
    u.uCurve.value = 1 - (sstep(4.1, 4.6, g) - sstep(6.5, 6.9, g)) * .82;
    u.uTop.value = sstep(23.9, 24.5, g);
    this.card.matChip.emissiveIntensity = sstep(1.78, 2.05, g) * 1.3;
    this.card.matFront.specularIntensity = 1 - (sstep(.7, 1.3, g) - sstep(1.9, 2.3, g)) * .75;   // the chip close-up: the brushing must not read as rain
    this.card.matChip.envMapIntensity = 1.05 + (sstep(.3, .7, g) - sstep(1.2, 1.6, g)) * 1.7;   // the push-in looks straight at the chip: keep its gold up
    u.uAlpha.value = (1 - sstep(24.4, 25.2, g) * .86) * (1 - (sstep(18.15, 18.3, g) - sstep(18.85, 19.1, g)) * .8);
    const tun = sstep(1.9, 2.4, g) * (1 - sstep(3.25, 3.9, g));
    u.uSize.value = (this.portrait ? 2.4 : 2.0) * (1 - tun * .42) * (1 - sstep(7.2, 7.7, g) * (1 - sstep(10.4, 10.9, g)) * .45) * (1 - (sstep(10.8, 11.3, g) - sstep(13.3, 13.8, g)) * .4);
    u.uCap.value = this.portrait ? 1 - (sstep(19.1, 19.7, g) - sstep(21.3, 21.8, g)) * .45 : 1;   // phone ring: the camera is close, so its dots sit at the size cap; smaller reads as distinct points, not bokeh
    u.uAlpha.value *= (this.portrait ? 1 - (sstep(19.2, 19.6, g) - sstep(21.0, 21.4, g)) * .3 : 1);
    u.uAlpha.value *= 1 - (sstep(21.3, 21.5, g) - sstep(21.8, 21.95, g)) * .65;   // dust steps back while the coins converge
    u.uAlpha.value *= 1 + (sstep(21.9, 22.05, g) - sstep(22.35, 22.6, g)) * .6;    // the card re-assembles bright
    u.uAlpha.value *= (1 - tun * .35) * (1 - (sstep(4.25, 4.7, g) - sstep(6.55, 6.9, g)) * .8) * (1 - (sstep(7.4, 7.8, g) - sstep(10.4, 10.8, g)) * .3) * (1 - (sstep(11.3, 11.7, g) - sstep(13.0, 13.3, g)) * .6);

    // --- tunnel + dashboard lines
    this.tunnel.u.uAlpha.value = sstep(2.2, 2.55, g) * (1 - sstep(3.2, 3.7, g));
    this.tunnel.u.uTime.value = t;
    this.dashLines.u.uAlpha.value = 0;
    this.dashLines.u.uTime.value = t;

    // --- globe
    const gForm = sstep(6.8, 7.6, g) * (1 - sstep(10.3, 10.9, g));
    // follow the transfer: New York faces the camera at the origin step, Singapore sits inside the limb on arrival
    const yaw = .75 - sstep(8.0, 8.95, g) * 1.45 - sstep(9.0, 9.9, g) * .3 - sstep(9.9, 10.6, g) * .1 + (still ? 0 : t * .008);
    // tip the north toward the camera mid-route so New York and Singapore share the disc; the pulse lands as step 04 begins
    const gTilt = .45 + (sstep(8.25, 8.85, g) - sstep(10.4, 10.9, g)) * .3;
    this.globe.update(t, yaw, gTilt, gForm, sstep(8.0, 9.65, g));
    this.globe.group.updateMatrixWorld(); u.uGlobe.value.copy(this.globe.spin.matrixWorld);

    // --- 3D type
    if (g > 12.9 && g < 14.6 && (!this.type.base || this._alignG !== this._layoutKey)) this.alignType();
    this.type.update(sstep(13.32, 14.2, g), sstep(13.18, 13.3, g) * (1 - sstep(14.15, 14.4, g)));
    this.type.dust.material.uniforms.uTime.value = t;

    // --- vault
    const vVis = sstep(13.9, 14.6, g) * (1 - sstep(18.12, 18.2, g));
    this.vault.update(t, vVis, sstep(15.2, 16.6, g), g * .9 + Math.sin(t * .35) * .05, sstep(16.7, 17.6, g) * 1.2, sstep(17.35, 17.95, g));

    // --- coins
    const cVis = sstep(18.16, 18.4, g) * (1 - sstep(21.88, 21.98, g));
    this.coins.boost = this.portrait ? 1.5 : 0; this.coins.update(t, cVis, sstep(19.25, 20.1, g) + sstep(20.3, 21.0, g), sstep(21.3, 21.95, g));

    // flashes: into the vault core
    this.final.uniforms.uFlash.value = sstep(18.0, 18.13, g) * (1 - sstep(18.13, 18.19, g)) * .55;
    this.bloom.strength = (.6 - tun * .25 - (sstep(7.3, 7.7, g) - sstep(10.4, 10.8, g)) * .3) - sstep(16.8, 17.6, g) * (1 - sstep(18.1, 18.2, g)) * .22;
    const fogL = sstep(13.2, 13.4, g) * (1 - sstep(13.95, 14.2, g)); this.scene.fog.near = lerp(g > 12 && g < 18.3 ? 26 : 30, 5, fogL); this.scene.fog.far = lerp(70, 16, fogL);
    this.bloom.threshold = (g < 1.6 || g > 21.8) ? .95 : .88;
    this.updateHero(g, t, dt);
    // the field: in from the hero's hand-off, calmer under the Treasury dashboard and the NUMBERS fly-through, on through the footer
    const fa = sstep(.55, 1.05, g) * (1 - .45 * (sstep(4.0, 4.4, g) - sstep(6.8, 7.2, g))) * (1 - .55 * (sstep(13.15, 13.35, g) - sstep(14.1, 14.4, g)));
    this.field.update(this.camera, t, fa);
    this.g = g;
  }

  // ---- hero: atrium + sculpture (+ the gate/reveal state main.js animates in this.hero)
  updateHero(g, t, dt) {
    const H = this.hero, A = this.atrium, S = this.sculpt;
    const dim = 1 - .5 * sstep(.3, .7, g) - .5 * sstep(1.0, 1.5, g);   // the room stays at half behind the card, then lets the dive go
    A.u.uReveal.value = H.reveal; A.u.uFill.value = Math.max(H.fill, H.reveal); A.wireU.uWire.value = H.wire; A.wireU.uDraw.value = H.draw;
    if (A.voidU) A.voidU.uHold.value = H.hold; if (A.shaftU) A.shaftU.uRays.value = H.rays;   // the gate's void and its light (main.js: the hold and the entrance)
    if (A.latU) { A.latU.uOn.value = H.lat; A.latU.uPour.value = S.su.uPour.value; }
    A.update(t, dim, this._fpx || 1000);
    const sv = g < .75;
    S.group.visible = sv;
    if (sv) {
      this.card.root.updateMatrixWorld(); S.cardMatrix.copy(this.card.root.matrixWorld);
      // the forms follow the scroll once the entrance has poured the first one in (no timer ever moves them); past the
      // pinned span the sculpture is the last form, the card, which the solid card then prints over
      if (H.entered && !H.scrub && S.mode === 'time' && this.heroForms.includes(S.next) && S.morph >= .8) H.scrub = true;
      if (H.scrub) S.scrub(this.heroForms, g > .001 ? this.heroForms.length - 1 : H.pos);
      else if (g > .05 && S.next !== 'card') S.go('card', 1.4);
      S.setView(this.camera, this.h / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2))));
      this.stepStir(g, dt);
      S.step(t, dt);
      const fa = 1 - sstep(.45, .6, g);
      S.u.uAlpha.value = fa * H.sAlpha; S.u.uRefl.value = H.reveal * (1 - sstep(.04, .25, g)) * (S.next === 'card' ? .35 : 1); A.glassK.value = this.portrait ? .34 : .58; S.su.uAlpha.value = fa * H.lat * (H.entered ? 1 : 0);
    }
    if (dim > .001) {   // the atrium's look: a stronger, softer bloom for the light sculpture and the lamps
      this.bloom.strength = lerp(this.bloom.strength, this.heroBloom[0], dim); this.bloom.threshold = lerp(this.bloom.threshold, this.heroBloom[1], dim); this.bloom.radius = lerp(.5, this.heroBloom[2], dim);
    } else this.bloom.radius = .5;
    if (H.bk < 1) { this.bloom.strength *= H.bk; this.bloom.threshold = lerp(.97, this.bloom.threshold, H.bk); }   // the gate's bloom (main.js), back to the room's as the print lands
  }
  // the cursor's stir in the hero sculpture (the lab recording's interaction). The page's pointer response (interact.js)
  // splats and steps the fluid for the whole site; the sculpture's own simulation reads that flow and the capture at the
  // cursor, so its beads ride off in ribbons in 3D (with inertia) and spring home as they cool.
  stepStir(g, dt) {
    const S = this.sculpt, ix = this.ix, F = ix.fluid, p = this.pointer, st = this._stir, H = this.hero, o = this.opts, Hh = this.h;
    const touch = p.kind === 'touch', k = H.entered && !o.reduced ? 1 - sstep(.1, .4, g) : 0;
    // is the cursor on the sculpture? (the HUD's View lights, the cursor offers it, a click opens it: the recording's CTA)
    const c0 = this.anchor(this._hv3.set(0, .1, 0)), c1 = this.anchor(this._hv3.set(0, .1, 0).addScaledVector(S.velMat.uniforms.uCamR.value, 1.9));
    const r = Math.hypot(c1.x - c0.x, c1.y - c0.y), dx = (p.x - c0.x) / (r * .82), dy = (p.y - c0.y) / (r * 1.0);
    this.sculptHover = p.inside && !touch && H.entered && g < .03 && dx * dx + dy * dy < 1;
    st.v = (st.v || 0) + (ix.speed - (st.v || 0)) * Math.min(1, dt * 8); this.stirRest = st.v < .08 * Hh;   // resting, not stirring (the cursor's label waits for this)
    // the sculpture runs the stir itself: the page's field must not push its beads a second time (a little lean in the gate)
    S.velMat.uniforms.uIK.value = H.entered ? 0 : .3;
    if (!(k > 0 || F.live)) { S.stir(null, false); return; }
    S.stir(F.texture, true, ix.cur.x, ix.cur.y, ix.capOn * k, ix.rad, ix.vel.x, ix.vel.y, ix.capHeat);
  }
  heroStep(d) {
    const L = this.heroForms, H = this.hero; H.idx = ((H.idx ?? -1) + d + L.length) % L.length; H.holdFor = 3.8;
    this.sculpt.go(L[H.idx], 2.6);
  }
  heroTo(i) { const H = this.hero; H.idx = i; this.sculpt.go(this.heroForms[i], 2.6); }

  alignType() {
    const el = document.getElementById('numbersWord'); if (!el) return;
    const rect = el.getBoundingClientRect();
    // evaluate camera at hand-off pose without disturbing the live camera
    const cam = this.camera.clone(); const pos = this.camTrack.at(13.25, 'pos'), look = this.camTrack.at(13.25, 'look');
    cam.position.set(...pos); cam.lookAt(...look); cam.fov = this.camTrack.at(13.25, 'fov');
    cam.updateProjectionMatrix(); cam.projectionMatrix.elements[8] = 0; cam.projectionMatrix.elements[9] = 0; cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
    cam.updateMatrixWorld();
    if (el.dataset.rect) { const r2 = JSON.parse(el.dataset.rect); this.type.align(cam, r2, this.w, this.h); }
    else this.type.align(cam, rect, this.w, this.h);
    this._alignG = this._layoutKey;
  }

  hubScreen() { return this.globe.project(this.camera, this.w, this.h); }
  anchor(v) { const p = v.clone().project(this.camera); return { x: (p.x * .5 + .5) * this.w, y: (-p.y * .5 + .5) * this.h, z: p.z }; }

  pickCoin() {
    if (!this.coins.group.visible) return -1;
    this.ray.setFromCamera(this.ndc, this.camera);
    return this.coins.pick(this.ray);
  }

  render() { this.atrium.renderReflection(this.renderer, this.scene, this.camera, this.w, this.h, this.dpr); this.composer.render(); }
}

function easeOutQuint(t) { return 1 - Math.pow(1 - clamp(t), 5); }
function easeInOutCubic(t) { t = clamp(t); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
