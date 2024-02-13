import { useState } from 'react';
import './styles/mobile_styles.css';


function NavMobile() {

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
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Habilidades</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            
        </header>
    )
}

export default NavMobile