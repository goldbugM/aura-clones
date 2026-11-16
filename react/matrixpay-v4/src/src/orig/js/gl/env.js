import * as THREE from 'three';

// Studio environment: dark room, a large white softbox (key), emerald strip lights (rims),
// a warm low card for the chip, emerald floor bounce. PMREM-filtered for physically based reflections.
export function buildEnv(renderer, warm = true, emerald = true) {
  const scene = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.SphereGeometry(30, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `varying vec3 vP; void main(){ vec3 d = normalize(vP);
      float up = d.y*.5+.5;
      vec3 c = mix(vec3(.004,.012,.009), vec3(.012,.022,.019), up);
      c += vec3(0.0,.05,.032) * pow(max(0.,-d.y),2.) ;      // emerald floor bounce
      c += vec3(.03,.04,.038) * pow(max(0., d.y),6.);        // ceiling
      gl_FragColor = vec4(c,1.); }`
  }));
  scene.add(room);
  const panel = (w, h, color, pos, look) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(new THREE.Vector3(...look)); scene.add(m); return m;
  };
  // key softbox, top-left front
  panel(14, 7, new THREE.Color(3.2, 3.3, 3.25), [-9, 9, 10], [0, 0, 0]);
  // broad faint fill, front
  if (emerald) panel(30, 6, new THREE.Color(.22, .26, .25), [0, 2, 18], [0, 0, 0]);
  else panel(34, 18, new THREE.Color(.9, .85, .74), [0, 3, 18], [0, 0, 0]);   // the chip env's fill is broad and bright: frontal views mirror it at any idle angle
  // emerald strip lights — right rim, back
  if (emerald) {
    panel(2.6, 24, new THREE.Color(0, 3.6, 2.35), [16, 0, -4], [0, 0, 0]);
    panel(1.0, 18, new THREE.Color(0, 1.5, 1.0), [-14, 2, -10], [0, 0, 0]);
    panel(26, .7, new THREE.Color(0, 1.2, .8), [0, -8, -8], [0, 0, 0]);
  } else panel(2.6, 24, new THREE.Color(1.1, 1.05, .95), [16, 0, -4], [0, 0, 0]);   // the chip's own env: a neutral strip where the emerald one was
  // thin white top strip for crisp edge highlights
  panel(24, .5, new THREE.Color(1.7, 1.7, 1.7), [0, 14, -2], [0, 0, 0]);
  // warm low bounce (gives the chip some gold depth)
  if (warm) panel(10, 3, new THREE.Color(.9, .62, .3), [6, -6, 12], [0, 0, 0]);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.02, .1, 100, { size: 512 });
  pmrem.dispose();
  scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  return rt.texture;
}
