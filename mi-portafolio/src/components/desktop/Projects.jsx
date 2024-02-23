import './styles/Projects.css';
import { PROJECTLINK1, PROJECTLINK2, PROJECTLINK3, PROJECTLINK4 } from '../../constants/constantsUrl';
import { PROJECTIMG1, PROJECTIMG2, PROJECTIMG3, PROJECTIMG4 } from '../../constants/constantsSrcImg';
import DesktopContainer from "./additional-componets/DesktopContainer";
import DesktopProject from './additional-componets/DesktopProject';
import ProjectDescription1 from '../texts/ProjectsDescription/ProjectDescription1';
import ProjectDescription2 from '../texts/ProjectsDescription/ProjectDescription2';
import ProjectDescription3 from '../texts/ProjectsDescription/ProjectDescription3';
import ProjectDescription4 from '../texts/ProjectsDescription/ProjectDescription4';

function Projects() {
    return(
        <section id="proyectos" className="desktop-projects">
            <h2>Proyectos</h2>
            <div className="projects-container">

                <DesktopContainer title= 'Ahorcado'>
                    <DesktopProject
                        img= {PROJECTIMG1}
                        projectLink= {PROJECTLINK1}
                        description={<ProjectDescription1/>}
                    />
                </DesktopContainer>

                <DesktopContainer title= 'The lord of the rings page'>
                    <DesktopProject
                        img= {PROJECTIMG2}
                        projectLink= {PROJECTLINK2}
                        description={<ProjectDescription2/>}
                    />
                </DesktopContainer>

                <DesktopContainer title= 'App full stack php'>
                    <DesktopProject
                        img= {PROJECTIMG3}
                        projectLink= {PROJECTLINK3}
                        description={<ProjectDescription3/>}
                    />
                </DesktopContainer>

                <DesktopContainer title= 'Api restful PHP'>
                    <DesktopProject
                        img= {PROJECTIMG4}
                        projectLink= {PROJECTLINK4}
                        description={<ProjectDescription4/>}
                    />
                </DesktopContainer>

            </div>
        </section>
    )
}

export default Projects;