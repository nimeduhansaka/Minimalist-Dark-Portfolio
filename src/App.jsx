import { useEffect, useState } from 'react';
import Preloader from './components/Preloader'; 
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//     const MIN_LOADER_TIME = 1400;
//     const start = performance.now();
//     let timeoutId;

//     const finish = () => {
//       const elapsed = performance.now() - start;
//       const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
//       timeoutId = window.setTimeout(() => setLoading(false), wait);
//     };

//     if (document.readyState === 'complete') {
//       finish();
//     } else {
//       const onLoad = () => {
//         finish();
//         window.removeEventListener('load', onLoad);
//       };
//       window.addEventListener('load', onLoad);
//       return () => window.removeEventListener('load', onLoad);
//     }

//     return () => clearTimeout(timeoutId);
//     }, []);

  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const MIN_LOADER_TIME = 1200;   // minimum time to show loader 
    const FADE_OUT_TIME = 320;      // must match CSS transition
    const start = performance.now();
    let minTimer, fadeTimer;
    let onLoad;

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
      minTimer = setTimeout(() => {
        setExiting(true); // start CSS fade
        fadeTimer = setTimeout(() => setLoading(false), FADE_OUT_TIME); // unmount after fade
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      onLoad = () => {
        finish();
        window.removeEventListener('load', onLoad);
      };
      window.addEventListener('load', onLoad);
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(fadeTimer);
      if (onLoad) window.removeEventListener('load', onLoad);
    };
  }, []);

  if (loading) {
    return <Preloader hide={exiting} />;
  }


    return (
        <>
        {/* {loading && <Preloader hide={exiting} />} */}

        <div className="bg-black text-white cursor-none">
            <CustomCursor />
            <Header />
            <main>
                <Hero />
                <About />
                <Work />
                <Contact />
            </main>
        </div>
        </>
    );
}

export default App;
