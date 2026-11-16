import * as THREE from 'three';
import { WORLD } from './world.js';
import { makeCanvas, heightToNormal, rng, sstep, lerp } from './util.js';

export const CCY = [
  { code: 'USD', sym: '$', name: 'United States', rail: 'Fedwire · RTP', settle: 'Instant', rate: 1, vol: '$2.41B', bal: '$412,906' },
  { code: 'EUR', sym: '€', name: 'Eurozone', rail: 'SEPA Instant', settle: 'T+0', rate: .9214, vol: '€1.12B', bal: '€12,907' },
  { code: 'GBP', sym: '£', name: 'United Kingdom', rail: 'Faster Payments', settle: 'Instant', rate: .7861, vol: '£640M', bal: '£48,210' },
  { code: 'JPY', sym: '¥', name: 'Japan', rail: 'Zengin', settle: 'T+0', rate: 151.32, vol: '¥92.4B', bal: '¥3,906,400' },
  { code: 'SGD', sym: 'S$', name: 'Singapore', rail: 'FAST', settle: 'Instant', rate: 1.3194, vol: 'S$880M', bal: 'S$71,450' },
  { code: 'BRL', sym: 'R$', name: 'Brazil', rail: 'PIX', settle: 'Instant', rate: 5.0412, vol: 'R$1.9B', bal: 'R$31,220' },
  { code: 'CHF', sym: 'Fr', name: 'Switzerland', rail: 'SIC', settle: 'T+0', rate: .8823, vol: 'Fr410M', bal: 'Fr22,180' },
  { code: 'INR', sym: '₹', name: 'India', rail: 'UPI · IMPS', settle: 'Instant', rate: 83.41, vol: '₹38.6B', bal: '₹1,204,600' },
];

function coinGeometry(R, T, b) {
  const s = new THREE.Shape(); s.absarc(0, 0, R - b, 0, Math.PI * 2, false);
  const g = new THREE.ExtrudeGeometry(s, { depth: T - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 4, curveSegments: 72 });
  g.center();
  const pos = g.attributes.position, uv = g.attributes.uv; const cap = g.groups[0], side = g.groups[1]; const half = cap.count / 2;
  for (let i = cap.start; i < cap.start + cap.count; i++) { const f = pos.getZ(i) > 0; const u = (pos.getX(i) + R) / (2 * R), v = (pos.getY(i) + R) / (2 * R); uv.setXY(i, f ? u : 1 - u, v); }
  g.clearGroups(); g.addGroup(cap.start + half, half, 0); g.addGroup(cap.start, half, 0); g.addGroup(side.start, side.count, 1);
  return g;
}

