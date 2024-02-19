
import MobileButton from './buttons/MobileButton';
import MobileContainer from './additional-components/MobileContainer';

function MobileContactMe() {

    return(
        <section id='contacto' className='contact-me'>
            <h2>Contactame</h2>
            <figure>
                <img src="src/img/contact-me.png" alt="contact me image" />
            </figure>
            <MobileContainer>
                <p>tatigop09@gmail.com</p>
                <div className='button-container'>
                    <MobileButton
                        link='mailto:tatigop09@gmail.com?subject=Contactame&body=Contactame'
                        buttonLinkText='Email'
                        icon='src/img/email.webp'
                    />
                    <MobileButton
                        link = 'https://www.linkedin.com/in/i%C3%B1aki-gopar-45644229a/'
                        buttonLinkText='Linkedin'
                        icon='src/img/linkedin.webp'
                    />
                </div>
            </MobileContainer>
        </section>
    )
}

export default MobileContactMe;