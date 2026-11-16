// The animated emerald M (assets/brand/logo-m.lottie, as supplied) in the loader, the nav and the footer: its own `monogram_hover` machine plays the ambient
// glow and switches to focused on hover. The whole logo link drives it (the canvas itself stays out of hit-testing so the
// link behaves as before); reduced motion shows the first frame, still. Each box also holds a static SVG of the same M,
// shown until the animation has drawn, so the mark is never blank while the player loads (or if it can't).
const FILE = 'assets/brand/logo-m.lottie';
const ENTER = '__vd_PointerEnter_m_emerald', EXIT = '__vd_PointerExit_m_emerald';

async function bytes() {
  const r = await fetch(FILE).catch(() => null);
  if (r && r.ok) return r.arrayBuffer();
  const t = await fetch(FILE + '.b64.txt').then(x => { if (!x.ok) throw new Error(`HTTP ${x.status}`); return x.text(); });
  const bin = atob(t.replace(/\s+/g, '')), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u.buffer;
}

export async function mountLogo({ reduced }) {
  const marks = [...document.querySelectorAll('.logo__m canvas')]; if (!marks.length) return [];
  const [{ DotLottie }, data] = await Promise.all([import('../vendor/dotlottie-web/index.js'), bytes()]);
  DotLottie.setWasmUrl(window.__VFS['vendor/dotlottie-web/dotlottie-player.wasm']);
  return marks.map(canvas => {
    const d = new DotLottie({ canvas, data: data.slice(0), autoplay: !reduced, loop: true, ...(reduced ? {} : { stateMachineId: 'monogram_hover' }),
      renderConfig: { autoResize: true, devicePixelRatio: Math.min(2, window.devicePixelRatio || 1) * 1.25, freezeOnOffscreen: true } });
    const box = canvas.parentElement;
    d.addEventListener('load', () => { if (reduced) d.setFrame(0); setTimeout(() => box.classList.add('is-live'), 80); });
    // the loader's M stops for good once the loader has gone
    const ld = canvas.closest('.loader');
    if (ld) new MutationObserver((_, mo) => { if (ld.classList.contains('is-done')) { mo.disconnect(); setTimeout(() => { try { d.destroy(); } catch (e) {} }, 1600); } }).observe(ld, { attributes: true, attributeFilter: ['class'] });
    const link = canvas.closest('a');
    if (link && !reduced) {
      const fire = name => { try { d.stateMachineFireEvent(name); } catch (e) {} };
      link.addEventListener('pointerenter', () => fire(ENTER)); link.addEventListener('pointerleave', () => fire(EXIT));
      link.addEventListener('focus', () => fire(ENTER)); link.addEventListener('blur', () => fire(EXIT));
    }
    return d;
  });
}
