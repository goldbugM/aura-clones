import * as THREE from 'three';
import { IXU, IX_GLSL } from './interact.js';
import { WORLD } from './world.js';
import { latLonToVec } from './particles.js';
import { FlowLines, arc } from './lines.js';

export const HUBS = [
  { id: 'nyc', name: 'New York', lat: 40.71, lon: -74.0, role: 'Origin · Ops-Main', vol: '$2.41B', rails: 'Fedwire · RTP · ACH', lat_ms: '8ms' },
  { id: 'lon', name: 'London', lat: 51.5, lon: -0.12, role: 'Routing hub', vol: '$3.08B', rails: 'FPS · CHAPS · SEPA', lat_ms: '11ms' },
  { id: 'sgp', name: 'Singapore', lat: 1.35, lon: 103.82, role: 'Destination · Partner', vol: '$1.62B', rails: 'FAST · MEPS+', lat_ms: '14ms' },
  { id: 'fra', name: 'Frankfurt', lat: 50.11, lon: 8.68, role: 'EU clearing', vol: '$1.94B', rails: 'SEPA Inst · TARGET2', lat_ms: '10ms' },
  { id: 'tyo', name: 'Tokyo', lat: 35.68, lon: 139.69, role: 'APAC liquidity', vol: '$1.37B', rails: 'Zengin · BOJ-NET', lat_ms: '16ms' },
  { id: 'sao', name: 'São Paulo', lat: -23.55, lon: -46.63, role: 'LATAM · PIX', vol: '$0.88B', rails: 'PIX · TED', lat_ms: '19ms' },
  { id: 'dxb', name: 'Dubai', lat: 25.2, lon: 55.27, role: 'MENA corridor', vol: '$0.74B', rails: 'UAEFTS · IPP', lat_ms: '13ms' },
  { id: 'bom', name: 'Mumbai', lat: 19.07, lon: 72.88, role: 'South Asia · UPI', vol: '$0.69B', rails: 'UPI · NEFT · IMPS', lat_ms: '15ms' },
  { id: 'syd', name: 'Sydney', lat: -33.87, lon: 151.2, role: 'Oceania', vol: '$0.52B', rails: 'NPP · BECS', lat_ms: '21ms' },
  { id: 'los', name: 'Lagos', lat: 6.52, lon: 3.38, role: 'West Africa', vol: '$0.31B', rails: 'NIP · RTGS', lat_ms: '22ms' },
  { id: 'tor', name: 'Toronto', lat: 43.65, lon: -79.38, role: 'North America', vol: '$0.83B', rails: 'Lynx · Interac', lat_ms: '9ms' },
  { id: 'mex', name: 'Mexico City', lat: 19.43, lon: -99.13, role: 'LATAM · SPEI', vol: '$0.47B', rails: 'SPEI', lat_ms: '17ms' },
];
// secondary corridors only (nothing else leaves London, so the route reads alone)
const LINKS = [['nyc', 'lon'], ['lon', 'sgp'], ['nyc', 'sao'], ['sgp', 'tyo'], ['tyo', 'syd'], ['sgp', 'syd'], ['nyc', 'tor'], ['nyc', 'mex'], ['mex', 'sao'], ['los', 'sao']];

