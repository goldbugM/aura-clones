import * as THREE from 'three';

// The hero room's trees (Nov 8; judge r10 change 1). tools/atrium/trees.py splits the baked trees into their wood (kept
// with its baked light; drawn by the room's own shader, atrium.js ENV_F with USE_VC) and their leaves, rebuilt here as
// leaf-cluster cards: each card is a twig carrying 5-9 leaves, cut from an atlas painted at load (paintAtlas), seeded
// from the baked leaves (the same crowns, denser) and lit live from four sources whose reach into the crown was
// precomputed per card (transmittance through the crown's leaf-area density): the sun through the ceiling slot, the room's
// cool ambient, the canopy's mint light and the planter's warm uplights. The inner crown goes near black; only its edges
// catch the light, leaves glow amber from below, and the ones the sun backlights let it through.

const AW = 1024, AH = 512, CELL = 256;   // atlas: 4 x 2 cells

// R: albedo variation (midrib lighter, rim darker), G: shading of each half of the folded blade, B: wood (twig, petioles),
// A: coverage (about 40% of a cell)
export function paintAtlas() {
  const cv = document.createElement('canvas'); cv.width = AW; cv.height = AH;
  const g = cv.getContext('2d'); let s = 913;
  const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const WOOD = 'rgb(118,128,255)';
  for (let cell = 0; cell < 8; cell++) {
    const ox = (cell % 4) * CELL, oy = Math.floor(cell / 4) * CELL;
    g.save(); g.beginPath(); g.rect(ox, oy, CELL, CELL); g.clip(); g.translate(ox, oy);
    // the twig: from the cell's bottom centre (the card's anchor on its branch), curving gently; a side shoot off its middle
    const curve = (bx, by, cx, cy, tx, ty) => ({ pt: t => [(1 - t) * (1 - t) * bx + 2 * (1 - t) * t * cx + t * t * tx, (1 - t) * (1 - t) * by + 2 * (1 - t) * t * cy + t * t * ty] });
    const main = curve(CELL * .5, CELL - 1, CELL * (.5 + (R() - .5) * .3), CELL * .72, CELL * (.5 + (R() - .5) * .22), CELL * (.44 + R() * .08));
    const sideDir = R() < .5 ? -1 : 1, sp = main.pt(.42 + R() * .12);
    const side = curve(sp[0], sp[1], sp[0] + sideDir * CELL * .12, sp[1] - CELL * .06, sp[0] + sideDir * CELL * (.22 + R() * .06), sp[1] - CELL * (.16 + R() * .08));
    const dir = (c, t) => { const a = c.pt(Math.max(0, t - .01)), b = c.pt(Math.min(1, t + .01)); return Math.atan2(b[1] - a[1], b[0] - a[0]); };
    g.lineCap = 'round'; g.strokeStyle = WOOD;
    const stroke = (c, w0, w1) => { for (let k = 0; k < 10; k++) { const a = c.pt(k / 10), b = c.pt((k + 1) / 10); g.lineWidth = w0 + (w1 - w0) * k / 9; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); } };
    stroke(main, 3.6, 1.6); stroke(side, 1.8, 1.1);
    const leaves = [];
    const along = (c, n, t0, k0) => { for (let i = 0; i < n; i++) {
      const last = i === n - 1, t = last ? 1 : t0 + (1 - t0) * .92 * i / (n - 1) + (R() - .5) * .05, sd = last ? 0 : ((i + k0) % 2 ? 1 : -1);
      const L = (64 + R() * 28) * (last ? .95 : .82 + .2 * t);
      leaves.push({ c, t, ang: dir(c, t) + sd * (.55 + R() * .6) + (last ? (R() - .5) * .35 : 0), L, w: L * (.22 + R() * .07), sq: .66 + R() * .34, sh: R(), f: .42 + R() * .45, z: R() }); } };
    along(main, 5 + Math.floor(R() * 3), .16, 0); along(side, 2 + Math.floor(R() * 2), .25, 1);
    leaves.sort((a, b) => a.z - b.z);
    for (const lf of leaves) {
      const [px, py] = lf.c.pt(lf.t), pl = 4 + R() * 5, lx = px + Math.cos(lf.ang) * pl, ly = py + Math.sin(lf.ang) * pl;
      g.strokeStyle = WOOD; g.lineWidth = 1.4; g.beginPath(); g.moveTo(px, py); g.lineTo(lx, ly); g.stroke();
      g.save(); g.translate(lx, ly); g.rotate(lf.ang + Math.PI / 2); g.scale(lf.sq, 1);   // leaf space: base at 0, tip at (0, -L); foreshortened across
      const L = lf.L, w = lf.w;
      const path = () => { g.beginPath(); g.moveTo(0, 0); g.bezierCurveTo(w * 1.4, -L * .06, w * 1.25, -L * .58, 0, -L); g.bezierCurveTo(-w * 1.25, -L * .58, -w * 1.4, -L * .06, 0, 0); g.closePath(); };
      const r = Math.round(255 * (.48 + .5 * lf.sh)), gA = Math.round(255 * lf.f * .72), gB = Math.round(255 * Math.min(1, lf.f * 1.22));
      path(); g.fillStyle = `rgb(${r},${gA},0)`; g.fill();
      g.save(); path(); g.clip(); g.fillStyle = `rgb(${r},${gB},0)`; g.fillRect(0, -L - 2, w * 2, L + 4);   // the far half of the fold
      g.strokeStyle = `rgb(${Math.round(r * .62)},${Math.round((gA + gB) * .4)},0)`; g.lineWidth = 2.2; path(); g.stroke(); g.restore();   // a darker rim
      g.strokeStyle = `rgb(${Math.min(255, r + 50)},${(gA + gB) >> 1},0)`; g.lineWidth = 1.2; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(w * .12, -L * .5, 0, -L * .92); g.stroke();   // the midrib
      g.restore();
    }
    g.restore();
  }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.NoColorSpace; t.premultiplyAlpha = false; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.anisotropy = 4;
  t.canvas = cv; return t;
}

