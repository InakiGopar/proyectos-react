import MobileContainer from './MobileContainer';

function Skills() {
    return(
        <section className='skills'>
            <h2>Habilidades</h2>
            <MobileContainer title= "Frontend">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
            </ul>
        </MobileContainer>
        <MobileContainer title= "Backend">
        <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Java</li>
            <li>PHP</li>
        </ul>
    </MobileContainer>
        </section>
        
    )
}

export default Skills;