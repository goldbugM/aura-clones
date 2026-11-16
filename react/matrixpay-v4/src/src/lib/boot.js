import gsap from 'gsap';
import Lenis from 'lenis';
import lottie from 'lottie-web';

// The original single-file build ran the site's own modules against window globals
// (CDN gsap/lottie/lenis) and a __VFS of bundled assets. This shim reproduces both
// before the untouched original modules are dynamically imported.
export function initGlobals() {
  window.gsap = gsap;
  window.Lenis = Lenis;
  window.lottie = lottie;
  const base = document.baseURI;
  window.__VFS = new Proxy({}, { get: (_t, k) => new URL(String(k), base).href });
}
