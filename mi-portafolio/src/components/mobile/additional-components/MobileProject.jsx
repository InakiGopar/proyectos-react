import './styles/MobileProject.css';
import { GITHUBICON } from '../../../constants/constantsSrcImg';
import { useState } from "react";
import MobileBtnDescription from "../buttons/MobileBtnDescription";
import MobileButtonLink from "../buttons/MobileButtonLink";

function MobileProject({img, description, projectLink}) {

    const[seeDescription, setSeeDescription] = useState(false);

    const handleSeeDescription = ()=> {
        setSeeDescription(!seeDescription);
    }

    return(
        <article className="project">
            <figure className= 'mobile-image-project'>
                <img src={img} alt="image project" />
            </figure>
            <div className='project-button-container'>
                <MobileButtonLink
                    link= {projectLink}
                    buttonLinkText = 'Github'
                    icon= {GITHUBICON}
                />
                <MobileBtnDescription
                    seeDescription={handleSeeDescription}
                />
            </div>
            <div className={`${seeDescription ? 'project-description' : 'hidden'}`}>
                {description}
            </div>
        </article>
    )
}

export default MobileProject;