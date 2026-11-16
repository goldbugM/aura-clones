import * as THREE from 'three';
import { WORLD } from './world.js';
import { makeCanvas, rng } from './util.js';
import { FlowLines } from './lines.js';

// brushed-metal roughness texture (radial or linear brushing)
function brushed(radial) {
  const [c, x] = makeCanvas(512, 512); const r = rng(radial ? 3 : 4);
  x.fillStyle = 'rgb(0,90,255)'; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) {
    x.strokeStyle = `rgba(0,${60 + r() * 90},255,.18)`; x.lineWidth = .6 + r() * 1.2; x.beginPath();
    if (radial) { const a = r() * 6.283; x.arc(256, 256, r() * 256, a, a + .2 + r() * .8); }
    else { const y = r() * 512; x.moveTo(0, y); x.lineTo(512, y + (r() - .5) * 4); }
    x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t;
}

function ringProfile(r0, r1, h, grooves) {
  // machined ring cross-section (x = radius, y = height) with stepped lips and grooves
  const p = []; const add = (x, y) => p.push(new THREE.Vector2(x, y));
  const c = .025;
  add(r0, -h / 2 + c); add(r0 + c, -h / 2); add(r1 - c, -h / 2); add(r1, -h / 2 + c);
  add(r1, -h * .18); add(r1 - .05, -h * .14); add(r1 - .05, h * .14); add(r1, h * .18);
  add(r1, h / 2 - c); add(r1 - c, h / 2);
  for (let g = grooves; g >= 0; g--) { const x = r0 + (r1 - r0) * (g / (grooves + 1)) + .02; add(x + .03, h / 2); add(x + .015, h / 2 - .03); add(x, h / 2 - .03); add(x - .015, h / 2); }
  add(r0 + c, h / 2); add(r0, h / 2 - c); add(r0, -h / 2 + c);
  return p;
}

