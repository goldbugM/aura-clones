import * as THREE from 'three';
import { LTU, LT_GLSL } from './light.js';

// Architectural hairline grid + hero diagonals, drawn in screen space *behind* every 3D object.
export class BackGrid {
  constructor() {
    this.u = {
      uRes: { value: new THREE.Vector2(1, 1) }, uDpr: { value: 1 }, uGut: { value: 100 }, uGx: { value: 0 }, uA: { value: 1 },
      uH: { value: 0 }, uNav: { value: 76 }, uStats: { value: 100 }, uDraw: { value: 1 }, uHeroA: { value: 1 },
      uGlowS: { value: new THREE.Vector4(0, 0, 1, 0) }, uGlowP: { value: new THREE.Vector2(70, 0) }
    };
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
      uniforms: { ...this.u, ...LTU }, depthTest: false, depthWrite: false, transparent: false, blending: THREE.AdditiveBlending,
      vertexShader: 'void main(){ gl_Position = vec4(position.xy, 0., 1.); }',
      fragmentShader: `
uniform vec2 uRes; uniform float uDpr, uGut, uGx, uA, uH, uNav, uStats, uDraw, uHeroA; uniform vec4 uGlowS; uniform vec2 uGlowP;
${LT_GLSL}
float hair(float d){ return 1. - smoothstep(.0, 1.1, abs(d)); }
float seg(vec2 p, vec2 a, vec2 b, float upto){ vec2 ab = b - a; float t = clamp(dot(p - a, ab) / dot(ab, ab), 0., upto); return length(p - (a + ab * t)); }
void main(){
  vec2 px = gl_FragCoord.xy; px.y = uRes.y - px.y;             // device px, origin top-left
  vec2 css = px / uDpr; vec2 V = uRes / uDpr;
  vec3 c = mpWall(css);   // the page's surface: the hall's linework (js/gl/light.js, arch.js)
  float vf = smoothstep(.0, .12, css.y / V.y) * smoothstep(1., .88, css.y / V.y) * (1. - .9 * lquiet(css));   // the grid steps back under the copy too
  float span = V.x - 2. * uGut;
  for (int k = 0; k <= 6; k++) {
    float x = uGut + span * float(k) / 6. + uGx * (float(k) - 3.);
    c += vec3(.6, 1., .83) * .030 * hair((css.x - x) * uDpr) * vf * uA;
  }
  float hz = hair((css.y - uNav) * uDpr) + hair((css.y - (V.y - uStats)) * uDpr);
  c += vec3(.95, .97, .96) * .02 * hz * smoothstep(0., .2, css.x / V.x) * smoothstep(1., .8, css.x / V.x) * uH;
  // hero diagonals (design space 1440x900, stretched)
  vec2 d = css / V * vec2(1440., 900.); float sx = V.x / 1440. * uDpr;
  float la = hair(seg(d, vec2(-40., 140.), vec2(1480., 520.), uDraw) * sx);
  float lb = hair(seg(d, vec2(-40., 700.), vec2(1480., 170.), uDraw) * sx);
  c += (vec3(0., .85, .59) * .1 * la + vec3(.6, 1., .83) * .055 * lb) * uHeroA;
  // studio backlight hugging the card's top edge (segment in css px), strongest toward the top-right corner
  if (uGlowP.y > 0.) { vec2 ga = uGlowS.xy, gb = uGlowS.zw, gab = gb - ga; float gt = clamp(dot(css - ga, gab) / dot(gab, gab), 0., 1.);
    float gu = dot(css - ga, gab) / dot(gab, gab);                 // unclamped: the glow tapers past the ends as an ellipse
    float gdist = length(css - (ga + gab * gt)) / uGlowP.x, gend = max(gu - 1., 0.) * length(gab) / (uGlowP.x * 2.2);
    c += vec3(.08, .62, .55) * uGlowP.y * exp(-gdist * gdist - gend * gend * 2.) * (.2 + .8 * exp(-(gu - .52) * (gu - .52) * 7.)); }   // a bloom centred left of the card's middle, no plateau
  gl_FragColor = vec4(c, 1.);
}`
    }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = -100;
  }
  resize(w, h, dpr) {
    this.u.uRes.value.set(w * dpr, h * dpr); this.u.uDpr.value = dpr;
    this.u.uGut.value = Math.min(124, Math.max(20, w * .076));
    this.u.uNav.value = w < 760 ? 64 : 76; this.u.uStats.value = Math.max(96, Math.min(138, h * .155));
  }
}
