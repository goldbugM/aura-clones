import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { makeCanvas, heightToNormal, rng } from './util.js';

const FloorShader = {
  name: 'GlossFloor',
  uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null }, uStr: { value: 2.8 }, uCenter: { value: new THREE.Vector2() }, uClip: { value: 0 }, uOn: { value: 1 },
    uSq: { value: 1.55 }, uThr: { value: new THREE.Vector2(.02, .16) }, uGain: { value: 5.4 }, uBase: { value: .5 },
    uLen: { value: new THREE.Vector2(.2, 1.4) }, uLod: { value: new THREE.Vector2(1.1, .7) }, uGrain: { value: .08 }, uDir: { value: .1 }, uFade: { value: .6 }, uEdge: { value: 1 } },
  vertexShader: `uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW; varying vec2 vL;
    void main(){ vUv = textureMatrix * vec4(position, 1.); vL = position.xy; vW = (modelMatrix * vec4(position, 1.)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  // wet studio floor: only the card's highlights (bevel, chip, emboss) reflect, smeared into vertical streaks;
  // the reflection is squeezed toward the contact line so the chip pools just under the card
  fragmentShader: `uniform sampler2D tDiffuse; uniform mat4 textureMatrix; uniform float uStr, uClip, uOn, uSq, uGain, uBase, uGrain, uDir, uFade, uEdge; uniform vec2 uCenter, uThr, uLen, uLod; varying vec4 vUv; varying vec3 vW; varying vec2 vL;
    void main(){
      float fz = vW.z - uCenter.y, fx = vW.x - uCenter.x;
      float d = max(fz + .45, 0.);
      float len = uLen.x + d * uLen.y, lod = clamp(uLod.x + d * uLod.y, .4, 3.);
      vec3 acc = vec3(0.); float ws = 0.;
      // squeeze toward the contact line in texture space, straight down the screen
      vec4 q0 = textureMatrix * vec4(vL, 0., 1.), qc = textureMatrix * vec4(vL.x, .45 - uCenter.y * 0., 0., 1.);
      vec2 uv0 = q0.xy / q0.w, uvc = qc.xy / qc.w; uv0.y = uvc.y + (uv0.y - uvc.y) * uSq;
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(.06711056, .00583715)))) - .5;   // interleaved-gradient jitter: no tap banding
      for (int i = 0; i < 24; i++) { float fi = (float(i) + ign) / 23.; float w = exp(-(fi - .4) * (fi - .4) * 4.);
        acc += textureLod(tDiffuse, uv0 + vec2(0., (fi - .4) * len * uDir), lod).rgb * w; ws += w; }   // explicit lod: jittered uvs would inflate the derivative-based mip
      acc /= ws;
      float l = dot(acc, vec3(.3, .59, .11));
      acc *= uBase + smoothstep(uThr.x, uThr.y, l) * uGain;
      // cool highlights (the lit edge) read emerald on the lacquer; the warm chip pool goes soft and neutral
      float lum = dot(acc, vec3(.3, .59, .11));
      // the hero's lit-edge streak keeps its body near the contact line (uEdge: hero only); only the bright core is lifted, so it stays narrow
      float ls = dot(textureLod(tDiffuse, uv0, max(lod - 1.8, 0.)).rgb, vec3(.3, .59, .11)) * (uBase + uGain);   // a sharper read of the same spot: the lift follows the edge's core, not its blur
      float eb = mix(.42, 1.9, exp(-max(d - 2.2, 0.) * 1.75) * smoothstep(.08, .4, ls) * uEdge);
      acc = mix(acc, vec3(.04, 1., .54) * min(lum * eb, .58), smoothstep(.0, .06, acc.b - acc.r) * smoothstep(.04, .2, lum) * mix(.85, .97, uEdge));
      acc = mix(acc, vec3(1., 1.03, .82) * lum * .6, smoothstep(.0, .08, acc.r - acc.b) * .7);
      // fine vertical grooves in the floor's lacquer break the reflection into streaks
      float gx = vW.x * 46.; float gr = fract(sin(floor(gx) * 91.7) * 4375.5) * .6 + fract(sin(floor(gx * .37) * 13.1) * 917.3) * .4;
      acc *= 1. - uGrain + uGrain * 2. * gr * smoothstep(0., .5, d);
      float fade = exp(-d * uFade) * (1. - smoothstep(1.2, 3.4, abs(fx))) * smoothstep(-3.4, -.6, fz);
      float clip = smoothstep(uClip - 14., uClip + 70., gl_FragCoord.y);
      float a = clamp(fade * clip * uOn, 0., 1.);
      vec3 floorTone = vec3(.006, .0125, .0098);
      gl_FragColor = vec4((acc * uStr + floorTone) * a, a * .92);
    }`
};

// ISO/IEC 7810 ID-1 proportions (85.60 × 53.98 mm). The face is the supplied card animation (incoming/
// MatrixPay_Looping_Animation_v1.lottie, split by tools/card): its body is 360 × 228 units with 18-unit corners and its chip
// 48 × 38 centred at (−122, −18), so the slab's corner and the 3D chip are placed in those units.
export const CARD = { W: 3.37, H: 2.125, T: 0.1, R: 18 * 3.37 / 360, B: 0.026 };
const UX = CARD.W / 360, UY = CARD.H / 228;
export const CHIP = { x: -122 * UX, y: 18 * UY, w: 48 * UX, h: 38 * UY };
const TEX_W = 2048, TEX_H = Math.round(2048 * CARD.H / CARD.W);

function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
const mPath = new Path2D('M90 138 154 110V390H90ZM166 110 250 224 334 110V220L250 334 166 220ZM346 110 410 138V390H346Z');   // the M, x 90–410, y 110–390
function drawM(ctx, cx, cy, h, grad) {
  const k = h / 280; ctx.save(); ctx.translate(cx - 250 * k, cy - 250 * k); ctx.scale(k, k);
  if (grad) { const g = ctx.createLinearGradient(80, 100, 420, 400); g.addColorStop(0, '#05b366'); g.addColorStop(.5, '#0acc94'); g.addColorStop(1, '#1fe0d6'); ctx.fillStyle = g; }
  ctx.fill(mPath); ctx.restore();
}
// The face: the card's still layers (lettering, chip, body gradient) baked sharp from the supplied animation by
// tools/card/bake.py; its moving light arrives live as the emissive map (js/gl/cardglow.js). A plain body if the bake is missing.
function paintFront(img) {
  const W = img ? img.naturalWidth : TEX_W, H = img ? img.naturalHeight : TEX_H;
  const [cc, c] = makeCanvas(W, H);
  const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#1b1f2b'); g.addColorStop(.5, '#0b1820'); g.addColorStop(1, '#09281f');
  c.fillStyle = g; c.fillRect(0, 0, W, H);   // under the bake's anti-aliased corners
  if (img) c.drawImage(img, 0, 0, W, H);
  return { color: cc };
}

function paintBack() {
  const W = TEX_W, H = TEX_H;
  const [cc, c] = makeCanvas(W, H); const [hc, h] = makeCanvas(W, H); const [mc, m] = makeCanvas(W, H);
  { const g = c.createLinearGradient(W, 0, 0, H); g.addColorStop(0, '#1b1f2b'); g.addColorStop(.5, '#0b1820'); g.addColorStop(1, '#09281f'); c.fillStyle = g; c.fillRect(0, 0, W, H); }   // the face's body, mirrored
  h.fillStyle = 'rgb(128,128,128)'; h.fillRect(0, 0, W, H);
  m.fillStyle = 'rgb(0,148,40)'; m.fillRect(0, 0, W, H);
  const r = rng(11);
  for (let i = 0; i < 120000; i++) { const x = r() * W, y = r() * H, s = .8 + r() * 1.8; h.fillStyle = r() < .5 ? 'rgba(255,255,255,.045)' : 'rgba(0,0,0,.045)'; h.beginPath(); h.arc(x, y, s, 0, 6.283); h.fill(); }
  // magnetic stripe — deep glossy black
  c.fillStyle = '#030404'; c.fillRect(0, H * .1, W, H * .17);
  m.fillStyle = 'rgb(0,40,30)'; m.fillRect(0, H * .1, W, H * .17);
  h.fillStyle = 'rgb(140,140,140)'; h.fillRect(0, H * .1, W, H * .17);
  // signature panel
  const sx = W * .075, sy = H * .38, sw = W * .56, sh = H * .13;
  const gp = c.createLinearGradient(sx, 0, sx + sw, 0); gp.addColorStop(0, '#2b302e'); gp.addColorStop(1, '#202523');
  c.fillStyle = gp; c.fillRect(sx, sy, sw, sh);
  c.save(); c.strokeStyle = 'rgba(0,217,150,.08)'; c.lineWidth = 2; for (let x = sx; x < sx + sw; x += 14) { c.beginPath(); c.moveTo(x, sy); c.lineTo(x + 30, sy + sh); c.stroke(); } c.restore();
  c.fillStyle = '#d6dcd9'; c.fillRect(sx + sw + 22, sy, W * .11, sh);
  c.fillStyle = '#121514'; c.font = 'italic 500 58px "Geist Mono", monospace'; c.fillText('•••', sx + sw + 44, sy + sh * .68);
  c.font = '500 22px "Geist Mono", monospace'; c.letterSpacing = '5px'; c.fillStyle = '#6d7673';
  c.fillText('AUTHORIZED SIGNATURE — NOT VALID UNLESS SIGNED', sx, sy - 18);
  const lines = ['This card is property of MatrixPay Technologies Inc. and must be returned upon request.', 'Use of this card constitutes acceptance of the cardholder agreement. Treasury OS v4 · MPC secured.', 'Lost or stolen cards: report instantly in the MatrixPay console. Issued under licence.'];
  c.font = '400 24px Geist, sans-serif'; c.letterSpacing = '0px'; c.fillStyle = '#5b6461';
  lines.forEach((l, i) => c.fillText(l, sx, H * .63 + i * 38));
  // the emerald M (assets/brand/logo-m.lottie's monogram, from its still), bottom right
  const bx = W * .9, by = H * .82;
  drawM(c, bx, by, 96, true); m.fillStyle = 'rgb(0,70,0)'; drawM(m, bx, by, 96, false);
  // mirror horizontally: the back cap shares the front cap's UV layout (flip height before deriving normals)
  const flip = (src) => { const [o, ox] = makeCanvas(W, H); ox.translate(W, 0); ox.scale(-1, 1); ox.drawImage(src, 0, 0); return [o, ox]; };
  const [, hfx] = flip(hc);
  const nrm = heightToNormal(hfx, W, H, 2.0);
  return { color: flip(cc)[0], normal: nrm, rm: flip(mc)[0] };
}

function paintChip(img) {
  const W = 1024, H = Math.round(1024 * CHIP.h / CHIP.w);
  const [cc, c] = makeCanvas(W, H); const [hc, h] = makeCanvas(W, H);
  const gg = c.createLinearGradient(0, 0, W, H); gg.addColorStop(0, '#d9b46a'); gg.addColorStop(1, '#b38b48');
  c.fillStyle = gg; c.fillRect(0, 0, W, H);
  if (img) c.drawImage(img, 0, 0, W, H);
  // height: the contact lanes sit low, the plate's rim rolls off
  const px = c.getImageData(0, 0, W, H).data, hd = h.createImageData(W, H), [ec, e] = makeCanvas(W, H), ed = e.createImageData(W, H);
  for (let i = 0; i < W * H; i++) { const l = (px[i * 4] * .3 + px[i * 4 + 1] * .59 + px[i * 4 + 2] * .11) / 255, lane = Math.min(1, Math.max(0, (.47 - l) / .1));
    hd.data[i * 4] = hd.data[i * 4 + 1] = hd.data[i * 4 + 2] = 160 - lane * 110; hd.data[i * 4 + 3] = 255;
    ed.data[i * 4] = ed.data[i * 4 + 1] = ed.data[i * 4 + 2] = lane * 200; ed.data[i * 4 + 3] = 255; }
  h.putImageData(hd, 0, 0); e.putImageData(ed, 0, 0);
  h.save(); h.filter = 'blur(3px)'; h.strokeStyle = 'rgb(110,110,110)'; h.lineWidth = 10; roundRect(h, 0, 0, W, H, 150); h.stroke(); h.restore();
  { const [bc, bx] = makeCanvas(W, H); bx.filter = 'blur(2px)'; bx.drawImage(ec, 0, 0); e.clearRect(0, 0, W, H); e.drawImage(bc, 0, 0); }
  const [mc, m] = makeCanvas(W, H); m.fillStyle = 'rgb(0,80,255)'; m.fillRect(0, 0, W, H);   // G roughness, B metalness
  return { color: cc, normal: heightToNormal(h, W, H, 1.8), rm: mc, emis: ec };
}

function tex(canvas, renderer, srgb) {
  const t = new THREE.CanvasTexture(canvas);
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

function roundedShape(w, h, r) {
  const s = new THREE.Shape(); const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s;
}

// Extruded slab with exact outer dims, caps split into [front, back] groups and normalized cap UVs.
function slab(w, h, t, r, b, seg = 18) {
  const shape = roundedShape(w - 2 * b, h - 2 * b, Math.max(.001, r - b));
  const g = new THREE.ExtrudeGeometry(shape, { depth: t - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 4, curveSegments: seg });
  g.center();
  const pos = g.attributes.position, uv = g.attributes.uv, nrm = g.attributes.normal;
  const cap = g.groups[0]; const side = g.groups[1];
  const half = cap.count / 2;
  // ExtrudeGeometry emits the bottom (back) lid first, then the top (front) lid.
  for (let i = cap.start; i < cap.start + cap.count; i++) {
    const front = pos.getZ(i) > 0; const u = (pos.getX(i) + w / 2) / w, v = (pos.getY(i) + h / 2) / h;
    uv.setXY(i, front ? u : 1 - u, v);
  }
  g.clearGroups();
  g.addGroup(cap.start + half, half, 0);   // front
  g.addGroup(cap.start, half, 1);          // back
  g.addGroup(side.start, side.count, 2);   // edges + bevel
  return g;
}

// Shared dissolve: discards fragments within a growing radius of the chip with a glowing emerald front.
export const dissolve = {
  uDis: { value: -1 }, uDisC: { value: new THREE.Vector2(CHIP.x, CHIP.y) }, uDisW: { value: 0.46 }, uGlow: { value: 1 }, uTime: { value: 0 }, uScan: { value: 0 }
};
export const rim = { uRimDir: { value: new THREE.Vector3(1, 0, 0) }, uRim: { value: 1.6 } };
function withDissolve(mat, localOff = new THREE.Vector3(), withRim = false, clampSpec = withRim) {
  const uOff = { value: localOff };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, dissolve, { uOff }, withRim ? rim : {});
    sh.vertexShader = 'uniform vec3 uOff;\nvarying vec3 vCardP;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvCardP = position + uOff;');
    sh.fragmentShader = `uniform float uDis; uniform vec2 uDisC; uniform float uDisW; uniform float uGlow; uniform float uTime; uniform float uScan;