export class Vault {
  constructor() {
    this.group = new THREE.Group(); this.group.position.copy(WORLD.vault);
    const radial = brushed(true), lin = brushed(false);
    // thin metal speculars stay below the bloom threshold (no hot blocks); emissive accents still glow
    const clampSpec = (m) => { m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight = min(outgoingLight - totalEmissiveRadiance, vec3(.7)) + totalEmissiveRadiance;\n#include <opaque_fragment>'); }; m.customProgramCacheKey = () => 'mp-vault-clamp'; return m; };
    this.ti = clampSpec(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.4, .43, .44), metalness: 1, roughness: .46, roughnessMap: lin, anisotropy: .35, envMapIntensity: .95 }));
    this.tiDark = clampSpec(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.08, .09, .09), metalness: 1, roughness: .4, roughnessMap: radial, anisotropy: .3, envMapIntensity: .9 }));
    this.glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, .62, .41), toneMapped: false });
    this.inlayM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, .34, .23), toneMapped: false });
    // iris blades: dark smoked titanium faces, a polished bevel that catches a mint rim
    this.bladeFace = clampSpec(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.24, .265, .26), metalness: 1, roughness: .38, roughnessMap: radial, clearcoat: .5, clearcoatRoughness: .2, envMapIntensity: .85 }));
    this.bladeBevel = clampSpec(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.62, .7, .67), metalness: 1, roughness: .2, emissive: new THREE.Color(0, .16, .11), envMapIntensity: 1.2 }));

    // core
    this.coreU = { uTime: { value: 0 }, uPow: { value: 1 } };
    this.core = new THREE.Mesh(new THREE.IcosahedronGeometry(.82, 5), new THREE.ShaderMaterial({
      uniforms: this.coreU,
      vertexShader: 'uniform float uTime; varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vP=position; vec3 p = position*(1.+.03*sin(uTime*2.+position.y*6.)); vec4 mv=modelViewMatrix*vec4(p,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
      fragmentShader: `uniform float uTime; uniform float uPow; varying vec3 vN; varying vec3 vV; varying vec3 vP;
        float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ float f = clamp(1.-abs(dot(vN,vV)), 0., 1.);
          float bands = sin(vP.y*22. + sin(vP.x*6.+uTime*.8)*2. + uTime*1.2)*.5+.5; bands = smoothstep(.85,1.,bands);
          float cells = smoothstep(.9,1., sin(vP.x*14.+uTime)*sin(vP.y*14.-uTime*.7)*sin(vP.z*14.+uTime*.4)*.5+.5);
          vec3 c = vec3(0.,.09,.065) + vec3(0.,.55,.4)*bands*.55 + vec3(.3,1.,.8)*cells*.5 + vec3(0.,.85,.59)*pow(f,2.2)*1.05 + vec3(.6,1.,.85)*pow(f,6.)*.5;
          gl_FragColor = vec4(c*uPow, 1.); }`,
      toneMapped: false
    }));
    this.core.scale.setScalar(.66);
    this.group.add(this.core);
    // armoured titanium shell (two hemispheres) with an emerald seam; splits open as the core comes online
    const hemi = (top) => { const g = new THREE.SphereGeometry(.86, 96, 48, 0, Math.PI * 2, top ? 0 : Math.PI / 2 + .035, Math.PI / 2 - .035); return new THREE.Mesh(g, this.tiCore); };
    this.tiCore = clampSpec(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.5, .53, .54), metalness: 1, roughness: .44, roughnessMap: radial, clearcoat: .3, clearcoatRoughness: .25, envMapIntensity: 1.0, side: THREE.DoubleSide }));
    this.hTop = hemi(true); this.hBot = hemi(false);
    this.hTop.material = this.tiCore; this.hBot.material = this.tiCore;
    this.armor = new THREE.Group(); this.armor.add(this.hTop, this.hBot);
    // machined latitude grooves (inlaid dark rings)
    for (const lat of [.32, .62, -.32, -.62]) { const r = Math.cos(lat) * .865; const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .009, 6, 160), this.tiDark); ring.rotation.x = Math.PI / 2; ring.position.y = Math.sin(lat) * .865; (lat > 0 ? this.hTop : this.hBot).add(ring); }
    this.seam = new THREE.Mesh(new THREE.TorusGeometry(.862, .012, 8, 200), new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 1.5, 1.0), toneMapped: false }));
    this.seam.rotation.x = Math.PI / 2; this.armor.add(this.seam);
    this.group.add(this.armor);
    const lat = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.15, 2)), new THREE.LineBasicMaterial({ color: new THREE.Color(.25, 1.4, 1.0), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    this.core.add(lat); this.lattice = lat;
    const lat2 = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(.8, 1)), lat.material.clone()); this.core.add(lat2); this.lattice2 = lat2;
    // glass shell
    this.shell = new THREE.Mesh(new THREE.SphereGeometry(1.22, 64, 48), new THREE.MeshPhysicalMaterial({ color: 0x050d0a, metalness: .3, roughness: .05, transparent: true, opacity: .42, clearcoat: 1, clearcoatRoughness: .04, envMapIntensity: 2.2, depthWrite: false }));
    this.group.add(this.shell);
    this.light = new THREE.PointLight(0x00d996, 3, 10, 2); this.group.add(this.light);

    // three gimbal rings
    this.rings = [];
    const specs = [[1.55, 1.92, .22, 3], [2.2, 2.62, .26, 4], [2.9, 3.38, .3, 5]];
    specs.forEach(([r0, r1, h, gr], i) => {
      const geo = new THREE.LatheGeometry(ringProfile(r0, r1, h, gr), 320); geo.computeTangents();
      const m = new THREE.Mesh(geo, i === 1 ? this.tiDark : this.ti);
      const holder = new THREE.Group(); holder.add(m);
      // emissive hairline inlay on each ring
      const inlay = new THREE.Mesh(new THREE.TorusGeometry((r0 + r1) / 2, .011, 8, 320), this.inlayM);
      inlay.rotation.x = Math.PI / 2; inlay.position.y = h / 2 + .002; holder.add(inlay);
      // locking bolts
      const nb = 12 + i * 6;
      const bolts = new THREE.InstancedMesh(new THREE.BoxGeometry(.09, h * .7, .16), this.tiDark, nb);
      const d = new THREE.Object3D();
      for (let b = 0; b < nb; b++) { const a = b / nb * Math.PI * 2; d.position.set(Math.cos(a) * (r1 + .05), 0, Math.sin(a) * (r1 + .05)); d.rotation.y = -a; d.updateMatrix(); bolts.setMatrixAt(b, d.matrix); }
      holder.add(bolts); holder.userData.bolts = bolts; holder.userData.r1 = r1; holder.userData.nb = nb;
      this.group.add(holder); this.rings.push(holder);
    });
    this.rings[0].rotation.x = Math.PI / 2;            // faces camera
    this.rings[1].rotation.z = Math.PI / 2 * .0;

    // iris door: six blades in front of the core
    this.blades = [];
    const n = 6;
    for (let b = 0; b < n; b++) {
      const s = new THREE.Shape(); const a0 = -Math.PI / n - .02, a1 = Math.PI / n + .02, R = 1.5;
      s.moveTo(0, 0); s.absarc(0, 0, R, a0, a1, false); s.lineTo(0, 0);
      const geo = new THREE.ExtrudeGeometry(s, { depth: .07, bevelEnabled: true, bevelThickness: .03, bevelSize: .03, bevelSegments: 4, curveSegments: 48 });
      const m = new THREE.Mesh(geo, [this.bladeFace, this.bladeBevel]);
      m.rotation.x = .2;   // turbine pitch: shows each blade's thickness and lets the bevel catch the rim light
      const piv = new THREE.Group(); piv.add(m); piv.rotation.z = b / n * Math.PI * 2; piv.userData.a = b / n * Math.PI * 2;
      piv.position.z = 1.3; this.group.add(piv); this.blades.push(piv);
      const edge = new THREE.Mesh(new THREE.BoxGeometry(1.5, .008, .01), this.glow); edge.position.set(.75, Math.sin(a1) * 0, .085); edge.rotation.z = a1; m.add(edge);
    }
    // housing ring behind
    const housing = new THREE.Mesh((() => { const g = new THREE.LatheGeometry(ringProfile(3.6, 4.15, .35, 6), 320); g.computeTangents(); return g; })(), this.tiDark);
    housing.rotation.x = Math.PI / 2; housing.position.z = -.6; this.group.add(housing); this.housing = housing;

    // encrypted connections radiating from the core
    const r = rng(41); const polys = [];
    for (let i = 0; i < 64; i++) {
      const d = new THREE.Vector3(r() - .5, r() - .5, r() - .5).normalize();
      const pts = []; for (let k = 0; k <= 16; k++) { const t = k / 16; const p = d.clone().multiplyScalar(.9 + t * 7.5); p.x += Math.sin(t * 6 + i) * .15 * t; p.y += Math.cos(t * 5 + i) * .15 * t; pts.push(p); }
      polys.push({ points: pts, phase: r(), speed: .35 + r() * .5 });
    }
    this.links = new FlowLines(polys, { base: .08, pulse: 1.6, far: 30 });
    this.group.add(this.links.mesh);
    this.group.visible = false;
  }
  update(t, vis, open, spin, coreBoost, links) {
    this.group.visible = vis > .001;
    if (!this.group.visible) return;
    this.coreU.uTime.value = t; this.coreU.uPow.value = .42 + open * .2 + coreBoost * .2;
    const split = Math.max(0, Math.min(1, (coreBoost - .15) / .7));
    this.hTop.position.y = split * .62; this.hBot.position.y = -split * .62;
    this.hTop.rotation.y = split * .9; this.hBot.rotation.y = -split * .9;
    this.armor.scale.setScalar(1 + split * .12);
    this.seam.scale.setScalar(1 + split * .5); this.seam.material.color.setRGB(0, .55 + open * .35, .38 + open * .24);
    this.lattice.material.opacity = split * .32; this.lattice2.material.opacity = split * .2;
    this.lattice.rotation.y = t * .25; this.lattice.rotation.x = t * .11; this.lattice2.rotation.y = -t * .4; this.lattice2.rotation.z = t * .2;
    this.light.intensity = .8 + open * .9 + coreBoost * 1.2;
    const [a, b, c] = this.rings;
    a.rotation.z = spin * 1.6 + t * .05;
    b.rotation.x = spin * 2.4 + Math.PI * .5 + Math.sin(t * .2) * .05; b.rotation.y = spin * .5;
    c.rotation.z = -spin * 1.1 + Math.PI * .5; c.rotation.x = Math.PI / 2 + Math.sin(spin * 2) * .35 * open;
    // gimbal spread as the vault opens
    b.rotation.z = open * .9; c.rotation.y = open * -.7;
    this.blades.forEach((p, i) => {
      const o = open;
      p.rotation.z = p.userData.a + o * .9;
      const dir = p.userData.a + o * .9;
      p.position.x = Math.cos(dir) * o * 1.65; p.position.y = Math.sin(dir) * o * 1.65; p.position.z = 1.3 + o * .25;
      p.scale.setScalar(1 - o * .25);
    });
    this.rings.forEach(h => { h.userData.bolts.position.set(0, 0, 0); h.userData.bolts.scale.setScalar(1 + open * .06); });
    this.links.u.uAlpha.value = links; this.links.u.uTime.value = t;
    this.links.mesh.scale.setScalar(.4 + links * .8);
  }
}
