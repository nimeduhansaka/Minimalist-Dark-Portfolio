import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader'; 

function App() {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
    const MIN_LOADER_TIME = 1400;
    const start = performance.now();
    let timeoutId;

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
      timeoutId = window.setTimeout(() => setLoading(false), wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      const onLoad = () => {
        finish();
        window.removeEventListener('load', onLoad);
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }

    return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        {loading && <Preloader />}

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
