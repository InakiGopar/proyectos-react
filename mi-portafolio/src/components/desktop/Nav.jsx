import './styles/Nav.css';

function Nav() {
    return(
        <header className='desktop-header'>
            <div className='desktop-name'>
                <h1>Iñaki gopar</h1>
            </div>
            <nav className='desktop-nav'>
                <ul>
                    <li><a className='desktop-link' href="#sobreMi">Sobre mi</a></li>
                    <li><a className='desktop-link' href="#habilidades">Habilidades</a></li>
                    <li><a className='desktop-link' href="#proyectos">Proyectos</a></li>
                    <li><a className='desktop-link' href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;