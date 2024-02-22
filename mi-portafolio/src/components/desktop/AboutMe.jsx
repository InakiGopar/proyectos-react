import './styles/AboutMe.css';
import AboutMeText from "../texts/AboutMeText";
import DesktopButtonLink from './buttons/DesktopButtonLink';

function AboutMe() {
    return(
        <section className="desktop-about-me">
            <figure className='desktop-my-avatar'>
                <img src="src/img/mifotoportafolio.jpeg" alt="my-face" />
            </figure>
            <div className="desktop-text-about-me">
                <AboutMeText/>
                <div className="cv">
                    <DesktopButtonLink
                    buttonLinkText= 'Descargar Cv'
                    icon='src/img/cv.png'
                    />
                </div>
            </div>
        </section>
    )
}
export default AboutMe;