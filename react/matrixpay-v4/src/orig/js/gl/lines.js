import * as THREE from 'three';
import { IXU, IX_GLSL } from './interact.js';

// Hairline polylines with travelling light pulses. Each polyline gets a phase/speed;
// uHead (>=0) instead drives a single scroll-controlled pulse along polylines flagged as "route".
const VERT = IX_GLSL + `
attribute float aT; attribute float aPh; attribute float aSp; attribute float aRoute;
uniform vec4 uSph;
varying float vT; varying float vPh; varying float vSp; varying float vRoute; varying float vDepth; varying float vNav; varying float vFace;
void main(){ vT=aT; vPh=aPh; vSp=aSp; vRoute=aRoute; vec4 mv = modelViewMatrix*vec4(position,1.);
  vec3 wp = (modelMatrix*vec4(position,1.)).xyz; vFace = uSph.w > 0. ? dot(normalize(wp - uSph.xyz), normalize(cameraPosition - wp)) : 1.; vDepth=-mv.z; gl_Position=projectionMatrix*mv; float lift; gl_Position = mpInteract(gl_Position, 1., lift); vNav = 1. - smoothstep(.62, .8, gl_Position.y / gl_Position.w); }`;
const FRAG = `
uniform float uTime, uAlpha, uPulse, uHead, uRouteA, uBase, uFar; uniform vec3 uColor, uHot; uniform vec4 uEx;
varying float vT; varying float vPh; varying float vSp; varying float vRoute; varying float vDepth; varying float vNav; varying float vFace;
void main(){
  vec2 fc = gl_FragCoord.xy; float ex = step(uEx.x, fc.x) * step(fc.x, uEx.z) * step(uEx.y, fc.y) * step(fc.y, uEx.w);
  float far = (1. - smoothstep(uFar*.55, uFar, vDepth)) * (1. - ex);
  float near = smoothstep(.15, 1.2, vDepth);
  float x = fract(uTime*vSp + vPh);
  float dx = (vT - x)*14.; float p = (dx > 0. ? exp(-dx*dx*2.2) : exp(dx*.55)) * uPulse;   // bright head, fading tail
  float base = uBase;
  float a; vec3 c;
  if (vRoute > .5) {
    float lit = step(vT, uHead);
    float dh = (vT - uHead)*22.; float head = exp(-dh*dh);
    a = (base*.6 + lit*.55 + head*1.6) * uRouteA;
    c = mix(uColor, uHot, head);
  } else { a = base + p; c = mix(uColor, uHot, p*.7); }
  a *= uAlpha * far * near * vNav * smoothstep(.05, .26, vFace);   // arcs lifted past a sphere's horizon fade out
  if (a < .003) discard;
  gl_FragColor = vec4(c*a, a);
}`;

export class FlowLines {
  constructor(polys, opts = {}) {
    const P = [], T = [], PH = [], SP = [], RT = [];
    polys.forEach((poly, pi) => {
      const pts = poly.points || poly; const route = poly.route ? 1 : 0;
      let L = 0; const acc = [0]; for (let i = 1; i < pts.length; i++) { L += pts[i].distanceTo(pts[i - 1]); acc.push(L); }
      const ph = poly.phase ?? Math.random(), sp = poly.speed ?? (.12 + Math.random() * .25);
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        P.push(a.x, a.y, a.z, b.x, b.y, b.z); T.push(acc[i - 1] / L, acc[i] / L); PH.push(ph, ph); SP.push(sp, sp); RT.push(route, route);
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('aT', new THREE.Float32BufferAttribute(T, 1));
    g.setAttribute('aPh', new THREE.Float32BufferAttribute(PH, 1));
    g.setAttribute('aSp', new THREE.Float32BufferAttribute(SP, 1));
    g.setAttribute('aRoute', new THREE.Float32BufferAttribute(RT, 1));
    this.u = {
      uTime: { value: 0 }, uAlpha: { value: 0 }, uPulse: { value: opts.pulse ?? 1 }, uHead: { value: 0 }, uRouteA: { value: 1 },
      uBase: { value: opts.base ?? .12 }, uFar: { value: opts.far ?? 60 },
      uEx: { value: new THREE.Vector4(-1, -1, -1, -1) }, uSph: { value: new THREE.Vector4(0, 0, 0, 0) }, uColor: { value: new THREE.Color(opts.color ?? 0x00d996) }, uHot: { value: new THREE.Color(opts.hot ?? 0xc8ffe8) }
    };
    this.mesh = new THREE.LineSegments(g, new THREE.ShaderMaterial({ uniforms: { ...this.u, ...IXU }, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.mesh.frustumCulled = false;
  }
}

// great-circle arc lifted above a sphere
export function arc(a, b, R, lift = .35, seg = 64) {
  const pts = []; const A = a.clone().normalize(), B = b.clone().normalize();
  const ang = A.angleTo(B);
  for (let i = 0; i <= seg; i++) {
    const t = i / seg; const s = Math.sin(ang);
    const v = A.clone().multiplyScalar(Math.sin((1 - t) * ang) / s).add(B.clone().multiplyScalar(Math.sin(t * ang) / s));
    pts.push(v.multiplyScalar(R * (1 + lift * Math.sin(Math.PI * t) * Math.min(1, ang / 1.2))));
  }
  return pts;
}
