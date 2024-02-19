import './styles/MobileProjects.css';
import MobileContainer from "./additional-components/MobileContainer";
import MobileProject from "./additional-components/MobileProject";

function MobileProjects() {

    return(
        <section id="proyectos" className="projects-mobile">

            <h2>Proyectos</h2>
            <MobileContainer title= 'Ahorcado'>
                <MobileProject
                    img='src/img/ahorcado-screen.png'
                    description= 'aca va la descripcion del proyecto'
                />
            </MobileContainer>

            <MobileContainer title= 'The lord of the rings page'>
                <MobileProject
                    img='src/img/the-lord-of-the-rings-page-screen.png'
                    description= 'aca va la descripcion del proyecto'
                />
            </MobileContainer>

            <MobileContainer title= 'App full stack php'>
                <MobileProject
                    img= 'src/img/app-fullstack-php-screen.png'
                    description= 'aca va la descripcion del proyecto'
                />
            </MobileContainer>

            <MobileContainer title= 'Api restfull ExpressJs'>
                <MobileProject
                    img='src/img/expressjs.png'
                    description= 'aca va la descripcion del proyecto'
                />
            </MobileContainer>

        </section>
    )
}

export default MobileProjects;