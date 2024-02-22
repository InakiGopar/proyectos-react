import './styles/MobileNav.css';
import { HAMBURGERICON } from '../../constants/constantsSrcImg';
import { useState } from 'react';

function MobileNav() {

    const [clickedMenu, setClickedMenu] = useState(false);

    const handleToggleMenu = ()=> {
        setClickedMenu(!clickedMenu);
    }
    const menuClass = clickedMenu ? 'open' : 'close';
    
    return(
        <header className="mobile-header">
            <div className="top">
                <div className="name">
                    <h1>Iñaki gopar</h1>
                </div>
                <div className="toggle-button">
                    <figure className='hamburger-icon' onClick={handleToggleMenu}>
                        <img src= {HAMBURGERICON} alt="hamburger-icon" />
                    </figure>
                </div>
            </div> 
            <nav className = "down">
                <ul className= {`menu ${menuClass}`}>
                    <li><a href="#sobreMi" onClick={handleToggleMenu}>Sobre mi</a></li>
                    <li><a href="#habilidades" onClick={handleToggleMenu}>Habilidades</a></li>
                    <li><a href="#proyectos" onClick={handleToggleMenu}>Proyectos</a></li>
                    <li><a href="#contacto" onClick={handleToggleMenu}>Contacto</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default MobileNav;