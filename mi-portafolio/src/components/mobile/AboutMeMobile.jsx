import MobileContainer from './MobileContainer';
import './styles/mobile_styles.css';

function AboutMeMobile() {
    return(
        <section id='sobreMi' className='about-me-mobile'>
            <figure className='my-avatar'>
                <img src="src/img/mifotoportafolio.jpeg" alt="my-face" />
            </figure>
            <MobileContainer title= 'Acerca de mi'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minus accusamus
                    commodi delectus nemo ducimus perferendis cupiditate mollitia aspernatur magni voluptas,
                    distinctio sapiente molestiae harum ad dolore blanditiis alias repellendus?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minus accusamus
                    commodi delectus nemo ducimus perferendis cupiditate mollitia aspernatur magni voluptas,
                    distinctio sapiente molestiae harum ad dolore blanditiis alias repellendus?
                </p>
            </MobileContainer>
        </section>
    )
}

export default AboutMeMobile;