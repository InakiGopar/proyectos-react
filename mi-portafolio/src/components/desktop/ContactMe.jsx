import './styles/ContactMe.css';
import { EMAILURL, LINKEDINURL } from '../../constants/constantsUrl';
import { CONTACTMESECTIONIMG, EMAILICON, LINKENDINICON } from '../../constants/constantsSrcImg';
import DesktopContainer from './additional-componets/DesktopContainer';
import DesktopButtonLink from './buttons/DesktopButtonLink';


function ContactMe () {
    return(
        <section id='contacto' className='desktop-contact-me'>
            <img src= {CONTACTMESECTIONIMG} alt="contact me image" />
            <DesktopContainer
                title='Contactame'
            >
                <DesktopButtonLink
                    link= {EMAILURL}
                    buttonLinkText= 'tatigop09@gmail.com'
                    icon= {EMAILICON}
                />
                <DesktopButtonLink
                    link= {LINKEDINURL}
                    buttonLinkText= 'Linkedin'
                    icon= {LINKENDINICON}
                />
            </DesktopContainer>
        </section>
    )
}
export default ContactMe;