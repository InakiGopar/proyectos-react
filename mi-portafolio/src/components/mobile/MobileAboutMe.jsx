import './styles/mobile_styles.css';
import './styles/MobileAboutMe.css';
import AboutMeText from '../texts/AboutMeText';
import MobileContainer from './additional-components/MobileContainer';
import MobileButton from './buttons/MobileButton';

function MobileAboutMe() {
    return(
        <section id='sobreMi' className='about-me-mobile'>
            <figure className='my-avatar'>
                <img src="src/img/mifotoportafolio.jpeg" alt="my-face" />
            </figure>
            <MobileButton
                buttonLinkText= 'Descargar Cv'
                icon= 'src/img/cv.png'
            />
            <MobileContainer title= 'Acerca de mi'>
                <AboutMeText/>
            </MobileContainer>
        </section>
    )
}

export default MobileAboutMe;