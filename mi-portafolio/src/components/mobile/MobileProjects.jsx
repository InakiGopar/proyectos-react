import MobileButtonLink from "./MobileButtonLink";
import MobileContainer from "./MobileContainer";
import MobileImageProject from "./MobileImageProject";

function MobileProjects() {
    return(
        <section id="proyectos" className="projects-mobile">

            <h2>Proyectos</h2>
            <MobileContainer title= 'Ahorcado'>
                <MobileImageProject imgUrl = 'src/img/ahorcado-screen.png'/>
                <MobileButtonLink 
                    link= 'https://github.com/InakiGopar/proyectos-react/tree/main/ahorcado'
                    buttonLinkText = 'Github'
                    icon= 'src/img/github.png'
                />
            </MobileContainer>

            <MobileContainer title= 'The lord of the rings page'>
                <MobileImageProject imgUrl='src/img/the-lord-of-the-rings-page-screen.png' />
                <MobileButtonLink 
                    link= 'https://github.com/InakiGopar/the-lord-of-the-rings-page'
                    buttonLinkText = 'Github'
                    icon= 'src/img/github.png'
                />
            </MobileContainer>

            <MobileContainer title= 'App full stack php'>
                <MobileImageProject imgUrl='src/img/app-fullstack-php-screen.png' />
                <MobileButtonLink 
                    link= 'https://github.com/InakiGopar/app-fullstack-php'
                    buttonLinkText = 'Github'
                    icon= 'src/img/github.png'
                />
            </MobileContainer>

            <MobileContainer title= 'Api restfull ExpressJs'>
                <MobileImageProject imgUrl='src/img/expressjs.png' />
                <MobileButtonLink 
                    link= 'https://github.com/InakiGopar/api-restfull-expressJs'
                    buttonLinkText = 'Github'
                    icon= 'src/img/github.png'
                />
            </MobileContainer>

        </section>
    )
}

export default MobileProjects;