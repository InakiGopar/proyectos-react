
import MobileButtonLink from './MobileButtonLink';
import MobileContainer from './MobileContainer';

function MobileContactMe() {

    return(
        <section id='contacto' className='contactMe'>
            <h2>Contactame</h2>
            <MobileContainer>
                <MobileButtonLink
                    link='mailto:tatigop09@gmail.com?subject=Contactame&body=Contactame'
                    buttonLinkText='Email'
                    icon='src/img/email.webp'
                />
                <MobileButtonLink
                    link = 'https://www.linkedin.com/in/i%C3%B1aki-gopar-45644229a/'
                    buttonLinkText='Linkedin'
                    icon='src/img/linkedin.webp'
                />
            </MobileContainer>
        </section>
    )
}

export default MobileContactMe;