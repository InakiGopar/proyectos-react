import './styles/Skills.css';
import DesktopContainer from './additional-componets/DesktopContainer';
import FrontendSkills from '../texts/FrontendSkills';
import BackendSkills from '../texts/BackendSkills';
import OtherSkills from '../texts/OtherSkills';
function Skills() {
    return(
        <section id='habilidades' className='desktop-skills'>

            <div className='desktop-skills-top'>
                <h2>Habilidades</h2>
                <figure className='desktop-skills-image'>
                    <img src="src/img/skills.webp" alt="skills-image" />
                </figure>
            </div>
            
            <div className='desktop-skills-down'>
                <DesktopContainer title= 'Frontend'>
                    <FrontendSkills/>
                </DesktopContainer>

                <DesktopContainer title= 'Backend'>
                    <BackendSkills/>
                </DesktopContainer>

                <DesktopContainer title= 'Otros'>
                    <OtherSkills/>
                </DesktopContainer>
            </div>

        </section>
    )
}

export default Skills;