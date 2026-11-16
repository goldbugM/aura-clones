import * as THREE from 'three';
import { Fluid } from './fluid.js';

// One pointer response for every particle on the page: the cursor stirs them (Nov 9, after the lab recording, Desktop
// "Screen Recording 2026-11-06 at 4.13.44 AM.mov").
//
// The pointer splats a small screen-space fluid (js/gl/fluid.js) along its motion. A screen-space field, one texel per
// ~7 CSS px, then tracks where the points whose rest position is under each texel have been carried: xy is that
// displacement in CSS px, z the texel's heat. Each frame every texel looks up the flow where its points are now; a hot
// texel rides it (a cold one barely leans), the texels right at the cursor are caught and carried at its speed, and a
// spring takes each one home, slowly while it is hot, quickly once it cools (~1 s). Because neighbouring texels are
// carried differently, a swipe draws the points under it out into long curling ribbons that knit back together.
//
// Every particle layer reads the same field: the stateless layers (the pool, the field between sections, the NUMBERS
// dust, the globe's hubs, the network lines, the hero's streams and room dust) offset their projected position by it in
// the vertex shader and brighten with its heat; the hero sculpture runs the same stir in its own simulation (it reads
// the fluid directly, sculpture.js); the fixed dot lattice only brightens. The field never touches a point's target, so
// morphs and scroll transitions carry on underneath it. A finger stirs only the flow, gently (a drag on a phone is a
// scroll); with reduced motion nothing moves and the points near the pointer only brighten.
export const IXU = {
  tFlow: { value: null },
  uIView: { value: new THREE.Vector2(1, 1) },     // viewport, CSS px
  uIRes: { value: new THREE.Vector2(1, 1) },      // drawing buffer, device px (for gl_FragCoord lookups)
  uIPtr: { value: new THREE.Vector4(-1e4, -1e4, 0, 90) },   // pointer (CSS px, y up), resting lens strength (px), radius (px)
  uITime: { value: 0 },
  uILit: { value: new THREE.Vector4(-1e4, -1e4, 280, 0) },   // the cursor's lamp (js/gl/light.js): centre (CSS px, y up), radius, strength
};

// GLSL for any shader that reads the field (vertex or fragment)
export const IX_GLSL = /* glsl */`
uniform sampler2D tFlow; uniform vec2 uIView, uIRes; uniform vec4 uIPtr, uILit; uniform float uITime;
// the cursor's lamp at a screen position (uv 0..1): the same falloff as the page's surface under it (js/gl/light.js)
float mpLitUv(vec2 uv){ vec2 d = uv * uIView - uILit.xy; return uILit.w * pow(1. + dot(d, d) / (uILit.z * uILit.z) * 3.3, -1.5); }
float mpLit(vec4 clip){ return clip.w <= 0. ? 0. : mpLitUv(clip.xy / clip.w * .5 + .5); }
// the field at a screen position (uv 0..1): xy = how far the stir has carried the points there (CSS px), z = brightness lift
vec3 mpFieldUv(vec2 uv){
  if (uv.x < -.02 || uv.x > 1.02 || uv.y < -.02 || uv.y > 1.02) return vec3(0.);
  vec3 F = texture2D(tFlow, clamp(uv, 0., 1.)).xyz;
  F.z = smoothstep(.06, .9, F.z) * .9;   // heat -> lift: a ribbon's fresh head burns, its cooling body less
  vec2 d = uv * uIView - uIPtr.xy; float l = length(d), r2 = l * l / (uIPtr.w * uIPtr.w);
  F.xy += d / max(l, 1.) * uIPtr.z * exp(-r2) * min(1., l / 16.);   // a faint parting under a resting pointer
  F.z += uIPtr.z * .03 * exp(-r2 * 1.6);
  return F; }
vec3 mpField(vec4 clip){ return clip.w <= 0. ? vec3(0.) : mpFieldUv(clip.xy / clip.w * .5 + .5); }
// moves a projected point by the field (k scales the push) and returns its brightness lift (the stir's heat, plus the
// lamp's: points inside the light's pool catch it like dust in a beam)
vec4 mpInteract(vec4 clip, float k, out float lift){ vec3 f = mpField(clip); lift = f.z + mpLit(clip) * .3; clip.xy += f.xy * k * 2. / uIView * clip.w; return clip; }
`;

