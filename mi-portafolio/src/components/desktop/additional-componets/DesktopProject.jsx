import '../additional-componets/styles/DesktopProject.css'
import DesktopButtonLink from '../buttons/DesktopButtonLink';

function DesktopProject( {img , projectLink} ) {
    return(
        <article>
            <figure className='desktop-project-img'>
                <img src={img} alt="project-image" />
            </figure>
            <div className='desktop-project-details'>
                <p>holaa</p>
                <DesktopButtonLink
                    link={projectLink}
                    buttonLinkText='Github'
                    icon= 'src/img/github.png'
                />
            </div>
        </article>
        
    )
}

export default DesktopProject;