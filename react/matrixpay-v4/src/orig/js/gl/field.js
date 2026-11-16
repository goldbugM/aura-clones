import * as THREE from 'three';
import { PT_VERT, PT_FRAG, PT_SPRITE } from './pointstyle.js';
import { IXU, IX_GLSL } from './interact.js';

// The particle world between the sections: a field of fine points the camera travels through from the hero to the footer.
// Each point is fixed in world space on a lattice of repeating boxes centred ahead of the camera, so scrolling either way
// finds every point where it was: nothing resets at a chapter boundary, the field only thins or brightens with the
// composition (uA). Points crossing a box edge do so at zero alpha, so the tiling never shows.
export class Field {
  constructor(opts) {
    const N = opts.mobile ? 2600 : 7200; let sd = 77;
    const rr = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    const a = new Float32Array(N * 4); for (let i = 0; i < N * 4; i++) a[i] = rr();
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3)); g.setAttribute('aP', new THREE.BufferAttribute(a, 4));
    this.u = { uTime: { value: 0 }, uA: { value: 0 }, uDpr: { value: 1 }, uBox: { value: new THREE.Vector3(26, 16, 36) }, uCenter: { value: new THREE.Vector3() } };
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({ uniforms: { ...this.u, ...IXU }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec4 aP; uniform vec3 uBox, uCenter; uniform float uTime, uA, uDpr; varying float vPx; varying float vK; varying vec3 vCol;
        ${PT_VERT}
        ${IX_GLSL}
        void main(){
          vec3 b = aP.xyz * uBox;
          b += mpFlow(b * .15, uTime, aP.w) * .35 + vec3(0., uTime * .03 * (.4 + aP.w), 0.);   // a slow drift, mostly upward
          vec3 q = mod(b - uCenter + uBox * .5, uBox) - uBox * .5;                                // the copy nearest the box centre
          vec3 p = uCenter + q;
          vec3 e = abs(q) / uBox; float edge = (1. - smoothstep(.34, .5, e.x)) * (1. - smoothstep(.34, .5, e.y)) * (1. - smoothstep(.34, .5, e.z));
          vec4 mv = viewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
          float lift; gl_Position = mpInteract(gl_Position, 1., lift);
          float z = -mv.z; float vis = smoothstep(1.4, 4., z) * (1. - smoothstep(16., 30., z));
          float r1 = fract(aP.w * 7.31), r2 = fract(aP.w * 13.7);
          float dm = mpSizeCss(r1, r2) * uDpr * mpDepth(z) * .92, df = max(dm, 1.5); gl_PointSize = df * ${PT_SPRITE.toFixed(4)}; vPx = gl_PointSize;
          vK = uA * edge * vis * min(1., dm * dm / (df * df)) * mpHot(r1) * (.72 + .28 * sin(uTime * (1.4 + aP.w * 1.8) + aP.w * 70.)) * .42 * (1. + lift * 1.4);
          vCol = mpColor(fract(aP.w * 31.7)); }`,
      fragmentShader: `varying float vPx; varying float vK; varying vec3 vCol;
        ${PT_FRAG}
        void main(){ float a = mpSprite(gl_PointCoord, vPx) * vK; if (a < .003) discard; gl_FragColor = vec4(vCol * a, a); }` }));
    this.points.frustumCulled = false; this.points.renderOrder = -1;
    this._d = new THREE.Vector3();
  }
  update(camera, t, a) {
    this.u.uTime.value = t; this.u.uA.value = a; this.points.visible = a > .002;
    camera.getWorldDirection(this._d); this.u.uCenter.value.copy(camera.position).addScaledVector(this._d, 13);
  }
}
