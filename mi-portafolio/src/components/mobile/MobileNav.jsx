import './styles/MobileNav.css';
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
                        <img src="src\img/hamburger-icon.png" alt="hamburger-icon" />
                    </figure>
                </div>
            </div> 
            <div className = "down">
            <ul className= {`menu ${menuClass}`}>
                    <li><a href="#sobreMi" onClick={handleToggleMenu}>Sobre mi</a></li>
                    <li><a href="#habilidades" onClick={handleToggleMenu}>Habilidades</a></li>
                    <li><a href="#proyectos" onClick={handleToggleMenu}>Proyectos</a></li>
                    <li><a href="#contacto" onClick={handleToggleMenu}>Contacto</a></li>
                </ul>
            </div>
            
        </header>
    )
}

export default MobileNav;