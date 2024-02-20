import './styles/Skills.css';
import DesktopContainer from './additional-componets/DesktopContainer';
import FrontendSkills from '../texts/FrontendSkills';
import BackendSkills from '../texts/BackendSkills';
import OtherSkills from '../texts/OtherSkills';
function Skills() {
    return(
        <section className='desktop-skills'>

            <figure className='desktop-skills-image'>
                <img src="src/img/skills.webp" alt="skills-image" />
            </figure>

            <h2>Habilidades</h2>

            <DesktopContainer title= 'Frontend'>
                <FrontendSkills/>
            </DesktopContainer>

            <DesktopContainer title= 'Backend'>
                <BackendSkills/>
            </DesktopContainer>

            <DesktopContainer title= 'Otros'>
                <OtherSkills/>
            </DesktopContainer>

        </section>
    )
}

export default Skills;