const QUAD_V = 'varying vec2 vUv; void main(){ vUv = position.xy * .5 + .5; gl_Position = vec4(position.xy, 0., 1.); }';
// one texel = the points whose rest position projects under it: where they are now (D, CSS px) and how hot they are
const FIELD_F = /* glsl */`precision highp float;
uniform sampler2D tF, tFluid; uniform vec2 uView, uPtrV; uniform vec4 uPtr, uK; uniform float uDt, uMotion, uMax, uHDec, uDiv;
varying vec2 vUv;
vec2 h22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
void main(){
  vec4 F = texture2D(tF, vUv);
  vec2 D = F.xy; float heat = F.z;
  vec2 X = vUv * uView + D;                                   // where this texel's points are now (CSS px, y up)
  vec2 suv = X / uView;
  float edge = step(0., suv.x) * step(suv.x, 1.) * step(0., suv.y) * step(suv.y, 1.);
  vec2 fv = texture2D(tFluid, clamp(suv, 0., 1.)).xy * edge;   // the flow there, uv/s
  float fs = length(fv);
  heat = max(heat, smoothstep(.35, 1.1, fs) * uK.y);         // the swipe's strong core heats what it crosses; its broad wake does not
  vec2 dp = X - uPtr.xy; float near = exp(-dot(dp, dp) / (uPtr.w * uPtr.w));
  heat = max(heat, near * uPtr.z * uK.w);                     // caught at the cursor: hottest
  float hs = smoothstep(0., .6, heat);
  // hot points ride the flow, cold ones barely lean; at the cursor they are carried at its speed (the ribbon's head)
  vec2 vel = fv * uView * uK.x * smoothstep(.015, .22, fs) * (.12 + .88 * smoothstep(.15, .55, heat));
  vec2 capV = uPtrV * uK.z - dp * 2.2 + vec2(dp.y, -dp.x) * 1.2;
  vel = mix(vel, capV, clamp(near * uPtr.z * uMotion * 1.2, 0., .85));
  vel += (h22(gl_FragCoord.xy) * 2. - 1.) * smoothstep(.25, .8, heat) * uDiv;   // hot points drift apart a little: grain, not a sheet
  vel -= D * mix(6., .7, hs);                                 // the spring home: slow while hot, quick once cool
  D += vel * uDt * uMotion;
  float m = length(D); if (m > uMax) D *= uMax / m;
  D *= uMotion;
  heat = clamp(heat - uDt * uHDec, 0., 1.);
  gl_FragColor = vec4(D, heat, 1.);
}`;

