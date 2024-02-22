import './styles/mobile_styles.css';
import './styles/MobileAboutMe.css';
import { CVURL } from '../../constants/constantsUrl';
import { CVICON, MYPHOTO } from '../../constants/constantsSrcImg';
import AboutMeText from '../texts/AboutMeText';
import MobileContainer from './additional-components/MobileContainer';
import MobileButtonLink from './buttons/MobileButtonLink';

function MobileAboutMe() {
    return(
        <section id='sobreMi' className='about-me-mobile'>
            <figure className='my-avatar'>
                <img src= {MYPHOTO} alt="my-face" />
            </figure>
            <MobileButtonLink
                link= {CVURL}
                buttonLinkText= 'Descargar Cv'
                icon= {CVICON}
            />
            <MobileContainer title= 'Acerca de mi'>
                <AboutMeText/>
            </MobileContainer>
        </section>
    )
}

export default MobileAboutMe;