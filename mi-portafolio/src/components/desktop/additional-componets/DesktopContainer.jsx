import './styles/DesktopContainer.css';

function DesktopContainer({children, title}) {
    return(
        <section className="desktop-container">
            {title && <h4 className='desktop-container-title'>{title}</h4>}
            <article className='desktop-container-content'>
                {children}
            </article>
        </section>
    )
}

export default DesktopContainer;