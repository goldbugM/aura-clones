import * as THREE from 'three';

// A small screen-space fluid (stable fluids: advect, vorticity confinement, pressure projection) that the pointer stirs in
// the hero. The sculpture's beads ride its velocity, which is what turns a pass of the cursor into long curling ribbons:
// the flow keeps moving and swirling after the cursor has gone, then dies away in a couple of seconds.
// Velocity is in screen uv per second (x right, y up). Ported from the lab-atrium build (Desktop/Claude/lab-atrium).

const VS = 'varying vec2 vUv; void main(){ vUv = position.xy * .5 + .5; gl_Position = vec4(position.xy, 0., 1.); }';
const head = /* glsl */`precision highp float; varying vec2 vUv; uniform vec2 uTexel;`;
const SHADERS = {
  advect: `${head} uniform sampler2D uVel, uSrc; uniform float uDt, uDiss;
    void main(){ vec2 v = texture2D(uVel, vUv).xy; vec2 c = vUv - v * uDt; gl_FragColor = vec4(texture2D(uSrc, c).xy * uDiss, 0., 1.); }`,
  splat: `${head} uniform sampler2D uSrc; uniform vec2 uPt, uForce; uniform float uRad, uAspect;
    void main(){ vec2 d = vUv - uPt; d.x *= uAspect; float g = exp(-dot(d, d) / uRad); gl_FragColor = vec4(texture2D(uSrc, vUv).xy + uForce * g, 0., 1.); }`,
  curl: `${head} uniform sampler2D uVel;
    void main(){ float L = texture2D(uVel, vUv - vec2(uTexel.x, 0.)).y, R = texture2D(uVel, vUv + vec2(uTexel.x, 0.)).y;
      float B = texture2D(uVel, vUv - vec2(0., uTexel.y)).x, T = texture2D(uVel, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4(.5 * (R - L - T + B), 0., 0., 1.); }`,
  vort: `${head} uniform sampler2D uVel, uCurl; uniform float uDt, uK;
    void main(){ float L = texture2D(uCurl, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uCurl, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uCurl, vUv - vec2(0., uTexel.y)).x, T = texture2D(uCurl, vUv + vec2(0., uTexel.y)).x, C = texture2D(uCurl, vUv).x;
      vec2 f = .5 * vec2(abs(T) - abs(B), abs(R) - abs(L)); f /= length(f) + 1e-4; f *= uK * C; f.y *= -1.;
      gl_FragColor = vec4(texture2D(uVel, vUv).xy + f * uDt, 0., 1.); }`,
  div: `${head} uniform sampler2D uVel;
    void main(){ float L = texture2D(uVel, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uVel, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uVel, vUv - vec2(0., uTexel.y)).y, T = texture2D(uVel, vUv + vec2(0., uTexel.y)).y;
      gl_FragColor = vec4(.5 * (R - L + T - B), 0., 0., 1.); }`,
  press: `${head} uniform sampler2D uP, uDiv;
    void main(){ float L = texture2D(uP, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uP, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uP, vUv - vec2(0., uTexel.y)).x, T = texture2D(uP, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4((L + R + B + T - texture2D(uDiv, vUv).x) * .25, 0., 0., 1.); }`,
  grad: `${head} uniform sampler2D uP, uVel;
    void main(){ float L = texture2D(uP, vUv - vec2(uTexel.x, 0.)).x, R = texture2D(uP, vUv + vec2(uTexel.x, 0.)).x;
      float B = texture2D(uP, vUv - vec2(0., uTexel.y)).x, T = texture2D(uP, vUv + vec2(0., uTexel.y)).x;
      gl_FragColor = vec4(texture2D(uVel, vUv).xy - .5 * vec2(R - L, T - B), 0., 1.); }`,
  scale: `${head} uniform sampler2D uSrc; uniform float uK; void main(){ gl_FragColor = vec4(texture2D(uSrc, vUv).xy * uK, 0., 1.); }`,
};