varying vec3 vCardP;
float dhash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float dnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(dhash(i),dhash(i+vec2(1,0)),f.x), mix(dhash(i+vec2(0,1)),dhash(i+vec2(1,1)),f.x), f.y); }
float disField(){ vec2 q = vCardP.xy; float n = dnoise(q*4.0)*.75 + dnoise(q*9.0)*.25;
  return mix(length(q - uDisC) + (n - .5)*.34, q.y + .45 * q.x + 1.9 + (dnoise(q * 14.) - .5) * .07, uScan); }   // uScan: a diagonal print (the hero) instead of the chip burst
` + sh.fragmentShader
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nfloat dF = disField() - uDis; if (dF < 0.0) discard;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\nfloat dE = 1.0 - smoothstep(0.0, uDisW, dF); vec3 dCol = mix(vec3(0.06, 0.48, 0.43), vec3(0.8, 0.96, 1.0), dE * dE * dE);   // the shared particle palette: teal falloff, cool-white front totalEmissiveRadiance += dCol * dE * dE * .95 * uGlow * step(-0.5, uDis);' +
        (withRim ? '\nfloat rimK = max(dot(normal, uRimDir), 0.0); float rimV = .25 + .75 * smoothstep(.9, -.7, vCardP.y); totalEmissiveRadiance += mix(vec3(0.0, 0.85, 0.59), vec3(.55, 1., .82), rimV * rimV) * rimK * rimK * rimK * uRim * rimV;' : ''));
    if (withRim) sh.fragmentShader = 'uniform vec3 uRimDir; uniform float uRim;\n' + sh.fragmentShader;
    // keep thin speculars below the bloom threshold (they bead in the bloom mips); emissive (rim, dissolve) still blooms
    if (clampSpec) sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight = min(outgoingLight - totalEmissiveRadiance, vec3(.8)) + totalEmissiveRadiance;\n#include <opaque_fragment>');
  };
  mat.customProgramCacheKey = () => 'mp-dissolve' + (withRim ? '-rim' : '') + (clampSpec ? '-clamp' : '');
  return mat;
}

export class Card {
  constructor(renderer, data = {}) {
    const front = paintFront(data.cardFace), back = paintBack(), chip = paintChip(data.cardChip);
    const mk = (p, opts) => withDissolve(new THREE.MeshPhysicalMaterial(Object.assign({
      map: tex(p.color, renderer, true), normalMap: tex(p.normal, renderer, false), roughnessMap: tex(p.rm, renderer, false), metalnessMap: tex(p.rm, renderer, false),
      roughness: 1, metalness: 1, normalScale: new THREE.Vector2(1, 1)
    }, opts)));
    // the face is lacquered print, not brushed metal: a clear coat over the supplied artwork, lit live by its own moving light
    this.matFront = withDissolve(new THREE.MeshPhysicalMaterial({ map: tex(front.color, renderer, true), roughness: .42, metalness: .1, clearcoat: .6, clearcoatRoughness: .16,
      envMapIntensity: .3, specularIntensity: 1, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 0 }));
    this.renderer = renderer; this.glowAt = -1;
    this.matBack = mk(back, { clearcoat: .22, clearcoatRoughness: .34, envMapIntensity: .55 });
    // the edge carries the supplied card's mint border light (its stroke sits on the outline, which the bevel takes over here)
    this.matEdge = withDissolve(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.6, .65, .63), metalness: 1, roughness: .32, envMapIntensity: 1.0,
      emissive: new THREE.Color(.25, 1, .78), emissiveIntensity: .07 }), new THREE.Vector3(), true);
    this.matChip = mk(chip, { envMapIntensity: 1.05, metalness: .78, emissiveMap: tex(chip.emis, renderer, true), emissive: new THREE.Color(0, .85, .59), emissiveIntensity: 0 });
    this.matChip.onBeforeCompile = null; withDissolve(this.matChip, new THREE.Vector3(CHIP.x, CHIP.y, 0), false, true);
    this.matChipSide = withDissolve(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.62, .48, .26), metalness: 1, roughness: .38 }), new THREE.Vector3(CHIP.x, CHIP.y, 0), false, true);

    const body = new THREE.Mesh(slab(CARD.W, CARD.H, CARD.T, CARD.R, CARD.B, 20), [this.matFront, this.matBack, this.matEdge]);
    const chipM = new THREE.Mesh(slab(CHIP.w, CHIP.h, .008, 7 * UX, .002, 10), [this.matChip, this.matChip, this.matChipSide]);
    chipM.position.set(CHIP.x, CHIP.y, CARD.T / 2 - .002);
    this.root = new THREE.Group(); this.root.add(body, chipM);
    this.body = body; this.chip = chipM;

    // glossy floor: planar reflection of the card layer, blurred and streaked, fading with distance
    this.floorY = -1.235;
    this.floor = new Reflector(new THREE.PlaneGeometry(16, 12), { textureWidth: 512, textureHeight: 512, multisample: 4, shader: FloorShader });
    this.floor.rotation.x = -Math.PI / 2; this.floor.position.y = this.floorY;
    this.floor.camera.layers.set(1);
    { const t = this.floor.getRenderTarget().texture; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; }
    Object.assign(this.floor.material, { transparent: true, premultipliedAlpha: true, depthWrite: false });
    this.floor.renderOrder = 2;
    body.layers.enable(1); chipM.layers.enable(1);
    // soft emerald halo behind the card's top-right corner (studio backlight)
    // edge-hugging emerald backlight: a blurred rounded-rect glow parented behind the card, strongest top-right
    const HW = 1024, HH = Math.round(1024 * (CARD.H * 1.6) / (CARD.W * 1.36));
    const [hc, hx] = makeCanvas(HW, HH);
    const sx = HW / (CARD.W * 1.36), cwp = CARD.W * sx, chp = CARD.H * sx, ox = (HW - cwp) / 2, oy = (HH - chp) / 2;
    const grad = hx.createLinearGradient(ox, oy + chp, ox + cwp, oy); grad.addColorStop(0, 'rgba(0,217,150,0)'); grad.addColorStop(.62, 'rgba(0,217,150,0)'); grad.addColorStop(.86, 'rgba(0,217,150,.45)'); grad.addColorStop(1, 'rgba(120,255,205,.95)');
    hx.filter = 'blur(18px)'; hx.strokeStyle = grad; hx.lineWidth = 22; roundRect(hx, ox, oy, cwp, chp, CARD.R * sx); hx.stroke();
    hx.filter = 'blur(40px)'; hx.lineWidth = 46; hx.globalAlpha = .5; roundRect(hx, ox, oy, cwp, chp, CARD.R * sx); hx.stroke();
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(CARD.W * 1.36, CARD.H * 1.6), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(hc), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .2 }));
    this.halo.position.z = -CARD.T / 2 - .03; this.halo.renderOrder = 3;
    this.root.add(this.halo);
  }
  // the live light layers (js/gl/cardglow.js) as the face's emissive map; refreshed at the animation's own 30 fps
  setGlow(canvas, intensity = .75) {
    const t = new THREE.CanvasTexture(canvas); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
    t.premultiplyAlpha = true;   // the player's black background is CSS, not pixels: weight each layer's colour by its own coverage
    this.matFront.emissiveMap = t; this.matFront.emissiveIntensity = intensity; this.matFront.needsUpdate = true; this.glow = t;
  }
  tickGlow(t) { if (this.glow && t - this.glowAt > 1 / 31) { this.glow.needsUpdate = true; this.glowAt = t; } }
  setPose(pos, rot) { this.root.position.copy(pos); this.root.rotation.copy(rot); }
  setFloor(on, y, clipPx = 0) {
    this.floor.visible = on > 0.001;
    if (y !== undefined) { this.floorY = y; this.floor.position.y = y; }
    const u = this.floor.material.uniforms; u.uOn.value = on; u.uClip.value = clipPx;
  }
  updateReflection() {
    const p = this.root.position;
    this.floor.position.x = p.x; this.floor.position.z = p.z;
    this.floor.material.uniforms.uCenter.value.set(p.x, p.z);
  }
}