// trees.bin: u32 header length, JSON header, then the arrays it points at (offsets from the end of the header)
export function parseTrees(buf, off) {
  const hl = new DataView(buf).getUint32(0, true), H = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl))), D = 4 + hl;
  const at = (T, o, n) => new T(buf, D + o, n);
  const s2l = new Float32Array(256); for (let i = 0; i < 256; i++) { const v = i / 255; s2l[i] = v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }
  let nv = 0, ni = 0, nc = 0; for (const t of H.trees) { nv += t.wood_v; ni += t.wood_i; nc += t.cards; }
  const wp = new Float32Array(nv * 3), wc = new Float32Array(nv * 3), wi = new Uint32Array(ni);
  const cp = new Float32Array(nc * 3), cn = new Int8Array(nc * 4), ct = new Int8Array(nc * 4), cq = new Uint8Array(nc * 4), ca = new Uint8Array(nc * 4), cb = new Uint8Array(nc * 4);
  const bases = [];
  let v0 = 0, i0 = 0, c0 = 0;
  H.trees.forEach((t, k) => {
    const [dx, dz] = off[k] || [0, 0], o = t.o;
    bases.push(new THREE.Vector3(t.base[0] + dx, t.base[1], t.base[2] + dz));
    const p = at(Float32Array, o.wp, t.wood_v * 3), c = at(Uint8Array, o.wc, t.wood_v * 4), ix = t.idx32 ? at(Uint32Array, o.wi, t.wood_i) : at(Uint16Array, o.wi, t.wood_i);
    for (let i = 0; i < t.wood_v; i++) {
      const j = (v0 + i) * 3; wp[j] = p[i * 3] + dx; wp[j + 1] = p[i * 3 + 1]; wp[j + 2] = p[i * 3 + 2] + dz;
      wc[j] = s2l[c[i * 4]]; wc[j + 1] = s2l[c[i * 4 + 1]]; wc[j + 2] = s2l[c[i * 4 + 2]];
    }
    for (let i = 0; i < t.wood_i; i++) wi[i0 + i] = ix[i] + v0;
    const q = at(Float32Array, o.cp, t.cards * 3);
    for (let i = 0; i < t.cards; i++) { const j = (c0 + i) * 3; cp[j] = q[i * 3] + dx; cp[j + 1] = q[i * 3 + 1]; cp[j + 2] = q[i * 3 + 2] + dz; }
    cn.set(at(Int8Array, o.cn, t.cards * 4), c0 * 4); ct.set(at(Int8Array, o.ct, t.cards * 4), c0 * 4);
    cq.set(at(Uint8Array, o.cq, t.cards * 4), c0 * 4); ca.set(at(Uint8Array, o.ca, t.cards * 4), c0 * 4); cb.set(at(Uint8Array, o.cb, t.cards * 4), c0 * 4);
    v0 += t.wood_v; i0 += t.wood_i; c0 += t.cards;
  });
  const sk = at(Float32Array, H.skel.o, H.skel.n * 6), st = at(Uint8Array, H.skel.t, H.skel.n), skel = [];
  for (let i = 0; i < H.skel.n; i++) { const [dx, dz] = off[st[i]] || [0, 0], a = sk.subarray(i * 6, i * 6 + 6); skel.push([a[0] + dx, a[1], a[2] + dz, a[3] + dx, a[4], a[5] + dz]); }
  return { bases, sides: H.trees.map(t => t.side), wood: { wp, wc, wi }, cards: { n: nc, cp, cn, ct, cq, ca, cb }, skel };
}

