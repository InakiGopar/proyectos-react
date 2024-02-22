import './styles/MobileSkills.css';
import { SKILLSSECTIONIMG } from '../../constants/constantsSrcImg';
import MobileContainer from './additional-components/MobileContainer';
import FrontendSkills from '../texts/FrontendSkills';
import BackendSkills from '../texts/BackendSkills';
import OtherSkills from '../texts/OtherSkills';

function MobileSkills() {
    return(
        <section id='habilidades' className='skills-mobile'>
            <h2>Habilidades</h2>

            <figure className='skills-image'>
                <img src= {SKILLSSECTIONIMG} alt="skills-section-image" />
            </figure>

            <MobileContainer title= "Frontend">
                <FrontendSkills/>
            </MobileContainer>

            <MobileContainer title= "Backend">
                <BackendSkills/>
            </MobileContainer>

            <MobileContainer title= "Otros">
                <OtherSkills/>
            </MobileContainer>
            
        </section>
        
    )
}

export default MobileSkills;