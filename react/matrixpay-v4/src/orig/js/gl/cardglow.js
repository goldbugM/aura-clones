// The supplied card's moving light (assets/brand/card-glow.json, cut from incoming/MatrixPay_Looping_Animation_v1.lottie by
// tools/card/face.py: the ring and its orbiting light, the edge glow, the border pulse and the status icons) plays on black in
// its own worker. The 3D card samples the canvas as its face's emissive map, so the light moves across the lacquer.
// Plays only while the card is on screen; reduced motion holds the first frame.
const FILE = 'assets/brand/card-glow.json';

export class CardGlow {
  constructor({ reduced, width = 640 }) {   // the light is soft: 640 px holds 60 fps at Retina where 1024 px cost a third of the frame rate
    this.reduced = reduced; this.on = !reduced; this.player = null;
    const c = this.canvas = document.createElement('canvas');
    c.width = width; c.height = Math.round(width * 228 / 360);
    c.setAttribute('aria-hidden', 'true');
    Object.assign(c.style, { position: 'fixed', left: '-200vw', top: '0', width: c.width + 'px', height: c.height + 'px', pointerEvents: 'none' });
    document.body.appendChild(c);
  }
  async start() {
    const [{ DotLottieWorker }, data] = await Promise.all([import('../../vendor/dotlottie-web/index.js'), fetch(FILE).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })]);
    DotLottieWorker.setWasmUrl(window.__VFS['vendor/dotlottie-web/dotlottie-player.wasm']);
    return new Promise((resolve, reject) => {
      const p = this.player = new DotLottieWorker({ canvas: this.canvas, data, autoplay: this.on, loop: true, backgroundColor: '#000000', workerId: 'card',
        renderConfig: { autoResize: false, devicePixelRatio: 1, freezeOnOffscreen: false } });
      p.addEventListener('load', () => { if (this.reduced) p.setFrame(0); resolve(this); });
      p.addEventListener('loadError', e => reject(e.error || new Error('card glow failed to load')));
    });
  }
  setActive(on) {
    on = on && !this.reduced;
    if (!this.player || on === this.on) return;
    this.on = on; on ? this.player.play() : this.player.pause();
  }
}