export function woodGeometry(T) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(T.wood.wp, 3)); g.setAttribute('color', new THREE.BufferAttribute(T.wood.wc, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(T.wood.wp.length / 3 * 2), 2));
  g.setIndex(new THREE.BufferAttribute(T.wood.wi, 1)); return g;
}

// ctx: { u (the room's uniforms), CLU, DECODE, REVEAL, CL_GLSL, SWAY, SUN_DIR, SKY, SKY_Y }
export function leafMesh(T, ctx) {
  const C = T.cards, base = new THREE.PlaneGeometry(1, 1, 2, 2), g = new THREE.InstancedBufferGeometry();
  g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
  g.setAttribute('iPos', new THREE.InstancedBufferAttribute(C.cp, 3));
  g.setAttribute('iN', new THREE.InstancedBufferAttribute(C.cn, 4, true)); g.setAttribute('iT', new THREE.InstancedBufferAttribute(C.ct, 4, true));
  g.setAttribute('iQ', new THREE.InstancedBufferAttribute(C.cq, 4, false)); g.setAttribute('iA', new THREE.InstancedBufferAttribute(C.ca, 4, true));
  g.setAttribute('iB', new THREE.InstancedBufferAttribute(C.cb, 4, true));
  g.instanceCount = C.n;
  const atlas = paintAtlas();
  const uPl = T.bases.map(b => b.clone());
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...ctx.u, ...ctx.CLU, tAtlas: { value: atlas }, uPl: { value: uPl }, uLeaf: ctx.leafU, uLeaf2: ctx.leafU2, uLeaf3: ctx.leafU3 },
    defines: { SKY: `vec4(${ctx.SKY.map(v => v.toFixed(2)).join(',')})`, SKY_Y: ctx.SKY_Y.toFixed(2), SUN: `vec3(${ctx.SUN_DIR.toArray().map(v => v.toFixed(4)).join(',')})` },
    side: THREE.DoubleSide, alphaToCoverage: true, extensions: { derivatives: true },
    vertexShader: `attribute vec3 iPos; attribute vec4 iN, iT, iQ, iA, iB; uniform float uTime;
      varying vec2 vUv, vAt; varying vec3 vW, vN, vB, vBk; varying vec4 vA; varying float vTint, vTree;
      ${ctx.SWAY}
      void main(){
        vec3 N = normalize(iN.xyz), T = normalize(iT.xyz - N * dot(iT.xyz, N)), B = cross(N, T);
        float s = iQ.x / 255. * .8, ph = iQ.z * .0246;
        // a flutter about the card's base (each card on its own phase), then the tree's sway, taken at the card's anchor so the
        // card rides its twig
        float fl = sin(uTime * (2.1 + iQ.z * .006) + ph) * .09 + sin(uTime * 3.3 + ph * 1.7) * .04;
        vec3 Tf = normalize(T + N * fl), Nf = normalize(N - T * fl);
        vec2 q = position.xy;
        vec3 lp = (B * q.x + Tf * (q.y + .5)) * s - Nf * q.x * q.x * s * .3;   // anchored at its base; its sides curl back a little
        vec3 w = iPos + lp + treeSway(iPos, uTime);
        float col = mod(iQ.y, 4.), row = floor(iQ.y / 4.);
        vUv = vec2((uv.x + col) * .25, (uv.y + 1. - row) * .5); vAt = uv * ${CELL}.;
        vW = w; vN = Nf; vB = B; vA = iA; vBk = iB.rgb; vTint = iQ.z / 255.; vTree = iQ.w;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.); }`,
    fragmentShader: `uniform sampler2D tAtlas; uniform vec3 uPl[4]; uniform float uDim, uExp, uFogD, uTime, uLift; uniform vec3 uFogC, uCool; uniform vec4 uLeaf, uLeaf2, uLeaf3;
      varying vec2 vUv, vAt; varying vec3 vW, vN, vB, vBk; varying vec4 vA; varying float vTint, vTree;
      ${ctx.DECODE}
      ${ctx.REVEAL}
      ${ctx.CL_GLSL}
      void main(){
        float ff = 99., fr = 99.;
        if (uReveal < .999) { ff = fillFront(vW); if (ff < 0.) discard; fr = revealFront(vW) - fbm(vW * 2.3) * .3; }
        vec4 tx = texture2D(tAtlas, vUv);
        // coverage that holds up in the mips (a minified average would thin the crown), sharpened to about a pixel
        // the boost takes the footprint's mean scale, not its long axis: a card at a grazing angle is squashed one way only, and
        // the long-axis lod filled its whole outline in (a solid sliver that the reveal band lit cyan)
        vec2 dx = dFdx(vAt), dy = dFdy(vAt); float lod = clamp(.25 * log2(max(dot(dx, dx) * dot(dy, dy), 1e-12)), 0., 3.);
        float a = tx.a * (1. + lod * .3); a = clamp((a - .5) / max(fwidth(a), 1e-4) + .5, 0., 1.);
        vec3 V = normalize(cameraPosition - vW), N = normalize(vN); float nv = dot(N, V); if (nv < 0.) N = -N;
        a *= smoothstep(.1, .34, abs(nv));   // a card seen edge-on is a streak, not leaves: let it go
        if (a < .02) discard;
        N = normalize(N + vB * (tx.g - .55) * .9);   // the fold: each half of the blade leans its own way
        if (fr < 0.) { vec3 cf = fillShade(vW, N, ff) * (.75 + .5 * tx.r); float df = length(vW - cameraPosition); cf = mix(cf, uFogC, 1. - exp(-df * uFogD * .7)); gl_FragColor = vec4(cf * uDim, a); return; }
        float wood = step(.5, tx.b);
        // albedo: leaf green, each leaf and card its own shade; olive or blue-green per card; then deepened and greyed (uLeaf3.x gain,
        // .y saturation) so a crown reads as dark foliage with lit edges, not bright cut-outs
        vec3 alb = vec3(.032, .084, .022) * (.55 + .7 * tx.r) * (.78 + .44 * fract(vTint * 7.31));
        alb = mix(alb, alb * vec3(1.35, 1.02, .55), smoothstep(.62, 1., vTint) * .8);
        alb = mix(alb, alb * vec3(.7, 1., 1.45), (1. - smoothstep(0., .3, vTint)) * .7);
        alb = mix(vec3(dot(alb, vec3(.3, .59, .11))), alb, uLeaf3.y) * uLeaf3.x;
        alb = mix(alb, vec3(.05, .04, .032), wood);
        float tSun = vA.x, tAmb = vA.y, tCen = vA.z, tDown = vA.w;
        vec3 c = vec3(0.);
        // the room's cool ambient, deep in the crown almost nothing
        float ao = pow(tAmb, uLeaf2.y);
        c += alb * vec3(.42, .55, .7) * uLeaf.x * ao;
        // the room's own bake at this spot (Cycles, through the old sparse crown): its sun dapples, uplights and sculpture light,
        // re-shaded by the new crown's depth
        c += decodeL(vBk) * 2.3 * (alb / vec3(.04, .115, .03)) * uLeaf2.x * mix(.1, 1., ao);
        // the sun, through the ceiling slot: a soft-edged test of where this point looks back up the shaft
        { float t = (SKY_Y - vW.y) / -SUN.y; vec2 h = vW.xz - SUN.xz * t;
          float inS = smoothstep(SKY.x - .5, SKY.x + .5, h.x) * smoothstep(SKY.y + .5, SKY.y - .5, h.x) * smoothstep(SKY.z - .5, SKY.z + .5, h.y) * smoothstep(SKY.w + .5, SKY.w - .5, h.y);
          vec3 Ls = -SUN; float nl = dot(N, Ls);
          float back = max(-nl, 0.) * (.35 + .65 * pow(max(dot(-V, Ls), 0.), 3.));   // lit from behind: it lets the light through
          c += vec3(.66, .82, 1.) * uLeaf.y * inS * tSun * (alb * max(nl, 0.) + alb * vec3(1.25, 1.4, .65) * back * uLeaf2.z * (1. - wood)); }
        // the planter's warm uplights (2700 K): the crown glows amber from below, fading up the tree
        { int k = int(vTree + .5); vec3 P = uPl[0]; if (k == 1) P = uPl[1]; if (k == 2) P = uPl[2]; if (k == 3) P = uPl[3];
          vec3 L = P + vec3(0., .1, 0.) - vW; float d2 = dot(L, L); L *= inversesqrt(d2); float nl = dot(N, L);
          float lit = max(nl, 0.) + max(-nl, 0.) * uLeaf2.z * (1. - wood);
          c += vec3(1., .6, .3) * uLeaf.z * tDown * lit * alb * mix(vec3(1.), vec3(1.2, 1.3, .7), step(nl, 0.)) / (1. + d2 * .35); }
        // the canopy overhead: the crown's top and the leaves that face up and in catch it (uLeaf3.z); its skirt and the leaves
        // turned away fall dark. Open sky above and toward the room's centre: the sun and canopy transmittances together
        { vec3 L = normalize(normalize(vec3(-vW.x, 0., -vW.z)) * .55 + vec3(0., 1., 0.)); float nl = dot(N, L);   // from above, leaning 30 degrees in
          float top = smoothstep(.3, 3.8, vW.y);   // cards run y 0.3 to 3.8 (5-95%)
          float occ = pow(max(tSun * tCen, 1e-4), uLeaf3.w);   // .w sharpens it: the deeper in the crown, the faster it falls
          c += vec3(.62, .9, .86) * uLeaf3.z * occ * (max(nl, 0.) + max(-nl, 0.) * uLeaf2.z * (1. - wood)) * (.3 + .7 * top) * alb; }
        // the canopy's mint rim: only the edges turning away from view, on the side that faces the room's centre
        { vec3 L = vec3(0., 1.6, 0.) - vW; float d2 = dot(L, L); L *= inversesqrt(d2); float nl = dot(N, L);
          float rim = pow(1. - abs(dot(N, V)), 3.);
          c += vec3(.5, 1., .8) * uLeaf.w * tCen * max(nl, 0.) * rim * alb * 60. / (6. + d2); }
        c *= uExp * uLeaf2.w;
        c += mpRoomLight(vW, alb, .06, 10., .55) * (.25 + .75 * tAmb);   // the cursor's lamp, held off the inner crown
        c += uCool * uLift * (1. - smoothstep(0., .08, dot(c, vec3(.3, .59, .11))));
        float d = length(vW - cameraPosition), hz = exp(-max(vW.y + 2.9, 0.) * .085), f = 1. - exp(-d * uFogD * (.55 + hz * .9));
        c = mix(c, uFogC, f); c *= uDim;
        if (uReveal < .999) { float band = (1. - smoothstep(0., .3, fr)) * smoothstep(5., 11., length(vW - cameraPosition)); c *= smoothstep(0., 3.6, fr) * .85 + .15 * step(.13, fr);
          c += mix(vec3(0., .85, .59), vec3(.75, 1., .9), band * band * .5) * band * band * .08; }   // a trace only: a lone leaf in the band glowed as a solid cyan blob
        gl_FragColor = vec4(c, a); }`,
  });
  const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.matrixAutoUpdate = false;
  return m;
}

