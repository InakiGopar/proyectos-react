import './styles/MobileProjects.css';
import { PROJECTLINK1, PROJECTLINK2, PROJECTLINK3, PROJECTLINK4 } from '../../constants/constantsUrl';
import { PROJECTIMG1, PROJECTIMG2, PROJECTIMG3, PROJECTIMG4 } from '../../constants/constantsSrcImg';
import MobileContainer from "./additional-components/MobileContainer";
import MobileProject from "./additional-components/MobileProject";

function MobileProjects() {

    return(
        <section id="proyectos" className="projects-mobile">

            <h2>Proyectos</h2>
            <MobileContainer title= 'Ahorcado'>
                <MobileProject
                    img= {PROJECTIMG1}
                    description= 'aca va la descripcion del proyecto'
                    projectLink= {PROJECTLINK1}
                />
            </MobileContainer>

            <MobileContainer title= 'The lord of the rings page'>
                <MobileProject
                    img= {PROJECTIMG2}
                    description= 'aca va la descripcion del proyecto'
                    projectLink= {PROJECTLINK2}
                />
            </MobileContainer>

            <MobileContainer title= 'App full stack php'>
                <MobileProject
                    img= {PROJECTIMG3}
                    description= 'aca va la descripcion del proyecto'
                    projectLink= {PROJECTLINK3}
                />
            </MobileContainer>

            <MobileContainer title= 'Api restfull PHP'>
                <MobileProject
                    img= {PROJECTIMG4}
                    description= 'aca va la descripcion del proyecto'
                    projectLink= {PROJECTLINK4}
                />
            </MobileContainer>

        </section>
    )
}

export default MobileProjects;