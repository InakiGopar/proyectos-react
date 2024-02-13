import { useEffect, useState } from 'react';
import NavMobile from './components/mobile/NavMobile';
import AboutMeMobile from './components/mobile/AboutMeMobile';
import Skils from './components/mobile/Skills';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }
    
    window.addEventListener('resize', handleResize);

    handleResize();

    return ()=> window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <header>
        {isMobile ? <NavMobile/> : <h1>Desktop</h1>}
      </header>
        {isMobile ? <AboutMeMobile/> : <h1>Desktop</h1>}
        {isMobile ? <Skils/> : <h1>Desktop</h1>}
    </main>
  )
}

export default App;
