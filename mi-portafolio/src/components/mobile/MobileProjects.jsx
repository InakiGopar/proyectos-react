import './styles/MobileProjects.css';
import { PROJECTLINK1, PROJECTLINK2, PROJECTLINK3, PROJECTLINK4 } from '../../constants/constantsUrl';
import { PROJECTIMG1, PROJECTIMG2, PROJECTIMG3, PROJECTIMG4 } from '../../constants/constantsSrcImg';
import MobileContainer from "./additional-components/MobileContainer";
import MobileProject from "./additional-components/MobileProject";
import ProjectDescription1 from '../texts/ProjectsDescription/ProjectDescription1';
import ProjectDescription2 from '../texts/ProjectsDescription/ProjectDescription2';
import ProjectDescription3 from '../texts/ProjectsDescription/ProjectDescription3';
import ProjectDescription4 from '../texts/ProjectsDescription/ProjectDescription4';

function MobileProjects() {

    return(
        <section id="proyectos" className="projects-mobile">

            <h2>Proyectos</h2>
            <MobileContainer title= 'Ahorcado'>
                <MobileProject
                    img= {PROJECTIMG1}
                    description= {<ProjectDescription1/>}
                    projectLink= {PROJECTLINK1}
                />
            </MobileContainer>

            <MobileContainer title= 'The lord of the rings page'>
                <MobileProject
                    img= {PROJECTIMG2}
                    description= {<ProjectDescription2/>}
                    projectLink= {PROJECTLINK2}
                />
            </MobileContainer>

            <MobileContainer title= 'App full stack php'>
                <MobileProject
                    img= {PROJECTIMG3}
                    description= {<ProjectDescription3/>}
                    projectLink= {PROJECTLINK3}
                />
            </MobileContainer>

            <MobileContainer title= 'Api restfull PHP'>
                <MobileProject
                    img= {PROJECTIMG4}
                    description= {<ProjectDescription4/>}
                    projectLink= {PROJECTLINK4}
                />
            </MobileContainer>

        </section>
    )
}

export default MobileProjects;