export class Globe {
  constructor() {
    const R = WORLD.globeR;
    this.group = new THREE.Group(); this.group.position.copy(WORLD.globe);
    this.spin = new THREE.Group(); this.group.add(this.spin);
    // dark glass body — occludes the far hemisphere of land dots
    this.body = new THREE.Mesh(new THREE.SphereGeometry(R * .985, 96, 64), new THREE.MeshPhysicalMaterial({ color: 0x020504, roughness: .6, metalness: 0, envMapIntensity: .08 }));
    this.spin.add(this.body);
    // fresnel atmosphere
    this.atmo = new THREE.Mesh(new THREE.SphereGeometry(R * 1.16, 64, 48), new THREE.ShaderMaterial({
      uniforms: { uA: { value: 1 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide,
      vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'uniform float uA; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(clamp(1.0 - abs(dot(vN, vV)),0.,1.), 2.2); float rim = smoothstep(.0,.9,f); vec3 c = mix(vec3(0.,.85,.59), vec3(.6,1.,.83), f); float a = rim * .32 * uA * smoothstep(1.,.75,f); gl_FragColor = vec4(c*a, a); }'
    }));
    this.group.add(this.atmo);
    // graticule
    const grat = [];
    for (let lat = -60; lat <= 60; lat += 30) { const p = []; for (let lon = -180; lon <= 180; lon += 4) p.push(latLonToVec(lat, lon, R * 1.002)); grat.push({ points: p, speed: 0 }); }
    for (let lon = -180; lon < 180; lon += 30) { const p = []; for (let lat = -90; lat <= 90; lat += 4) p.push(latLonToVec(lat, lon, R * 1.002)); grat.push({ points: p, speed: 0 }); }
    this.grat = new FlowLines(grat, { base: .05, pulse: 0, far: 40, color: 0x00d996 });
    this.spin.add(this.grat.mesh);
    // hubs + arcs
    this.hubs = HUBS.map(h => ({ ...h, local: latLonToVec(h.lat, h.lon, R * 1.01) }));
    const byId = Object.fromEntries(this.hubs.map(h => [h.id, h]));
    const arcs = LINKS.filter(([a, b]) => !((a === 'nyc' && b === 'lon') || (a === 'lon' && b === 'sgp'))).map(([a, b], i) => ({ points: arc(byId[a].local, byId[b].local, R * 1.01, .32), phase: i * .137 % 1, speed: .16 + (i % 5) * .04 }));
    this.arcs = new FlowLines(arcs, { base: .06, pulse: .75, far: 40 });
    for (const l of [this.arcs, this.grat]) l.u.uSph.value.set(WORLD.globe.x, WORLD.globe.y, WORLD.globe.z, 1);
    this.spin.add(this.arcs.mesh);
    // one smooth spline NY -> London -> Singapore (lifted through London, no V-kink)
    const a1 = arc(byId.nyc.local, byId.lon.local, R * 1.012, .14, 80), a2 = arc(byId.lon.local, byId.sgp.local, R * 1.012, .16, 120);
    const route = new THREE.CatmullRomCurve3([...a1.slice(0, 76), ...a2.slice(4)]).getPoints(420);
    // optimal route as a thin glowing tube with a travelling head (2–3 px on screen)
    const curve = new THREE.CatmullRomCurve3(route);
    this.routeU = { uHead: { value: 0 }, uA: { value: 0 }, uTime: { value: 0 }, uEx: { value: new THREE.Vector4(-1, -1, -1, -1) }, uSph: { value: new THREE.Vector4(WORLD.globe.x, WORLD.globe.y, WORLD.globe.z, 1) } };
    this.route = new THREE.Mesh(new THREE.TubeGeometry(curve, 420, .016, 6, false), new THREE.ShaderMaterial({
      uniforms: this.routeU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: 'uniform vec4 uSph; varying vec2 vUv; varying float vFace; void main(){ vUv = uv; vec3 wp = (modelMatrix*vec4(position,1.)).xyz; vFace = dot(normalize(wp - uSph.xyz), normalize(cameraPosition - wp)); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `uniform float uHead, uA, uTime; uniform vec4 uEx; varying vec2 vUv; varying float vFace;
        void main(){ vec2 fc = gl_FragCoord.xy; if (fc.x > uEx.x && fc.x < uEx.z && fc.y > uEx.y && fc.y < uEx.w) discard; float x = vUv.x; float lit = step(x, uHead); float dh = (x - uHead) * 26.; float head = exp(-dh*dh);
          float flow = .5 + .5*sin(x*160. - uTime*6.);
          float rp = fract(uTime * .22); float dr = (x - rp) * 18.; float pulse = step(.999, uHead) * (dr > 0. ? exp(-dr*dr*3.) : exp(dr*.8));
          float plan = (1. - lit) * step(.5, fract(x * 110.)) * .62; float a = (.12 * lit + .02 + plan + lit*(.55 + .25*flow) + head*1.5*(1. - step(.999, uHead)) + pulse*1.4) * uA * smoothstep(.05, .26, vFace);
          vec3 c = mix(vec3(0., .85, .59), vec3(.6, 1., .84), clamp(head + pulse + lit*.2 + (1. - lit)*.85, 0., 1.));   // the planned leg: mint dashes above the land dots
          gl_FragColor = vec4(c*a, a); }`
    }));
    this.spin.add(this.route);
    // hub glows
    const hg = new THREE.BufferGeometry().setFromPoints(this.hubs.map(h => h.local));
    hg.setAttribute('aSel', new THREE.Float32BufferAttribute(this.hubs.map(() => 0), 1));
    this.hubPts = new THREE.Points(hg, new THREE.ShaderMaterial({
      uniforms: { uA: { value: 1 }, uPx: { value: 900 }, uTime: { value: 0 }, ...IXU }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: IX_GLSL + 'attribute float aSel; uniform float uPx; varying float vS; varying float vPx; void main(){ vS=aSel; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; float lift; gl_Position = mpInteract(gl_Position, .35, lift); gl_PointSize = (2.2 + aSel*1.6) * uPx / -mv.z * .05; vPx = gl_PointSize; }',
      // a crisp core and a crisp expanding ring, each with a one-device-pixel anti-aliased edge (no soft halo)
      fragmentShader: 'uniform float uA; uniform float uTime; varying float vS; varying float vPx; void main(){ float d=length(gl_PointCoord-.5)*vPx; float ph=fract(uTime*.6); float core=clamp(max(.1*vPx,1.5)-d+.5,0.,1.); float rr=(.22+.18*ph)*vPx, lw=max(.045*vPx,1.2); float ring=clamp(lw*.5-abs(d-rr)+.5,0.,1.)*(1.-ph); float a=(core*1.4+ring*.8)*uA; if(a<.004) discard; gl_FragColor=vec4(mix(vec3(0.,.85,.59),vec3(.85,1.,.94),core)*a,a); }'
    }));
    this.spin.add(this.hubPts);
    this.drag = 0; this.dragVel = 0;
    this._v = new THREE.Vector3(); this._n = new THREE.Vector3(); this._c = new THREE.Vector3();
  }
  update(t, yaw, tilt, form, routeHead) {
    this.spin.rotation.y = yaw + this.drag;
    this.group.rotation.x = tilt;
    const s = Math.max(.001, form);
    this.body.scale.setScalar(s);
    this.atmo.material.uniforms.uA.value = form;
    this.grat.u.uAlpha.value = form; this.arcs.u.uAlpha.value = form * .9; this.routeU.uA.value = form;
    this.routeU.uHead.value = routeHead; this.routeU.uTime.value = t;
    this.hubPts.material.uniforms.uA.value = form;
    this.hubPts.material.uniforms.uTime.value = t;
    [this.grat, this.arcs].forEach(l => l.u.uTime.value = t);
    this.group.visible = form > .001;
  }
  setExclusion(x0, y0, x1, y1) { for (const v of [this.routeU.uEx.value, this.arcs.u.uEx.value, this.grat.u.uEx.value]) v.set(x0, y0, x1, y1); }
  // screen projection for DOM hotspots; returns [{id,x,y,front}]
  project(camera, w, h) {
    this.group.updateMatrixWorld();
    camera.getWorldPosition(this._c);
    return this.hubs.map(hb => {
      const p = this._v.copy(hb.local).applyMatrix4(this.spin.matrixWorld);
      const n = this._n.copy(p).sub(this.group.position).normalize();
      const toCam = this._c.clone().sub(p).normalize();
      const front = n.dot(toCam);
      p.project(camera);
      return { id: hb.id, x: (p.x * .5 + .5) * w, y: (-p.y * .5 + .5) * h, front };
    });
  }
}
