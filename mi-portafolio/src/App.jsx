import { useEffect, useState } from 'react';
import './App.css';
import MobileNav from './components/mobile/MobileNav';
import MobileAboutMe from './components/mobile/MobileAboutMe';
import MobileSkills from './components/mobile/MobileSkills';
import MobileProjects from './components/mobile/MobileProjects';
import MobileContactMe from './components/mobile/MobileContactMe';
import MobileFooter from './components/mobile/MobileFooter';
import Nav from './components/desktop/Nav';
import AboutMe from './components/desktop/AboutMe';
import Skills from './components/desktop/Skills';
import Projects from './components/desktop/Projects';
import ContactMe from './components/desktop/ContactMe';
import Footer from './components/desktop/Footer';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1081);
    }
    
    window.addEventListener('resize', handleResize);

    handleResize();

    return ()=> window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
        {isMobile ? <MobileNav/> : <Nav/>}
        {isMobile ? <MobileAboutMe/> : <AboutMe/>}
        {isMobile ? <MobileSkills/> : <Skills/>}
        {isMobile ? <MobileProjects/> : <Projects/>}
        {isMobile ? <MobileContactMe/> : <ContactMe/> }
        {isMobile ? <MobileFooter/> : <Footer/>}
    </main>
  )
}

export default App;