export class Fluid {
  constructor(renderer, { res = 112 } = {}) {
    this.r = renderer; this.res = res;
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); this.scene = new THREE.Scene();
    this.quad = new THREE.Mesh(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)));
    this.quad.frustumCulled = false; this.scene.add(this.quad);
    this.mats = {};
    for (const [k, fs] of Object.entries(SHADERS)) this.mats[k] = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader: fs, depthTest: false, depthWrite: false,
      uniforms: { uTexel: { value: new THREE.Vector2() }, uVel: { value: null }, uSrc: { value: null }, uCurl: { value: null }, uP: { value: null }, uDiv: { value: null },
        uDt: { value: 0 }, uDiss: { value: 1 }, uPt: { value: new THREE.Vector2() }, uForce: { value: new THREE.Vector2() }, uRad: { value: .001 }, uAspect: { value: 1 }, uK: { value: 1 } } });
    this.idle = 99;   // seconds since the last splat: the flow is let die and then not stepped at all
    this.resize(1);
  }
  rt() { return new THREE.WebGLRenderTarget(this.w, this.h, { type: THREE.HalfFloatType, format: THREE.RGBAFormat, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false, stencilBuffer: false, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping }); }
  resize(aspect) {
    this.aspect = aspect; this.w = Math.round(this.res * Math.max(1, aspect)); this.h = Math.round(this.res / Math.min(1, aspect));
    for (const k of ['v0', 'v1', 'p0', 'p1', 'c', 'd']) { this[k]?.dispose(); this[k] = this.rt(); }
    for (const m of Object.values(this.mats)) m.uniforms.uTexel.value.set(1 / this.w, 1 / this.h);
    this.vel = this.v0; this.velB = this.v1; this.clear();
  }
  clear() {
    const r = this.r, p = r.getRenderTarget(), cc = r.getClearColor(new THREE.Color()), ca = r.getClearAlpha(); r.setClearColor(0x000000, 0);
    for (const k of ['v0', 'v1', 'p0', 'p1', 'c', 'd']) { r.setRenderTarget(this[k]); r.clear(true, false, false); }
    r.setRenderTarget(p); r.setClearColor(cc, ca); this.idle = 99;
  }
  pass(name, target, u) {
    const m = this.mats[name]; for (const k in u) m.uniforms[k].value = u[k];
    this.quad.material = m; this.r.setRenderTarget(target); this.r.render(this.scene, this.cam);
  }
  swap() { const t = this.vel; this.vel = this.velB; this.velB = t; }
  // pt: pointer in uv (0..1, y up); force: uv/s to add; rad: the splat's width (uv², height-normalised)
  splat(pt, force, rad = .0016) { const p = this.r.getRenderTarget(); this.pass('splat', this.velB, { uSrc: this.vel.texture, uPt: pt, uForce: force, uRad: rad, uAspect: this.aspect }); this.swap(); this.r.setRenderTarget(p); this.idle = 0; }
  get live() { return this.idle < 4; }
  step(dt) {
    this.idle += dt;
    if (this.idle > 4) { if (this.idle - dt <= 4) this.clear(); return; }   // gone quiet: one clear, then nothing to do
    const prev = this.r.getRenderTarget();
    this.pass('curl', this.c, { uVel: this.vel.texture });
    this.pass('vort', this.velB, { uVel: this.vel.texture, uCurl: this.c.texture, uDt: dt, uK: 22 }); this.swap();
    this.pass('div', this.d, { uVel: this.vel.texture });
    this.pass('scale', this.p0, { uSrc: this.p1.texture, uK: .8 });
    let a = this.p0, b = this.p1;
    for (let i = 0; i < 18; i++) { this.pass('press', b, { uP: a.texture, uDiv: this.d.texture }); const t = a; a = b; b = t; }
    this.pass('grad', this.velB, { uP: a.texture, uVel: this.vel.texture }); this.swap();
    this.pass('advect', this.velB, { uVel: this.vel.texture, uSrc: this.vel.texture, uDt: dt, uDiss: Math.pow(.38, dt) }); this.swap();
    this.p1 = a; this.p0 = b;
    this.r.setRenderTarget(prev);
  }
  get texture() { return this.vel.texture; }
}
