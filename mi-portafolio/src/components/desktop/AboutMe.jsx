import './styles/AboutMe.css';
import { CVURL } from '../../constants/constantsUrl';
import { CVICON, MYPHOTO } from '../../constants/constantsSrcImg';
import AboutMeText from "../texts/AboutMeText";
import DesktopButtonLink from './buttons/DesktopButtonLink';

function AboutMe() {
    return(
        <section className="desktop-about-me">
            <figure className='desktop-my-avatar'>
                <img src= {MYPHOTO} alt="my-face" />
            </figure>
            <div className="desktop-text-about-me">
                <AboutMeText/>
                <div className="cv">
                    <DesktopButtonLink
                    link= {CVURL}
                    buttonLinkText= 'Descargar Cv'
                    icon= {CVICON}
                    />
                </div>
            </div>
        </section>
    )
}
export default AboutMe;