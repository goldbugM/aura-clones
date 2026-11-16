import * as THREE from 'three';
// Where each chapter's set lives. The camera travels forward (−z) through them.
export const WORLD = {
  hero: new THREE.Vector3(0, 0, 0),
  tunnel: { z0: -1.2, z1: -30, r0: 0.95, r1: 3.9 },
  dash: new THREE.Vector3(0, 0.2, -42),
  globe: new THREE.Vector3(0, 0, -70), globeR: 3.0,
  intel: new THREE.Vector3(0, -2.6, -104),
  letters: new THREE.Vector3(0, 0, -118),
  vault: new THREE.Vector3(0, 0, -158),
  liq: new THREE.Vector3(0, 0, -204),
  final: new THREE.Vector3(0, 0.15, -244),
};
// timeline in "units" (1 unit = one viewport of scroll on desktop)
export const CH = {
  hero: [0, 4], treasury: [4, 7.2], transfer: [7.2, 11], intel: [11, 14.4],
  vault: [14.4, 18.4], liquidity: [18.4, 22], future: [22, 25.5]
};
export const TOTAL = 25.5;
