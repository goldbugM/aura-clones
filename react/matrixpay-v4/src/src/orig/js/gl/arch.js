import * as THREE from 'three';

// The page's backdrop: the hall's own linework, the intro's wireframe (crease edges of the walls, columns and the
// suspended canopy, the floor's tile grid and its construction guides, the planters, the trees' skeletons), without the
// sculpture or the gate's words. A camera that moves only with the scroll looks at it, so the architecture stays put
// and its perspective shifts a little between sections.
//
// At rest the lines are barely there. The pointer lights the segments near it in a mint white, on the lines only (never
// a disc), with a soft falloff; the light it leaves along its path fades out over about 0.9 s. Touch and reduced motion
// get a quiet, faintly visible version without the light. It renders into its own target, which the background pass
// and the final pass (under the Systems layer and the footer) sample through mpWall (light.js).
const N = 48;                     // the pointer now + up to 47 points of its recent path
const FADE = .9;                  // s: a point of the path is dark again this long after the pointer left it
export const ARU = {
  uTrail: { value: Array.from({ length: N }, () => new THREE.Vector4()) },   // CSS px x, y, strength
  uTrailN: { value: 0 },
  uRv: { value: 170 },            // the reveal's radius (CSS px)
  uRest: { value: .011 },         // the lines at rest
  uGlow: { value: .3 },           // the lit lines
  uDpr: { value: 1 }, uHc: { value: 900 },
  uRestCol: { value: new THREE.Color(.5, .62, .64) }, uCol: { value: new THREE.Color(.8, 1., .91) },
};

export class Arch {
  constructor(renderer, wire, opts) {
    this.r = renderer; this.opts = opts; this.calm = !!(opts.touch || opts.reduced);
    if (this.calm) { ARU.uRest.value = .022; ARU.uGlow.value = 0; }
    this.scene = new THREE.Scene();
    this.cam = new THREE.PerspectiveCamera(32, 1, .1, 200);
    // the intro's lines, plus the suspended canopy as an outline (its housing is bevelled, so its crease edges are too
    // short to survive the intro's filter): the housing's square rim and top, the lattice's frame inside it, and the
    // hangers up to the ceiling
    const src = wire.geometry.attributes.position.array, extra = [];
    const sq = (h, y) => { const c = [[-h, -h], [h, -h], [h, h], [-h, h]]; for (let i = 0; i < 4; i++) { const [x0, z0] = c[i], [x1, z1] = c[(i + 1) % 4]; extra.push(x0, y, z0, x1, y, z1); } };
    sq(3.47, 3.15); sq(3.47, 3.9); sq(3.05, 3.57); sq(2.6, 3.57);
    for (const [x, z] of [[-3.47, -3.47], [3.47, -3.47], [3.47, 3.47], [-3.47, 3.47]]) { extra.push(x, 3.15, z, x, 3.9, z); extra.push(x * .82, 3.9, z * .82, x * .82, 11, z * .82); }
    const geo = new THREE.BufferGeometry(); const all = new Float32Array(src.length + extra.length); all.set(src); all.set(extra, src.length);
    geo.setAttribute('position', new THREE.BufferAttribute(all, 3));
    this.lines = new THREE.LineSegments(geo, new THREE.ShaderMaterial({
      uniforms: ARU, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'varying float vZ; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vZ = -mv.z; gl_Position = projectionMatrix * mv; }',
      fragmentShader: `uniform vec4 uTrail[${N}]; uniform float uTrailN, uRv, uRest, uGlow, uDpr, uHc; uniform vec3 uRestCol, uCol; varying float vZ;
        void main(){
          vec2 css = gl_FragCoord.xy / uDpr; css.y = uHc - css.y;
          float rv = 0.;
          for (int i = 0; i < ${N}; i++) { if (float(i) >= uTrailN) break; vec4 s = uTrail[i]; vec2 d = css - s.xy; rv = max(rv, s.z * exp(-dot(d, d) / (uRv * uRv))); }
          float depth = mix(.35, 1., exp(-vZ * .05));   // nearer structure reads a little stronger
          gl_FragColor = vec4(mix(uRestCol, uCol, rv) * (uRest + uGlow * rv) * depth, 1.); }` }));
    this.lines.frustumCulled = false; this.scene.add(this.lines);
    this.trail = []; this.w = 1; this.h = 1; this._cc = new THREE.Color();
    this.rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: opts.mobile ? 0 : 4, depthBuffer: false });
  }
  resize(w, h, dpr) {
    this.w = w; this.h = h; this.rt.setSize(Math.round(w * dpr), Math.round(h * dpr));
    ARU.uDpr.value = dpr; ARU.uHc.value = h;
    const a = w / h; this.cam.aspect = a; this.cam.fov = a < 1 ? Math.min(58, 32 / Math.pow(a, .65)) : 32; this.cam.updateProjectionMatrix();
  }
  // wallY: how far the page's surface has scrolled (CSS px); light: the cursor's lamp (its eased position and presence);
  // pan: the view's pan with the cursor (CSS px, stage.js), taken as the same lens shift as the scene's
  update(wallY, light, pan) {
    const s = wallY / Math.max(1, this.h), c = this.cam;
    c.projectionMatrix.elements[8] = pan ? -pan.x * 2 / Math.max(1, this.w) : 0; c.projectionMatrix.elements[9] = pan ? pan.y * 2 / Math.max(1, this.h) : 0;
    // a slow, scroll-only path in front of the hall: across, a little up and down, and a little nearer further down the page
    c.position.set(Math.sin(s * .21) * 2.4, -.9 + Math.sin(s * .13 + 1) * .3, 20.5 - (1 - Math.cos(s * .09)) * 1.6);
    c.lookAt(c.position.x * .25, 2.3, 0);
    const U = ARU.uTrail.value, now = performance.now() / 1000;
    if (this.calm || light.kind === 'touch') { ARU.uTrailN.value = 0; this.trail.length = 0; return; }
    const T = this.trail;
    // a new point of the path each time the pointer has moved on by a fraction of the radius
    if (light.inside && light.on > .02) { const p = T[T.length - 1]; if (!p || Math.hypot(light.x - p.x, light.y - p.y) > ARU.uRv.value * .16) T.push({ x: light.x, y: light.y, t: now }); else p.t = now; }
    while (T.length && (now - T[0].t > FADE || T.length > N - 1)) T.shift();
    U[0].set(light.x, light.y, light.inside ? light.on : 0, 0);   // where it is now: lit while it stays
    for (let i = 0; i < T.length; i++) { const age = now - T[i].t, k = Math.min(1, Math.max(0, (age - .12) / (FADE - .12))); U[i + 1].set(T[i].x, T[i].y, 1 - k * k * (3 - 2 * k), 0); }
    ARU.uTrailN.value = 1 + T.length;
  }
  render() {
    const r = this.r, prev = r.getRenderTarget(); r.getClearColor(this._cc); const ca = r.getClearAlpha();
    r.setRenderTarget(this.rt); r.setClearColor(0x000000, 1); r.clear(true, false, false); r.render(this.scene, this.cam);
    r.setRenderTarget(prev); r.setClearColor(this._cc, ca);
  }
}
