// One particle look for the whole page, taken from the hero's light sculpture (js/gl/sculpture.js): small, sharply defined
// points with a faint glow, in cool white, pale mint and a restrained teal, sized by class with a gentle depth cue, and
// moving on a slow, smooth flow. Every particle effect after the hero (the network, the dashboard, the globe, the data
// landscape, the NUMBERS dust, the vault cage, the liquidity ring, the finale, the field between sections) uses these chunks.
export const PT_VERT = /* glsl */`
// cool white 46%, pale mint 40%, restrained teal 14%
vec3 mpColor(float r){ return r < .46 ? vec3(.84, .95, 1.) : (r < .86 ? vec3(.56, 1., .83) : vec3(.09, .6, .54)); }
// a point's core diameter in CSS px: 66% fine, 30% medium, 4% small hot sparkles
float mpSizeCss(float r1, float r2){ return r1 < .66 ? 1.05 + r2 * .65 : (r1 < .96 ? 1.7 + r2 * .75 : 1.2); }
float mpHot(float r1){ return r1 >= .96 ? 2.3 : 1.; }
// sizes stay near-constant on screen (the hero's scale) with a gentle depth cue; never an oversized dot
float mpDepth(float z){ return clamp(sqrt(12.5 / max(z, .1)), .72, 1.55); }
// slow, smooth drift: every particle on the page breathes on the same flow
vec3 mpFlow(vec3 p, float t, float s){ return vec3(sin(t * .31 + p.y * 1.3 + s * 6.28), sin(t * .27 + p.z * 1.1 + s * 4.1), sin(t * .23 + p.x * 1.2 + s * 5.3)); }
`;
// the sprite: a sharp core disc (46% of the sprite's diameter, a one-pixel anti-aliased rim) and a faint halo around it
export const PT_FRAG = /* glsl */`
float mpSprite(vec2 pc, float px){ float d = length(pc - .5) * 2.;
  float core = clamp((.46 - d) * px * .5 + .5, 0., 1.);
  return core + exp(-d * d * 7.) * .2; }
`;
// the sprite is drawn this much larger than the core so the halo has room
export const PT_SPRITE = 1 / .46;
