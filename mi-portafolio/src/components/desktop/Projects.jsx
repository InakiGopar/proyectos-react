import './styles/Projects.css';
import DesktopContainer from "./additional-componets/DesktopContainer";
import DesktopProject from './additional-componets/DesktopProject';

function Projects() {
    return(
        <section id="proyectos" className="desktop-projects">
            <h2>Proyectos</h2>
            <div className="projects-container">

                <DesktopContainer title= 'Ahorcado'>
                    <DesktopProject
                        img='src/img/ahorcado-screen.png'
                        projectLink= 'https://github.com/InakiGopar/proyectos-react/tree/main/ahorcado'
                    />
                </DesktopContainer>

                <DesktopContainer title= 'The lord of the rings page'>
                    <DesktopProject
                        img='src/img/the-lord-of-the-rings-page-screen.png'
                        projectLink= 'https://github.com/InakiGopar/the-lord-of-the-rings-page'
                    />
                </DesktopContainer>

                <DesktopContainer title= 'App full stack php'>
                    <DesktopProject
                        img='src/img/app-fullstack-php-screen.png'
                        projectLink='https://github.com/InakiGopar/app-fullstack-php'
                    />
                </DesktopContainer>

                <DesktopContainer title= 'Api restful PHP'>
                    <DesktopProject
                        img='src/img/expressjs.png'
                        projectLink='https://github.com/InakiGopar/api-restful-php'
                    />
                </DesktopContainer>

            </div>
        </section>
    )
}

export default Projects;