// the planters' uplight fixtures (room.py: three 2700 K spots on each planter's soil, two in front and one behind): small warm
// glows just over the rim, so a planter reads as lit from inside. Only for trees standing where they were baked (their planters).
export function fixtureMesh(T, u, moved) {
  const p = [];
  T.bases.forEach((b, k) => { if (moved[k]) return; for (const [dx, dz] of [[-.9, .9], [.9, .9], [0, -1]]) p.push(b.x + dx, b.y + .07, b.z + dz); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(p), 3));
  const m = new THREE.Points(g, new THREE.ShaderMaterial({
    uniforms: { uDim: u.uDim, uReveal: u.uReveal, uFix: { value: 1 }, uPx: { value: 900 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `uniform float uPx; varying float vK; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv;
      gl_PointSize = clamp(uPx * .65 / -mv.z, 3., 48.); vK = clamp(14. / -mv.z, 0., 1.); }`,
    fragmentShader: `uniform float uDim, uReveal, uFix; varying float vK; void main(){ vec2 c = gl_PointCoord - .5; float r2 = dot(c, c) * 4.;
      float a = exp(-r2 * 30.) * 1.7 + exp(-r2 * 5.) * .14; if (a < .004) discard;
      gl_FragColor = vec4(vec3(1., .62, .34) * a * uFix * uDim * smoothstep(.8, .97, uReveal), 1.); }`,
  }));
  m.frustumCulled = false; m.matrixAutoUpdate = false; return m;
}
