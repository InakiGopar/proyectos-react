import './styles/MobileProject.css';
import { useState } from "react";
import MobileBtnDescription from "../buttons/MobileBtnDescription";
import MobileButton from "../buttons/MobileButton";

function MobileProject({img, description}) {

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
                <MobileButton
                    link= 'https://github.com/InakiGopar/proyectos-react/tree/main/ahorcado'
                    buttonLinkText = 'Github'
                    icon= 'src/img/github.png'
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