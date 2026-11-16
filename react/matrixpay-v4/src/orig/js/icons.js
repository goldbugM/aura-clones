// Lottie icon hosts: <span class="lottie" data-icon="name">. Rest pose = last frame;
// play() replays the one-shot from frame 0 (viewport entry, hover, click). Reduced motion stays static.
export class Icons {
  constructor(reduced) { this.reduced = reduced; this.data = {}; this.anims = new Map(); }
  async load() {
    const hosts = [...document.querySelectorAll('.lottie[data-icon]')];
    const names = [...new Set(hosts.map(e => e.dataset.icon))];
    await Promise.all(names.map(n => fetch(`assets/lottie/${n}.json`).then(r => (r.ok ? r.json() : null)).then(j => { this.data[n] = j; }).catch(() => {})));
    if (!window.lottie) return;
    hosts.forEach(el => {
      const d = this.data[el.dataset.icon]; if (!d) return;
      const a = window.lottie.loadAnimation({ container: el, renderer: 'svg', loop: false, autoplay: false, animationData: JSON.parse(JSON.stringify(d)), rendererSettings: { preserveAspectRatio: 'xMidYMid meet' } });
      a.addEventListener('DOMLoaded', () => a.goToAndStop(a.totalFrames - 1, true));
      el.setAttribute('aria-hidden', 'true');
      this.anims.set(el, a);
    });
  }
  play(el) {
    if (!el) return; const a = this.anims.get(el); if (!a || this.reduced) return;
    if (a.isPaused === false && a.currentFrame < a.totalFrames - 2) return;
    a.goToAndPlay(0, true);
  }
}