function faceTex(c, renderer) {
  const S = 512; const [cc, x] = makeCanvas(S, S); const [hc, h] = makeCanvas(S, S); const [ec, e] = makeCanvas(S, S);
  x.fillStyle = '#121916'; x.fillRect(0, 0, S, S);
  h.fillStyle = 'rgb(110,110,110)'; h.fillRect(0, 0, S, S);
  e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
  const r = rng(c.code.charCodeAt(0) * 7);
  // concentric lathe marks
  for (let i = 0; i < 160; i++) { const rad = r() * S * .5; h.strokeStyle = `rgba(${r() < .5 ? 255 : 0},${r() < .5 ? 255 : 0},${r() < .5 ? 255 : 0},.06)`; h.lineWidth = 1; h.beginPath(); h.arc(S / 2, S / 2, rad, 0, 6.283); h.stroke(); }
  // raised rim ring + beaded dots
  h.lineWidth = 14; h.strokeStyle = 'rgb(220,220,220)'; h.beginPath(); h.arc(S / 2, S / 2, S * .44, 0, 6.283); h.stroke();
  x.lineWidth = 14; x.strokeStyle = '#59625f'; x.beginPath(); x.arc(S / 2, S / 2, S * .44, 0, 6.283); x.stroke();
  for (let i = 0; i < 64; i++) { const a = i / 64 * 6.283; const px = S / 2 + Math.cos(a) * S * .385, py = S / 2 + Math.sin(a) * S * .385; h.fillStyle = 'rgb(200,200,200)'; h.beginPath(); h.arc(px, py, 3.2, 0, 6.283); h.fill(); x.fillStyle = '#3c4542'; x.beginPath(); x.arc(px, py, 3.2, 0, 6.283); x.fill(); }
  // symbol
  const fs = c.sym.length > 1 ? 190 : 250;
  for (const [ctx, st, bl] of [[h, 'rgb(255,255,255)', 4], [x, '#c9d2ce', 0], [e, '#00d996', 0]]) {
    ctx.save(); ctx.font = `600 ${fs}px Archivo, Geist, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; if (bl) ctx.filter = `blur(${bl}px)`;
    if (ctx === e) { ctx.lineWidth = 3; ctx.strokeStyle = st; ctx.strokeText(c.sym, S / 2, S / 2 + 8); } else { ctx.fillStyle = st; ctx.fillText(c.sym, S / 2, S / 2 + 8); }
    ctx.restore();
  }
  x.font = '500 30px "Geist Mono", monospace'; x.textAlign = 'center'; x.fillStyle = '#7d8a85'; x.letterSpacing = '8px'; x.fillText(c.code, S / 2 + 4, S * .78);
  const mk = (cv, srgb) => { const t = new THREE.CanvasTexture(cv); t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t; };
  return { map: mk(cc, true), normal: mk(heightToNormal(h, S, S, 2.4), false), emis: mk(ec, true) };
}

export class Coins {
  constructor(renderer) {
    this.group = new THREE.Group(); this.group.position.copy(WORLD.liq);
    const geo = coinGeometry(.62, .13, .025);
    const rim = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.78, .82, .8), metalness: 1, roughness: .2, envMapIntensity: 1.7 });
    // a hot rim specular blooms into a square block in the bloom mips; keep the metal under the threshold
    rim.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight = min(outgoingLight, vec3(.8));\n#include <opaque_fragment>'); };
    rim.customProgramCacheKey = () => 'mp-coin-rim';
    this.coins = CCY.map((c, i) => {
      const t = faceTex(c, renderer);
      const face = new THREE.MeshPhysicalMaterial({ map: t.map, normalMap: t.normal, metalness: .9, roughness: .38, emissiveMap: t.emis, emissive: new THREE.Color(0, 1, .7), emissiveIntensity: .6, clearcoat: .5, clearcoatRoughness: .3, envMapIntensity: 1.35 });
      const m = new THREE.Mesh(geo, [face, rim]); m.userData = { i, c, face, sel: 0 };
      const holder = new THREE.Group(); holder.add(m); this.group.add(holder);
      return holder;
    });
    // layouts
    const n = CCY.length; const r = rng(77);
    this.A = this.coins.map((_, i) => { const a = Math.PI / 2 - i / n * Math.PI * 2; return new THREE.Vector3(Math.cos(a) * 2.75, Math.sin(a) * 2.75, 0); });
    this.B = this.coins.map((_, i) => new THREE.Vector3(((i % 4) - 1.5) * 1.75, (i < 4 ? .88 : -.95), 0));
    this.C = this.coins.map((_, i) => new THREE.Vector3((r() - .5) * 7.5, (r() - .5) * 4.2, (r() - .5) * 5 - (i === 0 ? -1 : 0)));
    this.C[0].set(0, .1, 1.2);
    // links (dynamic)
    const pairs = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if ((i + j) % 3 !== 2 || i === 0) pairs.push([i, j]);
    this.pairs = pairs; const SEG = 24;
    const P = new Float32Array(pairs.length * SEG * 2 * 3), T = new Float32Array(pairs.length * SEG * 2), PH = new Float32Array(pairs.length * SEG * 2);
    pairs.forEach((p, k) => { for (let s = 0; s < SEG; s++) { const o = (k * SEG + s) * 2; T[o] = s / SEG; T[o + 1] = (s + 1) / SEG; PH[o] = PH[o + 1] = r(); } });
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.BufferAttribute(P, 3)); lg.setAttribute('aT', new THREE.BufferAttribute(T, 1)); lg.setAttribute('aPh', new THREE.BufferAttribute(PH, 1));
    this.linkU = { uA: { value: 0 }, uTime: { value: 0 }, uSel: { value: 0 } };
    this.links = new THREE.LineSegments(lg, new THREE.ShaderMaterial({
      uniforms: this.linkU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'attribute float aT; attribute float aPh; varying float vT; varying float vPh; void main(){ vT=aT; vPh=aPh; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform float uA; uniform float uTime; varying float vT; varying float vPh; void main(){ float x=fract(uTime*.25+vPh); float dx=(vT-x)*12.; float p=exp(-dx*dx); float a=(.2+p*1.0)*uA*smoothstep(0.,.08,vT)*smoothstep(1.,.92,vT); gl_FragColor=vec4(mix(vec3(0.,.85,.59),vec3(.8,1.,.92),p)*a,a); }'
    }));
    this.links.frustumCulled = false; this.group.add(this.links); this.SEG = SEG;
    this.sel = 1; this.hover = -1;
    this.group.visible = false;
    this._v = new THREE.Vector3();
  }
  update(t, vis, phase, converge) {
    this.group.visible = vis > .001; if (!this.group.visible) return;
    const fly = converge * converge; this.group.position.set(WORLD.liq.x, WORLD.liq.y + (WORLD.final.y - WORLD.liq.y) * fly, WORLD.liq.z + (WORLD.final.z - WORLD.liq.z) * fly * .92);
    const ab = sstep(0, 1, phase), bc = sstep(1, 2, phase);
    this.coins.forEach((h, i) => {
      const p = this._v.copy(this.B[i]).lerp(this.A[i], ab).lerp(this.C[i], bc);
      p.y += Math.sin(t * .8 + i * 1.7) * .06;
      const m = h.children[0]; const sel = (i === this.sel ? 1 : 0); m.userData.sel += (sel - m.userData.sel) * .08;
      const hv = i === this.hover ? 1 : 0;
      p.z += m.userData.sel * .9;
      if (p.y > 0) p.y *= 1 - Math.sin(Math.PI * converge) * .5;   // upper coins fly in lower, clear of the nav band
      p.multiplyScalar(1 - converge * .9);
      h.position.copy(p);
      const s = (1 + m.userData.sel * .22 + hv * .08) * (1 - converge * .3) * Math.min(1, vis * 1.4);
      h.scale.setScalar(Math.max(.001, s));
      m.rotation.y = Math.sin(t * .4 + i) * .35 + (1 - ab) * 0 + bc * Math.sin(i * 2.1) * .5 + m.userData.sel * Math.sin(t * .9) * .25;
      m.rotation.x = Math.sin(t * .3 + i * .6) * .12;
      m.userData.face.emissiveIntensity = .75 + (this.boost || 0) + m.userData.sel * 1.0 + hv * .5;
    });
    // links follow coins
    const P = this.links.geometry.attributes.position.array; const S = this.SEG;
    this.pairs.forEach(([i, j], k) => {
      const a = this.coins[i].position, b = this.coins[j].position;
      for (let s = 0; s < S; s++) for (let e = 0; e < 2; e++) {
        const tt = (s + e) / S; const o = ((k * S + s) * 2 + e) * 3; const bow = Math.sin(Math.PI * tt) * .6;
        P[o] = lerp(a.x, b.x, tt); P[o + 1] = lerp(a.y, b.y, tt) + bow * .3; P[o + 2] = lerp(a.z, b.z, tt) - bow * .5 - .15;
      }
    });
    this.links.geometry.attributes.position.needsUpdate = true;
    this.linkU.uA.value = vis * (.62 + bc * .5) * (1 - converge); this.linkU.uTime.value = t;
  }
  pick(raycaster) {
    const hits = raycaster.intersectObjects(this.coins.map(h => h.children[0]), false);
    return hits.length ? hits[0].object.userData.i : -1;
  }
}
