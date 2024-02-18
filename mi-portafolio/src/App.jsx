import { useEffect, useState } from 'react';
import MobileNav from './components/mobile/MobileNav';
import MobileAboutMe from './components/mobile/MobileAboutMe';
import MobileSkills from './components/mobile/MobileSkills';
import MobileProjects from './components/mobile/MobileProjects';
import MobileContactMe from './components/mobile/MobileContactMe';

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
        {isMobile ? <MobileNav/> : <h1>Desktop</h1>}
      </header>
        {isMobile ? <MobileAboutMe/> : <h1>Desktop</h1>}
        {isMobile ? <MobileSkills/> : <h1>Desktop</h1>}
        {isMobile ? <MobileProjects/> : <h1>Desktop</h1>}
        {isMobile ? <MobileContactMe/> : <h1>Desktop</h1>}
    </main>
  )
}

export default App;
