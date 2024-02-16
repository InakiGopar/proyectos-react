import MobileContainer from './MobileContainer';

function MobileSkills() {
    return(
        <section id='habilidades' className='skills-mobile'>
            <h2>Habilidades</h2>
            <figure className='skills-image'>
                <img src="src/img/skills.webp" alt="skills-section-image" />
            </figure>
            <MobileContainer title= "Frontend">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                </ul>
            </MobileContainer>
            <MobileContainer title= "Backend">
                <ul>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
            </MobileContainer>
            <MobileContainer title= "Otros">
                <ul>
                    <li>Git</li>
                    <li>
                        Libro: Programacion orientada a objetos tecnicas avanzadas de programacion.
                        Autor: Carlos Fontela.
                    </li>
                </ul>
            </MobileContainer>
        </section>
        
    )
}

export default MobileSkills;