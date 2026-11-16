import * as THREE from 'three';
import { PT_VERT, PT_FRAG, PT_SPRITE } from './pointstyle.js';
import { IXU, IX_GLSL } from './interact.js';

// Extruded "NUMBERS" in brushed titanium; aligned to the DOM word at hand-off, then pulled apart in depth.
export class Type3D {
  constructor(glyphData, word = 'NUMBERS.') {
    this.group = new THREE.Group();
    // smoked satin faces: rough enough to catch a soft band of the studio env instead of mirroring black
    // brushed titanium: a fine horizontal streak map in roughness (cap UVs are glyph units, about 1 per em)
    const bc = document.createElement('canvas'); bc.width = 256; bc.height = 1024; const bx = bc.getContext('2d'); let bs = 3;
    const br = () => { bs = (bs * 16807) % 2147483647; return bs / 2147483647; };
    bx.fillStyle = 'rgb(0,118,0)'; bx.fillRect(0, 0, 256, 1024);
    for (let i = 0; i < 2600; i++) { const y = br() * 1024, l = 30 + br() * 220, v = 70 + br() * 110 | 0; bx.fillStyle = `rgba(0,${v},0,.5)`; bx.fillRect(br() * 256 - l / 2, y, l, .6 + br() * 1.2); }
    const brush = new THREE.CanvasTexture(bc); brush.wrapS = brush.wrapT = THREE.RepeatWrapping; brush.repeat.set(2.2, 2.2);
    const cap = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.085, .1, .096), metalness: 1, roughness: 1, roughnessMap: brush, clearcoat: .3, clearcoatRoughness: .2, envMapIntensity: 1.35, transparent: true });
    const side = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(.36, .39, .385), metalness: .9, roughness: .34, emissive: new THREE.Color(0, .85, .59), emissiveIntensity: .03, envMapIntensity: 1.1, transparent: true });
    // thin bevel speculars bloom into white blowouts; keep the metal under the threshold (emissive still glows)
    for (const m of [cap, side]) { m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight = min(outgoingLight - totalEmissiveRadiance, vec3(.72)) + totalEmissiveRadiance;\n#include <opaque_fragment>'); }; m.customProgramCacheKey = () => 'mp-type-clamp'; }
    this.mats = [cap, side];
    let x = 0; this.letters = [];
    const capH = glyphData.capHeight;
    for (const ch of word) {
      const gd = glyphData.glyphs[ch];
      const path = new THREE.ShapePath();
      for (const c of gd.cmds) {
        if (c[0] === 'M') path.moveTo(c[1], c[2]); else if (c[0] === 'L') path.lineTo(c[1], c[2]);
        else if (c[0] === 'Q') path.quadraticCurveTo(c[1], c[2], c[3], c[4]); else if (c[0] === 'C') path.bezierCurveTo(c[1], c[2], c[3], c[4], c[5], c[6]);
      }
      // TrueType: outer contours clockwise, counters counter-clockwise (y-up) — isCCW=false keeps B/R counters as holes
      const shapes = path.toShapes(false);
      const geo = new THREE.ExtrudeGeometry(shapes, { depth: .2, bevelEnabled: true, bevelThickness: .03, bevelSize: .02, bevelSegments: 6, curveSegments: 28 });
      geo.translate(-gd.adv / 2, -capH / 2, -.1);
      const m = new THREE.Mesh(geo, this.mats);
      const pivot = new THREE.Group(); pivot.add(m); pivot.userData.x0 = x + gd.adv / 2; pivot.userData.adv = gd.adv;
      this.group.add(pivot); this.letters.push(pivot);
      x += gd.adv - .012;
    }
    this.width = x;
    this.letters.forEach(p => { p.userData.x0 -= x / 2; p.position.x = p.userData.x0; });
    this.capH = capH;
    // fine data dust drifting between the letters, in the page's shared point look (js/gl/pointstyle.js)
    const N = 1400, pos = new Float32Array(N * 3), rnd = new Float32Array(N * 4); let sd = 9;
    const rr = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
    for (let i = 0; i < N; i++) { pos[i * 3] = (rr() - .5) * this.width * 2.2; pos[i * 3 + 1] = (rr() - .5) * 2.4; pos[i * 3 + 2] = rr() * 6 - 1; for (let k = 0; k < 4; k++) rnd[i * 4 + k] = rr(); }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); dg.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 4));
    this.dust = new THREE.Points(dg, new THREE.ShaderMaterial({
      uniforms: { uA: { value: 0 }, uPx: { value: 900 }, uDpr: { value: 1 }, uTime: { value: 0 }, ...IXU }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `attribute vec4 aRnd; uniform float uDpr, uTime; varying float vPx; varying float vK; varying vec3 vCol;
        ${PT_VERT}
        ${IX_GLSL}
        void main(){ vec3 p = position + mpFlow(position * .5, uTime, aRnd.x) * .05; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv;
          float lift; gl_Position = mpInteract(gl_Position, 1., lift);
          float dm = mpSizeCss(aRnd.y, aRnd.w) * uDpr * mpDepth(-mv.z), df = max(dm, 1.5); gl_PointSize = df * ${PT_SPRITE.toFixed(4)}; vPx = gl_PointSize;
          vK = min(1., dm * dm / (df * df)) * mpHot(aRnd.y) * (.78 + .22 * sin(uTime * (1.6 + aRnd.x * 1.6) + aRnd.x * 60.)) * .55 * (1. + lift * 1.4); vCol = mpColor(aRnd.z); }`,
      fragmentShader: `uniform float uA; varying float vPx; varying float vK; varying vec3 vCol;
        ${PT_FRAG}
        void main(){ float a = mpSprite(gl_PointCoord, vPx) * uA * vK; if (a < .003) discard; gl_FragColor = vec4(vCol * a, a); }`
    }));
    this.group.add(this.dust);
    this.group.visible = false;
  }
  // place the word so that, seen from (camPos, camLook), it covers the DOM word rect (px) on screen
  align(camera, rect, vw, vh) {
    camera.updateMatrixWorld();
    const ndc = (x, y) => new THREE.Vector3(x / vw * 2 - 1, -(y / vh) * 2 + 1, .5);
    const dist = 12; // world distance in front of the camera
    const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(dir.clone().negate(), camera.position.clone().add(dir.clone().multiplyScalar(dist)));
    const hit = (x, y) => { const p = ndc(x, y).unproject(camera); const ray = new THREE.Ray(camera.position, p.sub(camera.position).normalize()); const o = new THREE.Vector3(); ray.intersectPlane(plane, o); return o; };
    const l = hit(rect.left, rect.top + rect.height / 2), r = hit(rect.right, rect.top + rect.height / 2);
    const t = hit(rect.left + rect.width / 2, rect.top), b = hit(rect.left + rect.width / 2, rect.bottom);
    const center = hit(rect.left + rect.width / 2, rect.top + rect.height / 2);
    const scaleW = l.distanceTo(r) / this.width;
    this.base = { pos: center, axis: camera.position.clone().add(dir.clone().multiplyScalar(dist)), scale: scaleW, quat: camera.quaternion.clone() };
  }
  update(open, fade) {
    if (!this.base) return;
    this.group.visible = fade > .002;
    const e1 = 1 - Math.pow(1 - Math.min(1, open * 1.7), 3);
    this.group.position.copy(this.base.pos).lerp(this.base.axis, e1); this.group.quaternion.copy(this.base.quat);
    this.group.scale.setScalar(this.base.scale * (1 + e1 * 1.25));
    this.mats.forEach(m => { m.opacity = fade; m.depthWrite = fade > .98; });
    this.dust.material.uniforms.uA.value = fade * .7 * Math.min(1, open * 3); this.dust.position.z = open * 2.5;
    const n = this.letters.length;
    this.letters.forEach((p, i) => {
      const c = i - (n - 1) / 2; const side = Math.sign(c) || 1;
      const e = Math.max(0, (open - .08) / .92); const ee = Math.pow(e, 1.5);
      p.position.x = p.userData.x0 * (1 + ee * 1.9) + side * ee * .5;
      p.position.y = (i % 2 ? 1 : -1) * ee * .36;
      p.position.z = ee * (.6 + (3.5 - Math.abs(c)) * .8 + (i % 3) * 1.05);
      p.rotation.y = -side * ee * (.5 + Math.abs(c) * .08) + c * .05;
      p.rotation.x = (i % 2 ? -1 : 1) * ee * .22 - .34;
    });
  }
}