export class Interact {
  constructor(renderer, opts) {
    this.r = renderer; this.opts = opts;
    const rt = () => new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, stencilBuffer: false, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping });
    this.rt = [rt(), rt()]; this.ping = 0;
    this.fluid = new Fluid(renderer, { res: opts.mobile ? 80 : 112 });
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); this.scene = new THREE.Scene();
    this.u = { tF: { value: null }, tFluid: { value: null }, uView: { value: new THREE.Vector2(1, 1) }, uPtr: { value: new THREE.Vector4(-1e4, -1e4, 0, 70) }, uPtrV: { value: new THREE.Vector2() },
      uK: { value: new THREE.Vector4(.45, .65, .8, .15) },   // flow gain, flow heat, capture gain, capture heat (set per frame)
      uDt: { value: .016 }, uMotion: { value: 1 }, uMax: { value: 260 }, uHDec: { value: 1 }, uDiv: { value: 30 } };
    const quad = new THREE.Mesh(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)),
      new THREE.ShaderMaterial({ uniforms: this.u, vertexShader: QUAD_V, fragmentShader: FIELD_F, depthTest: false, depthWrite: false }));
    quad.frustumCulled = false; this.scene.add(quad);
    // pointer state: where it is (CSS px, y up) and where it was last frame
    this.cur = new THREE.Vector2(-1e4, -1e4); this.prev = this.cur.clone(); this.on = 0; this.kind = 'mouse'; this.active = false; this.fresh = true;
    this.lens = 0; this.vel = new THREE.Vector2(); this.speed = 0; this.capOn = 0; this.capHeat = 0;
    this._fp = new THREE.Vector2(); this._ff = new THREE.Vector2();
    this.motion = opts.reduced ? 0 : 1;   // reduced motion: nothing moves, the points near the pointer only brighten
    this.resize(1, 1, 1);
  }
  resize(w, h, dpr) {
    this.w = w; this.h = h;
    const L = this.opts.mobile ? 144 : 200, a = w / h;
    const fw = a >= 1 ? L : Math.max(16, Math.round(L * a)), fh = a >= 1 ? Math.max(16, Math.round(L / a)) : L;
    for (const t of this.rt) { t.setSize(fw, fh); }
    this.clear(); this.fluid.resize(w / h);
    this.u.uView.value.set(w, h); IXU.uIView.value.set(w, h); IXU.uIRes.value.set(w * dpr, h * dpr);
    // sizes in viewport heights, so the stir reads the same on a phone and a wide screen
    this.rad = .076 * h; this.u.uPtr.value.w = this.rad; IXU.uIPtr.value.w = Math.max(64, Math.min(132, Math.min(w, h) * .12)) * 1.05;
    this.u.uMax.value = .3 * h;
  }
  clear() { const r = this.r, p = r.getRenderTarget(), cc = r.getClearColor(new THREE.Color()), ca = r.getClearAlpha(); r.setClearColor(0x000000, 0); for (const t of this.rt) { r.setRenderTarget(t); r.clear(true, false, false); } r.setRenderTarget(p); r.setClearColor(cc, ca); }
  // pointer input in client px; kind 'mouse' | 'pen' | 'touch'
  move(x, y, kind = 'mouse') {
    this.cur.set(x, this.h - y); this.kind = kind;
    if (!this.active || this.fresh) { this.prev.copy(this.cur); this.fresh = false; }
    this.active = true;
  }
  leave() { this.active = false; this.fresh = true; }
  step(dt) {
    dt = Math.min(Math.max(dt, 1 / 240), 1 / 20);
    const u = this.u, touch = this.kind === 'touch', H = this.h;
    this.on += ((this.active ? 1 : 0) - this.on) * Math.min(1, dt * 10);
    // the pointer this frame: its velocity (CSS px/s, y up), capped near two screen heights a second
    const dvx = (this.cur.x - this.prev.x) / dt, dvy = (this.cur.y - this.prev.y) / dt; this.prev.copy(this.cur);
    this.speed = this.active ? Math.hypot(dvx, dvy) : 0;
    const vc = 1.8 * H, vm = this.speed; this.vel.set(dvx, dvy); if (vm > vc) this.vel.multiplyScalar(vc / vm);
    // it splats the fluid along its motion (a finger gently: a drag on a phone is a scroll)
    if (this.active && this.motion && this.speed > 1) {
      const sp = Math.min(1, this.speed / (2.64 * H)), kk = .7 * (touch ? .45 : 1);
      this._fp.set(this.cur.x / this.w, this.cur.y / H); this._ff.set(dvx / this.w * kk, dvy / H * kk).clampLength(0, 2.2);
      this.fluid.splat(this._fp, this._ff, .0016 + sp * .0016);
    }
    if (this.motion) this.fluid.step(Math.min(dt, 1 / 30));
    // the capture at the cursor: how strongly it catches (with its speed; never a finger), and how hot it leaves them
    this.capOn = this.active && !touch ? Math.min(1, this.speed / (.091 * H)) * this.on : 0;
    this.capHeat = Math.min(1, .15 + smooth(.11, .49, this.speed / H));
    u.uDt.value = dt; u.uMotion.value = this.motion; u.tFluid.value = this.fluid.texture;
    u.uPtr.value.set(this.cur.x, this.cur.y, this.capOn, this.rad); u.uPtrV.value.copy(this.vel); u.uK.value.w = this.capHeat;
    // the resting lens: only under a hovering mouse (a finger has no hover)
    this.lens += (((this.active && !touch) ? 5 : 0) * this.motion - this.lens) * Math.min(1, dt * 4);
    IXU.uIPtr.value.set(this.cur.x, this.cur.y, this.lens, IXU.uIPtr.value.w);
    const r = this.r, prevRT = r.getRenderTarget(), a = this.ping, b = 1 - a;
    u.tF.value = this.rt[a].texture; r.setRenderTarget(this.rt[b]); r.render(this.scene, this.cam); r.setRenderTarget(prevRT);
    this.ping = b; IXU.tFlow.value = this.rt[b].texture;
  }
}
function smooth(a, b, x) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
