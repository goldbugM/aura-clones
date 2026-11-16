import { useEffect } from 'react';
import Loader from './components/Loader.jsx';
import GlCanvas from './components/GlCanvas.jsx';
import Grain from './components/Grain.jsx';
import ArchGrid from './components/ArchGrid.jsx';
import VMarquee from './components/VMarquee.jsx';
import Nav from './components/Nav.jsx';
import Menu from './components/Menu.jsx';
import Gate from './components/Gate.jsx';
import Wipe from './components/Wipe.jsx';
import Cursor from './components/Cursor.jsx';
import Toast from './components/Toast.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import AccessDialog from './components/AccessDialog.jsx';

export default function App() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { initGlobals } = await import('./lib/boot.js');
      initGlobals();
      if (!cancelled) await import('./orig/js/main.js');
    })();
    return () => { cancelled = true; };
  }, []);
  return (
    <>
      <Loader />
      <GlCanvas />
      <Grain />
      <ArchGrid />
      <VMarquee />
      <Nav />
      <Menu />
      <Gate />
      <Wipe />
      <Cursor />
      <Toast />
      <Main />
      <Footer />
      <AccessDialog />
    </>
  );
}
