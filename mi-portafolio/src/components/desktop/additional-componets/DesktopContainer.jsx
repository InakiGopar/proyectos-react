import './styles/DesktopContainer.css';

function DesktopContainer({children, title}) {
    return(
        <section className="desktop-container">
            {title && <h3 className='desktop-container-title'>{title}</h3>}
            <article className='desktop-container-content'>
                {children}
            </article>
        </section>
    )
}

export default DesktopContainer;